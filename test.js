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

// function duplicates(res) {
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

// function maxProfit(prices) {
//   let left = 0;
//   let right = 1;
//   let maxProfit = 0;
//   while (right < prices.length) {
//     if (prices[left] < prices[right]) {
//       let profit = prices[right] - prices[left];
//       maxProfit = Math.max(maxProfit, profit);
//     } else {
//       left = right;
//     }
//     right++;
//   }
//   return maxProfit;
// }
// let prices = [10, 1, 5, 6, 7, 1];
// console.log(maxProfit(prices));

// function maxSubArray(arr) {
//   let maxSum = arr[0];
//   let currentSum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < i + 3; j++) {

//         maxSum =
//     }
//   }
//   return maxSum;
// }
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// function isValid(s) {
//   if (s.length % 2 === 1) {
//     return false;
//   }
//   let stack = [];
//   const bracketsMap = new Map([
//     ["(", ")"],
//     ["[", "]"],
//     ["{", "}"],
//   ]);
//   for (const char of s) {
//     if (bracketsMap.has(char)) {
//       stack.push(char);
//     } else {
//       const lastBracket = stack.pop();
//       if (bracketsMap.get(lastBracket) !== char) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

// // Example usage:
// const expression1 = "{[()]}";
// console.log(`${expression1} is balanced: ${isValid(expression1)}`); // Output: true

// const expression2 = "{[(])}";
// console.log(`${expression2} is balanced: ${isValid(expression2)}`); // Output: false

// function merge(s1, s2) {
//   const res = [...s1, ...s2];
//   return res.sort((a, b) => a - b);
// }

// let s1 = [1, 2, 3, 4, 5];
// let s2 = [1, 2, 3, 4, 5, 4, 5];

// console.log(merge(s1, s2));

// class Node{
//   constructor(data) {
//     this.data = data;
//     this.left = null
//     this.right = null
//    }
// }

// function Inorder(head, left) {

// }

// let head = new Node(10)
// head.left = new Node(20)
// head.right = new Node(30)
// head.left.left = new Node(40)
// head.right.right = new Node(50)

// console.log(head)
// itrative methods

// function isprime(n) {
//   if (n === 1) {
//     return false;
//   }

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isprime(29));

// function search(nums, target) {
//   let low = 0;
//   let high = nums.length;

//   while (low <= high) {
//     let mid = Math.floor(low + high) / 2;

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }
// let num = [-1, 0, 3, 5, 9, 12];
// let targets = 9;

// console.log(search(num, targets));

// function duplicate(nums) {
//   let set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       return true;
//     }
//     set.add(nums[i]);
//   }
//   return false;
// }
// console.log(duplicate([2, 3, 5,5]));

// function search(nums, target) {
//   let low = 0;
//   let high = nums.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] === target) {
//       console.log("mid", mid);
//       return mid;
//     } else if (nums[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }
// let num = [-1, 0, 3, 5, 9, 12];
// let targets = 9;

// console.log(search(num, targets));

// const fetchdata = (isSuccess) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSuccess) {
//         resolve("Data Fetch");
//       } else {
//         reject("Data not fetch");
//       }
//     }, 1000);
//   });
// };

// const dataFetch = async(isSuccess) => {
//   const data = await fetchdata(isSuccess);
//   console.log(data)
// }

// dataFetch(true);

// const fetchData = (isSuccess) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSuccess) {
//         resolve("Data is fetch successfuly");
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

// function twoSum(nums, target) {
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         res.push(i,j);
//       }
//     }
//   }
//   return res;
// }

// console.log(twoSum([3, 4, 5, 6],10));

// function stock(prices) {
//   let price = prices;
//   let maxProfit = 0;
//   for (let i = 0; i < price.length; i++) {
//     for (let j = i + 1; j < price.length; j++) {
//       let profit = price[j] - price[i];
//       if (profit > maxProfit) {
//         maxProfit = profit;
//       }
//     }
//   }
//   return maxProfit;
// }

// console.log(stock([10, 1, 5, 6, 7, 1]));

// function stock(prices) {
//   let buy = 0;
//   let shell = prices.length;
//   let maxProfit = 0;
//   while (buy < shell) {
//     let profit = prices[buy] - prices[shell];
//     if (profit > maxProfit) {
//       maxProfit = profit;
//     }
//   }
//   return maxProfit;
// }

// console.log(stock([10, 1, 5, 6, 7, 1]));

// function duplicate(nums) {
//   let set = new Set();
//   for (const num of nums) {
//     if (set.has(num)) {
//       return true;
//     }
//     set.add(num);
//   }
//   return -1;
// }

// console.log(duplicate([1, 2, 2, 3, 4, 5]));

// function removeElement(nums, val) {
//   let res = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[res] = nums[i];
//       console.log(res);
//       res++;
//     }
//   }
//   return res;
// }
// let num = [3, 2, 2, 3]
// let val = 3
// let remove = removeElement(num, val);
// console.log(remove);
// console.log(num);

// let nums = [3, 2, 2, 3];
// let val = 3;
// let newLength = removeElement(nums, val);
// console.log(newLength); // Output: 2
// console.log(nums); // Output: [2, 2, _, _]

// function removeDuplicate(nums) {
//   let res = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i - 1] !== nums[i]) {
//       res = nums[i];
//     }
//   }
//   return res;
// }

// let nums = [3, 1, 3, 4, 2];
// console.log(removeDuplicate(nums));

// function lastWordLength(str) {
//   res = str.trim().split(" ");
//   let n = res[res.length - 1];
//   return n.length;
// }  res = str.trim().split(" ");
//   let n = res[res.length - 1];
//   return n.length;

// let str = "Hello World";
// console.log(lastWordLength(str));

// async function sleep(millis) {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, millis);
//   });
// }

// let t = Date.now();
// sleep(100).then(() => console.log(Date.now() - t)); // 100

// var timeLimit = function (fn, t) {
//   return async function (...args) {
//     return new Promise((resolve, reject) => {
//       let timmer = setTimeout(() => {
//         reject("Time Limit Exceed");
//       }, t);
//       fn(...args)
//         .then((result) => {
//           clearTimeout(timmer);
//           resolve(result);
//         })
//         .catch((err) => {
//           clearTimeout(timmer);

//           reject(err);
//         });
//     });
//   };
// };

// const fn = async (n) => {
//   await new Promise((res) => setTimeout(res, 100));
//   return n * n;
// };

// const limited = timeLimit(fn, 50);
// const start = performance.now();
// limited(5)
//   .then((res) => {
//     console.log({ resolved: res, time: Math.floor(performance.now() - start) });
//   })
//   .catch((err) => {
//     console.log({ rejected: err, time: Math.floor(performance.now() - start) });
//   });

// function reverseStr(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     [str[left], str[right]] = [str[right], str[left]];
//     left++;
//     right--;
//   }
//   return str;
// }
// let s = ["H", "a", "n", "n", "a", "h"];
// console.log(reverseStr(s));

// function removeDuplicate(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[res - 1] !== arr[i]) {
//       arr[res] = arr[i];
//       res++;
//     }
//   }
//   return arr.slice(0, res);
// }
// let nums = [1, 1, 2];
// console.log(removeDuplicate(nums));

// function searchInsert(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return left;
// }

// let nums = [1, 3, 5, 6];
// let target = 2;

// console.log(searchInsert(nums, target));

// function primeNumbers(nums) {
//   for (let i = 2; i < nums.length; i++) {
//     if (nums % i === 0) {
//       console.log(i)
//       return false;
//     }
//   }
//   return nums;
// }

// let num = [2, 3, 54, 5, 6, 3, 6, 7]

// console.log(primeNumbers(9));

// function infiniteCurring(a) {
//   return function b(params) {

//   }
// }

// function sum(a) {
//   return function(b){
//     if(!b){
//         return a;
//     }
//     return sum(a+b);
//   }
// }
// console.log(sum(1)(2)(3)(4)(5)(6)());  //21

// function isprime(n) {
//   if (n < 0) {
//     return 1;
//   }

//   for (let i = 2; i * i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isprime(5));

// function sumUnderModulo(a, b) {
//   let Mod = 1000000007;

//   // let sum = (BigInt(a) + BigInt(b)) % BigInt(Mod);
//   let sum = (BigInt(a) + BigInt(b)) % BigInt(Mod);

//   return sum.toString();
// }

// let a = 9223372036854775807;
// let b = 9223372036854775807;
// console.log(sumUnderModulo(a, b));

// function sumUnderModulo(a, b) {
//   const MOD = BigInt(1000000007);

// Convert a and b to BigInt
//   const bigA = BigInt(a);
//   const bigB = BigInt(b);

//   // Calculate the sum
//   const sum = (bigA + bigB);

//   // Apply modulo operation
//   const result = sum % MOD;

//   // Convert the result to string
//   return result.toString();
// }

// let a = 9223372036854775807;
// let b = 9223372036854775807;
// console.log(sumUnderModulo(a, b)); // Should output 582344006

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(20));

// function countDigits(n) {
//   let count = 0;
//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }
//   return count;
// }
// console.log(countDigits(22))

// function countDigits(n) {
//   if (n == 0) {
//     return 0;
//   }
//   return 1 + countDigits(Math.floor(n / 10));
// }
// console.log(countDigits(22));

// function Power(n, p) {
//   if (p == 0) return 1;
//   // if (p == 1) return n;
//   return n * Power(n, p - 1);
// }

// console.log(Power(9, 9));

// function digitalRoot(n) {
//   while (n >= 10) {
//     let sum = 0;
//     while (n > 0) {
//       sum += n % 10;
//       n = Math.floor(n / 10);
//     }
//     n = sum;
//   }

//   return n;
// }
// console.log(digitalRoot(99999));

// function digitalRoot(n) {
//   if (n < 10) {
//     return n;
//   }
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }

//   return digitalRoot(sum);
// }
// console.log(digitalRoot(99999));

// function reverseSubArraysOfSizeK(arr, k) {
//   for (let i = 0; i < arr.length; i += k) {
//     let left = i;
//     let right = Math.min(i + k - 1, arr.length - 1);

//     while (left < right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//   }
//   return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// let k = 3;

// console.log(reverseSubArraysOfSizeK(arr, k)); // [3, 2, 1, 5, 4]

// input

// console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value)A)

// class ComputeAmount {
//   constructor() {
//     this.amount = 0;
//   }

