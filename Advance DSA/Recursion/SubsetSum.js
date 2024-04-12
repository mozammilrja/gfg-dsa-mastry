// Function definition
function SubsetSum(arr, n, sum) {
  // Base cases
  if (sum === 0) {
    return 1; // Subset with the given sum exists
  }
  if (n === 0) {
    return 0; // No elements left to consider
  }

  // If the current element is greater than the sum,
  // it cannot be included in the subset
  if (arr[n - 1] > sum) {
    return SubsetSum(arr, n - 1, sum);
  }

  // Recursive calls to include/exclude the current element
  return SubsetSum(arr, n - 1, sum) + SubsetSum(arr, n - 1, sum - arr[n - 1]);
}

// Given array and sum
let arr = [10, 5, 2, 3, 6];
let sum = 8;
let n = arr.length;

// Count the number of subsets with sum equal to 'sum'
let count = SubsetSum(arr, n, sum);
console.log("Number of subsets with sum", sum, "in", arr, "is:", count);
