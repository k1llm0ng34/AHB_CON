define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		cifId : function(val, state){
			state['cifId'] = val;
		},
		finances : function(val, state){
			state['finances'] = val;
		},
		investments : function(val, state){
			state['investments'] = val;
		},
		operativeAccounts : function(val, state){
			state['operativeAccounts'] = val;
		},
		dashboard : function(val, state){
			state['dashboard'] = val;
		},
		cards : function(val, state){
			state['cards'] = val;
		},
		responseCode : function(val, state){
			state['responseCode'] = val;
		},
		responseMessage : function(val, state){
			state['responseMessage'] = val;
		},
		Result : function(val, state){
			state['Result'] = val;
		},
		cardAccounts : function(val, state){
			state['cardAccounts'] = val;
		},
		investmentAccounts : function(val, state){
			state['investmentAccounts'] = val;
		},
		financeAccounts : function(val, state){
			state['financeAccounts'] = val;
		},
		DebitCardsList : function(val, state){
			state['DebitCardsList'] = val;
		},
		cardNumberFlag : function(val, state){
			state['cardNumberFlag'] = val;
		},
		accountNumber : function(val, state){
			state['accountNumber'] = val;
		},
		accountType : function(val, state){
			state['accountType'] = val;
		},
		cardNumber : function(val, state){
			state['cardNumber'] = val;
		},
		cardStatus : function(val, state){
			state['cardStatus'] = val;
		},
		cardCustomStatus : function(val, state){
			state['cardCustomStatus'] = val;
		},
		productType : function(val, state){
			state['productType'] = val;
		},
		fromDate : function(val, state){
			state['fromDate'] = val;
		},
		toDate : function(val, state){
			state['toDate'] = val;
		},
		fromAmount : function(val, state){
			state['fromAmount'] = val;
		},
		toAmount : function(val, state){
			state['toAmount'] = val;
		},
		fromChequeNumber : function(val, state){
			state['fromChequeNumber'] = val;
		},
		toChequeNumber : function(val, state){
			state['toChequeNumber'] = val;
		},
		txnReferenceNo : function(val, state){
			state['txnReferenceNo'] = val;
		},
		txnNarration : function(val, state){
			state['txnNarration'] = val;
		},
		txnType : function(val, state){
			state['txnType'] = val;
		},
		numOfTransactions : function(val, state){
			state['numOfTransactions'] = val;
		},
		cardNoFlag : function(val, state){
			state['cardNoFlag'] = val;
		},
		mccGroup : function(val, state){
			state['mccGroup'] = val;
		},
	};
	
	
	//Create the Model Class
	function Accounts(defaultValues){
		var privateState = {};
			privateState.cifId = defaultValues?(defaultValues["cifId"]?defaultValues["cifId"]:null):null;
			privateState.finances = defaultValues?(defaultValues["finances"]?defaultValues["finances"]:null):null;
			privateState.investments = defaultValues?(defaultValues["investments"]?defaultValues["investments"]:null):null;
			privateState.operativeAccounts = defaultValues?(defaultValues["operativeAccounts"]?defaultValues["operativeAccounts"]:null):null;
			privateState.dashboard = defaultValues?(defaultValues["dashboard"]?defaultValues["dashboard"]:null):null;
			privateState.cards = defaultValues?(defaultValues["cards"]?defaultValues["cards"]:null):null;
			privateState.responseCode = defaultValues?(defaultValues["responseCode"]?defaultValues["responseCode"]:null):null;
			privateState.responseMessage = defaultValues?(defaultValues["responseMessage"]?defaultValues["responseMessage"]:null):null;
			privateState.Result = defaultValues?(defaultValues["Result"]?defaultValues["Result"]:null):null;
			privateState.cardAccounts = defaultValues?(defaultValues["cardAccounts"]?defaultValues["cardAccounts"]:null):null;
			privateState.investmentAccounts = defaultValues?(defaultValues["investmentAccounts"]?defaultValues["investmentAccounts"]:null):null;
			privateState.financeAccounts = defaultValues?(defaultValues["financeAccounts"]?defaultValues["financeAccounts"]:null):null;
			privateState.DebitCardsList = defaultValues?(defaultValues["DebitCardsList"]?defaultValues["DebitCardsList"]:null):null;
			privateState.cardNumberFlag = defaultValues?(defaultValues["cardNumberFlag"]?defaultValues["cardNumberFlag"]:null):null;
			privateState.accountNumber = defaultValues?(defaultValues["accountNumber"]?defaultValues["accountNumber"]:null):null;
			privateState.accountType = defaultValues?(defaultValues["accountType"]?defaultValues["accountType"]:null):null;
			privateState.cardNumber = defaultValues?(defaultValues["cardNumber"]?defaultValues["cardNumber"]:null):null;
			privateState.cardStatus = defaultValues?(defaultValues["cardStatus"]?defaultValues["cardStatus"]:null):null;
			privateState.cardCustomStatus = defaultValues?(defaultValues["cardCustomStatus"]?defaultValues["cardCustomStatus"]:null):null;
			privateState.productType = defaultValues?(defaultValues["productType"]?defaultValues["productType"]:null):null;
			privateState.fromDate = defaultValues?(defaultValues["fromDate"]?defaultValues["fromDate"]:null):null;
			privateState.toDate = defaultValues?(defaultValues["toDate"]?defaultValues["toDate"]:null):null;
			privateState.fromAmount = defaultValues?(defaultValues["fromAmount"]?defaultValues["fromAmount"]:null):null;
			privateState.toAmount = defaultValues?(defaultValues["toAmount"]?defaultValues["toAmount"]:null):null;
			privateState.fromChequeNumber = defaultValues?(defaultValues["fromChequeNumber"]?defaultValues["fromChequeNumber"]:null):null;
			privateState.toChequeNumber = defaultValues?(defaultValues["toChequeNumber"]?defaultValues["toChequeNumber"]:null):null;
			privateState.txnReferenceNo = defaultValues?(defaultValues["txnReferenceNo"]?defaultValues["txnReferenceNo"]:null):null;
			privateState.txnNarration = defaultValues?(defaultValues["txnNarration"]?defaultValues["txnNarration"]:null):null;
			privateState.txnType = defaultValues?(defaultValues["txnType"]?defaultValues["txnType"]:null):null;
			privateState.numOfTransactions = defaultValues?(defaultValues["numOfTransactions"]?defaultValues["numOfTransactions"]:null):null;
			privateState.cardNoFlag = defaultValues?(defaultValues["cardNoFlag"]?defaultValues["cardNoFlag"]:null):null;
			privateState.mccGroup = defaultValues?(defaultValues["mccGroup"]?defaultValues["mccGroup"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"cifId" : {
					get : function(){return privateState.cifId},
					set : function(val){throw Error("cifId cannot be changed."); },
					enumerable : true,
				},
				"finances" : {
					get : function(){return privateState.finances},
					set : function(val){
						setterFunctions['finances'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"investments" : {
					get : function(){return privateState.investments},
					set : function(val){
						setterFunctions['investments'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"operativeAccounts" : {
					get : function(){return privateState.operativeAccounts},
					set : function(val){
						setterFunctions['operativeAccounts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dashboard" : {
					get : function(){return privateState.dashboard},
					set : function(val){
						setterFunctions['dashboard'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cards" : {
					get : function(){return privateState.cards},
					set : function(val){
						setterFunctions['cards'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"responseCode" : {
					get : function(){return privateState.responseCode},
					set : function(val){
						setterFunctions['responseCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"responseMessage" : {
					get : function(){return privateState.responseMessage},
					set : function(val){
						setterFunctions['responseMessage'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Result" : {
					get : function(){return privateState.Result},
					set : function(val){
						setterFunctions['Result'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardAccounts" : {
					get : function(){return privateState.cardAccounts},
					set : function(val){
						setterFunctions['cardAccounts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"investmentAccounts" : {
					get : function(){return privateState.investmentAccounts},
					set : function(val){
						setterFunctions['investmentAccounts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"financeAccounts" : {
					get : function(){return privateState.financeAccounts},
					set : function(val){
						setterFunctions['financeAccounts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DebitCardsList" : {
					get : function(){return privateState.DebitCardsList},
					set : function(val){
						setterFunctions['DebitCardsList'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardNumberFlag" : {
					get : function(){return privateState.cardNumberFlag},
					set : function(val){
						setterFunctions['cardNumberFlag'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountNumber" : {
					get : function(){return privateState.accountNumber},
					set : function(val){
						setterFunctions['accountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountType" : {
					get : function(){return privateState.accountType},
					set : function(val){
						setterFunctions['accountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardNumber" : {
					get : function(){return privateState.cardNumber},
					set : function(val){
						setterFunctions['cardNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardStatus" : {
					get : function(){return privateState.cardStatus},
					set : function(val){
						setterFunctions['cardStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardCustomStatus" : {
					get : function(){return privateState.cardCustomStatus},
					set : function(val){
						setterFunctions['cardCustomStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"productType" : {
					get : function(){return privateState.productType},
					set : function(val){
						setterFunctions['productType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"fromDate" : {
					get : function(){return privateState.fromDate},
					set : function(val){
						setterFunctions['fromDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"toDate" : {
					get : function(){return privateState.toDate},
					set : function(val){
						setterFunctions['toDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"fromAmount" : {
					get : function(){return privateState.fromAmount},
					set : function(val){
						setterFunctions['fromAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"toAmount" : {
					get : function(){return privateState.toAmount},
					set : function(val){
						setterFunctions['toAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"fromChequeNumber" : {
					get : function(){return privateState.fromChequeNumber},
					set : function(val){
						setterFunctions['fromChequeNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"toChequeNumber" : {
					get : function(){return privateState.toChequeNumber},
					set : function(val){
						setterFunctions['toChequeNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"txnReferenceNo" : {
					get : function(){return privateState.txnReferenceNo},
					set : function(val){
						setterFunctions['txnReferenceNo'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"txnNarration" : {
					get : function(){return privateState.txnNarration},
					set : function(val){
						setterFunctions['txnNarration'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"txnType" : {
					get : function(){return privateState.txnType},
					set : function(val){
						setterFunctions['txnType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"numOfTransactions" : {
					get : function(){return privateState.numOfTransactions},
					set : function(val){
						setterFunctions['numOfTransactions'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardNoFlag" : {
					get : function(){return privateState.cardNoFlag},
					set : function(val){
						setterFunctions['cardNoFlag'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"mccGroup" : {
					get : function(){return privateState.mccGroup},
					set : function(val){
						setterFunctions['mccGroup'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Accounts);
	
	//Create new class level validator object
	BaseModel.Validator.call(Accounts);
	
	var registerValidatorBackup = Accounts.registerValidator;
	
	Accounts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Accounts.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	//For Operation 'getAccountDetails' with service id 'fetchAccountDetails2647'
	Accounts.getAccountDetails = function(params, onCompletion){
		return Accounts.customVerb('getAccountDetails', params, onCompletion);
	};
	//For Operation 'updateFavouriteStatus' with service id 'updateFavouriteStatus2949'
	Accounts.updateFavouriteStatus = function(params, onCompletion){
		return Accounts.customVerb('updateFavouriteStatus', params, onCompletion);
	};
	//For Operation 'newAccountOpening' with service id 'newAccountOpening2654'
	Accounts.newAccountOpening = function(params, onCompletion){
		return Accounts.customVerb('newAccountOpening', params, onCompletion);
	};
	//For Operation 'getRecentAccounts' with service id 'getRecentAccounts8217'
	Accounts.getRecentAccounts = function(params, onCompletion){
		return Accounts.customVerb('getRecentAccounts', params, onCompletion);
	};
	//For Operation 'updateAccountPhoneNumber' with service id 'updateAccountPhoneNumber3059'
	Accounts.updateAccountPhoneNumber = function(params, onCompletion){
		return Accounts.customVerb('updateAccountPhoneNumber', params, onCompletion);
	};
	//For Operation 'getAccountsPostLogin' with service id 'getAccountsPostLogin6872'
	Accounts.getAccountsPostLogin = function(params, onCompletion){
		return Accounts.customVerb('getAccountsPostLogin', params, onCompletion);
	};
	//For Operation 'updateUserAccountSettings' with service id 'updateUserAccountSettings5182'
	Accounts.updateUserAccountSettings = function(params, onCompletion){
		return Accounts.customVerb('updateUserAccountSettings', params, onCompletion);
	};
	//For Operation 'updateAccountPreference' with service id 'updateAccountPreference3108'
	Accounts.updateAccountPreference = function(params, onCompletion){
		return Accounts.customVerb('updateAccountPreference', params, onCompletion);
	};
	//For Operation 'getAccountsDashboard' with service id 'getAccountsDashboard5682'
	Accounts.getAccountsDashboard = function(params, onCompletion){
		return Accounts.customVerb('getAccountsDashboard', params, onCompletion);
	};
	//For Operation 'fetchBankDetails' with service id 'fetchBankDetails5867'
	Accounts.fetchBankDetails = function(params, onCompletion){
		return Accounts.customVerb('fetchBankDetails', params, onCompletion);
	};
	//For Operation 'getAccountStatements' with service id 'getAccountStatements8817'
	Accounts.getAccountStatements = function(params, onCompletion){
		return Accounts.customVerb('getAccountStatements', params, onCompletion);
	};
	//For Operation 'getDebitCards' with service id 'getDebitCards4033'
	Accounts.getDebitCards = function(params, onCompletion){
		return Accounts.customVerb('getDebitCards', params, onCompletion);
	};
	
	var relations = [
	];
	
	Accounts.relations = relations;
	
	Accounts.prototype.isValid = function(){
		return Accounts.isValid(this);
	};
	
	Accounts.prototype.objModelName = "Accounts";
	
	return Accounts;
});