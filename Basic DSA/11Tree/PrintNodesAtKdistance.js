// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// function kDistance(root, k) {
//   if (root === null) {
//     return;
//   }
//   if (k === 0) {
//     console.log(root.data);
//   } else {
//     kDistance(root.left, k - 1), kDistance(root.right, k - 1);
//   }
// }

// let root = new Node(10);
// root.left = new Node(20);
// root.right = new Node(30);
// root.right.left = new Node(40);
// root.right.left = new Node(50);
// root.left.right = new Node(60);

// console.log(kDistance(root, 2));

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function kDistance(root, k) {
  if (root === null) {
    return;
  }
  if (k === 0) {
    console.log(root.data);
  } else {
    kDistance(root.left, k - 1);
    kDistance(root.right, k - 1);
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.right.left = new Node(50);
root.right.right = new Node(60);

console.log("Nodes at distance 2 from the root:");
kDistance(root, 2);
