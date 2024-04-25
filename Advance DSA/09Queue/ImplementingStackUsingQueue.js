class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.size = 0;

    this.rear = capacity - 1;
    this.array = [];
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(item) {
    if (this.isFull()) return;
    this.rear = (this.rear + 1) % this.capacity;
    this.array[this.rear] = item;
    this.size = this.size + 1;
  }

  pop() {
    if (this.isEmpty()) return -1e9;
    let item = this.array[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size = this.size - 1;
    return item;
  }

  frontEle() {
    if (this.isEmpty()) return -1e9;
    return this.array[this.front];
  }

  rearEle() {
    if (this.isEmpty()) return -1e9;
    return this.array[this.rear];
  }
}

class Stack {
  constructor() {
    this.q1 = new Queue(100000);
    this.q2 = new Queue(100000);
    this.curr_size = 0;
  }

  push(x) {
    this.curr_size++;

    this.q2.push(x);

    while (!this.q1.isEmpty()) {
      this.q2.push(this.q1.frontEle());
      this.q1.pop();
    }

    [this.q1, this.q2] = [this.q2, this.q1];
  }

  pop() {
    // if no elements are there in q1
    if (this.q1.isEmpty()) return;
    this.q1.pop();
    this.curr_size--;
  }

  top() {
    if (this.q1.isEmpty()) return -1;
    return this.q1.frontEle();
  }

  size() {
    return this.curr_size;
  }
}

let s = new Stack();
s.push(10);
s.push(5);
s.push(15);
s.push(20);

console.log("current size: " + s.size());
console.log("s.top() = " + s.top());
s.pop();
console.log("s.top() = " + s.top());
s.pop();
console.log("s.top() = " + s.top());

console.log("current size: " + s.size());