//   lacs(value) {
//     this.amount += value * 100_000; // 1 lac = 100,000
//     return this;
//   }

//   crore(value) {
//     this.amount += value * 10_000_000; // 1 crore = 10,000,000
//     return this;
//   }

//   thousand(value) {
//     this.amount += value * 1_000; // 1 thousand = 1,000
//     return this;
//   }

//   get value() {
//     return this.amount;
//   }

//   format() {
//     return new Intl.NumberFormat().format(this.amount); // Format as a string with commas
//   }
// }

// // Example usage:
// const example1 = new ComputeAmount()
//   .crore(10)
//   .lacs(30)
//   .thousand(45)
//   .crore(1)
//   .format();  // Should output "143,545,000"
// console.log(example1);

// function Calculate() {
//   let totalAmount = 0;

//   this.lacs = function (value) {
//     this.totalAmount += value * 100_000; // 1 lac = 100,000
//     return this;
//   };

//   this.crore = function (value) {
//     this.totalAmount += value * 10_000_000; // 1 crore = 10,000,000
//     return this;
//   };

//   this.thousand = function (value) {
//     this.totalAmount += value * 1_000; // 1 thousand = 1,000
//     return this;
//   };

//   this.value = function () {
//     return this.totalAmount;
//   };
// }

// function computeAmount() {
//   return new Calculate();
// }

// const res = new computeAmount()
//   .crore(10)
//   .lacs(30)
//   .thousand(45)
//   .crore(1)
//   .format();
// console.log(res);

// function findKthPositive(nums, k) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] - mid - 1 < k) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return left + k;
// }
// let arr = [2, 3, 4, 7, 11];
// let k = 5;

// console.log(findKthPositive(arr, k)); // Output: 9

// function buubleSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// let arr = [50, 96, 756, 65, 66, 683];

// console.log(buubleSort(arr));

// console.log('arr', arr)

//Optimize
// function buubleSort(arr) {
//   let n = arr.length;
//   let swapped = false;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       break;
//     }
//   }
//   return arr;
// }

// let arr = [50, 96, 756, 65, 66, 683];

// console.log(buubleSort(arr));

// console.log("arr", arr);

// const curryFn = () => {
//   let prevSum = 0;
//   return (newVal = 0) => {
//     prevSum += newVal;
//     return prevSum;
//   };
// };

// const sum = curryFn();
// console.log(sum(1)); // Output: 1 (previous sum + 1)
// console.log(sum(3)); // Output: 4 (previous sum + 3)
// console.log(sum(3)); // Output: 7 (previous sum + 3)
// console.log(sum(4)); // Output: 11 (previous sum + 4)
// console.log(sum()); // Output: 11 (current sum without any new value)

// function getConcatenation(nums) {
//   let n = nums.length;
//   let res = new Array(2 * n);
//   for (let i = 0; i < n; i++) {
//     res[i] = nums[i];
//     res[i + n] = nums[i];
//   }
//   return res;
// }

// let num = [1, 2, 1]

// console.log(getConcatenation(num))

// function twoSum(nums, target) {
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         res.push(i + 1, j + 1);
//       }
//     }
//   }
//   return res;
// }
// let numbers = [-1, 0];
// let target = -1;

// console.log(twoSum(numbers, target));

// function twoSum(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let sum = nums[left] + nums[right];
//     if (sum === target) {
//       return [left + 1, right + 1];
//     }
//     if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return -1;
// }
// let numbers = [2, 3, 4];
// let target = 6;

// console.log(twoSum(numbers, target));

// function singleNumber(nums) {
//   let res = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i-1]) {
//      console.log(i)
//     } else {
//       res++;
//     }

//   }
//   return res;
// }

// let nums = [2, 2, 1];
// console.log(singleNumber(nums));

