define({
  /*
@Purpose Initializes the Form and respective controller and controller action
*/
   init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"NO",currentForm);	
    },

  /*
  @Purpose Executes on form preshow
  */
  preShow : function(){      
    var transfer = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    this.initActions();
    this.doNotCancelTransaction();
    this.setDataForMainSection();
    this.setDataForTransferDetails();
    this.setDataForBeneficiaryDetails();  
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUTRANSFERS);
    },

  /*
  @Purpose Initializes widgets actions 
  
  
  
  */
  initActions: function() {
    
    var scope = this;
    this.view.MainHeaderWithCancel.btnBack.onClick = this.btnBackOnClick;
    
    this.view.MainHeaderWithCancel.flxBack.onClick = this.btnBackOnClick;
    this.view.btnDelete.onClick = this.onDelete;
    //this.view.btnCancel.onClick = this.onClickEdit;
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.onClickEdit;
    },

  /*
  @Purpose Onclick action of Delete button on 'Transfers Details' page 
  */
  onDelete : function(){
    this.view.flxMain.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.deleteScheduledTransaction;
  },
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel in Transfers Details
  */
  doNotCancelTransaction : function(){
    this.view.flxMain.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
  },
  /*
  @Purpose executes on click of Back Button and takes the user to Transfers Landing page
  */
  btnBackOnClick:function(){
   var navMan=applicationManager.getNavigationManager();
    var transfer = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transfer.presentationController.resetFromAccountInfo();
    navMan.goBack();
   },

  /*
  @Purpose sets data on the main header section of the Transfer Detail form
  */
  setDataForMainSection : function(){
   
    var navManager = applicationManager.getNavigationManager();
    var details = navManager.getCustomInfo("frmTransferDetails");
    kony.print("details==="+(details[0].beneficiaryName));
    
   
    this.view.mainDetails.lblCurrentAccount.text = details[0].beneficiaryName;
    this.view.mainDetails.lblCurrentAccountValue.setVisibility(false);
    this.view.mainDetails.lblAmount.text = details[0].txnAmountUI;
  },

  /*
  @Purpose sets data on the Transfer detail section of the Transfer Detail form
  */
  setDataForTransferDetails : function(){
    var transfer = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var navManager = applicationManager.getNavigationManager();
    var details = navManager.getCustomInfo("frmTransferDetails");
    kony.print("details==="+JSON.stringify(details));
    
    var fromAccountInfo = transfer.presentationController.getSelectedAccountInfo(details[0].fromAccountNumber);
    var fromAccountType =  getOperativeAccountType(fromAccountInfo.AccountType);

    this.view.segTransferDetails.widgetDataMap = {
      lblSpending:"key",
      lblAmountSpent: "value"
    };
    var segmentData = [];
      segmentData = [
        {
        key : kony.i18n.getLocalizedString("kony.mb.common.from"),
        value :  fromAccountType + " " + formatAlphanumericString(details[0].fromAccountNumber) 
        },
        {
        key : kony.i18n.getLocalizedString("kony.mb.transaction.frequency"),
        value : details[0].txnFrequency
      },
        {
         key : kony.i18n.getLocalizedString("kony.AHB.Transfers.CreationDate"),
        value : checkForNull(details[0].createdDate)
      }      
    ];   
    if(details[0].txnFrequency !== "JustOnce"){
      segmentData[segmentData.length] = {
        key : kony.i18n.getLocalizedString("kony.mb.Transfers.StartDate"), 
        value : details[0].txnStartDate
      };
      segmentData[segmentData.length] = {
        key : kony.i18n.getLocalizedString("kony.AHB.Transfers.ScheduledDate"),
        value : details[0].scheduledDate 
      };

    }else{
      segmentData[segmentData.length] = {
        key : kony.i18n.getLocalizedString("kony.AHB.Transfers.ScheduledDate"),
        value : details[0].scheduledDate 
      };

    }
    if (details[0].transferType === "RMT") {
      var purpose = 
        {
        key : kony.i18n.getLocalizedString("kony.ahb.transfers.transferReason"),
        value : details[0].txnPurpose 
          };
      segmentData.push(purpose);
      var paidby = 
        {
        key : kony.i18n.getLocalizedString("kony.ahb.transfers.chargesPaidby"),
        value : details[0].chargeIndicator 
          };
      segmentData.push(paidby);
        }
    if(details[0].txnRemarks){
      var remarks = {
        key : kony.i18n.getLocalizedString("kony.ahb.transfers.remarks"),
        value :  details[0].txnRemarks
        };
      segmentData[segmentData.length]=remarks;
    }
     
    this.view.segTransferDetails.setData(segmentData);

  },

  /*
  @Purpose sets data on the Beneficiary Details section of the Transfer Detail form
  */
  setDataForBeneficiaryDetails : function(){
    var transfer = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var transferPaymentMode = transfer.presentationController.getTransferPaymentMode();
	var configManager = applicationManager.getConfigurationManager();
    var navManager = applicationManager.getNavigationManager();
    var details = navManager.getCustomInfo("frmTransferDetails");
    kony.print("details==="+JSON.stringify(details));
    var displayNumber  = formatAlphanumericString(details[0].beneficiaryAccountNumber);
    var displayLabel = ""; 
    if(details && details.length) {
      if(details[0].isIban === "true" ){
        displayLabel = kony.i18n.getLocalizedString("kony.ahb.beneficiary.iban");
      }else{
         displayLabel = kony.i18n.getLocalizedString("kony.mb.accounts.account");
      }      
    }
   
    
    if(transferPaymentMode === configManager.constants.AHB_TRANSFER_MODE_CARD){
     	displayNumber = getMaskedString(7, 14, "*", displayNumber);
        displayLabel = kony.i18n.getLocalizedString("kony.mb.cardManage.cardNum");
    }
    
    this.view.segBeneficiaryDetails.widgetDataMap = {
      lblSpending:"key",
      lblAmountSpent: "value"
    };
    var segmentData = [];
    segmentData = [
      {
        key : kony.i18n.getLocalizedString("kony.ahb.beneficiary.Title"),
        value : {text:details[0].beneficiaryName,maxwidth:"60%",maxWidth:"60%",width:"60%" } 
      },
      {
        key :{text : displayLabel, maxWidth : "40%" ,  width : "40%"},
        value : {text : displayNumber  ,maxWidth : "60%", width : "60%"}
      },
      {
        key : kony.i18n.getLocalizedString("kony.ahb.accountDetails.swiftcode"),

        value : details[0].swiftCode 

      }
    ];
    if (!isEmpty(details[0].countrySpecificCode)) {
      var countrySpecificCode = {
        key : kony.i18n.getLocalizedString("kony.ahb.transfers.CountryCode"),

        value : details[0].countrySpecificCode
      };
      segmentData.push(countrySpecificCode);
    }
    var country = {
        key : {text : kony.i18n.getLocalizedString("kony.mb.common.Country"), maxWidth : "40%",  width : "40%"},
        value : {text: details[0].beneficiaryBankCountry, maxWidth : "60%",  width : "60%"}
    };
    segmentData.push(country);

    this.view.segBeneficiaryDetails.setData(segmentData);
  },

  
  /*
  @Purpose to delete the selected Scheduled Transfer
  */
  deleteScheduledTransaction : function(){
    var transfer = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var recordTodelete =transfer.presentationController.getTransfersId();
   // var recordTodelete = transferDetails[0].scheduledTxnId;
    var record = {
      scheduledTxnId: recordTodelete
    };
    transfer.presentationController.callDeleteScheduledTransaction(record);
  },
      
/*
@Purpose to show toast message in error flows of Transfer details screen
*/
  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    this.doNotCancelTransaction();
   
  },
  
onClickEdit:function(){
   var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
   transferMod.presentationController.fetchConfigurationForTransfer();
   //transferMod.presentationController.commonFunctionForNavigation("frmTransferAmount");
} 

});