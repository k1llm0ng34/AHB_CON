define([],function(){
	var mappings = {
		"accountId" : "accountId",
		"Action" : "Action",
		"cardHolderName" : "cardHolderName",
		"cardId" : "cardId",
		"cardNumber" : "cardNumber",
		"cardStatus" : "cardStatus",
		"cardType" : "cardType",
		"errmsg" : "errmsg",
		"expiryDate" : "expiryDate",
		"Reason" : "Reason",
		"success" : "success",
		"userId" : "userId",
		"userName" : "userName",
		"creditLimit" : "creditLimit",
		"availableCredit" : "availableCredit",
		"serviceProvider" : "serviceProvider",
		"billingAddress" : "billingAddress",
		"cardProductName" : "cardProductName",
		"secondaryCardHolder" : "secondaryCardHolder",
		"withdrawlLimit" : "withdrawlLimit",
		"accountNumber" : "accountNumber",
		"accountName" : "accountName",
		"maskedAccountNumber" : "maskedAccountNumber",
		"maskedCardNumber" : "maskedCardNumber",
		"isInternational" : "isInternational",
		"ids" : "ids",
		"Destinations" : "Destinations",
		"Cards" : "Cards",
		"Channel_id" : "Channel_id",
		"StartDate" : "StartDate",
		"EndDate" : "EndDate",
		"additionNotes" : "additionNotes",
		"phonenumber" : "phonenumber",
		"request_id" : "request_id",
		"bankName" : "bankName",
		"AccountType" : "AccountType",
		"RequestCode" : "RequestCode",
		"RequestReason" : "RequestReason",
		"Channel" : "Channel",
		"Address_id" : "Address_id",
		"communication_id" : "communication_id",
		"CardNumbers" : "CardNumbers",
		"lastNinetyDays" : "lastNinetyDays",
	};
	Object.freeze(mappings);
	
	var typings = {
		"accountId" : "string",
		"Action" : "string",
		"cardHolderName" : "string",
		"cardId" : "string",
		"cardNumber" : "string",
		"cardStatus" : "string",
		"cardType" : "string",
		"errmsg" : "string",
		"expiryDate" : "string",
		"Reason" : "string",
		"success" : "string",
		"userId" : "string",
		"userName" : "string",
		"creditLimit" : "string",
		"availableCredit" : "string",
		"serviceProvider" : "string",
		"billingAddress" : "string",
		"cardProductName" : "string",
		"secondaryCardHolder" : "string",
		"withdrawlLimit" : "string",
		"accountNumber" : "string",
		"accountName" : "string",
		"maskedAccountNumber" : "string",
		"maskedCardNumber" : "string",
		"isInternational" : "string",
		"ids" : "string",
		"Destinations" : "string",
		"Cards" : "string",
		"Channel_id" : "string",
		"StartDate" : "string",
		"EndDate" : "string",
		"additionNotes" : "string",
		"phonenumber" : "string",
		"request_id" : "string",
		"bankName" : "string",
		"AccountType" : "string",
		"RequestCode" : "string",
		"RequestReason" : "string",
		"Channel" : "string",
		"Address_id" : "string",
		"communication_id" : "string",
		"CardNumbers" : "string",
		"lastNinetyDays" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"cardId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Cards"
	};
	Object.freeze(config);
	
	return config;
})
