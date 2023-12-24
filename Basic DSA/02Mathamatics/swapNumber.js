// swap numbers without using 3rd variables

function swapNumber() {
  let a = 10;
  let b = 20;

  b = a + b;
  a = b - a;
  b = b - a;
  console.log(`a: ${a}, b: ${b}`);
}
swapNumber();
