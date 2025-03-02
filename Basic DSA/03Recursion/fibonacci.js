// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// // Example usage:
// const n = 10; // Number of Fibonacci numbers to generate
// const fibSeries = [];
// for (let i = 0; i < n; i++) {
//   fibSeries.push(fibonacci(i));
// }
// console.log(`First ${n} Fibonacci numbers:`, fibSeries);


function generateFibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

let n = 20;
let fibonacciSeries = generateFibonacci(n);
console.log(fibonacciSeries);
