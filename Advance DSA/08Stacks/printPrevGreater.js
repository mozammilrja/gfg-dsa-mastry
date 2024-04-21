// //Naive solutions
// function printPrevGreater(arr, n) {
//   let answer = "";
//   for (let i = 0; i < n; i++) {
//     let j;
//     for (j = i - 1; j >= 0; j--) {
//       if (arr[j] > arr[i]) {
//         answer += arr[j] + " ";
//         break;
//       }
//     }
//     if (j == -1) answer += -1 + " ";
//   }
//   return answer;
// }

// let arr = [20, 30, 10, 5, 15];
// let n = 5;
// console.log(printPrevGreater(arr, n));
//Efficient Methods
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

function printSpan(arr, n) {
  let s = new MyStack(100000);
  s.push(0);
  let answer = "";
  answer += 1 + " ";
  for (let i = 1; i < n; i++) {
    while (s.isEmpty() === false && arr[s.peek()] <= arr[i]) {
      s.pop();
    }
    let span = s.isEmpty() ? i + 1 : i - s.peek();
    answer += span + " ";
    s.push(i);
  }
  return answer;
}

let arr = [18, 12, 13, 14, 11, 16];
let n = 6;
console.log(printSpan(arr, n));
