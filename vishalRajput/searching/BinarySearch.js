// function BinarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7], 5));
// console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7], 8));
// console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7], 1));



// how to solve using recursion
function BinarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return BinarySearch(arr, target, mid + 1, right);
  } else {
    return BinarySearch(arr, target, left, mid - 1);
  }
}

/*  */