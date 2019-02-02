define({
      
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function () {
       /* if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }*/

      this.initActions();
      //this.setDataToForm();
      this.view.AlertPopup.setVisibility(false);
      this.view.flxMainContainer.setEnabled(true);
      this.view.customAlertPopUp.setVisibility(false);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var configManager = applicationManager.getConfigurationManager();
      var MenuHandler =  applicationManager.getMenuHandler();
      MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUTRANSFERS);
      var navManager = applicationManager.getNavigationManager();
      var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var allBeneficiaryData = transferMod.presentationController.getAllBeneficiaryData();
      kony.print(" preShow - allBeneficiaryData - " + JSON.stringify(allBeneficiaryData));
      //var pBeneficiaryDetails = navManager.getCustomInfo("frmManageP2pRecipient");
      this.setBeneficiaryDetails(allBeneficiaryData);
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function () {
        //var scope = this;

      this.view.btnDeleteRecipient.onClick = this.onDelete;
      this.view.AlertPopup.btnDontCancel.onClick = this.onDontDelete;
      this.view.AlertPopup.btnOK.onClick =  this.fetchBeneficiariesScheduledTransfer; 
      this.view.MainHeaderWithCancel.btnCancel.onClick = this.onEditBeneficiary;
      this.view.MainHeaderWithCancel.flxBack.onClick = this.onBackClick;
      this.view.MainHeaderWithCancel.btnBack.onClick = this.onBackClick;
      this.view.customAlertPopUp.flxCancel.onClick = this.customAlertPopUpFlxCancelOnClick;
      this.view.onDeviceBack= this.onBackClick;

       /* this.view.customHeader.flxBack.onClick = function () {
            var navMan=applicationManager.getNavigationManager();
          	navMan.goBack();
        }
        
        this.view.customHeader.btnRight.onClick = function () {
         scope.onClickEdit();         
        }
        this.view.btnDeleteRecipient.onClick = function(){
          //kony.ui.Alert("Are You sure do you want to delete this user permanently", confirmDelete, constants.ALERT_TYPE_CONFIRMATION, "Yes", "No", "");
          var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),
            "yesLabel":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.deleteRecipient","Do you want to delete the recipient"),
            "alertHandler": scope.confirmDelete
          };
          applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});;
        }
        this.view.btnPayAPerson.onClick = function(){
          var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
          var data=payeeMod.presentationController.getP2PPayeeDetails();
          var navMan=applicationManager.getNavigationManager();
          navMan.setEntryPoint("payaperson","frmManageP2pRecipient");
          payeeMod.presentationController.getP2pAccounts(data); 
        }*/
    },
  setDataToForm : function(){
    var scope = this;
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var recipientData=payeeMod.presentationController.getP2PPayeeDetails();
    if(recipientData){
    scope.view.lblRecipientNameValue.text=recipientData.name;
    scope.view.lblRecipientContact.text=recipientData.phone;
    scope.view.lblRecipientNickNameValue.text=recipientData.nickName;
   }
  },
  confirmDelete:function(response){
    if(response===true){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      p2pMod.presentationController.deleteP2PRecipient();
    } else{
      kony.print("don't delete");
    }
  },
  onClickEdit :function(){
              applicationManager.getPresentationUtility().showLoadingScreen();
         	var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            var accountDetails=p2pMod.presentationController.getP2PPayeeDetails();
    		p2pMod.presentationController.editBenificiaryNickName(accountDetails);
 
},
/************************************************************************************
  Name: setBeneficiaryDetails - set segment data
  Author: Sindhu
  Date: 2/11/2018
  Input: pBeneficiaryDetails
  Return: segmentData
*************************************************************************************/
  setBeneficiaryDetails : function(pBeneficiaryDetails){
  	kony.print("setBeneficiaryDetails_pBeneficiaryDetails " +JSON.stringify(pBeneficiaryDetails));
    
    var lSegmentData =[];
     this.view.SegBeneficiaryDetails.widgetDataMap = {
       			lblRight:"key",
       			lblLeft:"value"
	};
    lSegmentData =[
      {
        key : kony.i18n.getLocalizedString("kony.mb.BenName.Title"),
        value: pBeneficiaryDetails.beneficiaryName
      },
      {
        key : kony.i18n.getLocalizedString("kony.mb.common.Country"),
        value: pBeneficiaryDetails.beneficiaryCountryName
      },
      {
        key :{ text:(kony.i18n.getLocalizedString("kony.mb.Manage.BankBranch")),maxwidth:"30%",maxWidth:"30%",width:"30%"},
        value: { text:(pBeneficiaryDetails.beneficiaryBankName), maxwidth:"70%",maxWidth:"70%",width:"70%"},
      },
      {
        key : kony.i18n.getLocalizedString("kony.ahb.transfers.swift"),
        value: pBeneficiaryDetails.beneficiarySwiftCode
      }
    ];
    if(pBeneficiaryDetails.beneficiaryCountrySpecificCodeValue){
      lSegmentData.push({
        key :  kony.i18n.getLocalizedString("kony.ahb.transfers.CountryCode"),
        value: pBeneficiaryDetails.beneficiaryCountrySpecificCodeValue
      });
    }
    if(pBeneficiaryDetails.beneficiaryBranch){
      lSegmentData.push({
        key : kony.i18n.getLocalizedString("kony.ahb.accountDetails.branch"),
        value: pBeneficiaryDetails.beneficiaryBranch
      });
    }
    this.view.SegBeneficiaryDetails.setData(lSegmentData);
    this.view.editHeader.lblBeneficiaryNickname.text = pBeneficiaryDetails.beneficiaryNickName;
    this.view.editHeader.lblIban.text = formatAlphanumericString(pBeneficiaryDetails.beneficiaryAccountNumber);
},
  
/***********************************************************************************************
  Name: onEditBeneficiary - navigating to frmManageEditRecipient
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  onEditBeneficiary: function(){
  	var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmManageEditRecipient");
  },
  
/***********************************************************************************************
  Name: onDontDelete - set visibility of popup false
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/   
  onDontDelete: function(){
    this.view.AlertPopup.setVisibility(false);
    this.view.flxMainContainer.setEnabled(true);
  },

/***********************************************************************************************
  Name: onConfirmDelete - getId to delete
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  onConfirmDelete: function(){
    this.onDontDelete();
    //this.view.AlertPopup.setVisibility(false);
    this.view.onDeviceBack = this.onDeviceBackClick ;
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
     var bioMetricParam ={
      "flowScope": this,
      "container": "flxMainContainer",
      "otpCallBack": this.sendOTP,
      "onConfirmationCallback": this.performDeleteBeneficiary,
      "promptMessage": kony.i18n.getLocalizedString("kony.ahb.beneficiary.ConfirmDeleteBeneficiary")
    } ;	
    authMode.presentationController.bioMetricVerification(bioMetricParam);
    
  },

/***********************************************************************************************
  Name: onDelete - set visibility of popup true
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  
  onDelete: function(){
    this.view.AlertPopup.setVisibility(true);
    this.view.flxMainContainer.setEnabled(false);
  },
  
/***********************************************************************************************
  Name: onEditBeneficiarySuccess - success message from service
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: success message
*************************************************************************************/    
  onEditBeneficiarySuccess : function (pNickName){
    this.bindGenericMessage(kony.i18n.getLocalizedString("kony.ahb.ALERT.beneficiary.beneficiaryNickNameUpdate"));
  },
  
 /***********************************************************************************************
  Name: bindGenericMessage - generic error message from service
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/   
  bindGenericMessage: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scope,err);
    this.view.flxMainContainer.setEnabled(true);

  },
  
 bindGenericError: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scope,err);
    this.view.flxMainContainer.setEnabled(true);

  },
   /***********************************************************************************************
  Name: onBackClick - navigate to back
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  onBackClick: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  
     /***********************************************************************************************
  Name: sendOTP - navigate to back
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  sendOTP : function(){
	//alert("OTP")
     kony.print("Delete Beneficiary- sendOTP" );
      var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("generateOTP","DeleteBeneficiary");
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    transferModule.presentationController.triggerOtp();
  },
   /***********************************************************************************************
  Name: performDeleteBeneficiary - navigate to back
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  performDeleteBeneficiary : function (){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var beneficiaryId = transferModule.presentationController.getbeneficiaryId();
    kony.print(" performDeleteBeneficiary "+beneficiaryId);
    transferModule.presentationController.deleteSameBankBenificiary(beneficiaryId);
  },
  
  /***********************************************************************************************
  Name: customAlertPopUpFlxCancelOnClick - navigate to back
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  customAlertPopUpFlxCancelOnClick:function(){
    this.view.customAlertPopUp.setVisibility(false);
    kony.localAuthentication.cancelAuthentication();
    this.view.flxMainContainer.setEnabled(true);
    this.view.onDeviceBack= this.onBackClick;
    
  },
  
/***********************************************************************************************
  Name: onDeviceBackClick
  Author: Bipin
  Date: 10/11/2018
  Input: none
  Return: none
*************************************************************************************/  
  onDeviceBackClick :  function(){
    kony.print("onDeviceBackClick");
  },
  
 /***********************************************************************************************
  Name: fetchBeneficiariesScheduledTransfer
  Author: Bipin
  Date: 12/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  fetchBeneficiariesScheduledTransfer : function(){
     kony.print(" fetchBeneficiariesScheduledTransfer start");
    this.view.AlertPopup.setVisibility(false);
    this.view.onDeviceBack = this.onDeviceBackClick ;
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
	  var  request = {
      				beneficiaryAccountNumber : transferMod.presentationController.getBeneficiaryAccountNumber()
                   };
    kony.print(" fetchBeneficiariesScheduledTransfer start" +JSON.stringify(request));

    transferMod.presentationController.fetchScheduledTransfersForBeneficiary(request);
  }
  
  

});