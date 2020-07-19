// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

setTimeout(() => {
  robot.keyTap("c", ["command"]);
}, 3000);

setTimeout(() => {
  robot.keyTap("v", ["command"]);
  robot.keyTap("v", ["command"]);
}, 6000);
