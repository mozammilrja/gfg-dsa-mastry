class computeAmount {
  constructor() {
    this.totalAmount = 0;
  }

  lacs(value) {
    this.totalAmount += value * 100_000; // 1 lac = 100,000
    return this;
  }

  crore(value) {
    this.totalAmount += value * 10_000_000; // 1 crore = 10,000,000
    return this;
  }

  thousand(value) {
    this.totalAmount += value * 1_000; // 1 thousand = 1,000
    return this;
  }

  value() {
    return this.totalAmount.toLocaleString();
  }
  format() {
    // Convert the number to a string with commas as thousand separators
    return this.totalAmount.toLocaleString();
  }
}

const res = new computeAmount()
  .crore(10)
  .lacs(30)
  .thousand(45)
  .crore(1)
  .format();
console.log(res); // Outputs: "11,30,45,000"
