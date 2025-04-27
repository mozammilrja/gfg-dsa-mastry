// implement Array.prototype.flat()

const arr = [1, [2], [3, [4]]];

const result = arr.flat(Infinity);
// console.log(result);

Array.prototype.myFlat = function (depth) {
  let res = [];
  if (!Array.isArray(this)) {
    throw new Error("this is not array");
  }

  this.forEach((ele) => {
    if (Array.isArray(ele) && depth > 0) {
      res.push(...ele.myFlat(depth - 1));
    } else {
      res.push(ele);
    }
  });

  return res;
};

console.log(arr.myFlat(Infinity));
