// function missingNumer(arr) {
//   let sum = 0;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     sum = sum + arr[i];
//   }
//   let result = ((n + 1) * (n + 2)) / 2;
//   return result - sum;
// }
// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(missingNumer(arr)) //output 3

function missingNumer(nums) {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res = res + i - nums[i];
  }
  return res;
}
let arr = [2, 3, 4, 7, 11];
console.log(missingNumer(arr)); //output 2
