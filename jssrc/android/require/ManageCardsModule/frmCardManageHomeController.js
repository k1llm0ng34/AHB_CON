define(function(){
	var controller = require("ManageCardsModule/userfrmCardManageHomeController");
	var controllerActions = ["ManageCardsModule/frmCardManageHomeControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})