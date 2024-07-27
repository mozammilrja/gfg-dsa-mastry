const asyncSeriesExecuter = async function (tasks) {
  for (const task of tasks) {
    const result = await task;
    console.log(result);
  }
  console.log("All tasks completed");
};

const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

const tasks = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

asyncSeriesExecuter(tasks);

// Output:
// "Completing 3"
// "Completing 1"
// "Completing 7"
// "Completing 2"
// "Completing 5"