// function findDuplicate(nums) {
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i - 1] === nums[i]) {
//       return nums[i];
//     }
//   }
//   return -1;
// }
// const arr = [3, 1, 3, 4, 2];
// const resultLength = findDuplicate(arr);

// console.log(resultLength);

// function reversestr(str) {
//   let word = str.split(" ");

//   console.log("word", word);
//   let left = 0;
//   let right = word.length - 1;
//   while (right > left) {
//     [word[left], word[right]] = [word[right], word[left]];
//     left++;
//     right--;
//   }
//   return word.join(" ");
// }

// let str = "Hello World from JavaScript";

// console.log(reversestr(str));

// function findDuplicate(nums) {
//   nums.sort((a, b) => a - b);
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i - 1] === nums[i]) {
//       res.push(nums[i]);
//     }
//   }
//   return res;
// }

// const arr = [3, 1, 3, 4, 4, 2, 5, 6, 6, 7, 7];
// console.log(findDuplicate(arr));

// function findMissingNo(nums) {
//   let n = nums.length;
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   let miss = (n * (n + 1)) / 2;;
//   console.log("miss", miss);
//   return miss - sum;
// }
// const arr = [3, 1];
// console.log(findMissingNo(arr));

// function findDuplicate(nums) {
//   let set = new Set();
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       res.push(nums[i]);
//     }
//     set.add(nums[i]);
//     }
//     return res
// }

// const arr = [3, 1, 3, 4, 4, 2, 5, 6, 6, 7, 7];
// console.log(findDuplicate(arr));

// function missingNumber(nums) {
//   let n = nums.length;
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     n += i - nums[i];
//   }
//   return n;
// }

// console.log(missingNumber([0, 2]));

//  callback function
// const fruits = ["Apple", "Mango", "Chocolate"];

// const annimateAll = (animate) => {
//   console.log("Starting");
//   setTimeout(() => {
//     animate(fruits[0]);
//     setTimeout(() => {
//       animate(fruits[1]);
//       setTimeout(() => {
//         animate(fruits[2]);
//       }, 1000);
//     }, 2000);
//   }, 3000);
// };

// const animate = (fruits) => {
//   console.log(fruits + " is being animated");
// };

// annimateAll(animate);

// function secondLargestNumbers(nums) {
//   let largest = 0;
//   let second = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > largest) {
//       largest = nums[i];
//     } else if (nums[i] < largest) {
//       second = largest;
//       second = nums[i];
//     }
//   }
//   return second;
// }

// console.log(secondLargestNumbers([1, 7, 2]));

// function Calculate(x) {
//   multiply = (y) => {
//     return x * y;
//   };
//   return multiply;
// }

// const calculate = Calculate(3);
// const calculate2 = Calculate(4);

// console.log("calculate", calculate(3));

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// function calculateAge(total, age) {
//   return total + age;
// }
// let res = numbers.reduce(calculateAge);
// console.log("res", res);

// function reverseStr(str) {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     [str[left], str[right]] = [str[right], str[left]];
//     left++;
//     right--;
//   }
//   return str;
// }

// console.log(reverseStr(["hello", "world"]));

// function removeDuplicate(nums) {
//   let set = new Set();
//   let count = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (!set.has([i])) {
//       set.add(i);
//       count.push(i);
//     }
//   }
//   return count;
// }

// const arr = [1, 1, 4, 5, 6, 6, 7, 7, 8, 8];
// const resultLength = removeDuplicate(arr);
// console.log(resultLength); // Output: [1, 4, 5, 6, 7, 8]

// function sumOfDigit(nums) {
//   let sum = 0;
//   for (let i = 0; i <= nums; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumOfDigit(3));

// function removeDuplicate(arr) {
//   let set = new Set();
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!set.has(arr[i])) {
//       set.add(arr[i]);
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(removeDuplicate([1, 2, 3, 3, 7, 7]));

// const promise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("the promise has been fulfilled");
//   } else {
//     reject("the promise has been rejected");
//   }
// });

// promise
//   .then((messege) => {
//     console.log("success", messege);
//   })
//   .catch((res) => {
//     console.log("Error", res);
//   });

// function groupAnagram(str) {
//   let res = {};
//   for (let i = 0; i < str.length; i++) {
//     let soreted = str[i].split("").sort().join("");
//     if (!res[soreted]) {
//       res[soreted] = [];
//     }
//     res[soreted].push(str[i]);
//   }
//   console.log("res", res);
//   return Object.values(res);
// }

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// console.log(groupAnagram(strs));

// function sumOfElementSmallestBetweenK1AndK2(nums, k1, k2) {
//   nums.sort((a, b) => a - b);
//   let result = 0;
//   for (let i = k1; i < k2 - 1; i++) {
//     result += nums[i];
//   }
//   return result;
// }
// console.log(sumOfElementSmallestBetweenK1AndK2([1, 3, 12, 5, 15, 11], 3, 6)); // output sum of element 23

// function isHappy(n) {
//   let set = new Set();
//   while (n != 1) {
//     if (set.has(n)) {
//       return false;
//     }
//     set.add(n);
//     n = getSumOfSquares(n);
//   }
//   return true;
// }

// function getSumOfSquares(num) {
//   let sum = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     sum += digit * digit;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// // Example usage:
// console.log(isHappy(19)); // Output: true
// console.log(isHappy(2)); // Output: false

// function maxSumSubarray(nums, k) {
//   let max = Infinity;
//   let n = nums.length;
//   for (let i = 0; i <= n - k; i++) {
//     let sum = 0;
//     for (let j = i; j < i + k; j++) {
//       sum += nums[j];
//     }
//     max = Math.min(max, sum);
//   }

//   return max;
// }

// let arr = [2, 1, 5, 1, 3, 2];
// let K = 3;

// console.log(maxSumSubarray(arr, K)); // Output: 6

// function firstLetterCaps(str) {
//   let word = str.split(" ");
//   let res = word.toUpperCase();
//   return res;
// }

// console.log(firstLetterCaps("hello mozammil"));

// function equivalenteArr(word1, word2) {
//   console.log("".concat(...word2));
//   if ("".concat(...word1) === "".concat(...word2)) {
//     return true;
//   }
//   return false;
// }

// let word1 = ["abc", "d", "defg"],
//   word2 = ["abcddefg"];

// console.log(equivalenteArr(word1, word2));

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// let nums = [1, 2, 3, 4];
// let multiply = nums.myMap((num) => {
//   return num * 3;
// });

// console.log(multiply);

// function countOfElement(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let count = 0;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       count++;
//       console.log("count", mid);
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// const nums = [1, 2, 3, 4, 4, 4, 5, 6, 7];
// console.log(countOfElement(nums,4));

// function findDuplicate(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i]=== nums[i-1]) {
//       return true

//     }
//   }
//   return false;
// }

// const arr = [1, 2, 3,];
// console.log(findDuplicate(arr)); // Output: true

// function findLongestWord(str) {
//   let words = str.split(" ");
//   let res = "";

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > res.length) {
//       res = words[i];
//     }
//   }
//   return res;
// }

// console.log(findLongestWord("Hi Iam Saikrishna Iam a UI Developer"));

// const findLongestWord = (sentence) => {
//   let words = sentence.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   console.log(longestWord);
// };
// findLongestWord("Hi Iam Saikrishna Iam a UI Developer");

// function findLargestNo(nums) {
//   let largest = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > largest) {
//       largest = nums[i];
//     }
//   }
//   return largest;
// }

// console.log(findLargestNo([1, 2, 3, 4, 5, 7, 6]));

//  Given 2 arrays that are sorted [0,3,4,31] and [4,6,30].
// Merge them and sort [0,3,4,4,6,30,31] ?

// function mergeSortedArr(arr1, arr2) {
//   let res = [...arr1, ...arr2];
//   let soreted1 = res.sort((a, b) => a - b);
//   console.log(soreted1);
// }

// mergeSortedArr([0, 3, 4, 31], [4, 6, 30]);

// const sortedData = (arr1, arr2) => {
//   let i = 0,
//     j = 0;
//   let mergedArray = [];

//   while (i < arr1.length || j < arr2.length) {
//     if (j >= arr2.length || (i < arr1.length && arr1[i] < arr2[j])) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   return mergedArray;
// };

// // Example Usage
// console.log(sortedData([0, 3, 4, 31], [4, 6, 30]));
// // Output: [1, 2, 3, 4, 5, 6, 8, 9]

// function checkPalindrome(str) {
//   let len = str.length

//   for (let i = 0; i < len/2; i++) {
//     if (str[i]!==str[len-i-1]) {
//       return false
//     }
//   }
//   return true
// }
// console.log(checkPalindrome("racecar")); // true

// console.log(checkPalindrome("Was it a car or a cat I saw?"));

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let countS = {};
//   let countT = {};

//   for (let i = 0; i < s.length; i++) {
//     countS[s[i]] = (countS[s[i]] || 0) + 1;
//     countT[t[i]] = (countT[t[i]] || 0) + 1;
//   }

//   for (const key in countS) {
//     if (countS[key] !== countT[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// let s = "anagram";
// let t = "nagaram";

// console.log(isAnagram(s, t));

// function twoSum(nums, target) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];

//     if (map.has(diff)) {
//       return [map.get(diff), i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9));

// function groupAnagram(strs) {
//   let map = new Map();

//   for (let i = 0; i < strs.length; i++) {
//     const sorted = strs[i].split("").sort().join("");
//     if (!map.has(sorted)) {
//       map.set(sorted, []); // If key doesn’t exist, create an empty array
//     }
//     map.get(sorted).push(strs[i]); // Push the word into its group
//   }
//   return Array.from(map.values());
// }

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// console.log(groupAnagram(strs)); // Time complexity is O(N * K log K).

// function add(a) {
//   return function (b) {
//     if (b === undefined) {
//       return a;
//     }
//     return add(a + b);
//   };
// }

// console.log(add(2)(4)(7)());
// console.log(add(5)(10)(0)()); // Output: 15 (handles 0 correctly)

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return (...args2) => curried.apply(this, [...args, ...args2]);
//     }
//   };
// }

// // Example Function to Curry
// const join = (a, b, c) => `${a}_${b}_${c}`;

// const curriedJoin = curry(join);

// // ✅ Different Ways to Call the Curried Function
// console.log(curriedJoin(1, 2, 3)); // Output: "1_2_3"
// console.log(curriedJoin(1)(2, 3)); // Output: "1_2_3"
// console.log(curriedJoin(1, 2)(3)); // Output: "1_2_3"
// console.log(curriedJoin(1)(2)(3)); // Output: "1_2_3"

// Function.prototype.myCall = function (thisArg, ...argArray) {
//   if (typeof this !== "function") {
//     throw new TypeError("myCall must be called on a function");
//   }

//   // Ensure thisArg is an object (or null/undefined)
//   thisArg = thisArg ?? globalThis;

//   // Create a unique property on thisArg to store the function reference
//   const fnKey = Symbol();
//   thisArg[fnKey] = this;

//   // Call the function with provided arguments and capture the result
//   const result = thisArg[fnKey](...argArray); // Fix: Use argArray instead of args

//   // Clean up by deleting the temporary function reference
//   delete thisArg[fnKey];

//   return result;
// };

// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;

//   let count = {};

//   for (let i = 0; i < s.length; i++) {
//     count[s[i]] = (count[s[i]] || 0) + 1;
//     count[t[i]] = (count[t[i]] || 0) - 1;
//   }

//   return Object.values(count).every((val) => val === 0);
// }
// let s = "anagram";
// let t = "nagaram";

// console.log(isAnagram(s, t));

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user = new Person("Mozammil", 29);

// console.log(user);

// Apply
// function greet(greet,) {
//   console.log(greet + " " + this.name);
// }
// const Person = { name: "Mozammil" };

// greet.call(Person, "Hello");
// greet.apply(Person, ["Hello", "555"]);

// const Greet = greet.bind(Person, "Hello");
// Greet();

// function BankAccount(initialBalance) {
//   let balance = initialBalance;
//   return {
//     deposit: function (amount) {
//       if (amount > 0) {
//         balance += amount;
//       } else {
//         console.log("Deposit amount must be positive");
//       }
//     },
//     withdraw: function (amount) {
//       if (amount > 0 && amount <= balance) {
//         balance -= amount;
//       } else {
//         console.log("Insufficient funds or invalid amount");
//       }
//     },
//     getBalance: function () {
//       return balance;
//     },
//   };
// }

// // ✅ Create accounts
// const account1 = BankAccount(1000);
// const account2 = BankAccount(2000);

// // ✅ Test cases
// account1.deposit(500);
// console.log(account1.getBalance()); // Expected: 1500

// account1.withdraw(200);
// console.log(account1.getBalance()); // Expected: 1300

// account2.deposit(100);
// console.log(account2.getBalance()); // Expected: 2100

// console.log(account1.balance); // ❌ Undefined (balance is private)

// const createCounter = (n) => {
//   return n++;
// };

// console.log(createCounter(10));
// console.log(createCounter(10));
// console.log(createCounter(10));

// function createCounter(num) {
//   let current = num;
//   return function counter() {
//     return current++;
//   };
// }

// const counter = createCounter(10);
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12

// function calculateTotalBonuses(
//   employees,
//   minRating,
//   performance,
//   bonusPercentage
// ) {
//   let res = employees.filter((item) => item.performance < minRating);
//   console.log("res :>> ", res);
// }

// const employees = [
//   { name: "Alice", salary: 6000, department: "Engineering", performance: 4 },
//   { name: "Bob", salary: 4500, department: "Marketing", performance: 3 },
//   { name: "Charlie", salary: 5500, department: "Sales", performance: 5 },
// ];

// console.log(calculateTotalBonuses(employees, 4, 10)); //132000

// const output = [
//   {
//     name: "Alice",
//     salary: 6000,
//     department: "Engineering",
//     annulSalary: 72000,
//     isEligibleForBonus: true,
//   },
//   {
//     name: "Bob",
//     salary: 4500,
//     department: "Marketing",
//     annulSalary: 5400,
//     isEligibleForBonus: false,
//   },
//   {
//     name: "Charlie",
//     salary: 5500,
//     department: "Sales",
//     annulSalary: 66000,
//     isEligibleForBonus: true,
//   },
// ];

// function processArray(arr, commands) {
//   let result = [];
//   commands.forEach(({ start, end, operation }) => {
//     let slicedArr = arr.slice(start, end);
//     switch (operation) {
//       case "reverse":
//         result.push(slicedArr.reverse());
//         break;
//       case "sum":
//         result.push(slicedArr.reduce((sum, num) => sum + num, 0));
//         break;
//       case "length":
//         result.push(slicedArr.length);
//         break;
//       default:
//         console.log("error");
//     }
//   });
//   return result;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// const commands = [
//   { start: 1, end: 4, operation: "reverse" },
//   { start: 0, end: 3, operation: "sum" },
//   { start: 2, end: 5, operation: "length" },
// ];

// const result = processArray(arr, commands);

// console.log(result); // output [[4,3,2],6,3]

// function twoSum(num, target) {
//   let map = new Map();

//   for (let i = 0; i < num.length; i++) {
//     const diff = target - num[i];
//     console.log('diff :>> ', diff);
//     if (map.has(diff)) {
//       return [map.get(diff), i];
//     }
//     map.set(num[i], i);
//   }
//   return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9));

// const mockApi = [
//   { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
//   { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
//   { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
// ];

// async function fetchUserData(userId, api = mockApi) {
//   try {
//     const response = fetch({ api });

//     if (!response.ok) {
//       throw new Error("Failed to fetch user data");
//     }
//     const data = await fetchdata.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// // async function getUserDetails(userId, api = mockApi) {

// // }

// fetchUserData();

// function getProUsers(users) {
//   const res = users.filter((user) => user.skills.length > 2);

//   return res;
// }

// const users = [
//   { name: "Brook", scores: 75, skills: ["HTM", "CSS", "JS"], age: 16 },
//   { name: "Alex", scores: 80, skills: ["HTM", "CSS", "JS"], age: 18 },
//   { name: "David", scores: 75, skills: ["HTM", "CSS"], age: 22 },
//   { name: "John", scores: 85, skills: ["HTML"], age: 25 },
//   { name: "Sara", scores: 95, skills: ["HTM", "CSS", "JS"], age: 26 },
//   { name: "Martha", scores: 80, skills: ["HTM", "CSS", "JS"], age: 18 },
//   { name: "Thomas", scores: 90, skills: ["HTM", "CSS", "JS"], age: 20 },
// ];

// console.log(getProUsers(users));
// class UserTracker {
//   constructor() {
//     // TODO: Initialize a Set for unique visitors
//     // TODO: Initialize a Map for last visit timestamps
//     // TODO: Initialize a WeakSet for active users

//     this.uniqueVisitors = new Set();
//     this.lastVisitTimestamps = new Map();
//     this.activeUsers = new WeakSet();
//   }

//   addUser(user) {
//     try {
//       // TODO: Validate the user object
//       if (!user || typeof user !== "object" || !user.id) {
//         throw new Error("Invalid user object");
//       }
//       // TODO: Add user to the Set if new
//       this.uniqueVisitors.add(user);
//       return `${user.id} added to unique visitor.`;
//     } catch (error) {
//       return `Error: ${error.message}`;
//     }
//   }

//   updateLastVisit(user) {
//     try {
//       // TODO: Validate the user object
//       if (!user || typeof user !== "object" || !user.id) {
//         throw new Error("Invalid user object");
//       }
//       // TODO: Store/update the last visit timestamp in the Map
//       const timestamp = new Date();
//       this.lastVisitTimestamps.set(user, timestamp);
//       return `Updated last visit for ${user.id} at ${timestamp}.`;
//     } catch (error) {
//       return `Error: ${error.message}`;
//     }
//   }

//   getVisitDetails(user) {
//     try {
//       // TODO: Validate the user object
//       if (!user || typeof user !== "object" || !user.id) {
//         throw new Error("Invalid user object");
//       }
//       // TODO: Return visit details from Set and Map
//       const isVisited = this.uniqueVisitors.has(user);
//       const lastVisited = this.lastVisitTimestamps.get(user);

//       return { userId: user.id, isVisited, lastVisited };
//     } catch (error) {
//       return `Error: ${error.message}`;
//     }
//   }

//   markActive(user) {
//     try {
//       // TODO: Validate the user object
//       if (!user || typeof user !== "object" || !user.id) {
//         throw new Error("Invalid user object");
//       }

//       this.activeUsers.add(user);
//       return `${user.id} marked is active.`;
//       // TODO: Add the user to WeakSet as an active user
//     } catch (error) {
//       return `Error: ${error.message}`;
//     }
//   }
// }

// const tracker = new UserTracker();
// const user1 = { id: "123", name: "Alice" };

// console.log(tracker.addUser(user1));
// console.log(tracker.updateLastVisit(user1));
// console.log(tracker.getVisitDetails(user1));
// console.log(tracker.markActive(user1));

// const timestamp = new Date();
// console.log("timestamp :>> ", timestamp.toLocaleString());

// function manageUniqueWords(words) {
//   const wordSet = new Set(words);
//   return {
//     addWord: function (word) {
//       if (!wordSet.has(word)) {
//         wordSet.add(word);
//         return word;
//       }
//     },
//     removeWord: function (word) {
//       if (wordSet.has(word)) {
//         wordSet.delete(word);
//         return word;
//       }
//     },
//     hasWord: function (word) {
//       return wordSet.has(word);
//     },
//     getAllWords: function () {
//       return Array.from(wordSet).sort();
//     },
//   };
// }

// const words = [
//   "apple",
//   "banana",
//   "cherry",
//   "dog",
//   "elephant",
//   "flower",
//   "guitar",
//   "happy",
//   "island",
//   "jungle",
// ];

// const collection = manageUniqueWords(words);

// console.log(collection.addWord("Mozammil"));
// console.log(collection.removeWord("dog"));
// console.log(collection.hasWord("island"));
// console.log(collection.getAllWords());

// function processContacts(contacts, tags) {
//   // Iterate through the Map and print contacts
//   for (const [name, phoneNumber] of contacts) {
//     console.log(`${name}: ${phoneNumber}`);
//   }

//   // Convert Set to an array, sort it, and print sorted tags
//   const sortedTags = [...tags].sort();
//   console.log("Tags:", sortedTags.join(", "));
// }

// // Example usage
// const contacts = new Map([
//   ["Alice", "123-456-7890"],
//   ["Bob", "987-654-3210"],
//   ["Charlie", "555-123-4567"],
// ]);

// const tags = new Set(["Work", "Friends", "Family", "Friends"]);

// processContacts(contacts, tags);

// function productData(arr) {
//   const res = arr.filter(
//     (product) =>
//       product.category === "electronics" &&
//       product.rating >= 4 &&
//       product.price * 0.9 < 1000
//   );
//   console.log(res);
// }

// const products = [
//   { name: "Laptop", price: 1200, category: "electronics", rating: 4.5 },
//   { name: "Shoes", price: 100, category: "fashion", rating: 4.7 },
//   { name: "Smartphone", price: 900, category: "electronics", rating: 4.3 },
//   { name: "TV", price: 1500, category: "electronics", rating: 3.9 },
//   { name: "Headphones", price: 200, category: "electronics", rating: 4.8 },
//   { name: "Washing Machine", price: 800, category: "appliances", rating: 4.2 },
//   { name: "Tablet", price: 1100, category: "electronics", rating: 4.6 },
// ];

// console.log(productData(products));

// function productData(arr, k) {
//   const filteredProducts = products.filter(
//     (product) =>
//       product.category === "electronics" && // Must be electronics
//       product.rating >= 4 && // Minimum rating 4
//       product.price * 0.9 < 1000 // Discounted price < $1000
//   );

//   return filteredProducts;
// }

// const products = [
//   { name: "Laptop", price: 1200, category: "electronics", rating: 4.5 },
//   { name: "Shoes", price: 100, category: "fashion", rating: 4.7 },
//   { name: "Smartphone", price: 900, category: "electronics", rating: 4.3 },
//   { name: "TV", price: 1500, category: "electronics", rating: 3.9 },
//   { name: "Headphones", price: 200, category: "electronics", rating: 4.8 },
//   { name: "Washing Machine", price: 800, category: "appliances", rating: 4.2 },
//   { name: "Tablet", price: 1100, category: "electronics", rating: 4.6 },
// ];

// console.log(productData(products));

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// function uniqueElements(arr1, arr2) {
//   return [
//     ...arr1.filter((num) => !arr1.includes(num)),
//     ...arr2.filter((num) => !arr2.includes(num)),
//   ];
// }

// console.log(uniqueElements(arr1, arr2));

// function topPaidEmployees(arr, percentage) {
//   const sortedSalaries = [...arr].sort((a, b) => b.salary - a.salary);
//   const topCount = Math.ceil(arr.length * (percentage / 100));

//   return sortedSalaries.slice(0, topCount);
// }

// const employees = [
//   { name: "Alice", salary: 5000 },
//   { name: "Bob", salary: 3000 },
//   { name: "Charlie", salary: 10000 },
//   { name: "David", salary: 8000 },
//   { name: "Eve", salary: 2000 },
// ];

// console.log(topPaidEmployees(employees, 20));

// function aggregateScoresBySkills(students, skill) {
//   return students
//     .filter((student) => student.skills?.includes(skill))
//     .map((student) => student.Scores)
//     .reduce((total, score) => total + score);
// }

// const students = [
//   { name: "Emma", Scores: 85, skills: ["React", "JavaScript", "HTML"] },
//   { name: "Liam", Scores: 80, skills: ["CSS", "Python"] },
//   { name: "Olivia", Scores: 100, skills: ["HTML", "CSS"] },
//   { name: "Noah", Scores: 90, skills: ["JavaScript", "React"] },
// ];

// const skill = "JavaScript";

// console.log(aggregateScoresBySkills(students, skill)); // output 175

// function findTopExperiencedUsers(users, skill) {
//   return users
//     .filter((user) => user.skills[skill] !== undefined) // 1️⃣ Keep only users who have the skill
//     .map((user) => ({ name: user.name, experience: user.skills[skill] })) // 2️⃣ Extract { name, experience }
//     .sort((a, b) => b.experience - a.experience) // 3️⃣ Sort by experience (descending)
//     .slice(0, 3) // 4️⃣ Get top 3 users
//     .map((user) => user.name); // 5️⃣ Return just the names
// }

// const users = [
//   { name: "Emma", age: 25, skills: { React: 3, JavaScript: 5, HTML: 4 } },
//   { name: "Liam", age: 30, skills: { React: 2, CSS: 4 } },
//   { name: "Olivia", age: 28, skills: { HTML: 5, CSS: 3 } },
//   { name: "Noah", age: 22, skills: { JavaScript: 4, React: 6 } },
//   { name: "Ava", age: 27, skills: { React: 5, JavaScript: 3 } },
//   { name: "William", age: 32, skills: { React: 4, JavaScript: 2 } },
// ];

// const skillToFind = "React";

// console.log(findTopExperiencedUsers(users, skillToFind));
// // ✅ Output: [ "Noah", "Ava", "William" ] (Users with highest React experience)

// 🛠️ Your Task
// Write a single pipeline using .filter(), .map(), .reduce(), and .sort() to:

// Filter "electronics" category.

// Map to apply 15% discount on price.

// Sort discounted products by price in descending order.

// Reduce to get total discounted price.

// function totalDiscountedPrice(products) {
//   return products
//     .filter(
//       (product) => product.category === "electronics" && product.rating >= 4
//     )
//     .map((product) => ({
//       ...product,
//       discountedPrice: product.price * 0.8,
//     }))
//     .sort((a, b) => a.discountedPrice - b.discountedPrice)
//     .reduce((total, product) => total + product.discountedPrice, 0);
// }
// const products = [
//   { name: "Laptop", price: 1500, category: "electronics", rating: 4.5 },
//   { name: "Shoes", price: 100, category: "fashion", rating: 4.7 },
//   { name: "Smartphone", price: 900, category: "electronics", rating: 4.3 },
//   { name: "TV", price: 1800, category: "electronics", rating: 3.9 },
//   { name: "Headphones", price: 300, category: "electronics", rating: 4.8 },
//   { name: "Tablet", price: 1200, category: "electronics", rating: 4.6 },
// ];

// console.log(totalDiscountedPrice(products)); // output:3120

// const today = new Date();
// const h = today.getHours();
// const m = today.getMinutes();
// const s = today.toLocaleTimeString();

// console.log(h, m, s);

// function maxArea(height) {
//   let maxWater = 0;

//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let area = (j - i) * Math.min(height[i], height[j]);

//       maxWater = Math.max(maxWater, area);
//     }
//   }

//   return maxWater;
// }

// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// console.log(maxArea(height));

// function maxArea(height) {
//   let left = 0;
//   let right = height.length - 1;

//   let maxWater = 0;

//   while (left < right) {
//     let area = (right - left) * Math.min(height[left], height[right]);

//     maxWater = Math.max(maxWater, area);
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxWater;
// }

// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// console.log(maxArea(height));

// function buysell(price) {
//   let maxProfit = 0;

//   for (let i = 0; i < price.length; i++) {
//     for (let j = i + 1; j < price.length; j++) {
//       let profit = price[j] - price[i];

//       maxProfit = Math.max(maxProfit, profit);
//     }
//   }
//   return maxProfit;
// }

// let prices = [7, 1, 5, 3, 6, 4];

// console.log(buysell(prices));

// function buysell(price) {
//   let left = 0;
//   let right = 1;
//   let maxProfit = 0;

//   while (right < price.length) {
//     if (price[right] > price[left]) {
//       let profit = price[right] - price[left];
//       maxProfit = Math.max(maxProfit, profit);
//     } else {
//       left = right;
//     }
//     right++;
//   }

//   return maxProfit;
// }

// let prices = [7, 1, 5, 3, 6, 4];

// console.log(buysell(prices));

// function duplicate(arr) {
//   let set = new Set();
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//       result.push(arr[i]);
//     } else {
//       set.add(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(duplicate([1, 6, 7, 1, 3, 9, 3]));

// function mean(arr) {
//   let sum = 0;
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     res = sum / arr.length;
//   }
//   return res;
// }

// console.log(mean([4, 2, 8, 6])); // => 5

// const person = {
//   name: "mozammil",
//   greet: function () {
//     console.log(`Hello! ${this.name}`);
//   },
// };

// //object Litral
// person.greet();

// //using new object
// const obj = new Object(person);
// obj.greet();

// function Person(name, age) {
//   (this.name = name),
//     (this.age = age),
//     (this.greet = function () {
//       console.log(`Hello! ${this.name} how old are you ${this.age}`);
//     });
// }

// //constructor functions
// const person3 = new Person("Mozammil", 20);

// person3.greet();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello! ${this.name}hi ${this.age}`);
//   }
// }

// let person4 = new Person("Raja",24)
// person4.greet()

// export default function flatten(value, result = []) {
//   for (let i = 0; i < value.length; i++) {
//     if (Array.isArray(value[i])) {
//       return flatten(value[i], result);
//     } else {
//       result.push(value[i]);
//     }
//   }
//   return result;
// }

// function maxSumSubArray(numbers) {
//   let maximum = 0;
//   let sum = 0;
//   for (let i = 1; i < numbers.length; i++) {
//     sum += numbers[i];
//     maximum = Math.max(maximum, sum);
//   }
//   return maximum;
// }
// let numbers = [-1, 5, -3, 9, -11];

// console.log(maxSumSubArray(numbers)); // o/p 11

// Using brutforce
// function maxProduct(nums) {
//   let maxSum = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     let maxProduct = 1;
//     for (let j = i; j < nums.length; j++) {
//       maxProduct *= nums[j];
//       maxSum = Math.max(maxSum, maxProduct);
//     }
//   }
//   return maxSum;
// }
// let numbers = [2, 3, -2, 4];

// console.log(maxProduct(numbers)); // o/p 6

// Kadane

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     }

