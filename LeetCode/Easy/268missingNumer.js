function missingNumer(nums) {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res = res + i - nums[i];
  }
  return res;
}
let arr = [3, 0, 1];
console.log(missingNumer(arr)); //output 2
