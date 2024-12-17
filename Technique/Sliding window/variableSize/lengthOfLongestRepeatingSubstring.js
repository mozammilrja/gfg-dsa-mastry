// Longest Substring With Repeating Characters
function lengthOfLongestRepeatingSubstring(s) {
  let largest = 0;

  // Outer loop to fix the starting point
  for (let i = 0; i < s.length; i++) {
    let char = new Set();
    
    // Inner loop to expand the substring
    for (let j = i; j < s.length; j++) {
      if (char.has(s[j])) {
        largest = Math.max(largest, j - i + 1);
      } else {
        char.add(s[j]);
      }
    }
  }

  return largest;
}

// Example usage:

console.log(lengthOfLongestRepeatingSubstring("xxxx")); // Output: 4
console.log(lengthOfLongestRepeatingSubstring("abcabcbb")); // Output: 8
console.log(lengthOfLongestRepeatingSubstring("bbbbb")); // Output: 5
console.log(lengthOfLongestRepeatingSubstring("pwwkew")); // Output: 6
console.log(lengthOfLongestRepeatingSubstring("")); // Output: 0
console.log(lengthOfLongestRepeatingSubstring("abcd")); // Output: 4
console.log(lengthOfLongestRepeatingSubstring("aabca")); // Output: 5
