// function IndexLastOccurrence(arr, x) {
//   let low = 0;
//   let high = arr.length - 1;
//   let result = -1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] === x) {
//       result = mid;
//       low = mid + 1; // Change to search in the right half for the next occurrence
//     } else if (arr[mid] < x) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return result; // Return the index of the last occurrence
// }

// console.log(IndexLastOccurrence([1, 10, 10, 10, 20, 20, 40, 40, 40], 20));

function lastOcc(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) {
      if (mid === n - 1 || arr[mid + 1] !== x) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(lastOcc([1, 10, 10, 10, 20, 20, 40, 40, 40], 20));
