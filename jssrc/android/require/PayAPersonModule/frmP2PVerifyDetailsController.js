define(function(){
	var controller = require("PayAPersonModule/userfrmP2PVerifyDetailsController");
	var controllerActions = ["PayAPersonModule/frmP2PVerifyDetailsControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})