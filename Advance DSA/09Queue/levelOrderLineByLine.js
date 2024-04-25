// Definition for a binary tree node.
function Node(val) {
  this.val = val;
  this.left = this.right = null;
}

function levelOrder(root) {
  if (!root) return []; // If the root is null, return an empty array

  const result = []; // Array to store the level order traversal
  const queue = [root]; // Initialize queue with root node

  while (queue.length > 0) {
    const levelSize = queue.length; // Get the number of nodes in the current level
    const currentLevel = []; // Array to store nodes of the current level

    // Process nodes of the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // Remove the first node from the queue
      currentLevel.push(node.val); // Push node's value to current level array

      // Add the left and right children of the node to the queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel); // Push the current level array to the result
  }

  // Print each level on a separate line
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].join(" "));
  }
}

// Example usage:
// Create the binary tree
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(70);
root.right.right.right = new Node(80);

// Perform level order traversal line by line
levelOrder(root);
