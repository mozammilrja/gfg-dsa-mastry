function removeDuplicate(nums) {
  if (nums.length < 2) return 0;
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    let isQual = nums[left - 2] === nums[right];
    if (!isQual) {
      nums[left] = nums[right];
      left += 1;
    }
    right += 1;
  }
  return left;
}
let nums = [1, 1, 1, 2, 2, 3];
let newLength = removeDuplicate(nums);
console.log(newLength); // Expected output: 5
console.log(nums.slice(0,newLength))
