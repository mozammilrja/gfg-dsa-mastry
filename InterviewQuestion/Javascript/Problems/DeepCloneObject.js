function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
const original = {
  name: "Mozammil",
  details: {
    age: 28,
    skills: ["JavaScript", "React"],
  },
};

const copy = deepClone(original);
copy.details.skills[0] = "Python";

console.log(original.details.skills[0]); // Still "JavaScript" — original is safe
