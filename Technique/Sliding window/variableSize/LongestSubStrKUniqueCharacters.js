// //Brutforce

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

function longestSubstrWithKUniqueChars(str, k) {
    let windowStart = 0, maxLength = 0;
    const charFrequency = new Map();

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (!charFrequency.has(rightChar)) {
            charFrequency.set(rightChar, 0);
        }
        charFrequency.set(rightChar, charFrequency.get(rightChar) + 1);

        while (charFrequency.size > k) {
            const leftChar = str[windowStart];
            charFrequency.set(leftChar, charFrequency.get(leftChar) - 1);
            if (charFrequency.get(leftChar) === 0) {
                charFrequency.delete(leftChar);
            }
            windowStart++;
        }

        if (charFrequency.size === k) {
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        }
    }

    return maxLength;
}

let str = "aabacbebebe";
let k = 3;
console.log(longestSubstrWithKUniqueChars(str, k)); // Output: 7
