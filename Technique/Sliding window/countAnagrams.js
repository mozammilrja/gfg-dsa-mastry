function countAnagrams(s, pattern) {
    const isAnagram = (str1, str2) => {
        if (str1.length !== str2.length) return false;
        return str1.split('').sort().join('') === str2.split('').sort().join('');
    };

    let count = 0;
    const patternLength = pattern.length;

    for (let i = 0; i <= s.length - patternLength; i++) {
        const substring = s.slice(i, i + patternLength);
        if (isAnagram(substring, pattern)) {
            count++;
        }
    }

    return count;
}

// Example usage:
const s = "forxxorfxdofr";
const pattern = "for";
console.log(countAnagrams(s, pattern)); // Output: 3
