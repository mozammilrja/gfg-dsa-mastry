//using brute force to find the minimum element in a rotated sorted array
// This approach has O(n) time complexity
function findMinElementRotated(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMinElementRotated([15, 18, 2, 3, 6, 12])); // Output: 2
console.log(findMinElementRotated([7, 9, 11, 12, 5])); // Output: 5


//using binary search to find the minimum element in a rotated sorted array
// This approach has O(log n) time complexity

function findMinElementRotatedBinary(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // Check if mid is the minimum
    if (arr[mid] > arr[end]) {
      start = mid + 1; // Go right
    } else {
      end = mid; // Go left
    }
  }

  return arr[start]; // The minimum element
}
console.log(findMinElementRotatedBinary([15, 18, 2, 3, 6, 12])); // Output: 2
console.log(findMinElementRotatedBinary([7, 9, 11, 12, 5])); // Output: 5
console.log(findMinElementRotatedBinary([1, 2, 3, 4, 5])); // Output: 1