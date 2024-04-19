
// function max(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let curr = 0;
//     for (let j = i; j < arr.length; j++) {
//       curr += arr[j];
//       max = Math.max(max, curr);
//     }
//   }
//   return max;
// }

// let arr = [2, 3, -8, 7, -1, 2, 3];
// console.log(max(arr));
// Time complexity o(n)

function maxSubArray(arr) {
  let maxEnd = arr[0];
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEnd = Math.max(maxEnd + arr[i], arr[i]);
    res = Math.max(maxEnd, res);
  }
  return res;
}
let arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubArray(arr)); // Output 11

// Time complexity o(n)