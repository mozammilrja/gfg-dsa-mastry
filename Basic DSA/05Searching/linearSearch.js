function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if target is found
        }
    }
    return -1; // Return -1 if target is not found
}

// Example usage:
let arr = [4, 2, 7, 1, 9];
let target = 7;
let index = linearSearch(arr, target);
console.log("Linear Search:");
if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found in the array`);
}
