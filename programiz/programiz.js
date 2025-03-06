// delete elements from an array specified by index
// let arr  = ["Mango", "Banana", "Apple", "Papaya"];

// let res = arr.splice(0, 1,);

// console.log(res);
// console.log(arr);

//remov element from an array specified by value
// function removeByValue(arr,val) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             arr.splice(i, 1);
//         }
//     }
// return arr;
// }

// // add object to an array
// function addObj(arr, obj) {
//   arr.push(obj)//add last element
//   arr.unshift(obj)//add first element
//   arr.unshift("Raja")//add first element in arrays
//   arr.pop(arr)//remove last element
//   arr.shift(obj)//remove first element
//   arr.splice(2, 0, obj); //add element at index 2
//   arr = [...arr, obj]; //add element at last using spread operator
//   return arr;
// }

// let arr = ["Mango", "Banana", "Apple", "Papaya"];
// let obj = { name: "Raja", age: 23 };
// console.log(addObj(arr, obj));

// function mergeRemoveDuplicate(arr, arr2) {
//   let set = new Set();
//   let result = [];
//   let merge = [...arr, ...arr2];
// //    return new Set(merge)// using set directy use remove the element
//   for (let i = 0; i < merge.length; i++) {
//     if (!set.has(merge[i])) {
//       set.add(merge[i]);
//       result.push(merge[i]);
//     }
//   }
//   return result;
// }

// let arr1 = [1, 2, 3, 4, 5, 8];
// let arr2 = [5, 7, 8];

// console.log(mergeRemoveDuplicate(arr1, arr2));

// function arrOfObjSortByValues(arr) {
//   const res = arr.sort((a, b) => a.name.toUpperCase() - b.name.toUpperCase());
//   console.log('res :>> ', res);
//   return arr.sort((a, b) => a.age - b.age);
// }

// const data = [
//   { name: "Raja", age: 23 },
//   { name: "Mango", age: 5 },
//   { name: "Banana", age: 2 },
//   { name: "Apple", age: 3 },
//   { name: "Papaya", age: 4 },
// ];

// console.log(arrOfObjSortByValues(data));

// get a random number from array
// function getRandom(arr) {
//   let res = Math.floor(Math.random() * arr.length);

//   const item = arr[res];

//   return item;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(getRandom(arr));

// function compareTwoArr(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   return true;
// }

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5,];

// console.log(compareTwoArr(arr, arr2));

// function question4_solution2() {
//   for (var i = 0; i < 5; i++) {
//       (function(i) {
//           setTimeout(function() {
//               console.log(i);
//           }, 1000);
//       })(i);
//   }
// }

// question4_solution2();

// let a = 10;
// a = 100;
// // console.log(a);

// function x() {
//   let a = 10;
//   function d() {
//     console.log(a);
//   }
//   a = 500;
//   return d;
// }
// var z = x();
// z();

// let a = true;
// // setTimeout(() => {
// //   a = false;
// //   console.log("object",a);
// // }, 2000);
// while (a) {
//   console.log(" -- inside whilee -- ");
// }

async function foo() {
  console.log("A");
 await Promise.resolve();
  console.log("B");
 await new Promise(resolve => setTimeout(resolve, 0));
  console.log("C");
 }
 console.log("D");
 foo();
 console.log("E")
