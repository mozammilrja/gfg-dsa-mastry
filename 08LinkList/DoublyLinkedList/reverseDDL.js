class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function reverseDoublyLinkedList(head) {
  if (head === null) {
    return head;
  }

  let current = head;
  let prev = null;

  while (current !== null) {
    [current.prev, current.next] = [current.next, current.prev];
    prev = current;
    current = current.prev;
  }

  return prev;
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

head = reverseDoublyLinkedList(head);

console.log("Reversed Doubly Linked List:", printList(head));

// time complexity o(n)
