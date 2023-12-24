// iterative solutions

function isSubsequence(s1, s2) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < s1.length && p2 < s2.length) {
    if (s1[p1] === s2[p2]) {
      p1++;
    }
    p2++;
  }
  return p1 === s1.length;
}

const result1 = isSubsequence("abc", "ahbgdc"); // true
const result2 = isSubsequence("axc", "ahbgdc"); // false

console.log(result1); // true
console.log(result2); // false
