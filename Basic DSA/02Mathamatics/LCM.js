

// Function to calculate GCD using the Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// Function to calculate LCM using the GCD
function lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
}

// Example usage
console.log(lcm(4, 6));  // Output: 12
console.log(lcm(21, 6)); // Output: 42
console.log(lcm(0, 6));  // Output: 0
console.log(lcm(10, 15)); // Output: 30
