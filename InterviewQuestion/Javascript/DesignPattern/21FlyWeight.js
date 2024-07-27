// Flyweight class
class Charactor {
  constructor(character) {
    this.character = character; // Intrinsic state
  }

  display(position) {
    console.log(`Character: ${this.character}, Position: ${position}`);
  }
}

// Flyweight Factory
class CharactorFactory {
  constructor() {
    this.characters = {}; // Cache for flyweight instances
  }

  getCharactor(character) {
    if (!this.characters[character]) {
      this.characters[character] = new Charactor(character);
    }
    return this.characters[character];
  }
}

// Client code
const factory = new CharactorFactory();

const charA1 = factory.getCharactor("A");
const charA2 = factory.getCharactor("A");
const charB1 = factory.getCharactor("B");
const charC1 = factory.getCharactor("C");

charA1.display(1); // Output: Character: A, Position: 1
charA2.display(2); // Output: Character: A, Position: 2
charB1.display(3); // Output: Character: B, Position: 3
charC1.display(4); // Output: Character: C, Position: 4

console.log(charA1 === charA2); // Output: true (Same instance)
console.log(charA1 === charB1); // Output: false (Different instances)
