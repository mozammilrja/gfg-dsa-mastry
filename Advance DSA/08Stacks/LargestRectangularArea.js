// // Naive implementation
// function getMaxArea(arr, n) {
//   let res = 0;
//   for (let i = 0; i < n; i++) {
//     let curr = arr[i];
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] >= arr[i]) curr += arr[i];
//       else break;
//     }
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] >= arr[i]) curr += arr[i];
//       else break;
//     }
//     res = Math.max(res, curr);
//   }
//   return res;
// }

// let arr = [6, 2, 5, 4, 1, 5, 6];
// let n = 7;
// console.log("Maximum Area: " + getMaxArea(arr, n));
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

function getMaxArea(arr, n) {
  let s = new MyStack(100000);
  let res = 0;
  let tp;
  let curr;

  for (let i = 0; i < n; i++) {
    while (s.isEmpty() === false && arr[s.peek()] >= arr[i]) {
      tp = s.peek();
      s.pop();
      curr = arr[tp] * (s.isEmpty() ? i : i - s.peek() - 1);
      res = Math.max(res, curr);
    }
    s.push(i);
  }
  while (s.isEmpty() === false) {
    tp = s.peek();
    s.pop();
    curr = arr[tp] * (s.isEmpty() ? n : n - s.peek() - 1);
    res = Math.max(res, curr);
  }

  return res;
}

let arr = [60, 20, 50, 40, 30];
let n = 5;
console.log("Maximum Area: " + getMaxArea(arr, n));
