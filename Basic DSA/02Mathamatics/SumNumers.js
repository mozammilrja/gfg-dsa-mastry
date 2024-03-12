// function sumNumers(values) {
//   let sum = 0;

//   for (let i = 0; i < values.length; i++) {
//     sum += values[i];
//   }
//   return sum;
// }
// const values = [2, 4, 56, 6, 7];
// console.log(sumNumers(values));

// // const arr = [2, 4, 56, 6, 7];

// // function calculateSum(arr) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i];
// //   }
// //   return sum;
// // }

// // const totalSum = calculateSum(arr);
// // console.log("Sum of all elements:", totalSum);

function sumNumers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr = [1, 2, 43, 4, 5, 6];
console.log(sumNumers(arr));
