let obj = {
  i: 0,
};

const Handler = {
  get: function (target, prop) {
    if (prop === "i") {
      return ++target[prop];
    }
    return target[prop];
  },
};

obj = new Proxy(obj, Handler);
// modify the object so that it can return the following output
// your code goes here

console.log(obj.i); // 1
console.log(obj.i); // 2
console.log(obj.i); // 3
