// function f1(count) {
//   if (count == 0) return;
//   console.log("first");
//   f1(count - 1);
// }

// f1(3);

// function fun(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log(n, "1");
//   fun(n - 1);
//   console.log(n, "2");
// }
// fun(3);

function fun(n) {
  if (n == 1) {
    return 0;
  }
  return 1 + fun(Math.floor(n / 2));
}

// console.log(fun(11));

// usig recursion
function printN1(n) {
  if (n == 0) {
    return;
  }
  printN1(n - 1);
  console.log(n);
}

printN1(4);

// itrative

// function N1(n) {
//   for (let i = n; i >= 1; i--) {
//     console.log(i);
//   }
// }

// N1(3);
