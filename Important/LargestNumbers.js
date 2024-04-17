// function LargestNumbers(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > result) {
//       result = arr[i];
//     }
//   }
//     return result;
// }
// console.log(LargestNumbers([3, 6, 2, 56, 32, 5, 89, 32]));
function FourLargestNumbers(arr) {
  let largest = 0;
  let secondLargest = 0;
  let thirdLargest = 0;
  let forthLargest = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      forthLargest = thirdLargest;
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      forthLargest = thirdLargest;
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    } else if (arr[i] > thirdLargest) {
      forthLargest = thirdLargest;
      thirdLargest = arr[i];
    } else if (arr[i] > forthLargest) {
      forthLargest = arr[i];
    }
  }
  return forthLargest;
}
console.log(FourLargestNumbers([3, 6, 2, 56, 32, 5, 89, 32]));
