function handleFruits(fruits, newFruits, fruitQuantities) {
  const allFruits = [...fruits, ...newFruits]; // Merge both arrays
  const [firstFruit, secondFruit, thirdFruit] = allFruits; // Destructure first 3 fruits
  const fruitInventory = { ...fruitQuantities, Pineapple: 10 }; // Add Pineapple to inventory

  return { allFruits, firstFruit, secondFruit, thirdFruit, fruitInventory };
}
const fruitQuantities = { Apple: 5, Banana: 7, Mango: 10, Grapes: 8 };
const fruits = ["Apple", "Banana", "Mango"];
const newFruits = ["Grapes", "Orange", "Strawberry"];

console.log(handleFruits(fruits, newFruits, fruitQuantities));
