define(function() {
    var controller = require("com/kmb/Search/customSearch/usercustomSearchController");
    var actions = require("com/kmb/Search/customSearch/customSearchControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});