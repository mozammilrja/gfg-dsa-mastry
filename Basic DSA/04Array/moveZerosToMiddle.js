// function moveZerosToMiddle(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       [arr[i], arr[count]] = [arr[count], arr[i]];
//       count++;
//     }
//   }
//   let mid = Math.floor(arr.length / 2);

//   for (let i = count; i <= mid; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// }

// // console.log(moveZerosToMiddle([10, 20, 0, 0, 2, 0, 40, 0, 50, 0]));
// console.log(moveZerosToMiddle([10, -20, 0, -0, -0, -90, -0]));

function moveZerosToMiddle(arr) {
  let count = 0;

  // Move non-zero elements to the beginning
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }

  let mid = Math.floor(arr.length / 2);

  // Fill remaining positions with zeros
  for (let i = count; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

console.log(moveZerosToMiddle([10, -20, 0, -0, -0, -90, -0]));
