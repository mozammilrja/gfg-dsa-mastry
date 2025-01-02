function maxSubArraySum(arr, target) {
  let maxSum = -Infinity; // Initialize maxSum to a very small value
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum >= target) {
        maxSum = Math.max(maxSum, sum);
      }
    }
  }

  return maxSum === -Infinity ? 0 : maxSum;
}

// Example usage
let target = 7;
let arr = [2, 3, 1, 2, 4, 3];
console.log(maxSubArraySum(arr, target)); // Output: 15 (entire array sum is greater than 7)
