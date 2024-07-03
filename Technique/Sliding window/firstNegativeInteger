function firstNegativeIntegerBruteForce(arr, k) {
  if (arr.length < k) return [];

  let result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let nagative = false;
    for (let j = 0; j < k; j++) {
      if (arr[i + j] < k) {
        result.push(arr[i + j]);
        nagative = true;
        break;
      }
    }
    if (!nagative) {
      result.push(0);
    }
  }
  return result;
}

// Example usage:
const arr = [-8, 2, 3, -6, 10];
const k = 2;
console.log(firstNegativeIntegerBruteForce(arr, k));
