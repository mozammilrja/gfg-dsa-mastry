function nextAlphabeticalElement(letters, target) {
    let low = 0;
    let high = letters.length - 1;
    let result = letters[0]; // Initialize with the first element (circular array)

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (letters[mid] > target) {
            result = letters[mid]; // Update potential result
            high = mid - 1; // Search left half
        } else {
            low = mid + 1; // Search right half
        }
    }

    return result; // Return the next alphabetical element
}


const letters = ['a', 'c', 'f', 'h'];
console.log(nextAlphabeticalElement(letters, 'f')); // Output: 'h'
console.log(nextAlphabeticalElement(letters, 'h')); // Output: 'a'
console.log(nextAlphabeticalElement(letters, 'b')); // Output: 'c'
console.log(nextAlphabeticalElement(letters, 'z')); // Output: 'a'
