// Call polyfill
// Custom Call function

let Person = {
  name: "Mozammil",
  age: 28,
};

function PersonDetails(dep) {
  console.log(`Name: ${this.name}, Age: ${this.age}, Department: ${dep}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable");
  }

  // Assign the function to the context
  context.fn = this;

  // Call the function and store the result
  const result = context.fn(...args);

  // Remove the function to clean up the object
  delete context.fn;

  return result;
};

PersonDetails.myCall(Person, "IT");
