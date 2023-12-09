function largestSubArray(arr, n) {
  let sum = 0;
  let maxLength = 0;
  let summap = {};

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) {
      maxLength = i + 1;
    } else if (sum in summap) {
      maxLength = Math.max(maxLength, i - summap[sum]);
    } else {
      summap[sum] = i;
    }
  }
  return;
}
