// // Recusive solution

// function sum(arr, b, e) {
//   let s = 0;
//   for (let i = b; i <= e; i++) s += arr[i];
//   return s;
// }

// function minPages(arr, n, k) {
//   let INT_MAX = 1000000000;
//   if (k == 1) return sum(arr, 0, n - 1);
//   if (n == 1) return arr[0];
//   let res = INT_MAX;
//   for (let i = 1; i < n; i++) {
//     res = Math.min(res, Math.max(minPages(arr, i, k - 1), sum(arr, i, n - 1)));
//   }
//   return res;
// }

// let arr = [10, 20, 10, 30];
// let n = arr.length;
// let k = 2;

// console.log(minPages(arr, n, k));

function isFeasible(arr, n, k, ans) {
  let req = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (sum + arr[i] > ans) {
      req++;
      sum = arr[i];
    } else {
      sum += arr[i];
    }
  }
  return req <= k;
}

function minPages(arr, n, k) {
  let sum = 0,
    mx = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    mx = Math.max(mx, arr[i]);
  }
  let low = mx,
    high = sum,
    res = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isFeasible(arr, n, k, mid)) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
}

let arr = [10, 20, 10, 30];
let n = arr.length;
let k = 2;

console.log(minPages(arr, n, k));
