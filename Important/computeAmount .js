const computeAmount = {
  total: 0,

  lacs(amount) {
    this.total += amount * 100000;
    return this;
  },

  crore(amount) {
    this.total += amount * 10000000;
    return this;
  },

  thosound(amount) {
    this.total += amount * 1000;
    return this;
  },

  value() {
    return this.total;
  },
};

// Usage
const result = computeAmount
  .lacs(15)
  .crore(5)
  .crore(2)
  .crore(20)
  .thosound(6)
  .crore(7)
  .value();
console.log(result); // Output: 143545000
