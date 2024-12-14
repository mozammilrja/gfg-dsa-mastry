function largestWord(str) {
  let words = str.split(" ");
  let largest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > largest.length) {
      largest = words[i];
    }
  }

  return largest;
}

console.log(largestWord("hello mozammil")); // Output: "mozammil"
