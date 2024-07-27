// function arrayWithPreLocation(n) {
//   let arr = new Array(1000).fill(0);

//   for (let i = 0; i < n.length; i++) {
//     arr[i] = i;
//   }
//   return n;
// }
// let num = [1, 2, 3, 4, 5];

// console.log(arrayWithPreLocation(num));

class ResourcePoolMember {
  constructor(data) {
    this.data = data;
    this.available = true;
    this.time = 0; // Used for duration-based release
  }
}

class ResourcePool {
  constructor(
    creatorFunc,
    resetFunc = (obj) => obj,
    initialSize = 10,
    duration = 3000
  ) {
    this.creatorFunc = creatorFunc;
    this.resetFunc = resetFunc;
    this.poolArray = new Array(initialSize)
      .fill(0)
      .map(() => this.createElement());
    this.duration = duration; // Duration in milliseconds
  }

  // Create a new ResourcePoolMember instance
  createElement() {
    const data = this.resetFunc(this.creatorFunc());
    return new ResourcePoolMember(data);
  }

  // Acquire a resource from the pool
  getElement() {
    const now = Date.now();
    for (const member of this.poolArray) {
      if (member.available || now - member.time > this.duration) {
        member.available = false;
        member.time = now; // Update time for duration-based release
        return member;
      }
    }
    // If no available resource, create a new one
    const newMember = this.createElement();
    newMember.available = false;
    newMember.time = now;
    this.poolArray.push(newMember);
    return newMember;
  }

  // Release a resource back to the pool
  releaseElement(element) {
    element.available = true;
    element.time = 0; // Reset time
    this.resetFunc(element.data);
  }

  // Get current pool size
  getSize() {
    return this.poolArray.length;
  }

  // Get count of available resources
  getAvailableCount() {
    return this.poolArray.filter((member) => member.available).length;
  }

  // Get count of resources currently in use
  getInUseCount() {
    return this.poolArray.filter((member) => !member.available).length;
  }

  // Increase pool size dynamically
  increasePoolSize(newSize) {
    const currentSize = this.getSize();
    if (newSize > currentSize) {
      for (let i = 0; i < newSize - currentSize; i++) {
        this.poolArray.push(this.createElement());
      }
    }
  }
}

// Example usage
const creatorFunc = () => ({ counter: 0 });
const resetFunc = (obj) => {
  obj.counter = 0;
  return obj;
};

const pool = new ResourcePool(creatorFunc, resetFunc, 5);

const obj1 = pool.getElement();
const obj2 = pool.getElement();

console.log("In use:", pool.getInUseCount()); // Output: 2
console.log("Available:", pool.getAvailableCount()); // Output: 3

obj1.data.counter++;
pool.releaseElement(obj1);

console.log("In use:", pool.getInUseCount()); // Output: 1
console.log("Available:", pool.getAvailableCount()); // Output: 4

setTimeout(() => {
  const obj3 = pool.getElement();
  console.log(obj3 === obj1); // true, same object is reused
}, 3500);

// Dynamically increase pool size
pool.increasePoolSize(10);
console.log("New pool size:", pool.getSize()); // Output: 10
