const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function (event) {
  alert("div clicked");
});

form.addEventListener("click", function (event) {
  alert("form clicked");
});

button.addEventListener("click", function (event) {
  alert("button clicked");
});
