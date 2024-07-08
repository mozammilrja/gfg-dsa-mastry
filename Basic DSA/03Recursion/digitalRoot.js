// function digitalRoot(n) {
//   while (n >= 10) {
//     let sum = 0;
//     while (n > 0) {
//       sum += n % 10;
//       n = Math.floor(n / 10);
//     }
//     n = sum;
//   }

//   return n;
// }
// console.log(digitalRoot(99999));
//recursion
function digitalRoot(n) {
  if (n < 10) {
    return n;
  }
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return digitalRoot(sum);
}
console.log(digitalRoot(99999));
