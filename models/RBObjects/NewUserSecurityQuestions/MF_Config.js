define([],function(){
	var mappings = {
		"QuestionId" : "QuestionId",
		"errmsg" : "errmsg",
		"question" : "question",
		"userSecurityQuestionsList" : "userSecurityQuestionsList",
	};
	Object.freeze(mappings);
	
	var typings = {
		"QuestionId" : "string",
		"errmsg" : "string",
		"question" : "string",
		"userSecurityQuestionsList" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "NewUserSecurityQuestions"
	};
	Object.freeze(config);
	
	return config;
})
