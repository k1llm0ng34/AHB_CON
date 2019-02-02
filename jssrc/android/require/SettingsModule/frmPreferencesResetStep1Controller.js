define(function(){
	var controller = require("SettingsModule/userfrmPreferencesResetStep1Controller");
	var controllerActions = ["SettingsModule/frmPreferencesResetStep1ControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})