// Bind polyfill
// Custom Bind function

let Person = {
  name: "Mozammil",
  age: 28,
};

function PersonDeatils(dep) {
  return { name: this.name, age: this.age, dep };
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable");
  }

  return (...innerArgs) => {
    return this.apply(context, [...args, ...innerArgs]);
  };
};

let res = PersonDeatils.myBind(Person);
console.log(res("IT"));

let anotherPerson = { name: "John", age: 35 };

let res2 = PersonDeatils.myBind(anotherPerson);
console.log(res2("HR"));
// Output: { name: "John", age: 35, dep: "HR" }

let res3 = PersonDeatils.myBind(Person, "Finance");
console.log(res3());
// Output: { name: "Mozammil", age: 28, dep: "Finance" }

console.log(res3("Marketing"));
// Output: { name: "Mozammil", age: 28, dep: "Finance" }  (dep is already set to "Finance" in myBind)
