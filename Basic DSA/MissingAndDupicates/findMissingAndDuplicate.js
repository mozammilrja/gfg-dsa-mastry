// function findMissingAndDuplicate(nums) {
//   let numSet = new Set();
//   let missingNums = [];
//   let duplicateNums = [];
//   // missing numbers
//   for (let i = 1; i <= Math.max(...nums); i++) {
//     if (!numSet.has(i)) {
//       missingNums.push(i);
//     }
//   }
//   // duplicate
//   for (let num of nums) {
//     if (numSet.has(num)) {
//       duplicateNums.push(num);
//     }
//     numSet.add(num);
//   }

//   return { missing: missingNums, duplicate: duplicateNums[0] };
// }

// console.log(findMissingAndDuplicate([3, 1, 2, 5, 3])); //output :[3, 4]


function findMissingAndDuplicate(nums) {
  let numSet = new Set();
  let missingNums = [];
  let duplicateNums = [];
  let n = nums.length;

  // Find duplicates
  for (let num of nums) {
    if (numSet.has(num)) {
      duplicateNums.push(num);
    } else {
      numSet.add(num);
    }
  }

  // Find missing numbers in the range [1, n]
  for (let i = 1; i <= n; i++) {
    if (!numSet.has(i)) {
      missingNums.push(i);
    }
  }

  return { missing: missingNums, duplicate: duplicateNums[0] };
}

console.log(findMissingAndDuplicate([0, 2, 7, 4])); // Output: { missing: [4], duplicate: 3 }
