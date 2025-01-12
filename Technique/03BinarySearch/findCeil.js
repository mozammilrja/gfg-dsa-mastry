function findCeil(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let ceil = -1; // Initialize to -1 to handle cases where no ceil exists

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return arr[mid]; // Exact match
    }

    if (arr[mid] > target) {
      ceil = arr[mid]; // Update ceil
      high = mid - 1; // Search left half
    } else {
      low = mid + 1; // Search right half
    }
  }

  return ceil; // Return the smallest element >= target
}

const arr = [1, 2, 8, 10, 12, 19];
const target = 5;

const ceil = findCeil(arr, target);
if (ceil !== -1) {
  console.log(`The ceil of ${target} is ${ceil}.`);
} else {
  console.log(`No ceil exists for ${target}.`);
}
