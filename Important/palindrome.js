// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");

//   return str === reversed;
// }

// let s = "A man, a plan, a canal: Panama"

// console.log(palindrome(s));

function isPalindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
