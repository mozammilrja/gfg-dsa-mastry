// function myFunction(set,val) {
//     return set.has(val)
// }

// console.log(myFunction(new Set([1,2,3]),2))

// function myFunction(set) {
//     console.log([...set])
//   return Array.from(set);
// }

// console.log(myFunction(new Set([1, 2, 3])));

// function myFunction(set, set2) {
//   let newSet = new Set();

//   for (const val of set) {
//     newSet.add(val);
//     for (const val of set2) {
//       newSet.add(val);
//     }
//   }
//   return newSet;
// }

// console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5])));

function myFunction(str1, str2, str3) {
  return new Set([str1, str2, str3]);
}

console.log(myFunction("apple", "banana", "cherry"));
