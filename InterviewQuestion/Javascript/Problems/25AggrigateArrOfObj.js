// const aggregate = (arr, on, who) => {
//   const agg = arr.reduce((a, b) => {
//     //get  the values of both the keys
//     const onValue = b[on];
//     const whoValue = b[who];

//     if (a[onValue]) {
//       a[onValue] = {
//         [on]: onValue,
//         [who]: [...a[onValue][who], whoValue],
//       };
//     } else {
//       a[onValue] = {
//         [on]: onValue,
//         [who]: [whoValue],
//       };
//     }
//     return a;
//   }, {});
//   return Object.values(agg);
// };

// const endorsements = [
//   { skill: "css", user: "Bill" },
//   { skill: "javascript", user: "Chad" },
//   { skill: "javascript", user: "Bill" },
//   { skill: "css", user: "Sue" },
//   { skill: "javascript", user: "Sue" },
//   { skill: "html", user: "Sue" },
// ];

// console.log(aggregate(endorsements, "skill", "user"));

// // Output:
// // [
// //   {
// //     "skill": "css",
// //     "user": [
// //       "Bill",
// //       "Sue"
// //     ]
// //   },
// //   {
// //     "skill": "javascript",
// //     "user": [
// //       "Chad",
// //       "Bill",
// //       "Sue"
// //     ]
// //   },
// //   {
// //     "skill": "html",
// //     "user": [
// //       "Sue"
// //     ]
// //   }
// // ]

const aggregate = (arr, on, who) => {
  const result = {};

  arr.forEach((item) => {
    const key = item[on];
    const value = item[who];

    if (!result[key]) {
      result[key] = {[on]: key, [who]: [],
      };
    }

    result[key][who].push(value);
  });

  return Object.values(result);
};

const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

console.log(aggregate(endorsements, "skill", "user"));

// Output:
// [
//   {
//     "skill": "css",
//     "user": [
//       "Bill",
//       "Sue"
//     ]
//   },
//   {
//     "skill": "javascript",
//     "user": [
//       "Chad",
//       "Bill",
//       "Sue"
//     ]
//   },
//   {
//     "skill": "html",
//     "user": [
//       "Sue"
//     ]
//   }
// ]
