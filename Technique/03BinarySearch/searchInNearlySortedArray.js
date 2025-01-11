function searchInNearlySortedArray(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Check mid and its neighbors
        if (arr[mid] === target) {
            return mid;
        }
        if (mid > low && arr[mid - 1] === target) {
            return mid - 1;
        }
        if (mid < high && arr[mid + 1] === target) {
            return mid + 1;
        }

        // Adjust search space
        if (target < arr[mid]) {
            high = mid - 2; // Skip mid and its neighbor
        } else {
            low = mid + 2; // Skip mid and its neighbor
        }
    }

    return -1; // Target not found
}


const arr = [10, 3, 40, 20, 50, 80, 70];
const target = 40;

const index = searchInNearlySortedArray(arr, target);
if (index !== -1) {
    console.log(`Element ${target} found at index ${index}.`);
} else {
    console.log(`Element ${target} not found.`);
}
