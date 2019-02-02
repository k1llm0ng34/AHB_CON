define([],function(){
	var mappings = {
		"AccountId" : "AccountId",
		"Amount" : "Amount",
		"TransactionDate" : "TransactionDate",
		"id" : "id",
		"name" : "name",
		"AvailableBalance" : "AvailableBalance",
		"ScheduledDate" : "ScheduledDate",
		"TransactionType" : "TransactionType",
		"allowed_attempts" : "allowed_attempts",
		"challenge_id" : "challenge_id",
		"challenge_type" : "challenge_type",
		"charged_amount" : "charged_amount",
		"charged_currency_type" : "charged_currency_type",
		"charge_policy" : "charge_policy",
		"charge_summary" : "charge_summary",
		"PayeeId" : "PayeeId",
		"end_date" : "end_date",
		"payee_account_id" : "payee_account_id",
		"payee_bank_id" : "payee_bank_id",
		"payer_account_id" : "payer_account_id",
		"payer_bank_id" : "payer_bank_id",
		"start_date" : "start_date",
		"transacted_amount" : "transacted_amount",
		"transacted_currency_type" : "transacted_currency_type",
		"transaction_description" : "transaction_description",
		"TransactionId" : "TransactionId",
		"transaction_ids" : "transaction_ids",
		"transaction_type" : "transaction_type",
		"transation_status" : "transation_status",
		"currency_type" : "currency_type",
		"account" : "account",
		"bank_name" : "bank_name",
		"main_user" : "main_user",
		"username" : "username",
		"bank_id" : "bank_id",
		"description" : "description",
		"PayPersonName" : "PayPersonName",
		"Status" : "Status",
	};
	Object.freeze(mappings);
	
	var typings = {
		"AccountId" : "string",
		"Amount" : "string",
		"TransactionDate" : "string",
		"id" : "string",
		"name" : "string",
		"AvailableBalance" : "string",
		"ScheduledDate" : "string",
		"TransactionType" : "string",
		"allowed_attempts" : "string",
		"challenge_id" : "string",
		"challenge_type" : "string",
		"charged_amount" : "string",
		"charged_currency_type" : "string",
		"charge_policy" : "string",
		"charge_summary" : "string",
		"PayeeId" : "string",
		"end_date" : "string",
		"payee_account_id" : "string",
		"payee_bank_id" : "string",
		"payer_account_id" : "string",
		"payer_bank_id" : "string",
		"start_date" : "string",
		"transacted_amount" : "string",
		"transacted_currency_type" : "string",
		"transaction_description" : "string",
		"TransactionId" : "string",
		"transaction_ids" : "string",
		"transaction_type" : "string",
		"transation_status" : "string",
		"currency_type" : "string",
		"account" : "string",
		"bank_name" : "string",
		"main_user" : "string",
		"username" : "string",
		"bank_id" : "string",
		"description" : "string",
		"PayPersonName" : "string",
		"Status" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"charge_policy",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "AccountAggregation",
		tableName : "ExternalTransactionsAggregation"
	};
	Object.freeze(config);
	
	return config;
})
