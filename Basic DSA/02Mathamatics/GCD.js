// naive method
function HCFandGCD(n1,n2) {
  let result;
  for (let i = 1; i <= n1 && i <= n2; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      result = i;
    }
  }
  return result;
}

console.log(HCFandGCD(60, 72));

// standord algoritham
// Optimised Euclidean Algorithm Code
function GCD(a, b) {
  if (b === 0) {
    return a;
  }
  return GCD(b, a % b);
}
console.log(GCD(4, 6));
