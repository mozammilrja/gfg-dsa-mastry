// function minSubArrayLen(target, nums) {
//   let minLength = Infinity;
//   let n = nums.length;

//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += nums[j];
//       if (sum >= target) {
//         minLength = Math.min(minLength, j - i + 1);
//       }
//     }
//   }

//   return minLength === Infinity ? 0 : minLength;
// }

// // Example usage
// let target = 7;
// let nums = [2, 3, 1, 2, 4, 3];
// console.log(minSubArrayLen(target, nums)); // Output: 2

//using sliding window

var minSubArrayLen = function (target, nums) {
  let minLength = Infinity;
  let sum = 0;
  let n = nums.length;
  let left = 0;

  for (let right = 0; right < n; right++) {
    sum += nums[right]; // Expand the window by adding nums[right]

    // Shrink the window as long as the sum is greater than or equal to target
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1); // Update minLength before shrinking
      sum -= nums[left]; // Shrink the window by removing nums[left]
      left++; // Move left pointer to the right
    }
  }

  return minLength === Infinity ? 0 : minLength; // If no valid subarray, return 0
};

// Test case
let target = 15;
let nums = [1, 2, 3, 4, 5];
console.log(minSubArrayLen(target, nums)); // Output: 5
