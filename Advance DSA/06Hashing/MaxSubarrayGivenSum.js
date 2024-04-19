// function maxSum(arr, sum) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let curr = 0;
//     for (let j = i; j < arr.length; j++) {
//       curr += curr[j];
//       if (curr === sum) {
//         res = Math.max(res, j - i + 1);
//       }
//     }
//   }
//   return res;
// }

// let arr = [3, 1, 0, 1, 8, 2, 3, 6];
// let sum = 5;

// console.log(maxSum(arr, sum));

function maxSubArray(arr, sum) {
  let m = new Map();
  let prefiSum = 0;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    prefiSum += arr[i];
    if (prefiSum === sum) {
      res = i + 1;
    }
    if (m.has(prefiSum) === false) {
      m.set(prefiSum, i);
    }
    if (m.has(prefiSum - sum)) {
      res = Math.max(prefiSum - sum);
    }
  }
  return res;
}

let arr = [8, 3, -7, -4, 1];
let sum = -8;

console.log(maxSubArray(arr, sum));
