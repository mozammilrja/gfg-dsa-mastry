// Naive solutions
//  time complexity o(n^2)
// function EquilibriumPoint(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let ls = 0,
//       rs = 0;
//     for (let j = 0; j < i; j++) {
//       ls += arr[j];
//       for (let j = i + 1; j < n; j++) {
//         rs += arr[j];
//         if (ls === rs) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }

// let arr = [3, 4, 8, -9, 9, 7];
// console.log("Equilibrium Point is at index: ", EquilibriumPoint(arr));
// // Output : Equilibrium Point is at true

// function EquilibriumPoint(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
//     let ls = 0;
//     for (let i = 0; i < arr.length; i++) {
//       res -= arr[i];
//       if (ls === res) {
//         return true;
//         ls += arr[i];
//       }
//     }
//   }
//   return false;
// }
// let arr = [3, 4, 8, -9, 9, 7,8];
// console.log("Equilibrium Point is at index: ", EquilibriumPoint(arr));

function equilibriumPoint(arr) {
  let totalSum = 0;
  let leftSum = 0;

  // Calculate the total sum of elements in the array
  for (let num of arr) {
    totalSum += num;
  }

  for (let i = 0; i < arr.length; i++) {
    // Subtract the current element from the total sum to get the right sum
    totalSum -= arr[i];

    // Check if the left sum is equal to the right sum
    if (leftSum === totalSum) {
      return true; // Return the index if equilibrium point is found true
    }

    // Update the left sum for the next iteration
    leftSum += arr[i];
  }

  // If no equilibrium point is found, return false
  return false;
}

let arr = [3, 4, 8, -9, 9, 7];
console.log("Equilibrium Point is at index: ", equilibriumPoint(arr));
