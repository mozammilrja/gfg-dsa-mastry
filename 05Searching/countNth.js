// function countNth(arr, n, target) {
//   let low = 0;
//   let high = n - 1;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     if (arr[mid] <= target) {
//       low = mid + 1;
//     } else high = mid - 1;
//   }
//   return low;
// }

// let arr = [1, 1, 2, 2, 2, 3, 4, 5];
// let n = arr.length;
// let target = 2;
// let result = countNth(arr, n, target);
// console.log(result); // Output: 3

function countOccurrences(arr, N, target) {
  let firstOccurrence = findFirstOccurrence(arr, N, target);

  if (firstOccurrence === -1) {
    // Target not found in the array
    return 0;
  }

  let lastOccurrence = findLastOccurrence(arr, N, target);

  // The count of target is the difference between the indices plus 1
  return lastOccurrence - firstOccurrence + 1;
}

function findFirstOccurrence(arr, N, target) {
  let low = 0;
  let high = N - 1;
  let firstOccurrence = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      // Move to the left to find the first occurrence of target
      high = mid - 1;
      firstOccurrence = mid;
    } else {
      // Move to the right
      low = mid + 1;
    }
  }

  return firstOccurrence;
}

function findLastOccurrence(arr, N, target) {
  let low = 0;
  let high = N - 1;
  let lastOccurrence = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= target) {
      // Move to the right to find the last occurrence of target
      low = mid + 1;
      lastOccurrence = mid;
    } else {
      // Move to the left
      high = mid - 1;
    }
  }

  return lastOccurrence;
}

// Example with counting occurrences of 2
let arr = [1, 1, 2, 2, 2, 3, 4, 5];
let N = arr.length;
let target = 2;
let result = countOccurrences(arr, N, target);
console.log(result); // Output: 3
