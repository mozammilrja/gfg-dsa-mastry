function missingNumer(arr) {
  let sum = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
  }
  let result = ((n + 1) * (n + 2)) / 2;
  return result - sum;
}
let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(missingNumer(arr)) //output 3

// function missingNumber(nums) {
//   const n = nums.length + 1;  // Length of the complete sequence (with the missing number)
//   const expectedSum = (n * (n + 1)) / 2;  // Sum of first n natural numbers
//   const actualSum = nums.reduce((acc, num) => acc + num, 0);  // Sum of numbers in the array

//   return expectedSum - actualSum;  // The difference is the missing number
// }

// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(missingNumber(arr));  // Output: 3
