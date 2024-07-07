
function sumOfDigit(nums) {
  let sum = 0;
  while (nums > 0) {
    sum += nums % 10;
    nums = parseInt(nums / 10);
  }

  return sum;
}

console.log(sumOfDigit(332));

function reverseDigit(nums) {
  let reverse = 0;
  while (nums > 0) {
    let lastDigit = nums % 10;
    reverse = reverse * 10 + lastDigit;

    nums = parseInt(nums / 10);
  }
  return reverse
}

console.log(reverseDigit(332));


function countNumbers(nums) {
  let count = 0;
  while (nums > 0) {
    nums = Math.floor(nums / 10);
    count++;
  }
  return count;
}

console.log(countNumbers(332));


function palindromeNumbers(nums) {
  let n = nums;
  let reverse = 0;
  while (nums > 0) {
    let lastDigit = nums % 10;
    reverse = reverse * 10 + lastDigit;
    nums = Math.floor(nums / 10);
  }
  return n === reverse;
}

console.log(palindromeNumbers(3333));



