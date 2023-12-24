function lastWordLength(str) {
  let words = str.split(" ");
  return words[words.length - 1].length;
}

console.log(lastWordLength("my name mozammil"));
