// function minSumSubarray(nums, k) {
//   let min = -Infinity;
//   let n = nums.length;

//   for (let i = 0; i <= n - k; i++) {
//     let sum = 0;
//     for (let j = i; j < i + k; j++) {
//       sum += nums[j];
//     }
//     min = Math.min(min, sum);
//   }
//   return min;
// }

// let arr = [2, 3, 5, 2, 9, 7, 1];
// let K = 3;
// console.log(minSumSubarray(arr, K)); // Output: 10 (subarray [2,3,5])

function minSumSubarray(nums, k) {
  let n = nums.length;
  // calculate the sum of the first window size K
  let window = 0;
  for (let i = 0; i < k; i++) {
    window += nums[i];
  }

  let minSum = window;
  for (let i = k; i < n; i++) {
    window += arr[i] - arr[i - k]; // Add the next element and remove the first element of the previous window
    minSum = Math.min(minSum, window);
  }
  return minSum;
}
let arr = [2, 3, 5, 2, 9, 7, 1];
let K = 3;
console.log(minSumSubarray(arr, K)); // Output: 10 (subarray [2,3,5])
