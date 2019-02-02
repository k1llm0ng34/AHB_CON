define({
    objRec: '',
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
    accDetails:'',
  	statementData : '',
    selectedAccountData:'',
    preshowAccInfo: function() {
      this.view.flxTransDetails.setVisibility(false);
      this.view.flxHeader.isVisible = false;
      this.view.flxFooter.isVisible = true;
      var configManager = applicationManager.getConfigurationManager();
      var MenuHandler =  applicationManager.getMenuHandler();
      MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUACCOUNTS);
//         if(kony.os.deviceInfo().name !== "iPhone"){
//           this.view.flxHeader.isVisible = true;
//         }
//         else{
//           this.view.flxHeader.isVisible = false;
//         }
      	this.view.lblSeparator1.skin = "sknFlxf1f1f1";
     	this.view.lblSeparator2.skin = "sknFlxf1f1f1";
      	this.hideAllDetailView();
      	this.view.MainHeader.btnBack.onClick = this.onBackFrmAccountInfoDetails;
        this.view.MainHeader.flxBack.onClick = this.onBackFrmAccountInfoDetails;
        var navigationManager =applicationManager.getNavigationManager();
          
     
       this.accDetails =navigationManager.getCustomInfo("frmAccountInfo").accountDetail;
       this.statementData = navigationManager.getCustomInfo("frmAccountInfo").statementData;
       this.selectedAccountData = navigationManager.getCustomInfo("frmAccountInfo").selectedAccountData
       /* this.btnCancelOnClick();
        this.accDetails=this.accDetails.selectedAccountData;
        this.view.flxAccNoToggleHL.onClick = this.flxAccNoToggleHLToggleOnClick;
        this.view.flxAccNoToggleCC.onClick = this.flxAccNoToggleCCOnClick;
        this.view.flxAccNoToggle.onClick = this.flxAccNoToggleOnClick;
        this.view.flxRouteNoToggle.onClick = this.flxRouteNoToggleOnClick;
        this.view.customHeader.btnRight.onClick=this.customHeaderBtnRightOnClick;
        this.view.btnEditNickName.onClick=this.btnEditNickNameOnClick;
        this.view.btnCancel.onClick=this.btnCancelOnClick;
        this.view.customHeader.flxBack.onClick=this.flxBackOnClick;
        this.view.flxAccNoToggleDA.onClick=this.flxAccNoToggleDAOnClick;
        this.view.flxPopupNickName.setVisibility(false); 
        this.view.customHeader.lblLocateUs.text = this.accDetails.accountName;
        this.view.title=this.accDetails.accountName;      
        var configManager = applicationManager.getConfigurationManager();
        if(String(this.accDetails.type).trim().toLowerCase() === "external") {
            this.createViewForExternalAccountDetails();
        } else {
            if (this.accDetails.accountType === configManager.constants.CHECKING ||this.accDetails.accountType === configManager.constants.SAVINGS) {
                this.createViewForFamilyCheckingAcc();
            }
            if (this.accDetails.accountType === configManager.constants.CREDITCARD) {
                this.createViewForCreditCard();
            }
            if (this.accDetails.accountType === configManager.constants.LOAN||this.accDetails.accountType === configManager.constants.MORTGAGE) {
                this.createViewForHomeLoanAcc();
            }
            if (this.accDetails.accountType === configManager.constants.DEPOSIT) {
                this.createViewForDepositAccount();
            }
        }*/
      
      //getting account details.
      kony.print("accountDetails:" + this.accDetails);
      if(this.accDetails){
        if(this.accDetails.Category === "operativeAccounts") {
          this.opeOperativeAccountDetailsPage(this.accDetails);
          this.populateLinkedDebitCardData();
        } 
        else if(this.accDetails.Category === "financeAccounts"){
          this.openFinanceAccountDetailsPage(this.accDetails)
        }else if(this.accDetails.Category === "cardAccounts"){
          this.openCardAccountDetailsPage(this.accDetails)
        }
      }
      if(this.statementData){
        this.populateStatementsData(this.statementData);
      }
      

      var currentForm = navigationManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    createViewForFamilyCheckingAcc: function() {
        this.view.flxContainerCheckingAcc.setVisibility(true);
        this.view.flxExternalAccountContainer.setVisibility(false);
        this.view.flxContainerCreditCard.setVisibility(false);
        this.view.flxContainerHomeLoan.setVisibility(false);
        this.view.flxContainerDepositAccount.setVisibility(false);
        this.view.btnCallBank.onClick=this.callBank;
        this.view.btnMsgBank.onClick=this.messageBank;
        this.PopulateCheckingAccount();
        this.view.forceLayout();
    },
   PopulateCheckingAccount:function()
  {
    var configManager = applicationManager.getConfigurationManager();
    var forUtility=applicationManager.getFormatUtilManager();
    this.view.lblAvailBalValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.availableBalance);
    this.view.lblCurrBalValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.currentBalance);
    this.view.lblPendingDepValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.pendingDeposit);
    this.view.lblWithdrawValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.pendingWithdrawal);
    this.view.lblAccNoValue.text=applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
    this.view.lblRoutingNoValue.text=this.accDetails.routingNumber;
    this.view.lblSwiftCodeValue.text=this.accDetails.swiftCode;
    this.view.lblAccTypeValue.text=this.accDetails.accountType;
    //this.view.lblAccHoldrValue.text=this.accDetails.accountHolder;
    var accJson=JSON.parse(this.accDetails.accountHolder);
    this.view.lblAccHoldrValue.text=accJson.fullname;
    if(this.accDetails.jointHolders)
       this.view.lblJointAccHoldrValue.text=this.accDetails.jointHolders;
    else
      this.view.flxJointAccHolder.setVisibility(false);
    this.view.lblAccNickNameVal.text=this.accDetails.nickName;
  },
  
  createViewForExternalAccountDetails: function() {
      this.view.flxExternalAccountContainer.setVisibility(true);
      this.view.flxContainerCheckingAcc.setVisibility(false);
      this.view.flxContainerCreditCard.setVisibility(false);
      this.view.flxContainerHomeLoan.setVisibility(false);
      this.view.flxContainerDepositAccount.setVisibility(false);
      this.view.btnCallBank.onClick = this.callBank;
      this.view.btnMsgBank.onClick = this.messageBank;
      this.populateExternalAccountDetail();
      this.view.forceLayout();
  },
  
  populateExternalAccountDetail: function() {
    var configManager = applicationManager.getConfigurationManager();
    var forUtility=applicationManager.getFormatUtilManager();
    var externalAccountDetails = this.accDetails.externalAccountDetails;
    this.view.lblExternalAccountAvailBalValue.text = forUtility.formatAmountandAppendCurrencySymbol(externalAccountDetails.AvailableBalance);
    this.view.lblExternalAccountNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(externalAccountDetails.Number);
    this.view.lblExternalAccountTypeValue.text = externalAccountDetails.TypeDescription;
    this.view.lblExternalAccountHoldrValue.text = externalAccountDetails.AccountHolder;
    this.view.lblExternalAccountNickNameVal.text = externalAccountDetails.NickName;
    this.view.lblExternalAccountBankNameValue.text = externalAccountDetails.BankName;
  },
  
    createViewForCreditCard: function() {
        this.view.flxContainerCheckingAcc.setVisibility(false);
        this.view.flxContainerCreditCard.setVisibility(true);
        this.view.flxExternalAccountContainer.setVisibility(false);
        this.view.flxContainerHomeLoan.setVisibility(false);
        this.view.flxContainerDepositAccount.setVisibility(false);
        this.populateCreditCardAccount();
        this.view.btnCallBankCC.onClick=this.callBank;
        this.view.btnMsgBankCC.onClick=this.messageBank;
        this.view.forceLayout();
    },
   populateCreditCardAccount:function()
  {
    var configManager = applicationManager.getConfigurationManager();
    var forUtility=applicationManager.getFormatUtilManager();
    this.view.lblOutstandingBalValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.outstandingBalance);
    this.view.lblUpcomingBalvalue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.currentAmountDue);
    var dateobj=forUtility.getDateObjectfromString(this.accDetails.dueDate,"YYYY-MM-DD");    
    this.view.lblDueDateValue.text=  forUtility.getFormatedDateString(dateobj,forUtility.APPLICATION_DATE_FORMAT);
    this.view.lblCurrentBalanceValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.availableCredit);
    this.view.lblCreditLmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.creditLimit);
    this.view.lblRwdBalValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.availablePoints);
    this.view.lblntRateValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.interestRate);
    this.view.lblAccNoValueCC.text=applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
    this.view.lblCardTypeValue.text=this.accDetails.accountType;
    var dateobj1=forUtility.getDateObjectfromString(this.accDetails.openingDate,"YYYY-MM-DD");    
    this.view.lblCardIssueDateVal.text=  forUtility.getFormatedDateString(dateobj1,forUtility.APPLICATION_DATE_FORMAT);
   // this.view.lblCardHolderName.text=this.accDetails.accountHolder;
    var accJson=JSON.parse(this.accDetails.accountHolder);
    this.view.lblCardHolderNameVal.text=accJson.fullname;
    this.view.lblNickNameValue.text=this.accDetails.nickName;
  },
    createViewForHomeLoanAcc: function() {
        this.view.flxContainerCheckingAcc.setVisibility(false);
        this.view.flxContainerCreditCard.setVisibility(false);
        this.view.flxContainerHomeLoan.setVisibility(true);
        this.view.flxExternalAccountContainer.setVisibility(false);
        this.view.flxContainerDepositAccount.setVisibility(false);
        this.populateLoanAccount();
        this.view.btnCallBankHL.onClick=this.callBank;
        this.view.btnMsgBankHL.onClick=this.messageBank;
        this.view.forceLayout();
    },
  populateLoanAccount:function()
  {
    var configManager = applicationManager.getConfigurationManager();
    var forUtility=applicationManager.getFormatUtilManager();
    this.view.lblOutstandingBalVal.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.outstandingBalance);
    this.view.lblPrincipalBalVal.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.principalBalance);
    this.view.lblPrincipalAmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.principalValue);
    this.view.lblInterestRateValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.interestRate);
    this.view.lblInterestPaidValue.text=this.accDetails.interestPaidYTD;
    this.view.lblIntPaidLastYearValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.interestPaidLastYear);
    this.view.lblLastPmtAmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.lastPaymentAmount);
    var dateobj=forUtility.getDateObjectfromString(this.accDetails.lastPaymentDate,"YYYY-MM-DD");    
    this.view.lblLastPmtDateValue.text=  forUtility.getFormatedDateString(dateobj,forUtility.APPLICATION_DATE_FORMAT);
    this.view.lblPayOffAmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.payoffAmount);
    this.view.lblAccNoValueHL.text=applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
    this.view.lblAccTypeValHL.text=this.accDetails.accountType;
    this.view.lblLoanTypeValue.text=this.accDetails.accountType;
    this.view.lblPropertyAddressValue.text=""; 
    var dateobj1=forUtility.getDateObjectfromString(this.accDetails.openingDate,"YYYY-MM-DD");    
    this.view.lblLoanOriginationDateVal.text=  forUtility.getFormatedDateString(dateobj1,forUtility.APPLICATION_DATE_FORMAT);
    
  },
    createViewForDepositAccount:function(){
        this.view.flxContainerCheckingAcc.setVisibility(false);
        this.view.flxContainerCreditCard.setVisibility(false);
        this.view.flxContainerHomeLoan.setVisibility(false);
        this.view.flxContainerDepositAccount.setVisibility(true);
        this.view.flxExternalAccountContainer.setVisibility(false);
        this.populateDepositAccount();
        this.view.btnCallBankDA.onClick=this.callBank;
        this.view.btnMsgBankDA.onClick=this.messageBank;
        this.view.forceLayout();
    },
    populateDepositAccount:function()
  {
    var configManager = applicationManager.getConfigurationManager();
    var forUtility=applicationManager.getFormatUtilManager();
    this.view.lblAvailBalValueDA.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.availableBalance);
    this.view.lblCurrBalValueDA.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.currentBalance);
    this.view.lblInterestEarnedValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.interestEarned);
    this.view.lblMaturityAmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.maturityAmount);
    var dateobj=forUtility.getDateObjectfromString(this.accDetails.maturityDate,"YYYY-MM-DD");    
    this.view.lblMaturityDateValue.text =  forUtility.getFormatedDateString(dateobj,forUtility.APPLICATION_DATE_FORMAT);
    this.view.lblMaturityOptionValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.maturityOption);
    this.view.lblDividentRateValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.dividendRate);
    this.view.lblDividentPaidValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.dividendPaidYTD);
    this.view.lblDividentPaidAmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.dividendLastPaidAmount);
    this.view.lblAccNoValueDA.text=applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
   // this.view.lbllAccHolderValueDA.text=this.accDetails.accountHolder;
    var accJson=JSON.parse(this.accDetails.accountHolder);
    this.view.lbllAccHolderValueDA.text=accJson.fullname;
    this.view.lblNickNameDAValue.text=this.accDetails.nickName;
    
  },
    flxAccNoToggleHLToggleOnClick: function() {
        if (this.view.imgAccNoToggleHL.src === "view.png") {
            this.view.imgAccNoToggleHL.src = "viewactive.png";
            this.view.lblAccNoValueHL.text = this.accDetails.accountID;
            this.view.flxAccountNumberHL.forceLayout();
        } else {
            this.view.imgAccNoToggleHL.src = "view.png";
            this.view.lblAccNoValueHL.text = applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
            this.view.flxAccountNumberHL.forceLayout();
        }
    },
    flxAccNoToggleCCOnClick: function() {
        if (this.view.imgAccNoToggleCC.src === "view.png") {
            this.view.imgAccNoToggleCC.src = "viewactive.png";
            this.view.lblAccNoValueCC.text = this.accDetails.accountID;
            this.view.flxAccountNumberCC.forceLayout();
        } else {
            this.view.imgAccNoToggleCC.src = "view.png";
            this.view.lblAccNoValueCC.text = applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
            this.view.flxAccountNumberCC.forceLayout();
        }
    },
    flxAccNoToggleOnClick: function() {
        if (this.view.imgAccNoToggle.src === "view.png") {
            this.view.imgAccNoToggle.src = "viewactive.png";
            this.view.lblAccNoValue.text = this.accDetails.accountID;
            this.view.flxAccountNumber.forceLayout();
        } else {
            this.view.imgAccNoToggle.src = "view.png";
            this.view.lblAccNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
            this.view.flxAccountNumber.forceLayout();
        }
    },
    flxRouteNoToggleOnClick: function() {
        if (this.view.imgRouteNoToggle.src === "view.png") {
            this.view.imgRouteNoToggle.src = "viewactive.png";
            this.view.lblRoutingNoValue.text = this.accDetails.routingNumber;
            this.view.flxRouteNoToggle.forceLayout();
        } else {
            this.view.imgRouteNoToggle.src = "view.png";
            this.view.lblRoutingNoValue.text = this.accDetails.routingNumber;
            this.view.flxRouteNoToggle.forceLayout();
        }
    },
  flxAccNoToggleDAOnClick:function(){
       if (this.view.imgAccNoToggleDA.src === "view.png") {
            this.view.imgAccNoToggleDA.src = "viewactive.png";
            this.view.lblAccNoValueDA.text = this.accDetails.accountID;
            this.view.flxAccNoToggleDA.forceLayout();
        } else {
            this.view.imgAccNoToggleDA.src = "view.png";
            this.view.lblAccNoValueDA.text = applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
            this.view.flxAccNoToggleDA.forceLayout();
        }
  },
  customHeaderBtnRightOnClick:function(){
   this.view.flxPopupNickName.setVisibility(true);
   this.view.flxHeader.setEnabled(false);
   this.view.flxContainerCheckingAcc.setEnabled(false);
   this.view.flxContainerCreditCard.setEnabled(false);
   this.view.flxContainerHomeLoan.setEnabled(false);
   this.view.flxContainerDepositAccount.setEnabled(false);
   //this.view.flxFooter.setEnabled(false); 
  },
  btnCancelOnClick:function(){
   this.view.flxPopupNickName.setVisibility(false);
   this.view.flxHeader.setEnabled(true);
   this.view.flxContainerCheckingAcc.setEnabled(true);
   this.view.flxContainerCreditCard.setEnabled(true);
   this.view.flxContainerHomeLoan.setEnabled(true);
   this.view.flxContainerDepositAccount.setEnabled(true);
  // this.view.flxFooter.setEnabled(true);   
  },
  btnEditNickNameOnClick:function(){
   applicationManager.getPresentationUtility().showLoadingScreen();
   var navMan=applicationManager.getNavigationManager();
   var isExternal = this.accDetails.type === "external" ? true : false ;
   if(isExternal) {
     navMan.setCustomInfo("frmAccInfoEdit", this.accDetails.externalAccountDetails.NickName);
   }
   else {
     navMan.setCustomInfo("frmAccInfoEdit",this.accDetails.nickName);
   }
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accountMod.presentationController.commonFunctionForNavigation("frmAccInfoEdit");
  },
   flxBackOnClick:function(){
   var navMan=applicationManager.getNavigationManager();
  navMan.goBack();
   },
  callBank:function()
  {
     kony.phone.dial("000-0000-0021-000-0000-0023");
 
  },
  messageBank:function()
  {
   kony.phone.sendSMS("customer_support@konybank.com","");
},
  
  opeOperativeAccountDetailsPage : function(pAccountDetails){
    kony.print("opeOperativeAccountDetailsPage - pAccountDetails "+ JSON.stringify(pAccountDetails) );
    var segmentData = [];
    kony.print("pAccountDetails"+pAccountDetails);
    this.view.segAccountInformation.widgetDataMap = {
      lblSpending:"key",
      lblAmountSpent: "value"
    };

    this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.accountDetails.heading");
    this.view.flxOperativeAccountDetail.setVisibility(true);
    this.view.lblNoCardsLinked.isVisible = false;
    
      
      this.view.mainDetails.lblCurrentAccount.text = getOperativeAccountType(pAccountDetails.AccountType);
      this.view.mainDetails.lblCurrentAccountValue.text = "" ; // unused in component
      this.view.mainDetails.lblAmount.text = appendCurrency(commaSeparatorUtil(pAccountDetails.AvailableBalance) , pAccountDetails.AccountCurrency);
    
      this.view.mainDetails.lblAmountCurrency.setVisibility(false);
      this.view.mainDetails.lblAmountCurrency.text = "";
      this.view.mainDetails.lblAmount.width = "99%";
      this.view.mainDetails.lblAmountCurrency.right = "0dp";
      this.view.mainDetails.lblAmountCurrency.width = "1%";
    
      this.view.mainDetails.lblCurrentAccount.width = "99%" ;
      this.view.mainDetails.lblCurrentAccountValue.width = "1%";




      segmentData = [
        {
          key : {text: kony.i18n.getLocalizedString("kony.ahb.accountDetails.Iban"), maxwidth : "40%" , maxWidth : "40%" , width : "40%"},
          value :  {text : formatAlphanumericString(pAccountDetails.IBAN), maxwidth : "60%" , maxWidth : "60%", width : "60%"},
        },
        {
          key : kony.i18n.getLocalizedString("kony.mb.Manage.AccountNumber"),
          value :  formattedCardNumber(pAccountDetails.AccountNumber)
        },
        {
          key : kony.i18n.getLocalizedString("kony.mb.accdetails.swiftCode"),
          value : "HLALAEAAXXX" 
        },
        {
          key : kony.i18n.getLocalizedString("kony.ahb.accountDetails.accountHolder"),
          value : pAccountDetails.AccountTitle 
        },
        {
          key : kony.i18n.getLocalizedString("kony.ahb.accountDetails.accountHolderCif"),
        value : pAccountDetails.cifId 
        },
        {
          key : kony.i18n.getLocalizedString("kony.ahb.accountDetails.branch"),
          value : pAccountDetails.BranchName 
        }
      ];     
    this.view.segAccountInformation.setData(segmentData);

  },

  openFinanceAccountDetailsPage : function(pAccountDetails){
    kony.print(" openFinanceAccountDetailsPage pAccountDetails "+ JSON.stringify(pAccountDetails));
    var segmentData = [];
    kony.print("pAccountDetails"+pAccountDetails);
    this.view.segAccountInformation.widgetDataMap = {
      lblSpending:"key",
      lblAmountSpent: "value"
    };
   
      this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.financeDetails.heading");
      this.view.mainDetails.lblCurrentAccount.text = pAccountDetails.LoanType;
      this.view.mainDetails.lblCurrentAccountValue.text = "";
      this.view.mainDetails.lblAmount.text = appendCurrency(commaSeparatorUtil(pAccountDetails.OutstandingDueAmount), pAccountDetails.CurrencyCode) ;
    
      this.view.mainDetails.lblAmountCurrency.setVisibility(false);
      this.view.mainDetails.lblAmountCurrency.text = "";
      this.view.mainDetails.lblAmount.width = "99%";
      this.view.mainDetails.lblAmountCurrency.left = "99%";
      this.view.mainDetails.lblAmountCurrency.width = "1%";

      this.view.mainDetails.lblCurrentAccount.width = "99%" ;
      this.view.mainDetails.lblCurrentAccountValue.width = "1%";

      this.view.flxOperativeAccountDetail.setVisibility(false);
    	var paidAmt=(parseFloat(pAccountDetails.InitialLoanAmount)- parseFloat(pAccountDetails.OutstandingDueAmount)).toFixed(2).toString();
    	kony.print("paidAmt"+paidAmt);
    	kony.print("OverdueAmount"+pAccountDetails.OverdueAmount);
    
    	

      segmentData = [
//         {
//           key : kony.i18n.getLocalizedString("kony.ahb.financeDetails.paidAmount"),
//           value : appendCurrency(commaSeparatorUtil(paidAmt) , pAccountDetails.CurrencyCode )   
//         },
        {
          key :kony.i18n.getLocalizedString("kony.ahb.Accounts.nextPaymentAmount"),
          value : appendCurrency(commaSeparatorUtil(pAccountDetails.InstallmentAmount ), pAccountDetails.CurrencyCode) 
        },
        {
          key :kony.i18n.getLocalizedString("kony.ahb.Accounts.nextPaymentDate"),
          value : getDateStringWithFormat(pAccountDetails.NextInstallmentDate, "DD/MM/YYYY")
        },
        {
          key : kony.i18n.getLocalizedString("kony.ahb.financeDetails.remainingPayment"),
          value : pAccountDetails.RemainingNoOfInstallments
        },
        {
          key : kony.i18n.getLocalizedString("kony.ahb.financeDetails.repaymentAccountNumber"),
          value : formattedCardNumber(pAccountDetails.RepaymentAccount) 
        },
        {
          key : kony.i18n.getLocalizedString("kony.ahb.financeDetails.contractNumber"), 
          value : pAccountDetails.LoanContractNumber 
        },
        {
          key : kony.i18n.getLocalizedString("kony.ahb.financeDetails.contractDate"), 
          value : getDateStringWithFormat(pAccountDetails.ContractDate, "DD/MM/YYYY") 
        },
        {
          key : kony.i18n.getLocalizedString("kony.ahb.financeDetails.overdueAmount"), 
          value : appendCurrency(commaSeparatorUtil(pAccountDetails.OverdueAmount),  pAccountDetails.CurrencyCode)
        }
      ]; 
    
    this.view.segAccountInformation.setData(segmentData);


  },


  openCardAccountDetailsPage : function(pAccountDetails){
    kony.print(" openCardAccountDetailsPage pAccountDetails "+ JSON.stringify(pAccountDetails));
    var segmentData = [];

    kony.print("pAccountDetails"+pAccountDetails[i]);
    this.view.segAccountInformation.widgetDataMap = {
      lblSpending:"key",
      lblAmountSpent: "value",
    };
    
    
    this.view.flxCardDetails.setVisibility(true);
//     var maskedString=formatAlphanumericString(pAccountDetails.CreditCardNo);
//     maskedString = getMaskedString(6,12,"*",maskedString);
//     this.view.mainDetails.lblAmount.text =  maskedString;
    
    var cardNumber = pAccountDetails.CreditCardNo;
   cardNumber = "**** " + cardNumber.substring(cardNumber.length -4, cardNumber.length);
    this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.creditCardDetails.cardDetails");
    this.view.mainDetails.lblCurrentAccount.text = pAccountDetails.CardSubType;
    this.view.mainDetails.lblCurrentAccountValue.text = cardNumber; //pAccountDetails.CardName;
    
    this.view.mainDetails.lblAmount.text =  "-"+appendCurrency(commaSeparatorUtil(pAccountDetails.CurrentOutStandingAmount), pAccountDetails.CurrencyCode);
    this.view.mainDetails.lblAmountCurrency.setVisibility(false);
    //this.view.mainDetails.lblAmountCurrency.text = kony.i18n.getLocalizedString("kony.ahb.creditCardDetails.availableLimit");
    this.view.mainDetails.lblAmount.width = "65%";
    this.view.mainDetails.lblAmountCurrency.right = "0dp";
    this.view.mainDetails.lblAmountCurrency.width = "35%";
    
     this.view.mainDetails.lblCurrentAccount.width = "50%" ;
    this.view.mainDetails.lblCurrentAccountValue.width = "50%";

    //this.view.flxOperativeAccountDetail.setVisibility(false);
    

    segmentData = [
      
      {
        key : kony.i18n.getLocalizedString("kony.ahb.Accounts.availableCardLimit"),
        value : appendCurrency(commaSeparatorUtil(pAccountDetails.AvailableCreditLimit),  pAccountDetails.CurrencyCode)
      }, 
      {
        key : kony.i18n.getLocalizedString("kony.ahb.cardDetails.availableCashLimit"),
        value : appendCurrency(commaSeparatorUtil(pAccountDetails.AvailableCashLimit), pAccountDetails.CurrencyCode)
      },
    ]; 

    this.view.segAccountInformation.setData(segmentData);

    var segAccountsHeader = [];
    this.view.segCardDetails.widgetDataMap = {
      lblSpending:"key",
      lblAmountSpent: "value",
      lblHeader:"SectionDescription",
    };

    var  statementInfoSection = [
      {
        key : kony.i18n.getLocalizedString("kony.ahb.cardDetails.statementBalance"), 
        value : appendCurrency(commaSeparatorUtil(pAccountDetails.LastBillDueAmount), pAccountDetails.CurrencyCode)
      },
      {
        key : kony.i18n.getLocalizedString("kony.ahb.cardDetails.statementDate"),
        value : getDateStringWithFormat(pAccountDetails.LastStatementDate, "DD/MM/YYYY") 
      },
      {
        key : kony.i18n.getLocalizedString("kony.ahb.cardDetails.minimumAmountDue"),
        value : appendCurrency(commaSeparatorUtil(pAccountDetails.MinimumDueAmount), pAccountDetails.CurrencyCode)
      },
    ];

    var cardInfoSection = [
       { key : kony.i18n.getLocalizedString("kony.mb.accdetails.cardHolderName"),
       value : pAccountDetails.CardName 
      },
      { key : kony.i18n.getLocalizedString("kony.ahb,cardDetails.cardStatus"),
       value : pAccountDetails.CardStatus === "true" ? "Active" : "Inactive"
      },
      { key : kony.i18n.getLocalizedString("kony.ahb.cardDetails.totalCardLimit"),
       value : appendCurrency(commaSeparatorUtil(pAccountDetails.TotalCardLimitAmount), pAccountDetails.CurrencyCode)
      }
    ];

    if(statementInfoSection && statementInfoSection.length){
      segAccountsHeader[segAccountsHeader.length] = [
        {
          SectionDescription:kony.i18n.getLocalizedString("kony.ahb.cardDetails.statementInfo"),
          template:"flxHeader",
        },
        statementInfoSection  
      ];
    }
    if(cardInfoSection && cardInfoSection.length){
      segAccountsHeader[segAccountsHeader.length] = [
        {
          SectionDescription:kony.i18n.getLocalizedString("kony.ahb.cardDetails.cardInformation"),
          template:"flxHeader",
        },
        cardInfoSection  
      ];
    }

    this.view.segCardDetails.setData(segAccountsHeader);


  },
  
  hideAllDetailView: function(){
    this.view.flxOperativeAccountDetail.setVisibility(false);
    this.view.flxCardDetails.setVisibility(false);
  },
  populateLinkedDebitCardData : function(){
    kony.print("populateLinkedDebitCardData");
    var navMan=applicationManager.getNavigationManager();
    var cardInfo = navMan.getCustomInfo("frmAccountInfo");
    kony.print("populateLinkedDebitCardData"+JSON.stringify(cardInfo));
    var linkedDebitCards = [];
    if(cardInfo && cardInfo.linkedDebitCards && cardInfo.linkedDebitCards.length){
      this.view.lblNoCardsLinked.isVisible = false;
      this.view.segLinkedDebitCards.widgetDataMap = {
        lblSpending : "cardNumber",
        lblAmountSpent:"cardStatus"
      };
      linkedDebitCards = cardInfo.linkedDebitCards;
      for (var index=0;index<linkedDebitCards.length;index++){
        var formattedNumber = formattedCardNumber(linkedDebitCards[index]["cardNumber"]);
        linkedDebitCards[index]["cardNumber"] = getMaskedString(7, 14, "*", formattedNumber);    
      }
      
    }else{
      this.view.flxOperativeAccountDetail.setVisibility(true);
      this.view.lblNoCardsLinked.isVisible = true;
    }
    this.view.segLinkedDebitCards.setData(linkedDebitCards);
  },
  populateStatementsData:function(pStatementDetails){
    this.view.flxTransDetails.setVisibility(true);
    kony.print("populateStatementsData - pAccountDetails "+ JSON.stringify(pStatementDetails) );
    var statementdata = pStatementDetails.OtherTransactionInfo
     this.view.flxOperativeAccountDetail.setVisibility(false);
    var segmentData = [];
    kony.print("statementdata"+statementdata);
    this.view.segAccountInformation.widgetDataMap = {
      lblSpending:"key",
      lblAmountSpent: "value"
    };
    
    var accountType = "";
    var postingDate = "";
    if(this.selectedAccountData.accountType){
        accountType = this.selectedAccountData.accountType;
    }else if(this.selectedAccountData.CardSubType){
      	accountType = this.selectedAccountData.CardSubType;
    }else if(this.selectedAccountData.LoanType){
      	accountType = this.selectedAccountData.LoanType;
    }
    if(statementdata.ValueDate === ""){
      postingDate = "-";
    }else{
      postingDate = statementdata.ValueDate;
    }
   
    this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.mb.PFMTransactionDetails.Title");
      this.view.mainDetails.lblCurrentAccount.text = accountType;
      this.view.mainDetails.lblCurrentAccountValue.text = "";//statementdata.TransactionDate; // unused in component
      this.view.mainDetails.lblAmount.text = pStatementDetails.TransactionAmount;
    
      this.view.mainDetails.lblAmountCurrency.setVisibility(false);
      this.view.mainDetails.lblAmountCurrency.text = "";
      this.view.mainDetails.lblAmount.width = "99%";
      this.view.mainDetails.lblAmountCurrency.right = "0dp";
      this.view.mainDetails.lblAmountCurrency.width = "1%";
    
      this.view.mainDetails.lblCurrentAccount.width = "60%" ;
      this.view.mainDetails.lblCurrentAccountValue.width = "40%";

      segmentData = [
//         {
//           key : {text: kony.i18n.getLocalizedString("kony.ahb.statement.AmountinAED"), maxwidth : "40%" , maxWidth : "40%" , width : "40%"},
//           value :  {text : statementdata.TransactionAmount, maxwidth : "60%" , maxWidth : "60%", width : "60%"},
//         },
        {
          key : kony.i18n.getLocalizedString("kony.ahb.statement.referrenceNumber"),
          value :  formatAlphanumericString(statementdata.TransactionReferenceNum)
        },
        {
          key : kony.i18n.getLocalizedString("kony.ahb.Transfer.status"),
          value : statementdata.Status
        }
        ];
    if(statementdata.TransactionType){
       var data ={
          key : kony.i18n.getLocalizedString("kony.ahb.transactionDetails.transactionType"),
          value : statementdata.TransactionType 
        };
      segmentData.push(data);
    }
    if(postingDate && postingDate === "-"){
        var data= {
          key : kony.i18n.getLocalizedString("kony.ahb.statement.PostingDate"),
        value :  postingDate
        };
      segmentData.push(data);
    }
    if(statementdata.TransactionDate){
       var data =  {
          key : kony.i18n.getLocalizedString("kony.mb.transaction.transactionDate"),
          value : statementdata.TransactionDate
        };
       segmentData.push(data);
    }   
   if(statementdata.TransactionNarration){
       /*var data =  {
          key : kony.i18n.getLocalizedString("kony.ahb.common.Details"),
          value : statementdata.TransactionNarration2
        };
       segmentData.push(data);*/
      this.view.lblDetailsTitle.text = kony.i18n.getLocalizedString("kony.ahb.common.Details");
      this.view.lblTransDetails.text = statementdata.TransactionNarration;
    } 
   
    this.view.segAccountInformation.setData(segmentData);

  },
  bindAccountInfoDetailsError: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
   
  },
  
onBackFrmAccountInfoDetails: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },
populateOnHoldData : function(){
  
}


});