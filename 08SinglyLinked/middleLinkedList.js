// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function middleOfLinkList(head, x) {
//   if (head === null) {
//     return null;
//   }
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow.next;
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

// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// head.next.next.next = new Node(40);
// head.next.next.next.next = new Node(50);
// head.next.next.next.next.next = new Node(60);
// head.next.next.next.next.next.next = new Node(70);
// console.log(printList(head));
// head = middleOfLinkList(head);
// console.log(printList(head));


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function middleOfLinkList(head) {
  if (head === null) {
    return null;
  }
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
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
console.log("Middle of the Linked List:", middleNode.data);
