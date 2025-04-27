//Brutforce
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

let nums = [2,7,11,15], target = 9

console.log(twoSum(nums,target))

//Efficient way
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(pairTarget)) {
      return [map.get(pairTarget), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));
