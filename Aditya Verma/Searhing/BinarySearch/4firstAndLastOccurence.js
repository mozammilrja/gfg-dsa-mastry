// Brute force approach to find the first and last occurrence of a target element in a sorted array
// This approach has O(n) time complexity

function firstOccurence(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the first occurrence}
    }
  }
  return -1; // If the target is not found, return -1
}
console.log(firstOccurence([2, 4, 10, 10, 10, 18, 20], 10)); // Output: 2

function lastOccurence(arr, target) {
  // Iterate through the array from the end to find the last occurrence
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === target) {
      return i; // Return the index of the last occurrence
    }
  }
  return -1; // If the target is not found, return -1
}
console.log(lastOccurence([2, 4, 10, 10, 10, 18, 20], 10)); // Output: 4

// using binary search to find the first and last occurrence of the target element
// This approach has O(log n) time complexity

// function firstOccurence(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let result = -1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       result = mid; // Target found
//       end = mid - 1; // Continue searching in the left half for first occurrence
//     } else if (arr[mid] < target) {
//       start = mid + 1; // Search in the right half
//     } else {
//       end = mid - 1; // Search in the left half
//     }
//   }
//   return result; // Target not found
// }

// console.log(firstOccurence([1, 2, 3, 10, 10, 10, 20, 30], 10)); // Output: 3

function lastOccurence(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      result = mid; // Target found
      start = mid + 1; // Continue searching in the left half for first occurrence
    } else if (arr[mid] < target) {
      start = mid + 1; // Search in the right half
    } else {
      end = mid - 1; // Search in the left half
    }
  }
  return result; // Target not found
}

console.log(lastOccurence([1, 2, 3, 10, 10, 10, 20, 30], 10)); // Output: 5
