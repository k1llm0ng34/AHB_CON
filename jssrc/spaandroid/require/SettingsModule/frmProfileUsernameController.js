define(function(){
	var controller = require("SettingsModule/userfrmProfileUsernameController");
	var controllerActions = ["SettingsModule/frmProfileUsernameControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})