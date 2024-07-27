const pipe = (obj) => {
  return function (...args) {
    for (const key in obj) {
      let val = obj[key];
      if (typeof val === "function") {
        obj[key] = val(...args);
      } else {
        obj[key] = pipe(val)(...args);
      }
    }
    return obj;
  };
};

let test = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};

console.log(pipe(test)(1, 1, 1));

// expected output
// {
//   "a": {
//     "b": 3,
//     "c": 1
//   },
//   "d": -1,
//   "e": 1,
//   "f": true
// }
