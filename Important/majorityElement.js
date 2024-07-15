// Brutforce 
function majorityElement(nums) {
  let majority = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count > majority) {
      return nums[i];
    }
  }
  return null;
}
let num = [3, 2, 3];
console.log(majorityElement(num));
