// // count of elements in sorted array means how many times a target element appears in a sorted array
// // We can use binary search to find the first and last occurrence of the target element
// //using broutforce will take O(n) time complexity

function countOfElemInSortedArr(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
}
console.log(countOfElemInSortedArr([2, 4, 10, 10, 10, 18, 20], 10)); // Output: 3

// function countOfElemInSortedArr(arr, target) {
//     function firstOccurrence(arr, target) {
//         let start = 0;
//         let end = arr.length - 1;
//         let result = -1;
//         while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) {
//             result = mid; // Target found
//             end = mid - 1; // Continue searching in the left half for first occurrence
//         } else if (arr[mid] < target) {
//             start = mid + 1; // Search in the right half
//         } else {
//             end = mid - 1; // Search in the left half
//         }
//         }
//         return result; // Target not found
//     }

//     function lastOccurrence(arr, target) {
//         let start = 0;
//         let end = arr.length - 1;
//         let result = -1;
//         while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) {
//             result = mid; // Target found
//             start = mid + 1; // Continue searching in the right half for last occurrence
//         } else if (arr[mid] < target) {
//             start = mid + 1; // Search in the right half
//         } else {
//             end = mid - 1; // Search in the left half
//         }
//         }
//         return result; // Target not found
//     }

//     const firstIndex = firstOccurrence(arr, target);
//     const lastIndex = lastOccurrence(arr, target);

//     if (firstIndex === -1 || lastIndex === -1) {
//         return 0; // Target not found
//     }

//     return lastIndex - firstIndex + 1; // Count of occurrences
// }

// console.log(countOfElemInSortedArr([2, 4, 10, 10, 10, 18, 20], 10)); // Output: 3
