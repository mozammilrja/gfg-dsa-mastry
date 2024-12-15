function largestSubArrSum(arr, k) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
}

let arr = [4, 1, 1, 1, 2, 3, 5];
let K = 5;
console.log(largestSubArrSum(arr, K)); // Output: 4 (The subarray [1, 1, 1, 2])
