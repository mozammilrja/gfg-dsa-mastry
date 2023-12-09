// // Itrative solutions
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function SearchLinkedList(head, x) {
//   let position = 1;
//   let current = head;
//   while (current !== null) {
//     if (current.data === x) {
//       return position;
//     }
//     current = current.next;
//     position++;
//   }
//   return -1;
// }

// function printList(head) {
//   let current = head;
//   let result = "";
//   while (current !== null) {
//     result += current.data + " ";
//     current = current.next;
//   }
//   return result;
// }

// let head = new Node(5);
// head.next = new Node(10);
// head.next.next = new Node(20);
// head.next.next.next = new Node(30);
// head.next.next.next.next = new Node(40);
// head.next.next.next.next.next = new Node(50);
// head.next.next.next.next.next.next = new Node(60);
// head.next.next.next.next.next.next.next = new Node(70);
// head.next.next.next.next.next.next.next.next = new Node("raja");
// console.log(printList(head));
// // head = SearchLinkedList();
// console.log(
//   "Positions of elemens search linklist:",
//   SearchLinkedList(head, "raja")
// );
// console.log(printList(head));
// // time coplexity = o(n)
// // Aux space = o(1)

// Recursive solutions
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// function searchLinkedListRecursive(head, x) {
//   if (head === null) {
//     return -1;
//   }
//   if (head.data == x) {
//     return 1;
//   }
//   let position = searchLinkedListRecursive(head.next, x);
//   if (position === -1) {
//     return -1;
//   }
//   return position + 1;
// }
function searchLinkedListRecursive(head, x, position = 1) {
  if (head === null) {
    return -1;
  }

  if (head.data === x) {
    return position;
  }

  return searchLinkedListRecursive(head.next, x, position + 1);
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

let head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(20);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(40);
head.next.next.next.next.next = new Node(50);
head.next.next.next.next.next.next = new Node(60);
head.next.next.next.next.next.next.next = new Node(70);
head.next.next.next.next.next.next.next.next = new Node("raja");
console.log(printList(head));
// head = SearchLinkedList();
console.log(
  "Positions of elemens search linklist:",
  searchLinkedListRecursive(head, "raja")
);
console.log(printList(head));
