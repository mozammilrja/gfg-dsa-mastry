class Pair {
  constructor(a, b) {
    this.start = a;
    this.finish = b;
  }
}

function maxActivities(arr) {
  arr.sort((a, b) => a.finish - b.finish);
  let prev = 0;
  let res = 1;

  for (let curr = 1; curr < arr.length; curr++) {
    if (arr[curr].start >= arr[prev].finish) {
      res++;
      prev = curr;
    }
  }

  return res;
}

const arr = [new Pair(12, 25), new Pair(10, 20), new Pair(20, 30)];
console.log(maxActivities(arr));
