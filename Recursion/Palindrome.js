function Palindrome(s, start, end) {
  if (start >= end) return true;

  return s[start] == s[end] && Palindrome(s, start + 1, end - 1);
}

console.log(Palindrome("acbca", 0, 4));
console.log(Palindrome("abba ", 0, 3));
