function add(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    }
    return add(a + b);
  };
}

console.log(add(2)(4)(7)());
console.log(add(5)(10)(0)()); // Output: 15 (handles 0 correctly)
