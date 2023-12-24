class QNode {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enQueue(x) {
    let temp = new QNode(x);
    if (this.rear === null) {
      this.front = temp;
      this.rear = temp;
      return;
    }

    this.rear.next = temp;
    this.rear = temp;
  }

  deQueue() {
    if (this.front === null) return;

    let temp = this.front;
    this.front = this.front.next;

    if (this.front === null) this.rear = null;
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
q.deQueue();
console.log("Queue Front : " + q.front.data);
console.log("Queue Rear : " + q.rear.data);
