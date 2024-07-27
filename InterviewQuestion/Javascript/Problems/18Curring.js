const curry = (fn) => {
  const helper = (...args) => {
    if (args.length >= fn.length) {
      // If enough arguments are provided, call the original function `fn` with those arguments
      return fn(...args);
    } else {
      // Otherwise, return a new function `temp` that captures the remaining arguments
      let temp = (...args2) => {
        // Recursively call `helper` with the combined arguments
        return helper(...args, ...args2);
      };
      return temp;
    }
  };
  return helper; // Return the initial `helper` function
};

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4)); // Output: 10
console.log(curriedSum(1)(2, 3)(4)); // Output: 10
console.log(curriedSum(1)(2)(3)(4)); // Output: 10
