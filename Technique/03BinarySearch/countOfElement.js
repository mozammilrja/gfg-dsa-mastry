function countOfElement(nums, target) {
  function findOccurrence(findFirst) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid + 1;

        if (findFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }
  const firstOccurrence = findOccurrence(true); // Find the first occurrence
  if (firstOccurrence === -1) return 0; // If the target is not found

  const lastOccurrence = findOccurrence(false); // Find the last occurrence

  return lastOccurrence - firstOccurrence + 1;
}

const nums = [1, 2, 3, 4, 4, 4, 5, 6, 7];
const target = 4;
console.log(countOfElement(nums, target)); // Output: 3
