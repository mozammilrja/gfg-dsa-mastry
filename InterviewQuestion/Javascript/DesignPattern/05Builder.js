class Payment {
  constructor(currency = "USD", amount = 0) {
    this.currency = currency;
    this.amount = amount;
  }

  addAmount(val) {
    this.amount += val;
    return this;
  }

  addCurrency(currency) {
    this.currency = currency;
    return this;
  }

  pay() {
    console.log(`${this.currency} ${this.amount}`);
  }
}

// Creating an instance of Payment with initial values
const payment = new Payment();

payment.addAmount(200).addAmount(444).pay(); // Output: USD 644
const res = payment.addAmount(200).addCurrency("Rup").pay(); // Output: Rup 844
