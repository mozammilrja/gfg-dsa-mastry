// function fizBuz(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push("fizz buzz");
//     } else if (i % 3 === 0) {
//       result.push("fizz");
//     } else if (i % 5 === 0) {
//       result.push("buzz");
//     } else {
//       result.push(i.toString());
//     }
//   }
//   return result;
// }

// console.log(fizBuz(100));

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20);
