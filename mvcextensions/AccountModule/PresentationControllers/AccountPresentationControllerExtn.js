define({
  scope_Acc_Pres : this,
  statementParamsData : {},
  Account_PresentationController: function(){
    //scope_Acc_Pres = this;
    kony.mvc.Presentation.BasePresenter.call(this);
    this.asyncManager = new AsyncManager();
    /**   numberOfAsyncForTransactions
          *  1.getAccountPendingTransactions
          *  2.getAccountPostedTransactions
            */
    scope_Acc_Pres.numberOfAsyncForTransactions=2;
    /**   numberOfAsyncForPFMGraph
          *  1.getPFMBarGraph
          *  2.getPFMBudgetGraph
            */
    scope_Acc_Pres.numberOfAsyncForPFMGraph=2;
    
    ///TO check the current status of the account data
    scope_Acc_Pres.accountDataStatus = {
      timeStamp : null,
      hasAccountModified : false,
      
    };
    scope_Acc_Pres.AllDashboardAccountData = null;
    
    this.directMarketingManager = applicationManager.getDirectMarketingManager();
  },
  
  setAllDashboardAccountData: function(allDashboardAccountData){
    if(allDashboardAccountData && Object.keys(allDashboardAccountData).length){
      scope_Acc_Pres.AllDashboardAccountData = allDashboardAccountData;
    }

  },

  getAllDashboardAccountData: function(){
    return scope_Acc_Pres.AllDashboardAccountData; 
  },
  
 /*-----------------------------------------------------------------------------------

  Name: 	setAccountDataStatus
  Purpose:  set Accounts data status and timestamp
  Author: 	Bipin
  Date: 	10/12/2018
  Input:	accountDataStatus
  Return: 	

  ------------------------------------------------------------------------------------*/
  setAccountDataStatus: function(accountData){
    if(accountData && Object.keys(accountData).length){
      scope_Acc_Pres.accountDataStatus.timeStamp = accountData.timeStamp;
      scope_Acc_Pres.accountDataStatus.hasAccountModified = accountData.hasAccountModified;
    }
  },

  getAccountDataStatus: function(){
    return scope_Acc_Pres.accountDataStatus; 
  },
  
  //ACCNT_CATEGORY_CARD:'cards',
  //ACCNT_CATEGORY_CARD:'cards',
  statementData : [],
  processAccountsData:function(responseFromGetAccountsService){
    var cardsData = [];
    var opAccountsData = [];
    var financesData = [];
    var investmentsData = [];
    var navManger = applicationManager.getNavigationManager();
    var infoFrmDashboard = navManger.getCustomInfo("frmDashboard");
    if(!infoFrmDashboard){
      infoFrmDashboard = {};
    }
    
     infoFrmDashboard.paramForAllDetails = {};
    
    
    var dashboard = {savingAccount : "", currentAccount  : "", finances  : "", cardsLimit :"", investments:"", savingAndDeposits : "",sum:0,currentAccountPercent:0,savingsAndDepositPercent:0,cardsPercent:0,isDisclaimerRequired:""};
    if(responseFromGetAccountsService && responseFromGetAccountsService.length){ 
      var accountList = responseFromGetAccountsService[0];
      cardsData =   this.dataParser(accountList.cards, "cards");
      opAccountsData = this.dataParser(accountList.operativeAccounts, "operativeAccounts");
      financesData= this.dataParser(accountList.finances, "finances");
      investmentsData= this.dataParser(accountList.investments, "investments");

      if(accountList.dashboard && accountList.dashboard.length){ 
        var dashboardContent = accountList.dashboard[0];
        if(dashboardContent.currentAccount){
          dashboard["currentAccount"] = (dashboardContent.currentAccount);
        }
        if(dashboardContent.cards ){
          dashboard["cardsLimit"] = (dashboardContent.cards);
        }
        if(dashboardContent.savingAccount ){
          dashboard["savingAccount"] = (dashboardContent.savingAccount) ;
          dashboard["savingAndDeposits"] = convertToFloat(dashboardContent.savingAccount) ;
        }
        if(dashboardContent.investments){
          dashboard["investments"] = (dashboardContent.investments);
          dashboard["savingAndDeposits"] = dashboard["savingAndDeposits"] + convertToFloat(dashboardContent.investments);

        }
        if(dashboard["savingAndDeposits"] && dashboard["savingAndDeposits"]>0){
          dashboard["savingAndDeposits"]=(dashboard["savingAndDeposits"].toFixed(2))+ " " + "AED";
        }
        //fetcching isDisclaimerRequired as per MB-2031
        if(dashboardContent.isDisclaimerRequired){
          dashboard["isDisclaimerRequired"]= dashboardContent.isDisclaimerRequired;
        }
		dashboard["sum"] = convertToFloat(dashboard.currentAccount) +  convertToFloat(dashboard.savingAndDeposits) + convertToFloat(dashboard.cardsLimit);
      	dashboard["currentAccountPercent"] = (convertToFloat(dashboard.currentAccount) / dashboard["sum"])*100;
        dashboard["savingsAndDepositPercent"] = (convertToFloat(dashboard["savingAndDeposits"]) / dashboard["sum"])*100;
        dashboard["cardsPercent"] = (convertToFloat(dashboard.cardsLimit) / dashboard["sum"])*100;
        
        
      }
    }


    var finalAccountsObject={
      "cards": cardsData,
      "operativeAccounts":opAccountsData,
      "finances": financesData,
      "investments": investmentsData,
      "dashboard":dashboard
    };
    // Setting data to get a list of Accounts which will be used to populate 'From Account' list in Transfers
    var dataToSetFromAccounts = navManger.setCustomInfo("dataToSetFromAccounts", opAccountsData);
    infoFrmDashboard = navManger.getCustomInfo("frmDashboard");
	infoFrmDashboard.accountData = finalAccountsObject;
    
	navManger.setCustomInfo("frmDashboard",infoFrmDashboard);
    return finalAccountsObject; 
  },


  dataParser:function(data,type){

    var accProcessedData=[];
    var navManger = applicationManager.getNavigationManager();
	var infoFrmDashboard = navManger.getCustomInfo("frmDashboard");
    if(!infoFrmDashboard){
      infoFrmDashboard = {};
    }
    var records = infoFrmDashboard.paramForAllDetails;
    if(!records){
      records = {};
    }
    if(data){
      for(var i=0;i<data.length;i++){

        accProcessedData[i] = {};
        accProcessedData[i].lblRightArrow = kony.i18n.getLocalizedString("kony.ahb.icons.arrowright");
        if(type == "cards"){


          var amount=data[i].AvailableLimit;
          var cur=data[i].CurrencyCode ;
          var amt = commaSeparatorUtil(amount);
          var outstandingDue= amt+" "+cur;
		 var creditCardNumber = formatAlphanumericString(data[i].CreditCardNo);
          creditCardNumber = getMaskedString(7,14,"*",creditCardNumber);
          accProcessedData[i].accountType = data[i].CardSubType ;
          accProcessedData[i].accountID = creditCardNumber;
          accProcessedData[i].availableBalance =outstandingDue;
          accProcessedData[i].category=type;
          accProcessedData[i].hAccountId=data[i].CreditCardNo;
          accProcessedData[i].CardStatus=data[i].CardStatus;
          accProcessedData[i].AccountTransactionAccess=data[i].AccountTransactionAccess;
          accProcessedData[i].balanceType= {text: kony.i18n.getLocalizedString("kony.ahb.creditCardDetails.availableLimit") , isVisible: true};
          if ((records.cardAccounts === undefined)||(records.cardAccounts === "")||(records.cardAccounts === null)) {
            records.cardAccounts = data[i].CreditCardNo+"%"+data[i].CardNoFlag+"%"+data[i].UserCifId;
          } else {
            records.cardAccounts = records.cardAccounts +","+ data[i].CreditCardNo+"%"+data[i].CardNoFlag+"%"+data[i].UserCifId;
          }
        } 
        else if(type == "operativeAccounts"){
          var amount=data[i].WorkingBalance;
          var cur=data[i].Currency ;
          var Bal=commaSeparatorUtil(amount);
          var avlBal=Bal+" "+cur;
          accProcessedData[i].accountName = data[i].AccountName ;
          accProcessedData[i].availableBalance = avlBal;
          accProcessedData[i].accountID = formatAlphanumericString(data[i].IBAN);
          accProcessedData[i].hAccountId = data[i].AccountNumber;
          accProcessedData[i].accountType = getOperativeAccountType(data[i].AccountType);

          accProcessedData[i].hAccountId = data[i].AccountNumber;
          accProcessedData[i].AccountTransactionAccess = data[i].AccountTransactionAccess;
          accProcessedData[i].AccountStatus = data[i].AccountStatus;
          accProcessedData[i].unformattedBalance = data[i].WorkingBalance;
          accProcessedData[i].Currency = data[i].Currency;


          accProcessedData[i].category=type;
          if ((records.operativeAccounts === undefined)||(records.operativeAccounts === "")||(records.operativeAccounts === null)) {
            records.operativeAccounts = data[i].AccountNumber;
          } else {
            records.operativeAccounts = records.operativeAccounts +","+ data[i].AccountNumber;
          }
        } 


        else if(type == "finances"){
          var amount = data[i].OutstandingDueAmount;
          var cur = data[i].FinanceCurrencyCode ;
          var amt = commaSeparatorUtil(amount);
          var outstandingDue = amt+" "+cur;

          accProcessedData[i].accountType = data[i].LoanType ;
          accProcessedData[i].accountID = data[i].LoanContractNumber;
          accProcessedData[i].availableBalance =outstandingDue;
          accProcessedData[i].category=type;
          accProcessedData[i].hAccountId=data[i].LoanContractNumber;;
          if ((records.financeAccounts === undefined)||(records.financeAccounts === "")||(records.financeAccounts === null)) {
            records.financeAccounts = data[i].LoanContractNumber;
          } else {
            records.financeAccounts = records.financeAccounts +","+ data[i].LoanContractNumber;
          }
        }
        else if(type == "investments"){

          var amount=data[i].InvestmentAmount;
          curCode=data[i].InvestmentCurrencyCode ;
          var InvAmount=commaSeparatorUtil(amount);
          var InvestmentAmount= InvAmount+" "+curCode;
          accProcessedData[i].availableBalance = InvestmentAmount;
          accProcessedData[i].accountID = data[i].InvestmentContractNo;
          accProcessedData[i].accountType=data[i].InvestmentAccountType;
          accProcessedData[i].category=type;
          accProcessedData[i].hAccountId=data[i].InvestmentContractNo;
          if ((records.investmentAccounts === undefined)||(records.investmentAccounts === "")||(records.investmentAccounts === null)) {
            records.investmentAccounts = data[i].InvestmentContractNo;
          } else {
            records.investmentAccounts = records.investmentAccounts +","+ data[i].InvestmentContractNo;
          }
        }

      }

    }
    infoFrmDashboard.paramForAllDetails = records;
    navManger.setCustomInfo("frmDashboard",infoFrmDashboard);
    return accProcessedData;
  }, 

  showDashboard : function(cifObj) {

      applicationManager.getPresentationUtility().showLoadingScreen();

    var accountManager = applicationManager.getAccountManager();
    accountManager.fetchInternalAccounts(cifObj, this.presentationAccountsSucc, this.presentationAccountsErr);
  },
  presentationAccountsSucc : function(res) {
    var configManager = applicationManager.getConfigurationManager();
    var navManger = applicationManager.getNavigationManager();
    var entryPoint = navManger.getEntryPoint("DashboardService");
    var dashboardData = this.processAccountsData(res);
    this.setAllDashboardAccountData(res[0]);
    var currDate = new Date();
    var accountDataStatus = {
      timeStamp : currDate,
      hasAccountModified : false,
    }; 
    
    this.setAccountDataStatus(accountDataStatus);

    if(entryPoint === configManager.constants.DASHBOARDFLOW){
      navManger.navigateTo("frmDashboard");
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }else if(entryPoint === configManager.constants.TRANSFERFLOW){
      kony.print("presentationAccountsSucc res==="+JSON.stringify(res));
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
      transferModule.presentationController.setAccountsDataInTransfer(res[0]);
    }
    else if(entryPoint === configManager.constants.BILL_PAY){
      kony.print("presentationAccountsSucc bill pay res==="+JSON.stringify(res));
      var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule"); 
      var billPayType = billPayModule.presentationController.getBillPayType();
      //var configManager = applicationManager.getConfigurationManager();
      if(billPayType === configManager.constants.AHB_BILLPAY_MULTI ){
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        billPayModule.presentationController.checkForAccountsData(res[0],"frmBillPayConfirmation");
        //navManger.navigateTo("frmBillPayConfirmation"); 
      }else{
        if(billPayType === configManager.constants.AHB_BILLPAY_CHARITY){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          billPayModule.presentationController.checkForAccountsData(res[0],"frmBillPayAmount");
          //navManger.navigateTo("frmBillPayAmount"); 
        }
        else{
          var scope = scope_BillPayPresentationController;
          scope.asyncManager.setSuccessStatus(0,res[0]);
          if(scope.asyncManager.areAllservicesDone(2) ){ ///todo remove hardcoding
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            billPayModule.presentationController.checkForAccountsData(res[0],"frmBillPayAmount");
            //navManger.navigateTo("frmBillPayAmount"); 
          }
        } 
      }

    }
    else
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }  
    //Destroying this form as a part of flow where user changes the language from Settings Menu
    kony.application.destroyForm("frmLanguage");
  },
  presentationAccountsErr : function(err) {
    kony.print(err);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);

  },
  
  getAccountIntermediateDetails: function(records){
    kony.print("getAccountIntermediateDetails");
    kony.print("@@@@@ getAccountIntermediateDetails "+JSON.stringify(records));
    applicationManager.getPresentationUtility().showLoadingScreen();
    var accountManager = applicationManager.getAccountManager();
    kony.print("request sent for fetchAccountsIntermediateDetail=="+JSON.stringify(records));
    accountManager.fetchAccountsIntermediateDetail(records, this.presentationAccountsIntermediateSuccess, this.presentationAccountsIntermediateFailure);
  },
  presentationAccountsIntermediateSuccess: function(response){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
     kony.print("presentationAccountsIntermediateSuccess response - "+JSON.stringify(response));
    var navManager = applicationManager.getNavigationManager();
    var infoFrmAccountDetails = navManager.getCustomInfo("frmAccountDetails"); 
    if(!infoFrmAccountDetails){
      infoFrmAccountDetails = {};
    }
    var formattedResponse = checkServiceResponseForErrorCode(response);
    
	if(formattedResponse.responseCode === "200" && response.AccountDetails ){
      response = this.presentationAccountsIntermediateSuccessResFormat(response);
      infoFrmAccountDetails.allAccountsDetails = response.AccountDetails ;
      navManager.setCustomInfo("frmAccountDetails", infoFrmAccountDetails);    
      this.commonFunctionForNavigation("frmAccountDetails");
//       var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
//     	accountModule.presentationController.commonFunctionForNavigation("frmAccountDetails");
      kony.print("presentationAccountsIntermediateSuccess response - "+JSON.stringify(response));
    }else{
      kony.print("presentationAccountsIntermediateSuccess when responseCode not 200  - "+JSON.stringify(response));
      var dashboardController = applicationManager.getPresentationUtility().getController('frmDashboard', true);
      dashboardController.bindDashboardError(formattedResponse.message);
    }
  },
  presentationAccountsIntermediateFailure: function(error){
    var formattedResponse = checkServiceResponseForErrorCode(error);
    var dashboardController = applicationManager.getPresentationUtility().getController('frmDashboard', true);
    dashboardController.bindDashboardError(formattedResponse.message);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.print("error in getAccountIntermediateDetails==="+JSON.stringify(error));
  
  
   },
  
   getLinkedDebitCards:function(record){
    var accountManager = applicationManager.getAccountManager();
    
          var records = {
            "accountNumber" :record.accountNumber,
            "cifId" : record.cifId
          };
	kony.print("getLinkedDebitCards"+ records);
    applicationManager.getPresentationUtility().showLoadingScreen();      
    accountManager.getLinkedDebitCards(records, this.getLinkedDebitCardsSuccessCallback, this.getLinkedDebitCardsErrorCallback);  
    
  },
  getLinkedDebitCardsSuccessCallback:function(response){
    var resData = [];
    kony.print("getLinkedDebitCardsSuccessCallback"+JSON.stringify(response));
    var formattedResponse = checkServiceResponseForErrorCode(response);
    var navigationManager =applicationManager.getNavigationManager();
    var accDetails = navigationManager.getCustomInfo("frmAccountInfo");
    if(!accDetails){
      accDetails = {};
    }
    accDetails.linkedDebitCards = [];
    if(formattedResponse.responseCode ==="200" ){
      if(response.DebitCardsList){
      for (var i = 0; i < response.DebitCardsList.length; i++) {
        var tempObj;
        tempObj ={
          "cardNumber": response.DebitCardsList[i].cardNumber,
          "cardStatus": response.DebitCardsList[i].cardCustomStatus
        };
        resData.push(tempObj);
        kony.print("inside for loop PCSC"+resData[i]);

      }
      kony.print("getLinkedDebitCardsSuccessCallback ResData"+ resData);

      accDetails.linkedDebitCards = resData;
    }
    
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    navigationManager.setCustomInfo("frmAccountInfo",accDetails);
    navigationManager.navigateTo("frmAccountInfo");
    kony.print("getLinkedDebitCardsSuccessCallback ResData"+ JSON.stringify(accDetails));
  },
  
  getLinkedDebitCardsErrorCallback:function(err){
    applicationManager.getPresentationUtility().dismissLoadingScreen(); 
    kony.print("getLinkedDebitCardsErrorCallback"+ JSON.stringify(err));
  },
  presentationAccountsIntermediateSuccessResFormat : function (response){
    var navManger = applicationManager.getNavigationManager();
    var infoFrmDashboard = navManger.getCustomInfo("frmDashboard");

    if(infoFrmDashboard && infoFrmDashboard.accountData && response && response.AccountDetails){
      var accountData = infoFrmDashboard.accountData;
      response.AccountDetails = this.mergeArrays(response.AccountDetails, accountData.operativeAccounts, "operativeAccounts", "AccountNumber");
      response.AccountDetails = this.mergeArrays(response.AccountDetails, accountData.cards, "cardAccounts", "CreditCardNo");
      response.AccountDetails = this.mergeArrays(response.AccountDetails, accountData.finances, "financeAccounts", "LoanContractNumber");
      response.AccountDetails = this.mergeArrays(response.AccountDetails, accountData.investments, "investmentAccounts", "InvestmentContractNo");
    }
    return response;
  },
  mergeArrays :  function (destination, sourceOption, category, uniqueKey){
    for(let i=0; i<sourceOption.length; i++){
      for(let j=0; j<destination.length; j++){
        if(destination[j].Category === category){
          kony.print("mergeArrays destination key: "+destination[j][uniqueKey]);
          kony.print("mergeArrays destination value: "+JSON.stringify(destination[j]));
          if(destination[j][uniqueKey] == sourceOption[i].hAccountId){
            
            Object.assign(destination[j], sourceOption[i])
            
          }
        }                          
      }
    }
    return destination;
  },
  
  showAccountDetailView : function(entryPoint,pInfoFrmAccountDetails){
    var navManager = applicationManager.getNavigationManager();
     this.resetStatementParamsData();
    this.clearStatementData();
    navManager.setEntryPoint("myProducts", entryPoint);
     var infoFrmAccountDetails = {
        selectedAccountData : null,
        selectedAccountInfoFromDashboard : null,
        selectedAccountIdFromDashboard : null,
        allAccountsDetails : [],
        postedTransaction : []
      };
    if(pInfoFrmAccountDetails){
		infoFrmAccountDetails = pInfoFrmAccountDetails;
    }
    navManager.setCustomInfo("frmAccountDetails", infoFrmAccountDetails);

    var infoFrmDashboard = navManager.getCustomInfo("frmDashboard");
    if(!infoFrmDashboard){
      infoFrmDashboard ={
        paramForAllDetails:{}
      };
    }
    
    kony.print("paramForAllDetails in showAccountDetailView=="+JSON.stringify(infoFrmDashboard));
    var paramForAllDetails = infoFrmDashboard.paramForAllDetails;
    kony.print("paramForAllDetails in showAccountDetailView=="+JSON.stringify(paramForAllDetails));
    this.getAccountIntermediateDetails(paramForAllDetails);
  },

  fetchAccountStatamentsLink : function() {
    var accStatementObj = applicationManager.getAccountManager();
    var params = {
      "productType" : this.statementParamsData.productType,
      "accountNumber"   : this.statementParamsData.accountNumber,
      "cifId" : this.statementParamsData.cifId,
      "fromDate" : this.statementParamsData.fromDate,
      "toDate" :this.statementParamsData.toDate,
      "status": this.statementParamsData.status,
      "txnType": this.statementParamsData.transactionType,
      "fromAmount" : this.statementParamsData.fromAmount,
      "toAmount" : this.statementParamsData.toAmount,
      "txnNarration" : this.statementParamsData.merchant,
      "cardNoFlag" : this.statementParamsData.cardNoFlag,
      "startIndex" : this.statementData ? this.statementData.length : 0,
      "numberOfRecords" : this.statementParamsData.numberOfRecords
    };
    accStatementObj.fetchAccountStatments(params, this.statementsPresentationSuccessCallback, this.statementsPresentationErrorCallback);
  },
  statementsPresentationSuccessCallback : function(res){

    kony.print("statementsPresentationSuccessCallback"+JSON.stringify(res));
    var navManager = applicationManager.getNavigationManager();
	var accountDetailController = applicationManager.getPresentationUtility().getController('frmAccountDetails', true);
    var formattedResponse = checkServiceResponseForErrorCode(res);
    if(formattedResponse.responseCode === "200" && res.AccountStatements ){
      var infoFrmAccountDetails = navManager.getCustomInfo("frmAccountDetails");
      var currency = "";
      var selectedAccData = infoFrmAccountDetails.selectedAccountData;
      if(infoFrmAccountDetails && selectedAccData ){
         currency = selectedAccData.AccountCurrency || selectedAccData.CurrencyCode;;
      }
      

      for (var i = 0; i < res.AccountStatements.length; i++) {
        var tempObj;
        var statements = res.AccountStatements[i];
        kony.print("statements"+statements);       
        tempObj ={
          "Transaction": statements.TransactionNarration,
          "TransactionAmount": commaSeparatorUtil(appendCurrency(statements.TransactionAmount, currency)),
          "TransactionDate":statements.TransactionDate,
          "Status":statements.Status,
          "OtherTransactionInfo":statements,
           template: "flxStatementData"
        };
        this.statementData.push(tempObj);

      }
      //applicationManager.getPresentationUtility().dismissLoadingScreen();
      
      accountDetailController.populateStatementData(this.statementData);
    }
    else if(formattedResponse.responseCode === "MQ_0023" || formattedResponse.responseCode === "AHB_1023")
      {
        accountDetailController.populateStatementData([]);
      }
    else {
      var currFrom = kony.application.getCurrentForm().id;
      kony.print("statementsPresentationSuccessCallback currFrom "+ currFrom);
      var controller = applicationManager.getPresentationUtility().getController(currFrom, true);
      controller.bindGenericError(formattedResponse.message); 
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  },
  statementsPresentationErrorCallback :function(error) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var formattedResponse = checkServiceResponseForErrorCode(error);
    kony.print("error in statementsPresentationErrorCallback "+ error);
    var currFrom = kony.application.getCurrentForm().id;
      kony.print("statementsPresentationSuccessCallback currFrom "+ currFrom);
      var controller = applicationManager.getPresentationUtility().getController(currFrom, true);
      controller.bindGenericError(formattedResponse.message); 
  },
  getStatementData : function(){
    return this.statementData;
  },
  clearStatementData : function(){
    this.statementData = [];
  },
  resetStatementParamsData : function(){

    var fotmatUtilManager = applicationManager.getFormatUtilManager();
    var date = new Date();
    var pastDate = new Date();
    var pastYear = pastDate.getFullYear() - 1;
    pastDate.setFullYear(pastYear);
    var toDate = fotmatUtilManager.getFormatedDateString(date, "Ymd");
    var fromDate = fotmatUtilManager.getFormatedDateString(pastDate, "Ymd");

    this.statementParamsData.productType = "";
    this.statementParamsData.accountNumber = "";
    this.statementParamsData.cifId = "";
    this.statementParamsData.fromDate = fromDate;
    this.statementParamsData.toDate = toDate;
    this.statementParamsData.status ="";
    this.statementParamsData.transactionType = "";
    this.statementParamsData.fromAmount = "";
    this.statementParamsData.toAmount = "";
    this.statementParamsData.merchant = "";
    this.statementParamsData.cardNoFlag = "";
    this.statementParamsData.startIndex = 0;
    this.statementParamsData.numberOfRecords = 10;

  },
  
  getStatementParamsData : function(){
    return this.statementParamsData;
  },
  setStatementParamsData : function(pData){
    this.statementParamsData.productType = pData.productType ? pData.productType :  this.statementParamsData.productType;
    this.statementParamsData.accountNumber = pData.accountNumber ? pData.accountNumber : this.statementParamsData.accountNumber;
    this.statementParamsData.cifId = pData.cifId ? pData.cifId :  this.statementParamsData.cifId ;
    this.statementParamsData.fromDate = pData.fromDate ? pData.fromDate : this.statementParamsData.fromDate;
    this.statementParamsData.toDate = pData.toDate ? pData.toDate : this.statementParamsData.toDate;
    this.statementParamsData.status = pData.status ? pData.status : this.statementParamsData.status;
    this.statementParamsData.transactionType = pData.transactionType ? pData.transactionType : this.statementParamsData.transactionType;
    this.statementParamsData.fromAmount = pData.fromAmount ? pData.fromAmount :  this.statementParamsData.fromAmount;
    this.statementParamsData.toAmount = pData.toAmount ? pData.toAmount : this.statementParamsData.toAmount;
    this.statementParamsData.merchant = pData.merchant ? pData.merchant : this.statementParamsData.merchant;
    this.statementParamsData.cardNoFlag = pData.cardNoFlag ? pData.cardNoFlag : this.statementParamsData.cardNoFlag;
    this.statementParamsData.startIndex = pData.startIndex ? pData.startIndex : this.statementParamsData.startIndex;
    this.statementParamsData.numberOfRecords = pData.numberOfRecords ? pData.numberOfRecords : this.statementParamsData.numberOfRecords;
  }

});


