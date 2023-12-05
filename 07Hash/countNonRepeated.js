function countNonRepeated(arr, n) {
  // Create a hash map to store the frequency of each element
  const frequencyMap = new Map();

  // Count the frequency of each element
  for (let i = 0; i < n; i++) {
    const currentElement = arr[i];
    frequencyMap.set(
      currentElement,
      (frequencyMap.get(currentElement) || 0) + 1
    );
  }

  // Count the number of non-repeated elements
  let nonRepeatedCount = 0;
  frequencyMap.forEach((frequency) => {
    if (frequency === 1) {
      nonRepeatedCount++;
    }
  });

  return nonRepeatedCount;
}

// Example usage
const arr1 = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7];
const n1 = 10;
console.log(countNonRepeated(arr1, n1)); // Output: 4

const arr2 = [10, 20, 30, 40, 10];
const n2 = 5;
console.log(countNonRepeated(arr2, n2)); // Output: 3

/**
 * Count occurence of distinct elements
 * Output: {a:2, b:2,c:2,d:1,e:1,f:1}
 */

/**
 * const arr = [1, 2, 3, 4, 5]
 * {even: 6, odd: 9}
 */

const arr = ["a", "b", "c", "c", "d", "e", "b", "f", "a"];

const result = arr.reduce(
  (acc, cur) =>
    cur in acc ? { ...acc, [cur]: acc[cur] + 1 } : { ...acc, [cur]: 1 },
  {}
);
console.log(result);