//     if (nums[left] <= nums[mid]) {
//       if (target >= nums[left] && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (target > nums[mid] && target <= nums[mid]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
// };

// function findMin(nums) {
//   let res = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < res) {
//       res = nums[i];
//     }
//   }

//   return res;
// }

// console.log(findMin([3, 4, 5, 1, 2]));

// function findMin(nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] > nums[right]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return nums[left];
// }

// console.log(findMin([3, 4, 5, 1, 2]));

//brutforce

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// function countSubstrings(s) {
// let count = 0;
// for (let i = 0; i < s.length; i++) {
//   for (let j = i; j < s.length; j++) {
//     let subStr = s.slice(i, j + 1);
//     if (isPalindrome(subStr)) {
//       count++;
//     }
//   }
// }
// return count;
// }

// // Input: s = "abc"
// // Output: 3
// // Explanation: Three palindromic strings: "a", "b", "c".

// console.log(countSubstrings("abc"));

// for (let i = 0; i < 5; i++) {
//   ((j) => {
//     setTimeout(() => {
//       console.log(j);
//     }, 1000);
//   })(i);
// }

//brufrorce
// function searchRotatedArrII(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return true;
//     }
//   }

//   return false;
// }

// let nums = [2, 5, 6, 0, 0, 1, 2],
//   target = 0;

