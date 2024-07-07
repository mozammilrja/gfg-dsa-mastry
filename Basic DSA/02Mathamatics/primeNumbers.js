// function primeNumbers(n) {
//   function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i * i <= num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// primeNumbers(10);

//sieve algoritham

function sieve(n) {
  let isPrime = new Array(n + 1).fill(true);
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
}

sieve(10);


function primeNumbers(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}



console.log(primeNumbers(9));