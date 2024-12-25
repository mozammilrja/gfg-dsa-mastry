//Merge two object


// let obj1 = { a: 1, b: { c: 2, d: 3 } };
// let obj2 = { b: { c: 4, e: 5 }, f: 6 };
// let merge = Object.assign({}, obj1, obj2);
// console.log(merge);// { a: 1, b: { c: 4, d: 3, e: 5 }, f: 6 }

// filter object


let obj = { a: 1, b: 2, c: 3 };
let filteredObj = Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => value > 1)
);
console.log(filteredObj); // { b: 2, c: 3 }

