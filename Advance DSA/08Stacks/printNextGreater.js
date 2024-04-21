// // Naive solutions
// class MyStack {
//   constructor(c) {
//     this.cap = c;
//     this.arr = [];
//     this.top = -1;
//   }

//   push(x) {
//     if (this.top === this.cap - 1) {
//       console.log("Stack is full");
//       return;
//     }
//     this.top++;
//     this.arr[this.top] = x;
//   }

//   pop() {
//     if (this.top === -1) {
//       console.log("Stack is Empty");
//       return -1e9;
//     }
//     let res = this.arr[this.top];
//     this.top--;
//     return res;
//   }

//   peek() {
//     if (this.top === -1) {
//       console.log("Stack is Empty");
//       return -1e9;
//     }
//     return this.arr[this.top];
//   }

//   size() {
//     return this.top + 1;
//   }

//   isEmpty() {
//     return this.top === -1;
//   }
// }

// function nextGreater(arr, n) {
//   let answer = "";
//   for (let i = 0; i < n; i++) {
//     let j;
//     for (j = i + 1; j < n; j++) {
//       if (arr[j] > arr[i]) {
//         answer += arr[j] + " ";
//         break;
//       }
//     }
//     if (j === n) answer += -1 + " ";
//   }
//   return answer;
// }

// let arr = [5, 15, 10, 8, 6, 12, 9, 18];
// let n = 8;
// console.log(nextGreater(arr, n));

// Efficient method
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

function nextGreater(arr, n) {
  let v = [];
  let s = new MyStack(100000);
  s.push(arr[n - 1]);
  v.push(-1);
  for (let i = n - 2; i >= 0; i--) {
    while (s.isEmpty() === false && s.peek() <= arr[i]) s.pop();
    let ng = s.isEmpty() ? -1 : s.peek();
    v.push(ng);
    s.push(arr[i]);
  }
  v = v.reverse();
  return v;
}

let arr = [5, 15, 10, 8, 6, 12, 9, 18];
let n = 8;
let answer = "";
for (let x of nextGreater(arr, n)) {
  answer += x + " ";
}
console.log(answer);
