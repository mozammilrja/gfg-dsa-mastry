// class Subject {
//   constructor() {
//     this.observers = [];
//   }

//   subscribe(observer) {
//     this.observers.push(observer);
//   }

//   unsubscribe(observer) {
//     this.observers = this.observers.filter((obs) => obs !== observer);
//   }

//   notify(data) {
//     this.observers.forEach((observer) => observer.update(data));
//   }
// }

// class Observer {
//   constructor(name) {
//     this.name = name;
//   }

//   update(data) {
//     console.log(`${this.name} received data: ${data}`);
//   }
// }

// // Usage
// const subject = new Subject();

// const observer1 = new Observer("Observer 1");
// const observer2 = new Observer("Observer 2");

// subject.subscribe(observer1);
// subject.subscribe(observer2);

// subject.notify("Hello Observers!"); // Both observers will receive the data

// subject.unsubscribe(observer1);

// subject.notify("Only Observer 2 will receive this"); // Only Observer 2 will receive the data

//Simple Implementation

// const Move = function () {
//   this.handlers = [];

//   this.subscribe = function (fn) {
//     this.handlers.push(fn);
//   };
//   this.unsubscribe = function (fn) {
//     this.handlers = this.handlers.filter((item) => item !== fn);
//   };
//   this.fire = function (o, thisObj) {
//     const scope = thisObj || (typeof window !== "undefined" ? window : global);
//     this.handlers.forEach((item) => {
//       item.call(scope, o);
//     });
//   };
// };

// // 1st observer
// const moveHandler = function (item) {
//   console.log("Moved: " + item);
// };

// // 2nd observer
// const moveHandler2 = function (item) {
//   console.log("Moved: " + item);
// };

// const move = new Move();

// // Subscribe 1st observer
// move.subscribe(moveHandler);
// move.fire("event #1");

// // Unsubscribe 1st observer
// move.unsubscribe(moveHandler);
// move.fire("event #2");

// // Subscribe 1st & 2nd observer
// move.subscribe(moveHandler);
// move.subscribe(moveHandler2);
// move.fire("event #3");

//Coursera Intervew Questions



// function Events() {
//   this.subscribe = function (name, callback) {};
//   this.subscribeOnce = function (name, callback) {};
//   this.subscribeOnceAsync = function (name) {};
//   this.publish = function (name, data) {};
//   this.publishAll = function (name, data) {};
// }

// function Events() {
//   this.subscriptionList = new Map();
//   this.subscribeOnceList = new Map();
//   this.subscribeOnceAsyncList = new Map();
// }

// this.subscribe = function (name, callback) {
//   if (!this.subscriptionList.has(name)) {
//     this.subscriptionList.set(name, [callback]);
//   } else {
//     const existingCallbacks = this.subscriptionList.get(name);
//     this.subscriptionList.set(name, [...existingCallbacks, callback]);
//     this.subscriptionList.set(name, filtered);
//   }
// };
// this.subscribeOnce = function (name, callback) {
//   if (!this.subscribeOnceList.has(name)) {
//     this.subscribeOnceList.set(name, [callback]);
//   } else {
//     const existingCallbacks = this.subscribeOnceList.get(name);
//     this.subscribeOnceList.set(name, [...existingCallbacks, callback]);
//   }
// };
// this.subscribeOnceAsync = function (name, callback) {
//   return new Promise((resolve, reject) => {
//     if (!this.subscribeOnceAsyncList.has(name)) {
//       this.subscribeOnceAsyncList.set(name, [callback]);
//     } else {
//       const existingCallbacks = this.subscribeOnceAsyncList.get(name);
//       this.subscribeOnceAsyncList.set(name, [...existingCallbacks, resolve]);
//     }
//   });
// };

// this.publish = function (name, data) {
//   const callbacks = this.subscriptionList.get(name) || [];
//   callbacks.forEach((e) => {
//     e(data);
//   });

//   const subscribeOnceCallbacks = this.subscribeOnceList.get(name || []);
//   subscribeOnceCallbacks.forEach((e) => {
//     e(data);
//   });

//   this.subscriptionList.set(name, []);

//   const subscribeOnceAsynCallbacks = this.subscribeOnceAsyncList.get(
//     name || []
//   );
//   subscribeOnceAsynCallbacks.forEach((e) => {
//     e(data);
//   });
//   this.subscribeOnceAsyncList.set(name,[])
// };



function Events() {
  this.subscriptionList = new Map();
  this.subscribeOnceList = new Map();
  this.subscribeOnceAsyncList = new Map();
}

Events.prototype.subscribe = function (name, callback) {
  if (!this.subscriptionList.has(name)) {
    this.subscriptionList.set(name, [callback]);
  } else {
    const existingCallbacks = this.subscriptionList.get(name);
    this.subscriptionList.set(name, [...existingCallbacks, callback]);
  }
};

Events.prototype.subscribeOnce = function (name, callback) {
  if (!this.subscribeOnceList.has(name)) {
    this.subscribeOnceList.set(name, [callback]);
  } else {
    const existingCallbacks = this.subscribeOnceList.get(name);
    this.subscribeOnceList.set(name, [...existingCallbacks, callback]);
  }
};

Events.prototype.subscribeOnceAsync = function (name) {
  return new Promise((resolve) => {
    if (!this.subscribeOnceAsyncList.has(name)) {
      this.subscribeOnceAsyncList.set(name, [resolve]);
    } else {
      const existingCallbacks = this.subscribeOnceAsyncList.get(name);
      this.subscribeOnceAsyncList.set(name, [...existingCallbacks, resolve]);
    }
  });
};

Events.prototype.publish = function (name, data) {
  const callbacks = this.subscriptionList.get(name) || [];
  callbacks.forEach((callback) => {
    callback(data);
  });

  const subscribeOnceCallbacks = this.subscribeOnceList.get(name) || [];
  subscribeOnceCallbacks.forEach((callback) => {
    callback(data);
  });
  this.subscribeOnceList.set(name, []);

  const subscribeOnceAsyncCallbacks =
    this.subscribeOnceAsyncList.get(name) || [];
  subscribeOnceAsyncCallbacks.forEach((resolve) => {
    resolve(data);
  });
  this.subscribeOnceAsyncList.set(name, []);
};

Events.prototype.publishAll = function (data) {
  this.subscriptionList.forEach((callbacks, name) => {
    this.publish(name, data);
  });
};

// Example Usage
const events = new Events();

events.subscribe("event1", (data) => {
  console.log("event1 subscriber:", data);
});

events.subscribeOnce("event1", (data) => {
  console.log("event1 once subscriber:", data);
});

events.subscribeOnceAsync("event1").then((data) => {
  console.log("event1 once async subscriber:", data);
});

events.publish("event1", "Hello, World!");
events.publish("event1", "Hello again!");
