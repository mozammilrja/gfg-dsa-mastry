class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    // Push element x onto stack
    push(x) {
        this.queue1.push(x);
    }

    // Removes the element on top of the stack and returns that element
    pop() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        const poppedElement = this.queue1.shift();

        // Swap the queues
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return poppedElement;
    }

    // Get the top element
    top() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        const topElement = this.queue1.shift();
        this.queue2.push(topElement);

        // Swap the queues
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return topElement;
    }

    // Returns whether the stack is empty
    empty() {
        return this.queue1.length === 0;
    }
}

// Example usage:
const myStack = new MyStack();
console.log(myStack.push(1)); // Output: undefined
console.log(myStack.push(2)); // Output: undefined
console.log(myStack.top());   // Output: 2
console.log(myStack.pop());   // Output: 2
console.log(myStack.empty()); // Output: false
