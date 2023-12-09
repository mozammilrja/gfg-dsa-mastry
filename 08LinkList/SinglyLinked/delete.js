// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function printlist(head) {
//   let curr = head;
//   let string = "";
//   while (curr !== null) {
//     string += curr.data + " ";
//     curr = curr.next;
//   }
//   return string;
// }
// // delete the end of the node
// function delEnd(head) {
//   if (head === null || head.next === null) {
//     return null;
//   } else {
//     let current = head;
//     let previous = null;

//     while (current.next !== null) {
//       previous = current;
//       current = current.next;
//     }

//     if (previous !== null) {
//       previous.next = null;
//     } else {
//       head = null;
//     }

//     return head;
//   }
// }
// // delete the  start of the node

// function delHead(head) {
//   if (head === null) return null;
//   else {
//     let temp = head.next;
//     delete head;
//     return temp;
//   }
// }

// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// console.log(printlist(head));
// head = delHead(head);
// head = delEnd(head);
// console.log(printlist(head));

// Insert at given position in Singly Linked List in Javascript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertGivenPositions(head, position, data) {
  let temp = new Node(data);

  if (position === 1) {
    temp.next = head;
    return temp;
  }

  let current = head;

  for (let i = 1; i < position - 2 && current !== null; i++) {
    current = current.next;
  }

  if (current === null) {
    return head;
  }

  temp.next = current.next;
  current.next = temp;

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
head.next.next = new Node(30);

console.log(printList(head));
head = insertGivenPositions(head, 1, 50);
console.log(printList(head));
