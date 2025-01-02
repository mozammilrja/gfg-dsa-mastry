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

  

  function binarySearch(nums, target) {
    if (nums.length === 0) return -1;
  
    // Detect if the array is sorted in ascending or descending order
    const isAscending = nums[0] < nums[nums.length - 1];
  
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; // Target found
      }
  
      if (isAscending) {
        // Ascending order
        if (nums[mid] < target) {
          left = mid + 1; // Search in the right half
        } else {
          right = mid - 1; // Search in the left half
        }
      } else {
        // Descending order
        if (nums[mid] > target) {
          left = mid + 1; // Search in the right half
        } else {
          right = mid - 1; // Search in the left half
        }
      }
    }
  
    return -1; // Target not found
  }
  
  // Example Usage:
  // Ascending order array
  const numsAsc = [1, 2, 3, 4, 5, 6, 7];
  const targetAsc = 4;
  console.log(binarySearch(numsAsc, targetAsc)); // Output: 3
  
  // Descending order array
  const numsDesc = [7, 6, 5, 4, 3, 2, 1];
  const targetDesc = 4;
  console.log(binarySearch(numsDesc, targetDesc)); // Output: 3
  