function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }
  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

// Example usage:
const n = 3; // Number of disks
const source = "A";
const auxiliary = "B";
const destination = "C";
towerOfHanoi(n, source, auxiliary, destination);
