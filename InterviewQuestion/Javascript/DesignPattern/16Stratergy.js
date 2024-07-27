// // Strategy Interface
// class DiscountStrategy {
//   calculate(price) {
//     throw new Error("This method should be overridden.");
//   }
// }

// // No Discount Strategy
// class NoDiscount extends DiscountStrategy {
//   calculate(price) {
//     return price;
//   }
// }

// // Percentage Discount Strategy
// class PercentageDiscount extends DiscountStrategy {
//   constructor(percentage) {
//     super();
//     this.percentage = percentage;
//   }

//   calculate(price) {
//     return price - (price * this.percentage) / 100;
//   }
// }

// // Fixed Discount Strategy
// class FixedDiscount extends DiscountStrategy {
//   constructor(discount) {
//     super();
//     this.discount = discount;
//   }

//   calculate(price) {
//     return price - this.discount;
//   }
// }

// // Context Class
// class ShoppingCart {
//   constructor() {
//     this.items = [];
//     this.discountStrategy = new NoDiscount(); // Default strategy
//   }

//   setDiscountStrategy(discountStrategy) {
//     this.discountStrategy = discountStrategy;
//   }

//   addItem(item, price) {
//     this.items.push({ item, price });
//   }

//   calculateTotal() {
//     const total = this.items.reduce((total, item) => total + item.price, 0);
//     return this.discountStrategy.calculate(total);
//   }
// }

// // Client Code
// const cart = new ShoppingCart();
// cart.addItem("Item 1", 50);
// cart.addItem("Item 2", 100);

// // Apply a percentage discount
// cart.setDiscountStrategy(new PercentageDiscount(10)); // 10% discount
// console.log(
//   `Total after percentage discount: $${cart.calculateTotal().toFixed(2)}`
// ); // Output: Total after percentage discount: $135.00

// // Apply a fixed discount
// cart.setDiscountStrategy(new FixedDiscount(20)); // $20 discount
// console.log(`Total after fixed discount: $${cart.calculateTotal().toFixed(2)}`); // Output: Total after fixed discount: $130.00

// // No discount
// cart.setDiscountStrategy(new NoDiscount());
// console.log(`Total with no discount: $${cart.calculateTotal().toFixed(2)}`); // Output: Total with no discount: $150.00

// PaymentStrategy Interface
class PaymentStrategy {
  pay(amount) {
    throw new Error("This method should be overridden.");
  }
}

// Credit Card Payment Strategy
class CreditCardPayment extends PaymentStrategy {
  constructor(cardNumber, cardHolder, expirationDate) {
    super();
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
    this.expirationDate = expirationDate;
  }

  pay(amount) {
    console.log(
      `Paid $${amount} using Credit Card\n` +
        `Card Number: ${this.cardNumber}\n` +
        `Card Holder: ${this.cardHolder}\n` +
        `Expiration Date: ${this.expirationDate}`
    );
  }
}

// PayPal Payment Strategy
class PayPalPayment extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }

  pay(amount) {
    console.log(`Paid $${amount} using PayPal account ${this.email}`);
  }
}

// Bitcoin Payment Strategy
class BitcoinPayment extends PaymentStrategy {
  constructor(walletAddress) {
    super();
    this.walletAddress = walletAddress;
  }

  pay(amount) {
    console.log(`Paid $${amount} using Bitcoin wallet ${this.walletAddress}`);
  }
}

// Context Class
class ShoppingCart {
  constructor() {
    this.items = [];
    this.paymentStrategy = null; // Default payment strategy
  }

  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  addItem(item, price) {
    this.items.push({ item, price });
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  checkout() {
    const total = this.calculateTotal(); // Call the method with parentheses
    if (!this.paymentStrategy) {
      throw new Error("Payment method not set.");
    }
    this.paymentStrategy.pay(total);
  }
}

// Initialize the ShoppingCart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem("Item 1", 30);
cart.addItem("Item 2", 20);

// Set payment strategy and checkout
cart.setPaymentStrategy(
  new CreditCardPayment("1234567812345678", "John Doe", "12/25")
);
cart.checkout();

cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
cart.checkout();

cart.setPaymentStrategy(
  new BitcoinPayment("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa")
);
cart.checkout();
