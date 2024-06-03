function trailingZerosFactorial(n) {
  if (n === 0) {
    return 1;
  }
  let result = 0;

  for (let i = 5; i <= n; i += 5) {
    result = result + Math.floor(n / i);
  }
  return result;
}

console.log(trailingZerosFactorial(100));

// recursive
function trailingZeroesInFactorial(n) {
  if (n < 5) return 0;
  return Math.floor(n / 5) + trailingZeroesInFactorial(Math.floor(n / 5));
}

// Example usage:
console.log(trailingZeroesInFactorial(5));    // Output: 1 (5! = 120)
console.log(trailingZeroesInFactorial(10));   // Output: 2 (10! = 3628800)
console.log(trailingZeroesInFactorial(25));   // Output: 6 (25! = 15511210043330985984000000)
