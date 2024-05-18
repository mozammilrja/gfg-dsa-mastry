function LCS(s1, s2, m, n) {
  if (m === 0 || n === 0) return 0;

  if (s1[m - 1] === s2[n - 1]) {
    return 1 + LCS(s1, s2, m - 1, n - 1);
  } else {
    return Math.max(LCS(s1, s2, m - 1, n), LCS(s1, s2, m, n - 1));
  }
}
const s1 = "ABCBDAB";
const s2 = "BDCAB";
const m = s1.length;
const n = s2.length;
console.log(LCS(s1, s2, m, n)); // Output: 4 (LCS is "BCAB")
