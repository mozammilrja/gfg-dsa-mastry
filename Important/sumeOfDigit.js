function sumOfdigit(n) {
  let sum = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    const count = parseInt(str[i], 10);
    sum += count;
  }
  return sum;
}

console.log(sumOfdigit(55));
// Output: 10

function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10; // Add the last digit to sum
    n = Math.floor(n / 10); // Remove the last digit
  }
  return sum;
}

console.log(sumOfDigits(55)); // Output: 10
