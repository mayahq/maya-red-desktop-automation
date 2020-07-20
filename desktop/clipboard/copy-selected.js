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
      node.status({
        fill: "green",
        shape: "dot",
        text: "copied!",
      });
    });
    oneditprepare: function oneditprepare() {
      $("#node-input-name").val(this.name);
    }
  }
  RED.nodes.registerType(
    "desktop-clipboard-copy-selected",
    DesktopKeyboardCopySelected
  );
};
