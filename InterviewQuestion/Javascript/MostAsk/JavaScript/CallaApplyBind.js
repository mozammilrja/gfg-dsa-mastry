function fullNmae(greet) {
  console.log(`${greet},${this.firstName},${this.lastName}`);
}

const person = {
  firstName: "Elon",
  lastName: "Musk",
};
const person2 = {
  firstName: "Ratan",
  lastName: "Tata ",
};

fullNmae.call(person, "Hello");
fullNmae.call(person2, "Hello");
fullNmae.apply(person, ["Hello"]);
fullNmae.apply(person2, ["Hello"]);

const person1 = fullNmae.bind(person);
const person3 = fullNmae.bind(person2);
console.log("first");

person1("Hello");
person3("Hi");
