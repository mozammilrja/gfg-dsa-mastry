function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
    low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); //output 4


// recursive
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // Base case: if the range is invalid
  if (start > end) {
    return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((start + end) / 2);

  // Check if the middle element is the target
  if (arr[mid] === target) {
    return mid;
  }

  // If the target is less than the middle element, search the left half
  if (target < arr[mid]) {
    return binarySearch(arr, target, start, mid - 1);
  }

  // If the target is greater than the middle element, search the right half
  return binarySearch(arr, target, mid + 1, end);
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const result = binarySearch(arr, target);
console.log(result); // Output: 4


