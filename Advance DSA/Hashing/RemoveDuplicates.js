function printNonRepeated(arr) {
  // Create a map to store frequency of each element
  const frequency = new Map();

  // Iterate through the array to count frequency of each element
  for (let num of arr) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  // Initialize an empty result array
  const result = [];

  // Iterate through the array again to find non-repeated elements
  for (let num of arr) {
    if (frequency.get(num) === 1) {
      result.push(num);
    }
  }

  // Return the result array
  return result;
}

// Example usage:
const arr1 = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7];
console.log(printNonRepeated(arr1)); // Output: [4, 5, 6, 7]

const arr2 = [10, 20, 40, 30, 10];
console.log(printNonRepeated(arr2)); // Output: [20, 40, 30]
