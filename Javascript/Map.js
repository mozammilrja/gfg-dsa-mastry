// Map polyfill

// arr1.map((item,index,num)=>{})

// Custom map function
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      temp.push(cb(this[i], i, this));
    }
    return temp;
  };
  
  let nums = [1, 2, 3, 4];
  let multiply = nums.myMap((num) => {
    return num * 3;
  });
  
  console.log(multiply);
  