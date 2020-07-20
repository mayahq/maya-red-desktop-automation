var robot = require("robotjs");
module.exports = function (RED) {
  function DesktopKeyboardPasteInto(config) {
    RED.nodes.createNode(this, config);
    this.name = config.name;

    var node = this;

    // Retrieve the config node
    this.on("input", function (msg) {
      node.status({
        fill: "yellow",
        shape: "dot",
        text: "pasting...",
      });
      robot.keyTap("v", ["command"]);
      node.status({
        fill: "green",
        shape: "dot",
        text: "pasted!",
      });
      node.send(msg);
    });
    oneditprepare: function oneditprepare() {
      $("#node-input-name").val(this.name);
    }
  }
  RED.nodes.registerType(
    "desktop-keyboard-paste-into",
    DesktopKeyboardPasteInto
  );
};
