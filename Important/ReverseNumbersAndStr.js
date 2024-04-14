// Method-1

// function reverseString(str) {
//   let reverse = "";
//   for (let i = 0; i < str.length; i++) {
//     reverse = str[i] + reverse;
//   }
//   return reverse;
// }
// console.log(reverseString("hello"));

// Method-2
// function reverseString(str) {
//   let reverse = "";
//   for (let char of str) {
//     reverse = char + reverse;
//   }
//   return reverse;
// }
// console.log(reverseString("hello"));

// Method-3
function reverseString(str) {
// let rev = str.toString()
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

console.log(reverseInt(-15));