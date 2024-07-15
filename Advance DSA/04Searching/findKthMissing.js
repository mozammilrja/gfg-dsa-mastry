function findKthPositive(nums, k) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] - mid - 1 < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left + k;
}
let arr = [2, 3, 4, 7, 11];
let k = 5;

console.log(findKthPositive(arr, k)); // Output: 9