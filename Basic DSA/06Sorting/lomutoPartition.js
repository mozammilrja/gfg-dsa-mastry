function LomutoPartition(arr, l, h) {
  let pivot = arr[h];
  let i = l - 1;

  for (let j = l; j <= h - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Corrected swapping
    }
  }

  [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
  return i + 1;
}

// Example usage:
const arr = [4, 9, 2, 7, 1, 5, 8];
const l = 0;
const h = arr.length - 1;
const pivotIndex = LomutoPartition(arr, l, h);

console.log("Array after partitioning:", arr);
console.log("Pivot index:", pivotIndex);
