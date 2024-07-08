//recursive

function RecursivePower(n, p) {
  if (p == 0) {
    return 1;
  }
  return n * RecursivePower(n, p - 1);
}
console.log(RecursivePower(9, 9));
//iterative

function Power(n, p) {
  if (p == 0) return 1;
  // if (p == 1) return n;
  return n * Power(n, p - 1);
}

console.log(Power(9, 9));
