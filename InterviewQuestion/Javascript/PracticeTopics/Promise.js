// // simple promise example

// const promise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("the promise has been fulfilled");
//   } else {
//     reject("the promise has been rejected");
//   }
// });

// promise
//   .then((messege) => {
//     console.log("success", messege);
//   })
//   .catch((res) => {
//     console.log("Error", res);
//   });

// promise.all
const promise1 = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve("the promise has been fulfilled");
  } else {
    reject("the promise has been rejected");
  }
});
const promise2 = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve("the promise has been fulfilled");
  } else {
    reject("the promise has been rejected");
  }
});
const promise3 = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("the promise has been fulfilled");
  } else {
    reject("the promise has been rejected");
  }
});
// if the promise is sigle promise is rejected then promise is rejected.
// Promise.all([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// the promise is sigle promise is resolved then promise is resolved.
Promise.resolve([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
