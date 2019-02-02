define(function(){
	var controller = require("MessagesModule/userfrmMessagesDetailsController");
	var controllerActions = ["MessagesModule/frmMessagesDetailsControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})