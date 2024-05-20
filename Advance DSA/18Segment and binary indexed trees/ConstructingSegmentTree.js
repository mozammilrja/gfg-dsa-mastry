function CST(ss, se, si, arr, tree) {
  if (ss === se) {
    tree[si] = arr[ss];
    return arr[ss];
  }

  let mid = Math.floor((ss + se) / 2);

  tree[si] =
    CST(ss, mid, 2 * si + 1, arr, tree) +
    CST(mid + 1, se, 2 * si + 2, arr, tree);

  return tree[si];
}

let arr = [10, 20, 30, 40];
let n = 4;

let tree = new Array(4 * n);
console.log(CST(0, n - 1, 0, arr, tree));
