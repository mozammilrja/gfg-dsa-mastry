const root = document.getElementById("root");
const target = document.getElementById("target");

const generateSelector = function (root, target) {
  const selectors = [];

  // Traverse from target to root
  while (target !== root) {
    // Calculate nth-child index
    const nthChild = Array.from(target.parentNode.children).indexOf(target) + 1;
    // Build the CSS selector for the current target
    const selector = `${target.tagName.toLowerCase()}:nth-child(${nthChild})`;
    // Add the selector to the list
    selectors.unshift(selector);
    // Move to the parent element
    target = target.parentNode;
  }

  // Add the root element to the selector list
  selectors.unshift(`${root.tagName.toLowerCase()}`);

  // Join all parts of the selector path
  return selectors.join(" > ");
};

console.log(generateSelector(root, target));

// Output:
// "div[id='root'] > section:nth-child(2) > p:nth-child(1) > span:nth-child(1) > button:nth-child(2)"
