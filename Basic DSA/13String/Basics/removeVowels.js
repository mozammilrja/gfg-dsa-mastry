function removeVowels(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    if (!"aeiou".includes(str[i])) {
      res.push(str[i]);
    }
  }
  return res.join("");
}

console.log(removeVowels("hello"));
