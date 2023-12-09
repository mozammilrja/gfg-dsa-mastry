class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertValuesInMiddle(head, x) {
  if (head === null) {
    return null
  }
  let 
}

function printList(head) {
  let current = head;
  let result = "";
  while (current !== null) {
    result += current.data + " ";
    current = current.next;
  }
  return result;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);
head.next.next.next.next.next.next = new Node(70);
console.log("Original List:", printList(head));
let middleNode = middleOfLinkList(head);
console.log("Middle of inserted the Linked List:", middleNode.data);
