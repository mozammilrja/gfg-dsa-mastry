// Mock functions for API calls
function api1() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("API1 success"), 1000)
  );
}

function api2() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("API2 failed"), 1000)
  );
}

function api3() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("API3 success"), 1000)
  );
}

function api4() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("API4 success"), 1000)
  );
}

function api5() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("API5 success"), 1000)
  );
}

// Function to retry a promise with a specified number of attempts
function retryPromise(promiseFn, retries) {
  return new Promise((resolve, reject) => {
    function attempt() {
      console.log("retries", retries);
      promiseFn()
        .then(resolve)
        .catch((error) => {
          if (retries === 0) {
            reject(error);
          } else {
            retries--;
            attempt();
          }
        });
    }
    attempt();
  });
}

// Function to execute the API calls in sequence with error handling
async function executeApis() {
  try {
    const result1 = await api1();
    console.log(result1);
  } catch (error) {
    console.error("API1 error:", error);
  }

  try {
    const result2 = await retryPromise(api2, 3); // Retry API2 up to 3 times
    console.log(result2);
  } catch (error) {
    console.error("API2 error:", error);
  }

  try {
    const result3 = await api3();
    console.log(result3);
  } catch (error) {
    console.error("API3 error:", error);
  }

  try {
    const result4 = await api4();
    console.log(result4);
  } catch (error) {
    console.error("API4 error:", error);
  }

  try {
    const result5 = await api5();
    console.log(result5);
  } catch (error) {
    console.error("API5 error:", error);
  }
}

// Execute the API calls
executeApis();
