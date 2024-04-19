// Naive implementation

// function isSum(arr, n, sum) {
//   for (let i = 0; i < n; i++) {
//     let curr_sum = 0;
//     for (let j = i; j < n; j++) {
//       curr_sum += arr[j];
//       if (curr_sum === sum) return true;
//     }
//   }
//   return false;
// }

// let arr = [5, 8, 6, 13, 3, -1];
// let sum = 22;
// let n = arr.length;

// console.log(isSum(arr, n, sum));

function isSum(arr, n, sum) {
  let s = new Set();
  let pre_sum = 0;
  for (let i = 0; i < n; i++) {
    if (pre_sum === sum) return true;
    pre_sum += arr[i];
    if (s.has(pre_sum - sum)) return true;
    s.add(pre_sum);
  }
  return false;
}

let arr = [5, 8, 6, 13, 3, -1];
let sum = 22;
let n = arr.length;

console.log(isSum(arr, n, sum));
// time complexity O(n)