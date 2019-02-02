define(function(){
	var controller = require("AuthModule/userfrmAHBRegLandingController");
	var controllerActions = ["AuthModule/frmAHBRegLandingControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})