// Bind polyfill
// Custom Bind function

let Person = {
    name: "Mozammil",
    age: 28,
  };
  function PersonDeatils(dep) {
    return { name: this.name, age: this.age, dep };
  }
  // let res = PersonDeatils.bind(Person);
  // console.log(res("IT"));
  
  Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error(this + " is not callable");
    }
    if (!Array.isArray(args)) {
      throw new TypeError("cannot be bound as it's not  callable");
    }
    context.fn = this;
    return function (...innerArgs) {
      return context.fn(...args, ...innerArgs);
    };
  };
  
  let res = PersonDeatils.myBind(Person);
  console.log(res("IT"));
  