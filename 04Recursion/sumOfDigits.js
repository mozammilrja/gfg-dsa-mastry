// remove the last digit  numbers and add the last numbers
function Digits(n) {
  if (n == 0) {
    return 0;
  }
  return (n % 10) + Digits(Math.floor(n / 10));
}
console.log(Digits(253)); // o/p 10

// using iterative methods
function sumOfDigitsIterative(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(sumOfDigitsIterative(253)); // Output: 10
