// Apply polyfill
// Custom Apply function

let Person = {
    name: "Mozammil",
    age: 28,
  };
  function PersonDeatils(dep) {
    return { name: this.name, age: this.age, dep };
  }
  // console.log(PersonDeatils.Apply(Person, ["IT", "CA"]));
  
  Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== "function") {
      throw new Error(this + " is not callable");
    }
    if (!Array.isArray(args)) {
      throw new TypeError("Arguments must be in array format");
    }
    context.fn = this;
    const result = context.fn(...args); // Use apply method here
    delete context.fn; // Clean up property added to context
    return result;
  };
  
  console.log(PersonDeatils.myApply(Person, ["IT", "CA"]));
  