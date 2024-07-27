// // Command Interface
// class Command {
//   execute() {}
//   undo() {}
// }

// // Concrete command
// class AddTextCommand extends Command {
//   constructor(receiver, text) {
//     super();
//     this.receiver = receiver;
//     this.text = text;
//   }
//   execute() {
//     this.receiver.addText(this.text);
//   }
//   undo() {
//     this.receiver.removeText(this.text);
//   }
// }

// class RemoveTextCommand extends Command {
//   constructor(receiver, text) {
//     super();
//     this.receiver = receiver;
//     this.text = text;
//   }
//   execute() {
//     this.receiver.removeText(this.text);
//   }
//   undo() {
//     this.receiver.addText(this.text);
//   }
// }

// // Receiver
// class TextEditor {
//   constructor() {
//     this.content = "";
//   }
//   addText(text) {
//     this.content += text;
//     console.log(`Current content: ${this.content}`);
//   }
//   removeText(text) {
//     this.content = this.content.replace(new RegExp(text + '$'), ""); // Updated to remove from the end
//     console.log(`Current content: ${this.content}`);
//   }
// }

// // Invoker
// class TextEditorInvoker {
//   constructor() {
//     this.history = [];
//   }
//   executeCommand(command) {
//     command.execute();
//     this.history.push(command);
//   }
//   undo() {
//     if (this.history.length > 0) {
//       const command = this.history.pop();
//       command.undo();
//     }
//   }
// }

// // Client
// const editor = new TextEditor();
// const invoker = new TextEditorInvoker();

// const addCommand = new AddTextCommand(editor, "Hello");
// const addCommand2 = new AddTextCommand(editor, "World");

// invoker.executeCommand(addCommand);   // Output: Current content: Hello
// invoker.executeCommand(addCommand2);  // Output: Current content: HelloWorld

// invoker.undo();                       // Output: Current content: Hello
// invoker.undo();                       // Output: Current content: 



//Second Scenario
// Command Interface
class Command {
    execute() {}
    undo() {}
}

// Concrete Commands
class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.on();
    }

    undo() {
        this.light.off();
    }
}

class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.off();
    }

    undo() {
        this.light.on();
    }
}

// Receiver
class Light {
    on() {
        console.log("Light is ON");
    }

    off() {
        console.log("Light is OFF");
    }
}

// Invoker
class RemoteControl {
    constructor() {
        this.history = [];
    }

    executeCommand(command) {
        command.execute();
        this.history.push(command);
    }

    undoCommand() {
        if (this.history.length > 0) {
            const command = this.history.pop();
            command.undo();
        }
    }
}

// Client
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remote = new RemoteControl();

// Turn the light on
remote.executeCommand(lightOnCommand); // Output: Light is ON

// Turn the light off
remote.executeCommand(lightOffCommand); // Output: Light is OFF

// Undo the last command (which turns the light back on)
remote.undoCommand(); // Output: Light is ON

// Undo the last command (which turns the light off)
remote.undoCommand(); // Output: Light is OFF
