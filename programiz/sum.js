// // using loop to calculate the sum of natural numbers
function sum(num) {
    let result = 0
    for (let i = 1; i <= num; i++) {
        result += i
    }
    return result
}

console.log(sum(2))

// // using recursion to calculate the sum of natural numbers
// function sum(num) {
//     if (num > 0) {
//         return num + sum(num - 1)
//     } else {
//         return num
//     }
// }

// console.log(sum(2))