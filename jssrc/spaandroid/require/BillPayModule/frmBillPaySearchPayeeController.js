define(function(){
	var controller = require("BillPayModule/userfrmBillPaySearchPayeeController");
	var controllerActions = ["BillPayModule/frmBillPaySearchPayeeControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})