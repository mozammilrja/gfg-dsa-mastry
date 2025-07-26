// Higher order functions Maps

let arr = [1, 2, 3, 4, 5];

let result = arr.map((a) => (a >= 2 ? a : null));
// console.log(result); // output [null, 2, 3, 4, 5 ]

// let result = arr.map((a) => (a >= 2 ? a : null)).filter((a) => a !== null);
// console.log(result); // output [ 2, 3, 4, 5 ]

// 1 calculate GST amount
let prices = [100, 200, 300, 400, 500];
let gst = 0.18;
let pricesWithGST = prices.map((price) => price + price * gst);
// console.log(pricesWithGST); // output [ 118, 236, 354, 472, 590 ]

//convert array of numbers to string
let numbers = [1, 2, 3, 4, 5];
let stringNumbers = numbers.map((num) => num.toString());
// console.log(stringNumbers); // output ["1", "2", "3", "4", "5"]

//Extract only names from user objects

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 15 },
];
let userNames = users.map((user) => user.name);

// console.log(userNames); // output ["Alice", "Bob", "Charlie", "David"]

//Capitalize each word

let words = ["hello", "world", "javascript"];
let capitalizeWord = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);

// console.log(capitalizeWord); // output ["Hello", "World", "Javascript"]

//Append index to strings

let strings = ["apple", "banana", "cherry"];
let stringsWithIndex = strings.map((str, index) => `${str} ${index}`);
// console.log(stringsWithIndex); // output ["apple 0", "banana 1",

//Convert array of strings to their lengths

let stringArray = ["one", "two", "three"];
let stringLengths = stringArray.map((str) => str.length);

// console.log(stringLengths); // output [3, 3, 5]

// Create array of HTML <li> from data
let items = ["Item 1", "Item 2", "Item 3"];
let listItems = items.map((item) => `<li>${item}</li>`);
// console.log(listItems); // output ["<li>Item 1</li>", "<li>Item 2</li>", "<li>Item 3</li>"]

//Format prices with currency

let pricesArray = [10.5, 20.99, 30.75];
let formattedPrices = pricesArray.map((price) => `$${price.toFixed(2)}`);
// console.log(formattedPrices); // output ["$10.50", "$20.99", "$30.75"]

// Transform boolean values to strings ("Yes"/"No")

const boolArr = [true, false, true, false];

let transformInstr = boolArr.map((item) => (item === true ? "Yes" : "No"));

// console.log(transformInstr); //[ 'Yes', 'No', 'Yes', 'No' ]

const titles = [
  "Hello World!",
  "React Basics in 2025",
  "Learn JavaScript Fast",
];

const slug = titles.map((title) =>
  title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
);
// console.log(slug); // output ["hello-world", "react-basics-in-2025", "learn-javascript-fast"]


// double the numbers in an array
let numbersArray = [1, 2, 3, 4, 5];
let doubledNumbers = numbersArray.map((num) => num * 2);
console.log(doubledNumbers); // output [2, 4, 6, 8, 10]