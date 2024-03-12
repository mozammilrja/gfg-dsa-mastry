function SumOfTargetElemnt(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) left++;
    else right--; 
  }
  return null;
}

const nums = [1, 2, 3, 4, 5, 6];
const targetSum = 8;
const result = SumOfTargetElemnt(nums, targetSum);
console.log(result); // Output: [2, 6]
