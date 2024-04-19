// Clouser in javascript
// Once polyfill

function once(func, context) {
    let ran;
  
    return function () {
      if (func) {
        ran = func.apply(context || this, arguments);
        func = null;
      }
      return ran;
    };
  }
  
  const result = once((a, b) => console.log("Hello World", a, b));
  result(5, 6);
  