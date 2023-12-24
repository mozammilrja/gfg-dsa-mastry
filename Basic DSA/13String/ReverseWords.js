// function Reverseords(str) {
//   const words = str.split(".");
//   const reversedWords = words.reverse();
//   return reversedWords.join(".");
// }

// console.log(Reverseords("my name is mozammil"));

// Function to reverse words in a given string.
function reverseWords(S) {
  // Code here
  const words = S.split(".");
  const reversedWords = words.reverse();
  return reversedWords.join(".");
}

// Example usage:

const inputString1 = "i.like.this.program.very.much";
console.log(reverseWords(inputString1)); // Output: much.very.program.this.like.i

const inputString2 = "pqr.mno";
console.log(reverseWords(inputString2)); // Output: much.very.program.this.like.i
