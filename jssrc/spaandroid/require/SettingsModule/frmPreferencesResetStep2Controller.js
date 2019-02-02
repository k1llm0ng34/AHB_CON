define(function(){
	var controller = require("SettingsModule/userfrmPreferencesResetStep2Controller");
	var controllerActions = ["SettingsModule/frmPreferencesResetStep2ControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})