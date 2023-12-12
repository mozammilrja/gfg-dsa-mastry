// Implementation of Queue using Array

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

  enqueue(item) {
    if (this.isFull()) return;
    this.rear = (this.rear + 1) % this.capacity;
    this.array[this.rear] = item;
    this.size = this.size + 1;
    console.log(item + " enqueued to queue");
  }

  dequeue() {
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

let queue = new Queue(1000);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.dequeue() + " dequeued from queue");

console.log("Front item is " + queue.frontEle());
console.log("Rear item is " + queue.rearEle());
