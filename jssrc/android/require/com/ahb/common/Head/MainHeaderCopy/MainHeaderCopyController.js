define(function() {
    var controller = require("com/ahb/common/Head/MainHeaderCopy/userMainHeaderCopyController");
    var actions = require("com/ahb/common/Head/MainHeaderCopy/MainHeaderCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});