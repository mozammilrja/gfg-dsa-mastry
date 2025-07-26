// // let arr = [1, 2, 3, 4, 5];

// const { use } = require("react");

// // let result = arr.filter((a) => a >= 2);

// // console.log(result);

// // user is addult or not
// // let users = [
// //   { name: "Alice", age: 25 },
// //   { name: "Bob", age: 17 },
// //   { name: "Charlie", age: 30 },
// //   { name: "David", age: 15 },
// // ];
// // let addultUsers = users.filter((user) => user.age >= 18);
// // console.log(addultUsers); // output [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]

// // Filter even numbers from an array
// const numbers = [1, 2, 3, 4, 5, 6];

// let evenNumbers = numbers.filter((item) => item % 2 === 0);

// // console.log(evenNumbers);

// const words = ["apple", "banana", "grapes", "kiwi", "pineapple"];

// let lengthOfWords = words.filter((items) => items.length > 5);

// // console.log(lengthOfWords)

// //remove falsy value
// const values = [0, "hello", false, 42, "", null, "world", undefined];

// let falsyVal = values.filter((item) => Boolean(item));

// // console.log(falsyVal)

// const users = [
//   { id: 1, name: "Alice", isVerified: true },
//   { id: 2, name: "Bob", isVerified: false },
//   { id: 3, name: "Charlie", isVerified: true },
// ];

// let isVerified = users.filter((user) => user.isVerified === true);

// // console.log(isVerified);

// const items = [
//   { id: 1, name: "Pen", price: 50 },
//   { id: 2, name: "Notebook", price: 120 },
//   { id: 3, name: "Pencil", price: 20 },
//   { id: 4, name: "Bag", price: 300 },
//   { id: 5, name: "Eraser", price: 10 },
// ];

// let price = items.filter((price) => price.price < 100);

// console.log(price);

// const numbers = [1, 2, 3, 2, 4, 1, 5, 3];

// let removeDuplicate = numbers.filter(
//   (item, id, arr) => arr.indexOf(item) === id
// );

// console.log(removeDuplicate);

//Use Case: Filter objects where user.address.city === 'Delhi'

// const users = [
//   { id: 1, name: "Alice", address: { city: "Delhi", zip: 110001 } },
//   { id: 2, name: "Bob", address: { city: "Mumbai", zip: 400001 } },
//   { id: 3, name: "Charlie", address: { city: "Delhi", zip: 110045 } },
// ];

// let filterUser = users.filter((user) => user.address.city === "Delhi")

//using for loop

// for (let i = 0; i < users.length; i++) {
//   const element = users[i];

//   if (element.address.city === "Delhi") {
//     console.log(users[i]);
//   }
// }

// const todos = [
//   { id: 1, title: "Buy groceries", isCompleted: false },
//   { id: 2, title: "Clean the house", isCompleted: true },
//   { id: 3, title: "Pay bills", isCompleted: false },
// ];

// let result = todos.filter((item) => item.isCompleted === false);

// console.log(result)

// const data = [{ name: "Alice" }, {}, { age: 25 }, {}, { city: "Delhi" }];

// let result = data.filter((item) => Object.keys(item).length !== 0);

// console.log(result)

// const students = [
//   { id: 1, name: "Alice", marks: 45 },
//   { id: 2, name: "Bob", marks: 29 },
//   { id: 3, name: "Charlie", marks: 33 },
//   { id: 4, name: "David", marks: 20 },
// ];

// let result = students.filter((student) => student.marks >= 33);
// console.log(result);

