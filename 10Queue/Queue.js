class Queue {
  constructor() {
    this.arr = [];
  }

  enQueue(x) {
    this.arr.push(x);
  }

  deQueue() {
    return this.arr.shift();
  }

  size() {
    return this.arr.length;
  }

  getFront() {
    return this.arr.length > 0 ? this.arr[0] : null;
  }

  getRear() {
    return this.arr.length > 0 ? this.arr[this.arr.length - 1] : null;
  }
  isEmpty() {
    return this.arr.length === 0;
  }
}

let q = new Queue();
q.enQueue(10);
q.enQueue(20);
q.deQueue();
q.deQueue();
q.enQueue(30);
q.enQueue(40);
q.enQueue(50);

console.log("Queue Front : " + q.getFront());
console.log("Queue Rear : " + q.getRear());
