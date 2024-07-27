// Component Interface
class FileSystemComponent {
  getName() {}
  getSize() {}
  print() {}
}

// Leaf (File)
class File extends FileSystemComponent {
  constructor(name, size) {
    super();
    this.name = name;
    this.size = size;
  }

  getName() {
    return this.name;
  }

  getSize() {
    return this.size;
  }

  print() {
    console.log(`File: ${this.name}, Size: ${this.size} bytes`);
  }
}

// Composite (Directory)
class Directory extends FileSystemComponent {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  getName() {
    return this.name;
  }

  getSize() {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }

  print() {
    console.log(`Directory: ${this.name}`);
    this.children.forEach((child) => child.print());
  }
}

// Usage Example

// Create files
const file1 = new File("file1.txt", 1000);
const file2 = new File("file2.jpg", 2000);
const file3 = new File("file3.mp3", 3000);

// Create directories
const dir1 = new Directory("dir1");
const dir2 = new Directory("dir2");

// Add files to directories
dir1.add(file1);
dir1.add(file2);

dir2.add(file3);
dir2.add(dir1); // Add dir1 to dir2

// Print directory structure and sizes
dir2.print();
console.log(`Total size of ${dir2.getName()}: ${dir2.getSize()} bytes`);
