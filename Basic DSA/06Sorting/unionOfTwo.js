// // Fix this function to find the union size of two arrays

// function unionSize(a, b) {
//   // Create a Set to store unique elements from both arrays
//   let r = new Set(a);

//   // Add unique elements from array b to the Set
//   for (let i = 0; i < b.length; i++) {
//     r.add(b[i]);
//   }

//   // Return the size of the Set, which represents the union size
//   return r.size;
// }

// // Example usage:
// const a = [10, 10, 20];
// const b = [20, 30, 10];

// const unionArray = unionSize(a, b);
// console.log(unionArray);

function findUnion(arr1, arr2, n, m) {
  let set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(arr1[i]);
  }
  for (let j = 0; j < m; j++) {
    set.add(arr2[j]);
  }
  return Array.from(set);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3];

let n = arr1.length;
let m = arr2.length;

const unionArray = findUnion(arr1, arr2, n, m);
console.log(unionArray);
