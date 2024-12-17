// //Brutforce

// function LongestSubStrKUniqueCharacters(str, k) {
//   let largest = 0;

//   for (let i = 0; i < str.length; i++) {
//     let sum = 0;
//     for (let j = i; j < str.length; j++) {
//       largest += str[j];
//       if (sum === k) {
//       }
//       largest = Math.max(sum, j - i + 1);
//     }
//   }
//   return largest;
// }

// let str = aabacbebebe;
// let k = 3;

// console.log(LongestSubStrKUniqueCharacters(str, k)); //Output: 7

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
