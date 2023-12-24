class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function insertStart(head, x) {
  let temp = new Node(x);

  if (head === null) {
    temp.next = temp;
    return temp;
  }
  temp.next = head.next;
  head.next = temp;
  [head.data, temp.data] = [temp.data, head.data];
  return head;
}

function printList(head) {
  let current = head;
  let result = "";
  do {
    result += current.data + " ";
    current = current.next;
  } while (current !== head);

  return result;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head;

console.log("Original Circular Linked List:", printList(head));
printList(head);

head = insertStart(head, 45);

console.log("Inserted Circular Linked List:", printList(head));
// Time complexity = O(n)
// Space complexity = O(1)
