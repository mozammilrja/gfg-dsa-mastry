function revWords(str) {
  let res = "";

  // Split input string by " " space to get each word as array
  let words = str.split("  ");

  // Loop over the array from back
  for (let i = words.length - 1; i >= 0; i--) {
    // Add words to res with space
    res += words[i] + " ";
  }

  // Trim to remove the last space in the end
  return res.trim();
}

console.log(revWords("apple banana kiwi")); // kiwi banana apple
console.log(revWords("I am John Doe")); // Doe John am I
console.log(revWords("orange")); // orange
