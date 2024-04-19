const search = (arr, n, x) => {
  let low = 0; // Initialize the low pointer to the start index of the array
  let high = n - 1; // Initialize the high pointer to the end index of the array

  // Loop until low is less than or equal to high
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Calculate the middle index

    // Check if the middle element is equal to the target element
    if (arr[mid] === x) {
      return mid; // Return the index of the target element
    }

    // Check if the left half of the array is sorted
    if (arr[low] < arr[mid]) {
      // If yes, check if the target element lies within the range of elements in the sorted left half
      if (x >= arr[low] && x < arr[mid]) {
        high = mid - 1; // Update high to search in the left half
      } else {
        low = mid + 1; // Update low to search in the right half
      }
    } else {
      // If the left half is not sorted, the right half must be sorted
      // Check if the target element lies within the range of elements in the sorted right half
      if (x > arr[mid] && x <= arr[high]) {
        low = mid + 1; // Update low to search in the right half
      } else {
        high = mid - 1; // Update high to search in the left half
      }
    }
  }

  return -1; // Return -1 if the target element is not found
};

// Test array, its length, and the target element
const arr = [10, 20, 40, 60, 5, 8];
const n = 6;
const x = 5;

console.log(search(arr, n, x)); // Output: 4 (index of the target element)
// Time Complexity: O(Log(N))
