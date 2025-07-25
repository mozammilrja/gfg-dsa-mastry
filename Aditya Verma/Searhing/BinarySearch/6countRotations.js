//  uising brute force to count the number of rotations in a sorted and rotated array
// The number of rotations is the index of the smallest element in the array
// This approach has O(n) time complexity
function countRotationsBruteForce(arr) {
  let min = arr[0];
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  return minIndex;
}
console.log(countRotationsBruteForce([15, 18, 2, 3, 6, 12])); // Output: 2
console.log(countRotationsBruteForce([7, 9, 11, 12, 5])); // Output: 4
console.log(countRotationsBruteForce([1, 2, 3, 4, 5])); // Output: 0

// using binary search to count the number of rotations in a sorted and rotated array
// The number of rotations is the index of the smallest element in the array
// This approach has O(log n) time complexity
function countRotations(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // If the subarray is already sorted, return start index
    if (arr[start] <= arr[end]) return start;

    let mid = Math.floor((start + end) / 2);
    // Calculate next and previous indices
    let next = (mid + 1) % arr.length;
    let prev = (mid - 1 + arr.length) % arr.length;

    // Check if mid is the minimum
    if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
      return mid;
    }

    // Decide which half to choose
    if (arr[mid] >= arr[start]) {
      start = mid + 1; // Go right
    } else {
      end = mid - 1; // Go left
    }
  }

  return -1; // If not rotated
}
console.log(countRotations([15, 18, 2, 3, 6, 12])); // Output: 2
console.log(countRotations([7, 9, 11, 12, 5])); // Output: 4
console.log(countRotations([1, 2, 3, 4, 5])); // Output: 0
