function isPanagram(str) {
  let count = 0;

  for (let i = 65; i <= 90; i++) {
    // Check if the current uppercase letter exists in the string
    if (
      str.includes(String.fromCharCode(i)) ||
      str.includes(String.fromCharCode(i + 32))
    ) {
      count++;
    }
  }

  // If count is 26, all letters from A to Z are present in the string
  return count === 26 ? 1 : -1;
}

console.log(isPanagram("Thequickbrownfoxjumpsoverthelazydog")); // Output: 1
