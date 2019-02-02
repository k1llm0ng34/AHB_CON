define(function() {
    var controller = require("com/ahb/common/Head/MainHeaderCopy2/userMainHeaderCopy2Controller");
    var actions = require("com/ahb/common/Head/MainHeaderCopy2/MainHeaderCopy2ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});