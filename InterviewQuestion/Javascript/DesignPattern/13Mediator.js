// // Mediator Interface
// class Mediator {
//   send(message, collegue) {}
// }

// // Concrete Mediator
// class ChatMediator extends Mediator {
//   constructor() {
//     super();
//     this.users = [];
//   }

//   addUser(user) {
//     this.users.push(user);
//   }

//   send(message, sender) {
//     this.users.forEach((user) => {
//       if (user !== sender) {
//         user.receive(message);
//       }
//     });
//   }
// }

// // Colleague
// class User {
//   constructor(name, mediator) {
//     this.name = name;
//     this.mediator = mediator;
//   }

//   send(message) {
//     this.mediator.send(message, this);
//     console.log(`${this.name} sends: ${message}`);
//   }
//   receive(message) {
//     console.log(`${this.name} receive: ${message}`);
//   }
// }

// // Usage Example

// // Create mediator
// const chatRoom = new ChatMediator();

// // Create users
// const user1 = new User("Alice", chatRoom);
// const user2 = new User("Bob", chatRoom);

// // Add users to the chat room
// chatRoom.addUser(user1);
// chatRoom.addUser(user2);

// // Users send messages
// user1.send("Hello, Bob!"); // Output: [time] Alice: Hello, Bob!
// user2.send("Hi, Alice! How are you?"); // Output: [time] Bob: Hi, Alice! How are you?

//Scenario
// Mediator interface
class Mediator {
  notify(sender, event) {}
}

// Concrete Mediator
class ControlTower extends Mediator {
  constructor() {
    super();
    this.runwayFree = true; // Initialize runway as free
    this.airplanes = [];
  }

  registerAirplane(airplane) {
    this.airplanes.push(airplane);
  }

  notify(sender, event) {
    if (event === "readyForLanding") {
      if (this.runwayFree) {
        console.log(`ControlTower: Plane ${sender.id} is clear to land.`);
        this.runwayFree = false;
        sender.state = "landing";
      } else {
        console.log(`ControlTower: Plane ${sender.id} is waiting to land.`);
        sender.state = "waitingForLanding";
      }
    } else if (event === "landed") {
      console.log(`ControlTower: Plane ${sender.id} has landed.`);
      this.runwayFree = true;
      this.checkWaitingPlanes();
    } else if (event === "readyForTakeoff") {
      if (this.runwayFree) {
        console.log(`ControlTower: Plane ${sender.id} is clear to take off.`);
        this.runwayFree = false;
        sender.state = "takingOff";
      } else {
        console.log(`ControlTower: Plane ${sender.id} is waiting to take off.`);
        sender.state = "waitingForTakeoff";
      }
    } else if (event === "takenOff") {
      console.log(`ControlTower: Plane ${sender.id} has taken off.`);
      this.runwayFree = true;
      this.checkWaitingPlanes();
    }
  }

  checkWaitingPlanes() {
    for (const plane of this.airplanes) {
      if (plane.state === "waitingForLanding" && this.runwayFree) {
        this.notify(plane, "readyForLanding");
        break;
      }
      if (plane.state === "waitingForTakeoff" && this.runwayFree) {
        this.notify(plane, "readyForTakeoff");
        break;
      }
    }
  }
}

// Colleague
class Plane {
  constructor(id, mediator) {
    this.id = id;
    this.mediator = mediator;
    this.state = "onGround";
    mediator.registerAirplane(this);
  }

  readyForLanding() {
    console.log(`Plane ${this.id}: Ready for landing.`);
    this.mediator.notify(this, "readyForLanding");
  }

  landed() {
    console.log(`Plane ${this.id}: Landing.`);
    this.mediator.notify(this, "landed");
  }

  readyForTakeoff() {
    console.log(`Plane ${this.id}: Ready for takeoff.`);
    this.mediator.notify(this, "readyForTakeoff");
  }

  takenOff() {
    console.log(`Plane ${this.id}: Taken off.`);
    this.mediator.notify(this, "takenOff");
  }
}

// Usage Example

// Create mediator
const controlTower = new ControlTower();

// Create airplanes
const airplane1 = new Plane("A1", controlTower);
const airplane2 = new Plane("A2", controlTower);
const airplane3 = new Plane("A3", controlTower);

// Simulate events
airplane1.readyForTakeoff(); // Output: Plane A1: Ready for takeoff.
//         ControlTower: Plane A1 is clear to take off.

airplane2.readyForLanding(); // Output: Plane A2: Ready for landing.
//         ControlTower: Plane A2 is waiting to land.

airplane1.takenOff(); // Output: Plane A1: Taken off.
//         ControlTower: Plane A1 has taken off.
//         ControlTower: Plane A2 is clear to land.

airplane2.landed(); // Output: Plane A2: Landing.
//         ControlTower: Plane A2 has landed.

airplane3.readyForTakeoff(); // Output: Plane A3: Ready for takeoff.
//         ControlTower: Plane A3 is clear to take off.

airplane3.takenOff(); // Output: Plane A3: Taken off.
//         ControlTower: Plane A3 has taken off.
