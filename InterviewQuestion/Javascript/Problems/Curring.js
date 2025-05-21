function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args); // Enough arguments? Call the function
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs); // Keep collecting
      };
    }
  };
}

// Example usage:

function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(3)(4)); // 7

const alreadyAddedThree = curriedAdd(3);
console.log(alreadyAddedThree(4)); // 7

function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);
console.log(curriedMultiplyThreeNumbers(4)(5)(6)); // 120

const containsFour = curriedMultiplyThreeNumbers(4);
const containsFourMulFive = containsFour(5);
console.log(containsFourMulFive(6)); // 120

export default curry;
