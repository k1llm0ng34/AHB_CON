define(function() {
    var controller = require("com/kmb/common/customFooter/usercustomFooterController");
    var actions = require("com/kmb/common/customFooter/customFooterControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});