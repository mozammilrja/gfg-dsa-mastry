function DitingVowelCount(str) {
  let count = new Set();
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      count.add(str[i]);
    }
  }
  return count.size;
}

console.log(DitingVowelCount("geeks"));
