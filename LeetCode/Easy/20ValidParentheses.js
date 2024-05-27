function isValid(s) {
  if (s.length % 2 === 1) {
    return false;
  }
  let stack = [];
  const bracketsMap = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  for (const char of s) {
    if (bracketsMap.has(char)) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();
      if (bracketsMap.get(lastBracket) !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Example usage:
const expression1 = "{[()]}";
console.log(`${expression1} is balanced: ${isValid(expression1)}`); // Output: true

const expression2 = "{[(])}";
console.log(`${expression2} is balanced: ${isValid(expression2)}`); // Output: false
