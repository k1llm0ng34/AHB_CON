define({
  
   init : function(){
   
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function() {

        this.initActions();
      	var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var payeeData = billPayModule.presentationController.getAllPayeeData();
       	kony.print(" preShow - payeeData - " + JSON.stringify(payeeData));
        this.setPayeeDetails(payeeData);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
	
    initActions: function() {
        var scope = this;
      var configManager = applicationManager.getConfigurationManager();
   	  var MenuHandler =  applicationManager.getMenuHandler();
		MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUBILLPAY);
      this.view.btnDeleteRecipient.onClick = this.onDelete;
      this.view.AlertPopup.btnDontCancel.onClick = this.onDontDelete;
      this.view.AlertPopup.btnOK.onClick = this.onConfirmDelete;
      this.view.customAlertPopUp.flxCancel.onClick = this.customAlertPopUpFlxCancelOnClick;
      this.view.MainHeaderWithCancel.flxBack.onClick = this.onBackClick;
      this.view.MainHeaderWithCancel.btnBack.onClick = this.onBackClick;
      this.view.MainHeaderWithCancel.btnCancel.onClick = this.onEditPayee;
      

    },
  
  bindGenericError : function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  
     /***********************************************************************************************
  Name: onBackClick - navigate to back
  Author: Sindhu
  Date: 27/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  onBackClick: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  
  
  /***********************************************************************************************
  Name: onEditPayee - navigating to frmBillPayPayeeDetails
  Author: Sindhu
  Date: 27/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  onEditPayee: function(){
  	var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmBillPayEditName");
  },

  /***********************************************************************************************
  Name: onEditPayeeSuccess - success message from service
  Author: Sindhu
  Date: 27/11/2018
  Input: none
  Return: success message
*************************************************************************************/    
  onEditPayeeSuccess : function (pNickName){
    this.bindGenericError(kony.i18n.getLocalizedString("kony.ahb.payments.Payeenicknamechanged"));
  },
  
  bindSuccessMessage : function(errorMsg){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var nickName = transferModule.presentationController.getPayeeNickName();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, errorMsg);
    errorMsg = errorMsg.replace("###PLACEHOLDER###", nickName);
  },
  
    /***********************************************************************************************
  Name: onDeletePayeeSuccess - success message from service
  Author: Sindhu
  Date: 27/11/2018
  Input: none
  Return: success message
*************************************************************************************/ 
	 onDeletePayeeSuccess : function (pId){
       // get all Payee List.
    this.bindSuccessMessage(kony.i18n.getLocalizedString("kony.ahb.payments.payeeDeletionSuccessMsg"));
  	},
  
/***********************************************************************************************
  Name: onDontDelete - set visibility of popup false
  Author: Sindhu
  Date: 27/11/2018
  Input: none
  Return: none
*************************************************************************************/   
  onDontDelete: function(){
    this.view.AlertPopup.setVisibility(false);
    this.view.flxMainContainer.setEnabled(true);
    this.view.MainHeaderWithCancel.setEnabled(true);
    this.view.onDeviceBack= this.onBackClick;
  },

/***********************************************************************************************
  Name: onConfirmDelete 
  Author: Sindhu
  Date: 26/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  onConfirmDelete: function(){
    this.onDontDelete();
    this.view.onDeviceBack = this.onDeviceBackClick ;
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
     var bioMetricParam ={
      "flowScope": this,
      "container": "flxMainContainer",
      "otpCallBack": this.sendOTP,
      "onConfirmationCallback": this.performDeletePayee,
      "promptMessage": kony.i18n.getLocalizedString("kony.ahb.payments.ConfirmDeletePayee")
    } ;	
    authModule.presentationController.bioMetricVerification(bioMetricParam);
    
    
  },

/***********************************************************************************************
  Name: onDelete - set visibility of popup true
  Author: Sindhu
  Date: 26/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  
  onDelete: function(){
    this.view.AlertPopup.setVisibility(true);
    this.view.flxMainContainer.setEnabled(false);
    this.view.MainHeaderWithCancel.setEnabled(false);
    this.view.onDeviceBack = this.onDeviceBackClick ;
  },
  
       /***********************************************************************************************
  Name: sendOTP - navigate to back
  Author: Sindhu
  Date: 27/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  sendOTP : function(){
	//alert("OTP")
     kony.print("Delete Beneficiary- sendOTP" );
      var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("generateOTP","DeletePayee");
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    transferModule.presentationController.triggerOtp();
  },
   /***********************************************************************************************
  Name: performDeleteBeneficiary - navigate to back
  Author: Sindhu
  Date: 27/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  performDeletePayee : function (){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var payeeId = billPayModule.presentationController.getPayeeId();
    kony.print(" performDeletePayee "+payeeId);
    billPayModule.presentationController.deletePayee(payeeId);
  },
  
  /***********************************************************************************************
  Name: customAlertPopUpFlxCancelOnClick - navigate to back
  Author: Sindhu
  Date: 26/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  customAlertPopUpFlxCancelOnClick:function(){
    this.view.customAlertPopUp.setVisibility(false);
    kony.localAuthentication.cancelAuthentication();
    this.view.flxMainContainer.setEnabled(true);
    this.view.MainHeaderWithCancel.setEnabled(true);
    this.view.onDeviceBack= this.onBackClick;
    
  },
  
  /***********************************************************************************************
  Name: onDeviceBackClick
  Author: Sindhu
  Date: 26/11/2018
  Input: none
  Return: none
*************************************************************************************/  
  onDeviceBackClick :  function(){
    kony.print("onDeviceBackClick");
  },
  
  setPayeeDetails: function (payeeData)
  {
    this.view.lblNickName.text = payeeData.nickName;
    this.view.lblPayeeFullNameValue.text = payeeData.operatorName;
    if(payeeData.hasSubService==="true"){
      this.view.flxSeparator2.setVisibility(true);
      this.view.flxServiceType.setVisibility(true);
      this.view.lblServiceTypeValue.text = payeeData.serviceType;
      this.view.flxConsumerNum.top="3%";
    }else{
      this.view.flxConsumerNum.top="4%";
      this.view.lblServiceTypeValue.text ="";
      this.view.flxServiceType.setVisibility(false);
      this.view.flxSeparator2.setVisibility(false);
    }
        
    this.view.lblConsumerNumValue.text = payeeData.consumerNumber;
  }

});