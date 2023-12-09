class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function deleteDoublyLinkedListEnd(head) {
  if (head === null || head.next === null) return null;

  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.prev.next = null;
  return head;
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
head.next.prev = head;
head.next.next = new Node(30);
head.next.next.prev = head.next;

console.log("Original Doubly Linked List:", printList(head));

head = deleteDoublyLinkedList(head);

console.log("Deleted Doubly Linked List:", printList(head));

// time complexity o(n)
