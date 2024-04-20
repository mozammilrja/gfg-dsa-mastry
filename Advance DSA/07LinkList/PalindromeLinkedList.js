class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isPalindrome(head) {
  // Find the middle of the linked list using slow and fast pointers
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  let curr = slow;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Compare the first half of the original linked list with the reversed second half
  let left = head;
  let right = prev;
  while (right !== null) {
    if (left.data !== right.data) {
      return false; // Not a palindrome
    }
    left = left.next;
    right = right.next;
  }
  return true; // Palindrome
}

// Example usage
const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(2);
head1.next.next.next = new Node(1);

const head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);
head2.next.next.next = new Node(4);

console.log("Is list 1 a palindrome?", isPalindrome(head1)); // Output: true
console.log("Is list 2 a palindrome?", isPalindrome(head2)); // Output: false
// Time Complexity: O(N),  