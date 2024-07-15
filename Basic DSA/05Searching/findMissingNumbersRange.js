function findMissingNumbersRange(nums) {
  let missingNums = [];
  nums.sort((a, b) => a - b);
  for (let i = nums[0]; i < nums[nums.length - 1]; i++) {
    if (!nums.includes(i)) {
      missingNums.push(i);
    }
  }
  return missingNums;
}
let arr = [2, 3, 4, 7, 11];
console.log(findMissingNumbersRange(arr));
