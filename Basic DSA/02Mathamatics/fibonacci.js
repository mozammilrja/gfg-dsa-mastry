function fibonacci(n) {
  if (n <= 0) return []; // Return an empty array for n <= 0
  if (n === 1) return [0]; // Return [0] if only one term is requested

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

// Example usage:
console.log(fibonacci(10)); // ✅ [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(1)); // ✅ [0]
console.log(fibonacci(0)); // ✅ []
console.log(fibonacci(-5)); // ✅ []

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
