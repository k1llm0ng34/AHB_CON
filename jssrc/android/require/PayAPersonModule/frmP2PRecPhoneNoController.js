define(function(){
	var controller = require("PayAPersonModule/userfrmP2PRecPhoneNoController");
	var controllerActions = ["PayAPersonModule/frmP2PRecPhoneNoControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})