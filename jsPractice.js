// // Count Odd Numbers in an Interval Range
// function countOdds(low, high) {
//   let count = 0;
//   for (let i = low; i <= high; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countOdds(3, 7));

//fizz Buzz

// function fizzBuzz(n) {
//   let answer = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       answer.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       answer.push("Fizz");
//     } else if (i % 5 === 0) {
//       answer.push("Buzz");
//     } else {
//       answer.push(i);
//     }
//   }
//   return answer;
// }

// console.log(fizzBuzz(3));

// function isPowerOfTwo(n) {
//   let num = parseInt(n)
//   console.log('num', num)
//   let power = Math.pow(parseInt(n))

//   console.log(power)

// }

// console.log(isPowerOfTwo(16))

var mySqrt = function (x) {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x / 2);
  let result = 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) return mid;
    if (square < x) {
      result = mid; // this could be the answer
      left = mid + 1; // search right
    } else {
      right = mid - 1; // search left
    }
  }

  return result;
};
