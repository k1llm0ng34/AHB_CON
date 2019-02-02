define(function(){
	var controller = require("userCopyflxSettings0c389a41e15234dController");
	var controllerActions = ["CopyflxSettings0c389a41e15234dControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})