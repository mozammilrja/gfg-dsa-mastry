function IndexFirstOccurrence(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) {
      if (mid === 0 || arr[mid - 1] !== x) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(IndexFirstOccurrence([1, 10, 10, 10, 20, 20, 40], 10));
