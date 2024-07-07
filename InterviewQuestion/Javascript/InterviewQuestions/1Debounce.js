//Easy

function debounce(callback, delay, immediate = false) {
  let timer;
  return function (...args) {
    const context = this;
    const callNow = immediate && !timer;

    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) {
        callback.apply(context, args);
      }
    }, delay);

    if (callNow) {
      callback.apply(context, args);
    }
  };
}

// Example function to handle scroll
const handleScroll = () => {
  console.log("Scroll event triggered");
};




// Debounce the handleScroll function
const debouncedHandleScroll = debounce(handleScroll, 1000, true);

// Attach the debounced function to the scroll event
window.addEventListener("scroll", debouncedHandleScroll);
