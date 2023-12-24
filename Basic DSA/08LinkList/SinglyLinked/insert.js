class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertStart(head, x) {
  let temp = new Node(x);
  if (head == null) return temp;
  temp.next = head;
  return temp;
}

function insertEnd(head, x) {
  let temp = new Node(x);
  if (head === null) {
    return temp;
  }
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
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
  console.log(result.trim());
}
let head = null;

head = insertEnd(head, 10);
head = insertEnd(head, 20);
head = insertEnd(head, 30);
head = insertEnd(head, 40);

head = insertStart(head, 5);
head = insertStart(head, 0);

printList(head);



// Insert at given position in Singly Linked List in Javascript

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function insertGivenPositions(head, position, data) {
//   let temp = new Node(data);

//   if (position === 1) {
//     temp.next = head;
//     return temp;
//   }

//   let current = head;

//   for (let i = 1; i < position - 2 && current !== null; i++) {
//     current = current.next;
//   }

//   if (current === null) {
//     return head;
//   }

//   temp.next = current.next;
//   current.next = temp;

//   return head;
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

// console.log(printList(head));
// head = insertGivenPositions(head, 2, 50);
// console.log(printList(head));
