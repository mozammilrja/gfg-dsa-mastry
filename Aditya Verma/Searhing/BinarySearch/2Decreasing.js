//arr in decreasing order

function decreasing(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      end = mid - 1; // Search in the left half
    } else {
      start = mid + 1; // Search in the right half
    }
  }
  return -1; // Target not found
}

console.log(decreasing([5, 4, 3, 2, 1], 3)); // Output: 2
console.log(decreasing([5, 4, 3, 2, 1], 6)); // Output: -1
console.log(decreasing([50, 40, 30, 20, 10], 30)); // Output: 2
