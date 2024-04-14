// Genrate every possible triplate and compare sum  with the given sum.

// Nove solutions

// function istriplte(arr, x) {
//   let n = arr.length;
//   for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let k = j + 1; k < n; k++) {
//         if (arr[i] + arr[j] + arr[k] === x) return true;
//       }
//     }
//   }
//   return false;
// }
// let arr = [2, 3, 5, 6, 15];
// let x = 120;
// console.log(istriplte(arr, x));

// Optimize using two pointers approach

function isTriple(arr, x) {
  let n = arr.length;
  arr.sort((a, b) => a - b); // Sort the array in non-decreasing order

  // Fix one element and find other two elements using two-pointer technique
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === x) {
        return true; // Triplet found
      } else if (sum < x) {
        left++; // Move left pointer to increase sum
      } else {
        right--; // Move right pointer to decrease sum
      }
    }
  }

  return false; // No triplet found
}

let arr = [2, 3, 4, 8, 9, 20, 40];
let x = 32;
console.log(isTriple(arr, x));
// Time complexity n(n^2)

