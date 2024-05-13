// function longestDistinct(s) {
//   let n = s.length,
//     res = 0;

//   for (let i = 0; i < n; i++) {
//     let set = new Set();
//     for (let j = i; j < n; j++) {
//       if (set.has(s[j]) === false) {
//         set.add(s[j]);
//         res = Math.max(res, j - i + 1);
//       } else {
//         break;
//       }
//     }
//   }
//   return res;
// }

// console.log(longestDistinct("abcdabc")); // Output: 4
// //Time complexity O(n^2)

function longestDistinct(str) {
  let n = str.length;
  let res = 0;
  let prev = new Map();
  let i = 0;
  for (let j = 0; j < n; j++) {
    if (!prev.has(str[j])) prev.set(str[j], -1);
    i = Math.max(i, prev.get(str[j]) + 1);
    let maxEnd = j - i + 1;
    res = Math.max(res, maxEnd);
    prev.set(str[j], j);
  }
  return res;
}

let str = "geeksforgeeks";
let len = longestDistinct(str);
console.log(
  "The length of the longest distinct characters substring is " + len
);
//Time complexity O(n)