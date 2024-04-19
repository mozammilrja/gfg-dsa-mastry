function peakElement(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Check if mid element is a peak
    if (
      (mid === 0 || arr[mid] >= arr[mid - 1]) &&
      (mid === arr.length - 1 || arr[mid] >= arr[mid + 1])
    ) {
      return mid;
    }

    // If the left neighbor is greater, search left
    if (mid > 0 && arr[mid - 1] > arr[mid]) {
      high = mid - 1;
    } else {
      // Otherwise, search right
      low = mid + 1;
    }
  }

  return -1; // No peak element found
}

// Test cases
console.log(peakElement([1, 2, 3])); // Output: 2
console.log(peakElement([1, 1, 1, 2, 1, 1, 1])); // Output: 3
