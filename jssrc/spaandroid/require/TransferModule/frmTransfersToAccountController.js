define(function(){
	var controller = require("TransferModule/userfrmTransfersToAccountController");
	var controllerActions = ["TransferModule/frmTransfersToAccountControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})