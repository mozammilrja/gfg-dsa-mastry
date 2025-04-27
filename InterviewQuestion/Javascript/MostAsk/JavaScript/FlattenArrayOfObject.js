function flattenCustomerOrders(customers) {
  let result = [];

  customers.forEach((customer) => {
    if (!customer.orders || customer.orders.length === 0) return;

    const orders = customer.orders.map((order) => ({
      username: customer.username,
      item: order.item,
      amount: order.amount,
    }));

    result = result.concat(orders);
  });

  return result;
}

const customers = [
  {
    username: "user123",
    orders: [
      { item: "laptop", amount: 1200 },
      { item: "headphone", amount: 1000 },
    ],
  },
];

// console.log(flattenCustomerOrders(customers));

// function flattenObject(obj, parent) {
//   let flatObj = {};
//   const generateFlatObject = (obj, parent) => {
//     for (const key in obj) {
//       const newParent = parent + key;
//       const value = obj[key];
//       if (typeof value === "object") {
//         generateFlatObject(value, newParent + ".");
//       } else {
//         flatObj[newParent] = value;
//       }
//     }
//   };
//   generateFlatObject(obj, parent);
//   return flatObj;
// }

// const data = {
//   user: {
//     id: 1,
//     name: "Alice",
//     details: {
//       age: 25,
//       address: {
//         city: "New York",
//         country: "USA",
//       },
//       contacts: [
//         { type: "email", value: "alice@example.com" },
//         { type: "phone", value: "123-456-7890" },
//       ],
//     },
//   },
//   orders: [
//     {
//       orderId: 101,
//       items: [
//         { name: "Laptop", price: 1200 },
//         { name: "Mouse", price: 50 },
//       ],
//     },
//     {
//       orderId: 102,
//       items: [{ name: "Keyboard", price: 100 }],
//     },
//   ],
// };
// console.log(flattenObject(data));

function flattenObject(obj, parent = "") {
  let flatObj = {};

  const generateFlatObject = (obj, parent) => {
    for (const key in obj) {
      const newParent = parent ? `${parent}.${key}` : key;
      const value = obj[key];

      if (typeof value === "object" && value !== null) {
        generateFlatObject(value, newParent);
      } else {
        flatObj[newParent] = value;
      }
    }
  };

  generateFlatObject(obj, parent);
  return flatObj;
}

// **Example Data**
const data = {
  user: {
    id: 1,
    name: "Alice",
    details: {
      age: 25,
      address: {
        city: "New York",
        country: "USA",
      },
      contacts: [
        { type: "email", value: "alice@example.com" },
        { type: "phone", value: "123-456-7890" },
      ],
    },
  },
  orders: [
    {
      orderId: 101,
      items: [
        { name: "Laptop", price: 1200 },
        { name: "Mouse", price: 50 },
      ],
    },
    {
      orderId: 102,
      items: [{ name: "Keyboard", price: 100 }],
    },
  ],
};

console.log(flattenObject(data));
