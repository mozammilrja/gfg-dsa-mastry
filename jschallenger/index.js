// Sum two numbers
// Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result
// function myFunction(a, b) {
//   return a + b;
// }

// console.log(myFunction(1, 2));
// // expected: 3
// console.log(myFunction(1, 10));
// // expected: 11
// console.log(myFunction(99, 1));
// // expected: 100

// -----------------------
// Comparison operators, strict equality
// Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
// function myFunction(a, b) {
//    return a===b
// }

// console.log(myFunction(2, 3))
// // expected: false
// console.log(myFunction(1, '1'))
// // expected: false
// console.log(myFunction('10', '10'))
// // expected: true

// Get type of value
// Write a function that takes a value as argument. Return the type of the value.

// function myFunction(a) {
//     return typeof(a)
// }
// console.log(myFunction(10))

//Get nth character of string

// function myFunction(str,n) {

//     return str[n]
// }
// console.log(myFunction("hello",3))

//Remove first n characters of string

// function myFunction(str,n) {

//     return str.slice(0,n)
// }
// console.log(myFunction("frontend",3))

//Find the index of the first occurrence of the substring 'is' in a given string.

// function myFunction(str, n) {
//   let res1 = str.slice(0, Math.floor(str.length / 2));//first half
//   let res2 = str.slice(Math.floor(str.length / 2)); //last half

//   return { res1, res2 };
// }
// console.log(myFunction("frontend"));

//Remove last n characters of string

// function myFunction(str, n) {
//   return str.slice(0, -n);
// }
// console.log(myFunction("frontend", 3));

// function getPercentage(a, b, c, d, e, f) {
//   let sum = a + b;
//   let sub = sum - c;
//   let multi = sub * d;
//   let dev = multi / e;
//   let power = Math.floor(Math.pow(dev, f));

//   return power;
// }

// // console.log(getPercentage(8, 2, 2, 2, 6, 8)); // Output: 20
// function getPercentage(str1, str2) {
//   if (str1.includes(str2)) {
//     return str2 + str1;
//   } else {
//     return str1 + str2;
//   }
// }
// console.log(getPercentage("frontend", "end")); // Output: "endfrontend"
// console.log(getPercentage("java", "script")); // Output: "javascript"

// function isEven(n) {
//   return n % 2 === 0;
// }
// console.log(isEven(10));

// function charCount(str1, str2) {
//   let res = 0;
//   let count = 0;
//   for (let i = 0; i < str1.length; i++) {
//     console.log("str1[i]", str1[i] === str2);
//     if (str1[i] === str2) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(charCount("hello world", "l"));
// function roundNumber(n) {
//   let lastDigit = [];

//   while (n > 0) {
//     lastDigit.unshift(n % 10);

//     n = Math.floor(n / 10);
//   }

//   return lastDigit;
// }

// console.log(roundNumber(314159));

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function nextPrime(a) {
//   while (!isPrime(a)) {
//     a++;
//   }
//   return a;
// }
// console.log(nextPrime(7)); // 7 (already prime)
// console.log(nextPrime(10)); // 11
// console.log(nextPrime(20)); // 23
// console.log(nextPrime(2)); // 2

// function nextDivisible(x, y) {
//   if (x % y === 0) {
//     return x;
//   } else {
//     return x + (y - (x % y));
//   }
// }
// console.log(nextDivisible(10, 3)); // 12
// console.log(nextDivisible(14, 7)); // 14
// console.log(nextDivisible(8, 5)); // 10
// console.log(nextDivisible(20, 6)); // 24

//IMP
// function addCharEndEveyN(a, b) {
//   let res = "";
//   let count = 0;
//   for (let i = a.length - 1; i >= 0; i--) {
//     res = a[i] + res;
//     count++;
//     if (count % 3 === 0 && i !== 0) {
//       res = b + res;
//     }
//   }
//   return res;
// }

// console.log(addCharEndEveyN("1234567890", "."));


//get last element of 