const filterObject = (arr, filter) => {
  if (typeof filter === "string") {
    for (const entry of arr) {
      for (const [key, val] of Object.entries(entry)) {
        if (val === filter) {
          return entry;
        }
      }
    }
  } else if (filter in arr) {
    return arr[filter];
  }
  {
    return undefined;
  }
};

const arr = [
  { name: "Amir", id: "1" },
  { name: "Samlan", id: "2" },
  { name: "Shahrukh", id: "0" },
];

console.log(filterObject(arr, 0));
console.log(filterObject(arr, "Amir"));
console.log(filterObject(arr, "0"));
console.log(filterObject(arr, "-1"));

// Output:
// { name: "Amir", id: "1" }
// { name: "Amir", id: "1" }
// { name: "Shahrukh", id: "0" }
// undefined
