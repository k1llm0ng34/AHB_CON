define({ 
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
    preShow: function(){

      this.initActions();

      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm); 


      this.view.lblIndicativeValue.setVisibility(false);

      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var beneficiaryType = transferModule.presentationController.getBeneficiaryType();//calling benType 
      var transferPaymentMode = transferModule.presentationController.getTransferPaymentMode();
      kony.print("preShow - beneficiaryType"+beneficiaryType+transferPaymentMode);
      this.populateForm(beneficiaryType,transferPaymentMode);//Populateform hide/show the widgets according the beneficiaryType
    },
  
    initActions: function(){
    var scope=this;
 	this.view.onDeviceBack= this.btnBackOnClick;
    this.view.btnContinue.onClick = this.continueOnClick;
      
    this.view.flxHeader.MainHeaderWithCancel.btnBack.onClick = this.btnBackOnClick;
    this.view.flxHeader.MainHeaderWithCancel.flxBack.onClick = this.btnBackOnClick;
    this.view.flxHeader.MainHeaderWithCancel.btnCancel.onClick = this.onCancel;

    //initial visibility setting of widgets
    this.view.lblIndicativeValue.isVisible = false;
    this.view.flxSort.isVisible = false;
    this.view.flxFrequency.lblTransferFrequencyValue.isVisible = false;
    this.view.flxTransferFrequency.setVisibility(false);
    this.view.flxApplicableCharges.setVisibility(false); //paidby
    this.view.flxReasonForTransfer.setVisibility(false);
    this.view.flxFrequency.setVisibility(false);
    this.view.flxRecurringTransfer.setVisibility(false);
    this.view.flxPayeeName.setVisibility(false);
    this.view.flxRecurrence.setVisibility(false);
    this.view.flxMain.setEnabled(true);
    this.view.customAlertPopUp.setVisibility(false);  
    this.doNotCancelTransaction();
    this.view.customAlertPopUp.flxCancel.onClick = this.customAlertPopUpFlxCancelOnClick;
    this.view.btnEdit.onClick = this.editTransfer;

  },
  cancelOnClick:function()
  {
    this.view.flxMain.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var transferId = transferMod.presentationController.getTransfersId();
    transferMod.presentationController.resetScheduledTransferData();
    transferMod.presentationController.resetFromAccountInfo();    
    if(isEmpty(transferId)){
      transferMod.presentationController.resetTransferData();
      transferMod.presentationController.resetBeneficiaryData();
    }
    transferMod.presentationController.commonFunctionForNavigation("frmTransfers");
  },
  /*
  @Purpose Onclick action of Cancel button on 'Transfers' page
  */
  onCancel : function(){
    this.view.flxMain.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.cancelOnClick;
  },
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel in Transfers flow
  */
  doNotCancelTransaction : function(){
    this.view.flxMain.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
  },
  getData:function()
  {
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    this.data= transferModule.presentationController.getTransObject(); 
    var transferPaymentMode  = transferModule.presentationController.getTransferPaymentMode();
 	var configManager = applicationManager.getConfigurationManager();
    var lBeneficiaryData = transferModule.presentationController.getAllBeneficiaryData();
    var lScheduledTransferData=transferModule.presentationController.getAllScheduledTransferData();
    var lTransferAmount = checkForNull(transferModule.presentationController.getTransferAmount());
    var lTransferCurrency = checkForNull(transferModule.presentationController.getTransferCurrency());
    var fromAccCurrency = checkForNull(transferModule.presentationController.getAccountCurrency());   
    var lTransferIndicativeAmountValue = transferModule.presentationController.getTransferIndicativeAmountValue();
    var lFromAccountType = checkForNull(transferModule.presentationController.getFromAccountType());
    var lFromAccountTypeFullForm = getOperativeAccountType(lFromAccountType) ;
    var lFromAccountNumber = checkForNull(transferModule.presentationController.getFromAccount());
	  var isIBAN =transferModule.presentationController.getBeneficiaryIsIBAN();
    var lBeneficiaryName = checkForNull(lBeneficiaryData.beneficiaryName); 
    var lBeneficiaryAccountNumber = checkForNull(lBeneficiaryData.beneficiaryAccountNumber);
    var lBeneficiaryAccountIBAN = checkForNull(lBeneficiaryData.beneficiaryIBAN);
    var lBeneficiarySwiftCode =  checkForNull(lBeneficiaryData.beneficiarySwiftCode);
    var lBeneficiaryCountrySpecificCode = kony.i18n.getLocalizedString("kony.ahb.transfers.CountryCode") ;//lBeneficiaryData.beneficiaryCountrySpecificCode  ;
    var lBeneficiaryCountrySpecificCodeValue = lBeneficiaryData.beneficiaryCountrySpecificCodeValue ;
    kony.print(lBeneficiaryCountrySpecificCodeValue + "lBeneficiaryCountrySpecificCode");
    if(lBeneficiaryCountrySpecificCodeValue){ ///todo chk for both once data comes
      lBeneficiaryCountrySpecificCodeValue = lBeneficiaryData.beneficiaryCountrySpecificCodeValue ? lBeneficiaryData.beneficiaryCountrySpecificCodeValue : kony.i18n.getLocalizedString("kony.ahb.common.None");
      this.view.flxSort.isVisible = true;
      this.view.flxSort.lblSortCode.text = lBeneficiaryCountrySpecificCode + ":" + " "+ lBeneficiaryCountrySpecificCodeValue;
    }
    var lBeneficiaryBankName = checkForNull(lBeneficiaryData.beneficiaryBankName);
    var lBeneficiaryCountryName = checkForNull(lBeneficiaryData.beneficiaryCountryName);

    
    
    var lPaidByWhom;
    var lTransferReason;
    var transferId = transferModule.presentationController.getTransfersId();
    if(transferId){
      lTransferReason = [transferModule.presentationController.getTransferReason(),transferModule.presentationController.getTransferReason()];
      lPaidByWhom = [transferModule.presentationController.getPaidByWhom(),transferModule.presentationController.getPaidByWhom()];
    }
    else{
      lTransferReason = transferModule.presentationController.getTransferReasonKeyVal();
      lPaidByWhom = transferModule.presentationController.getPaidByWhomKeyVal();
    }
    
    var lTransferRemarks = transferModule.presentationController.getTransferRemarks();
    var lFrequency=  checkForNull(lScheduledTransferData.scheduledDateAndFrequency);
    var lRecurringPayment =transferModule.presentationController.getRecurringPayment();
    
    // this.data=navMan.getCustomInfo("frmTransferConfirmation");
    var forUtility=applicationManager.getFormatUtilManager();
    var amount=forUtility.formatAmountandAppendCurrencySymbol(this.data.amount);
    this.view.lblFromAccount.text= kony.i18n.getLocalizedString("kony.mb.common.TransferAmount");
    this.view.lblFromAccountValue.text = appendCurrency(commaSeparatorUtil(lTransferAmount),lTransferCurrency);
    if(lTransferCurrency != fromAccCurrency && lTransferIndicativeAmountValue){
      this.view.lblIndicativeValue.setVisibility(true);
      this.view.lblIndicativeValue.text =  kony.i18n.getLocalizedString("kony.ahb.transfers.indicativeValue")+ " " + lTransferIndicativeAmountValue ;
      //this.view.lblFromAccountValueDetails.text=this.data.fromAccountName;
    }else{
       this.view.lblIndicativeValue.setVisibility(false);
      this.view.lblIndicativeValue.text = "" ;

    }
    this.view.lblFromAccountValueDetails.text = lFromAccountTypeFullForm;
    this.view.lblBank.text = formattedCardNumber(lFromAccountNumber);
    this.view.lblPayeeNameValue.text = lBeneficiaryName;
    if(isIBAN === "true"){
      ///TODO issue in arabic
      this.view.flxIBANNo.lblPayeeAddress.text = kony.i18n.getLocalizedString("kony.ahb.beneficiary.ibanWithPlaceHolder").replace("###PLACEHOLDER###",formatAlphanumericString(lBeneficiaryAccountNumber)) ;
    }else{
      this.view.flxIBANNo.lblPayeeAddress.text = kony.i18n.getLocalizedString("kony.ahb.accounts.accountWithPlaceHolder").replace("###PLACEHOLDER###",formatAlphanumericString(lBeneficiaryAccountNumber)) ;
    }
    
    
    if(lBeneficiaryData.beneficiarySwiftCode && (lBeneficiaryData.beneficiarySwiftCode !== configManager.constants.AHB_SWIFT_CODE) ){
      this.view.lblSWIFTCode.setVisibility(true);
      this.view.flxSWIFTCode.lblSWIFTCode.text = kony.i18n.getLocalizedString("kony.ahb.transfers.swiftCodeWithColon").replace("###PLACEHOLDER###", lBeneficiarySwiftCode);
    }else{
      this.view.lblSWIFTCode.setVisibility(false);
    }
    
    this.view.lblBankName.text=lBeneficiaryBankName;
    if(lBeneficiaryData.beneficiaryCountryName !== configManager.constants.AHB_COUNTRY_UAE){
      this.view.lblCountry.setVisibility(true);
       this.view.lblCountry.text=lBeneficiaryCountryName;
    }else{
      this.view.lblCountry.setVisibility(false);
    }
   
    
    this.view.flxReasonForTransfer.lblReasonForTransferValue.text = lTransferReason && lTransferReason.length ?  lTransferReason[1]:'';
    //this.view.flxRecurringTransfer.lblRecurringTransferValue.text = lRecurringPayment;
    this.view.lblRecurringTransferValue.text=lRecurringPayment;
    if(lRecurringPayment === "Yes"){
      this.view.lblTransferFrequencyValue.setVisibility(true);
      this.view.lblTransferFrequencyValue.text = lFrequency;
      //this.view.flxFrequency.lblTransferFrequencyValue.setVisibility(true);
      //this.view.flxFrequency.lblTransferFrequencyValue.text = lFrequency;
    }
    this.view.flxApplicableCharges.lblApplicableChargesValue.text = lPaidByWhom && lPaidByWhom.length ?  lPaidByWhom[1]:'';
    this.view.flxRemarks.lblRemarksValue.text = (lTransferRemarks)?lTransferRemarks:kony.i18n.getLocalizedString("kony.ahb.common.None");
       
  },
  createViewForOnce:function()
  {  
  var data = 
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.transfersDate"),
           "value":this.data.scheduledDate
          };
   this.segData.push(data);
   this.view.segDetails.setData(this.segData);
  },
  createViewForReccurence:function()
  {
    var data = 
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.Duration"),
           "value":scope_TransfersPresentationController.getDuration() 
          };
    this.segData.push(data);
     var data = 
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate"),
           "value":this.data.scheduledDate
          };
    this.segData.push(data);
    data =
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence"),
           "value":this.data.numberOfRecurrences
          };
    this.segData.push(data);
    this.view.segDetails.setData(this.segData);
