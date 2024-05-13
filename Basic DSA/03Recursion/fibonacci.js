function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Example usage:
const n = 10; // Number of Fibonacci numbers to generate
const fibSeries = [];
for (let i = 0; i < n; i++) {
  fibSeries.push(fibonacci(i));
}
console.log(`First ${n} Fibonacci numbers:`, fibSeries);
