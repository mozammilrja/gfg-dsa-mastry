const pipe = (...fns) => {
  return function (val) {
    for (const item of fns) {
      val = item(val);
    }
    return val;
  };
};

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

const val = { salary: 10000 };

const result = pipe(getSalary, addBonus, deductTax)({ salary: 10000 });

console.log(result);
// 7700
