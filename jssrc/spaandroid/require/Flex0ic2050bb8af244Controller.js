define(function(){
	var controller = require("userFlex0ic2050bb8af244Controller");
	var controllerActions = ["Flex0ic2050bb8af244ControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})