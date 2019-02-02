define({
  pendingaccounts: null,
  postedaccounts: null,
  segmentData: null,
  objRec: '',
  statementParamsData : {},
  isLazyLoadingEnabled : true,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  onNavigate: function(obj) {
    if (obj === undefined) {
      var newObj = {
        "view": "familyCheckingAcc"
      };
      obj = newObj;
    }
    this.objRec = obj;
  },
  studioActions:function(){
    this.view.segPage.onRowClick = this.showAccountDetailInfoPage;
    this.view.segAccDetails.onRowClick = this.showStatementInfoPage;
//     if(this.isLazyLoadingEnabled){
//     	this.view.segAccDetails.onReachingEnd = this.getStatements;
//     }
    this.view.segPage.onSwipe = this.onSwipeSegment;
    this.view.MainHeader.btnBack.onClick = this.onBackFrmAccountDetails;
    this.view.MainHeader.flxBack.onClick = this.onBackFrmAccountDetails;
    //this.view.flxHeader.isVisible = false;
    this.view.flxFooter.isVisible = true;
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUACCOUNTS);
   this.view.btnBillPayment.onClick = this.navigateFromBillPayment;
   this.view.btnQuickTransfer.onClick = this.navigateToQuickTransfer;
   this.view.btnQuickPay.onClick = this.navigateFromQuickPay;
  },
 
  frmAccountDetailsPreshow: function() {
    var self = this;
    this.view.segAccDetails.height ="100%";
    this.view.lblNoRecordsAvailable.isVisible = false;
    var configManager = applicationManager.getConfigurationManager();
    var navManager = applicationManager.getNavigationManager();
    var entryPoint = navManager.getEntryPoint("myProducts");
    if(entryPoint != "frmDashboard"){
      this.view.MainHeader.flxBack.setVisibility(false);
      this.view.MainHeader.btnBack.setVisibility(false);
    }else{
      this.view.MainHeader.flxBack.setVisibility(true);
      this.view.MainHeader.btnBack.setVisibility(true);
    }  
    this.view.segAccDetails.setVisibility(true);
    this.view.segPage.pageSkin = "sknSegffffff"; 
    this.studioActions();
    this.populateCarouselView();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  ChecksView: function(){
    var scope = this;
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
    scope.res = transMode.presentationController.getDateRange(365);
    var searchStartDate=scope.res.searchStartDate.split(" ");
    var searchEndDate=scope.res.searchEndDate.split(" ");
    var fromDate=searchStartDate[0];
    var toDate=searchEndDate[0];
    var navManager = applicationManager.getNavigationManager();
    var accountDetail = navManager.getCustomInfo("frmAccountDetails");
    var accountNumber = accountDetail.selectedAccountIdFromDashboard;
    var checkViewRequest={
      "accountNumber":accountNumber, 
      "fromDate":fromDate,
      "toDate":toDate,
      "depositsData" : []
      
    };
    kony.print(" Request input parameters for checksList "+JSON.stringify(checkViewRequest));
    navManager.setCustomInfo("frmCheckDeposit", checkViewRequest);
    var checkViewModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    
     checkViewModule.presentationController.fetchDeposits(checkViewRequest);
  },

  showcardlessPopUp:function(){
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    if(cardlessModule.presentationController.qrSuccessFlag){
      var transactionID =  cardlessModule.presentationController.getTransactionId();
      applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardLess.transactionMessage")+transactionID);
      cardlessModule.presentationController.setTransactionId();
      cardlessModule.presentationController.qrSuccessFlag =false;
    }
  },

  setFlxOptionsBasedOnType:function(accountType)
  {
    switch(accountType)
    {
      case "Checking": this.commonOptions();
        break;
      case "Savings":this.commonOptions();
        break;
      case "Deposit":this.depositRelatedOptions();
        break;
      case "CreditCard" :this.creditCardRelatedOptions();
        break;
      case "Loan" :this.loanRelatedOptions();
        break;

    }
  },
  commonOptions:function()
  {
    this.view.btnWithdrawCash.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.withdrawCash");
    this.view.btnWithdrawCash.onClick=function()
    {
      var navManager = applicationManager.getNavigationManager();
      var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
      var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
      cardlessModule.presentationController.clearTransactionObject();
      cardlessModule.presentationController.navigateToCashRecipientForm(accountsDetails.selectedAccountData); 
      //cardlessModule.presentationController.navigateToQRCashWithdrawForm(accountsDetails.selectedAccountData);  	
    };
  },
  depositRelatedOptions:function()
  {
    this.view.btnWithdrawCash.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.NEWDEPOSIT");
    this.view.btnWithdrawCash.onClick=function()
    {
      var navManager = applicationManager.getNavigationManager();
      navManager.setEntryPoint("Deposit","frmAccountDetails");
      var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
      var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
      checkDepositModule.presentationController.navigateFromAccountDetails(accountsDetails.selectedAccountData); 
    }; 
  },
  creditCardRelatedOptions:function()
  {
    this.view.btnWithdrawCash.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.MAKEAPAYMENT");
    this.view.btnWithdrawCash.onClick=function()
    {
      var navManager = applicationManager.getNavigationManager();

      var navigateToForm=navManager.setEntryPoint("makeatransfer","frmAccountDetails");
      var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.navigateToTransfers(accountsDetails.selectedAccountData); 
    };
  },
  loanRelatedOptions:function()
  {
    this.view.btnWithdrawCash.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.PAYDUEAMOUNT");
    this.view.btnWithdrawCash.onClick=function()
    {
      var navManager = applicationManager.getNavigationManager();

      var navigateToForm=navManager.setEntryPoint("makeatransfer","frmAccountDetails");
      var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.navigateToTransfers(accountsDetails.selectedAccountData); 
    };
  },
  setTransactionsDataforAggregated: function() {

    var postedTransactionsdata = [],
        pendingTransactiondata = [];

    var navMan = applicationManager.getNavigationManager();
    var forUtility = applicationManager.getFormatUtilManager();
    var accountsDetails = navMan.getCustomInfo("frmAccountDetails");
    var postedTransactions = accountsDetails.externalPostedTransactions;
    var pendingTransaction = accountsDetails.externalPendingTransactions;
    this.view.lblBalanceValue.text = accountsDetails.selectedAccountData["availableBalance"];
    this.view.lblCurrBalValue.text = accountsDetails.selectedAccountData["availableBalance"];
    this.view.customHeader.lblLocateUs.text = accountsDetails.selectedAccountData["accountName"];
    this.view.title = accountsDetails.selectedAccountData["accountName"];
    this.view.lblDueDate.text = "";
    this.view.segTransactions.widgetDataMap = {
      lblTransaction: "description",
      lblDate: "TransactionDate",
      lblTransactionAmount: "Amount",
      transactionId: "TransactionId",
      lblHeader: "lblHeader"
    };

    if (pendingTransaction.length > 0 && postedTransactions.length > 0) {
      var data = [
        [{
          "lblHeader": "Pending Transactions"
        }, pendingTransaction],
        [{
          "lblHeader": "Posted Transactions"
        }, postedTransactions]
      ];
      this.segmentData = data;
      this.view.segTransactions.setData(data);
      this.pendingaccounts = this.view.segTransactions.data[0][1];
      this.postedaccounts = this.view.segTransactions.data[1][1];

    } else if (pendingTransaction.length > 0) {
      var data = [
        [{
          "lblHeader": "Pending Transactions"
        }, pendingTransaction]
      ];

      this.segmentData = data;
      this.view.segTransactions.setData(data);
      this.pendingaccounts = this.view.segTransactions.data[0][1];
      this.postedaccounts = [];

    } else if (postedTransactions.length > 0) {
      var data = [
        [{
          "lblHeader": "Posted Transactions"
        }, postedTransactions]
      ];
      this.segmentData = data;
      this.view.segTransactions.setData(data);
      this.postedaccounts = this.view.segTransactions.data[0][1];
      this.pendingaccounts = [];
    } else {
      this.segmentData = [];
      this.pendingaccounts = [];
      this.postedaccounts = [];
      this.view.segTransactions.isVisible = false;
      this.view.flxNoTransactions.isVisible = true;
    }

  },
  setSegmentData: function() {
    var postedTransactionsdata = [],
        pendingTransactiondata = [];

    var navMan = applicationManager.getNavigationManager();
    // var configManager = applicationManager.getConfigurationManager();
    var forUtility = applicationManager.getFormatUtilManager();
    var accountsDetails = navMan.getCustomInfo("frmAccountDetails");
    var accountsData = accountsDetails.selectedAccountData;
    var postedTransactions = accountsDetails.postedTransaction;
    var pendingTransaction = accountsDetails.pendingTransactions;
    this.view.segTransactions.widgetDataMap = {
      lblTransaction: "description",
      lblDate: "scheduledDate",
      lblTransactionAmount: "amount",
      transactionId: "transactionId",
      lblHeader: "lblHeader"
    };
    if (pendingTransaction.length > 0 && postedTransactions.length > 0) {
      var data = [
        [{
          "lblHeader": "Pending Transactions"
        }, pendingTransaction],
        [{
          "lblHeader": "Posted Transactions"
        }, postedTransactions]
      ];
      this.segmentData = data;
      this.view.segTransactions.setData(data);
      this.pendingaccounts = this.view.segTransactions.data[0][1];
      this.postedaccounts = this.view.segTransactions.data[1][1];

    } else if (pendingTransaction.length > 0) {
      var data = [
        [{
          "lblHeader": "Pending Transactions"
        }, pendingTransaction]
      ];

      this.segmentData = data;
      this.view.segTransactions.setData(data);
      this.pendingaccounts = this.view.segTransactions.data[0][1];
      this.postedaccounts = [];

    } else if (postedTransactions.length > 0) {
      var data = [
        [{
          "lblHeader": "Posted Transactions"
        }, postedTransactions]
      ];
      this.segmentData = data;
      this.view.segTransactions.setData(data);
      this.postedaccounts = this.view.segTransactions.data[0][1];
      this.pendingaccounts = [];
    } else {
      this.segmentData = [];
      this.pendingaccounts = [];
      this.postedaccounts = [];
      this.view.segTransactions.isVisible = false;
      this.view.flxNoTransactions.isVisible = true;
    }

  },
  setBalanceData: function() {
    var navMan = applicationManager.getNavigationManager();
    // var configManager = applicationManager.getConfigurationManager();
    var forUtility = applicationManager.getFormatUtilManager();
    var accountsDetails = navMan.getCustomInfo("frmAccountDetails");
    var accountsData = accountsDetails.selectedAccountData;
    this.view.customHeader.lblLocateUs.text = accountsData.accountName;
    this.view.title = accountsData.accountName;
    var configManager = applicationManager.getConfigurationManager();
    if (accountsData.accountType === configManager.constants.CHECKING ||accountsData.accountType === configManager.constants.SAVINGS) {
      this.view.lblAvailableBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.AvailableBalance");
      this.view.lblCurrentBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.CurrentBalance");
      this.view.lblBalanceValue.text = forUtility.formatAmountandAppendCurrencySymbol(accountsData.availableBalance);
      this.view.lblCurrBalValue.text = forUtility.formatAmountandAppendCurrencySymbol(accountsData.currentBalance);
      this.view.lblDueDate.text = "";

    }
    if (accountsData.accountType === configManager.constants.CREDITCARD) {
      this.view.lblAvailableBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.AvailableBalance");
      this.view.lblCurrentBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.UpcomingBill");
      this.view.lblBalanceValue.text=forUtility.formatAmountandAppendCurrencySymbol(accountsData.outstandingBalance);
      this.view.lblCurrBalValue.text=forUtility.formatAmountandAppendCurrencySymbol(accountsData.currentAmountDue);
      var dateobj = forUtility.getDateObjectfromString(accountsData.dueDate, "YYYY-MM-DD");
      this.view.lblDueDate.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accountdetails.dueon") + " " + forUtility.getFormatedDateString(dateobj, forUtility.APPLICATION_DATE_FORMAT);

    }
    if (accountsData.accountType === configManager.constants.LOAN||accountsData.accountType === configManager.constants.MORTGAGE) {
      this.view.lblAvailableBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.OutstandingPrincipleBalance");
      this.view.lblCurrentBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.CurrentDue");
      this.view.lblBalanceValue.text=forUtility.formatAmountandAppendCurrencySymbol(accountsData.outstandingBalance);
      this.view.lblCurrBalValue.text=forUtility.formatAmountandAppendCurrencySymbol(accountsData.currentAmountDue);
      var dateobj = forUtility.getDateObjectfromString(accountsData.dueDate, "YYYY-MM-DD");
      this.view.lblDueDate.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accountdetails.dueon") + " " + forUtility.getFormatedDateString(dateobj, forUtility.APPLICATION_DATE_FORMAT);

    }
    if (accountsData.accountType === configManager.constants.DEPOSIT) {
      this.view.lblAvailableBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.AvailableBalance");
      this.view.lblCurrentBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.MaturityDate");
      this.view.lblBalanceValue.text = forUtility.formatAmountandAppendCurrencySymbol(accountsData.availableBalance);
      var dateobj = forUtility.getDateObjectfromString(accountsData.maturityDate, "YYYY-MM-DD");
      this.view.lblCurrBalValue.text=forUtility.getFormatedDateString(dateobj, forUtility.APPLICATION_DATE_FORMAT);
    }


  },
  tbxSearchOnTextChange: function() {

    var navObj = applicationManager.getNavigationManager();
    var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
    if (searchtext) {
      var data=[],headers=[];
      headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions"));
      headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions"));
      data.push(this.pendingaccounts);
      data.push(this.postedaccounts);
      this.view.segTransactions.isVisible = true;
      this.view.flxNoTransactions.isVisible = false;
      this.view.flxBalance.isVisible = false;
      this.view.flxOptions.isVisible = false;
      this.view.segTransactions.removeAll();
      var searchobj = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("description",searchtext,data,headers);
      if (searchobj.length > 0) {
        this.view.segTransactions.setData(searchobj);
      } else {
        this.view.segTransactions.isVisible = false;
        this.view.flxNoTransactions.isVisible = true;
      }
    } else {
      if (this.segmentData.length > 0) {
        this.view.segTransactions.setData(this.segmentData);
        this.view.segTransactions.isVisible = true;
        this.view.flxNoTransactions.isVisible = false;
        this.view.flxBalance.isVisible = false;
        this.view.flxOptions.isVisible = false;
      } else {
        this.view.flxBalance.isVisible = false;
        this.view.flxOptions.isVisible = false;
        this.view.segTransactions.isVisible = false;
        this.view.flxNoTransactions.isVisible = true;
      }
    }
  },
//    setFooter: function() {
//           this.view.customFooter.lblAccounts.skin = "sknLbl424242SSP20px";
//           this.view.customFooter.flxAccSelect.setVisibility(true);
//           this.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
//           this.view.customFooter.flxTransferSel.setVisibility(false);
//           this.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
//           this.view.customFooter.flxBillSelected.setVisibility(false);
//           this.view.customFooter.lblMore.skin = "sknLblA0A0A0SSP20px";
//           this.view.customFooter.flxMoreSelect.setVisibility(false);
//       },
  flxMainContainerOnScrolling: function() {
    if (this.view.flxMainContainer.contentOffsetMeasured.y >= 165) {
      //alert("fixed");
      this.view.segTransactions.height = "100%";
      this.view.flxMainContainer.forceLayout();
    }

  },

  segTransactionsOnTouchEnd: function() {
    if ((this.view.segTransactions.height !== 'preferred')&&(this.view.flxHeaderSearchbox.isVisible===false)) {
      if (this.view.segTransactions.contentOffsetMeasured.y <= 1) {
        this.view.segTransactions.height = "preferred";
        this.view.flxMainContainer.forceLayout();
      }
    }
  },
  createViewForFamilyCheckingAccount: function() {
    this.view.customHeader.lblLocateUs.text = "FAMILY CHECKING ACCOUNT";
    this.view.lblDueDate.setVisibility(false);
    this.view.btnWithdrawCash.text = kony.i18n.getLocalizedString("kony.mb.accdetails.withdrawCash");
    this.view.lblAvailableBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
  },
  createViewForCreditCard: function() {
    this.view.customHeader.lblLocateUs.text = "MY CREDIT CARD";
    this.view.lblDueDate.setVisibility(true);
    this.view.btnWithdrawCash.text = kony.i18n.getLocalizedString("kony.mb.accdetails.makeAPayment");
    this.view.lblAvailableBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
  },
  createViewForHomeLoanAccount: function() {
    this.view.customHeader.lblLocateUs.text = "HOME LOAN ACCOUNT";
    this.view.lblDueDate.setVisibility(true);
    this.view.btnWithdrawCash.text = kony.i18n.getLocalizedString("kony.mb.accdetails.payDueAmount");
    this.view.lblAvailableBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingPrincipalBal");
  },
  createViewForDepositAccount: function() {
    this.view.customHeader.lblLocateUs.text = "MY DEPOSIT ACCOUNT";
    this.view.lblDueDate.setVisibility(false);
    this.view.lblCurrentBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.maturityDate");
    this.view.lblCurrBalValue.text = "12/06/2017";
    this.view.btnWithdrawCash.text = kony.i18n.getLocalizedString("kony.mb.accdetails.newDeposit");
    this.view.lblAvailableBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
  },
  segTransactionsOnRowClick: function() {
    var navMan = applicationManager.getNavigationManager();
    var accountsDetails = navMan.getCustomInfo("frmAccountDetails");
    var type = accountsDetails.selectedAccountData["type"];
    if (type.toLowerCase().trim() === "external") {
      return;
    }
    var selectedSectionIndex = Math.floor(this.view.segTransactions.selectedRowIndex[0]);
    var selectedRowIndex = Math.floor(this.view.segTransactions.selectedRowIndex[1]);
    var transactionData = this.view.segTransactions.data[selectedSectionIndex][1][selectedRowIndex];
    var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accMod.presentationController.setEntryPoints(transactionData.transactionType);
    navMan.setCustomInfo("frmTransactionDetails", transactionData);
    navMan.setEntryPoint("frmTransactionDetails","Accounts");
    //navMan.setEntryPoint("makeatransfer","frmAccountDetails");
    accMod.presentationController.commonFunctionForNavigation("frmTransactionDetails");
  },
  flxSearchOnTouchEnd: function() {
    this.view.flxHeaderSearchbox.setVisibility(true);
    this.view.flxHeader.setVisibility(false);
    this.view.flxSearch.setVisibility(false);
    this.view.flxShadow.setVisibility(false);
    this.view.flxBalance.setVisibility(false);
    this.view.flxSeperator2.setVisibility(false);
    this.view.flxOptions.setVisibility(false);
    this.view.segTransactions.height = "100%";
    this.view.customSearchbox.tbxSearch.setFocus(true);
    this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
    this.view.flxMainContainer.forceLayout();
  },
  btnCancelOnClick: function() {
    this.view.flxHeaderSearchbox.setVisibility(false);
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.view.flxSearch.setVisibility(true);
    this.view.flxShadow.setVisibility(false);
    this.view.flxBalance.setVisibility(true);
    this.view.flxSeperator2.setVisibility(true);
    this.view.customSearchbox.tbxSearch.text="";
    var navManager = applicationManager.getNavigationManager();
    var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
    var type = accountsDetails.selectedAccountData["type"];
    if (type.toLowerCase().trim() === "internal") {   
      this.view.flxOptions.isVisible = true;
    }

    this.view.segTransactions.height = "preferred";
    if (this.segmentData.length > 0) {
      this.view.segTransactions.setData(this.segmentData);
      this.view.segTransactions.isVisible = true;
      this.view.flxNoTransactions.isVisible = false;
      this.view.flxBalance.isVisible = true;
    } else {
      this.view.flxBalance.isVisible = true;
      this.view.segTransactions.isVisible = false;
      this.view.flxNoTransactions.isVisible = true;
    }

    this.view.flxMainContainer.forceLayout();
  },
  flxBackOnClick: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },
  /**
   * @function
   *
   */
  getStatements: function() {
    
    var navManager = applicationManager.getNavigationManager();
     applicationManager.getPresentationUtility().showLoadingScreen();
    this.statementParamsData.startIndex = this.view.segAccDetails.data ?  this.view.segAccDetails.data[this.view.segAccDetails.data.length-1][1].length : 0;

    var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");

      
      accMod.presentationController.setStatementParamsData(this.statementParamsData);
      accMod.presentationController.fetchAccountStatamentsLink();
    
  },
  navigateToAdvanceSearch: function() {
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accountMod.presentationController.commonFunctionForNavigation("frmAdvanceSearch");
    //custom metric API to generate Reports
    KNYMetricsService.sendCustomMetrics("frmAccountDetails", {"Search Transactions":"Initial Search"});
  },
  gotoAccountInfo: function(){
    var navManager = applicationManager.getNavigationManager();
    var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
    var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    if(String(accountsDetails.selectedAccountData.type).toLowerCase().trim() === "external") {
      accountModule.presentationController.fetchInfoForExternalBankAccount();
    } else {
      navManager.setCustomInfo("frmAccountInfo", accountsDetails);
      accountModule.presentationController.commonFunctionForNavigation("frmAccountInfo");
    }
  },
  appendEmptySection: function(dataParam){
    var data = dataParam;
    var emptySection = [
      {
        "template":"flxEmptyHeader",
      },
      [
        {
          "template":"flxAccountDetailsEmptyRow"
        }
      ]
    ];
    data.unshift(emptySection);
    return data;
  },
  showSuccessPopup : function(refID,type){
    // TO DO i18n's
    var msg;
    if(type==="delete")
    {
      msg = "Transaction was cancelled successfully with reference ID : " + (refID.transactionId||refID.refernceId);
    }
    else{
      if(refID.referenceId)
        msg = "Transaction was done successfully with transaction ID : "+ refID.referenceId;
      else
        msg = "Transaction was edited successfully with reference ID : " + refID.transactionId;
    }
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);

  },
  showErrorPopup: function(err){

    applicationManager.getDataProcessorUtility().showToastMessageError(this,JSON.stringify(err));
  },
  onSwipeSegment: function(seguiWidget, sectionIndex, rowIndex, isSelected){
    var segData = this.view.segPage.data;
    var accountDetail = {};
	this.view.segAccDetails.height ="100%";
    this.view.lblNoRecordsAvailable.isVisible = false;

    kony.print("onSwipeSegment segData "+JSON.stringify(segData));
    if(segData && !isEmpty(rowIndex) && segData.length > rowIndex){
      kony.print("onSwipeSegment seguiWidget "+JSON.stringify(seguiWidget));
      kony.print(" onSwipeSegment rowIndex "+rowIndex);
      kony.print("onSwipeSegment accountDetail 0 -  "+JSON.stringify(segData[0].accountDetail));
      accountDetail = segData[rowIndex].accountDetail;
      var hAccountId =segData[rowIndex].hAccountId;
      var navMan = applicationManager.getNavigationManager();
      var infoFrmAccountDetails = navMan.getCustomInfo("frmAccountDetails");
      if(!infoFrmAccountDetails){
        infoFrmAccountDetails = {};
      }
      infoFrmAccountDetails.selectedAccountData = accountDetail;
      infoFrmAccountDetails.selectedAccountIdFromDashboard=hAccountId;
      
  
      navMan.setCustomInfo("frmAccountDetails", infoFrmAccountDetails);

      kony.print("onSwipeSegment accountDetail "+JSON.stringify(accountDetail));     
    }
     var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
     accountMod.presentationController.resetStatementParamsData();
    this.showIntermediateAccountDetailSection(accountDetail);
  },

  populateCarouselView :  function (){
    var navMan = applicationManager.getNavigationManager();

    var infoFrmAccountDetails = navMan.getCustomInfo("frmAccountDetails");
    var carouselData = [];
    var selectedIndex = null;

    kony.print("populateCarouselView  infoFrmAccountDetails  "+JSON.stringify(infoFrmAccountDetails));

    if(infoFrmAccountDetails && infoFrmAccountDetails.allAccountsDetails){
      var allAccountsDetails = infoFrmAccountDetails.allAccountsDetails;
      var selectedAccountIdFromDashboard = infoFrmAccountDetails.selectedAccountIdFromDashboard;

      for(var i = 0; i < allAccountsDetails.length; i++){
        var allAccountsDetailsRow = allAccountsDetails[i];
        var carouselDataRow = {};
        var accountId = "";
        switch(allAccountsDetailsRow.Category){
          case "operativeAccounts":
            carouselDataRow.template = "flxAccountInformation";
             var AvailableBalance = commaSeparatorUtil(allAccountsDetailsRow.AvailableBalance);
            
            carouselDataRow.lblAccounts = getOperativeAccountType(allAccountsDetailsRow.AccountType);
            carouselDataRow.lblAvailableBalance = kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
            carouselDataRow.lblAccountNumber = formatAlphanumericString(allAccountsDetailsRow.IBAN);
            carouselDataRow.lblBalanceAmount = AvailableBalance + " " + allAccountsDetailsRow.AccountCurrency;
            //carouselDataRow.lblAED = allAccountsDetailsRow.AccountCurrency ;
            accountId = allAccountsDetailsRow.AccountNumber;
            carouselDataRow.imgInfo = {isVisible : true}
            carouselDataRow.accountDetail = allAccountsDetailsRow;
            carouselDataRow.hAccountId = accountId;
            carouselData[carouselData.length] = carouselDataRow;
            carouselDataRow.metainfo  = {clickable:true };
            carouselDataRow.metaInfo  = {clickable:true }

            break;
          case "financeAccounts":
            var OutstandingDueAmount = commaSeparatorUtil(allAccountsDetailsRow.OutstandingDueAmount);
            carouselDataRow.template = "flxAccountInformation";
            carouselDataRow.lblAccounts = allAccountsDetailsRow.LoanType ;
            carouselDataRow.lblAccountNumber = allAccountsDetailsRow.LoanContractNumber ;
            carouselDataRow.lblAvailableBalance = kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
            accountId = allAccountsDetailsRow.LoanContractNumber;
            carouselDataRow.lblBalanceAmount = OutstandingDueAmount + " " + allAccountsDetailsRow.CurrencyCode ;
            //carouselDataRow.lblAED = allAccountsDetailsRow.CurrencyCode ;
            carouselDataRow.accountDetail = allAccountsDetailsRow;
            carouselDataRow.hAccountId = accountId;
            carouselData[carouselData.length] = carouselDataRow;
            carouselDataRow.imgInfo = {isVisible : true};
            carouselDataRow.metainfo  = {clickable:true };
            carouselDataRow.metaInfo  = {clickable:true };
            break; 
          case "investmentAccounts":
            var InvAmount = commaSeparatorUtil(allAccountsDetailsRow.InvestmentAmount);
            carouselDataRow.template = "flxAccountInformation";
            carouselDataRow.lblAccounts = allAccountsDetailsRow.accountType;
            carouselDataRow.lblAccountNumber = allAccountsDetailsRow.InvestmentContractNo  ;
            carouselDataRow.lblAvailableBalance = kony.i18n.getLocalizedString("kony.ahb.accountDetails.balance");
            accountId = allAccountsDetailsRow.InvestmentContractNo ;
            carouselDataRow.lblBalanceAmount = InvAmount  + " " + allAccountsDetailsRow.CurrencyCode;
            //carouselDataRow.lblAED = allAccountsDetailsRow.CurrencyCode  ;
            carouselDataRow.imgInfo = {isVisible : false}
            carouselDataRow.accountDetail = allAccountsDetailsRow;
            carouselDataRow.hAccountId = accountId;
            carouselDataRow.metainfo  = {clickable:false }; // non clickable
            carouselData[carouselData.length] = carouselDataRow;
            break; 
          case "cardAccounts":
            var formatedCardNumber = formatAlphanumericString(allAccountsDetailsRow.CreditCardNo);
            formatedCardNumber = getMaskedString(7,14,"*",formatedCardNumber);
            carouselDataRow.template = "flxAHBCards";
            carouselDataRow.lblCardNumber = formatedCardNumber;
            carouselDataRow.lblName = allAccountsDetailsRow.CardName;
            carouselDataRow.imgCard = this.getCardImage(allAccountsDetailsRow.CardSubType) ;
            accountId = allAccountsDetailsRow.CreditCardNo ;
            carouselDataRow.accountDetail = allAccountsDetailsRow;
            carouselDataRow.hAccountId = accountId;
            carouselData[carouselData.length] = carouselDataRow;
            carouselDataRow.metainfo  = {clickable:true }
             carouselDataRow.metaInfo  = {clickable:true };
            carouselDataRow.imgInfo = {isVisible : true}
            
            break;    

        }
        
        // show seelcted account in dashbaord as the trhe default card
        if(selectedAccountIdFromDashboard === accountId){
          selectedIndex = i;
        }
      }


      this.view.segPage.widgetDataMap = {"lblAccounts" : "lblAccounts", 
                                         "lblAccountNumber" : "lblAccountNumber",
                                         "lblAvailableBalance" : "lblAvailableBalance",
                                         "lblBalanceAmount" : "lblBalanceAmount",
                                         "lblAED": "lblAED",
                                         "accountDetail" : "accountDetail",
                                         "lblCardNumber" : "lblCardNumber",
                                         "lblName" : "lblName",
                                        "imgInfo":"imgInfo",
                                        "imgCard" :"imgCard",
                                        "hAccountId" : "hAccountId"};

      this.view.segPage.setData(carouselData);
      if(selectedIndex){
        this.view.segPage.selectedRowIndex = [0, selectedIndex];
        infoFrmAccountDetails.selectedAccountData = allAccountsDetails[selectedIndex];
        infoFrmAccountDetails.selectedAccountIdFromDashboard=allAccountsDetails[selectedIndex].hAccountId;
        
      }
      else{
        this.view.segPage.selectedRowIndex = [0, 0]; 
        infoFrmAccountDetails.selectedAccountData = allAccountsDetails[0];
        infoFrmAccountDetails.selectedAccountIdFromDashboard=allAccountsDetails[0].hAccountId;
      }
      this.showIntermediateAccountDetailSection(infoFrmAccountDetails.selectedAccountData);
    }
    else{
      this.showEmptyDetailPage();
    }

    navMan.setCustomInfo("frmAccountDetails", infoFrmAccountDetails);
    kony.print("populateCarouselView carouselData "+JSON.stringify(carouselData));


  },

  showEmptyDetailPage : function(){
    this.view.segPage.setData([]);

  },

  showAccountDetailInfoPage : function(){
   var selectedRowItems = this.view.segPage.selectedRowItems;
    kony.print(" showAccountDetailInfoPage selectedRowItems" + JSON.stringify(selectedRowItems));
    
     //#ifdef iphone
   	 	selectedRowItems= selectedRowItems ? selectedRowItems[0]: null ;
    //#endif 
    if(selectedRowItems && selectedRowItems.accountDetail){
      var accountInfo = {};
      accountInfo.accountDetail = selectedRowItems.accountDetail;
      accountInfo.selectedAccountIdFromDashboard = accountInfo.accountDetail.hAccountId;
      var navManager = applicationManager.getNavigationManager();
       navManager.setCustomInfo("frmAccountInfo", accountInfo);
      kony.print(" showAccountDetailInfoPage accountInfo" + JSON.stringify(accountInfo));
      if(selectedRowItems.accountDetail.Category === "operativeAccounts" && selectedRowItems.accountDetail.cifId && accountInfo.accountDetail.AccountNumber){
        var accountId =  accountInfo.accountDetail.AccountNumber;
        var cifId = accountInfo.accountDetail.cifId;
        this.callLinkDebitCardService(accountId, cifId);

      }else{
        
        navManager.navigateTo("frmAccountInfo");
      }
    }
  },
  showStatementInfoPage:function(){
    var selectedRowItems = this.view.segAccDetails.selectedRowItems;
    kony.print(" showAccountDetailInfoPage selectedRowItems" + JSON.stringify(selectedRowItems));
    if (selectedRowItems && selectedRowItems[0].OtherTransactionInfo) {
      var navManager = applicationManager.getNavigationManager();
      var accInfoData = navManager.getCustomInfo("frmAccountDetails");
      if(!accInfoData){
        accInfoData ={};
      }
      accInfoData.statementData =selectedRowItems[0];
      navManager.setCustomInfo("frmAccountInfo", accInfoData);
      navManager.navigateTo("frmAccountInfo");
    }
  },
  callLinkDebitCardService: function(accountId, cifId) {
    var record = {
      "accountNumber" :accountId,
      "cifId" : cifId,
    };
    kony.print("callLinkDebitCardService"+JSON.stringify(record));
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accountMod.presentationController.getLinkedDebitCards(record);
  },
  /**
     * Sets the Intermediate Account Detail data 
     * @param {object} record - Formatted data of the selected row of the segment from Account Detail Service
     * @returns nothing
     */
  showIntermediateAccountDetailSection: function(pAccountData) {
    kony.print("showIntermediateAccountDetailSection===" + JSON.stringify(pAccountData));
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accountMod.presentationController.clearStatementData();
    this.view.segAccDetails.removeAll();
    var segmentData1 = [];
    var segAccountsHeader = [];
    var headerText = "";
    var filterImage = "filter.png";
   
    this.statementParamsData.productType = pAccountData.Category;
    this.statementParamsData.numberOfRecords = 10;
    this.view.segAccDetails.widgetDataMap = {

      "lblCurrency": "lblCurrency",
      "lblName": "key",
      "lblValue": "value",
      "imgFilter": "imgFilter",
      "lblHeader": "lblHeader",
      "lblAvailableExtAccounts": "lblHeader",
      "lblCurrency": "lblAvailableExtAccounts",
      "lblTransaction": "Transaction",
      "lblAmount": "TransactionAmount",
      "lblDate":  "TransactionDate",
      "lblAccount":	"TransactionDate",
    };
    if(pAccountData.Category === "operativeAccounts"){
      kony.print("operativeAccounts");
      //this.view.flxAccountsDetail.height = "75%"
       this.view.segAccDetails.top = "4.8%";
      this.isLazyLoadingEnabled = true;
      this.statementParamsData.accountNumber = pAccountData.AccountNumber;
      this.statementParamsData.cifId = pAccountData.cifId;
      this.view.flxOperativeAccounts.setVisibility(true);
      this.view.flxCardDetails.setVisibility(false);
      headerText = kony.i18n.getLocalizedString("kony.mb.PFMCategorisedTransactions.Title");
      if (pAccountData.AvailableBalance > 0) {
        this.view.btnQuickTransfer.setEnabled(true);
        this.view.btnQuickPay.setEnabled(true);
        this.view.btnQuickTransfer.skin = "sknAHBGsc12ptBff6d00Bfffff";
        this.view.btnQuickTransfer.focusSkin = "sknAHBGsc12ptBff6d00Bfffff";
        this.view.btnQuickPay.skin = "sknAHBGsc12ptBff6d00Bfffff";
        this.view.btnQuickPay.focusSkin = "sknAHBGsc12ptBff6d00Bfffff";
        this.view.btnQuickTransfer.onClick = this.navigateToQuickTransfer;
   		this.view.btnQuickPay.onClick = this.navigateFromQuickPay;
        
      } else {
        this.view.btnQuickTransfer.onClick = null;
        this.view.btnQuickTransfer.skin = "sknAHBGscB12ptBeaeaeaTffffff";
        this.view.btnQuickTransfer.focusSkin = "sknAHBGscB12ptBeaeaeaTffffff";
        this.view.btnQuickPay.onClick = null;
        
        this.view.btnQuickPay.skin = "sknAHBGscB12ptBeaeaeaTffffff";
        this.view.btnQuickPay.focusSkin = "sknAHBGscB12ptBeaeaeaTffffff";
      }

      this.view.flxSeparator.setVisibility(false);
    } else if (pAccountData.Category === "financeAccounts") {
      //this.view.flxAccountsDetail.height = "85%"
       this.view.segAccDetails.top = "0%";

      this.isLazyLoadingEnabled = false;
      this.statementParamsData.accountNumber = pAccountData.LoanContractNumber;
      this.statementParamsData.cifId = pAccountData.CustomerNo;
      this.view.flxOperativeAccounts.setVisibility(false);
      this.view.flxCardDetails.setVisibility(false);
      this.view.flxSeparator.setVisibility(true);
      headerText = kony.i18n.getLocalizedString("kony.ahb.payments.header"); 
      segmentData1 = [{
        key: kony.i18n.getLocalizedString("kony.ahb.Accounts.nextPaymentAmount"),
        value: commaSeparatorUtil(pAccountData.InstallmentAmount) + " " + pAccountData.CurrencyCode
      }, {
        key: kony.i18n.getLocalizedString("kony.ahb.Accounts.nextPaymentDate"),
        value: getDateStringWithFormat(pAccountData.NextInstallmentDate, "DD/MM/YYYY")
      }];
    } else if (pAccountData.Category === "investmentAccounts") {
       this.view.segAccDetails.top = "0%";
      //this.view.flxAccountsDetail.height = "85%"
      this.isLazyLoadingEnabled = false;
      this.statementParamsData.accountNumber = pAccountData.accountID;
      this.statementParamsData.cifId = pAccountData.CustomerNo;
      this.view.flxOperativeAccounts.setVisibility(false);
      this.view.flxCardDetails.setVisibility(false);
      this.view.flxSeparator.setVisibility(true);
      headerText = kony.i18n.getLocalizedString("kony.ahb.payments.header");
      segmentData1 = [{
        key: kony.i18n.getLocalizedString("kony.ahb.Accounts.expectedProfitRate"),
        value: pAccountData.ProfitRate
      }, {
        key: kony.i18n.getLocalizedString("kony.ahb.Accounts.tenure"),
        value: pAccountData.DepositTenor + " " + kony.i18n.getLocalizedString("kony.ahb.accounts.tenureMonths")
      }, {
        key: kony.i18n.getLocalizedString("kony.ahb.Accounts.maturityDate"),
        value: getDateStringWithFormat(pAccountData.MaturityDate, "DD/MM/YYYY")
      }, {
        key: kony.i18n.getLocalizedString("kony.ahb.Accounts.profitAccountNumber"),
        value: formattedCardNumber(pAccountData.ProfitLiquidationAccount)
      }];
    } else if (pAccountData.Category === "cardAccounts") {
       this.view.segAccDetails.top = "0%";
     // this.view.flxAccountsDetail.height = "75%"
      this.isLazyLoadingEnabled = true;
      this.statementParamsData.accountNumber = pAccountData.CreditCardNo;
      this.statementParamsData.cifId = pAccountData.CIFID;
      this.statementParamsData.cardNoFlag=pAccountData.PrimaryCardNumFlag;
      this.view.flxOperativeAccounts.setVisibility(false);
      this.view.flxCardDetails.setVisibility(true);
      this.view.flxSeparator.setVisibility(false);
      headerText = kony.i18n.getLocalizedString("kony.mb.PFMCategorisedTransactions.Title");
      if (pAccountData.CardStatus && (pAccountData.CardStatus === "true" && pAccountData.AvailableCreditLimit > 0)) {
        this.view.btnBillPayment.setEnabled(true);
        this.view.btnBillPayment.onClick = this.navigateFromBillPayment;
        this.view.btnBillPayment.skin = "sknAHBGsc12ptBff6d00Bfffff";
        this.view.btnBillPayment.focusSkin = "sknAHBGsc12ptBff6d00Bfffff";
      }
      else{
        this.view.btnBillPayment.onClick = null;
        this.view.btnBillPayment.skin = "sknAHBGscB12ptBeaeaeaTffffff";
        this.view.btnBillPayment.focusSkin = "sknAHBGscB12ptBeaeaeaTffffff";
      }
      segmentData1 = [{
        key: kony.i18n.getLocalizedString("kony.ahb.Accounts.availableCardLimit"),
        value: commaSeparatorUtil(pAccountData.AvailableCreditLimit) + " " + pAccountData.CurrencyCode
      }, {
        key: kony.i18n.getLocalizedString("kony.ahb.Accounts.totalOutstandingBalance"),
        value: commaSeparatorUtil(pAccountData.CurrentOutStandingAmount) + " " + pAccountData.CurrencyCode
      }];
    }
    if (segmentData1.length) {
      segAccountsHeader[segAccountsHeader.length] = [{
        template: "flxDummy"
      },
                                                     segmentData1
                                                    ];
    }
    segAccountsHeader[segAccountsHeader.length] = [{
      "lblHeader": headerText,
      "imgFilter": {
        "src": filterImage,
        "onTouchEnd": this.navigateToAdvanceSearch
      },
      template: "flxTransactionHeader"
    },
                                                   []
                                                  ];
    this.view.segAccDetails.setVisibility(true);
    this.view.segAccDetails.setData(segAccountsHeader);
    var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    var statementData = accMod.presentationController.getStatementParamsData();
    var configManager = applicationManager.getConfigurationManager();
    if(pAccountData.Category === "operativeAccounts" &&statementData && statementData.status === configManager.constants.ONHOLD){
      accMod.presentationController.setStatementParamsData(this.statementParamsData);
      this.populateOnHoldData(pAccountData.TransactionsOnHold);
    }else{
      this.getStatements();
    }
    this.view.forceLayout();
  },
  
  onBackFrmAccountDetails: function() { 
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();    
  },
  
  bindChequeListError : function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
  },
  getCardImage : function (cardSubType){
    var currentMapping = {
      smart_cover_classic_no_fee	:	"ahbcard.png"	,
      uae_fa	:	"uae_fa.png"	,
      mcqibla_plat	:	"ahbcard.png"	,
      red_crescent	:	"ahbcard.png"	,
      laha_plat_mc	:	"ahbcard.png"	,
      mc_business	:	"ahbcard.png"	,
      smart_cover_gold_with_fee	:	"ahbcard.png"	,
      smart_cover_classic_with_fee	:	"ahbcard.png"	,
      visa_platinum_ujrah_staff	:	"ahbcard.png"	,
      uaefaa_staff	:	"uaefaa_staff.png"	,
      mc_world	:	"mc_world.png"	,
      visa_classic_ujrah	:	"ahbcard.png"	,
      visa_classic_tawaruq	:	"ahbcard.png"	,
      visa_gold_ujrah	:	"uaefaa_staff.png"	,
      visa_gold_tawaruq	:	"ahbcard.png"	,
      visa_classic_ujrah_staff	:	"ahbcard.png"	,
      visa_gold_ujrah_staff	:	"ahbcard.png"	,
      smart_cover_gold_no_fee	:	"ahbcard.png"	,
      vp_red_crescent	:	"ahbcard.png"	,
      smart_platinum_fee	:	"ahbcard.png"	,
      smart_platinum_no_fee	:	"ahbcard.png"	,
      mc_qibla_plt_fee	:	"ahbcard.png"	,
      smart_platinum_nbc	:	"ahbcard.png"	,
      adnoc_classic_fee	:	"ahbcard.png"	,
      adnoc_gold_nf	:	"ahbcard.png"	,
      adnoc_gold_fee	:	"ahbcard.png"	,
      adnoc_plat_nf	:	"ahbcard.png"	,
      adnoc_plat_fee	:	"ahbcard.png"	,
      adnoc_qibla	:	"ahbcard.png"	,
      adnoc_laha	:	"ahbcard.png"	,
      adnoc_uae_fa	:	"ahbcard.png"	,
      mc_world_elite	:	"mc_world_elite.png"	,
      mc_world_elite_1	:	"ahbcard.png"	,
      mcw_elite_exclsv	:	"mcw_elite_exclsv.png"	,
      mc_world_1	:	"ahbcard.png"	,
      mc_world_2	:	"ahbcard.png"	,
      mc_test_range	:	"ahbcard.png"	,
      adnoc_classic_non_fee	:	"ahbcard.png"	
    };
    var cardImg = "ahbcard.png";
    if(cardSubType){
      cardSubType = cardSubType.toLowerCase();
      cardSubType = cardSubType.replace(/\s/g, '_');
      cardSubType = cardSubType.replace(/__/g, '_');
      cardSubType = cardSubType.replace(/-/g, '');//(/\s/g, "");
      if(currentMapping[cardSubType]){
        cardImg = currentMapping[cardSubType];
        kony.print("getCardImage - currentMapping[cardSubType] - " + currentMapping[cardSubType]);
      }
    }
    kony.print("getCardImage - cardSubType - " + cardSubType);
    kony.print("getCardImage - cardImg - " + cardImg);
    return cardImg;
  },
  
  
  /*-----------------------------------------------------------------------------------
  Name: 	navigateToQuickTransfer
  Purpose: 	initiate Quick Transfer
  Author: 	Bipin
  Date: 	19/11/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/
  navigateToQuickTransfer : function(){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var navManager = applicationManager.getNavigationManager();
    var infoFrmAccountDetails = navManager.getCustomInfo("frmAccountDetails");
    transferModule.presentationController.transferFromAccount(infoFrmAccountDetails.selectedAccountData,"frmAccountDetails"); 
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	navigateFromQuickPay
  Purpose: 	initiate Quick Pay
  Author: 	Fariha
  Date: 	6/12/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/
  navigateFromQuickPay : function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var navManager = applicationManager.getNavigationManager();
    var infoFrmAccountDetails = navManager.getCustomInfo("frmAccountDetails");
    billPayMod.presentationController.quickPay(infoFrmAccountDetails.selectedAccountData,"frmAccountDetails"); 
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	navigateFromBillPayment
  Purpose: 	initiate bill pay
  Author: 	Fariha
  Date: 	6/12/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/
  navigateFromBillPayment : function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var navManager = applicationManager.getNavigationManager();
    var infoFrmAccountDetails = navManager.getCustomInfo("frmAccountDetails");
    billPayMod.presentationController.billPayment(infoFrmAccountDetails.selectedAccountData,"frmAccountDetails"); 
  },
   /*-----------------------------------------------------------------------------------
    Name:   populateStatementData
    Purpose:    assign statement data to segment
    Author:     B S Krishna
    Date:   11/12/2018
    Input:  data Selected row Data
    Return:     NA
    ------------------------------------------------------------------------------------*/
  populateStatementData :function(pData){

    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var lData;
    if(pData && pData.length)
    {
      lData = pData;
    }else{
      lData =  [{"Transaction" : kony.i18n.getLocalizedString("kony.AHB.ALERT.MQ_0023"),
                 "Separator" : {isVisible : false},
                 template: "flxTransfers" }];
    }
    var segData = [];
    var segAccountsHeader = this.view.segAccDetails.data;

    this.view.segAccDetails.widgetDataMap = {
      "lblCurrency": "lblCurrency",
      "lblName": "key",
      "lblValue": "value",
      "imgFilter": "imgFilter",
      "lblHeader": "lblHeader",
      "lblAvailableExtAccounts": "lblHeader",
      "lblCurrency":"lblAvailableExtAccounts",
      "lblTransaction": "Transaction",
      "lblAmount": "TransactionAmount",
      "lblDate":  "TransactionDate",
      "lblAccount":	"Status",
      "flxSeparator":"Separator",
    };
    if (!lData) {
      lData = [];
    }
    if (segAccountsHeader && segAccountsHeader.length) {
      var length = segAccountsHeader.length - 1;
      if(!(segData)){
        segData = [];
      }

      segData = segData.concat(lData);
      segAccountsHeader[length][1] = segData;  
      this.view.segAccDetails.setVisibility(true);
      this.view.segAccDetails.setData(segAccountsHeader);
      this.view.forceLayout();
    }

    },
  /*-----------------------------------------------------------------------------------
    Name:   navigateToAdvanceSearch
    Purpose:    navigates to the advacned search page
    Author:     B S Krishna
    Date:   11/12/2018
    Input:  NA
    Return:     NA
    ------------------------------------------------------------------------------------*/
  navigateToAdvanceSearch: function(){

    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("AdvanceSearch","AHBStatements");
    navManager.navigateTo("frmAdvanceSearch");
  },
