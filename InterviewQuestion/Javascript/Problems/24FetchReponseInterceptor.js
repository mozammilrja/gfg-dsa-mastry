//store the original fetch
const originalFetch = window.fetch;

//request interceptor
window.requestInterceptor = (args) => {
  return args;
};
//response interceptor
window.responseInterceptor = (response) => {
  return response;
};

//overide the original fetch
window.fetch = async (...args) => {
  args = requestInterceptor(args);
  let response = await originalFetch(...args);

  //response interceptor
  response = responseInterceptor(response);

  return response;
};

// request interceptor
// perform all the pre-request actions
window.requestInterceptor = (args) => {
  // original request does not contains page info
  // assign the pagination in the interceptor
  args[0] = args[0] + "2";
  return args;
};

// response interceptor
// perform all the post-response actions
window.responseInterceptor = (response) => {
  // convert the value to json
  // to avoid parsing every time
  return response.json();
};

fetch("https://jsonplaceholder.typicode.com/todos/").then((json) =>
  console.log(json)
);

// Output:
// {
//   "userId": 1,
//   "id": 2,
//   "title": "quis ut nam facilis et officia qui",
//   "completed": false
// }
