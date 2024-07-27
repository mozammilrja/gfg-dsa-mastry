function missingNumer(nums) {
    let res = nums.length;
    for (let i = 0; i < nums.length; i++) {
      res += i - nums[i];
    }
    return res;
}
let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(missingNumer(arr)) //output 3
