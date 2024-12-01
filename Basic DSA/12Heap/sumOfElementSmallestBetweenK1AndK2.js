function sumOfElementSmallestBetweenK1AndK2(nums, k1, k2) {
  nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = k1; i < k2 - 1; i++) {
    result += nums[i];
  }
  return result;
}
console.log(sumOfElementSmallestBetweenK1AndK2([1, 3, 12, 5, 15, 11], 3, 6)); // output sum of element 23
