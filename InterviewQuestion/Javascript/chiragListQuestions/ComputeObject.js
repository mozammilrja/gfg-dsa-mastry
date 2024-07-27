const pipe = (obj) => (...args) => {
  const processObject = (obj) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (typeof value === 'function') {
        acc[key] = value(...args);
      } else if (typeof value === 'object' && value !== null) {
        acc[key] = processObject(value);
      }
      return acc;
    }, {});
  };

  return processObject(obj);
};

// Test object
let test = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a + b * c, // Fixed the syntax error: `b * c` instead of `bc`
  D: {
    E: (a, b, c) => a + b + c,
  },
};

// Applying the pipe function
console.log(pipe(test)(1, 1, 1));

// Expected output:
// {
//   A: 3,
//   B: -1,
//   C: 2,
//   D: {
//     E: 3,
//   },
// }
