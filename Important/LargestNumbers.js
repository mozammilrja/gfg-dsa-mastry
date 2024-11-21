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
function secondLargestNumbers(nums) {
  let largest = 0;
  let second = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    } else if (nums[i] < largest) {
      second = largest;
      second = nums[i];
    }
  }
  return second;
}

console.log(secondLargestNumbers([1, 7, 2]));
