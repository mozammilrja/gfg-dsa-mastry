// function maxEvenOddSubArray(arr) {
//   let res = 1;
//   for (let i = 0; i < arr.length; i++) {
//     let curr = 1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (
//         (arr[j] % 2 === 0 && arr[j - 1] % 2 !== 0) ||
//         (arr[j] % 2 !== 0 && arr[j - 1] % 2 === 0)
//       ) {
//         curr++;
//       } else {
//         break;
//       }
//     }
//     res = Math.max(res, curr);
//   }
//   return res;
// }

// let arr = [10, 12, 14, 7, 8];
// console.log(maxEvenOddSubArray(arr)); // Output: 3
// Time complexity o(n^2)


function maxEvenOddSubArray(arr) {
  let res = 1;
  let curr = 1;

  for (let i = 1; i < arr.length; i++) {
    if (
      (arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) ||
      (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0)
    ) {
      curr++;
      res = Math.max(res, curr);
    } else {
      curr = 1;
    }
  }
  return res;
}

let arr = [10, 12, 14, 7, 8];
console.log(maxEvenOddSubArray(arr)); // Output: 3

// Time complexity o(n)