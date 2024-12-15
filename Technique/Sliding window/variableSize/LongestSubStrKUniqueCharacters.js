function LongestSubStrKUniqueCharacters(str, k) {
  let largest = 0;

  for (let i = 0; i < str.length; i++) {
    let sum = 0;
    for (let j = i; j < str.length; j++) {
      largest += str[j];
      if (sum === k) {
      }
      largest = Math.max(sum, j - i + 1);
    }
  }
  return largest;
}

let str = aabacbebebe;
let k = 3;

console.log(LongestSubStrKUniqueCharacters(str, k)); //Output: 7
