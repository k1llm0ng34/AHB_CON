define(function() {
    var controller = require("com/konymp/areachart/userareachartController");
    var actions = require("com/konymp/areachart/areachartControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});