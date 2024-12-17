// //Brutforce
// Longest Substring With Without Repeating Characters 

function lengthOfLongestSubstring(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let set = new Set();
        for (let j = i; j < s.length; j++) {
            if (set.has(s[j])) {
                break; // If a duplicate character is found, break out of the inner loop
            }
            set.add(s[j]);
            maxLength = Math.max(maxLength, j - i + 1);
        }
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("xxxx")); // Output: 1
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("a")); // Output: 1
console.log(lengthOfLongestSubstring("au")); // Output: 2


//sliding windo

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let maxLength = 0;
  let start = 0;
  let end = 0;

  while (end < s.length) {
    if (!set.has(s[end])) {
      set.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, set.size);
    } else {
      set.delete(s[start]);
      start++;
    }
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("xxxx")); // Output: 1
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("a")); // Output: 1
console.log(lengthOfLongestSubstring("au")); // Output: 2



function lengthOfLongestSubstring(s) {
    let map = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start);
        }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("xxxx")); // Output: 1
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("a")); // Output: 1
console.log(lengthOfLongestSubstring("au")); // Output: 2

