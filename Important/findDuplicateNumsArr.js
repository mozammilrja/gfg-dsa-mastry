// function findDuplicate(nums) {
//   nums.sort((a, b) => a - b);
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i - 1] === nums[i]) {
//       res.push(nums[i]);
//     }
//   }
//   return res;
// }

function findDuplicate(nums) {
  let set = new Set();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      result.push(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  return result;
}

const arr = [3, 1, 3, 4, 4, 2, 5, 6, 6, 7, 7];
console.log(findDuplicate(arr));
