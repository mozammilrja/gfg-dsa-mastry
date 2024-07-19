// function areArraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   const countMap1 = {};
//   const countMap2 = {};

//   // Count occurrences in arr1
//   for (let num of arr1) {
//     countMap1[num] = (countMap1[num] || 0) + 1;
//   }

//   // Count occurrences in arr2
//   for (let num of arr2) {
//     countMap2[num] = (countMap2[num] || 0) + 1;
//   }

//   // Compare the two maps
//   for (let key in countMap1) {
//     if (countMap1[key] !== countMap2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

function areArraysEqual(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// Test cases
let arr1 = [1, 2, 5, 4, 0];
let arr2 = [2, 4, 5, 0, 1];
console.log(areArraysEqual(arr1, arr2)); // Output: true

arr1 = [1, 2, 5];
arr2 = [2, 4, 15];
console.log(areArraysEqual(arr1, arr2)); // Output: false
