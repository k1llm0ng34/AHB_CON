define({
  timerCounter:0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    var FormValidator = require("FormValidatorManager")
    this.fv = new FormValidator(2);
  },
  frmPreShow: function() {
    //this.fv.submissionView(this.view.btnContinue);
    this.view.customAlertPopUp.lblTitle.text = kony.i18n.getLocalizedString("kony.ahb.payments.ConfirmAddPayee");
    this.view.btnContinue.onClick = this.authenticateAddPayee;
    //this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
    //this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
    
    //this.renderTitleBar();
    //this.setDataToForm();
    this.view.customHeader.setVisibility(false);
    this.doNotCancelTransaction();
    this.initActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  }, 
  
  btnRightOnClick: function() {
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var flowType=billPayMod.presentationController.getFlowType();
    billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
  },
  
  renderTitleBar: function() {
    if (kony.os.deviceInfo().name === 'iPhone') {
      this.view.flxHeader.setVisibility(false);
    }
  },
  
  flxBackOnClick: function() {
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  
  btnContinueOnClick: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var nickName=this.view.txtAccNickName.text;
    var nameOnBill=this.view.txtAccNickName.text;
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayMod.presentationController.createBillPayPayee(this.view.txtAccNickName.text,this.view.txtNameOnBill.text);

  },
  
  
  initActions:function(){
    var scope=this;
    this.view.txtNameOnBill.onTextChange = function(){
      var text = scope.view.txtNameOnBill.text;
      scope.fv.checkAndUpdateStatusForNull(0,text);   
    };
    this.view.txtAccNickName.onTextChange = function(){
      var text = scope.view.txtAccNickName.text;
      scope.fv.checkAndUpdateStatusForNull(1,text);   
    };
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.cancelAddPayee;
    this.view.MainHeaderWithCancel.btnBack.onClick = this.flxBackOnClick;
    this.view.MainHeaderWithCancel.flxBack.onClick = this.flxBackOnClick;

    this.view.btnEdit.onClick = this.flxBackOnClick;

    this.view.customAlertPopUp.flxCancel.onClick = this.customAlertPopUpFlxCancelOnClick;
    
    this.setPayeeDetailsOnConfirmation();
  },
  
  
  validateFormUI : function(){
    var formValues =[];
    formValues.push(this.view.txtNameOnBill.text);
    formValues.push(this.view.txtAccNickName.text);
    this.fv.preshowCheck(formValues);
  },
  setDataToForm:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var payeeData=billPayMod.presentationController.getPayeeDetails();
    if(billPayMod.presentationController.getManuallyAddedFlag()==="false"){
      if(payeeData.billerCategoryName == "Credit Card" || payeeData.billerCategoryName == "Utilities"){
        this.view.flxAccNo.isVisible = true;
        this.view.flxPhoneNumber.isVisible = false;
        this.view.flxRelationNumber.isVisible = false;
        this.view.flxPolicyNumber.isVisible = false;
        this.view.lblAccNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(payeeData.accountNumber);
      }
      else if(payeeData.billerCategoryName == "Phone"){
        this.view.flxAccNo.isVisible = false;
        this.view.flxPhoneNumber.isVisible = true;
        this.view.flxRelationNumber.isVisible = true;
        this.view.flxPolicyNumber.isVisible = false;
        this.view.lblPhoneNumberValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(payeeData.phone);
        this.view.lblRelationNumberValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(payeeData.accountNumber);
      }
      else{
        this.view.flxAccNo.isVisible = true;
        this.view.flxPhoneNumber.isVisible = false;
        this.view.flxRelationNumber.isVisible = false;
        this.view.flxPolicyNumber.isVisible = true;
        this.view.lblAccNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(payeeData.accountNumber);
        this.view.lblPolicyNumberValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(payeeData.phone);
      }
    }
    else{
      this.view.flxAccNo.isVisible = true;
      this.view.flxPhoneNumber.isVisible = false;
      this.view.flxRelationNumber.isVisible = false;
      this.view.flxPolicyNumber.isVisible = false;
      if(payeeData.accountNumber){
        var accnum=payeeData.accountNumber;
        this.view.lblAccNoValue.text=applicationManager.getDataProcessorUtility().maskAccountNumber(accnum);
      }
      else if(payeeData.accountNumber===""){
        this.view.lblAccNoValue.text="Not Available";
      }
    }    
    this.view.lblPayeeFullNameValue.text = (payeeData.payeeName && payeeData.payeeName !== "" && payeeData.payeeName!== null)?payeeData.payeeName:"";
   
    if(billPayMod.presentationController.getPayeeAddressDetails())
    {
      var payeeAddress=billPayMod.presentationController.getPayeeAddressDetails();
      if(payeeAddress.street || payeeAddress.addressLine2 || payeeAddress.cityName|| payeeAddress.zipCode || payeeAddress.state ){
        var address="";
        if(payeeAddress.addressLine1){
          address=address+payeeAddress.addressLine1+",";
        }
        if(payeeAddress.street){
          address=address+payeeAddress.street+",";
        }
        if(payeeAddress.addressLine2){
          address=address+payeeAddress.addressLine2+",";
        }
        if(payeeAddress.state){
          address=address+payeeAddress.state+",";
        }
        if(payeeAddress.zipCode){
          address=address+payeeAddress.zipCode;
        }
        this.view.lblPayeeAddressValue.text=address;
      }
    }
    this.view.txtNameOnBill.text = (payeeData.nameOnBill && payeeData.nameOnBill !== "" && payeeData.nameOnBill!== null)?payeeData.nameOnBill:"";
    this.view.txtAccNickName.text =(payeeData.payeeNickName && payeeData.payeeNickName !== "" && payeeData.payeeNickName!== null)?payeeData.payeeNickName:
    (payeeData.payeeName && payeeData.payeeName!=="" && payeeData.payeeName!==null)?payeeData.payeeName:"";
  },
  
  
  bindGenericError : function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  /*
  @Purpose To show Alert pop up when Cancel is clicked
  */
  cancelAddPayee : function(){
    this.view.flxMainParent.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.cancelOnClick;
  },
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel in Add payee flow
  */
  doNotCancelTransaction : function(){
    this.view.flxMainParent.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
  },
  /*
  @Purpose To navigate to frmBillPay if user prefers to cancel add payee flow
  */
  cancelOnClick : function(){
    this.view.flxMainParent.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayModule.presentationController.commonFunctionForNavigation("frmBillPay");
  },
  /*
  @Purpose To set the Payee data 
  */
  setPayeeDetailsOnConfirmation : function(){
   
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    this.view.lblServiceProviderValue.text = billPayMod.presentationController.getOperatorName();
    if(!isEmpty(billPayMod.presentationController.getServiceType())){
      this.view.lblServiceTypeValue.text = billPayMod.presentationController.getServiceType();
      this.view.flxServiceType.setVisibility(true);
      this.view.flxSeparatorType.setVisibility(true)

    }else{
      this.view.flxServiceType.setVisibility(false);
      this.view.flxSeparatorType.setVisibility(false)
    }
    this.view.lblConsumerNumberValue.text = billPayMod.presentationController.getConsumerNumber();
    this.view.lblNickNameValue.text = billPayMod.presentationController.getPayeeNickName();
  },
  /*
  @Purpose executes on click of device back
  */
  onDeviceBackClick :  function(){
    kony.print("onDeviceBackClick");
  },
  /*
  @Purpose To trigger authentication process after consumer details entererd by user are validated successfully
  */
  authenticateAddPayee : function(){
    kony.print("entered authenticateAddPayee");
    this.view.onDeviceBack = this.onDeviceBackClick;
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      var bioMetricParam ={
      "flowScope":this,
      "container":"flxMainParent",
      "otpCallBack":this.sendOTP,
      "onConfirmationCallback":this.callAddPayee,
      "promptMessage":kony.i18n.getLocalizedString("kony.ahb.payments.ConfirmAddPayee")
    } ;	
    authMode.presentationController.bioMetricVerification(bioMetricParam);
  },
  /*
  @Purpose To trigger OTP generation and validation 
  */
  sendOTP : function(){
    kony.print("entered sendOTP" );
    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("generateOTP","AddPayee");
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    transferModule.presentationController.triggerOtp();
  },
  /*
  @Purpose To navigate to Add Payee Confirmation Page
  */
  callAddPayee : function(){
    kony.print("entered goToConfirmAddPayee");
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
//     var payeeDetails = {
//       "consumerNumber":billPayModule.presentationController.getConsumerNumber(),
//       "nickName":billPayModule.presentationController.getPayeeNickName(),
//       "operatorCode":billPayModule.presentationController.getOperatorCode(),
//       "serviceCode":billPayModule.presentationController.getServiceCode()
//     }; 
    billPayModule.presentationController.addPayee();
  },
  /*
  @Purpose To cancel the Biometric Authentication
  */
  customAlertPopUpFlxCancelOnClick:function(){
    kony.print("entered customAlertPopUpFlxCancelOnClick");
    this.view.onDeviceBack= this.flxBackOnClick;
    this.view.customAlertPopUp.setVisibility(false);
    this.view.flxMainParent.setEnabled(true);
    kony.localAuthentication.cancelAuthentication();
  }

});