const add = function (...x) {
  //store the current arguments
  let sum = x;

  function resultFun(...y) {
    //merge the new arguemts
    sum = [...sum, ...y];
    return resultFun;
  }
  //overide the valuseOf to retuen sum
  resultFun.valueOf = function () {
    return sum.reduce((a, b) => a + b, 0);
  };
  //extend the valuesOf
  resultFun.value = resultFun.valueOf;
  //return the inner fun
  //on any premitive action .valuesOf will be invoked
  //it will be return  the value
  return resultFun;
};

console.log(add(1)(2).value() == 3);
console.log(add(1, 2)(3).value() == 6);
console.log(add(1)(2)(3).value() == 6);
console.log(add(1)(2) + 3);

// Output:
// true
// true
// true
// 6
