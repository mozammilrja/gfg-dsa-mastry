// Using Two pointers

function reverseStr(str) {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
  return str;
}
let s = ["H", "a", "n", "n", "a", "h"];
console.log(reverseStr(s));
