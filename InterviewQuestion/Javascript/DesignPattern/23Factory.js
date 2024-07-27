// // Product Classes

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   draw() {
//     console.log(`Drawing a circle with radius: ${this.radius}`);
//   }
// }

// class Square {
//   constructor(side) {
//     this.side = side;
//   }

//   draw() {
//     console.log(`Drawing a square with side length: ${this.side}`);
//   }
// }

// // Factory Class
// class ShapeFactory {
//   createShape(type, size) {
//     switch (type) {
//       case "circle":
//         return new Circle(size);
//       case "square":
//         return new Square(size);
//       default:
//         throw new Error("Unknown shape type");
//     }
//   }
// }

// // Usage Example

// // Create the factory
// const factory = new ShapeFactory();

// // Create shapes using the factory
// const circle = factory.createShape("circle", 5);
// const square = factory.createShape("square", 10);

// // Draw the shapes
// circle.draw(); // Output: Drawing a circle with radius: 5
// square.draw(); // Output: Drawing a square with side length: 10

// Product Classes

class EmailNotification {
  constructor(email, message) {
    this.email = email;
    this.message = message;
  }

  send() {
    console.log(
      `Sending email to: ${this.email} with message: ${this.message}`
    );
  }
}

class SMSNotification {
  constructor(phone, message) {
    this.phone = phone;
    this.message = message;
  }

  send() {
    console.log(`Sending SMS to: ${this.phone} with message: ${this.message}`);
  }
}

// Factory Class
class NotificationFactory {
  static createNotification(type, config) {
    switch (type) {
      case "email":
        return new EmailNotification(config.email, config.message);
      case "sms":
        return new SMSNotification(config.phone, config.message);
      default:
        throw new Error("Unknown notification type");
    }
  }
}

// Usage Example

// Create notifications using the factory
const emailNotification = NotificationFactory.createNotification("email", {
  email: "user@example.com",
  message: "Hello via Email!",
});
const smsNotification = NotificationFactory.createNotification("sms", {
  phone: "123-456-7890",
  message: "Hello via SMS!",
});

// Send the notifications
emailNotification.send(); // Output: Sending email to: user@example.com with message: Hello via Email!
smsNotification.send(); // Output: Sending SMS to: 123-456-7890 with message: Hello via SMS!
