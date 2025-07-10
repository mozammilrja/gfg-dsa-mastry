// //get nth element of array

// function myFunction(a, n) {
//   return a[n - 1];
// }

// console.log(myFunction([1, 2, 3, 4, 5], 3));
// console.log(myFunction([10, 9, 8, 7, 6], 5));

// //Remove first 3 element of array

// function myFunction(a, n) {
//   return a.slice(0,3);
// }

// console.log(myFunction([1, 2, 3, 4, 5], 3));
// console.log(myFunction([10, 9, 8, 7, 6], 5));

//last n element of array

// function myFunction(a, n) {
//   return a.slice(-n);
// }

// console.log(myFunction([1, 2, 3, 4, 5], 2));
// console.log(myFunction([10, 9, 8, 7, 6], 5));

//remove a specific element

// function myFunction(a, n) {
//   return a.filter((item) => item !== n);
// }

// console.log(myFunction([1, 2, 3, 2, 4], 2));
// console.log(myFunction([10, 9, 8, 7, 6], 5));
// console.log(myFunction([1, 2, 2, 3, 4], 2)); //[1, 3, 4]

// function myFunction(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(myFunction([1, 2, 3, 2, -2, -3, -4]));

// function myFunction(arr) {
//   return arr.sort();
// }

// console.log(myFunction(["banana", "apple", "cherry"]));

// function myFunction(arr) {
//   let sum = 0
//   let n = arr.length

//   for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i]

//   }
//   return sum/n
// }

// console.log(myFunction([1, 2, 3, 4, 5]));

// function myFunction(arr) {
//   let largest = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length >= largest.length) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// console.log(myFunction(['apple', 'banana', 'cherry']));   // ➞ 'banana'
// console.log(myFunction(['cat', 'elephant', 'dog']));      // ➞ 'elephant'
// console.log(myFunction(['a', 'ab', 'abc', 'abcd']));      // ➞ 'abcd'
// console.log(myFunction([]));                              // ➞ ''

// function myFunction(arr) {
//   return arr.every((value) => value === arr[0]);
// }

// console.log(myFunction([1, 1, 1, 1]));
// console.log(myFunction([1, 1, 1, 3]));

// function myFunction(obj) {
//   let res = obj.sort((a, b) => a.b - b.b);
//   // for (let item in obj) {
//     console.log(res);
//   // }
// }

// console.log(
//   myFunction([
//     { a: 1, b: 2 },
//     { a: 5, b: 4 },
//     { a: 3, b: 1 },
//   ])
// );

// // console.log(myFunction([]));

// function myFunction(arr, k) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > k) {
//       res += arr[i];
//     }
//   }
//   return res;
// }

// console.log(myFunction([1, 2, 3, 4, 5], 3));
// console.log(myFunction([10, 20, 30], 15));
// console.log(myFunction([5, 5, 5], 5));
// console.log(myFunction([100, 200, 300], 150));

// function myFunction(k,n) {
//   let  res = []
//   for (let i = k; i <=n; i++) {
//     res.push(i)

//   }
//   return res
// }

// console.log(myFunction(2,5));

// function myFunction(arr, k) {
//   let res = [];
//   let first = k < 6 ? 0 : k;
//   res.push(first, ...arr);
//   return res;
// }

// console.log(myFunction([1, 2, 3], 8));

// function myFunction(arr, k) {
//   let res = [];
//   for (let i = k - 1; i < arr.length; i += k) {
//     res.push(arr[i]);
//   }
//   return res;
// }

// console.log(myFunction([1, 2, 3, 4, 5, 6], 2));     // ➞ [2, 4, 6]
// console.log(myFunction([5, 10, 15, 20, 25], 1));    // ➞ [5, 10, 15, 20, 25]
// console.log(myFunction([10, 20, 30, 40, 50], 3));   // ➞ [30]
// console.log(myFunction([1, 2, 3], 4));              // ➞ []

function myFunction(obj, k) {
  return obj[k];
}

console.log(myFunction({ prop1: "a", prop2: "b" }, "prop1"));
console.log(myFunction({ key: "value", other: "test" }, "other"));
