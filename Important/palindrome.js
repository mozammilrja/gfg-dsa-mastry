function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(palindrome("madam"));
