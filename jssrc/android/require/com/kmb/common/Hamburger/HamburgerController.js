define(function() {
    var controller = require("com/kmb/common/Hamburger/userHamburgerController");
    var actions = require("com/kmb/common/Hamburger/HamburgerControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});