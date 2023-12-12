// let arr = [];
// arr.push(10);
// arr.push(20);
// console.log(arr.pop());
// arr.push(30);
// console.log(arr[arr.length - 1]);
// console.log(arr.length);

class Solution {
  constructor() {
    // Initialize an empty array to represent the stack.
    this.stack = [];
  }

  // Function to push data at the top of the stack.
  push(data) {
    this.stack.push(data);
  }

  // Function to pop the topmost data.
  pop() {
    // Check if the stack is empty before popping.
    if (this.stack.length === 0) {
      console.log("Stack Empty");
    } else {
      this.stack.pop();
    }
  }

  // Function to display the stack from index 0.
  display() {
    // Check if the stack is empty before displaying.
    if (this.stack.length === 0) {
      console.log(-1);
    } else {
      for (let i = 0; i < this.stack.length; i++) {
        process.stdout.write(this.stack[i] + " ");
      }
      console.log();
    }
  }
}

// Example usage:
let solution = new Solution();
solution.push(4);
solution.display(); // Output: 4

solution.pop();
solution.pop(); // Output: Stack Empty

solution.display(); // Output: -1
