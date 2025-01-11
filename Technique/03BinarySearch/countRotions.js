function countRotations(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        // If the array is already sorted, return the first index
        if (arr[low] <= arr[high]) {
            return low;
        }

        let mid = Math.floor((low + high) / 2);
        let prev = (mid - 1 + arr.length) % arr.length;
        let next = (mid + 1) % arr.length;

        // Check if mid is the smallest element
        if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
            return mid;
        }

        // Decide which half to search next
        if (arr[mid] <= arr[high]) {
            high = mid - 1; // Search in the left half
        } else {
            low = mid + 1; // Search in the right half
        }
    }

    return -1; // Should not occur in a rotated sorted array
}



const arr = [11, 12, 15, 18, 2, 5, 6, 8];
const rotations = countRotations(arr);
console.log(`The array is rotated ${rotations} times.`); // Output: 4
