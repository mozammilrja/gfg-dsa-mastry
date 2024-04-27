class Node {
    constructor(data) {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}

function minValue(root) {
    // If tree is empty, return -1
    if (root === null) {
        return -1;
    }
    
    // Traverse the left subtree until reaching the leftmost node
    while (root.left !== null) {
        root = root.left;
    }
    
    // Return the key of the leftmost nodes
    return root.key;
}

// Example usage:
let root1 = new Node(5);
root1.left = new Node(4);
root1.left.left = new Node(3);
root1.left.left.left = new Node(1);
root1.right = new Node(6);
root1.right.right = new Node(7);

console.log(minValue(root1)); // Output: 1

let root2 = new Node(9);
root2.right = new Node(10);
root2.right.right = new Node(11);

console.log(minValue(root2)); // Output: 9
