// itrative methods
// function factorialNumbers(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(factorialNumbers(4));
// complexity theta(n)
// aux space theta(1)

// recurvive methods

function factorialNumbers(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorialNumbers(n - 1);
}
console.log(factorialNumbers(4));
