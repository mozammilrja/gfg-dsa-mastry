// find the mean and medium element in array

// mean
function mean(arr, n) {
  const sum = arr.reduce((a, b) => a + b);
  return Math.floor(sum / n);
}

let arr = [15, 12, 30, 2, 35];
console.log(mean(arr, 5));
// medium

function median(arr, n) {
  arr.sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  if (n % 2 !== 0) {
    return arr[mid];
  }
  return Math.floor(arr[mid - 1] + arr[mid / 2]);
}
const N1 = 5;
const arr1 = [1, 2, 19, 28, 5];
console.log(mean(arr1, N1), median(arr1, N1)); // Output: 11 5
