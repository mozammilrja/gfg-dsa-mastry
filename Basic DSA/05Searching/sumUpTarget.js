// function SumOfTargetElemnt(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     const sum = arr[left] + arr[right];
//     if (sum === target) {
//       return [arr[left], arr[right]];
//     } else if (sum < target) left++;
//     else right--;
//   }
//   return null;
// }

// const nums = [1, 2, 3, 4, 5, 6];
// const targetSum = 8;
// const result = SumOfTargetElemnt(nums, targetSum);
// console.log(result); // Output: [2, 6]

// Brut force approach
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// Example usage:
const nums1 = [2, 5, 5, 11];
const target1 = 10;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

