define(function(){
	var controller = require("SettingsModule/userfrmProfileEditAddressController");
	var controllerActions = ["SettingsModule/frmProfileEditAddressControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})