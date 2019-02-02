define({ 
  keypadString:'0.00',
  isPeriodUsed : false,
  timerCounter: 0,
  payeeConfigData:{},
  avalBal:"",
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function(){
    this.initActions();
    //var configManager = applicationManager.getConfigurationManager();
    //this.view.lblDollar.text=configManager.getCurrencyCode(); 
    configManager = applicationManager.getConfigurationManager();

    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var paymentList = billPayMod.presentationController.getPaymentList();
    billPayType = billPayMod.presentationController.getBillPayType();
    if(billPayType === configManager.constants.AHB_BILLPAY_CHARITY){
      this.setCharityFlowUI();
      this.setCharityFlowData();
    }
    else{
       this.initailUIValues();
    }
     this.showIndicativeValue();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions: function(){
    this.view.MainHeader.flxBack.onClick = this.naviagteBack ;
    this.view.MainHeader.btnBack.onClick = this.naviagteBack;
    this.view.lbxFromAcc.onSelection = this.onSelectOfFromAcc;
    this.view.tbxBillAmount.onTextChange = this.onBillAmountChange;
    this.view.btnNext.onClick = this.onNextClick;
    this.view.lbxServiceType.onSelection = this.onSelectionOfServiceType;
    this.view.tbxBillAmount.onBeginEditing = this.initialAmountUI;
   	this.view.tbxBillAmount.onEndEditing = this.finalAmountUI;
    this.view.tbxBillAmount.onDone = this.finalAmountUI;
  },
  
  initialAmountUI:function(){
  this.view.flxSeparator5.skin = "sknAhbFlxff6d00";
},
  
  finalAmountUI:function(){
    this.view.flxSeparator5.skin = "sknFlxe3e3e3";
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	naviagteBack
  Purpose: navigates to previous page
  Author: 	Bipin
  Date: 	26/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  
  naviagteBack : function (){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
   /*-----------------------------------------------------------------------------------

  Name: 	bindGenericError
  Purpose: 
  Author: 	
  Date: 	26/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },
  
  
   /*-----------------------------------------------------------------------------------

  Name: 	initailUIValues
  Purpose: 	Sets UI elements value based on the from Accounts selection
  Author: 	Bipin
  Date: 	26/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/ 
  initailUIValues : function(){
    this.enableNextBtn();
    this.view.flxSeparator3.width = "100%";
    this.view.lblAmtCurr.text = kony.i18n.getLocalizedString("kony.ahb.payments.amountWithCurrency").replace("###PLACEHOLDER###", "");      
    this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.payments.payment");

    this.view.flxRules.setVisibility(false);
    this.view.lblAvbBal.text ="";
    this.view.lblAvbBal.setVisibility(false);
    this.view.lblOutStand.setVisibility(false);
    
    this.view.flxOutStandingCategory.setVisibility(true);
    this.view.flxRules.setVisibility(false);
    this.view.flxServiceType.setVisibility(false);
    this.view.lblEmirate.setVisibility(false);
    this.view.imgOperatorLogo.setVisibility(true);
    
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var payeeData = billPayMod.presentationController.getAllPayeeData();
    var utilityAmountData = billPayMod.presentationController.getUtilityAmountData();
    var configManager = applicationManager.getConfigurationManager();
    this.payeeConfigData = billPayMod.presentationController.getSubServiceData(payeeData.operatorCode, payeeData.serviceCode);
    this.view.imgOperatorLogo.src = this.payeeConfigData.operatorLogo;
    if(payeeData && payeeData.hasSubService === "true"){
      this.view.lblOperator.text = payeeData.operatorName +" "+payeeData.serviceType ;
    }else{
      this.view.lblOperator.text = payeeData.operatorName;
    }
    
    this.view.lblRefNum.text = payeeData.consumerNumber;
    this.view.lblFrom.width ="70%";
    this.view.lbxFromAcc.width ="30%";
    this.view.lblOutStandBal.text = utilityAmountData ? commaSeparatorUtil(appendCurrency(utilityAmountData.amount , configManager.constants.AHB_UAE_CURRENCY))  : "";
    if( this.view.lblOutStandBal.text){
      this.view.flxOutstandBal.setVisibility(true);
      this.view.lblOperatorName.text = billPayMod.presentationController.getPayeeHasDues() === "true" ?  kony.i18n.getLocalizedString("kony.ahb.payments.amountDue") : kony.i18n.getLocalizedString("kony.ahb.accountDetails.AvailableBalance");
    }else{
       this.view.flxOutstandBal.setVisibility(false);
       this.view.lblOperatorName.text ="";
    }
    
    var allfromAcc = billPayMod.presentationController.getFromAccounts();
    this.view.lbxFromAcc.masterData = allfromAcc;
    this.view.lbxFromAcc.selectedKey = billPayMod.presentationController.getSelectedFromAccount();
    this.view.tbxBillAmount.text = billPayMod.presentationController.getBillAmountEntered();
    this.onSelectOfFromAcc();
    this.view.forceLayout();
  },
  
  
    /*-----------------------------------------------------------------------------------

  Name: 	onSelectOfFromAcc
  Purpose: 	Sets UI elements value based on the from Accounts selection
  Author: 	Bipin
  Date: 	26/11/2018
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
      this.avalBal = availBal;
      var frmAccCurrency = selectedAccInfo.Currency || selectedAccInfo.CurrencyCode; 
      billPayMod.presentationController.setSelectedFromAccountCurrency(frmAccCurrency);
      
      billPayMod.presentationController.setPaymentMode(selectedAccInfo.paymentMode);
      this.view.lblAvbBal.setVisibility(true); 
      this.view.lblAvbBal.text = kony.i18n.getLocalizedString("kony.ahb.payment.AvailableBalance").replace("###PLACEHOLDER###", commaSeparatorUtil(appendCurrency(availBal, frmAccCurrency))) ;
      this.view.lblAmtCurr.text = kony.i18n.getLocalizedString("kony.ahb.payments.amountWithCurrency").replace("###PLACEHOLDER###", "("+frmAccCurrency+")");  
    }else{
      this.view.lblAvbBal.setVisibility(false);
      this.view.lblAvbBal.text = "";
      this.view.lblFrom.width = "70%";
      this.view.lbxFromAcc.width ="30%";
      this.view.lblAmtCurr.text = kony.i18n.getLocalizedString("kony.ahb.payments.amountWithCurrency").replace("###PLACEHOLDER###", "");  
      this.view.lblFrom.text = kony.i18n.getLocalizedString("kony.ahb.payments.fromAccountCard");
    }
    this.enableNextBtn();
    this.showIndicativeValue();
    this.view.forceLayout();
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	onSelectionOfServiceType
  Purpose: 	the functionality to be performed after service type is selected
  Author: 	Fariha
  Date: 	29/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  onSelectionOfServiceType:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var selectedKeyValue = this.view.lbxServiceType.selectedKeyValue ;
    billPayMod.presentationController.setServiceType(selectedKeyValue[1]);
    billPayMod.presentationController.setServiceCode(selectedKeyValue[0]);
    
    var operatorCode =billPayMod.presentationController.getOperatorCode();
    this.payeeConfigData = billPayMod.presentationController.getSubServiceData(operatorCode, selectedKeyValue[0]);
    
    this.enableNextBtn();
    this.view.forceLayout();
  },
  /*-----------------------------------------------------------------------------------

  Name: 	onBillAmountChange
  Purpose: 	sets entered amount and checks for validation rules 
  Author: 	Bipin
  Date: 	30/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/ 
  onBillAmountChange: function(){
    var enteredAmount = this.view.tbxBillAmount.text;
    kony.print("onBillAmountChange " + enteredAmount);
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayMod.presentationController.setBillAmountEntered(enteredAmount);
    this.view.flxRules.setVisibility(false);
    this.view.lblRules.text = "";
    this.showIndicativeValue();
    this.enableNextBtn(); 
  },
 /*-----------------------------------------------------------------------------------

  Name: 	validatePaymnetRules
  Purpose: 	validates the amount entered for payment as per the payment ruels fetched from pay
  Author: 	Bipin
  Date: 	30/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  validatePaymnetRules : function(){
    var payment = this.payeeConfigData;
   
    var isValidPayment= true;
    var invalidCount = 0;
    var errMsg = "";
    var paymentRules = "";
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
 	var amountEntered =  convertToFloat(billPayMod.presentationController.getBillAmountEntered()) ;
    var selectedCurr = billPayMod.presentationController.getSelectedFromAccountCurrency();
    var configManager = applicationManager.getConfigurationManager();

    if(payment && amountEntered){
      var multiple = convertToFloat(payment.multipleOf) ;
      var minAmount = convertToFloat(payment.minAmount) ;
      var maxAmount = convertToFloat (payment.maxAmount);    
      var acceptsDecimal = payment.acceptDecimal;
      var partialPayment = payment.partialPayment;
      var fullPayment = payment.fullPayment;
      var utilityAmountData = billPayMod.presentationController.getUtilityAmountData();

      var amountDue = utilityAmountData ? utilityAmountData.amount : ""; /// TODO check amount due 
      amountDue =  amountDue ? convertToFloat(amountDue) : "";
      var limitMsg = kony.i18n.getLocalizedString("kony.ahb.payments.ruleMaxMin");

      if(minAmount && maxAmount){
        paymentRules = "- "+limitMsg.replace("###MINIMUM###", appendCurrency(payment.minAmount, configManager.constants.AHB_UAE_CURRENCY) ).replace("###MAXIMUM###",appendCurrency(payment.maxAmount,configManager.constants.AHB_UAE_CURRENCY))+"\n"; 
        paymentRules = paymentRules.replace("**", "-")
      }else if(minAmount && !maxAmount){
        var tempPaymentRules =  limitMsg.replace("###MINIMUM###", appendCurrency(payment.minAmount, configManager.constants.AHB_UAE_CURRENCY)).split("**");
        paymentRules = "- " + tempPaymentRules[0]+ "\n";
      }else if(maxAmount && !minAmount){
        var tempPaymentRules = limitMsg.replace("###MINIMUM###", "").replace("###MAXIMUM###", appendCurrency(payment.maxAmount, configManager.constants.AHB_UAE_CURRENCY)).split("**");
        paymentRules = "- " + tempPaymentRules[1]+ "\n";

      }
      if (multiple){ 
        paymentRules = paymentRules +"- "+ kony.i18n.getLocalizedString("kony.ahb.payments.ruleMultiples").replace("###PLACEHOLDER###", multiple)+"\n";
        if(amountEntered%multiple !== 0) {
          invalidCount++;
        }
      }

      if(minAmount && !(amountEntered >= minAmount)){
        invalidCount++;
      }

      if(maxAmount && !(amountEntered <= maxAmount)){
         invalidCount++;
      }
      
      if(acceptsDecimal === "false"){ 
        paymentRules = paymentRules + "- "+kony.i18n.getLocalizedString("kony.ahb.payments.ruleDecimalNotAccepted")+"\n";

        if(!(amountEntered.toString().indexOf(".")< 0)){
          invalidCount++;
        }
      }

      if(partialPayment === "true"){ 
        //paymentRules = paymentRules+ "- Partial payment accepted "+"\n";
        if(amountEntered<=0){
          invalidCount++;
        }
      }else{
        paymentRules = paymentRules+ "- " +kony.i18n.getLocalizedString("kony.ahb.payments.fullPaymentAccepted") + "\n" ;
        if(amountDue && !(amountEntered >= amountDue)){
          invalidCount++;
          //errMsg = errMsg +"partialPayment is not accepted "; 
        }
      }
    }

    if(invalidCount>0){
      isValidPayment = false;
      this.view.flxRules.setVisibility(true);
      this.view.lblRules.text = paymentRules;
    }else{
      isValidPayment = true;
      this.view.flxRules.setVisibility(false);
      this.view.lblRules.text = "";
    }

    return {isValidPayment:isValidPayment , errMsg:errMsg};
  },
  
   /*-----------------------------------------------------------------------------------

  Name: 	enableNextBtn
  Purpose: 	enables and disables next button 
  Author: 	Bipin
  Date: 	30/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  enableNextBtn : function(){
    
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var fromAccount = billPayMod.presentationController.getSelectedFromAccount();
    var amountBillAmount = billPayMod.presentationController.getBillAmountEntered();
    amountBillAmount = convertToFloat(amountBillAmount);
    var subServiceType = billPayMod.presentationController.getServiceCode();
    
    kony.print("enableNextBtn fromAccount "+fromAccount);
    kony.print("enableNextBtn amountBillAmount "+amountBillAmount);
    kony.print("enableNextBtn billPayType "+ billPayType);
    kony.print("enableNextBtn subServiceType "+ subServiceType);

    var isEnable = false;
    var validation = this.validatePaymnetRules();

    if(billPayType === configManager.constants.AHB_BILLPAY_SINGLE){
      if( validation.isValidPayment && fromAccount && amountBillAmount){
			isEnable = true;
      }
    }else{
       if(validation.isValidPayment && subServiceType && fromAccount && amountBillAmount){
         isEnable = true;
       }
    }
    kony.print("enableNextBtn isEnable "+isEnable);
    this.activateBtnNext(isEnable);
    
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	activateBtnNext
  Purpose: 	based on input parameter enables/disables btnNext
  Author: 	Fariha
  Date: 	29/11/2018
  Input: 	bool- boolean(true/false)
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  activateBtnNext : function(bool){
    //var validation = this.validatePaymnetRules();
    if(bool){
      this.view.btnNext.setEnabled(true);
      this.view.btnNext.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
      this.view.btnNext.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
    }
    else{
      this.view.btnNext.setEnabled(false);
      this.view.btnNext.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
      this.view.btnNext.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    }
  },
  
   /*-----------------------------------------------------------------------------------

  Name: 	onNextClick
  Purpose: 	
  Author: 	Bipin
  Date: 	30/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  onNextClick:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var amountBillAmount = billPayMod.presentationController.getBillAmountEntered();
    amountBillAmount = convertToFloat(amountBillAmount);
    if((convertToFloat(this.avalBal) >= amountBillAmount)){
      billPayMod.presentationController.commonFunctionForNavigation("frmBillPayConfirmation");
    }else{
      this.bindGenericError(kony.i18n.getLocalizedString("kony.ahb.transfers.insufficientBalance"));
    }
    
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	setCharityFlowUI
  Purpose: 	Sets UI for Charity flow
  Author: 	Fariha
  Date: 	28/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/

  setCharityFlowUI:function(){
    this.view.lblAmtCurr.text = kony.i18n.getLocalizedString("kony.ahb.payments.amountWithCurrency").replace("###PLACEHOLDER###", ""); 
    this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.payments.CharityDonation");

    this.view.flxOutStandingCategory.setVisibility(false);
    this.view.flxSeparator3.width = "88%";
    this.view.flxRules.setVisibility(false);
    this.view.flxServiceType.setVisibility(true);
    this.view.lblEmirate.setVisibility(true);
    this.view.imgOperatorLogo.setVisibility(false);
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");

    var allfromAcc = billPayMod.presentationController.getFromAccounts();
    this.view.lbxFromAcc.masterData = allfromAcc;
    this.view.lbxFromAcc.selectedKey = billPayMod.presentationController.getSelectedFromAccount();
    this.onSelectOfFromAcc();

  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	setCharityFlowData
  Purpose: 	Sets the required data for Charity
  Author: 	Fariha
  Date: 	29/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  setCharityFlowData:function(){
    this.payeeConfigData = {};
    var subServiceName ;
    var serviceOperatorNames = [] ;
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var lOperatorCode = billPayMod.presentationController.getOperatorCode();
    subServiceName = billPayMod.presentationController.getOperatorName();
    serviceOperatorNames = billPayMod.presentationController.getSubServiceList(lOperatorCode);
    this.view.lblEmirate.text = subServiceName;
    this.view.tbxBillAmount.text = billPayMod.presentationController.getBillAmountEntered();
    this.view.lbxFromAcc.selectedKey = billPayMod.presentationController.getSelectedFromAccount();
    this.view.lbxServiceType.selectedKey = billPayMod.presentationController.getServiceCode();
    serviceOperatorNames.unshift(["",kony.i18n.getLocalizedString("kony.ahb.common.Listbox.Select")]);
    this.view.lbxServiceType.masterData = serviceOperatorNames;
    this.enableNextBtn();
  },
   /*-----------------------------------------------------------------------------------

  Name: 	showIndicativeValue
  Purpose: 	Displays Indicative value 
  Author: 	Bipin
  Date: 	30/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  showIndicativeValue : function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var selectedCurr = billPayMod.presentationController.getSelectedFromAccountCurrency();
    var exchangeRate = billPayMod.presentationController.getPaymentExchangeRates()[selectedCurr];
    var billAmount =    billPayMod.presentationController.getBillAmountEntered();
    billAmount = convertToFloat(billAmount);
    var configManager = applicationManager.getConfigurationManager();
    if(selectedCurr && selectedCurr !== configManager.constants.AHB_UAE_CURRENCY && exchangeRate && billAmount){
      var indicativeVal = (billAmount)*exchangeRate ;
      this.view.lblIndicativeVal.setVisibility(true);
      this.view.lblIndicativeVal.text = kony.i18n.getLocalizedString("kony.ahb.payment.indicativeValue").replace("###PLACEHOLDER###", commaSeparatorUtil(appendCurrency(indicativeVal, configManager.constants.AHB_UAE_CURRENCY)) ) ;
    }else{
      this.view.lblIndicativeVal.setVisibility(false);
      this.view.lblIndicativeVal.text ="";
    }
  }

  

});