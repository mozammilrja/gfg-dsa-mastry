const fetchWithTimeout = function (url, duration) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timerId = null;

    fetch(url, { signal })
      .then((resp) => {
        resp.json().then((e) => {
          clearTimeout(timerId);
          resolve(e);
        });
      })
      .catch((error) => {
        reject(error);
      });

    timerId = setTimeout(() => {
      controller.abort;
    }, duration);
  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/5", 100)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });

// Aborted
// error
