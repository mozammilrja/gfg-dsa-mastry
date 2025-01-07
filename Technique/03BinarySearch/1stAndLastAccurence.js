// first occecurence in array

// function firstOccurrence(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let result = -1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       result = mid;
//       right = mid - 1;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return result;
// }

// const numsAsc = [1, 2, 3, 4, 4, 4, 5, 6, 7];
// const targetAsc = 4;
// const resultAsc = firstOccurrence(numsAsc, targetAsc);
// console.log(resultAsc); // Output: 3

// last Occurrence
// function lastOccurrence(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let result = -1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       result = mid;
//       left = mid + 1;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return result;
// }

// const nums = [1, 2, 3, 4, 4, 4, 5, 6, 7];
// const target = 4;
// const resul = lastOccurrence(nums, target);
// console.log(resul); // Output: 5

function firstAndLastOccurrence(nums, target) {
  // Helper function to perform binary search
  function binarySearch(findFirst) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid; // We found the target
        if (findFirst) {
          // Search the left side for the first occurrence
          right = mid - 1;
        } else {
          // Search the right side for the last occurrence
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1; // Search the right side
      } else {
        right = mid - 1; // Search the left side
      }
    }
    return result;
  }

  const firstOccurrence = binarySearch(true); // Find the first occurrence
  const lastOccurrence = binarySearch(false); // Find the last occurrence

  return [firstOccurrence, lastOccurrence];
}



const numsAsc = [1, 2, 3, 4, 4, 4, 5, 6, 7];
const targetAsc = 4;
const resultAsc = firstAndLastOccurrence(numsAsc, targetAsc);
console.log(resultAsc); // Output: [3, 5]
