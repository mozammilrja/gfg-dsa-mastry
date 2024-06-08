function removeElement(nums, val) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[result] = nums[i];
      result++;
    }
  }
  return result;
}

const val = 3;
const k = removeElement(nums, val);
console.log(`Number of elements not equal to ${val}: ${k}`); // Output: 2
console.log(nums); // Output: [2, 2, _, _] (order doesn't matter)
