define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function TransactionsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	TransactionsRepository.prototype = Object.create(BaseRepository.prototype);
	TransactionsRepository.prototype.constructor = TransactionsRepository;

	//For Operation 'getAccountTransactionByType' with service id 'getAccountTransactionsByType1691'
	TransactionsRepository.prototype.getAccountTransactionByType = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getAccountTransactionByType',params, onCompletion);
	};
	//For Operation 'getDisputedTransactions' with service id 'getDisputedTransactions3253'
	TransactionsRepository.prototype.getDisputedTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getDisputedTransactions',params, onCompletion);
	};
	//For Operation 'cancelScheduledTransactionOccurrence' with service id 'cancelScheduledTransactionOccurrence8359'
	TransactionsRepository.prototype.cancelScheduledTransactionOccurrence = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('cancelScheduledTransactionOccurrence',params, onCompletion);
	};
	//For Operation 'getPostedDeposits' with service id 'getPostedDepositTransactions6898'
	TransactionsRepository.prototype.getPostedDeposits = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedDeposits',params, onCompletion);
	};
	//For Operation 'getPostedUserTransactions' with service id 'getUserTransaction2983'
	TransactionsRepository.prototype.getPostedUserTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedUserTransactions',params, onCompletion);
	};
	//For Operation 'getUserScheduledTransactions' with service id 'getScheduledTransactions9245'
	TransactionsRepository.prototype.getUserScheduledTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getUserScheduledTransactions',params, onCompletion);
	};
	//For Operation 'makeTrialDeposit' with service id 'makeTrialDeposit7226'
	TransactionsRepository.prototype.makeTrialDeposit = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('makeTrialDeposit',params, onCompletion);
	};
	//For Operation 'getReceivedP2PRequest' with service id 'getReceivedP2PRequest4359'
	TransactionsRepository.prototype.getReceivedP2PRequest = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getReceivedP2PRequest',params, onCompletion);
	};
	//For Operation 'getPostedCardlessTransactions' with service id 'getPostedCardlessTransactions4689'
	TransactionsRepository.prototype.getPostedCardlessTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedCardlessTransactions',params, onCompletion);
	};
	//For Operation 'deleteUserScheduledTransaction' with service id 'deleteScheduledTransaction4743'
	TransactionsRepository.prototype.deleteUserScheduledTransaction = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('deleteUserScheduledTransaction',params, onCompletion);
	};
	//For Operation 'getPayPersonHistory' with service id 'getPayPersonHistory2939'
	TransactionsRepository.prototype.getPayPersonHistory = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPayPersonHistory',params, onCompletion);
	};
	//For Operation 'getPendingCardlessTransactions' with service id 'getPendingCardlessTransactions8323'
	TransactionsRepository.prototype.getPendingCardlessTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPendingCardlessTransactions',params, onCompletion);
	};
	//For Operation 'getToExternalAccountTransactions' with service id 'getToExternalAccountTransactions8719'
	TransactionsRepository.prototype.getToExternalAccountTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getToExternalAccountTransactions',params, onCompletion);
	};
	//For Operation 'updateUserScheduledTransaction' with service id 'updateScheduledTransaction4820'
	TransactionsRepository.prototype.updateUserScheduledTransaction = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('updateUserScheduledTransaction',params, onCompletion);
	};
	//For Operation 'getScheduledUserTransactions' with service id 'getUserTransaction3315'
	TransactionsRepository.prototype.getScheduledUserTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getScheduledUserTransactions',params, onCompletion);
	};
	//For Operation 'getUserChequeImage' with service id 'getUserChequeImage3206'
	TransactionsRepository.prototype.getUserChequeImage = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getUserChequeImage',params, onCompletion);
	};
	//For Operation 'verifyTrialDeposit' with service id 'verifyTrialDeposit5672'
	TransactionsRepository.prototype.verifyTrialDeposit = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('verifyTrialDeposit',params, onCompletion);
	};
	//For Operation 'createCardlessTransaction' with service id 'createTransfer7756'
	TransactionsRepository.prototype.createCardlessTransaction = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('createCardlessTransaction',params, onCompletion);
	};
	//For Operation 'getUserCompletedBillHistory' with service id 'getUserCompletedBillHistory4883'
	TransactionsRepository.prototype.getUserCompletedBillHistory = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getUserCompletedBillHistory',params, onCompletion);
	};
	//For Operation 'getStopCheckPaymentRequestTransactions' with service id 'getStopCheckPaymentRequestTransactions7709'
	TransactionsRepository.prototype.getStopCheckPaymentRequestTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getStopCheckPaymentRequestTransactions',params, onCompletion);
	};
	//For Operation 'getScheduledTransferAndP2pTransactions' with service id 'getScheduledTransferAndP2pTransactions4961'
	TransactionsRepository.prototype.getScheduledTransferAndP2pTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getScheduledTransferAndP2pTransactions',params, onCompletion);
	};
	//For Operation 'getUserChequesList' with service id 'getUserChequesList1364'
	TransactionsRepository.prototype.getUserChequesList = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getUserChequesList',params, onCompletion);
	};
	//For Operation 'getPayeeBills' with service id 'getPayeeBills2421'
	TransactionsRepository.prototype.getPayeeBills = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPayeeBills',params, onCompletion);
	};
	//For Operation 'getPendingDeposits' with service id 'getPendingDepositTransactions4106'
	TransactionsRepository.prototype.getPendingDeposits = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPendingDeposits',params, onCompletion);
	};
	//For Operation 'getPostedTransfersAndP2pTransactions' with service id 'getPostedTransferAndP2pTransactions4353'
	TransactionsRepository.prototype.getPostedTransfersAndP2pTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedTransfersAndP2pTransactions',params, onCompletion);
	};
	//For Operation 'getAccountPendingTransactions' with service id 'getAccountPendingTransactions7249'
	TransactionsRepository.prototype.getAccountPendingTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getAccountPendingTransactions',params, onCompletion);
	};
	//For Operation 'getUserWiredTransactions' with service id 'getUserWiredTransactions7202'
	TransactionsRepository.prototype.getUserWiredTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getUserWiredTransactions',params, onCompletion);
	};
	//For Operation 'getScheduledAccountTransactions' with service id 'getUserTransaction7171'
	TransactionsRepository.prototype.getScheduledAccountTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getScheduledAccountTransactions',params, onCompletion);
	};
	//For Operation 'getSentP2PTransactions' with service id 'getSentP2PTransactions8383'
	TransactionsRepository.prototype.getSentP2PTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getSentP2PTransactions',params, onCompletion);
	};
	//For Operation 'createDisputedTransaction' with service id 'updateTransaction9504'
	TransactionsRepository.prototype.createDisputedTransaction = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('createDisputedTransaction',params, onCompletion);
	};
	//For Operation 'getUsersScheduledBill' with service id 'getUsersScheduledBills7733'
	TransactionsRepository.prototype.getUsersScheduledBill = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getUsersScheduledBill',params, onCompletion);
	};
	//For Operation 'getAccountPostedTransactions' with service id 'getAccountPostedTransactions1904'
	TransactionsRepository.prototype.getAccountPostedTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getAccountPostedTransactions',params, onCompletion);
	};
	//For Operation 'getExternalAccountTransactions' with service id 'getExternalTransactions5470'
	TransactionsRepository.prototype.getExternalAccountTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getExternalAccountTransactions',params, onCompletion);
	};
	//For Operation 'getRecentAccountTransactions' with service id 'getUserTransaction2711'
	TransactionsRepository.prototype.getRecentAccountTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getRecentAccountTransactions',params, onCompletion);
	};
	//For Operation 'getPendingUserTransactions' with service id 'getUserTransaction5340'
	TransactionsRepository.prototype.getPendingUserTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPendingUserTransactions',params, onCompletion);
	};
	//For Operation 'getRecipientWireTransaction' with service id 'getRecipientWireTransaction6481'
	TransactionsRepository.prototype.getRecipientWireTransaction = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getRecipientWireTransaction',params, onCompletion);
	};
	//For Operation 'isSecondFactorAuthenticationRequired' with service id 'isSecondFactorAuthenticationRequired6760'
	TransactionsRepository.prototype.isSecondFactorAuthenticationRequired = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('isSecondFactorAuthenticationRequired',params, onCompletion);
	};
	//For Operation 'createBulkBillPay' with service id 'createBulkBillPay6456'
	TransactionsRepository.prototype.createBulkBillPay = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('createBulkBillPay',params, onCompletion);
	};
	//For Operation 'getRecentUserTransactions' with service id 'getUserTransaction6106'
	TransactionsRepository.prototype.getRecentUserTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getRecentUserTransactions',params, onCompletion);
	};
	//For Operation 'getTransferConfigurations' with service id 'getTransferConfigurations4683'
	TransactionsRepository.prototype.getTransferConfigurations = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getTransferConfigurations',params, onCompletion);
	};
	//For Operation 'getReceivedP2PTransactions' with service id 'getReceivedP2PTransactions7696'
	TransactionsRepository.prototype.getReceivedP2PTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getReceivedP2PTransactions',params, onCompletion);
	};
	//For Operation 'getAllP2PRequestMoneyForUser' with service id 'getAllP2PRequestMoneyForUser7532'
	TransactionsRepository.prototype.getAllP2PRequestMoneyForUser = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getAllP2PRequestMoneyForUser',params, onCompletion);
	};
	
	
	return TransactionsRepository;
})