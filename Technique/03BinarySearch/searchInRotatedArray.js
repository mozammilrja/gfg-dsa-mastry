function searchInRotatedArray(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Check if mid is the target
        if (arr[mid] === target) {
            return mid;
        }

        // Determine which half is sorted
        if (arr[low] <= arr[mid]) {
            // Left half is sorted
            if (target >= arr[low] && target < arr[mid]) {
                high = mid - 1; // Search left
            } else {
                low = mid + 1; // Search right
            }
        } else {
            // Right half is sorted
            if (target > arr[mid] && target <= arr[high]) {
                low = mid + 1; // Search right
            } else {
                high = mid - 1; // Search left
            }
        }
    }

    return -1; // Target not found
}



const arr = [11, 12, 15, 18, 2, 5, 6, 8];
const target = 5;

const index = searchInRotatedArray(arr, target);
if (index !== -1) {
    console.log(`Element ${target} found at index ${index}.`);
} else {
    console.log(`Element ${target} not found.`);
}
