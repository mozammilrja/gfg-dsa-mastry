function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let pairTarget = target - nums[i];
    if (map.has(pairTarget)) {
      return [map.get(pairTarget), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));

// function twoSumTwoPointer(nums, target) {
//   let sortedNums = nums.slice().sort((a, b) => a - b);
//   let left = 0;
//   let right = sortedNums.length - 1;

//   while (left < right) {
//     const sum = sortedNums[left] + sortedNums[right];
//     if (sum === target) {
//       let originalLeft = nums.indexOf(sortedNums[left]);
//       let originalRight = nums.lastIndexOf(sortedNums[right]);
//       return [originalLeft, originalRight];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   // If no solution is found (although the problem guarantees one solution)
//   return [];
// }

// // Example usage
// let nums = [3, 4, 5, 6];
// let target = 7;

// console.log(twoSumTwoPointer(nums, target)); // Output: [0, 1]
