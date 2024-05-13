// Call polyfill
// Custom Call function

let Person = {
    name: "Mozammil",
    age: 28,
  };
  function PersonDeatils(dep) {
    return { name: this.name, age: this.age, dep };
  }
  // console.log(PersonDeatils.myCall(Person, "IT"));
  
  Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error(this + " is not callable");
    }
    context.fn = this;
    const result = context.fn(...args);
    return result;
  };
  
  console.log(PersonDeatils.myCall(Person, "IT"));
  