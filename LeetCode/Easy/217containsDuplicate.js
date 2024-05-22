//Method-1
function containsDuplicate(nums) {
  nums.sort((a, b) => a - b);
  for (const num of nums) {
    if (nums[num - 1] === nums[num]) {
      return true;
    }
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 1, 2, 3]));
//Method-2 using set
// function containsDuplicate(nums) {
//   let res = 0;
//   let set = new Set();
//   for (const num of nums) {
//     if (set.has(num)) {
//       res++;
//     }
//     set.add(num);
//   }
//   return false;
// }
// console.log(containsDuplicate([1, 2, 3, 1, 2, 3]));
