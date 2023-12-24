// naive solutions

// function divisors(n) {
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       console.log(i);
//     }
//   }
// }
// divisors(6);

// efficient solutions

// function divisors(n) {
//   for (let i = 1; i * i < n; i++) {
//     if (n % i == 0) {
//       console.log(i);
//     }
//       for (i >= 1; i--) {
//           if (n%i==0) {
//                   console.log(n / i);

//           }
//     }
//   }
// }
// divisors(25);

function divisors(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      console.log(i);

      if (i !== n / i) {
        console.log(n / i);
      }
    }
  }
}


divisors(1000);
