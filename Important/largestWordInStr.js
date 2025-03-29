function largestWordInStr(str) {
  let word = str.split(" ");
  let largest = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > largest) {
      largest = word[i];
    }
  }
  return largest;
}
console.log(largestWordInStr("Hello world this is a test"));
