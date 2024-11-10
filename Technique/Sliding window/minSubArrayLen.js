
function minSubArrayLen(s, arr) {
  let minLength = Infinity;
  let currSum = 0;
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];

    while (currSum >= s) {
      minLength = Math.min(minLength, i - left + 1);
      currSum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength; // If minLength is not updated, return 0
}

// Usage example
const arr = [2, 3, 1, 2, 4, 3];
const s = 7;
const result = minSubArrayLen(s, arr);
console.log(`Minimum length of subarray with sum ≥ ${s}: ${result}`); // Minimum length of subarray with sum ≥ 7: 2
