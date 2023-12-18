function PalindromeStrings(str) {
  let result = str.split("").reverse().join("");
  return result === str;
}

let str = "abba";
let count = str.length;

console.log(PalindromeStrings(str), count);


// time complexity O(n)
// space complexity O(n) b/c linear