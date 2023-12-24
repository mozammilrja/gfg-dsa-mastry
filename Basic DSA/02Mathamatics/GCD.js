// naive method

// function GCD(a, b) {
//   let result = Math.min(a, b);

//   while (result > 0) {
//     if (a % result === 0 && b % result === 0) {
//       return result;
//     }
//     result--;
//   }

//   return result;
// }
// console.log(GCD(4, 6));

// standord algoritham
// Optimised Euclidean Algorithm Code
function GCD(a, b) {
  if (b === 0) {
    return a;
  }
  return GCD(b, a % b);
}
console.log(GCD(4, 6));
