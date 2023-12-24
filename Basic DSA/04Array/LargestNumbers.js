// function LargestNumbers(arr) {
//   let result = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[arr]) {
//       result[i];
//     }
//   }
//   //   return result;
// }
// console.log([3, 6, 2, 56, 32, 5, 89, 32]);
function SecondLargestNumbers(arr) {
  let result = 0;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[result]) {
      result = i;
    }
  }
  return arr[result];
}
console.log(SecondLargestNumbers([3, 6, 2, 56, 32, 5, 89, 32]));
