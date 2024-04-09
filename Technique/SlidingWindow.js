// function maxSubArray(arr, k) {
//   let curr = 0;
//   for (let i = 0; i < k; i++) {
//     curr += arr[i];
//     let res = curr,
//       n = arr.length;
//     for (let i = k; i < n; i++) {
//       corr += arr[i] - arr[i - k];
//       res = Math.max(res, curr);
//     }
//   }
//   return res;
// }

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
