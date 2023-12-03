// naive solutions

// function moveAllZeros(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] !== 0) {
//           [arr[i], arr[j]] = [arr[j], arr[i]];
//           break;
//         }
//       }
//     }
//   }
//   return arr;
// }

// console.log(moveAllZeros([10, 0, 0, 7, 8, 0]));

// efficient method

function moveAllZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}

console.log(moveAllZeros([10, 0, 0, 7, 8, 0]));
