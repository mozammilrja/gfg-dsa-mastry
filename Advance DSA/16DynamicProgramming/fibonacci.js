// using DP
let memo = new Array(100).fill(null);
function fibonacci(n) {
  if (memo[n] !== null) {
    return memo[n];
  }
  if (n === 0 || n === 1) {
    return n;
  }
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);

  return memo[n];
}
let n = 5;
const fibSeries = [];
for (let i = 0; i < n; i++) {
  fibSeries.push(fibonacci(i));
}
console.log(`First ${n} Fibonacci numbers:`, fibSeries);