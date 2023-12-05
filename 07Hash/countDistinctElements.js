function countDistinctElements(arr) {
  // Use a Set to store distinct elements
  const distinctSet = new Set(arr);

  // Return the size of the Set, which is the count of distinct elements
  return distinctSet.size;
}

// Example usage
const array = [1, 2, 3, 4, 1, 2, 5];
const distinctCount = countDistinctElements(array);

console.log("Count of distinct elements:", distinctCount);
