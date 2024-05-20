// function productExceptSelf(nums) {
//   let n = nums.length;
//   let left = Array(n).fill(0);
//   let right = Array(n).fill(0);
//   let output = Array(n).fill(0);

//   left[0] = nums[0];
//   right[n - 1] = nums[n - 1];
//   for (let i = 1; i < n; i++) {
//     left[i] = left[i - 1] * nums[i];
//   }
//   for (let i = n - 2; i > 0; i++) {
//     right[i] = right[i + 1] * nums[i];
//   }
//   output[0] = right[1];
//   output[n - 1] = left[n - 2];

//   for (let i = 1; i < n - 1; i++) {
//     output[i] = left[i - 1] * nums[i + 1];
//   }
//   return output;
// }

function productExceptSelf(nums) {
  let n = nums.length;
  let left = Array(n).fill(1); // Array to store prefix products
  let right = Array(n).fill(1); // Array to store suffix products
  let output = Array(n).fill(1);

  // Fill the prefix products
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  // Fill the suffix products
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  // Fill the output array with the product of prefix and suffix products
  for (let i = 0; i < n; i++) {
    output[i] = left[i] * right[i];
  }

  return output;
}

// Example usage
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
