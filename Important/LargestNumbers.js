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
function LargestNumbers(nums) {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest && num[i] !== largest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}

let num = [1, 3, 4, 6, 7];

console.log(LargestNumbers(num));
