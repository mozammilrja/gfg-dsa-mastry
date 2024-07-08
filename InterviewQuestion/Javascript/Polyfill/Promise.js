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

//Polyfill for Promise.all()
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 3000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 3");
  }, 3000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 4");
  }, 3000);
});

const arr = [promise1, promise2, promise3, promise4];

function myAll(promises) {
  const output = [];
  let promisesResolved = 0;
  return new Promise((resolve, reject) => {
    try {
      promises.forEach(async (promise, index) => {
        const response = await promise;
        promisesResolved += 1;
        output.push(response);
        if (promisesResolved === promises.length) {
          resolve(output);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

myAll(arr).then((res) => {
  console.log(res);
});
