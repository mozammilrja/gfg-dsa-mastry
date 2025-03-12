// let s = "mozammil";
// let rev = "";

// for (let i = s.length - 1; i >= 0; i--) {
//   rev = rev + s.charAt(i);
// }

// console.log(rev);

function palindromeStrings(str) {
  let len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}


console.log(palindromeStrings("madyywewewam"));