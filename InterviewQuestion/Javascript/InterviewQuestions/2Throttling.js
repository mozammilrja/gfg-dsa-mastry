// //Medium

// function throttle(func, limit) {
//   let lastFunc;
//   let lastRan;
//   return function (...args) {
//     const context = this;
//     if (!lastRan) {
//       func.apply(context, args);
//       lastRan = Date.now();
//     } else {
//       clearTimeout(lastFunc);
//       lastFunc = setTimeout(function () {
//         if (Date.now() - lastRan >= limit) {
//           func.apply(context, args);
//           lastRan = Date.now();
//         }
//       }, limit - (Date.now() - lastRan));
//     }
//   };
// }

// // Example function to handle scroll
// const handleScroll = () => {
//   console.log("Scroll event triggered");
// };

// // Throttle the handleScroll function
// const throttledHandleScroll = throttle(handleScroll, 1000);

// // Attach the throttled function to the scroll event
// window.addEventListener("scroll", throttledHandleScroll);




function throttle(fun, delay) {
  let shouldCall = true;
  return function (...args) {
    if (!shouldCall) return;

    fun.apply(this, args);
    shouldCall = false;
    setTimeout(() => {
      shouldCall = true;
    }, delay);
  };
}

const throttledFunction = throttle(() => {
  console.log("Throttled function executed!");
}, 1000);

throttledFunction(); // Executes immediately
throttledFunction(); // Ignored if called within 1 second
