define(function(){
	var controller = require("PayAPersonModule/userfrmP2pRecurrenceController");
	var controllerActions = ["PayAPersonModule/frmP2pRecurrenceControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})