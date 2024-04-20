// // Pairwise Swap Nodes of linked list in JS
// // Naive method
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function printList(head) {
//   let curr = head;
//   let str = "";
//   while (curr !== null) {
//     str += curr.data + " ";
//     curr = curr.next;
//   }
//   return str;
// }

// function PairwiseSwap(head) {
//   let curr = head;
//   while (curr !== null && curr.next !== null) {
//     [curr.data, curr.next.data] = [curr.next.data, curr.data];
//     curr = curr.next.next;
//   }
//   return head;
// }

// // Example usage
// let head = new Node(10);
// let temp1 = new Node(15);
// let temp2 = new Node(12);
// let temp3 = new Node(20);

// head.next = temp1;
// temp1.next = temp2;
// temp2.next = temp3;

// console.log(printList(head));
// head = PairwiseSwap(head);
// console.log(printList(head));

// Pairwise Swap Nodes of linked list in JS
// Efficient method
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function printList(head) {
  let curr = head;
  let str = "";
  while (curr !== null) {
    str += curr.data + " ";
    curr = curr.next;
  }
  return str;
}

function PairwiseSwap(head) {
  if (head === null || head.next === null) return head;
  let curr = head.next.next;
  let prev = head;
  head = head.next;
  head.next = prev;
  while (curr !== null && curr.next !== null) {
    prev.next = curr.next;
    prev = curr;
    let next = curr.next.next;
    curr.next.next = curr;
    curr = next;
  }
  prev.next = curr;
  return head;
}

// Example usage
let head = new Node(10);
let temp1 = new Node(15);
let temp2 = new Node(12);
let temp3 = new Node(20);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;

console.log("Original List:", printList(head));
head = PairwiseSwap(head);
console.log("After Pairwise Swap:", printList(head));
