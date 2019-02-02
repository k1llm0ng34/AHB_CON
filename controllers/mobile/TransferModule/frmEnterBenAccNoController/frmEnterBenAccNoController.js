define({

  timerCounter:0,
  // keypadString: '',
  accountNo: '',
  iBan: '',
  isAlhilalBank : true,
  init:function(){
    this.initActions();
    this.studioAction();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  postShow : function(){
    this.view.tbxAccountNumber.setFocus(true);
  },

  /************************************************************************************
  Name: preshow - invoking in the preshow of form, function contains method required on form load
  Author: Sindhu
  Date: 24/10/2018
  Input: None
  Return: None
*************************************************************************************/
  frmPreshow: function() {
    // this.keypadString = '';
    this.view.flxAccountNumber.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var beneficiaryData=transferModule.presentationController.getAllBeneficiaryData();
    var accountNumber=beneficiaryData.beneficiaryAccountNumber;
    var ibanNumber = beneficiaryData.beneficiaryIBAN;
    var beneficiaryType = beneficiaryData.beneficiaryType;



    if(accountNumber){
      this.view.tbxAccountNumber.text=accountNumber;
    }else if(ibanNumber){
      this.view.tbxIban.text=ibanNumber;
    }
    else{
      this.view.tbxIban.text = "";
      this.view.tbxAccountNumber.text = "";
    }

    if(!beneficiaryType){
      beneficiaryType = "AHBAccounts";
    }
    
    if(beneficiaryType === "AHBAccounts"){
      this.onAlhilalBankClick();
      this.onTextChangeOfAccountNumber();
    }else {
      this.onOtherBankClick();
      this.onTextChangeOfIbanNumber();
    }
    // this.updateInputBullets("flxInputAccNo");
    // this.renderTitleBar();

    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);

  },

  /************************************************************************************
  Name: initialSkins - contains default skins, invoking on preshow
  Author: Sindhu
  Date: 24/10/2018
  Input: None
  Return: None
*************************************************************************************/

//   initialSkinsAndFocus: function(){
//     this.view.lblAccountHolder.skin = "sknAHBBff6d00";
//     this.view.tbxAccountNumber.setFocus(true);
//     this.view.tbxIban.setFocus(false);
//     this.view.btnNext.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
//     this.view.btnNext.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
//     // this.view.btnNext.setEnabled(false);
//   },

  onAlhilalBankClick: function(){
    this.isAlhilalBank = true;
    this.iBan ='';
    this.view.tbxIban.text = '';
    this.view.lblAlHilalBank.skin = 'sknAHBGSC16ptS363836';
    this.view.lblOtherBank.skin = 'sknAHBGsc16pt858886';
    this.view.imgAlHilalBank.src = "bnklogoorange.png";
    this.view.imgOtherBank.src = "bank.png";
    this.view.flxAccountNumberContainer.setVisibility(true);
    this.view.flxIbanContainer.setVisibility(false);
    this.view.btnAccountNumberAndSwift.setVisibility(false);
    this.onTextChangeOfAccountNumber();
    this.setUIFocus();
    
  },

  onOtherBankClick: function(){
    this.isAlhilalBank = false;
    this.accountNo = '';
    this.view.tbxAccountNumber.text = '';
    this.view.lblAlHilalBank.skin = 'sknAHBGsc16pt858886';
    this.view.lblOtherBank.skin = 'sknAHBGSC16ptS363836';
    this.view.imgAlHilalBank.src = "bnklogogray.png";
    this.view.imgOtherBank.src = "bankorange.png";
    this.view.flxAccountNumberContainer.setVisibility(false);
    this.view.flxIbanContainer.setVisibility(true);
    this.view.btnAccountNumberAndSwift.setVisibility(true);
     this.onTextChangeOfIbanNumber();

    this.setUIFocus();
         

  },

  studioAction : function() {
    this.view.MainHeaderWithCancel.btnBack.onClick =this.flxBackOnClick ;
    this.view.MainHeaderWithCancel.flxBack.onClick = this.flxBackOnClick;
    this.view.flxAlhilalBank.onClick = this.onAlhilalBankClick;
    this.view.flxBankOptions.onClick = this.onOtherBankClick;
    this.view.btnNext.onClick = this.onNextButtonClick;
    this.view.tbxAccountNumber.onTextChange = this.onTextChangeOfAccountNumber;
    this.view.tbxIban.onTextChange = this.onTextChangeOfIbanNumber;
    this.view.btnAccountNumberAndSwift.onClick = this.onClickOfAccNumberAndSwift;
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.onCancel;
  },
  /************************************************************************************
  Name: onTextChangeOfAccountNumber - invokes on textChange of account no textBox
  Author: Sindhu
  Date: 8/10/2018
  Input: eventObj(textBoxAccountNo id)
  Return: None
*************************************************************************************/

  onTextChangeOfAccountNumber: function(){
    this.iBan = "";
    this.view.tbxIban.text = "";
    //this.view.tbxAccountNumber.setFocus(true);
    this.view.lblAccountHolder.skin = "sknAHBBff6d00";
    this.accountNo=this.view.tbxAccountNumber.text.trim();
    this.accountNo=this.accountNo.replace(/\s/g, "");
    if(this.accountNo.length === 10  ){
      this.view.btnNext.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
      this.view.btnNext.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
    }else {
      this.view.btnNext.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
      this.view.btnNext.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    }
  },

  /************************************************************************************
  Name: onTextChangeOfIbanNumber - invokes on textChange of iban textBox
  Author: Sindhu
  Date: 8/10/2018
  Input: eventObj(textBoxIban id)
  Return: None
*************************************************************************************/
  onTextChangeOfIbanNumber: function(){
    this.iBan = "";
    this.view.tbxAccountNumber.text = "";
    //this.view.tbxIban.setFocus(true);
    this.view.lblIbanHolder.skin = "sknAHBBff6d00";
    this.iBan=this.view.tbxIban.text.trim();
    this.iBan=this.iBan.replace(/\s/g, "");
    if(this.iBan.length ){
      this.view.btnNext.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
      this.view.btnNext.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
    }else {
      this.view.btnNext.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
      this.view.btnNext.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    }
  },

  onNextButtonClick: function(){
    if((this.isAlhilalBank && this.accountNo.length === 10) || (!this.isAlhilalBank && this.iBan.length)){
      this.view.tbxAccountNumber.setFocus(false);
      this.view.tbxIban.setFocus(false);
      this.view.lblAccountHolder.skin = "sknAHBLined3d3d3";
      this.view.lblIbanHolder.skin = "sknAHBLined3d3d3";
      this.view.lblAccountHolder.setFocus(true);
      this.confirmBenificiaryDetails();
    }
  },

  /************************************************************************************
  Name: onBackFrmfrmEnterBenAccNo - invoking on click of back button
  Author: Sindhu
  Date: 24/10/2018
  Input: None
  Return: None
*************************************************************************************/
  onBackFrmfrmEnterBenAccNo: function() {
    this.initialSkins();
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },

  /************************************************************************************
  Name: setUIFocus - setting focus for account number and iban textBoxes
  Author: Sindhu
  Date: 24/10/2018
  Input: None
  Return: None
*************************************************************************************/
  setUIFocus : function(){
    if(this.isAlhilalBank){
      this.view.tbxIban.setFocus(false);
      this.view.tbxAccountNumber.setFocus(true);
      this.view.lblAccountHolder.skin = "sknAHBBff6d00";
      this.view.lblIbanHolder.skin = "sknAHBLined3d3d3";
    }
    else{
      this.view.tbxAccountNumber.setFocus(false);
      this.view.tbxIban.setFocus(true);
      this.view.lblIbanHolder.skin = "sknAHBBff6d00";
      this.view.lblAccountHolder.skin = "sknAHBLined3d3d3";
    }
  },

  /************************************************************************************************
  Name: bindAccountNumberError - error toast message , invoking from presentation error call back
  Author: Sindhu
  Date: 24/10/2018
  Input: None
  Return: error Message
**************************************************************************************************/
  bindAccountNumberError: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
    this.setUIFocus();
  },

  initActions:function(){
    var scope=this;
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    this.view.btnContinue.onClick = scope.btnContinueOnClick;
    this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
    this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    this.view.MainHeaderWithCancel.flxBack.onClick = this.flxBackOnClick;
    this.view.MainHeaderWithCancel.btnBack.onClick = this.flxBackOnClick;
  },
  btnRightOnClick: function() {
  },
  renderTitleBar: function() {
    if (kony.os.deviceInfo().name === 'iPhone') {
      this.view.flxHeader.setVisibility(false);
    }
  },
  btnContinueOnClick: function() {
    var accountNumber=this.keypadString;
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");

    var isValidAccNo=transferModule.presentationController.isValidAccNum(accountNumber,"frmEnterBenAccNo");

    if(isValidAccNo){
      transferModule.presentationController.navigateToReEnterAccountNumber(accountNumber);
    }
  },
  flxBackOnClick: function() {
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  setKeypadChar: function(char) {

    this.keypadString = this.keypadString + char;
    if (this.keypadString.length > 0 && this.keypadString.length < 17) {
      this.enterCodePostAction();
    } else if (this.keypadString.length < 1) {
      this.incompleteCodeView();
    } else if (this.keypadString.length > 16) {
      this.keypadString = this.keypadString.slice(0, 16);
      return;
    }
    this.updateInputBullets("flxInputAccNo");
  },

  clearKeypadChar: function() {
    if (this.keypadString.length === 1) {
      this.keypadString = '';
      this.updateInputBullets("flxInputAccNo");
    }
    if (this.keypadString.length !== 0) {
      this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      if (this.keypadString.length < 1) {
        this.incompleteCodeView();
      }
      this.updateInputBullets("flxInputAccNo");
    }
    if (this.keypadString.length < 1) {
      this.incompleteCodeView();
    }
  },
  updateInputBullets: function(inputFlx) {
    var widgets = this.view[inputFlx].widgets();
    for (var i = 0; i < this.keypadString.length; i++) {
      // widgets[i].skin = "sknLbl484848sspReg50px";
      widgets[i].text = this.keypadString[i];
    }
    for (var i = this.keypadString.length; i < widgets.length; i++) {
      //widgets[i].skin = "sknLble3e3e3SSP60px";
      widgets[i].text = '_';
    }
    this.view.forceLayout();
  },
  enterCodePostAction: function() {
    this.view.btnContinue.setEnabled(true);
    this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
  },
  incompleteCodeView: function() {
    this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    this.view.btnContinue.setEnabled(false);
  },
  /*
  @Purpose To take the user to transfer page if user clicks cancel in Add Beneficiary flow
  */
  onClickCancel: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navManager = applicationManager.getNavigationManager();	
    var navigateToForm=navManager.getEntryPoint("AddBeneficiary");
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferMod.presentationController.commonFunctionForNavigation(navigateToForm);
  },
   /*
  @Purpose Onclick action of Cancel button on 'Add Beneficiary's Account Number' page
  */
  onCancel : function(){
    this.view.AlertPopup.lblMessage.text = kony.i18n.getLocalizedString("kony.AHB.beneficiary.ALERT.cancelBeneficiary");
    this.view.flxAccountNumber.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    this.view.flxAccountNumber.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.onClickCancel;
  },
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel in Add Beneficiary flow
  */
  doNotCancelTransaction : function(){
    this.view.flxAccountNumber.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
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

    if(this.isAlhilalBank){
      var accNumber = this.accountNo;
      this.getAHBBeneficiaryDetails(accNumber);
    }
    else 
    {
      var lAHBAccNo = this.validateIBANforAHB();
      if(lAHBAccNo){
        this.getAHBBeneficiaryDetails(lAHBAccNo);	
      }
      else
      {
        transferModule.presentationController.setBeneficiaryType("Others");
        transferModule.presentationController.setBeneficiaryOthersType("IBAN");
        var iban = this.iBan;
        transferModule.presentationController.setBeneficiaryIBAN(iban);
        var paramOtherAccountDetails ={
          identifier :"I",
          code : iban
        };

        kony.print("confirmBenificiaryDetails paramOtherAccountDetails "+ JSON.stringify(paramOtherAccountDetails) );
        transferModule.presentationController.getAccountDetailsByIBANOrSwift(paramOtherAccountDetails);
      }
      // call method for IBAN other type of Beneficiary

    }

  },

  onClickOfAccNumberAndSwift :function () {
    kony.print("onClickOfAccNumberAndSwift ");
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    var navMan = applicationManager.getNavigationManager();
	navMan.setEntryPoint("getAccountDetails","frmEnterBenAccNo");
    
    transferModule.presentationController.resetBeneficiaryData();
    transferModule.presentationController.setBeneficiaryIBAN(this.iBan);
    transferModule.presentationController.setBeneficiaryType("Others");
    transferModule.presentationController.setBeneficiaryOthersType("IBAN");

    navMan.navigateTo("frmBenSwiftCode");
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	validateIBANforAHB
  Purpose:  validate of the IBAN belongs to AHB bank
  Author: 	Sumit Bhatia
  Date: 	31/10/2018
  Input:	NA
  Return: 	lAHBAccNo: {String} - contains AHB bank specific Account number
  ------------------------------------------------------------------------------------*/
  validateIBANforAHB : function(){
  	kony.print("LOG : validateIBANforAHB - IN");
    var configManager = applicationManager.getConfigurationManager();
    var lIBAN = this.iBan;
    var lIbanNum = '';
    var lAccountNum = '';
    var lAHBAccNo = "";
    if(lIBAN.length && lIBAN.length >10)
    {
      lIbanNum = lIBAN.substring(4,7);
      lAccountNum = lIBAN.substring(lIBAN.length-10, lIBAN.length); 
    } 
    
    if(lIbanNum === configManager.constants.AHB_IBAN_NUMBER)
    {
      lAHBAccNo = lAccountNum;
    }
    return lAHBAccNo;
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	getAHBBeneficiaryDetails
  Purpose:  To get the AHB Beneficiary details
  Author: 	Sumit Bhatia
  Date: 	31/10/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/
  getAHBBeneficiaryDetails : function(pAccNumber){

    if(!this.isCustomerOwnAccount(pAccNumber)){
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.setBeneficiaryType("AHBAccounts");
      transferModule.presentationController.setBeneficiaryAccountNumber(pAccNumber);
      var paramAccountDetails ={
        operativeAccounts  :pAccNumber
      };
      kony.print("confirmBenificiaryDetails paramAccountDetails "+ JSON.stringify(paramAccountDetails) );
      transferModule.presentationController.getBeneficiaryAccountDetails(paramAccountDetails);
    }
    else{
      this.bindAccountNumberError("You can't add your own account as beneficiary. Please add other Account number"); //(kony.ahb.beneficiary.ownAccountError);
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