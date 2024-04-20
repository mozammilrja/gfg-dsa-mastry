class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // Capacity of the cache
    this.map = new Map(); // Map to store key-value pairs
    this.head = { key: null, value: null, prev: null, next: null }; // Head sentinel node
    this.tail = { key: null, value: null, prev: this.head, next: null }; // Tail sentinel node
    this.head.next = this.tail; // Link head to tail
  }

  get(key) {
    if (this.map.has(key)) {
      // Check if key exists in the cache
      const node = this.map.get(key); // Get node from the map
      this.moveToHead(node); // Move the node to the head of the list
      return node.value; // Return the value
    }
    return -1; // Key not found, return -1
  }

  set(key, value) {
    if (this.map.has(key)) {
      // If key exists in the cache
      const node = this.map.get(key); // Get the node from the map
      node.value = value; // Update the value
      this.moveToHead(node); // Move the node to the head of the list
    } else {
      if (this.map.size === this.capacity) {
        // If cache is full
        const tailKey = this.tail.prev.key; // Get the key of the tail node
        this.removeNode(this.tail.prev); // Remove the tail node from the list
        this.map.delete(tailKey); // Delete the tail node from the map
      }
      const newNode = { key, value, prev: this.head, next: this.head.next }; // Create a new node
      this.head.next.prev = newNode; // Link the new node to the head
      this.head.next = newNode; // Link the head to the new node
      this.map.set(key, newNode); // Add the new node to the map
    }
  }

  moveToHead(node) {
    this.removeNode(node); // Remove the node from its current position
    node.prev = this.head; // Link the node to the head
    node.next = this.head.next; // Link the node to the next node after head
    this.head.next.prev = node; // Link the next node after head to the node
    this.head.next = node; // Link the head to the node
  }

  removeNode(node) {
    const prevNode = node.prev; // Get the previous node
    const nextNode = node.next; // Get the next node
    prevNode.next = nextNode; // Link the previous node to the next node
    nextNode.prev = prevNode; // Link the next node to the previous node
  }
}

// Example usage
const cache = new LRUCache(2);
cache.set(1, 10);
cache.set(2, 20);
console.log(cache.get(1)); // Output: 10
cache.set(3, 30);
console.log(cache.get(2)); // Output: -1
cache.set(4, 40);
console.log(cache.get(1)); // Output: -1
console.log(cache.get(3)); // Output: 30
console.log(cache.get(4)); // Output: 40
