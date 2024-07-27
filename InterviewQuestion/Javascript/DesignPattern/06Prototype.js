class Robot {
  constructor(name) {
    this.name = name;
  }
  fire() {
    return "Phew Phew";
  }
}

const robot1 = new Robot("Robocop");
const robot2 = new Robot("Autobot");

Robot.prototype.report = function () {
  console.log(`${this.name} reporting sir! `);
};

Robot.prototype.name = "Mozammil";

robot1.report();
robot2.report();
