const memoize = function (fn,context) {
  // your code goes here
   const res = {};
   return function (...args) {
     var argsCache = JSON.stringify(args);
     if (!res[argsCache]) {
       res[argsCache] = fn.call(context || this, ...args);
     }
     return res[argsCache];
   };
};

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

const memoizedFactorial = memoize(factorial);
let a = memoizedFactorial(100); // slow
console.log(a); //9.33262154439441e+157 // slow

let b = memoizedFactorial(100); // faster
console.log(b); //9.33262154439441e+157 // faster
