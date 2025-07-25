function lengthOfLastWord(strs) {
  let word = strs.trim().split(" ");

  return word[word.length - 1].length;
}

console.log(lengthOfLastWord("hello world "));
