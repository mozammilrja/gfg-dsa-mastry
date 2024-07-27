// // Component
// class Notification {
//   send(message) {
//     console.log(`Sending notification ${message}`);
//   }
// }

// // Concrete Component
// class BasicNotification extends Notification {
//   send(message) {
//     super.send(message);
//     console.log(`Sending basic notification: ${message}`);
//   }
// }

// // Decorator
// class NotificationDecorator extends Notification {
//   constructor(notification) {
//     super();
//     this.notification = notification;
//   }

//   send(message) {
//     this.notification.send(message);
//   }
// }

// // Concrete Decorator 1
// class EmailNotification extends NotificationDecorator {
//   send(message) {
//     super.send(message);
//     console.log(`Sending email notification: ${message}`);
//   }
// }

// // Concrete Decorator 2
// class SMSNotification extends NotificationDecorator {
//   send(message) {
//     super.send(message);
//     console.log(`Sending SMS notification: ${message}`);
//   }
// }

// // Usage Example
// const basicNotification = new BasicNotification();
// const emailNotification = new EmailNotification(basicNotification);
// const smsAndEmailNotification = new SMSNotification(emailNotification);

// // Send notifications
// console.log("Basic Notification:");
// basicNotification.send("Hello!");

// console.log("\nEmail Notification:");
// emailNotification.send("Hello!");

// console.log("\nSMS and Email Notification:");
// smsAndEmailNotification.send("Hello!");

// Component
class Product {
  getPrice() {
    return 0;
  }
}

// Concrete Component
class BasicProduct extends Product {
  constructor(price) {
    super();
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

// Decorator
class ProductDecorator extends Product {
  constructor(product) {
    super();
    this.product = product;
  }

  getPrice() {
    return this.product.getPrice();
  }
}

// Concrete Decorator 1: DiscountDecorator
class DiscountDecorator extends ProductDecorator {
  constructor(product, discount) {
    super(product);
    this.discount = discount;
  }

  getPrice() {
    return this.product.getPrice() * (1 - this.discount);
  }
}

// Concrete Decorator 2: TaxDecorator
class TaxDecorator extends ProductDecorator {
  constructor(product, tax) {
    super(product);
    this.tax = tax;
  }

  getPrice() {
    return this.product.getPrice() * (1 + this.tax);
  }
}

// Concrete Decorator for 18% Tax
class EighteenPercentTaxDecorator extends ProductDecorator {
  constructor(product) {
    super(product);
  }

  getPrice() {
    return this.product.getPrice() * 1.18; // Apply 18% tax
  }
}

// Usage Example

// Create a basic product with a price of 100
const basicProduct = new BasicProduct(100);

// Apply a 20% discount
const discountedProduct = new DiscountDecorator(basicProduct, 0.2);

// Apply 18% tax using the specific decorator
const eighteenPercentTaxedProduct = new EighteenPercentTaxDecorator(
  discountedProduct
);

console.log("Basic Product Price:", basicProduct.getPrice()); // Output: 100
console.log("Discounted Product Price:", discountedProduct.getPrice()); // Output: 80
console.log(
  "Taxed Product Price (with 18% tax):",
  eighteenPercentTaxedProduct.getPrice()
); // Output: 94.4
