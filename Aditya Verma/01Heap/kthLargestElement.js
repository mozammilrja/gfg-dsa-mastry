function kthLargestElement(nums, k) {
  return nums.sort((a, b) => b - a);
}

console.log(kthLargestElement([7, 10, 4, 3, 20, 15], 3)); //output [10 ]
// time complexity O(nlogn) time
