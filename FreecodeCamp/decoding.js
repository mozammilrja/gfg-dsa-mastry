function rot13(str) {
  // Helper function to decode a single character
  function decodeChar(char) {
    const charCode = char.charCodeAt(0);
    // Check if the character is an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      // Shift the character by 13 places
      return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    }
    // Return the character unchanged if it's not an uppercase letter
    return char;
  }

  // Decode each character and join the result into a string
  return str.split("").map(decodeChar).join("");
}

// Example usage:
console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // Output: "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // Output: "FREE LOVE?"
