var robot = require("robotjs");
var clipboard = require("copy-paste");
module.exports = function (RED) {
  function DesktopKeyboardCopySelected(config) {
    RED.nodes.createNode(this, config);
    this.name = config.name;

    var node = this;

    // Retrieve the config node
    this.on("input", function (msg) {
      node.status({
        fill: "yellow",
        shape: "dot",
        text: "copying",
      });
      robot.keyTap("c", ["command"]);
      clipboard.paste(function (err, p) {
        if (err) {
          node.status({
            fill: "red",
            shape: "ring",
            text: "error: " + err.toString().substring(0, 10) + "...",
          });
        } else {
          node.status({
            fill: "greed",
            shape: "ring",
            text: "copied!",
          });
          msg.copied = p;
          node.send(msg);
        }
      });
    });
    oneditprepare: function oneditprepare() {
      $("#node-input-name").val(this.name);
    }
  }
  RED.nodes.registerType(
    "desktop-keyboard-copy-selected",
    DesktopKeyboardCopySelected
  );
};
