function myPromiseAll(taskList) {
  const results = [];

  // To track how many promises have completed
  let promisesCompleted = 0;

  // Return new promise
  return new Promise((resolve, reject) => {
    if (taskList.length === 0) {
      resolve(results);
      return;
    }

    taskList.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          results[index] = val;
          promisesCompleted += 1;

          if (promisesCompleted === taskList.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

// Input:
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);

// Output: "got results" [1000,5000,3000]
