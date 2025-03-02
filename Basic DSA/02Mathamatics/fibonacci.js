function fibonacci(n) {
  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

// Example usage:
const n = 10; // Number of Fibonacci numbers to generate
const fibSeries = fibonacci(n);
console.log(`First ${n} Fibonacci numbers:`, fibSeries);


// nth fibonacci number
// function fibonacci(nums) {
//   let n1 = 0,
//     n2 = 1,
//     nextTerm;

//   for (let i = 1; i <= nums; i++) {
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
// }

// fibonacci(10)