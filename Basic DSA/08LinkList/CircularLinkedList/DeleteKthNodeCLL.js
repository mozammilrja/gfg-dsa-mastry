class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function DeleteKth(head, k) {
  if (head === null) {
    return head;
  }
  if (k == 1) {
    return DeleteKth(head);
  }
  let current = head;
  for (let i = 0; i < k - 2; i++) {
    current = current.next;
  }
  current.next = current.next.next;

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

head = DeleteKth(head, 4);

console.log("Deleted Circular Linked List:", printList(head));
// Time complexity = O(1)
// Space complexity = O(1)
