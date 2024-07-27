// class Memento {
//   constructor(state) {
//     this.state = state;
//   }
//   getState() {
//     return this.state;
//   }
// }
// //Originator
// class TextEditor {
//   constructor() {
//     this.content = "";
//   }
//   setState(state) {
//     this.content = state;
//   }
//   getState() {
//     return this.content;
//   }
//   save() {
//     return new Memento(this.content);
//   }
//   restore(memento) {
//     this.content = memento.getState();
//   }
// }

// //CareTaker

// class History {
//   constructor() {
//     this.mementos = [];
//   }
//   addMemento(memento) {
//     this.mementos.push(memento);
//   }
//   getMemento(index) {
//     return this.mementos[index];
//   }
// }

// //Client

// const editor = new TextEditor();
// const history = new History();

// editor.setState("Version 1");
// history.addMemento(editor.save());
// editor.setState("Version 2");
// history.addMemento(editor.save());
// editor.setState("Version 3");
// history.addMemento(editor.save());

// console.log(editor.getState());

// editor.restore(history.getMemento(1));

// console.log(editor.getState());

// editor.restore(history.getMemento(0));
// console.log(editor.getState());
// Memento
class PlayerMemento {
  constructor(state) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
}

// Originator
class Player {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
  }

  setState(state) {
    this.level = state.level;
    this.health = state.health;
  }

  getState() {
    return { level: this.level, health: this.health };
  }

  save() {
    return new PlayerMemento(this.getState());
  }

  restore(memento) {
    this.setState(memento.getState());
  }

  levelUp() {
    this.level += 1;
    this.health += 100;
    console.log(`${this.name} leveled up to level ${this.level}`);
  }

  takeDamage(damage) {
    this.health -= damage;
    console.log(
      `${this.name} took ${damage} damage, health is now ${this.health}`
    );
  }
}

// Caretaker
class GameHistory {
  constructor() {
    this.mementos = [];
  }

  addMemento(memento) {
    this.mementos.push(memento);
  }

  getMemento(index) {
    return this.mementos[index];
  }
}

// Client
const player = new Player("Hero");
const gameHistory = new GameHistory();

player.levelUp();

gameHistory.addMemento(player.save()); // Save state after leveling up
player.takeDamage(30);

gameHistory.addMemento(player.save()); // Save state after taking damage
player.levelUp();

gameHistory.addMemento(player.save()); // Save state after leveling up again
player.takeDamage(50);

console.log(player.getState()); // Output: { level: 3, health: 220 }

// Restore to the state after first damage (index 1)
player.restore(gameHistory.getMemento(1));
console.log(player.getState()); // Output: { level: 2, health: 170 }

// Restore to the state after first level up (index 0)
player.restore(gameHistory.getMemento(0));
console.log(player.getState()); // Output: { level: 2, health: 200 }
