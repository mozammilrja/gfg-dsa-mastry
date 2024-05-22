function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let pairTarget = target - nums[i];
    if (map.has(pairTarget)) {
      return [map.get(pairTarget), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
const nums1 = [2, 5, 5, 11];
const target1 = 10;
console.log(twoSum(nums1, target1));
