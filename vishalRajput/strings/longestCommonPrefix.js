function longestCommonPrefix(strs) {
  let left = strs[0];
  let res = "";
  let last = strs[strs.length - 1];
  for (let i = 0; i < left.length; i++) {
    if (left[i] === last[i]) {
      res += left[i];
    }
  }
  return res;
}

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
