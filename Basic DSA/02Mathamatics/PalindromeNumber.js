function palindromeNumber(n) {
  let rev = 0;
  let temp = n;
  while (temp !== 0) {
    let lastDigit = temp % 10;
    rev = rev * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }
  return rev === n;
}

console.log(palindromeNumber(12321));


function isPalindromeNumber(num) {
  // Convert the number to a string
  const str = num.toString();
  
  // Use two pointers to compare characters
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// Example usage
console.log(isPalindromeNumber(121));  // Output: true
console.log(isPalindromeNumber(-121)); // Output: false
console.log(isPalindromeNumber(10));   // Output: false
