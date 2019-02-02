define(function(){
	var controller = require("AuthModule/userfrmForgotEnterCVVController");
	var controllerActions = ["AuthModule/frmForgotEnterCVVControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})