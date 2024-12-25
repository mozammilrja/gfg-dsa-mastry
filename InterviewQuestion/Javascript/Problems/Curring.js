function curry(func) {
  // Get the number of arguments the original function expects
  const arity = func.length;

  // Create a curried version of the function
  function curried(...args) {
    // If enough arguments have been provided, invoke the original function
    if (args.length >= arity) {
      return func(...args);
    }

    // Otherwise, return a new function that collects more arguments
    return function(...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  }

  return curried;
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
