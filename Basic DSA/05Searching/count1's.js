function countOne(arr, n) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === 1) {
      low = mid + 1;
    } else high = mid - 1;
  }
  return low;
}

let arr1 = [1, 1, 1, 1, 1, 0, 0, 0];
let N1 = arr1.length;
let result1 = countOne(arr1, N1);
console.log(result1); // Output: 5
