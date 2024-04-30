function findFrequency(arr) {
  let frequencyMap = new Map();

  // Iterate through the array and count the frequency of each element
  for (let i = 0; i < arr.length; i++) {
    if (frequencyMap.has(arr[i])) {
      frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
    } else {
      frequencyMap.set(arr[i], 1);
    }
  }

  return frequencyMap;
}

// Example usage:
let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2];
let frequencyMap = findFrequency(array);

// Print the frequency of each element
frequencyMap.forEach((value, key) => {
  console.log(`Element ${key} occurs ${value} times.`);
});