// console.log(searchRotatedArrII(nums, target));

// Using binary search
// function searchRotatedArrII(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return true;
//     }

//     // handle duplicates

//     if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
//       left++;
//       right--;
//     }
//     //left part sorted
//     else if (nums[left] <= nums[mid]) {
//       if (nums[left] <= target && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (nums[mid] < target && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
//   return false;
// }

// let nums = [2, 5, 6, 0, 0, 1, 2],
//   target = 0;

// console.log(searchRotatedArrII(nums, target));

// console.log("begins");
// setTimeout(() => {
//   console.log("setTimeout 1");
//   Promise.resolve().then(() => {
//     console.log("promise 1");
//   });
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log("promise 2");
//   setTimeout(function () {
//     console.log("setTimeout 2");
//     resolve("resolve 1");
//   }, 0);

// }).then((res) => {
//   console.log("dot then 1");
//   setTimeout(() => {
//     console.log(res);
//   }, 0);
// });

// 1begins
// promise 1
// promise 2
//dot then 1
//setTimeout 1
//setTimeout 2
// res

// begins
// promise 2
// setTimeout 1
// promise 1
// setTimeout 2
// dot then 1
// resolve 1

"use strict";

// var myFunction = function () {
//   console.log(this.a);
// };

// var a = 5;
// myFunction(); //5

// Check if the system prefers dark mode or light mode
// const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// if (prefersDarkMode) {
//   console.log('System default theme: Dark');
// } else {
//   console.log('System default theme: Light');
// }

// function reverseWord(str) {
//   let word = str.split(" ");
//   let left = 0;
//   let right = word.length - 1;

//   while (left <= right) {
//     [word[left], word[right]] = [word[right], word[left]];

//     left++;
//     right--;
//   }
//   return word.join(" ");
// }

// let words = "hello world";

// console.log(reverseWord(words)); // o/p world hello

// Check if Two Strings are Anagrams
// function checkAnagram(char) {
//   let res = char.split("").sort().join("");
//   let res2 = char.split("").sort().join("");

//   return res2 === res;
// }

// console.log(checkAnagram("anagram")); // true

// Find the Number of Words in a String
// function findTheNoOfWordInStr(str) {
//   let word = str.split(" ")

//   return word.length
// }

// console.log(findTheNoOfWordInStr(" "));

// function sum(num) {
//   let currentsum = num;
//   function inner(b) {
//     if (b !== undefined) {
//       currentsum += b;
//       return inner;
//     } else {
//       return currentsum;
//     }
//   }
//   inner.valueOf = function () {
//     return currentsum;
//   };
//   return inner;
// }

// const sum1 = sum(1);
// console.log(sum1(2) == 3); // true
// console.log(sum1(3) == 4); // true
// console.log(sum(1)(2)(3) == 6); // true
// console.log(sum(5)(-1)(2) == 6); // true

// function sum(num) {
//   let currentsum = num;

//   function inner(b) {
//     // If b is not undefined, keep adding and chaining
//     if (b !== undefined) {
//       currentsum += b;
//       return inner; // Return the function for chaining
//     } else {
//       return currentsum; // Return the sum when no more arguments are passed
//     }
//   }

//   // Ensure proper comparison by using valueOf
//   inner.valueOf = function() {
//     return currentsum; // Return the sum when compared to a number
//   };

//   return inner; // Return the inner function to allow chaining
// }

// const sum1 = sum(1);
// console.log(sum1(2) == 3); // true
// console.log(sum1(3) == 4); // true
// console.log(sum(1)(2)(3) == 6); // true
// console.log(sum(5)(-1)(2) == 6); // true

// function createCounter() {
//   let count = 0;
//   return {
//     get count() {
//       return count++;
//     },
//     set count(value) {
//       console.error('Cannot assign a new value to count.');
//     },
//   };
// }

// const counter = createCounter();

// console.log(counter.count); // 0
// console.log(counter.count); // 1
// console.log(counter.count); // 2
// counter.count = 100; // Cannot assign a new value to count.
// console.log(counter.count); // 3

function fizbuz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// fizbuz(100);

// const arr = [
//   { name: "Mike", age: 20 },
//   { name: "Peter", age: 30 },
//   { name: "Doris", age: 18 },
//   { name: "Edgar", age: 30 },
// ];

// const res = arr.sort((a, b) => {
//   //sort by name with alphabetical
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(res);
// Find the Most Frequent Word

// function mostFrequentWord(str) {
//   const words = str.trim().split(/\s+/);

//   let maxCount = 0;
//   let mostFrequent = "";

//   for (let i = 0; i < words.length; i++) {
//     let count = 0;
//     for (let j = 0; j < words.length; j++) {
//       if (words[i] === words[j]) {
//         count++;
//       }
//     }
//     if (count > maxCount) {
//       maxCount = count;
//       mostFrequent = words[i];
//     }
//   }
//   return { word: mostFrequent, count: maxCount };
// }

// console.log(
//   mostFrequentWord("the quick brown fox jumps over the lazy dog the the fox")
// ); // the

// Remove Duplicate Words from a Sentence

// function removeDuplicateWords(str) {
//   const Words = str.trim(0).split(/\s+/);
//   let res = []
//   const set = new Set();
//   for (let i = 0; i < Words.length; i++) {
//     if (!set.has(Words[i])) {
//       set.add(Words[i])
//       res.push(Words[i])
//     }
//   }
//   return res.join(" ")
// }

// // Input: "hello hello world world hello"
// // Output: "hello world"

// console.log(removeDuplicateWords("hello hello world world hello"));

// Reverse Each Word in a Sentence

// function reverseWordSenetenece(str) {
//   const words = str.trim().split(/\s+/);
//   let res;
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].toLowerCase().split("").reverse().join("");
//   }

//   return words.join(" ");
// }

// // Input: "React is awesome"
// // Output: "tcaeR si emosewa"

// console.log(reverseWordSenetenece("React is awesome"));

// Check if Sentence is a Palindrome (Ignore spaces & case)

// function checkPalindrome(str) {
//   let str2 = str.toLowerCase().replace(/\s/g, "");
//   let res = str2.split("").reverse().join("");

