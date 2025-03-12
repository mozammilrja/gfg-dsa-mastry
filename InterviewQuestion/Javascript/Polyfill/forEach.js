const arr = [1, 3, 4, 5, 5, 6];

const logger = (item, index) => {
  console.log(item, index);
};

Array.prototype.myForEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i);
  }
};

arr.myForEach(logger);

console.log("\nTest Case 2: Summing Up an Array");
let sum = 0;
[5, 10, 15].myForEach((num) => {
  sum += num;
});
console.log("Sum:", sum);
