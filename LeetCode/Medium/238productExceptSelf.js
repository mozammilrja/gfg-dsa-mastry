//BruteForce approach
// //time complexity is O(n2)

// function productExceptSelf(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
      }
      console.log('product', product)
      console.log('result[i]', result[i])
    result[i] = product;
  }
  return result;
// }

// // Example usage
// let nums = [1, 2, 3, 4];
// console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]

function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  // Calculate prefix products and store them in result
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Calculate suffix products and multiply them to the result
  let suffixProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]
