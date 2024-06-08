function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lower case
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Check if the cleaned string is equal to its reverse
  return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("race CAR")); // true
console.log(isPalindrome("2A3*3a2")); // true
console.log(isPalindrome("2A3 3a2")); // true
console.log(isPalindrome("2_A3*3#A2")); // true
console.log(isPalindrome("not a palindrome")); // false
