// //Brutforce
// Longest Substring Without Repeating Characters
function lengthOfLongestUniqueSubstring(s) {
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

console.log(lengthOfLongestUniqueSubstring("xxxx")); // Output: 1
console.log(lengthOfLongestUniqueSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestUniqueSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestUniqueSubstring("")); // Output: 0
console.log(lengthOfLongestUniqueSubstring("a")); // Output: 1
console.log(lengthOfLongestUniqueSubstring("au")); // Output: 2


//sliding windo

function lengthOfLongestUniqueSubstring(s) {
  let largest = 0;
  let set = new Set();
  let left = 0;

  // Sliding window approach
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    largest = Math.max(largest, right - left + 1);
  }

  return largest;
}

console.log(lengthOfLongestUniqueSubstring("xxxx")); // Output: 1
console.log(lengthOfLongestUniqueSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestUniqueSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestUniqueSubstring("")); // Output: 0
console.log(lengthOfLongestUniqueSubstring("a")); // Output: 1
console.log(lengthOfLongestUniqueSubstring("au")); // Output: 2



function lengthOfLongestUniqueSubstring(s) {
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

console.log(lengthOfLongestUniqueSubstring("xxxx")); // Output: 1
console.log(lengthOfLongestUniqueSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestUniqueSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestUniqueSubstring("")); // Output: 0
console.log(lengthOfLongestUniqueSubstring("a")); // Output: 1
console.log(lengthOfLongestUniqueSubstring("au")); // Output: 2

