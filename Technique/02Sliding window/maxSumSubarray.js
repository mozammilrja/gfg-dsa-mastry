// function maxSumSubarray(nums, k) {
//   let max = -Infinity;
//   let n = nums.length;

//   for (let i = 0; i <= n - k; i++) {
//     let sum = 0;
//     for (let j = i; j < i + k; j++) {
//       sum += nums[j];
//     }
//     max = Math.max(max, sum);
//   }
//   return max;
// }

// let arr = [2, 3, 5, 2, 9, 7, 1];
// let K = 3;
// console.log(maxSumSubarray(arr, K)); // Output: 18 (subarray [2, 9,7])




function maxSumSubarray(nums, k) {
  let n = nums.length;
  // calculate the sum of the first window size K
  let window = 0
  for (let i = 0; i < k; i++) {
    window += nums[i]
  }
  let maxSum = window
  for (let i = k; i < n; i++) {
    window += arr[i] - arr[i - k]; // Add the next element and remove the first element of the previous window
    maxSum = Math.max(maxSum, window);
  }
  return maxSum; 
}
let arr = [2, 3, 5, 2, 9, 7, 1];
let K = 3;
console.log(maxSumSubarray(arr, K)); // Output: 18 (subarray [2, 9,7])
