const person = {
  name: "mozammil",
  age: 28,
  gender: "male",
};

const proxiedPerson = new Proxy(person, {
  get(obj, prop) {
    console.log(`${obj[prop]} is the value of the property ${prop}`);
    return obj[prop];
  },
  set(obj, prop, value) {
    console.log(
      `The value of the ${prop} is about to change from ${obj[person]} to ${value}` // This line contains the issue
    );
    obj[prop] = value;
  },
});

console.log(proxiedPerson.name);

proxiedPerson.age = 29;
