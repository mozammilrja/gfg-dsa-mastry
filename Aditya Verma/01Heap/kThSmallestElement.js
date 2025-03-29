function kthSmallestElement(nums, k) {
  nums.sort((a, b) => a - b);
  return nums[k - 1];
}

console.log(kthSmallestElement([7, 10, 4, 3, 20, 15], 3)); //output 7
// time complexity O(nlogn) time
