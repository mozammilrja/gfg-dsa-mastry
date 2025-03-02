function simpleCalculator(n1, n2, operator) {
    let result

    switch (operator) {
        case '+':
            result = n1 + n2
            break
        case '-':
            result = n1 - n2
            break
        case '*':
            result = n1 * n2
            break
        case '/':
            if (n2 === 0) {
                return 'Cannot divide by zero'

            }
            result = n1 / n2
            break
        default:
            return 'Invalid operator'
    }
        return result
}


console.log(simpleCalculator(5, 5, '+'))
console.log(simpleCalculator(5, 5, '-'))
console.log(simpleCalculator(5, 5, '*'))
console.log(simpleCalculator(5, 5, '/'))
console.log(simpleCalculator(5, 0, '/'))
console.log(simpleCalculator(5, 5, '%'))