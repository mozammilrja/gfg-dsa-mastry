function trailingZerosFactorial(n) {
  if (n === 0) {
    return 1;
  }
  let result = 0;
  
  for (let i = 5; i <= n; i = i * 5) {
    result = result + Math.floor(n / i);
  }
  return result;
}

console.log(trailingZerosFactorial(10));
