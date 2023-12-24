// function AtoZ(n) {
//   for (let i = 65; i <= n; i++) {
//     console.log(String.fromCharCode(i));
//   }
// }

// AtoZ(90);
// // this for small latter

// function AtoZ(n) {
//   for (let i = 97; i <= n; i++) {
//     console.log(String.fromCharCode(i));
//   }
// }

// AtoZ(122);

// function checkVowelCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(checkVowelCount("geeks"));
function countVowels(s) {
  const vowels = new Set();

  for (let char of s) {
    if ("aeiou".includes(char)) {
      vowels.add(char);
    }
  }

  return vowels.size;
}

const inputString = "geeks";
const result = countVowels(inputString);
console.log("Total distinct vowels:", result);
