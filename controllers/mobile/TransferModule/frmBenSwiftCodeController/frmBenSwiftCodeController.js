define({
  timerCounter:0,
  init:function(){
    //this.initActions();
    this.studioActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    this.view.postShow = this.postShow;
  },

  postShow : function(){
    this.view.tbxAccountNumber.setFocus(true);
  },
  preShow: function() {
    //         if (kony.os.deviceInfo().name === "iPhone") {
    //             this.view.flxHeader.isVisible = false;
    //         }
    this.view.flxBenSwiftCode.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.onCancel;
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var beneficiaryData=transferModule.presentationController.getAllBeneficiaryData();
    var accountNumber = beneficiaryData.beneficiaryAccountNumber;
    var swiftCode = beneficiaryData.beneficiarySwiftCode;
    //this.view.txtSwiftCode.setFocus(true);
    if(accountNumber){
      this.view.tbxAccountNumber.text=accountNumber;
    }
    else{
      this.view.tbxAccountNumber.text="";
    }

    if(swiftCode){
      this.view.tbxSwiftCode.text=swiftCode;
    }
    else{
      this.view.tbxSwiftCode.text="";
    }
    this.navigateToAccountNumber();
    this.normalskinAccountNumbertbx();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initActions: function() {
    var scope = this;
    this.view.txtSwiftCode.onTextChange=scope.navigateToAccountNumber;
    this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
    this.view.btnContinue.onClick = function() {
      var swiftCode=scope.view.txtSwiftCode.text;
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var isValidSwiftCode=transferModule.presentationController.isValidSwiftCode(swiftCode,"frmBenSwiftCode");
      if(isValidSwiftCode){
        transferModule.presentationController.navigateToEnterBenificiaryAccountNumberFromSwiftCode(swiftCode);
      }
    };
    this.view.customHeader.btnRight.onClick = scope.onClickCancel;


    //this.view.btnNext.onClick= this.confirmBenificiaryDetails;
    this.view.MainHeaderWithCancel.flxBack.onClick = this.flxBackOnClick;
    this.view.MainHeaderWithCancel.btnBack = this.flxBackOnClick;
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.onCancel;
  },
  /*
  @Purpose To take the user to transfer page if user clicks cancel in Add Beneficiary flow
  */
  onClickCancel: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.view.flxBenSwiftCode.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    var navManager = applicationManager.getNavigationManager();
    var navigateToForm=navManager.getEntryPoint("AddBeneficiary");
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferMod.presentationController.commonFunctionForNavigation(navigateToForm);

  },
   /*
  @Purpose Onclick action of Cancel button on 'Add Beneficiary's Swift Code' page
  */
  onCancel : function(){
    this.view.AlertPopup.lblMessage.text = kony.i18n.getLocalizedString("kony.AHB.beneficiary.ALERT.cancelBeneficiary");
    this.view.flxBenSwiftCode.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.onClickCancel;
  },
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel in Add Beneficiary flow
  */
  doNotCancelTransaction : function(){
    this.view.flxBenSwiftCode.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
  },
  flxBackOnClick: function() {
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack(); 
  },
  navigateToAccountNumber:function(){
    var accountNumber=this.view.tbxAccountNumber.text.trim();
    var swift=this.view.tbxSwiftCode.text.trim();
    if(accountNumber && swift){
      this.enableContinueButton();
    }
    else{
      this.disableContinueButton();
    }
  },
  enableContinueButton:function(){
    this.view.btnNext.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
    this.view.btnNext.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
  },
  disableContinueButton: function() {
    this.view.btnNext.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.btnNext.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
  },


  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },


  /*-----------------------------------------------------------------------------------

  Name: 	confirmBenificiaryDetails
  Purpose:  fetch accounts data to display on confiramtion screen
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 	 

  ------------------------------------------------------------------------------------*/

  confirmBenificiaryDetails : function (){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
	var configManager = applicationManager.getConfigurationManager();
    var swiftCode = this.view.tbxSwiftCode.text.trim();
    var accNumber = this.view.tbxAccountNumber.text.trim();
    if(swiftCode === configManager.constants.AHB_SWIFT_CODE)
    {
      if(!this.isCustomerOwnAccount(accNumber))
      {  
        transferModule.presentationController.setBeneficiaryType("AHBAccounts");
        transferModule.presentationController.setBeneficiaryAccountNumber(accNumber);
        var paramAccountDetails ={
          operativeAccounts  :accNumber
        };
        kony.print("confirmBenificiaryDetails paramAccountDetails "+ JSON.stringify(paramAccountDetails) );
        var navMan = applicationManager.getNavigationManager();
        navMan.setEntryPoint("getAccountDetails","frmBenSwiftCode");
        transferModule.presentationController.getBeneficiaryAccountDetails(paramAccountDetails);
      }
      else
      {
        this.bindGenericError("You can't add your own account as beneficiary. Please add other Account number"); //(kony.ahb.beneficiary.ownAccountError);
      }  
    }  
	else
    {
      transferModule.presentationController.setBeneficiaryType("Others");
      transferModule.presentationController.setBeneficiaryAccountNumber(accNumber);
      transferModule.presentationController.setBeneficiarySwiftCode(swiftCode);
      transferModule.presentationController.setBeneficiaryOthersType("SWIFT");
      var paramOtherAccountDetails ={
        identifier :"S",
        code : swiftCode
      };
      kony.print("confirmBenificiaryDetails paramOtherAccountDetails "+ JSON.stringify(paramOtherAccountDetails) );
      transferModule.presentationController.getAccountDetailsByIBANOrSwift(paramOtherAccountDetails);
    }
  },    
  /*
  @Function: studioActions
  @Purpose : form studio actions
  @Input : none
  @Returns : none
  @Date : 23/10/2018
  */ 
  studioActions : function(){
    this.view.btnNext.onClick = this.formValidations;
    this.view.MainHeaderWithCancel.flxBack.onClick = this.flxBackOnClick;
    this.view.MainHeaderWithCancel.btnBack.onClick = this.flxBackOnClick;
    this.view.tbxAccountNumber.onBeginEditing = this.focusskinAccountNumbertbx;
    this.view.tbxAccountNumber.onEndEditing = this.normalskinAccountNumbertbx;
    this.view.tbxSwiftCode.onBeginEditing = this.focusskinSwifttbx;
    this.view.tbxSwiftCode.onEndEditing = this.normalskinSwifttbx;
    this.view.tbxAccountNumber.onTextChange = this.focusSkinForButton;
    this.view.tbxSwiftCode.onTextChange = this.focusSkinForButton;
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.onCancel;
  },
  /*
  @Function: focusskinAccountNumbertbx, normalskinAccountNumbertbx, focusskinSwifttbx, normalskinSwifttbx, focusSkinForButton
  @Purpose : to set focus and normal skins for text boxes
  @Input : none
  @Returns : none
  @Date : 24/10/2018
  */ 
  focusskinAccountNumbertbx : function(){
    this.view.lblAccountNumberHolder.skin = "sknAHBBff6d00";
  },
  normalskinAccountNumbertbx : function(){
    this.view.lblAccountNumberHolder.skin = "sknAHBLined3d3d3";
  },
  focusskinSwifttbx : function(){
    this.view.lblSwiftCodeHolder.skin = "sknAHBBff6d00";
  },
  normalskinSwifttbx : function(){
    this.view.lblSwiftCodeHolder.skin = "sknAHBLined3d3d3";
  },
  focusSkinForButton : function(){
    var lAccountNumber = this.view.tbxAccountNumber.text.trim();
    var lSwiftCode = this.view.tbxSwiftCode.text.trim();
    if(lAccountNumber.length && lSwiftCode.length){
      this.view.btnNext.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
      this.view.btnNext.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
    }
    else{
      this.view.btnNext.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
      this.view.btnNext.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    }
  },
//   /*
//   @Function: initializationFrmData
//   @Purpose : Initializing Data
//   @Input : none
//   @Returns : none
//   @Date : 23/10/2018
//   */ 
//   initializationFrmData : function(){
//     this.view.tbxAccountNumber.setFocus(true);
//     this.view.tbxAccountNumber.text = "";
//     this.view.tbxSwiftCode.text = "";
//   },
  /*
  @Function: formValidations
  @Purpose : Gives error popup if the fields are empty
  @Input : none
  @Returns : none
  @Date : 23/10/2018
  */
  formValidations:function(){

    var lAccountNumber = this.view.tbxAccountNumber.text.trim();
    var lSwiftCode = this.view.tbxSwiftCode.text.trim();

    if(lAccountNumber && lSwiftCode){
      this.confirmBenificiaryDetails();
    }else {
     //error code should handle here
    }
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	isCustomerOwnAccount
  Purpose:  To validate if Beneficiary added acocunt number is customer own account number
  Author: 	Sumit Bhatia
  Date: 	31/10/2018
  Input:	pAccNumber: {String}- Account number added for Beneficiary
  Return: 	lIsCustomerOwnAccnt :{boolean} - flag to indicate if self-Account
  ------------------------------------------------------------------------------------*/
  isCustomerOwnAccount: function(pAccNumber)
  {
    var navManger = applicationManager.getNavigationManager();
    var infoFrmDashboard = navManger.getCustomInfo("frmDashboard");
    kony.print("isCustomerOwnAccount - infoFrmDashboard "+JSON.stringify(infoFrmDashboard));
    var lMyOperativeAccnts = infoFrmDashboard["accountData"]["operativeAccounts"];
    kony.print("LOG : isCustomerOwnAccount -lMyOperativeAccnts: "+lMyOperativeAccnts); 
    var lIsCustomerOwnAccnt= false;
    if(lMyOperativeAccnts && lMyOperativeAccnts.length)
    {  
      for(var indx= 0; indx <lMyOperativeAccnts.length; indx++)
      {
        if(pAccNumber === lMyOperativeAccnts[indx].hAccountId)
        {
          lIsCustomerOwnAccnt = true;
          break;
        }  
      }  
    }
    return lIsCustomerOwnAccnt;
  }
});