//    this.view.lblStartDate.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate");
//     this.view.lblTransferFrequencyValue.text=this.data.frequencyType;
//     this.view.lblFrequencyTypeValue.text=this.data.duration;
//  this.view.lblStartDateValue.text=this.data.scheduledDate;
//     this.view.lblNumberOfRecc.text= applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence");
//     this.view.lblNumberOfReccValue.text=this.data.numberOfRecurrences;
   },
  createViewForDateRange:function()
  {
    var data = 
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.Duration"),
           "value":scope_TransfersPresentationController.getDuration() 
          };
    var data = 
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate"),
           "value":this.data.frequencyStartDate
          };
    this.segData.push(data);
    data =
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.EndDate"),
           "value":this.data.frequencyEndDate
          };
      this.segData.push(data);
        this.view.segDetails.setData(this.segData);
//     this.view.lblStartDate.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate");
//     this.view.lblTransferFrequencyValue.text=this.data.frequencyType;
//     this.view.lblFrequencyTypeValue.text=this.data.duration;
//     this.view.lblStartDateValue.text=this.data.frequencyStartDate;
//     this.view.lblEndDateValue.text=this.data.frequencyEndDate;
  },
  continueOnClick: function(){
    
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var transferPaymentMode = transferModule.presentationController.getTransferPaymentMode();
    var benType = transferModule.presentationController.getBeneficiaryType();
    var configManager = applicationManager.getConfigurationManager();

    if( benType === configManager.constants.TRANSFER_TYPE.TPF && transferPaymentMode === "AC"){
      this.view.onDeviceBack = this.onDeviceBackClick;
      var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      var bioMetricParam ={
        "flowScope":this,
        "container":"flxMain",
        "otpCallBack":this.sendOTP,
        "onConfirmationCallback":this.performTransfer,
        "promptMessage":kony.i18n.getLocalizedString("kony.ahb.transfer.ConfirmTransfer")
      } ;	
      authMode.presentationController.bioMetricVerification(bioMetricParam);
    }else{
       transferModule.presentationController.doTransfer(); 
    }
   
  },

  /*-----------------------------------------------------------------------------------

  Name: 	btnBackOnClick
  Purpose: 	navigates back  to previous screen
  Author: 	Fariha
  Date: 	31/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  

  btnBackOnClick:function(){
    var navMan=applicationManager.getNavigationManager();   
    navMan.setEntryPoint("Calender","frmTransferConfirmation");
    navMan.goBack(); 
  },

  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },
  
 /*-----------------------------------------------------------------------------------

  Name: 	populateForm
  Purpose: 	based on the benType and PaymentMode, decides the layout& widget visibility of the UI
  Author: 	Fariha
  Date: 	02/10/2018
  Input:	pBtype: beneficiary type
  			pPaymentMode: payment mode
  Return: 	

  ------------------------------------------------------------------------------------*/  

  populateForm : function(pBtype,pPaymentMode){
    var lFlow = pBtype;
    var lMode = pPaymentMode;
	kony.print("populateForm populateForm"+lFlow+lMode);
	this.view.flxTransferFrequency.setVisibility(true);
    this.view.lblPayeeName.setVisibility(true);
    //this.view.flxFrequency.setVisibility(true);
    //this.view.flxRecurringTransfer.setVisibility(true);
    var navManager = applicationManager.getNavigationManager();
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var configManager = applicationManager.getConfigurationManager();
    var isScheduledFlag=transferModule.presentationController.getScheduledFlag();
    var transferPaymentMode = transferModule.presentationController.getTransferPaymentMode();
    var transferId = transferModule.presentationController.getTransfersId();
    if(isScheduledFlag===configManager.constants.AHB_SCHEDULED_YES){
       this.view.flxFrequency.setVisibility(true);
    this.view.flxRecurringTransfer.setVisibility(true);
    }else{
       this.view.flxFrequency.setVisibility(false);
    this.view.flxRecurringTransfer.setVisibility(false);
    }
    
    if(lFlow === "SLF" ){
      this.view.flxReasonForTransfer.setVisibility(true);
      
      this.getData();
      if(lMode === "AA"){
        this.view.lblPayeeName.text = kony.i18n.getLocalizedString("kony.ahb.Transfers.ToMyAccount");
        this.view.lblReasonForTransfer.text = getOperativeAccountType(transferModule.presentationController.getBeneficiaryAccountType()); ///TOdo pass  acc type
        this.view.lblReasonForTransferValue.text = formatAlphanumericString(transferModule.presentationController.getBeneficiaryAccountNumber());
        this.view.lblReasonForTransfer.width = "55%";
        this.view.lblReasonForTransferValue.width = "45%";
      
      }
      else{
        var cardNumber = formatAlphanumericString(transferModule.presentationController.getBeneficiaryAccountNumber());
        cardNumber = getMaskedString(7,14,"*",cardNumber);
        this.view.lblPayeeName.text = kony.i18n.getLocalizedString("kony.ahb.Transfers.ToMyCreditCard");
        this.view.lblReasonForTransfer.text = kony.i18n.getLocalizedString("kony.mb.cardManage.cardNum");
        this.view.lblReasonForTransferValue.text = cardNumber; 
        this.view.lblReasonForTransfer.width = "35%";
      this.view.lblReasonForTransferValue.width = "65%";
      
      }
    }else if(lFlow === "RMT"){
      
		this.getData();
      this.view.flxPayeeName.isVisible = true;
      this.view.lblPayeeName.text = kony.i18n.getLocalizedString("kony.ahb.transfers.toTheBeneficiary");
      this.view.lblReasonForTransfer.text = kony.i18n.getLocalizedString("kony.ahb.transfers.reasonForTansfer");
      this.view.flxApplicableCharges.setVisibility(true);
      this.view.flxReasonForTransfer.setVisibility(true);
      //this.view.lblReasonForTransfer.left = "0%";
      this.view.lblReasonForTransfer.width = "55%";
      this.view.lblReasonForTransferValue.width = "45%";
      
      //this.view.flxFrequency.setVisibility(true);
      //this.view.flxRecurringTransfer.setVisibility(true);
    }
    else if(lFlow === "TPF"){ //TPF
      
      this.getData(); 
      this.view.lblPayeeName.text = kony.i18n.getLocalizedString("kony.ahb.transfers.toTheBeneficiary");
      if(lMode === "AC"){
        kony.print("transferPaymentMode=="+transferPaymentMode);
         //this.view.lblPayeeName.text = kony.i18n.getLocalizedString("kony.ahb.Transfers.ToMyCreditCard");
         this.view.lblReasonForTransfer.text = kony.i18n.getLocalizedString("kony.mb.cardManage.cardNum");
         if((!isEmpty(transferId)) && (transferPaymentMode === configManager.constants.AHB_TRANSFER_MODE_CARD)){
           var card ="";
           card =  formatAlphanumericString(transferModule.presentationController.getBeneficiaryAccountNumber());
           card = getMaskedString(7,14,"*",card);
           this.view.lblReasonForTransferValue.text = card;
           this.view.lblReasonForTransfer.width = "55%";
           this.view.lblReasonForTransferValue.width = "45%";
      
            }else{
         this.view.lblReasonForTransferValue.text =  formatAlphanumericString(transferModule.presentationController.getBeneficiaryAccountNumber()) ;
         }
         //this.view.lblReasonForTransferValue.text =  formatAlphanumericString(transferModule.presentationController.getBeneficiaryAccountNumber()) ;
        this.view.lblReasonForTransfer.width = "55%";
        this.view.lblReasonForTransferValue.width = "45%";
        this.view.flxReasonForTransfer.setVisibility(true);
      }
      else{
        this.view.flxPayeeName.isVisible = true;
      }
      
    }

  },
  
  ///TODO function header
  /*-----------------------------------------------------------------------------------

  Name: 	sendOTP
  Purpose: 	Invoke OTP flow for tranfers
  Author: 	Bipin
  Date: 	
  Input:NA
  Return: NA	

  ------------------------------------------------------------------------------------*/  
   sendOTP : function(){
    kony.print("Transfer sendOTP" );
    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("generateOTP","Transfer");
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    transferModule.presentationController.triggerOtp();
  },

