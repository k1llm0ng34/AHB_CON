define(function() {
    var controller = require("com/kmb/Search/customSearchbox/usercustomSearchboxController");
    var actions = require("com/kmb/Search/customSearchbox/customSearchboxControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});