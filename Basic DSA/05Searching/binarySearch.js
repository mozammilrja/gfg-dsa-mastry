function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
    low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); //output 4

// function search(arr, N, X) {
//   for (let i = 0; i < N; i++) {
//     if (arr[i] === X) {
//       return i; // Return the index if element is found
//     }
//   }
//   return -1; // Return -1 if element is not found
// }

// // Example usage:
// // let arr1 = [1, 2, 3, 4];
// let arr1 = [1, 10, 10, 10, 20, 20, 40];

// let N1 = arr1.length;
// let X1 = 4;
// console.log(search(arr1, N1, X1)); // Output: 2

// let arr2 = [1, 2, 3, 4, 5];
// let N2 = arr2.length;
// let X2 = 5;
// console.log(search(arr2, N2, X2)); // Output: 4
