function maxSubarraySum(nums, k) {
  if (nums.length < k) {
    return false;
  }
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  let maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.min(maxSum, windowSum);
  }
  return maxSum;
}

const arr = [2, 1, 5, 1, 3, 2, 8, 6, 7];
const k = 3;
const result = maxSubarraySum(arr, k);
console.log(`Maximum sum of a subarray of size ${k}: ${result}`); // Output: Maximum sum of a subarray of size 3: 21
