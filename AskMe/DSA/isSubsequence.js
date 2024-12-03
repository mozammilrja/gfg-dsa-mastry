// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some
// (can be none) of the characters without disturbing the relative positions
//  of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

function substring(s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
}

console.log(substring("ace", "abcde"));

//using recursive method
// function isSubsequence(s, t) {
//   if (!s.length) return true;
//   if (!t.length) return false;

//   if (s[0] === t[0]) {
//     return isSubsequence(s.slice(1), t.slice(1));
//   } else {
//     return isSubsequence(s, t.slice(1));
//   }
// }

// console.log(isSubsequence("ace", "abcde")); // true
// console.log(isSubsequence("abc", "ahbgdc")); // true
// console.log(isSubsequence("axc", "ahbgdc")); // false
