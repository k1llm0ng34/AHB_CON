define(function() {
    var controller = require("com/kmb/common/keypad/userkeypadController");
    var actions = require("com/kmb/common/keypad/keypadControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});