class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var reverseList = function(head) {
    let curr = head;
    let prev = null;

    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};

function printList(head) {
    let curr = head;
    let result = [];
    while (curr !== null) {
        result.push(curr.data);
        curr = curr.next;
    }
    console.log(result.join(" -> "));
}

// Create and populate the linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original List:");
printList(head);

head = reverseList(head);

console.log("Reversed List:");
printList(head);
