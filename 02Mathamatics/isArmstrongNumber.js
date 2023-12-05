function isArmstrongNumber(number) {
  // Convert the number to a string to count the number of digits
  const numStr = String(number);
  const numDigits = numStr.length;

  // Calculate the sum of each digit raised to the power of the number of digits
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    sum += Math.pow(Number(numStr[i]), numDigits);
  }

  // Check if the sum is equal to the original number
  return sum === number;
}

// Example usage:
const exampleNumber = 153;
if (isArmstrongNumber(exampleNumber)) {
  console.log(`${exampleNumber} is an Armstrong number.`);
} else {
  console.log(`${exampleNumber} is not an Armstrong number.`);
}

// function isArmstrongNumber(number) {
//   let temp = number;
//   let sum = 0;
//   const numDigits = Math.floor(Math.log10(number)) + 1;

//   while (temp > 0) {
//     const digit = temp % 10;
//     sum += Math.pow(digit, numDigits);
//     temp = Math.floor(temp / 10);
//   }

//   return sum === number;
// }

// // Example usage:
// const exampleNumber = 153;
// if (isArmstrongNumber(exampleNumber)) {
//   console.log(`${exampleNumber} is an Armstrong number.`);
// } else {
//   console.log(`${exampleNumber} is not an Armstrong number.`);
// }
