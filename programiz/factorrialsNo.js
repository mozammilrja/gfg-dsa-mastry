function factorial(nums) {
  let result = 1;

  for (let i = 2; i <= nums; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
