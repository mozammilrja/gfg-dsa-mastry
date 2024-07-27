// Visitor Interface
class CartVisitor {
  visitElectronics(electronics) {}
  visitClothing(clothing) {}
  visitGroceries(groceries) {}
}

// Concrete Visitors
class DiscountCalculator extends CartVisitor {
  visitElectronics(electronics) {
    // Apply a 10% discount on electronics
    return electronics.price * 0.9;
  }

  visitClothing(clothing) {
    // Apply a 15% discount on clothing
    return clothing.price * 0.85;
  }

  visitGroceries(groceries) {
    // Apply a 5% discount on groceries
    return groceries.price * 0.95;
  }
}

class TaxCalculator extends CartVisitor {
  visitElectronics(electronics) {
    // Calculate 8% tax on electronics
    return electronics.price * 0.08;
  }

  visitClothing(clothing) {
    // Calculate 5% tax on clothing
    return clothing.price * 0.05;
  }

  visitGroceries(groceries) {
    // No tax on groceries
    return 0;
  }
}

class ReportGenerator extends CartVisitor {
  visitElectronics(electronics) {
    return `Electronics: ${electronics.name} - Price: $${electronics.price}`;
  }

  visitClothing(clothing) {
    return `Clothing: ${clothing.name} - Price: $${clothing.price}`;
  }

  visitGroceries(groceries) {
    return `Groceries: ${groceries.name} - Price: $${groceries.price}`;
  }
}

// Visitable Elements
class Electronics {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  accept(visitor) {
    return visitor.visitElectronics(this);
  }
}

class Clothing {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  accept(visitor) {
    return visitor.visitClothing(this);
  }
}

class Groceries {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  accept(visitor) {
    return visitor.visitGroceries(this);
  }
}

// Usage Example
const laptop = new Electronics("Laptop", 1000);
const shirt = new Clothing("Shirt", 50);
const apple = new Groceries("Apple", 2);

const discountCalculator = new DiscountCalculator();
const taxCalculator = new TaxCalculator();
const reportGenerator = new ReportGenerator();

console.log("Discounted Prices:");
console.log("Laptop:", laptop.accept(discountCalculator));
console.log("Shirt:", shirt.accept(discountCalculator));
console.log("Apple:", apple.accept(discountCalculator));

console.log("Taxes:");
console.log("Laptop Tax:", laptop.accept(taxCalculator));
console.log("Shirt Tax:", shirt.accept(taxCalculator));
console.log("Apple Tax:", apple.accept(taxCalculator));

console.log("Reports:");
console.log(laptop.accept(reportGenerator));
console.log(shirt.accept(reportGenerator));
console.log(apple.accept(reportGenerator));
