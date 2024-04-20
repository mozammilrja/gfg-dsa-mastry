class Node {
  constructor(val) {
    this.val = val; // Value stored in the node
    this.next = null; // Pointer to the next node
    this.prev = null; // Pointer to the previous node
  }
}

function mergeTwoLists(l1, l2) {
  const dummy = new Node(); // Dummy node for the merged list
  let current = dummy; // Pointer to the current node in the merged list

  // Dummy nodes for the original lists to avoid modifying them
  const dummy1 = new Node();
  const dummy2 = new Node();
  dummy1.next = l1;
  dummy2.next = l2;

  // Iterate through both lists simultaneously
  while (dummy1.next !== null && dummy2.next !== null) {
    if (dummy1.next.val <= dummy2.next.val) {
      current.next = dummy1.next; // Link the current node to the next node of list l1
      dummy1.next.prev = current; // Set the 'prev' pointer for the next node of list l1
      dummy1.next = dummy1.next.next; // Move to the next node of list l1
    } else {
      current.next = dummy2.next; // Link the current node to the next node of list l2
      dummy2.next.prev = current; // Set the 'prev' pointer for the next node of list l2
      dummy2.next = dummy2.next.next; // Move to the next node of list l2
    }
    current = current.next; // Move the current pointer to the next node
  }

  // Link the remaining nodes of either list
  if (dummy1.next !== null) {
    current.next = dummy1.next;
    dummy1.next.prev = current; // Set the 'prev' pointer for the remaining nodes of list l1
  } else {
    current.next = dummy2.next;
    dummy2.next.prev = current; // Set the 'prev' pointer for the remaining nodes of list l2
  }

  // Return the merged list (excluding the dummy node)
  return dummy.next;
}

// Function to print the linked list
function printList(head) {
  let curr = head; // Start from the head of the list
  let string = ""; // Initialize an empty string to store the elements of the list

  // Iterate through the list until curr becomes null
  while (curr !== null) {
    string += curr.val + " "; // Concatenate the value of the current node to the string
    curr = curr.next; // Move to the next node
  }

  return string.trim(); // Return the string, removing any trailing whitespace
}

// Example usage
let head1 = new Node(1);
head1.next = new Node(3);
head1.next.prev = head1;
head1.next.next = new Node(5);
head1.next.next.prev = head1;

let head2 = new Node(2);
head2.next = new Node(4);
head2.next.prev = head2;
head2.next.next = new Node(6);
head2.next.next.prev = head2;

const mergedList = mergeTwoLists(head1, head2);
console.log("List-1: ", printList(head1));
console.log("List-2: ", printList(head2));
console.log("Merged List:", printList(mergedList));
