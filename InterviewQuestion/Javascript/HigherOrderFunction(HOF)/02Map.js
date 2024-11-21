// Higher order functions Maps

let arr = [1, 2, 3, 4, 5];

let result = arr.map((a) => (a >= 2 ? a : null));
console.log(result); // output [null, 2, 3, 4, 5 ]

// let result = arr.map((a) => (a >= 2 ? a : null)).filter((a) => a !== null);
// console.log(result); // output [ 2, 3, 4, 5 ]
