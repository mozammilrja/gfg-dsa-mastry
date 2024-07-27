class Events {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  subscribe(name, callback) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(callback);

    // Return an object with a remove method to unsubscribe
    return {
      remove: () => {
        this.events[name] = this.events[name].filter((cb) => cb !== callback);
      },
    };
  }

  // Subscribe to an event to be called only once
  subscribeOnce(name, callback) {
    const wrapper = (data) => {
      callback(data);
      this.unsubscribe(name, wrapper);
    };
    this.subscribe(name, wrapper);
  }

  // Subscribe to an event to be called only once with async support
  async subscribeOnceAsync(name) {
    return new Promise((resolve) => {
      const wrapper = (data) => {
        resolve(data);
        this.unsubscribe(name, wrapper);
      };
      this.subscribe(name, wrapper);
    });
  }

  // Publish an event
  publish(name, data) {
    if (this.events[name]) {
      this.events[name].forEach((callback) => callback(data));
    }
  }

  // Publish all events
  publishAll(data) {
    for (let name in this.events) {
      this.publish(name, data);
    }
  }

  // Helper method to unsubscribe from an event
  unsubscribe(name, callback) {
    if (this.events[name]) {
      this.events[name] = this.events[name].filter((cb) => cb !== callback);
    }
  }
}

// Test cases
const events = new Events();

const newUserNewsSubscription = events.subscribe(
  "new-user",
  function (payload) {
    console.log(`Sending Q1 News to: ${payload}`);
  }
);

events.publish("new-user", "Jhon");
//output: "Sending Q1 News to: Jhon"

const newUserNewsSubscription2 = events.subscribe(
  "new-user",
  function (payload) {
    console.log(`Sending Q2 News to: ${payload}`);
  }
);

events.publish("new-user", "Doe");
//output: "Sending Q1 News to: Doe"
//output: "Sending Q2 News to: Doe"

newUserNewsSubscription.remove(); // Q1 news is removed

events.publish("new-user", "Foo");
//output: "Sending Q2 News to: Foo"

events.publishAll("FooBar");
//output: "Sending Q2 News to: FooBar"

events.subscribeOnce("new-user", function (payload) {
  console.log(`I am invoked once ${payload}`);
});

events.publish("new-user", "Foo Once");
//output: "Sending Q2 News to: Foo Once" - normal event
//output: "I am invoked once Foo Once" - once event

events.publish("new-user", "Foo Twice");
//output: "Sending Q2 News to: Foo Twice" - normal event
// once event should not invoke for second time

events.subscribeOnceAsync("new-user").then(function (payload) {
  console.log(`I am invoked once ${payload}`);
});

events.publish("new-user", "Foo Once Async");
//output: "Sending Q2 News to: Foo Once Async"
//output: "I am invoked once Foo Once Async"
