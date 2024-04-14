function vowelCheck(str) {
  let count = 0;
  for (let i = 1; i <= str.length; i++) {
    if ("aeiou".includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(vowelCheck("mozammil"));