//   return res === str2;
// }

// // Input: "Was it a car or a cat I saw"
// // Output: true

// console.log(checkPalindrome("Was it a car or a cat I saw"));

// Replace a Word in a Sentence

// function replaceWord(sentence, target, replace) {
//   return sentence.split(target).join(replace);
// }

// // Input: ("I love CSS", "CSS", "JavaScript")
// // Output: "I love JavaScript"

// console.log(replaceWord("I love CSS", "CSS", "JavaScript"));

// Find the Longest Palindromic Substring

// 1️⃣ Reverse a String
// 2️⃣ Check for Palindrome
// 3️⃣ FizzBuzz: print numbers 1 to 100 replacing the multiples of 3 with fizz, multiples of 5 with buzz and multiples of both with fizzbuzz
// 4️⃣ Find Factorial
// 5️⃣ Find the Largest Number in an Array
// 6️⃣ Count the Occurrences of Characters in a String
// 7️⃣ Sort an Array Without Using .sort()
// 8️⃣ Remove Duplicates from an Array

// function missingNumber(num) {
//   let set = new Set(num);
//   let n = num.length;

//   for (let i = 0; i <= n; i++) {
//     if (!set.has(i)) {
//       return i;
//     }
//   }
// }

// function missingNumber(nums,k) {
//   const set = new Set(nums);
//   const result = []

//   for (let i = 0; i <= k; i++) {
//     if (!set.has(i)) {
//       result.push(i)
//     };
//   }
//   return result
// }

// console.log(missingNumber([1, 3, 4],4));

// function reverseString(str) {
//   let result = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// }

// console.log(reverseString("hello"));

// function checkForPalindrome(str) {
//   let s = str.toLowerCase();
//   let left = 0,
//     right = s.length - 1;

//     while (left<right) {
//       if (s[left] !== s[right]) {
//         return false
//       }
//       left++
//       right--
//     }

//   return true
// }

// console.log(checkForPalindrome("maam"));  // true
// console.log(checkForPalindrome("Racecar"));  // true
// console.log(checkForPalindrome("hello"));  // false

// function FizzBuzz(nums) {
//   for (let i = 1; i <= nums; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// FizzBuzz(100)

// function findFactorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i
//   }
//   return result
// }

// console.log(findFactorial(5));

//  Find the Largest Number in an Array

// function findLargestNo(arr) {
//   let res = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > res) {
//       res = arr[i]
//     }
//   }
//   return res;
// }

// console.log(findLargestNo([1, 2, 3, 4, 5]));

