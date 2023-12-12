class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.sizeCount = 0;
  }

  size() {
    return this.sizeCount; 
  }

  isEmpty() {
    return this.head === null;
  }

  push(x) {
    let temp = new Node(x);
    temp.next = this.head;
    this.head = temp;
    this.sizeCount += 1;
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    let res = this.head.data;
    this.head = this.head.next;
    this.sizeCount -= 1;
    return res;
  }

  peek() {
    if (this.head === null) {
      return null;
    }
    return this.head.data;
  }
}

// Example usage:
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Size:", stack.size()); // Output: 3
console.log("Top element:", stack.peek()); // Output: 3

console.log("Popped element:", stack.pop()); // Output: 3

console.log("Size after pop:", stack.size()); // Output: 2
