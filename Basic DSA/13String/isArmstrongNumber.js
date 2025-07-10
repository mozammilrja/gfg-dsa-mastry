// function isArmstrongNumber(num) {
//   let sum = 0;
//   let str = num.toString();
//   for (let i = 0; i < str.length; i++) {
//     const result = parseInt(str[i], 10);
//     sum += Math.pow(result, str.length);
//   }
//   return num === sum;
// }

// // Example usage
// console.log(isArmstrongNumber(153)); // Output: true (1^3 + 5^3 + 3^3 = 153)
// console.log(isArmstrongNumber(1634)); // Output: true (1^4 + 6^4 + 3^4 + 4^4 = 1634)
// console.log(isArmstrongNumber(9474)); // Output: true (9^4 + 4^4 + 7^4 + 4^4 = 9474)
// console.log(isArmstrongNumber(123)); // Output: false (1^3 + 2^3 + 3^3 ≠ 123)

function isArmstrongNumber(num) {
  let sum = 0;
  while (num>0) {
    
    let lastDigit = num % 10;
    let fact = 1;
    for (let i = 1; i <= lastDigit; i++) {
      fact = fact * i;
    }
    sum += fact;
    num = Math.floor(num / 10);
  }
  return sum
}

// Example usage
console.log(isArmstrongNumber(153)); // Output: true (1^3 + 5^3 + 3^3 = 153)
console.log(isArmstrongNumber(1634)); // Output: true (1^4 + 6^4 + 3^4 + 4^4 = 1634)
console.log(isArmstrongNumber(9474)); // Output: true (9^4 + 4^4 + 7^4 + 4^4 = 9474)
console.log(isArmstrongNumber(123)); // Output: false (1^3 + 2^3 + 3^3 ≠ 123)
