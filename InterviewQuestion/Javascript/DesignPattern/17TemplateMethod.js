// // Abstract Class
// class DataProcessor {
//   process() {
//     this.readData();
//     this.processData();
//     this.writeData();
//   }

//   readData() {
//     throw new Error("readData() must be implemented by the subclass");
//   }

//   processData() {
//     throw new Error("processData() must be implemented by the subclass");
//   }

//   writeData() {
//     throw new Error("writeData() must be implemented by the subclass");
//   }
// }

// // Concrete Class for CSV Processing
// class CsvDataProcessor extends DataProcessor {
//   readData() {
//     console.log("Reading data from CSV file");
//     this.data = "name,age\nJohn,30\nJohn,25";
//   }

//   processData() {
//     console.log("Processing CSV data");
//     this.data = this.data.split("\n").map((row) => row.split(","));
//   }

//   writeData() {
//     console.log("Writing data to CSV file");
//     console.log(this.data);
//   }
// }

// // Usage Example
// const csvProcessor = new CsvDataProcessor();
// csvProcessor.process();
// // Output:
// // Reading data from CSV file
// // Processing CSV data
// // Writing data to CSV file

// Abstract Class
class Game {
  play() {
    this.initialize();
    this.startPlay();
    this.endPlay();
  }

  initialize() {
    throw new Error("initialize() must be implemented by the subclass");
  }

  startPlay() {
    throw new Error("startPlay() must be implemented by the subclass");
  }

  endPlay() {
    throw new Error("endPlay() must be implemented by the subclass");
  }
}

// Concrete Class for Chess
class Chess extends Game {
  initialize() {
    console.log("Initializing Chess Game...");
  }

  startPlay() {
    console.log("Starting Chess Game...");
  }

  endPlay() {
    console.log("Ending Chess Game...");
  }
}

// Concrete Class for Football
class Football extends Game {
  initialize() {
    console.log("Initializing Football Game...");
  }

  startPlay() {
    console.log("Starting Football Game...");
  }

  endPlay() {
    console.log("Ending Football Game...");
  }
}

// Usage Example
const chessGame = new Chess();
chessGame.play();
// Output:
// Initializing Chess Game...
// Starting Chess Game...
// Ending Chess Game...

const footballGame = new Football();
footballGame.play();
// Output:
// Initializing Football Game...
// Starting Football Game...
// Ending Football Game...
