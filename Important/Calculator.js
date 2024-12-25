class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    if (this.num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return this.num1 / this.num2;
  }
}

function calculator(num1, num2, operation) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  const calc = new Calculator(num1, num2);

  const operations = {
    add: calc.add,
    subtract: calc.subtract,
    multiply: calc.multiply,
    divide: calc.divide,
  };

  const operationFunction = operations[operation];

  if (!operationFunction) {
    throw new Error("Invalid operation");
  }

  return operationFunction.call(calc);
}

// Example usage:
console.log(calculator(2, 5, "add")); // Output: 7
console.log(calculator(10, 2, "subtract")); // Output: 8
console.log(calculator(3, 4, "multiply")); // Output: 12
console.log(calculator(8, 2, "divide")); // Output: 4
try {
  console.log(calculator(8, 0, "divide")); // Output: Error: Cannot divide by zero
} catch (error) {
  console.error(error.message);
}
try {
  console.log(calculator(8, 2, "modulus")); // Output: Error: Invalid operation
} catch (error) {
  console.error(error.message);
}

class Calculator {
  constructor(...nums) {
    this.nums = nums;
  }

  add() {
    return this.nums.reduce((acc, num) => acc + num, 0);
  }

  subtract() {
    return this.nums.reduce((acc, num) => acc - num);
  }

  multiply() {
    return this.nums.reduce((acc, num) => acc * num, 1);
  }

  divide() {
    return this.nums.reduce((acc, num) => {
      if (num === 0) {
        throw new Error("Cannot divide by zero");
      }
      return acc / num;
    });
  }

  modulo() {
    return this.nums.slice(1).reduce((acc, num) => acc % num, this.nums[0]);
  }
}

function calculator(operation, ...nums) {
  if (nums.some((num) => typeof num !== "number")) {
    throw new Error("All arguments must be numbers");
  }

  const calc = new Calculator(...nums);

  const operations = {
    add: calc.add.bind(calc),
    subtract: calc.subtract.bind(calc),
    multiply: calc.multiply.bind(calc),
    divide: calc.divide.bind(calc),
    modulo: calc.modulo.bind(calc),
  };

  const operationFunction = operations[operation];

  if (!operationFunction) {
    throw new Error("Invalid operation");
  }

  return operationFunction();
}

// Example usage:
console.log(calculator("add", 2, 5, 3)); // Output: 10
console.log(calculator("subtract", 10, 2, 1)); // Output: 7
console.log(calculator("multiply", 3, 4, 2)); // Output: 24
console.log(calculator("divide", 8, 2, 2)); // Output: 2
console.log(calculator("modulo", 10, 3)); // Output: 1

try {
  console.log(calculator("divide", 8, 0)); // Output: Error: Cannot divide by zero
} catch (error) {
  console.error(error.message);
}

try {
  console.log(calculator("modulus", 8, 2)); // Output: Error: Invalid operation
} catch (error) {
  console.error(error.message);
}
