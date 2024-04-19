// function PromisePolyfill(executor) {
//   let onResolve,
//     onReject,
//     isFulfilled = false,
//     value;

//   function resolve(val) {
//     isFulfilled = true;
//     value=val
//     onResolve(value);
//   }
//   function reject(val) {
//     onResolve(val);
//   }

//   this.then = function (callback) {
//     onResolve = callback;
//     return this;
//   };
//   this.catch = function (callback) {
//     onReject = callback;
//     return this.then;
//   };
//   executor(resolve, reject);
// }

// const examplePromise = new PromisePolyfill((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// examplePromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));

function PromisePolyfill(executor) {
    let onResolve,
      onReject,
      isFulfilled = false;
  
    function resolve(value) {
      setTimeout(() => {
        if (typeof onResolve === "function") {
          onResolve(value);
        }
      }, 0);
    }
  
    function reject(reason) {
      setTimeout(() => {
        if (typeof onReject === "function") {
          onReject(reason);
        }
      }, 0);
    }
  
    this.then = function (callback) {
      onResolve = callback;
      return this;
    };
  
    this.catch = function (callback) {
      onReject = callback;
      return this.then;
    };
  
    executor(resolve, reject);
  }
  
  const examplePromise = new PromisePolyfill((resolve, reject) => {
  //   setTimeout(() => {
      resolve(2);
  //   }, 1000);
  });
  
  examplePromise
    .then((res) => {
      console.log(res); // Output: 2
    })
    .catch((err) => {
      console.error(err);
    });
  