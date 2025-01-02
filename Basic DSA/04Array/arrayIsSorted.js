// function isSorted(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// let arr = [7, 20, 30, 10];
// console.log(isSorted(arr));

// efficient way

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      console.log(arr[i])
      // return false;
    }
  }
  return true;
}

let arr = [15, 12, 30, 2, 35];
console.log(isSorted(arr));
