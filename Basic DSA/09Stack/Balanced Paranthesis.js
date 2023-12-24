
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function isBalanced(expression) {
  const stack = new Stack();
  const brackets = { '(': ')', '[': ']', '{': '}' };

  for (let char of expression) {
    if (char in brackets) {
      stack.push(char);
    } else {
      if (stack.isEmpty() || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

// Example usage:
const expression1 = "{[()]}";
console.log(`${expression1} is balanced: ${isBalanced(expression1)}`); // Output: true

const expression2 = "{[(])}";
console.log(`${expression2} is balanced: ${isBalanced(expression2)}`); // Output: false
