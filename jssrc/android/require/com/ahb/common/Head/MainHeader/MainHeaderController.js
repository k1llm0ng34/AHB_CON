define(function() {
    var controller = require("com/ahb/common/Head/MainHeader/userMainHeaderController");
    var actions = require("com/ahb/common/Head/MainHeader/MainHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});