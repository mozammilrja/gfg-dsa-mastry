function flattenDeepObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;

      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flattenDeepObject(obj[key], newKey, result); // recurse
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}
const nested = {
  user: {
    name: "Mozammil",
    address: {
      city: "Delhi",
      pincode: 110001,
    },
  },
  job: {
    title: "Frontend Developer",
  },
};

console.log(flattenDeepObject(nested));
