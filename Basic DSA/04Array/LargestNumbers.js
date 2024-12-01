function LargestNumbers(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}
console.log(LargestNumbers([3, 6, 2, 56, 32, 5, 89, 32]));
