function containsNearbyDuplicate(nums, k) {
  let hashmap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hashmap.has(nums[i]) && i - hashmap.get(nums[i]) <= k) {
      return true;
    } else {
      hashmap.set(nums[i], i);
    }
  }
  return false;
}
