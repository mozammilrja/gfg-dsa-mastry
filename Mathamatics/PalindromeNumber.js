function palindromeNumber(n) {
  let rev = 0,
    temp = n;
  while (temp !== 0) {
    let lastDigit = temp % 10;
    rev = rev * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }
  return rev === n;
}

console.log(palindromeNumber(12321));
