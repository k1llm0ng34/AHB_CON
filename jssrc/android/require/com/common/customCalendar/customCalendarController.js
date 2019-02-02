define(function() {
    var controller = require("com/common/customCalendar/usercustomCalendarController");
    var actions = require("com/common/customCalendar/customCalendarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});