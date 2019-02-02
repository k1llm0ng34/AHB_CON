define([],function(){
	var mappings = {
		"cifId" : "cifId",
		"finances" : "finances",
		"investments" : "investments",
		"operativeAccounts" : "operativeAccounts",
		"dashboard" : "dashboard",
		"cards" : "cards",
		"responseCode" : "responseCode",
		"responseMessage" : "responseMessage",
		"Result" : "Result",
		"cardAccounts" : "cardAccounts",
		"investmentAccounts" : "investmentAccounts",
		"financeAccounts" : "financeAccounts",
		"DebitCardsList" : "DebitCardsList",
		"cardNumberFlag" : "cardNumberFlag",
		"accountNumber" : "accountNumber",
		"accountType" : "accountType",
		"cardNumber" : "cardNumber",
		"cardStatus" : "cardStatus",
		"cardCustomStatus" : "cardCustomStatus",
		"productType" : "productType",
		"fromDate" : "fromDate",
		"toDate" : "toDate",
		"fromAmount" : "fromAmount",
		"toAmount" : "toAmount",
		"fromChequeNumber" : "fromChequeNumber",
		"toChequeNumber" : "toChequeNumber",
		"txnReferenceNo" : "txnReferenceNo",
		"txnNarration" : "txnNarration",
		"txnType" : "txnType",
		"numOfTransactions" : "numOfTransactions",
		"cardNoFlag" : "cardNoFlag",
		"mccGroup" : "mccGroup",
	};
	Object.freeze(mappings);
	
	var typings = {
		"cifId" : "string",
		"finances" : "string",
		"investments" : "string",
		"operativeAccounts" : "string",
		"dashboard" : "string",
		"cards" : "string",
		"responseCode" : "string",
		"responseMessage" : "string",
		"Result" : "string",
		"cardAccounts" : "string",
		"investmentAccounts" : "string",
		"financeAccounts" : "string",
		"DebitCardsList" : "string",
		"cardNumberFlag" : "string",
		"accountNumber" : "string",
		"accountType" : "string",
		"cardNumber" : "string",
		"cardStatus" : "string",
		"cardCustomStatus" : "string",
		"productType" : "string",
		"fromDate" : "string",
		"toDate" : "string",
		"fromAmount" : "string",
		"toAmount" : "string",
		"fromChequeNumber" : "string",
		"toChequeNumber" : "string",
		"txnReferenceNo" : "string",
		"txnNarration" : "string",
		"txnType" : "string",
		"numOfTransactions" : "string",
		"cardNoFlag" : "string",
		"mccGroup" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"cifId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Accounts"
	};
	Object.freeze(config);
	
	return config;
})
