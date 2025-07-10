//brutforce 
function lengthOfLongestSubstring(s,k) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let set = new Set();
    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        break;
      }
      set.add(s[j]);
      console.log("Checking:", s.slice(i, j + 1)); // 👈 Substring from i to j

      maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  return maxLen;
}

// Example usage:

console.log(lengthOfLongestSubstring("xxxx")); // Output: 4
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 8
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 5
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 6
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("abcd")); // Output: 4
console.log(lengthOfLongestSubstring("aabca")); // Output: 5
