// naive method  brutforce approch

// function maxProductArray(nums) {
//   let max = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let product = nums[i] * nums[j];
//       if (product > max) {
//         max = product;
//       }
//     }
//   }
//   return max;
// }

// let nums = [2, 3, -2, 4];
// console.log("Maximum Product of Pair in an Array: ", maxProductArray(nums)); //6

/**
 * Kadane's Algorithm for finding the maximum product subarray.
 * This algorithm iterates through the array once, maintaining the maximum and minimum product subarray ending at each index.
 * The result is updated based on the maximum product subarray found so far.
 * @param {number[]} nums - The input array.
 * @returns {number} - The maximum product subarray.
 */
function maxProductSubarray(nums) {
  if (!nums || nums.length === 0) return 0;

  let maxProduct = nums[0]; // Initialize the maximum product.
  let minProduct = nums[0]; // Initialize the minimum product.
  let result = nums[0]; // Initialize the result with the first element.

  // Loop through the array starting from the second element.
  for (let i = 1; i < nums.length; i++) {
    // Save the current maximum product.
    let tempMax = maxProduct;
    // Update the maximum product.
    maxProduct = Math.max(nums[i], maxProduct * nums[i], minProduct * nums[i]);
    // Update the minimum product.
    minProduct = Math.min(nums[i], tempMax * nums[i], minProduct * nums[i]);
    // Update the result with the maximum product found so far.
    result = Math.max(result, maxProduct);
  }

  return result; // Return the maximum product subarray.
}

// Test cases
const nums1 = [2, 3, -2, 4];
console.log("Maximum Product Subarray:", maxProductSubarray(nums1)); // Output: 6

const nums2 = [-2, 0, -1];
console.log("Maximum Product Subarray:", maxProductSubarray(nums2)); // Output: 0
