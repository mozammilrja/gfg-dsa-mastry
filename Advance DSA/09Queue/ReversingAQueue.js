// // Naive implementation

// class Queue {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.front = 0;
//     this.size = 0;

//     this.rear = capacity - 1;
//     this.array = [];
//   }

//   isFull() {
//     return this.size === this.capacity;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   push(item) {
//     if (this.isFull()) return;
//     this.rear = (this.rear + 1) % this.capacity;
//     this.array[this.rear] = item;
//     this.size = this.size + 1;
//   }

//   pop() {
//     if (this.isEmpty()) return -1e9;
//     let item = this.array[this.front];
//     this.front = (this.front + 1) % this.capacity;
//     this.size = this.size - 1;
//     return item;
//   }

//   frontEle() {
//     if (this.isEmpty()) return -1e9;
//     return this.array[this.front];
//   }

//   rearEle() {
//     if (this.isEmpty()) return -1e9;
//     return this.array[this.rear];
//   }
// }

// function Print(queue) {
//   let ans = "";
//   while (!queue.isEmpty()) {
//     ans += queue.frontEle() + " ";
//     queue.pop();
//   }
//   return ans;
// }

// function reverse(q) {
//   if (q.isEmpty()) return q;

//   let x = q.frontEle();
//   q.pop();

//   q = reverse(q);
//   q.push(x);
//   return q;
// }

// let q = new Queue(100000);
// q.push(12);
// q.push(5);
// q.push(15);
// q.push(20);

// q = reverse(q);
// console.log(Print(q));

// Naive Method

class MyStack {
  constructor(c) {
    this.cap = c;
    this.arr = [];
    this.top = -1;
  }

  push(x) {
    if (this.top === this.cap - 1) {
      console.log("Stack is full");
      return;
    }
    this.top++;
    this.arr[this.top] = x;
  }

  pop() {
    if (this.top === -1) {
      console.log("Stack is Empty");
      return -1e9;
    }
    let res = this.arr[this.top];
    this.top--;
    return res;
  }

  peek() {
    if (this.top === -1) {
      console.log("Stack is Empty");
      return -1e9;
    }
    return this.arr[this.top];
  }

  size() {
    return this.top + 1;
  }

  isEmpty() {
    return this.top === -1;
  }
}

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

function Print(queue) {
  let ans = "";
  while (!queue.isEmpty()) {
    ans += queue.frontEle() + " ";
    queue.pop();
  }
  return ans;
}

function reverse(queue) {
  let Stack = new MyStack(100000);
  while (!queue.isEmpty()) {
    Stack.push(queue.frontEle());
    queue.pop();
  }
  while (!Stack.isEmpty()) {
    queue.push(Stack.peek());
    Stack.pop();
  }

  return queue;
}

let q = new Queue(100000);
q.push(12);
q.push(5);
q.push(15);
q.push(20);

q = reverse(q);
console.log(Print(q));
