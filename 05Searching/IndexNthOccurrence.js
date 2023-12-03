function IndexNthOccurrence(arr, x, n) {
  let low = 0;
  let high = arr.length - 1;
  let occurrenceCount = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) {
      occurrenceCount++;
      if (occurrenceCount === n) {
        return mid; // Return the index of the nth occurrence
      } else {
        low = mid + 1; // Change to search in the right half for the next occurrence
      }
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Return -1 if the nth occurrence is not found
}

console.log(IndexNthOccurrence([1, 10, 10, 10, 20, 20, 40, 40, 40], 20, 2));
