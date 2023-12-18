function sumOfdigit(n) {
  let sum = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    const count = parseInt(str[i], 10);
    sum += count;
  }
  return sum;
}

console.log(sumOfdigit(55));
// Output: 10
