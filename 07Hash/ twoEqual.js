function check(arr1, arr2, N) {
  if (N !== arr2.length) {
    return false;
  }

  // Create a map to store the count of each element in array 1
  const countMap = new Map();

  // Populate the count map for array 1
  for (let i = 0; i < N; i++) {
    countMap.set(arr1[i], (countMap.get(arr1[i]) || 0) + 1);
  }

  // Iterate through array 2 and update count map
  for (let i = 0; i < N; i++) {
    if (!countMap.has(arr2[i])) {
      return false; // If the element is not in array 1, arrays are not equal
    }

    // Decrease the count in the map
    countMap.set(arr2[i], countMap.get(arr2[i]) - 1);

    // If count becomes 0, remove the element from the map
    if (countMap.get(arr2[i]) === 0) {
      countMap.delete(arr2[i]);
    }
  }

  // If the map is empty, all elements are matched
  return countMap.size === 0;
}

// Example usage
const arrA = [1, 2, 5, 4, 0];
const arrB = [2, 4, 5, 0, 1];
const N1 = 5;

const arrC = [1, 2, 5];
const arrD = [2, 4, 15];
const N2 = 3;

console.log(check(arrA, arrB, N1)); // Output: true
console.log(check(arrC, arrD, N2)); // Output: false
