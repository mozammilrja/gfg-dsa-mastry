function kthSmallest(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}

let arr = [10, 5, 30, 12];
let k = 2;
console.log(kthSmallest(arr, k));
