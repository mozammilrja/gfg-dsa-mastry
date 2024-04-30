class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function kthSmallest(root, k) {
    // Counter to keep track of the number of nodes visited so far
    let count = 0;
    // Variable to store the Kth smallest element
    let result = null;

    // Helper function to perform inorder traversal
    function inorder(node) {
        if (!node) return;

        // Traverse left subtree
        inorder(node.left);

        // Increment count for the current node
        count++;

        // If the count equals K, set the result to the value of the current node
        if (count === k) {
            result = node.val;
            return;
        }

        // Traverse right subtree
        inorder(node.right);
    }

    // Start the inorder traversal from the root
    inorder(root);

    // Return the Kth smallest element
    return result;
}

// Example usage:
let root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

let k = 1;
console.log(`The ${k}th smallest element in the BST is:`, kthSmallest(root, k)); // Output: 1
