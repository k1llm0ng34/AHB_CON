define(function() {
    var controller = require("com/ahb/common/Head/MainHeaderCopy1/userMainHeaderCopy1Controller");
    var actions = require("com/ahb/common/Head/MainHeaderCopy1/MainHeaderCopy1ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});