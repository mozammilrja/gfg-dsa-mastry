function productOfArrayItSelf(arr) {
  let n = nums.length;

  let result = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        product *= arr[j];
      }
      result[i] = product;
    }
  }
  return result;
}
// time complexity O(n)
function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  let Product = 1;
  for (let j = n - 1; j >= 0; j--) {
    result[j] *= Product;
    Product *= nums[j];
  }

  return result;
}

let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums, "optimize"));
// console.log(productOfArrayItSelf(nums)); //Output: [24,12,8,6]
