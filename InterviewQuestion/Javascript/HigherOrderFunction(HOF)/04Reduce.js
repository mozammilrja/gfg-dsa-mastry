// // its return single value.
// //its does not change the original array.

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((a, b) => a + b);

// console.log(result);

// // const numbers = [10, 20, 30, 40];

// // let result = numbers.reduce((acc, sum) => acc + sum, 0);

// // console.log(result)

// // const numbers = [12, 45, 67, 23, 89, 34];

// // let result = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), 0);

// // console.log(result);

// // const items = ["apple", "banana", "apple", "orange", "banana", "apple"];

// // let result = items.reduce((acc, item) => {
// //   acc[item] = (acc[item] || 0) + 1;
// //   return acc;
// // }, {});

// // console.log(result);

// // let freq = {};
// // for (let i = 0; i < items.length; i++) {
// //   let curr = items[i]
// //   freq[curr] = (freq[curr] || 0) + 1;
// // }

// // console.log(freq)

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 30 },
//   { name: "Eve", age: 35 },
// ];
// // {
// //   25: [
// //     { name: "Alice", age: 25 },
// //     { name: "Charlie", age: 25 }
// //   ],
// //   30: [
// //     { name: "Bob", age: 30 },
// //     { name: "David", age: 30 }
// //   ],
// //   35: [
// //     { name: "Eve", age: 35 }
// //   ]
// // }

// // let result = people.reduce((acc, person) => {
// //   let key = person.age;
// //   if (!acc[key]) {
// //     acc[key] = [];
// //   }
// //   acc[key].push(person);
// //   return acc;
// // }, {});

// // console.log(result);

// // const grouped = Object.groupBy(people, (person) => person.age);

// // console.log(grouped);

// // const group = {};

// // for (const person of people) {
// //   const key = person.age;
// //   if (!group[key]) {
// //     group[key] = [];
// //   }
// //   group[key].push(person);
// // }

// // console.log(group);

// // const arr = [
// //   { id: 1, name: "A" },
// //   { id: 2, name: "B" },
// // ];

// // let str = arr.reduce((acc, curr) => {
// //   acc[curr.id] = curr.name;
// //   return acc;
// // }, {});

// // console.log(str);

// // ---------------------------------------
// // const arr = [1, [2, [3, [4]], 5]];

// // console.log(arr.flat(Infinity));

// // function flatten(arr, result = []) {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (Array.isArray(arr[i])) {
// //       flatten(arr[i], result);
// //     } else {
// //       result.push(arr[i]);
// //     }
// //   }
// //   return result;
// // }

// // console.log(flatten(arr))

// // ---------------------------------------------

// // const params = {
// //   name: "Mozammil",
// //   age: 28,
// //   city: "Noida",
// // };

// // const urlParam = new URLSearchParams(params).toString()

// // console.log(urlParam)

// // -------------------------------------------------

// // Merge array of objects

// const arr = [{ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }];
// // { a: 1, b: 3, c: 4, d: 5 }
// let Merge = {};
// for (const obj of arr) {
//   Merge = { ...Merge, ...obj };
// }

// // console.log(Merge);

// let merge = Object.assign({}, ...arr);
// // console.log(merge)

// let result = arr.reduce((acc, curr) => {
//   return { ...acc, ...curr };
// });

// console.log(result);
