function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
    low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); //output 4


// linearSearch 
// function search(nums, N, TARGET) {
//   for (let i = 0; i < N; i++) {
//     if (nums[i] === TARGET) {
//       return i; // Return the indetarget if element is found
//     }
//   }
//   return -1; // Return -1 if element is not found
// }

// // Etargetample usage:
// // let nums1 = [1, 2, 3, 4];
// let nums1 = [1, 10, 10, 10, 20, 20, 40];

// let N1 = nums1.length;
// let TARGET1 = 4;
// console.log(search(nums1, N1, TARGET1)); // Output: 2

// let nums2 = [1, 2, 3, 4, 5];
// let N2 = nums2.length;
// let TARGET2 = 5;
// console.log(search(nums2, N2, TARGET2)); // Output: 4
