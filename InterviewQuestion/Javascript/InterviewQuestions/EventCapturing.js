const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener(
  "click",
  function () {
    alert("click div");
  },
  { capture: true }
);

form.addEventListener(
  "click",
  function (event) {
    event.stopPropagation(); // stop propagation
    alert("click form");
  },
  { capture: true }
);

button.addEventListener(
  "click",
  function () {
    alert("click button");
  },
  { capture: true }
);
