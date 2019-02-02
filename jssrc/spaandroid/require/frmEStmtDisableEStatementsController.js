define(function(){
	var controller = require("userfrmEStmtDisableEStatementsController");
	var controllerActions = ["frmEStmtDisableEStatementsControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})