// Memoize polyfill

function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
      var argsCache = JSON.stringify(args);
      if (!res[argsCache]) {
        res[argsCache] = fn.call(context || this, ...args);
      }
      return res[argsCache];
    };
  }
  
  const clumsySquire = (num1, num2) => {
    for (let i = 0; i < 100000000; i++) {}
    return num1 * num2;
  };
  
  const memoizeClumsySquire = myMemoize(clumsySquire);
  
  console.log("first call");
  console.log(memoizeClumsySquire(9467, 7649));
  console.log("first call");
  
  console.log("Second call");
  console.log(memoizeClumsySquire(9467, 7649));
  console.log("Second call");
  