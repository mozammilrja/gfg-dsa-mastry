// function reverseString(s) {
//   let left = 0;
//   let righ = s.length - 1;

//   while (left < righ) {
//     [s[left], s[righ]] = [s[righ], s[left]];
//     left++;
//     righ--;
//   }
//   return s;
// }

// let s = ["h", "e", "l", "l", "o"];

// console.log(reverseString(s));

function reverseString(s) {
  return s.reverse();
}

let s = ["h", "e", "l", "l", "o"];

console.log(reverseString(s));