/*-----------------------------------------------------------------------------------

  Name: 	performTransfer
  Purpose: 	Executes transfer on biometric validation
  Author: 	Bipin
  Date: 	
  Input:NA
  Return: NA	

  ------------------------------------------------------------------------------------*/  
  performTransfer : function (){
    //alert("Add ben")
     kony.print("performTransfer " );
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    transferModule.presentationController.doTransfer();
  },
  /*-----------------------------------------------------------------------------------

  Name: 	customAlertPopUpFlxCancelOnClick
  Purpose: 	 biometric cancel button functionality
  Author: 	Bipin
  Date: 	
  Input:NA
  Return: NA	

  ------------------------------------------------------------------------------------*/  

  customAlertPopUpFlxCancelOnClick:function(){
    this.view.onDeviceBack= this.btnBackOnClick;
    this.view.customAlertPopUp.setVisibility(false);
    this.view.flxMain.setEnabled(true);

    kony.localAuthentication.cancelAuthentication();
    
  },
   /*-----------------------------------------------------------------------------------

  Name: 	onDeviceBackClick
  Purpose: 	 TO block device back
  Author: 	Bipin
  Date: 	
  Input:NA
  Return: NA	

  ------------------------------------------------------------------------------------*/  
   onDeviceBackClick :  function(){
    kony.print("onDeviceBackClick");
  },
/*
@Purpose executes on click of edit transfer button and takes user to Transfer Input page retaining all the inputs entered 
*/
 editTransfer : function(){
  var navManger = applicationManager.getNavigationManager();
  navManger.setEntryPoint("onEdit","frmTransferConfirmationForEdit");
  navManger.navigateTo("frmTransferAmount");
  }



});