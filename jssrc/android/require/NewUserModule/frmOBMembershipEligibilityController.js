define(function(){
	var controller = require("NewUserModule/userfrmOBMembershipEligibilityController");
	var controllerActions = ["NewUserModule/frmOBMembershipEligibilityControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})