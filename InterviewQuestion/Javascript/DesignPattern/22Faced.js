// // Subsystem Classes

// class DVDPlayer {
//   on() {
//     console.log("DVD Player is now ON");
//   }
//   play(movie) {
//     console.log(`Playing movie: ${movie}`);
//   }
// }

// class Projector {
//   on() {
//     console.log("Projector is now ON");
//   }
//   setInput(input) {
//     console.log(`Projector input set to: ${input}`);
//   }
// }

// class SoundSystem {
//   on() {
//     console.log("Sound System is now ON");
//   }
//   setVolume(level) {
//     console.log(`Sound System volume set to: ${level}`);
//   }
// }

// class Light {
//   dim(level) {
//     console.log(`Lights dimmed to: ${level}`);
//   }
// }

// // Facade Class
// class HometheaterFacade {
//   constructor(dvdPlayer, projector, soundSystem, light) {
//     this.dvdPlayer = dvdPlayer;
//     this.projector = projector;
//     this.soundSystem = soundSystem;
//     this.light = light;
//   }

//   watchMovie(movie) {
//     console.log("Get ready to watch a movie...");

//     this.light.dim(10); // Dim the lights
//     this.projector.on(); // Turn on the projector
//     this.projector.setInput("DVD"); // Set the projector input to DVD
//     this.soundSystem.on(); // Turn on the sound system
//     this.soundSystem.setVolume(5); // Set the volume
//     this.dvdPlayer.on(); // Turn on the DVD player
//     this.dvdPlayer.play(movie); // Play the movie
//   }
// }

// // Usage Example

// // Create subsystem instances
// const dvdPlayer = new DVDPlayer();
// const projector = new Projector();
// const soundSystem = new SoundSystem();
// const light = new Light();

// // Create the facade
// const homeTheater = new HometheaterFacade(
//   dvdPlayer,
//   projector,
//   soundSystem,
//   light
// );

// // Use the facade to watch a movie
// homeTheater.watchMovie("Inception");

// Subsystem Classes

class Inventry {
  checkStock(item) {
    // Check stock availability (stubbed to always return true)
    console.log(`Checking stock for item: ${item}`);
    return true;
  }

  reserveItem(item) {
    // Reserve the item (stubbed method)
    console.log(`Reserving item: ${item}`);
  }
}

class Payment {
  processPayment(amount) {
    // Process payment (stubbed to always return true)
    console.log(`Processing payment of amount: ${amount}`);
    return true;
  }
}

class Shipping {
  arrangeShipping(item, address) {
    // Arrange shipping (stubbed method)
    console.log(`Arranging shipping for item: ${item} to address: ${address}`);
  }
}

class Notification {
  sendEmail(recipient, message) {
    // Send email notification (stubbed method)
    console.log(`Sending email to: ${recipient} with message: ${message}`);
  }
}

// Facade Class
class OrderFacade {
  constructor(inventory, payment, shipping, notification) {
    this.inventory = inventory;
    this.payment = payment;
    this.shipping = shipping;
    this.notification = notification;
  }

  placeOrder(item, address, email, amount) {
    console.log("Placing order...");

    // Check stock
    if (!this.inventory.checkStock(item)) {
      console.log("Item is out of stock.");
      return;
    }

    // Reserve item
    this.inventory.reserveItem(item);

    // Process payment
    if (!this.payment.processPayment(amount)) {
      console.log("Payment failed.");
      return;
    }

    // Arrange shipping
    this.shipping.arrangeShipping(item, address);

    // Send notification
    const message = `Your order for ${item} has been placed successfully and will be shipped to ${address}.`;
    this.notification.sendEmail(email, message);

    console.log("Order placed successfully.");
  }
}

// Usage Example

// Create subsystem instances
const inventory = new Inventry();
const payment = new Payment();
const shipping = new Shipping();
const notification = new Notification();

// Create the facade
const orderFacade = new OrderFacade(inventory, payment, shipping, notification);

// Place an order
orderFacade.placeOrder("Laptop", "123 Main St", "customer@example.com", 1200);
