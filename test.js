// function lastWordLength(str) {
//   let words = str.split(" ");
//   return words[words.length - 1].length;
// }

// console.log(lastWordLength("my name mozammil"));
// (() => {
//   console.log("first")
// })

// var a = 5
// var b = a++ + 7

// console.log(b)

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// let x = 5;
// let y, z;
// y = ++x;
// z = x++;
// console.log(`${y}, ${z}`);

// function numberCount(x) {
//   let count = 0;

//   while (x > 0) {
//     x = Math.round(x / 10);
//     count++;
//   }
//   return count;
// }

// console.log(numberCount(234));

// function isPalindrome(x) {
//   let reverse = 0;
//   let original = x;
//   while (original > 0) {
//     const digit = original % 10;
//     reverse = reverse * 10 + digit;
//     original = ~~(original / 10);
//   }

//   return reverse === x;
// }

// console.log(isPalindrome(121)); // Output: true
// console.log(isPalindrome(-121)); // Output: false
// console.log(isPalindrome(10)); // Output: false

// counter dilemma

// function test() {
//   let count = 0;
//   function add() {
//     count += 1;
//     return count;
//   }
//   return add;
// }

// let test2 = test();
// console.log(test2());
// console.log(test2());
// console.log(test2());
// console.log(test2());
// console.log(test2());

// find factorials

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n-1);
// }

// console.log(factorial(5)); // Output 120

// function isPalindrome(n) {
//   let conStr = n.toString();
//   let result = n.toString().split("").reverse().join("");

//   let mm = conStr === result;

//   return mm;
// }

// console.log(isPalindrome(1221));

// function LongestCommanPrefix(strs) {
//   let result = strs[0];
//   let lastIndex = strs.length - 1;

//   if (strs.length === 0) {
//     return "";
//   }

//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(result) !== 0) {
//       result = result.substring(0, lastIndex);
//       if (result === 0) {
//         return "";
//       }
//     }
//     return result;
//   }
// }

// let longest = ["flower", "flow", "flight"];

// console.log(LongestCommanPrefix(longest));

// function duplicates(nums) {
//   let result = new Set(nums);
//   return result;
// }
// let nums = [1, 1, 2];
// console.log(duplicates(nums));

function containsDuplicates(arr) {
  let res = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[res - 1] === arr[i]) {
      //   arr[res] = arr[i];
      return true;
    }
  }
  return false;
}
let arr = [2, 14, 18, 22, 22];
console.log(containsDuplicates(arr));
