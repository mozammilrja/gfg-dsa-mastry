// your code goes here....

const arr = [];

const onAdd = (eventName, items, array) => {
  console.log("items were added", items);
};

const onAddAgain = (eventName, items, array) => {
  console.log("items were added again", items);
};

arr.addListener("add", onAdd);

arr.addListener("add", onAddAgain);

arr.addListener("remove", (eventName, item, array) => {
  console.log(item, " was removed");
});

arr.pushWithEvent("add", [1, 2, 3, "a", "b"]);

arr.removeListener("add", onAddAgain); // removes the second listener

arr.pushWithEvent("add", [4, 5]);
arr.popWithEvent("remove");

console.log(arr);

// Output:
// "items were added" // [object Array] (5)
// [1,2,3,"a","b"]

// "items were added again" // [object Array] (5)
// [1,2,3,"a","b"]

// "items were added" // [object Array] (2)
// [4,5]

// 5 " was removed"

// // [object Array] (6)
// [1,2,3,"a","b",4]
