function binarySearchDescending(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; // Target found
      } else if (nums[mid] > target) {
        left = mid + 1; // Search in the right half (because the array is descending)
      } else {
        right = mid - 1; // Search in the left half (because the array is descending)
      }
    }
  
    return -1; // Target not found
  }
  
  // Example Usage:
  const numsDesc = [7, 6, 5, 4, 3, 2, 1];
  const targetDesc = 4;
  const resultDesc = binarySearchDescending(numsDesc, targetDesc);
  console.log(resultDesc); // Output: 3 (index of target value 4 in the array)
