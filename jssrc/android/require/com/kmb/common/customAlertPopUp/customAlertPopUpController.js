define(function() {
    var controller = require("com/kmb/common/customAlertPopUp/usercustomAlertPopUpController");
    var actions = require("com/kmb/common/customAlertPopUp/customAlertPopUpControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});