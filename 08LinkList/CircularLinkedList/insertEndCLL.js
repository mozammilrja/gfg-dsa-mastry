class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// // naive method
// function insertEnd(head, data) {
//   let temp = new Node(data);

//   if (head === null) {
//     temp.next = temp;
//     temp.prev = temp;
//     return temp;
//   }

//   let curr = head;
//   while (curr.next !== head) {
//     curr = curr.next;
//   }

//   curr.next = temp;
//   temp.prev = curr;
//   temp.next = head;
//   head.prev = temp;

//   return head;
// }
// naive method
function insertEnd(head, data) {
  let temp = new Node(data);

  if (head === null) {
    temp.next = temp;
    return temp;
  }
  temp.next = head.next;
  head.next = temp;
  [temp.data, head.data] = [head.data, temp.data];

  return temp;
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

head = insertEnd(head, 45);

console.log("Inserted Circular Linked List:", printList(head));
// Time complexity = O(1)
// Space complexity = O(1)
