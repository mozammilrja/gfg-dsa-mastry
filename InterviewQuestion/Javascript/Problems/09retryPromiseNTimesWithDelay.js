// const retryWithDelay = async (
//   operation,
//   retries = 3,
//   delay = 50,
//   finalErr = "Retry failed"
// ) => {
//   try {
//     await fn();
//   } catch (error) {
//     if (retries <= 0) {
//       return Promise.reject(finalErr);
//     }
//     await wait(delay);

//     return retryWithDelay(fn, retries - 1, delay, finalErr);
//   }
// };

// // Input:
// // Test function
// const getTestFunc = () => {
//   let callCounter = 0;
//   return async () => {
//     callCounter += 1;
//     // if called less than 5 times
//     // throw error
//     if (callCounter < 5) {
//       throw new Error("Not yet");
//     }
//   };
// };

// // Test the code
// const test = async () => {
//   await retryWithDelay(getTestFunc(), 10);
//   console.log("success");
//   await retryWithDelay(getTestFunc(), 3);
//   console.log("will fail before getting here");
// };

// // Print the result
// test().catch(console.error);

// // Output
// // "success" // 1st test
// // "Retry failed" //2nd test
const retryWithDelay = async (
  operation,
  retries = 3,
  delay = 50,
  finalErr = "Retry failed"
) => {
  try {
    await operation(); // Call the operation function
  } catch (error) {
    if (retries <= 0) {
      throw new Error(finalErr); // Throw final error if no retries left
    }
    await new Promise((resolve) => setTimeout(resolve, delay)); // Wait for the specified delay

    return retryWithDelay(operation, retries - 1, delay, finalErr); // Retry the operation
  }
};

// Input:
// Test function
const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error("Not yet");
    }
  };
};

// Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log("success"); // Should succeed
  await retryWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here"); // Should fail
};

// Print the result
test().catch(console.error);

// Output
// "success" // 1st test
// "Retry failed" // 2nd test
