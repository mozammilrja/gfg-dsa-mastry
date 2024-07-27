function* arrayIterator(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('i', i)
    yield array[i];
  }
}

// Usage
const array = [1, 2, 3, 4];
const iterator = arrayIterator(array);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
