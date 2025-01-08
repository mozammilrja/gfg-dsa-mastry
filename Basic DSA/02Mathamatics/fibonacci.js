// function fibonacci(n) {
//   const series = [0, 1];

//   for (let i = 2; i < n; i++) {
//     series[i] = series[i - 1] + series[i - 2];
//   }

//   return series;
// }

// // Example usage:
// const n = 10; // Number of Fibonacci numbers to generate
// const fibSeries = fibonacci(n);
// console.log(`First ${n} Fibonacci numbers:`, fibSeries);

function fibonacci(nums) {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= nums; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

fibonacci(10)