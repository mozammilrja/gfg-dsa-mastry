function reverseVowels(str) {
  const vowels = "aeiouAEIOU";
  let left = 0;
  let right = str.length - 1;

  // Convert string to an array so we can modify individual characters
  let arr = str.split("");

  while (left < right) {
    if (vowels.includes(arr[left]) && vowels.includes(arr[right])) {
      // Swap vowels
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } 
  }

  // Convert the array back to a string and return it
  return arr.join("");
}

console.log(reverseVowels("leetcode")); // Output: "leotcede"
