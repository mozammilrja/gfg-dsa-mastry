//BruteForce approach
// //time complexity is O(n2)

function productExceptSelf(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
      }
    result[i] = product;
  }
  return result;
// }

// // Example usage
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]

