//using Kadane's Algorithm

function maxSubArray(nums) {
  let max = nums[0];
  let cur = 0;

  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];
    if (cur > max) max = cur;
    if (cur < 0) cur = 0;
  }

  return max;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([1])); // Output: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23

// function maxSubArray(nums) {
//   let maxSum = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;
//     console.log(i,'start');
//     for (let j = i; j < nums.length; j++) {
//       currentSum += nums[j];
//       console.log(currentSum,'sum');
//       maxSum = Math.max(maxSum, currentSum);
//     }
//   }
//   return maxSum;
// }

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
// console.log(maxSubArray([1])); // Output: 1
// console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23