//   /*-----------------------------------------------------------------------------------
//     Name:   callStatementService
//     Purpose:    calls Statements service
//     Author:     B S Krishna
//     Date:   11/12/2018
//     Input:  NA
//     Return:     NA
//     ------------------------------------------------------------------------------------*/
//   callStatementService : function(){
//     var navManager = applicationManager.getNavigationManager();
//     var data = navManager.getCustomInfo("frmAdvanceSearch");
//     this.getStatements(data.statementsData);
//   },
  bindGenericError: function(err) {
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(this, err);
    
  },
  populateOnHoldData : function(data){
  	 if(!data){
            data = [];
        }
        var segData = [];
        var statements;
        for (var i = 0; i < data.length; i++) {
          statements = data[i];
          statements["Status"] = kony.i18n.getLocalizedString( "kony.ahb.statementFilter.onhold") ;
          var tempObj ={
          "Transaction": statements.Description ,
          "TransactionAmount": commaSeparatorUtil(appendCurrency(statements.TransactionAmount, statements.TransactionCurrency)),
          "TransactionDate":statements.TransactionDate,
          "Status":"On Hold",
          "OtherTransactionInfo":statements,
           "template": "flxTransfers"
        };
        segData.push(tempObj);
        }
    	
         
        this.populateStatementData(segData);
  }




});