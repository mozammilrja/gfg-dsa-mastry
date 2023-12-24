function merge(arr, l, m, h) {
  let n1 = m - l + 1,
    n2 = h - m;
  let left = [];
  let right = [];
  for (let i = 0; i < n1; i++) left[i] = arr[i + l];
  for (let j = 0; j < n2; j++) right[j] = arr[m + 1 + j];
  let i = 0,
    j = 0,
    k = l;
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) arr[k++] = left[i++];
    else arr[k++] = right[j++];
  }
  while (i < n1) arr[k++] = left[i++];
  while (j < n2) arr[k++] = right[j++];
  return arr;
}

let a = [10, 15, 20, 40, 8, 11, 15, 22, 25];
let l = 0,
  h = 8,
  m = 3;

a = merge(a, l, m, h);
console.log(a); // output [8, 10, 11, 15, 15,20, 22, 25, 40]
// time coplexity  n(n)