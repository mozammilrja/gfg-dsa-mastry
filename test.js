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

// function containsDuplicates(arr) {
//   let res = 1;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[res - 1] === arr[i]) {
//       //   arr[res] = arr[i];
//       return true;
//     }
//   }
//   return false;
// }
// let arr = [2, 14, 18, 22, 22];
// console.log(containsDuplicates(arr));

// const person = {
//   firstName: "John",
//   lastName: "Smith",
//   fullNmae: function (state, country) {
//     return this.firstName + " " + this.lastName + " " + state + " " + country;
//   },
// };

// const person2 = {
//   firstName: "Jane",
//   lastName: "Smith",
// };

// // call method
// console.log(person.fullNmae.call(person, "delhi", "india")); // o/p -> Jane Smith delhi
// console.log(person.fullNmae.apply(person2, ["delhi", "india"])); // o/p -> Jane Smith delhi

// const result = person.fullNmae.bind(person2, "delhi", "india");
// console.log(result()); // o/p -> Jane Smith delhi
// console.log("Before promise start");
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = false;
//     if (data) {
//       resolve("promise resolve");
//     } else {
//       reject("promise reject");
//     }
//   }, 0);
// });
// console.log("After promise start");

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("After promise end");

// const fetchData = async () => {
//   try {
//     const res1 = await api1();
//     const res2 = await api2();
//     const res3 = await api3();
//     const res4 = await api4();
//     const res5 = await api5();
//     // Process the results if needed
//     console.log(res1, res2, res3, res4, res5);
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Call the fetchData function
// fetchData();

// const promise = async () => {
//   console.log("start");
//   const api = await console.log("first request");
//   console.log(api);
// };
// promise();

// const a = { x: 1, y: 2, z: { name: "John" } };

// const b = a.map((item) => {
//   console.log(item);
// });

// let arr = [{a:3},{b:5},{c:"raja"}]

//     if(arr.hasOwnProperty("c")){
//      let rr=   arr.c = "mozammil"
//      console.log(rr)
//     }

//     function sumOf(num) {
//       let sum = 0;
//       for (let i = 1; i < num.length; i++) {
//         console.log(i);
//         sum = +num[i];
//       }
//     }
//     let res = [2, 4, 5, 6];
//     console.log(sumOf(res));

// this keywords

// let myObj = {
//   name: "mozammil",
//   age: 30,
//   myFun: function () {
//     console.log(this.name);
//   },
// };

// myObj.myFun();

// "use strict";

// a = 10
// console.log(a)

// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);

// Interview question

// age = 100;
// console.log(age);
// let age = 30;

// myFun()

// var myFun = function () {
//     console.log("first")
// }
// myFun()

// function myFun() {
//     console.log("Second")
// }
// myFun()

// var variable = 10;

// (() => {
//     foo = 100
//     console.log("I am an Immediately Invoked Function Expression", variable);
//     var foo = 100
//   variable = 20;
//   console.log(variable);
// })();

// console.log(foo);
// var variable = 30;

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// console.log(3+)

// function sum(...args) {
//   return function (b) {
//     return function (c) {
//       return b + c;
//     };
//   };
// }

// console.log(sum(2)(6)(1));

// function sendAutoEmail(to) {
//   return function (subject) {
//     return function (body) {
//       console.log(`Sending email to ${to} with ${subject}`);
//     };
//   };
// }
// let sendTo = sendAutoEmail("abcd@gmail.com");
// let sendWithSubject = sendTo("Hello");
// sendWithSubject("This is the body of the email.");

// (function add(a, b) {
//   console.log(a + b);
// })(3, 4);

// function sortBinaryArray(arr) {
//   arr.sort((a, b) => a - b);
//   return arr;
// }

// console.log(sortBinaryArray([1, 0, 1, 1, 1, 1, 1, 0, 0, 0]));

// function findAll(arr) {
//   // const frequency = new Map();
//   let count = 0;
//   let arr1 = [1, 2, 3];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr1.includes(arr[i])) {
//       count++;
//     } else {
//       return -1;
//     }
//   }
//   return arr1;
// }

// let arr = [1, 2, 3, 4];
// console.log(findAll(arr));
// function findAll(arr) {
//   let count = 0;
//   let arr1 = [1, 2, 3];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr1.includes(arr[i])) {
//       count++;
//     } else {
//       return -1;
//     }
//   }
//   return arr1;
// }

// let arr = [1, 2, 3, 4];
// console.log(findAll(arr)); // Output: [1, 2, 3]

// function create2DArray(m, n) {
//   return [...Array(m)].map(() => Array(n).fill(0));
// }

// console.log(create2DArray(2,5));

// Custom map polyfill

// Array.prototype.myMap = function (cb) {
//   const temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i));
//   }
//   return temp;
// };

// let arr = [2, 5];
// let result = arr.myMap((num) => {
//   return num * num;
// });
// console.log(result);

// function* genrtate() {
//   console.log("first");
//   console.log("second");
// }
// let gen = genrtate();
// console.log(gen.next());

// Map polyfill
// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this[i]));
//   }
//   return temp;
// };
// let nums = [1, 2, 3, 4];
// let res = nums.myMap((item) => {
//   return item * 2;
// });

// console.log(res);

// input => computeAmount().lacs(15).crore(5).crore(2).crore(20).thosound(6).crore(7).value();
//output 143545000

// var obj = {
//   helloWorld: function () {
//     return "hello world" + this.name;
//   },
//   name: "Hello",
// };

// var obj2 = {
//   helloWorld: obj.helloWorld(),
//   name: "Bye",
// };

// console.log(obj2.helloWorld());
// //output hello world bye

// function sumOfNumbers(str) {
//   let sum = 0;
//   let num = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(parseInt(str[i]))) {
//       num = num * 10 + parents(str[i]);
//     }
//   }
// }

// function LCS(s1, s2, m, n) {
//   if (m === 0 || n === 0) return 0;

//   if (s1[m - 1] === s2[n - 1]) {
//     return 1 + LCS(s1, s2, m - 1, n - 1);
//   } else {
//     return Math.max(LCS(s1, s2, m - 1, n), LCS(s1, s2, m, n - 1));
//   }
// }
// const s1 = "ABCBDAB";
// const s2 = "BDCAB";
// const m = s1.length;
// const n = s2.length;
// console.log(LCS(s1, s2, m, n)); // Output: 4 (LCS is "BCAB")

// Create a promise
// const fetchData = (isSuccess) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSuccess) {
//         resolve("data is fetch successfuly");
//       } else {
//         reject("Error unable to fetch data");
//       }
//     });
//   });
// };

// fetchData(false)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function Table(num, multiplier) {
//   for (let i = 1; i <= num; i++) {
//     console.log(`${i} * ${multiplier} = ${i * multiplier} `);
//   }
// }
// Table(10,2);

// function duplicate(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i - 1] === nums[i]) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(duplicate([1, 2, 3, 1, 2, 3]));

 
}
