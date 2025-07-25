// const employees = [
//   { name: "John Doe", age: 28 },
//   { name: "Alice Smith", age: 34 },
//   { name: "Bob Johnson", age: 25 },
//   { name: "Emily Davis", age: 30 },
//   { name: "Michael Brown", age: 45 },
//   { name: "Sarah Wilson", age: 29 },
//   { name: "David Martinez", age: 38 },
//   { name: "Jessica Taylor", age: 27 },
//   { name: "Daniel Anderson", age: 31 },
//   { name: "Laura Thomas", age: 33 },
// ];

// // const result = employees.map((employee, ind) => employee.name);

// Array.prototype.myMap = function (cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(cb(this[i], i, this));
//   }
//   return result;
// };

// const result = employees.myMap((employee, ind) => employee.name);

// console.log(result);

//filter in javascript

// const products = [
//   { name: "Wireless Mouse", price: 499, inStock: true },
//   { name: "Bluetooth Headphones", price: 1299, inStock: false },
//   { name: "USB-C Charger", price: 899, inStock: true },
//   { name: "Laptop Stand", price: 699, inStock: true },
//   { name: "Notebook Cooler", price: 799, inStock: false },
// ];

// // const result = products.filter(function (product) {
// //   return product.inStock;
// // });

// Array.prototype.myFilter = function (cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };

// const result = products.myFilter((product) => product.inStock);

// console.log(result);

const products = [
  { name: "Wireless Mouse", price: 499, inStock: true, quantity: 25 },
  { name: "Bluetooth Headphones", price: 1299, inStock: false, quantity: 0 },
  { name: "USB-C Charger", price: 899, inStock: true, quantity: 40 },
  { name: "Laptop Stand", price: 699, inStock: true, quantity: 18 },
  { name: "Notebook Cooler", price: 799, inStock: false, quantity: 0 },
];

// const result = products.reduce(
//   (acc, order) => acc + order.price * order.quantity,
//   0
// );

// Array.prototype.myReduce = function (cb, initialValue) {
//   let acc = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     acc = cb(acc, this[i], i, this);
//   }
//   return acc;
// };

// const result = products.myReduce(
//   (acc, order) => acc + order.price * order.quantity,
//   0
// );

// console.log(result);

//Quetions 1 : Give an array of strings find the longest word and return its length

// const words = [
//   "apple",
//   "banana",
//   "cherry",
//   "dragonfruit",
//   "elephant",
//   "flower",
//   "guitar",
//   "happiness",
//   "island",
//   "jungle",
// ];

// const result = words.reduce((maxLength, word) => {
//   const currLength = word.length
//   return currLength > maxLength ? currLength: maxLength
// }, 0);

// console.log(result);

// const words = [
//   "apple",
//   "banana",
//   "cherry",
//   "dragonfruit",
//   "elephant",
//   "flower",
//   "guitar",
//   "happiness",
//   "island",
//   "jungle",
// ];

// const result = words.reduce(
//   (maxWord, currWord) =>
//     currWord.length > maxWord.length ? currWord : maxWord,
//   ""
// );

// console.log(result);

const students = [
  { name: "Aarav Mehta", score: 92 },
  { name: "Sneha Patel", score: 81 },
  { name: "Karan Kapoor", score: 96 },
  { name: "Pooja Nair", score: 98 },
  { name: "Rohan Batra", score: 73 },
];

// let result = students
//   .filter((student) => student.score >= 90)
//   .reduce((acc, student, i, arr) => acc + student.score / arr.length, 0);

// console.log(result);

// const highScorers = students.filter((student) => student.score >= 90);

// const result =
//   highScorers.reduce((acc, student) => acc + student.score, 0) /
//   highScorers.length;

// console.log(result); // Output: average of scores >= 90

// const books = [
//   { title: "To Kill a Mockingbird", year: 1960 },
//   { title: "Book2", year: 1949 },
//   { title: "The Great Gatsby", year: 2003 },
//   { title: "The Catcher in the Rye", year: 1951 },
//   { title: "Pride and Prejudice", year: 2001 },
// ];

// let result = books.filter((book) => book.year < 2000).map((book) => book.title);

// console.log(result);

function capsWord(str) {
  // let words = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    console.log(str[i].charAt(0).toUpperCase() + str[i].slice(1));
  }
}
const words = [
  "apple",
  "banana",
  "cherry",
  "dragonfruit",
  "elephant",
  "flower",
  "guitar",
  "happiness",
  "island",
  "jungle",
];
console.log(capsWord(words));
