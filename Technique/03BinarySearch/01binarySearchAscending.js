// then arr is sorted use this  alogo
// this is accending binary search

function binarySearchAscending(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; // Target found
      } else if (nums[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
  
    return -1; // Target not found
  }
  
  const numsAsc = [1, 2, 3, 4, 5, 6, 7];
  const targetAsc = 4;
  const resultAsc = binarySearchAscending(numsAsc, targetAsc);
  console.log(resultAsc); // Output: 3 (index of target value 4 in the array)
  