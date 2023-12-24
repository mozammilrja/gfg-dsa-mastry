// navie solutions

// function isAnagram(s1, s2) {
//   if (s1.length !== s2.length) {
//     return false;
//   }
//   let res = s1.split("").sort().join("");
//   let res2 = s2.split("").sort().join("");
//   return res === res2;
// }
// console.log(isAnagram("anagram", "nagaram"));

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let count = new Array(256).fill(0);
  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i)]++;
    count[s2.charCodeAt(i)]--;
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("anagram", "nagaram"));
