function fibonacci(n) {
  const series = [0, 1];

  for (let i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }

  return series;
}

// Example usage:
const n = 10; // Number of Fibonacci numbers to generate
const fibSeries = fibonacci(n);
console.log(`First ${n} Fibonacci numbers:`, fibSeries);
