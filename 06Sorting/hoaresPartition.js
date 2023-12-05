function hoaresPartition(arr, low, high) {
  const pivot = arr[Math.floor((low + high) / 2)];
  let i = low - 1;
  let j = high + 1;

  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i >= j) {
      return j;
    }

    // Swap arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Example usage:
const arr = [4, 9, 2, 7, 1, 5, 8];
const low = 0;
const high = arr.length - 1;

const pivotIndex = hoaresPartition(arr, low, high);

console.log("Array after Hoare's partition:", arr);
console.log("Pivot index:", pivotIndex);
