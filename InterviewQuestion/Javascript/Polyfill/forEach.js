const arr = [1, 3, 4, 5, 5, 6];

const logger = (item, index) => {
  console.log(item, index);
};

Array.prototype.forEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i);
  }
};

arr.forEach(logger);
