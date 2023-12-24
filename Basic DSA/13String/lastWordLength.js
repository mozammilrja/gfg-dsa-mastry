function lengthOfLastWord(s) {
  // Trim any leading or trailing spaces from the string
  s = s.trim();

  // Split the string into an array of words using spaces as the delimiter
  const words = s.split(" ");

  // Return the length of the last word in the array
  return words[words.length - 1].length;
}

// Example usage:
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6
