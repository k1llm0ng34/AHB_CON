define(function(){
	var controller = require("PayAPersonModule/userfrmP2PRecEmailController");
	var controllerActions = ["PayAPersonModule/frmP2PRecEmailControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})