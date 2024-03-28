function firstOccurrenceStr(str1, str2) {
  return str1.indexOf(str2);
}

let str1 = "hello world";
let str2 = "world";

let result = firstOccurrenceStr(str1, str2);
console.log(
  `The position of the first occurrence of "${str2}" in "${str1}" is ${result}.`
);
// Output: The position of the first occurrence of "world" in "hello world" is 6.