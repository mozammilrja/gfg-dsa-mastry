// Reduce polyfill
// arr.reduce((acc,curr,index,arr)=>{initialValue})
// Custom reduce function
Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
  };
  
  let nums = [1, 2, 3, 4];
  let sum = nums.myReduce((acc, curr, i, arr) => {
    return acc + curr;
  }, 0);
  
  console.log(sum);
  