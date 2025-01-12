function findFloor(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let floor = -1; // Initialize to -1 to handle cases where no floor exists

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return arr[mid]; // Exact match
    }

    if (arr[mid] < target) {
      floor = arr[mid]; // Update floor
      low = mid + 1; // Search right half
    } else {
      high = mid - 1; // Search left half
    }
  }

  return floor; // Return the largest element <= target
}

const arr = [1, 2, 8, 10, 12, 19];
const target = 5;

const floor = findFloor(arr, target);
if (floor !== -1) {
  console.log(`The floor of ${target} is ${floor}.`);
} else {
  console.log(`No floor exists for ${target}.`);
}
