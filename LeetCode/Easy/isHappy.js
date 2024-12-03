function isHappy(n) {
  let set = new Set();
  while (n != 1) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    n = getSumOfSquares(n);
  }
  return true;
}

function getSumOfSquares(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Example usage:
console.log(isHappy(19)); // Output: true
console.log(isHappy(2)); // Output: false
