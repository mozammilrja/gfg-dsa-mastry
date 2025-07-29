// function containsDuplicates(arr) {
//   let set = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//       return true;
//     }
//     set.add(arr[i]);
//   }
//   return false;
// }

// console.log(containsDuplicates([1, 2, 3, 1]));

// function containsDuplicates(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// function containsDuplicates(arr) {
//   const map = new Map();
//   for (let item of arr) {
//     if (map.has(item)) return true;
//     map.set(item);
//   }
//   return false;
// }

// console.log(containsDuplicates([1, 2, 3, 1]));

//itercetion of the two numbers
// let nums1 = [1, 2, 2, 2];
// let nums2 = [2, 2];
// let res = nums1.filter((item) => nums2.includes(item));

// console.log(res);

const now = new Date();
now.setHours(hours, minutes, seconds, ms);
console.log(now);
