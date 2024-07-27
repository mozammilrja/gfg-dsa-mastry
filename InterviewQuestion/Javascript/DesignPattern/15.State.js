// // State Interface
// class State {
//   play() {}

//   pause() {}

//   stop() {}
// }

// // Concrete State Classes

// // Playing State
// class PlayingState extends State {
//   constructor(player) {
//     super();
//     this.player = player;
//   }

//   play() {
//     console.log("Already playing.");
//   }

//   pause() {
//     console.log("Pausing playback.");
//     this.player.setState(this.player.pausedState);
//   }

//   stop() {
//     console.log("Stopping playback.");
//     this.player.setState(this.player.stoppedState);
//   }
// }

// // Paused State
// class PausedState extends State {
//   constructor(player) {
//     super();
//     this.player = player;
//   }

//   play() {
//     console.log("Resuming playback.");
//     this.player.setState(this.player.playingState);
//   }

//   pause() {
//     console.log("Already paused.");
//   }

//   stop() {
//     console.log("Stopping playback from paused state.");
//     this.player.setState(this.player.stoppedState);
//   }
// }

// // Stopped State
// class StoppedState extends State {
//   constructor(player) {
//     super();
//     this.player = player;
//   }

//   play() {
//     console.log("Starting playback.");
//     this.player.setState(this.player.playingState);
//   }

//   pause() {
//     console.log("Cannot pause. Player is stopped.");
//   }

//   stop() {
//     console.log("Already stopped.");
//   }
// }

// // Context Class
// class MediaPlayer {
//   constructor() {
//     this.playingState = new PlayingState(this);
//     this.pausedState = new PausedState(this);
//     this.stoppedState = new StoppedState(this);

//     this.state = this.stoppedState; // Initial state
//   }

//   setState(state) {
//     this.state = state;
//   }

//   play() {
//     this.state.play();
//   }

//   pause() {
//     this.state.pause();
//   }

//   stop() {
//     this.state.stop();
//   }
// }

// // Client Code
// const player = new MediaPlayer();

// player.play(); // Starting playback.
// player.pause(); // Pausing playback.
// player.stop(); // Stopping playback from paused state.
// player.play(); // Starting playback.
// player.stop(); // Stopping playback.
// player.pause(); // Cannot pause. Player is stopped.

// State Interface
// State Interface
class OrderState {
  processOrder() {}

  shipOrder() {}

  deliverOrder() {}
}

// Concrete State Classes

// New Order State
class NewOrderState extends OrderState {
  constructor(order) {
    super();
    this.order = order;
  }

  processOrder() {
    console.log("Order is being processed.");
    this.order.setState(this.order.processingOrderState);
  }

  shipOrder() {
    console.log("Cannot ship. The order is not processed yet.");
  }

  deliverOrder() {
    console.log("Cannot deliver. The order is not shipped yet.");
  }
}

// Processing Order State
class ProcessingOrderState extends OrderState {
  constructor(order) {
    super();
    this.order = order;
  }

  processOrder() {
    console.log("Order is already being processed.");
  }

  shipOrder() {
    console.log("Shipping the order.");
    this.order.setState(this.order.shippedState);
  }

  deliverOrder() {
    console.log("Cannot deliver. The order is not shipped yet.");
  }
}

// Shipped State
class ShingOrderState extends OrderState {
  constructor(order) {
    super();
    this.order = order;
  }

  processOrder() {
    console.log("Order is already processed.");
  }

  shipOrder() {
    console.log("Order is already shipped.");
  }

  deliverOrder() {
    console.log("Delivering the order.");
    this.order.setState(this.order.deliverOrderState);
  }
}

// Delivered State
class DelivereOrderdState extends OrderState {
  constructor(order) {
    super();
    this.order = order;
  }

  processOrder() {
    console.log("Order is already delivered.");
  }

  shipOrder() {
    console.log("Order is already delivered.");
  }

  deliverOrder() {
    console.log("Order is already delivered.");
  }
}

// Context Class
class Order {
  constructor() {
    this.newOrderState = new NewOrderState(this);
    this.processingOrderState = new ProcessingOrderState(this);
    this.shippedState = new ShingOrderState(this);
    this.deliverOrderState = new DelivereOrderdState(this);
    this.state = this.newOrderState; 
  }

  setState(state) {
    this.state = state;
  }

  processOrder() {
    this.state.processOrder();
  }

  shipOrder() {
    this.state.shipOrder();
  }

  deliverOrder() {
    this.state.deliverOrder();
  }
}

// Client Code
const order = new Order();

order.processOrder(); // Output: "Order is being processed."
order.shipOrder(); // Output: "Shipping the order."
order.deliverOrder(); // Output: "Delivering the order."
order.processOrder(); // Output: "Order is already delivered."
order.shipOrder(); // Output: "Order is already delivered."
order.deliverOrder(); // Output: "Order is already delivered."
