// const Event = function() {
//   this.handlers = [];
// };

// Event.prototype.subscribe = function(fn) {
//   this.handlers.push(fn);
// };

// Event.prototype.unsubscribe = function(fn) {
//   this.handlers = this.handlers.filter((item) => item !== fn);
// };

// Event.prototype.fire = function(o, thisObj) {
//   const scope = thisObj || null;
//   this.handlers.forEach((item) => {
//     item.call(scope, o);
//   });
// };

// // Test cases
// const eventHandler = function(item) {
//   console.log("fired: " + item);
// };

// const eventHandler2 = function(item) {
//   console.log("Moved: " + item);
// };

// const event = new Event();

// event.subscribe(eventHandler);
// event.fire('event #1'); // Output: "fired: event #1"

// event.unsubscribe(eventHandler);
// event.fire('event #2'); // No output

// event.subscribe(eventHandler);
// event.subscribe(eventHandler2);
// event.fire('event #3'); // Output: "fired: event #3" and "Moved: event #3"


class Event {
    constructor() {
        this.handlers = [];
    }
    subscribe(fn) {
        this.handlers.push(fn);
    }
    unsubscribe(fn) {
        this.handlers = this.handlers.filter((item) => item !== fn);
    }
    fire(o, thisObj) {
        const scope = thisObj || null;
        this.handlers.forEach((item) => {
            item.call(scope, o);
        });
    }
}




// Test cases
const eventHandler = function (item) {
  console.log("fired: " + item);
};

const eventHandler2 = function (item) {
  console.log("Moved: " + item);
};

const event = new Event();

event.subscribe(eventHandler);
event.fire("event #1"); // Output: "fired: event #1"

event.unsubscribe(eventHandler);
event.fire("event #2"); // No output

event.subscribe(eventHandler);
event.subscribe(eventHandler2);
event.fire("event #3"); // Output: "fired: event #3" and "Moved: event #3"
