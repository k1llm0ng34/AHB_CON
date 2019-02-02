define(function(){
	var controller = require("TransferModule/userfrmReEnterBenAccNoController");
	var controllerActions = ["TransferModule/frmReEnterBenAccNoControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})