// function removeDuplicate(nums) {
//   let set = new Set();
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (!set.has(nums[i])) {
//       set.add(nums[i]);
//       res.push(nums[i]);
//     }
//   }
//   return res;
// }

// console.log(removeDuplicate([1, 2, 3, 3]));

// // using bubble sort
// function sortArr(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1; j++) {
//       if (arr[i] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// let array = [50, 96, 756, 65, 66, 683];
// console.log(sortArr(array));

// x is hoisted, but not initialized
// let a = [1, 2];
//  let b = [1, 2];
//   console.log(a == b);
//   console.log(a === b);

// let x = [1, 2, 3];
// let y = x;
// y.push(4);
// console.log(x);

// function isStringAnagram(str1, str2) {
//   let s1 = str1.split("").sort().join("");
//   let s2 = str2.split("").sort().join("");

//   return s1 === s2;
// }

// let str1 = "abcd",
//   str2 = "dcba";

// console.log(isStringAnagram(str1, str2));

// function palindrome(arr) {
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     let soreted = arr[i].split("").reverse().join("");

//     if (soreted === arr[i]) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// const words = [
//   "madam",
//   "hello",
//   "racecar",
//   "world",
//   "level",
//   "openai",
//   "noon",
//   "javascript",
// ];

// console.log(palindrome(words)); //["madam", "racecar", "level", "noon"]

// function groupAnagram(arr) {
//   let map = new Map();

//   let res = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sortArr = arr[i].split("").sort().join("");

//     if (!map.has(sortArr)) {
//       map.set(sortArr, []);
//     }
//     map.get(sortArr).push(arr[i]);
//   }

//   return Array.from(map.values());
// }

// let strs = ["abc", "bca", "cab", "xyz", "zyx"];

// console.log(groupAnagram(strs));

// function throttle(fun, wait) {
//   let lastCall = 0;

//   return function (...args) {
//     let now = Date.now();

//     if (now - lastCall >= wait) {
//       lastCall = now;
//       fun(...args);
//     }
//   };
// }

// const throttlefun = throttle(() => {
//   console.log("throttle");
// }, 5000);

// throttlefun();

// throttlefun();
// throttlefun();

// function flattenArr(arr, result = []) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//        flattenArr(arr[i], result);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(flattenArr([1,2,3,[3],[4]]));

// //Find the Most Frequent Character
// function mostFrequentChar(str) {
//   let frequency = "";
//   let maxCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         count++;
//       }
//     }
//     if (count > maxCount) {
//       maxCount = count;
//       frequency = str[i];
//     }
//   }
//   return { char: frequency, count: maxCount };
// }

// console.log(mostFrequentChar("hello"));

// Remove a Given Character from a String
// function removeChar(str, k) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== k) {
//       res += str[i];
//     }
//   }
//   return res
// }

// let str = "javascript",
//   charToRemove = "a";
// console.log(removeChar(str, charToRemove));

//Kiwi Technologies India Pvt. Ltd.

// function shuffle(arr) {
//   return arr
//   .map(value => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value);
// }

// console.log(shuffle([1, 2, 3, 4, 5]));

// function sum(n) {

//   let res = 0

//   for (let i = 0; i < n.length; i+=3) {

//     res += n[i]
//   }
// return res
// }

// console.log(sum([1,2,3,1,7,3]));

//Write a JavaScript function that returns the Fibonacci
// sequence up to a given number of terms.

// function fibonacci(n) {
//   let res = [];
//   for (let i = 0; i < n.length; i++) {
//     for (let j = 1; j < n.length; j++) {
//       res.push(n[j]);
//     }
//   }
//   return res;
// }

// console.log(fibonacci(10));

// function countCharacterOccurrences(str) {
//   const charCount = {}; // Initialize an empty object to store counts

//   // Loop through the string and count each character
//   for (let i = 0; i < str.length; i++) {
//     // If the character is not in the object, initialize it to 0
//     if (charCount[str[i]]) {
//       charCount[str[i]] += 1; // Increment the count if it exists
//     } else {
//       charCount[str[i]] = 1; // Otherwise, set the count to 1
//     }
//   }

//   return charCount;
// }

// // Example usage:
// const input = "aabcc";
// console.log(countCharacterOccurrences(input));

// function isSubsequence(s, t) {
//   let i = 0;
//   let j = 0;

//   while (i < s.length && j < t.length) {
//     if (s[i] === t[j]) {
//       i++;
//     }
//     j++;
//   }
//   return i === s.length;
// }

// console.log(isSubsequence("ace", "abcde"));

// function subarray(arr,k) {
//   let map = new Map();

//   for (let i = 0; i < k; i++) {
//     if (!map.has(arr[i])) {
//       map.set(arr[i], []);
//     }
//     map.get(arr[i]).push(arr[i]);
//   }
//   return Array.from(map.values());
// }

// let arr = [1, 2, 5, 6, 7, 8, 1, 2, 3, 3, 3, 4, 5];
// console.log(subarray(arr,3));

// function counter(intialval = 0) {
//   let count = intialval;

//   return {
//     increment() {
//       return ++count;
//     },
//     decrement() {
//       return --count;
//     },
//     reset() {
//       return (count = 0);
//     },
//   };
// }

// let countval = counter();
// console.log(countval.increment());
// console.log(countval.increment());
// console.log(countval.decrement());
// console.log(countval.reset());

// function missingNumber(nums, n) {
// let set = new Set(nums)
// let res = []
// for (let i = 0; i <=n; i++) {
//   if (!set.has(i)) {
//     res.push(i)
//   }

// }
// return res
// }

// console.log(missingNumber([3, 0, 1,5], 4));

// function reverseWord(str) {
//   let word = str.trim().split(/\s/);

//   let largest = word[0];
//   let secondlargest = word[0];

//   for (let i = 0; i < word.length; i++) {
//     if (word.length > largest.length) {
//       secondlargest = largest;
//       largest = word
//       if (word.length > secondlargest.length) {
//         secondlargest = word
//       }
//     }
//   }
//   return secondlargest;
// }

// console.log(reverseWord(" Word programm set"));

// function isPalindrome(str) {
//   let res = str.split("").reverse().join("")
//   return str ===res
// }

// console.log(isPalindrome("race a car"));

// function largestNo(num) {
//   let largest = num[0]

//   for (let i = 0; i < num.length; i++) {

//     if (num[i] > largest) {
//       largest = num[i]
//     }
//   }
//   return largest
// }

// console.log(largestNo([1,2,3]));

// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   let clone = Array.isArray(obj) ? [] : {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       clone[key] = deepClone(obj[key]);
//     }
//   }
//   return clone;
// }
// const original = {
//   name: "Mozammil",
//   details: {
//     age: 28,
//     skills: ["JavaScript", "React"],
//   },
// };

// const copy = deepClone(original);
// copy.details.skills[0] = "Python";

// console.log(original.details.skills[1]); // Still "JavaScript" — original is safe

// Reverse a string

// function reverseStr(str) {
//   let res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i]
//   }
//   return res
// }

// console.log(reverseStr("hello"));

// Find the first non-repeating character
// Input: "leetcode"
// Output: 'l'

// function nonRepeatingChar(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         count++;
//       }
//     }
//     if (count === 1) {
//       return str[i];
//     }
//   }
//   return null;
// }

// console.log(nonRepeatingChar("Hello"));

// Count frequency of each character.

// function countOfFrequencyChar(str) {
//   let map = new Map();
//   for (let i = 0; i < str.length; i++) {
//     map.set(str[i], (map.get(str[i]) || 0) + 1);
//   }

//   return map
// }

// console.log(countOfFrequencyChar("Hello"));
// //Map(4) { 'H' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }

// ✦ Remove duplicate characters from a string.//done
// z
// function removeChar(str) {
//   let set = new Set()

//   let res = []
//   for (let i = 0; i < str.length; i++) {
//     if (!set.has(str[i])) {
//       set.add(str[i])
//       res.push(str[i])
//     }
//   }
//   return res
// }

// console.log(removeChar("hello"));

// // Reverse each word in a sentence (not just the string)
// function reverseWord(str) {
//   let words = str.trim("").split(/\s/);
//   let res = [];
//   for (let j = words.length - 1; j >= 0; j--) {
//     res.push(words[j]);
//   }
//   return res;
// }

// console.log(reverseWord("hello world"));

//Longest substring without repeating characters
// function longestSubStringNonRepeating(s) {
//   let largest = 0

//     for (let i = 0; i < s.length; i++) {
//         let char = new Set()
//         for (let j = i; j < s.length; j++) {
//             if (char.has(s[j])) {
//                 break
//             }
//             char.add(s[j])
//             largest =
//         }
//     }
//     return largest
// }

// //"abcabcbb"
// //"abc"

// console.log(longestSubStringNonRepeating("abcabcbb"));

// function groupAnagram(str) {
//   let map = new Map();

//   for (let i = 0; i < str.length; i++) {
//     let sorted = str[i].split("").sort().join("");

//     if (!map.has(sorted)) {
//       map.set(sorted, []);
//     }
//     map.get(sorted).push(str[i]);
//   }
//   return Array.from(map.values());
// }

// let strs = ["act", "pots", "tops", "cat", "stop", "hat"];

// // Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// console.log(groupAnagram(strs));

// function findMissingNumberInSequence(numbers) {
//   let set = new Set(numbers);
//   let res = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (!set.has(i)) {
//       res.push(i);
//     }
//   }
//   return res;
// }

// console.log(findMissingNumberInSequence([1, 3, 0])); // o/p 11
// function reverseWords(sentence) {
//   if (sentence.length === 0) return;

//   let words = sentence.replace(/\s+/g, "");

//   let res = [];

//   for (let i = 0; i < words.length; i++) {
//     let sorted = words[i].split("").reverse().join("");
//     if ((words[i] = sorted)) {
//       res.push(words[i]);
//     }
//   }

//   return res.join("");
// }

// //For the purpose of user debugging.
// console.log(reverseWords("Hello World"));

// Input: str1 = "xyz", str2 = "axabz"
// Output: 2

// function vowelCount(str) {
//   let  count = 0;
//   let res = []
//   for (let i = 0; i < str.length; i++) {
//     if ("AEIOUEaeioue".includes(str[i])) {
//       count++;
//       res.push(str[i])
//     }
//   }
//   return {count:count, char:res};
// }

// console.log(vowelCount("hello"));

// function findMaxNumber(nums) {
//   let res = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > res) {
//       res = nums[i];
//     }
//   }

//   return res;
// }

// console.log(findMaxNumber([1, 2, 3, 4, 5]));
// console.log(findMaxNumber([-10, -20, -30, -1]));

// function searchBruteForce(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// function reverseVowels(str) {
//   let vowels = "aeioueAEIOUE";
//   let res = [];
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       res.push(str[i]);
//     }
//   }
//   return res
// }

// // Input: s = "leetcode"
// // Output: "leotcede"

// console.log(reverseVowels("leetcode"));

// function removeElement(nums, val) {
//   let res = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != val) {
//       res.push(nums[i]);
//     }
//   }
//   return res;
// }

// let nums = [0, 1, 2, 2, 3, 0, 4, 2],
//   val = 2;

// console.log(removeElement(nums, val));

// function removeElement(nums, val) {
//   let k = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != val) {
//       nums[k++] = nums[i]
//       // k++
//     }
//   }
//   return k;
// }
// function removeElement(nums, val) {
//   let k = 0; // slow pointer - the next index to place a valid element

//   for (let i = 0; i < nums.length; i++) {
//     // fast pointer
//     if (nums[i] !== val) {
//       nums[k] = nums[i]; // copy only the needed values
//       k++;
//     }
//   }

//   return k; // new length of the array
// }

// let nums = [0, 1, 2, 2, 3, 0, 4, 2],
//   val = 2;

// console.log(removeElement(nums, val));

// let data = {
//   films: [
//     { url: "https://test.com/api/films/1/", id: 11 },
//     { url: "https://test.com/api/films/2/", id: 11 },
//     { url: "https://test.com/api/films/3/", id: 1 },
//     { url: "https://test.com/api/films/6/", id: 2 },
//   ],
// };
// const res = data.films
//   .filter((item, index) => item.id === 11)
//   .map((item) => item.url);

// console.log("res :>> ", res);

// let x = 7 + 1 + "2" + 1 + 5;

// 8215

// let y = 7 + "2" + 1 + 1 + 5;
// 72115

// let obj1 = { a: 1, b: 3 };
// let obj2 = { b: 2 };

// console.log({ ...obj1, ...obj2 });

// function deepEqual(a, b) {
//   if (a === b) return true;

//   if (
//     typeof a !== "object" ||
//     typeof b !== "object" ||
//     a === null ||
//     b === null
//   )
//     return false;

//   const keysA = Object.keys(a);
//   const keysB = Object.keys(b);

//   console.log(keysA, keysB);

//   if (keysA.length !== keysB.length) return false;

//   return keysA.every((key) => deepEqual(a[key], b[key]));
// }

// const obj1 = {
//   name: "Mozammil",
//   details: { age: 28, city: "Delhi" },
// };

// const obj2 = {
//   name: "Mozammil",
//   details: { age: 28, city: "Delhi" },
// };

// console.log(deepEqual(obj1, obj2));

// function findElement(arr1, arr2) {
//   let res = arr1
//     .filter((item) => !arr2.includes(item))
//     .concat(arr2.filter((item) => !arr1.includes(item)));
//   return res;
// }

// var a = [1, 2, 3, 4];
// var b = [5, 7, 2, 3];

// console.log(findElement(a, b));

// // output =  [ 1 , 4 , 5 , 7 ]

// function reverseStr(str) {
//   let res = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i];
//   }
//   return res;
// }

// console.log(reverseStr("hello"));

// let data = [
//   { name: "Mozammil", value: "4" },
//   { name: "Aozammil", value: "4" },
//   { name: "Zozammil", value: "4" }
// ];

// const res = data.sort((a,b) => a.name.localeCompare(b.name))

// console.log(res);

// To find character occurance for the string

// function characterOccurance(str, latter) {
//   let freqency = {};

//   let count = 0;
//   for (let i = 0; i < str.length - 1; i++) {
//     if (str.charAt(i) === latter) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(characterOccurance("mozammil", "m"));

// function getSumZeros(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// // Input: [-5, -3, -1, 0, 1, 3, 4, 5]
// // Output: [-5, 5] or [-3, 3]

// console.log(getSumZeros([-5, -3, -1, 0, 1, 3, 4, 5]));

// find the largest pair of the 2 elements using indexing with unsorted elements

// function largestPairSumOfTwo(arr) {
//   let res = arr.sort((a, b) => b - a);

//   console.log(res);

//   return res[0] + res[1];
// }

// const result = largestPairSumOfTwo([9, 7, 8, 4, 5, 6, 1, 2, 3]);

// console.log(result);

//To find the largest pair of the 2 elements using indexing with sorted elements

// function largestPairSumOfTwo(arr) {

//   return arr[arr.length-1] + arr[arr.length-2]
// }

// const result = largestPairSumOfTwo([1,2,3,4,5,6,7,8,9])

// console.log(result);

// Code 23: To find the index of an element from an array

// function findTheIndexOF(str) {
//   let res = str.indexOf("d")

// console.log(res);}

// const array = ["a", "b", "a", "c", "a", "d"];

// console.log(findTheIndexOF(array));

//Fibonacci Series (0,1,1,2,3,5,8,13....)

// function fibonacci(nums) {
//   let res = [0, 1];

//   for (let i = 1; i < nums; i++) {
//     res.push(res[i] + res[i - 1]);
//   }
//   return res
// }
// console.log(fibonacci(5));

//26: Finding a missing elements in an array and then add with existing elements. (-1 means if elements not found then it will return always -1 as per rule)

// function missingNumber(arr) {
//   let n = arr.length + 1;

//   let res = (n * (n + 1)) / 2;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return res - sum;
// }

// console.log(missingNumber([1, 3])); // Output: 2

// Sorting of an string/character

// function sorting(str) {
//   let result = str.sort()
//   return result
// }

// console.log(sorting(["d","g","y","e","r","p"]))

// To check if given number is prime or not

// function prime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(prime(17));

// "Print all Prime Numbers between 2 and 100"

// function Prime(n) {
//   for (let i = 2; i <= n; i++) {
//     let flag = 0;
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         flag = 1;
//         break;
//       }
//     }

//     if (i > 1 && flag == 0) {
//       console.log(i);
//     }
//   }
// }

// Prime(100);

// To find unique values from 2 arrays and keep into one array.

// function uniqueElements(arr1, arr2) {
//   let res = arr1
//     .filter((item) => !arr2.includes(item))
//     .concat(arr2.filter((item) => !arr1.includes(item)));
//   console.log(res);
// }

// function uniqueElements(arr1, arr2) {
//   let res = [...arr1, ...arr2];
//   console.log([...new Set(res)]);
// }

// uniqueElements([1, 2, 3, 4, 4], [2, 3, 4, 5, 6]);

// Find first duplicate element from an array

// function findFirstDuplicate(arr) {
//   let set = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//       return arr[i];
//     }
//     set.add(arr[i]);
//   }
//   return null;
// }

// const arr = [2, 5, 3, 4, 5, 2, 3]; //5

// console.log(findFirstDuplicate(arr));

//  print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
// For numbers which are multiples of both three and five, print "FizzBuzz"

// function fizbuz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     }
//     console.log(i);
//   }
// }

// fizbuz(100);

//Uppercase of each first letter of a words
// function firstLetterCaps(str) {
//   let word = str.split(" ");

//   for (let i = 0; i < word.length; i++) {
//     word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
//   }
//   return word.join(" ");
// }

// console.log(firstLetterCaps("hello word"));

//Code 36: Uppercase of each first letter of a words using map function

// function firstLetterCaps(str) {

// let res = str.split(" ").map((item) => {
//   return item[0].toUpperCase()+ item.slice(1)
// })
// return res.join(' ')
// }

// console.log(firstLetterCaps("hello word"));

// To check ending of the string with given character/s using inbuild function

// function checkEndchar(str, end) {
//   return str.endsWith(end);
// }
// let str = "Hello Mozammil";
// let ending = "mil";

// console.log(checkEndchar(str, ending));

// To check ending of the string with given character/s using custom

// function checkEndchar(str, end) {
// let res = str.lastIndexOf(end.length)
// let res2 = str.slice(-end.length)
// console.log(res2===end);
// }
// let str = "Hello Mozammil";
// let ending = "mil";

// console.log(checkEndchar(str, ending));

// function largestFromArray(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     let max = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > max) {
//         max = arr[i][j];
//       }
//     }
//     result.push(max)
//   }
//   return result
// }

// const arr = [
//   [3, 8, 12],
//   [9, 4, 11],
//   [1, 7, 15],
// ];
// //15
// console.log(
//   largestFromArray([
//     [1, 2, 3, 4],
//     [5, 6, 7, 9],
//     [45, 76, 2, 1],
//     [89, 90, 87, 9],
//   ])
// );
// console.log(largestFromArray(arr));

// Print string n times using inbuilt function

// function stringPrint(str) {
//   let res = "";
//   for (let i = 1; i <= 3; i++) {
//     res += str + " ";
//   }
//   return res;
// }

// console.log(stringPrint("Hello"));

//Code 45: Converting one dimensional array into n dimensional array using slice

// function arrToSubArr(arr, size) {
//   let result = [];

//   while (arr.length > 0) {
//     result.push(arr.splice(0, size));
//     // arr = arr.slice(size);
//   }
//   return result;
// }

// console.log(arrToSubArr([1, 2, 3, 4, 5, 6, 7, 8, 9],4));

// function removeFalseValue(arr) {
//   // let res = [];
//   // for (const item of arr) {
//   //   if (item) {
//   //     res.push(item);
//   //   }
//   // }
//   // return res;

//   // using filter
//   return arr.filter((item) => item)
// }

// console.log(
//   removeFalseValue(["priya", 0, "", false, null, undefined, "ate", NaN, 9])
// ); //["priya","ate",9]

//Checking all letters of second words should present in first word, in the same order using include function

// function charCheck(str) {
//   for (let i = 0; i < str.length; i++) {
//     if ("abc".includes(str[i])) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(charCheck("abcde"));

//  Unique values only from 2 arrays

// function diffArrayElement(arr1,arr2) {

//   let res = arr1.filter((item) => !arr2.includes(item)).concat(arr2.filter((item) => !arr1.includes(item)))

//   console.log('res :>> ', res);

// }

// console.log(diffArrayElement([1,2,3,4], [2,3,4,5])) //[1,5]

//Using the Array filter Method to Remove Items By Value
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// let res = array.filter((item) => item != 5);

// console.log('res :>> ', res);

// //  Spiral Matrix Printing | Print the elements of a matrix in spiral form
// var input = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// let res = input.flat(Infinity)

// console.log('res :>> ', res);

// //[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

// const arr = [
//   ["a", "b"],
//   ["c", "d"],
//   ["e", "f"],
// ];

// let res = arr.reduce((a,b) => a.concat(b))

// console.log('res :>> ', res);

// Reverse of a nuber using converting into string

// function reverseNumber(num) {

//   let str =  num.toString()

//   let rev = str.split("").reverse().join("")

//   console.log('str :>> ', str);
//   console.log('rev :>> ', rev);

// }

// console.log(reverseNumber(123)) //321

// Check Armstrong Number
// function CheckArmstrongNum(num) {
//   const digits = num.toString().split("");
//   let res = [];
//   // console.log("digits :>> ", digits);
//   for (let i = 1; i <= digits.length; i++) {
//     console.log([i]**[i]);
//     // res.push(num[i] * num[i]);
//   }
// }

// console.log(CheckArmstrongNum(153));

// function Person(name) {
//   this.name = name
//   this.Greet = function(){
//     console.log(`Hello ${this.name}`);
//   }
// }

// const greet = new Person("Mozammil")

// greet.Greet()

// To find all the missing numbers from an array

// function allMissingNo(nums) {
//   let set = new Set(nums);
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (!set.has(i)) {
//       res.push(i);
//     }
//     // set.add(nums[i]);
//   }
//   return res;
// }

// console.log(allMissingNo[(1, 3, 5, 7)]);

//sort by frequency of the letters
//Remove duplicate elements from an array using filter
// function removeDuplicate(str) {
//   return str.filter((value, index, arr) => arr.indexOf(value) === index);

// }

// console.log(removeDuplicate([1, 2, 2, 3, 3, 8, 8, 9]));
//Reverse a string with reversing individual words
// function reverseStr(str) {
//   let res = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     res.push(str[i])
//   }
//   return res.join("");
// }

// // Output: "gnimmargorp evol I"
// console.log(reverseStr("I love programming"));

// function checkArgumet() {
//   console.log(arguments);
// }

// console.log(checkArgumet([1,2,3,4]));

// function varArgsFunc(...params) {
//   params.forEach(function (value, index) {
//     console.log(index, ": ", value);
//   });
// }

// // driver code
// varArgsFunc("Hello", ",", "World", "!!!");

// function stringChop(str, size = str.length) {
//   let res = [];
//   for (let i = 0; i < str.length; i += size) {
//     res.push(str.slice(i, i + size));
//   }
//   return res;
// }

// // Example
// console.log(stringChop("JavaScript")); // ["JavaScript"]
// console.log(stringChop("JavaScript", 2)); // ["Ja", "va", "Sc", "ri", "pt"]
// console.log(stringChop("JavaScript", 3)); // ["Jav", "aSc", "rip", "t"]

// function groupAnagram(str) {
//   let map = new Map()

//   for (let i = 0; i < str.length; i++) {
//     let soreted = str[i].split("").sort().join("");
//     if (!map.has(soreted)) {
//       map.set(soreted,[])
//     }
//     map.get(soreted).push(str[i])
//   }

//   return Array.from(map.values())
// }

// let strs = ["act", "pots", "tops", "cat", "stop", "hat"];
// console.log(groupAnagram(strs));

// // Output: [["act", "cat"], ["pots", "tops", "stop"], ["hat"]]

let obj = {
  a: 20,
  b: 30,
  c: 50,
  a: 60,
};

//longest words in strings

// function largestNo(str) {
//   let word = str.split(" ");

//   let sorted = word.sort((a, b) => b.length - a.length[0]);

//   console.log("sorted :>> ", sorted);

//   return sorted
// }

// console.log(largestNo("i love my country"));

// function findKthSmallestOrLargest(arr, num) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(arr);
//   console.log("kth smallest", arr[num - 1]); //kth smallest
//   console.log("kth largest", arr[arr.length - num]); //kth smallest
// }
// console.log(

//   ([2, 1, 4, 3, 6, 5, 7], 3)); //kth is 3rd //3,5

// var a = [1, 2, 3, 4];
// var b = [5, 7, 2, 3];

// var c = [5, 7, 2, 8];

// let res = [
//   ...a.filter((item) => !b.includes(item)),
//   ...b.filter((item) => !a.includes(item)),
//   ...c.filter((item) => !b.includes(item)),
// ];

// console.log(res);

// // Example
// const books = [
//   { name: "Harry Potter", author: "Joanne Rowling" },
//   { name: "Warcross", author: "Marie Lu" },
//   { name: "The Hunger Games", author: "Suzanne Collins" },
// ];

// let res = books.sort((a, b) => a.name[1].localeCompare(b.name[1]));
// console.log(res);

// function palindromeStr(str) {
//   if (typeof str !== "string" || typeof str !== "number") {
//     return str;
//   }
//   const result = str.toString().split("").reverse().join("");

//   return result;
// }

// console.log(palindromeStr("hello"));
// console.log(palindromeStr(12321));

//Find the longest word in a string using a for...of loop

// function longestWord(str) {
//   let words = str.split(" ");
//   let result = words.sort((a, b) => b.length - a.length);
//   return result[0];
// }

// console.log(longestWord("i love my country"));

// var longestCommonPrefix = function (str) {
//   let result = "";

//   for (let i = 0; i <str.length; i++) {
//     if (str[0][i] === str[str.length - 1][i]) {
//       result += str[0[i]]
//     }
//   }
//   return result
// };

// function printList(n) {
//   for (var i = n; i >= 1; i--) {
//     (function (j) {
//       setTimeout(() => {
//         console.log(j);
//       }, (n - j + 1) * 1000);
//     })(i);
//   }
// }

// printList(10);

// function largestPrefix(str) {
//   let prefix = "";
//   let last = str[str.length - 1];
//   let first = str[0];

//   for (let i = 0; i < str.length; i++) {
//     if (first[i] === last[i]) {
//       prefix += first[i];
//     }
//   }
//   return prefix;
// }

// console.log(largestPrefix(["flower", "flow", "flight"]));
// // Output: "fl"
// //

// Find all vowels and their count in a given string
// function vowelCount(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   let found = [];

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       found.push(str[i]);
//       count++;
//     }
//   }
//   return { found: found, count: count };
// }
// const str = "preparing for frontend interviews";

// console.log(vowelCount(str));

// function charCount(str, k) {
//   let count = "";

//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]=== k);
//     if (str[i] === k) {
//       count++
//     }
//   }

//  return count;
// }

// console.log(charCount("hello","l"));
//using two pointers
// function getSumPairZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     if (arr[left] + arr[right] === 0) {
//       return [arr[left], arr[right]];
//     }
//     left++;
//     right--;
//   }
//   return null;
// }

// const arr = [2, -3, 4, -2, 1, 5];
// console.log(getSumPairZero(arr));

// function findDuplicate(arr) {
//   let set = new Set();
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//       res.push(arr[i]);
//     }
//     set.add(arr[i]);
//   }
//   return res[0];
// }

// console.log(findDuplicate([3, 3, 3, 3, 3]));

//XOR method
// function missingNumber(nums) {
//   let res = nums.length;
//   for (let i = 0; i < nums.length; i++) {
//     res += i - nums[i];
//   }
//   return res;
// }

// console.log(missingNumber([0, 1, 3])); //2

// function missingNumber(nums) {
//   let set = new Set(nums);
//   let res = [];

//   for (let i = 1; i <= nums.length; i++) {
//     if (!set.has(i)) {
//       res.push(i);
//     }
//   }
//   return res;
// }

// console.log(missingNumber([1,1])); //[2]
