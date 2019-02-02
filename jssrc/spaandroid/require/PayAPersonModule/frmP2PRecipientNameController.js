define(function(){
	var controller = require("PayAPersonModule/userfrmP2PRecipientNameController");
	var controllerActions = ["PayAPersonModule/frmP2PRecipientNameControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})