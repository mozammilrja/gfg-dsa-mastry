// Naive solutions

// function RepeatingElements(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return arr[i];
//       }
//     }
//   }
//   return -1;
// }

// let arr = [0, 2, 1, 3, 2, 2,3,3,3,3];
// console.log(RepeatingElements(arr));

function RepeatingElements(arr) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }

  return -1;
}

let arr = [0, 2, 1, 3, 2, 2, 3, 3, 3, 3];
console.log(RepeatingElements(arr));
// time complexity  O(n log n).
