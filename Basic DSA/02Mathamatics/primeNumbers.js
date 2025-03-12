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

function isPrime(n) {
  if (n < 2) return false; // 0 and 1 are not prime

  for (let i = 2; i <= Math.sqrt(n); i++) {
    // Optimize by checking up to sqrt(n)
    if (n % i === 0) {
      return false; // Not a prime number
    }
  }
  return true; // Prime number
}

console.log(isPrime(9)); // Output: false
console.log(isPrime(7)); // Output: true
console.log(isPrime(2)); // Output: true
console.log(isPrime(1)); // Output: false
console.log(isPrime(19)); // Output: true
