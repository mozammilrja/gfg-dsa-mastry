// oder is not given accending or descending
function search(arr, target) {
  // compare the arr
  arr[0] < arr[1]; // accending
  arr[0] > arr[1]; // descending
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[0] < arr[1]) {
      // Ascending order
      if (arr[mid] < target) {
        start = mid + 1; // Search in the right half
      } else {
        end = mid - 1; // Search in the left half
      }
    } else {
      // Descending order
      if (arr[mid] < target) {
        end = mid - 1; // Search in the left half
      } else {
        start = mid + 1; // Search in the right half
      }
    }
  }
  return -1; // Target not found
}

console.log(search([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(search([1, 2, 3, 4, 5], 6)); // Output: -1
console.log(search([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(search([5, 4, 3, 2, 1], 3)); // Output: 2
console.log(search([5, 4, 3, 2, 1], 6)); // Output: -1
