class Queue {
  constructor() {
    this.m = {};
    this.front = -1;
    this.rear = -1;
  }

  enQueue(x) {
    this.rear++;
    this.m[this.rear] = x;
    if (this.front === -1) {
      this.front++;
    }
  }

  deQueue() {
    if (this.front === -1) {
      return null;
    }
    let res = this.m[this.front];
    delete this.m[this.front];
    this.front++;
    if (this.front > this.rear) {
      this.front = this.rear = -1;
    }
    return res;
  }

  size() {
    return this.rear - this.front + 1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getFront() {
    return this.front !== -1 ? this.m[this.front] : null;
  }

  getRear() {
    return this.rear !== -1 ? this.m[this.rear] : null;
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
