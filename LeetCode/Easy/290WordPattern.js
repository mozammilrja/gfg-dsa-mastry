function wordPattern(pattern, s) {
  let hashmap = new Map();
  let word = s.split(" ");

  for (let i = 0; i < pattern.length; i++) {
    if (hashmap.has(pattern[i]) && hashmap.get(pattern[i]) !== word[i]) {
      return false;
    }
    hashmap.set(pattern[i], word[i]);
  }
  return true;
}

let pattern = "abba";
let s = "dog cat cat dog";
console.log(wordPattern(pattern, s)); // true
let pattern2 = "aaaa";
let s2 = "dog cat cat dog";
console.log(wordPattern(pattern2, s2)); // false
