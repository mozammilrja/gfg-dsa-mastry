function firstOcc(arr, n, x) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (x > arr[mid]) low = mid + 1;
    else if (x < arr[mid]) high = mid - 1;
    else {
      if (mid === 0 || arr[mid - 1] !== arr[mid]) return mid;
      else high = mid - 1;
    }
  }
  return -1;
}

function lastOcc(arr, n, x) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (x > arr[mid]) low = mid + 1;
    else if (x < arr[mid]) high = mid - 1;
    else {
      if (mid === n - 1 || arr[mid + 1] !== arr[mid]) return mid;
      else low = mid + 1;
    }
  }
  return -1;
}

function countOcc(arr, n, x) {
  let first = firstOcc(arr, n, x);

  if (first === -1) return 0;
  else return lastOcc(arr, n, x) - first + 1;
}

let arr = [10, 20, 20, 20, 40, 40];
let n = 6;
let x = 20;

console.log(countOcc(arr, n, x));
