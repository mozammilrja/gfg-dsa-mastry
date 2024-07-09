const obj = [
  {
    key: "simple1",
    data: "data1",
  },
  {
    key: "simple2",
    data: "data2",
  },
  {
    key: "simple3",
    data: "data3",
  },
  {
    key: "simple4",
    data: "data4",
  },
  {
    key: "simple5",
    data: "data5",
  },
];

const output = {};
obj.forEach((item) => {
  console.log("item", item);
  if (output[item.key]) {
    output[item.key].push(item);
  } else {
    output[item.key] = [item];
  }
});
console.log("output", output);
const outputs = {
  "sample 1": [
    {
      key: "simple1",
      data: "data1",
    },
    {
      key: "simple2",
      data: "data2",
    },
    {
      key: "simple3",
      data: "data3",
    },
  ],
  "sample 2": [],
  "sample 3": [],
  "sample 4": [],
};
