define(function() {
    var controller = require("com/kmb/Messages/Popup/userPopupController");
    var actions = require("com/kmb/Messages/Popup/PopupControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});