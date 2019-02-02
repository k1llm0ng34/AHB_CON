define(function(){
	var controller = require("userflxTransactionModeController");
	var controllerActions = ["flxTransactionModeControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})