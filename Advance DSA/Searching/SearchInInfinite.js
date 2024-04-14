function searchInInfiniteArray(arr, target) {
  let low = 0;
  let high = 1;

  // Find bounds
  while (arr[high] < target) {
    low = high;
    high *= 2;
  }

  // Binary search within bounds
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid; // Found target
    } else if (arr[mid] < target) {
      low = mid + 1; // Update lower bound
    } else {
      high = mid - 1; // Update upper bound
    }
  }

  return -1; // Target not found
}
const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const target = 12;
console.log(searchInInfiniteArray(arr, target)); // Output: 12
