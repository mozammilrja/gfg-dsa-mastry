function characterOccurance(str, latter) {
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) === latter) {
      count++;
    }
  }
  return count;
}
console.log(characterOccurance("mozammil", "m"));
