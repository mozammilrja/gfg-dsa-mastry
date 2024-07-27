// class BrowserHistory {
//   constructor() {
//     this.history = [];
//     this.index = -1;
//   }
//   // add new url at ndext index
//   visit(url) {
//     this.history[++this.index] = url;
//     this.history.length = this.index + 1;
//   }
//   //return  the url of  the current index
//   current() {
//     return this.history[this.index];
//   }

//   //got to previous entry
//   backward() {
//     this.index = Math.max(0, --this.index);
//   }

//   //got to next entery
//   forward() {
//     this.index = Math.min(this.history.length - 1, ++this.index);
//   }
// }

// const bh = new BrowserHistory();

// bh.visit("A");
// console.log(bh.current());

// bh.visit("B");
// console.log(bh.current());

// bh.visit("C");
// console.log(bh.current());

// bh.backward();
// console.log(bh.current());

// bh.visit("D");
// console.log(bh.current());

// bh.backward();
// console.log(bh.current());

// bh.forward();
// console.log(bh.current());

// // Output:
// // "A"
// // "B"
// // "C"
// // "B"
// // "D"
// // "B"
// // "D"

const BrowserHistory = function () {
  this.history = [];
  this.index = -1;

  // add new url at ndext index
  this.visit = function (url) {
    this.history[++this.index] = url;
    this.history.length = this.index + 1;
  };
  //return  the url of  the current index
  this.current = function () {
    return this.history[this.index];
  };

  //got to previous entry
  this.backward = function () {
    this.index = Math.max(0, --this.index);
  };

  //got to next entery

  this.forward = function () {
    this.index = Math.min(this.history.length - 1, ++this.index);
  };
};

const bh = new BrowserHistory();

bh.visit("A");
console.log(bh.current());

bh.visit("B");
console.log(bh.current());

bh.visit("C");
console.log(bh.current());

bh.backward();
console.log(bh.current());

bh.visit("D");
console.log(bh.current());

bh.backward();
console.log(bh.current());

bh.forward();
console.log(bh.current());

// Output:
// "A"
// "B"
// "C"
// "B"
// "D"
// "B"
// "D"
