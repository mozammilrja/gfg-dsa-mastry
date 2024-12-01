function kthLargestElement(nums, k) {
  nums.sort((a, b) => b - a);
  nums[k - 1];
  let res = nums.slice(0, k);
  return res;
}

console.log(kthLargestElement([7, 10, 4, 3, 20, 15], 3)); //output [ 20, 15, 10 ]
// time complexity O(nlogn) time
