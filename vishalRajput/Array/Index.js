//How do you create empty array in javascript

// const arr = [1,2,3,4]

// console.log(arr)

// function removeDuplicates(nums) {
//   nums.sort();
//   let set = new Set();
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (!set.has(nums[i])) {
//       set.add(nums[i]);
//       result.push(nums[i]);
//     }
//   }
//   return result.length;
// }
// console.log(removeDuplicates([1, 1, 2]));

// function removeDuplicates(nums) {
//   let k = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   return k
// }
// console.log(removeDuplicates([1, 1, 2]));

// function moveZeroes(nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       [nums[i], nums[count]] = [nums[count], nums[i]];
//       count++
//     }
//   }
//   return nums;
// }

// console.log(moveZeroes([0, 1, 0, 3, 12]));

// function removeElement(nums, val) {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       result = nums[i];
//       result++;
//     }
//   }
//   return result;
// }

// console.log(removeElement([3, 2, 2, 3], 3)); //2
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5

// function sortedSquares(nums) {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     result.push(nums[i] * nums[i]);
//   }
//   return result.sort((a, b) => a - b);
// }

// console.log(sortedSquares([-4, -1, 0, 3, 10]));

// function twoSum(nums, target) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i,j];
//       }
//     }
//   }
// return []
// }

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// function twoSum(nums, target) {
//   let result = [];
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];

//     if (map.has(diff)) {
//       return [map.get(diff), i];
//     }
//     map.set(nums[i],i);
//   }
//   return []
// }

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// function majorityElement(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }
//     if (count) {
//       return nums[i];
//     }
//   }
//   return null;
// }

// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// function pivotIndex(nums) {
//   let n = nums.length;
//   let leftSum = 0;

//   for (let i = 0; i < n; i++) {
//     let rightSum = 0;

//     for (let j = i + 1; j < n; j++) {
//       rightSum += nums[j];
//     }
//     if (leftSum === rightSum) {
//       return i;
//     }
//     leftSum += nums[i];
//   }
//   return -1;
// }

// console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //3

function findMaxConsecutiveOnes(nums) {
    let max = 0
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count) {
      return nums[i];
    }
  }
  return null;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
