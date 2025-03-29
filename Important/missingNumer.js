// function missingNumer(arr) {
//   let sum = 0;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     sum = sum + arr[i];
//   }
//   let result = (n * (n + 1)) / 2;
//   return result - sum;
// }
// let arr = [0, 2];
// console.log(missingNumer(arr)); //output 1

// function missingNumber(nums) {
//   let res = nums.length;
//   for (let i = 0; i < nums.length; i++) {
//     console.log('res', res)
//     res += i - nums[i];

//   }
// return res;
// }

// let arr = [0, 2];
// console.log(missingNumber(arr));  // Output: 1

function findMissingNumberInSequence(numbers) {
  const numSet = new Set(numbers);
  const n = numbers.length;  // It should have been numbers.length + 1 ideally

  for (let i = 0; i <= n; i++) {  // Iterate from 0 to n (including n)
      if (!numSet.has(i)) {
          return i;  // Found the missing number
      }
  }
  return -1; // Just in case no number is missing
}

// ✅ Test Cases
console.log(findMissingNumberInSequence([0, 1, 3, 4])); // Output: 2
console.log(findMissingNumberInSequence([1, 2, 3, 4])); // Output: 0 (missing 0)
console.log(findMissingNumberInSequence([0, 2, 3, 4])); // Output: 1 (missing 1)
console.log(findMissingNumberInSequence([0, 1, 2, 3, 4, 5, 6, 8])); // Output: 7

