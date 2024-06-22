class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(x) {
    this.stack1.push(x);
  }

  pop() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  top() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}
let queue = new Queue();
queue.push(1); // queue is [1]
queue.push(2); // queue is [1, 2]
console.log(queue.top()); // return 1
console.log(queue.pop()); // return 1, queue is [2]
console.log(queue.empty()); // return false
