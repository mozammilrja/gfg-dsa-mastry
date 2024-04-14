// navie solutions

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let res = s1.split("").sort().join("");
  let res2 = s2.split("").sort().join("");
  return res === res2;
}
console.log(isAnagram("anagram", "nagaram"));
