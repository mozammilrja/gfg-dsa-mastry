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

function printFirstN(n) {
  let q = new Queue(100000);

  q.push("5");
  q.push("6");
  let ans = "";

  for (let i = 0; i < n; i++) {
    let curr = q.frontEle();

    ans += curr + " ";

    q.pop();

    q.push(curr + "5");
    q.push(curr + "6");
  }
  return ans;
}

let n = 5;

console.log(printFirstN(n));
