// A JavaScript program to find if
// there is a zero sum subarray

function subArrayExists(arr, n) {
  let sumSet = new Set();

  // Traverse through array
  // and store prefix sums
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];

    // If prefix sum is 0 or
    // it is already present
    if (sum === 0 || sumSet.has(sum)) {
      return true;
    }

    sumSet.add(sum);
  }
  return false;
}

// Driver code
let arr = [-3, 2, 3, 1, 6];
let n = arr.length;
if (subArrayExists(arr, n)) {
  console.log("Found a subarray with 0 sum");
} else {
  console.log("No Such Sub Array Exists!");
}
