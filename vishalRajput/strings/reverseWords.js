function reverseWords(str) {
  let word = str.trim().split(/\s+/);

  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    [word[left], word[right]] = [word[right], word[left]];
    left++;
    right--;
  }

  return word.join(" ");
}

console.log(reverseWords("hello world"));
console.log(reverseWords("a good   example"));  
