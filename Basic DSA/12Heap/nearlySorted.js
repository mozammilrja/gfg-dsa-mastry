function nearlySorted(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = Math.max(0, i - k); j < i; j++) {
      if (nums[i] < nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

console.log(nearlySorted([6, 5, 3, 2, 8, 10, 9], 3)); //output [2, 3, 5, 6, 8, 9, 10]
//time complexity O(nlogk)
