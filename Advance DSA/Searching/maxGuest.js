// max guest meet count

function maxGuest(arr, dep, n) {
  arr.sort(function (a, b) {
    return a - b;
  });
  dep.sort(function (a, b) {
    return a - b;
  });

  let i = 1,
    j = 0,
    res = 1,
    curr = 1;
  while (i < n && j < n) {
    if (arr[i] < dep[j]) {
      curr++;
      i++;
    } else {
      curr--;
      j++;
    }
    res = Math.max(curr, res);
  }
  return res;
}

let arr = [900, 600, 700];
let dep = [1000, 800, 730];
let n = arr.length;

console.log(maxGuest(arr, dep, n));
// time coplexity o(nlogn)