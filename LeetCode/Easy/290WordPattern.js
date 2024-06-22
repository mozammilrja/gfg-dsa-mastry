function wordPattern(pattern, s) {
  let hashmap = new Map();
  let mappedWords = new Set(); // Set to store mapped words

  let words = s.split(" ");

  if (pattern.length !== words.length) {
    return false; // If pattern length doesn't match word count, return false
  }

  for (let i = 0; i < pattern.length; i++) {
    if (hashmap.has(pattern[i])) {
      if (hashmap.get(pattern[i]) !== words[i]) {
        return false; // If pattern character is already mapped to a different word, return false
      }
    } else {
      if (mappedWords.has(words[i])) {
        return false; // If word is already mapped to a different pattern character, return false
      }
      hashmap.set(pattern[i], words[i]);
      mappedWords.add(words[i]); // Add the word to the set of mapped words
    }
  }
  return true;
}

// Test cases
let pattern = "abba";
let s = "dog dog dog dog";
console.log(wordPattern(pattern, s)); // Output: true

let pattern2 = "aaaa";
let s2 = "dog cat cat dog";
console.log(wordPattern(pattern2, s2)); // Output: false
