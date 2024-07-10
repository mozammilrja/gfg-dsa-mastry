
function rotateArr(nums, d) {
  let n = nums.length;
  d = d % n;
  if (d === 0) {
    return nums;
  }
  const reverse = (left, right) => {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  };
  reverse(0, d - 1);
  reverse(d, n - 1);
  reverse(0, n - 1);
  return nums;
}
let num = [1, 2, 3, 4, 5];
let d = 2;
console.log(rotateArr(num, d));
//itrative 

function rotateArr(nums, d) {
  let n = nums.length;
  d = d % n; // In case d is larger than n
  
  for (let i = 0; i < d; i++) {
    // Remove the first element and push it to the end
    nums.push(nums.shift());
  }
  
  return nums;
}

let nums = [1, 2, 3, 4, 5];
let d = 2;
console.log(rotateArr(nums, d)); // Output: [3, 4, 5, 1, 2]



//

function rotateArr(nums, d) {
  let n = nums.length;
  d = d % n; // In case d is larger than n
  
  // Concatenate the array with itself
  let rotatedArr = nums.slice(d).concat(nums.slice(0, d));
  
  return rotatedArr;
}

let nums = [1, 2, 3, 4, 5];
let d = 2;
console.log(rotateArr(nums, d)); // Output: [3, 4, 5, 1, 2]
