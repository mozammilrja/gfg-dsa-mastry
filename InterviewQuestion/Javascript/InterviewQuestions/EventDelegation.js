const product = document.querySelector(".products");

product.addEventListener("click", function (e) {
  // Check if the clicked element has a class name
  if (e.target && e.target.className) {
    // Get the base URL (without any current hash or query string)
    const baseUrl = window.location.origin + window.location.pathname;

    // Construct the new URL by appending the class name of the clicked element
    window.location.href = baseUrl + "/" + e.target.className;
  }
});
