// Higher order functions in javascript.

function HigherOrerFun(func) {
    console.log("You are inside a  higher order function");
    func()
}

function callback() {
  console.log("You are inside a callback");
}

HigherOrerFun(callback);
