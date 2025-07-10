// function myFunction(obj, k) {
// //   return obj.hasOwnProperty(k);
//   return Object.hasOwn(obj, k);
// }

// console.log(myFunction({ x: 1, y: 2 }, "x"));
// console.log(myFunction({ x: 1, y: 2 }, "z"));
// console.log(myFunction({ z: undefined }, "z"));

// function myFunction(obj, key) {
//   return obj.hasOwnProperty(key) && Boolean(obj[key]);
// }
// console.log(myFunction({ x: 1 }, "x")); // true
// console.log(myFunction({ x: 0 }, "x")); // false
// console.log(myFunction({ x: undefined }, "x")); // false
// console.log(myFunction({}, "x")); // false
// console.log(myFunction({ x: "hello" }, "x")); // true

// function myFunction(str) {
//   return { key: str };
// }
// console.log(myFunction("hello"));
// // ➞ { key: "hello" }

// console.log(myFunction("JavaScript"));
// // ➞ { key: "JavaScript" }

// function myFunction(key, value) {
//   let result = {};
//   for (let i = 0; i < key.length; i++) {
//     result[key[i]] = value[i];
//   }
//   return result;
// }
// console.log(myFunction(["name", "age"], ["Mozammil", 28])); //{ name: "Mozammil", age: 28 }

// function myFunction(key, value) {
//   let result = {};
//   for (let i = 0; i < key.length; i++) {
//     result[key[i]] = value[i];
//   }
//   return result;
// }
// console.log(myFunction(["name", "age"], ["Mozammil", 28])); //{ name: "Mozammil", age: 28 }

// function myFunction(obj) {
//   return Object.keys(obj);
// }

// console.log(myFunction({ name: "Mozammil", age: 28 }));

// function myFunction(obj) {
//   return obj?.a?.b;
// }

// console.log(myFunction({ a: { b: 42 } })); // ➞ 42
// console.log(myFunction({ a: {} })); // ➞ undefined
// console.log(myFunction({})); // ➞ undefined
// console.log(myFunction({ a: null })); // ➞ undefined
// console.log(myFunction({ a: { b: null } })); // ➞ null

// //Sum of object valuse
// function myFunction(obj) {
//   let sum = 0;
//   for (let valuse in obj) {
//     sum += obj[valuse];
//   }
//   return sum;
// }

// console.log(myFunction({ a: 1, b: 2, c: 3 })); //6

//
// function myFunction(obj) {
//   console.log(delete obj.a);
// }

// console.log(myFunction({ a: 1, b: 2, c: 3 })); //6

// const obj = { a: 1, b: 2, c: 3 };
// const { a, ...rest } = obj;

// // delete obj.a;
// console.log(rest);

//Merge two objects with matching keys

// function myFunction(obj1, obj2) {
//   const { b, ...rest } = obj2;
//   const fixedObj2 = { ...rest, d: b };

//   return { ...obj1, ...fixedObj2 };
// }

// console.log(myFunction({ a: 1, b: 2, c: 3 }, { b: 4, e: 5 }));

// function myFunction(obj1) {
//   let res = {};
//   for (let key in obj1) {
//     res[key] = obj1[key] * 2;
//   }
//   return res
// }

// console.log(myFunction({ a: 1, b: 2, c: 3 }));

// //swap the values of object
// function myFunction(obj1) {
//   let res = {};
//   for (let key in obj1) {
//     res[obj1[key]] = key;
//   }
//   return res;
// }

// console.log(myFunction({ a: "x", b: "y", c: "z" }));

// //replace empty valuse with null only whitespace
// function myFunction(obj1) {
//   let res = {};
//   for (let key in obj1) {
//     let value = obj1[key]
//     console.log('value', value)
//     if (typeof value === "string" && value.trim() === "") {
//       obj1[key] = null;
//     }
//   }
//   return obj1;
// }

// console.log(myFunction({ a: "hello", b: "", c: "world" }));

// //extract the values of object
// function myFunction(obj1) {
//   let result = {};
//   if (obj1.firstName) {
//     result.firstName = obj1.firstName;
//   }
//   if (obj1.lastName) {
//     result.lastName = obj1.lastName;
//   }
//   if (obj1.size !== undefined) {
//     result.size = obj1.size + "cm";
//   }
//   if (obj1.weight !== undefined) {
//     result.weight = obj1.weight + "kg";
//   }
//   return result;
// }

// console.log(
//   myFunction({
//     firstName: "Mozammil",
//     lastName: "Raja",
//     age: 28,
//     size: 180,
//     weight: 75,
//     email: "mozammil@example.com",
//   })
// );

// //add the new values of in object
// function myFunction(obj1, str) {
//   return obj1.map((item) => {
//     return { ...item, continent: str };
//   });
// }

// console.log(
//   myFunction(
//     [
//       { country: "Japan", capital: "Tokyo" },
//       { country: "India", capital: "New Delhi" },
//     ],
//     "Asia"
//   )
// );

//array of element convert into object with the key values pairs
function myFunction(arr) {
  let freq = {};
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    let count = arr[i];
    freq[count] = (freq[count] || 0) + 1;
  }
  return freq;
}

console.log(myFunction([1, 2, 2, 3, 3, 3]));
