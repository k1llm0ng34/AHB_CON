define(function(){
	var controller = require("AuthModule/userfrmFullScreenAdsController");
	var controllerActions = ["AuthModule/frmFullScreenAdsControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})