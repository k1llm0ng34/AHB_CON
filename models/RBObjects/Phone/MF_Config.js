define([],function(){
	var mappings = {
		"countryType" : "countryType",
		"error" : "error",
		"extension" : "extension",
		"id" : "id",
		"isPrimary" : "isPrimary",
		"phoneNumber" : "phoneNumber",
		"receivePromotions" : "receivePromotions",
		"result" : "result",
		"type" : "type",
	};
	Object.freeze(mappings);
	
	var typings = {
		"countryType" : "string",
		"error" : "string",
		"extension" : "string",
		"id" : "string",
		"isPrimary" : "string",
		"phoneNumber" : "string",
		"receivePromotions" : "string",
		"result" : "string",
		"type" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Phone"
	};
	Object.freeze(config);
	
	return config;
})
