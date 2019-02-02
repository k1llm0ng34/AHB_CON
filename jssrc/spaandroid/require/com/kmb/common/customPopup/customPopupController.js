define(function() {
    var controller = require("com/kmb/common/customPopup/usercustomPopupController");
    var actions = require("com/kmb/common/customPopup/customPopupControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});