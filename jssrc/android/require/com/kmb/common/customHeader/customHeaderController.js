define(function() {
    var controller = require("com/kmb/common/customHeader/usercustomHeaderController");
    var actions = require("com/kmb/common/customHeader/customHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});