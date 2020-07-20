var robot = require("robotjs");

module.exports = function (RED) {
  function DesktopKeyboardTap(config) {
    RED.nodes.createNode(this, config);
    this.keystatic = config.keystatic;
    this.keydynamic = config.keydynamic;
    var node = this;

    // Retrieve the config node
    this.on("input", function (msg) {
      console.log(this.keydynamic, this.keystatic);
      robot.keyTap(this.keystatic);
    });
    oneditprepare: function oneditprepare() {
      $("#node-input-name").val(this.name);
      $("#node-input-keystatic").val(this.keystatic);
      $('#node-input-keydynamic').val(this.keydynamic);
    }
  }
  RED.nodes.registerType("desktop-keyboard-tap", DesktopKeyboardTap);
};
