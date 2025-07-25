// using brute force approach
// This approach has O(n) time complexity
function searchNearlySortedBruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
    if (i > 0 && arr[i - 1] === target) return i - 1;
    if (i < arr.length - 1 && arr[i + 1] === target) return i + 1;
  }
  return -1; // Not found
}

console.log(searchNearlySortedBruteForce([5, 10, 30, 20, 40], 20)); // Output: 3
console.log(searchNearlySortedBruteForce([5, 10, 30, 20, 40], 10)); // Output: 1
console.log(searchNearlySortedBruteForce([5, 10, 30, 20, 40], 50)); // Output: -1

function searchNearlySortedBinary(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Check mid
    if (arr[mid] === target) return mid;

    // Check mid - 1 (if in bounds)
    if (mid > low && arr[mid - 1] === target) return mid - 1;

    // Check mid + 1 (if in bounds)
    if (mid < high && arr[mid + 1] === target) return mid + 1;

    // Move to left half
    if (target < arr[mid]) {
      high = mid - 2;
    }
    // Move to right half
    else {
      low = mid + 2;
    }
  }

  return -1; // Not found
}
console.log(searchNearlySortedBinary([5, 10, 30, 20, 40], 20)); // Output: 3
console.log(searchNearlySortedBinary([5, 10, 30, 20, 40], 10)); // Output: 1
console.log(searchNearlySortedBinary([5, 10, 30, 20, 40], 50)); // Output: -1
console.log(searchNearlySortedBinary([5, 10, 30, 20, 40], 5)); // Output: 0