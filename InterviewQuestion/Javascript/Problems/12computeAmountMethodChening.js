//using constructor function

// const ComputeAmount = function () {
//   this.total = 0;

//   this.ten = function (value) {
//     this.total += value * 10;
//     return this;
//   };
//   this.hundred = function (value) {
//     this.total += value * 100;
//     return this;
//   };
//   this.thousand = function (value) {
//     this.total += value * 1000;
//     return this;
//   };
//   this.lacs = function (value) {
//     this.total += value * 100000;
//     return this;
//   };
//   this.crore = function (value) {
//     this.total += value * 10000000;
//     return this;
//   };
//   this.unit = function (value) {
//     this.total += value;
//     return this;
//   };
//   this.value = function () {
//     return this.total;
//   };
//   this.format = function () {
//     return this.total.toLocaleString("en-IN");
//   };
// };
//Using constructor

class ComputeAmount {
  constructor() {
    this.total = 0; // Initialize the total amount to 0
  }

  // Adds crore to the total amount
  crore(value) {
    this.total += value * 10000000;
    return this;
  }

  // Adds lacs to the total amount
  lacs(value) {
    this.total += value * 100000;
    return this;
  }

  // Adds thousands to the total amount
  thousand(value) {
    this.total += value * 1000;
    return this;
  }

  // Adds tens to the total amount
  ten(value) {
    this.total += value * 10;
    return this;
  }

  // Adds units to the total amount
  unit(value) {
    this.total += value;
    return this;
  }

  // Returns the total computed value
  value() {
    return this.total;
  }

  // Formats the total amount into a readable string with commas
  format() {
    return this.total.toLocaleString("en-IN");
  }
}

// Example usage
const amount = new ComputeAmount()
  .lacs(9)
  .lacs(1)
  .thousand(10)
  .ten(1)
  .unit(1)
  .value();
console.log(amount === 1010011); // true

const amount2 = new ComputeAmount()
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();
console.log(amount2 === 143545000); // true

const res = new ComputeAmount()
  .crore(10)
  .lacs(30)
  .thousand(45)
  .crore(1)
  .format();
console.log(res); // Outputs: "11,30,45,000"
