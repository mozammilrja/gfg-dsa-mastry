let arr = [100, 200, 400, 1000, 10, 20];
let n = arr.length;
let x = 10;

// Function to search for the index of the first occurrence of element x in array arr
const search = (arr, n, x) => {
  for (let i = 0; i < n; i++) {
    // Check if current element is equal to x
    if (arr[i] === x) {
      // If found, return the index
      return i;
    }
  }
  // If element is not found, return -1
  return -1;
};

// Call the search function and log the result
console.log(search(arr, n, x)); // Output: 4 (Index of first occurrence of element 10 in the array)
// the time complexity is linear, O(n).