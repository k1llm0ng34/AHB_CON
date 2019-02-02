define({ 
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    this.view.preShow = this.preShow;
  },
  
  preShow: function(){
//     if(kony.os.deviceInfo().name==="iPhone"){
//       this.view.flxHeader.isVisible = false;
//     }
    this.setConfirmPaymentData();
    this.initialValue();
    this.populateData();
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  
  initActions: function(){
    this.view.MainHeaderWithCancel.flxBack.onClick = this.navigateBack;
    this.view.MainHeaderWithCancel.btnBack.onClick = this.navigateBack;
    
    this.view.flxHeader.MainHeaderWithCancel.btnCancel.onClick = this.onCancel;
	this.view.btnSubmit.onClick = this.onClickEdit;
    this.view.btnContinue.onClick = this.continueOnClick;
    this.view.lbxFromAcc.onSelection = this.onSelectOfFromAcc;
  },
 /*-----------------------------------------------------------------------------------
  Name: 	navigateBack
  Purpose:  This will naviagte back to previous page
  Author: 	Bipin
  Date: 	23/11/2018
  Input: 	NA
  Return: 	NA	
  ------------------------------------------------------------------------------------*/
  navigateBack : function(){
    var navMan=applicationManager.getNavigationManager();    
    navMan.goBack();    
  },
  /*-----------------------------------------------------------------------------------
  Name: 	continueOnClick
  Purpose:	This will initaite make payment process
  Author: 	Bipin
  Date: 	23/11/2018
  Input: 	NA
  Return: 	NA	
  ------------------------------------------------------------------------------------*/
  continueOnClick: function(){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayModule.presentationController.makePayment();
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	populateData
  Purpose: 	this will populate the UI element on preshow
  Author: 	Bipin
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	
  ------------------------------------------------------------------------------------*/
  populateData : function(){
    kony.print("populateData ");
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var fromAccountsData = billPayMod.presentationController.getFromAccounts();
    kony.print("populateData fromAccountsData" + JSON.stringify(fromAccountsData));
    var configManager = applicationManager.getConfigurationManager();
    this.view.lbxFromAcc.masterData = fromAccountsData;    
    this.view.lbxFromAcc.selectedKey = billPayMod.presentationController.getSelectedFromAccount();
    this.onSelectOfFromAcc();
    var paymentList = billPayMod.presentationController.getPaymentList();
    var tolatAmount = this.getTotalAmount(paymentList);
    kony.print("populateData tolatAmount" + JSON.stringify(tolatAmount));
    this.view.lblTotalAmt.text = commaSeparatorUtil(appendCurrency(tolatAmount, configManager.constants.AHB_UAE_CURRENCY));
    this.view.lblIndCative.text = "";
    this.populatePaymentDetailsList(paymentList);
  },

  /*-----------------------------------------------------------------------------------
  Name: 	populatePaymentDetailsList
  Purpose: 	This function will populate the segmanet to display thelaist of selected payments
  Author: 	Bipin
  Date: 	22/11/2018
  Input: 	paymentList
  Return: 	NA	
  ------------------------------------------------------------------------------------*/
  populatePaymentDetailsList : function(paymentList){
    var configManager = applicationManager.getConfigurationManager();
    kony.print("populatePaymentDetailsList paymentList"+ JSON.stringify(paymentList));
    for(var i =0; i<paymentList.length ; i++){
      paymentList[i]["formattedAmt"] =commaSeparatorUtil(appendCurrency(paymentList[i].amount,configManager.constants.AHB_UAE_CURRENCY));
    }
    this.view.segListOfPayments.removeAll();
    this.view.segListOfPayments.widgetDataMap={
      "lblAccName":"nickName",
      "lblAmtVal":"formattedAmt",
      "lblRefNum":"consumerNumber"
    };

    this.view.segListOfPayments.setData(paymentList);
  },
  /*-----------------------------------------------------------------------------------

  Name: 	getTotalAmount
  Purpose:  This function will calculate the total amount to be paid
  Author: 	Bipin
  Date: 	22/11/2018
  Input: 	paymentList
  Return: 	totalAmt	

  ------------------------------------------------------------------------------------*/
  getTotalAmount : function(paymentList){
    kony.print("getTotalAmount paymentList"+ JSON.stringify(paymentList));
    var totalAmt = 0;
    for(var i = 0; i < paymentList.length; i++){
      totalAmt =  convertToFloat(totalAmt) + convertToFloat(paymentList[i].amount) ;
    }

    kony.print("getTotalAmount totalAmt"+ totalAmt);
    
    return totalAmt;
  },
  /*-----------------------------------------------------------------------------------

  Name: 	onSelectOfFromAcc
  Purpose: 	Sets UI elements value based on the from Accounts selection
  Author: 	Bipin
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  onSelectOfFromAcc : function(){
    kony.print("onSelectOfFromAcc ");

    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var selectedKey = this.view.lbxFromAcc.selectedKey;
    billPayMod.presentationController.setSelectedFromAccount(selectedKey);
    var configManager = applicationManager.getConfigurationManager();
    if(selectedKey){
      kony.print("onSelectOfFromAcc selectedKey" +selectedKey);
      this.view.lblFrom.width ="30%";
      this.view.lbxFromAcc.width ="70%";
      this.view.lblFrom.text = kony.i18n.getLocalizedString("kony.mb.common.from");
      var selectedAccInfo = billPayMod.presentationController.getSelectedAccountInfo(selectedKey);
      kony.print("onSelectOfFromAcc selectedAccInfo" +JSON.stringify(selectedAccInfo));
      var availBal = selectedAccInfo.WorkingBalance || selectedAccInfo.AvailableLimit;
      var frmAccCurrency = selectedAccInfo.Currency || selectedAccInfo.CurrencyCode; 
      billPayMod.presentationController.setSelectedFromAccountCurrency(frmAccCurrency);
      //setPaymentMode
      var paymentMode ='';
      if(selectedAccInfo.hasOwnProperty('CardType')){
        paymentMode = "CC";
      }else if(selectedAccInfo.hasOwnProperty('AccountType')){
         paymentMode = "AC";
      }
      billPayMod.presentationController.setPaymentMode(paymentMode);
      this.view.lblAvbBal.text = kony.i18n.getLocalizedString("kony.ahb.payment.AvailableBalance").replace("###PLACEHOLDER###",commaSeparatorUtil(appendCurrency(availBal, frmAccCurrency)) );
      var paymentList = billPayMod.presentationController.getPaymentList();
      var tolatAmount = 0;
      tolatAmount = this.getTotalAmount(paymentList);
      var indcativeVal = 0;
      indcativeVal = billPayMod.presentationController.getIndicativeValInSelectedFromAccCurr(frmAccCurrency,tolatAmount);
      if(frmAccCurrency != configManager.constants.AHB_UAE_CURRENCY){
        if(indcativeVal){
          this.view.lblIndCative.text = kony.i18n.getLocalizedString("kony.ahb.payment.indicativeValue").replace("###PLACEHOLDER###", commaSeparatorUtil(appendCurrency(indcativeVal, frmAccCurrency)) ); 
        }else{
          this.view.lblIndCative.text = "";
        }
      }else{
        this.view.lblIndCative.text = "";
      }
      if(convertToFloat(availBal) > indcativeVal ){
        this.enableConfirmBtn();
      }else{
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
        this.view.btnContinue.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
        var msg = kony.i18n.getLocalizedString("kony.mb.transfer.amountGreaterThanAvailBal"); 
        this.bindGenericError(msg);
      }      
    }else{
      this.initialValue();
    }
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	enableConfirmBtn
  Purpose: 	This will enable the confirm button
  Author: 	Bipin
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	
  ------------------------------------------------------------------------------------*/
  enableConfirmBtn : function(){
    kony.print("enableConfirmBtn ");
    this.view.btnContinue.setEnabled(true);
    this.view.btnContinue.skin = "sknAHBGsc0b29ca020d9d44b";
    this.view.btnContinue.focusSkin = "sknAHBGsc0b29ca020d9d44b";
  },
  /*-----------------------------------------------------------------------------------
  Name: 	initialValue
  Purpose: 	The will set uI elements to initial value
  Author: 	Bipin
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	
  ------------------------------------------------------------------------------------*/
  initialValue : function(){
    kony.print("initialValue ");

    this.view.lblIndCative.text = "";
    this.view.lblAvbBal.text = "";
    this.view.btnContinue.setEnabled(false);
    this.view.btnContinue.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.btnContinue.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.lblFrom.width ="70%";
    this.view.lbxFromAcc.width ="30%";
    this.view.lblFrom.text = kony.i18n.getLocalizedString("kony.ahb.payments.fromAccountCard");
  },
  
  cancelOnClick:function()
  {
    this.view.flxConfirmationMain.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    //billPayMod.presentationController.resetScheduledTransferData();
    billPayMod.presentationController.commonFunctionForNavigation("frmBillPay");
  },
  
  /*
  @Purpose Onclick action of Cancel button on 'payment' page
  */
  onCancel : function(){
    this.view.flxConfirmationMain.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.cancelOnClick;
  },
  
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel in payment flow
  */
  doNotCancelTransaction : function(){
    this.view.flxConfirmationMain.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
  },

  onClickEdit : function(){
    var navManger = applicationManager.getNavigationManager();
    navManger.navigateTo("frmBillPay");
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	bindGenericError
  Purpose: 	To display toast message on UI
  Author: 	Bipin
  Date: 	22/11/2018
  Input: 	errorMsg
  Return: 	NA	
  ------------------------------------------------------------------------------------*/
  bindGenericError:function(errorMsg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },

  setConfirmPaymentData : function(){
    var configManager = applicationManager.getConfigurationManager();
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var paymentType = billPayMod.presentationController.getBillPayType();
    kony.print("paymentType=="+paymentType);
    var fromAccountNumber = billPayMod.presentationController.getSelectedFromAccount();
    var selectedCurr = billPayMod.presentationController.getSelectedFromAccountCurrency();
    var accountDetails = billPayMod.presentationController.getSelectedAccountInfo(fromAccountNumber);
     kony.print("accountDetails=="+JSON.stringify(accountDetails));
    var myAccount = "";
    if(accountDetails.hasOwnProperty("AccountType")){
      myAccount = accountDetails.AccountType;
    }else if(accountDetails.hasOwnProperty("CardType")){
      myAccount = accountDetails.CardType;
      fromAccountNumber = getMaskedString(6, 12, "*", fromAccountNumber)
    }
    var totalAmount = billPayMod.presentationController.getUtilityAmountData();
    kony.print("totalAmount=="+totalAmount);
    totalAmount = totalAmount.amount;
    kony.print("totalAmount=="+JSON.stringify(totalAmount));
    if (paymentType === configManager.constants.AHB_BILLPAY_MULTI){
      this.view.flxConfirmationMain.setVisibility(true);
      this.view.flxConfirmationCharity.setVisibility(false);
      this.view.MainHeaderWithCancel.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.payments.payment");
      this.view.btnSubmit.setVisibility(true);
    }else if(paymentType === configManager.constants.AHB_BILLPAY_SINGLE) {
      this.view.flxConfirmationMain.setVisibility(false);
      this.view.flxConfirmationCharity.setVisibility(true);
      this.view.MainHeaderWithCancel.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.payments.payment");
      this.view.lblToTheBene.text = kony.i18n.getLocalizedString("kony.ahb.payments.toregisteredPayee");
      this.view.btnSubmit.setVisibility(false);
      this.enableConfirmBtn();
      var amountEntered = billPayMod.presentationController.getBillAmountEntered();
      this.view.lblAmtCur.text = commaSeparatorUtil(appendCurrency(amountEntered,selectedCurr)) ; 
      this.view.lblAccountValue.text = getOperativeAccountType(myAccount);
      var cardNoWOAsterisk = fromAccountNumber.replace(/\*/g, "0");
      cardNoWOAsterisk = formatAlphanumericString(cardNoWOAsterisk);
      this.view.lblAccountValur.text = getMaskedString(7, 14, "*", cardNoWOAsterisk);
      this.view.lblBeneName.text = billPayMod.presentationController.getOperatorName();
      this.view.lblBeneType.text = commaSeparatorUtil(appendCurrency(totalAmount, selectedCurr));
      this.view.lblPayeeAccountNumber.setVisibility(true);
      this.view.lblPayeeAccountNumber.text = billPayMod.presentationController.getConsumerNumber();
    }else if(paymentType === configManager.constants.AHB_BILLPAY_CHARITY){
      this.view.flxConfirmationMain.setVisibility(false);
      this.view.flxConfirmationCharity.setVisibility(true);
      this.view.MainHeaderWithCancel.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.payments.CharityDonation");
      this.view.lblToTheBene.text = kony.i18n.getLocalizedString("kony.ahb.transfers.toTheBeneficiary");
      this.view.btnSubmit.setVisibility(false);
      this.enableConfirmBtn();
      var totalAmt = billPayMod.presentationController.getBillAmountEntered();
      this.view.lblAmtCur.text = commaSeparatorUtil(appendCurrency(totalAmt, selectedCurr)) ; 
      this.view.lblAccountValue.text = getOperativeAccountType(myAccount);
      var cardNoWOAsterisk = fromAccountNumber.replace(/\*/g, "0");

      cardNoWOAsterisk= formatAlphanumericString(cardNoWOAsterisk);
      this.view.lblAccountValur.text = getMaskedString(7,14,"*",cardNoWOAsterisk);
      this.view.lblBeneName.text = billPayMod.presentationController.getOperatorName();
      this.view.lblBeneType.text = billPayMod.presentationController.getServiceType();
      this.view.lblPayeeAccountNumber.setVisibility(false);

  }
  }
});