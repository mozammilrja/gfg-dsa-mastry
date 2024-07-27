const cachedApiCall = function (cacheDuration) {
  const cache = new Map();

  return async function (url, options) {
    const now = Date.now();
    const cacheKey = url + JSON.stringify(options);

    if (cache.has(cacheKey)) {
      const { timestamp, data } = cache.get(cacheKey);
      if (now - timestamp < cacheDuration) {
        console.log("Returning cached response");
        return Promise.resolve(data);
      }
      cache.delete(cacheKey); // Invalidate the cache entry
    }

    console.log("Making new API call");
    const response = await fetch(url, options);
    const data = await response.json();
    cache.set(cacheKey, { timestamp: now, data });
    return data;
  };
};

const call = cachedApiCall(1500);

// First call: an API call will be made and its response will be cached
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log(a)
);

// Cached response will be returned (it will be quick)
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 700);

// A fresh API call is made as time for cached entry is expired
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 2000);
