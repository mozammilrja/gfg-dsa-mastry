// //Easy

// function debounce(callback, delay, immediate = false) {
//   let timer;
//   return function (...args) {
//     const context = this;
//     const callNow = immediate && !timer;

//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       timer = null;
//       if (!immediate) {
//         callback.apply(context, args);
//       }
//     }, delay);

//     if (callNow) {
//       callback.apply(context, args);
//     }
//   };
// }

// // Example function to handle scroll
// const handleScroll = () => {
//   console.log("Scroll event triggered");
// };

// // Debounce the handleScroll function
// const debouncedHandleScroll = debounce(handleScroll, 1000, true);

// // Attach the debounced function to the scroll event
// window.addEventListener("scroll", debouncedHandleScroll);

function debounce(fun, delay) {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}

const debouncedLog = debounce(function (...args) {
  console.log("Debounced log:", ...args);
}, 1000);

debouncedLog(1, 2, 3); // Will log "Debounced log: 1 2 3" after 1 second
debouncedLog(4, 5, 6); // Resets the timer and will log "Debounced log: 4 5 6" after 1 second

const debouncedSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 1000);

debouncedSearch("Hello");
debouncedSearch("Hello, W");
debouncedSearch("Hello, World"); // Only this one executes after 1s

