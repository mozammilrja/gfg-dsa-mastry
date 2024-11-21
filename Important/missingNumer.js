// function missingNumer(arr) {
//   let sum = 0;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     sum = sum + arr[i];
//   }
//   let result = (n * (n + 1)) / 2;
//   return result - sum;
// }
// let arr = [0, 2];
// console.log(missingNumer(arr)); //output 1

// function missingNumber(nums) {
//   let res = nums.length;
//   for (let i = 0; i < nums.length; i++) {
//     console.log('res', res)
//     res += i - nums[i];

//   }
// return res;
// }

// let arr = [0, 2];
// console.log(missingNumber(arr));  // Output: 1

function missingNumber(nums) {
  let set = new Set(nums);
  let res = [];
  for (let i = 0; i <= Math.max(...nums); i++) {
    if (!set.has(i)) {
      res.push(i);
    }
  }

  return res;
}

let arr = [0, 2, 7, 4];
console.log(missingNumber(arr)); // Output: [ 1, 3, 5, 6 ]
