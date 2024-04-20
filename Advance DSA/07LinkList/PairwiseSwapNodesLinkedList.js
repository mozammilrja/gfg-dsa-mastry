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

function pairwiseSwap(head) {
  let curr = head;
  while (curr !== null && curr.next !== null) {
    [curr.data, curr.next.data] = [curr.next.data, curr.data];
    curr = curr.next.next;
  }
  return head;
}

let head = new Node(10);
let temp1 = new Node(15);
let temp2 = new Node(12);
let temp3 = new Node(20);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;

console.log("Before:",printList(head)); // Output: 10 15 20
pairwiseSwap(head);
console.log("After:",printList(head)); // Output: 15 10 20 12 
// Time complexity: O(1)
