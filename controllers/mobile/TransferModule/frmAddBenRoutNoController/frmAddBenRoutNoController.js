define({
  // keypadString: '',
  init:function(){
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },

  frmPreshow: function() {
    //         this.keypadString = '';
    this.doNotCancelTransaction();
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var benificiaryData=transferModule.presentationController.getAllBeneficiaryData();
    var abcdLabel = benificiaryData.beneficiaryCountrySpecificCode;
    this.view.lblABCDCodeHeading.text = benificiaryData.beneficiaryCountryName ? kony.i18n.getLocalizedString("kony.ahb.beneficiary.forCountryName") + " "  + benificiaryData.beneficiaryCountryName.toUpperCase() : "";
    this.view.lblABCDCode.text = abcdLabel;
    var abcdCode = benificiaryData.beneficiaryCountrySpecificCodeValue;
    if(abcdCode){
      this.view.tbxABCDCode.text=abcdCode;
    }
    else{
      this.view.tbxABCDCode.text="";
    }
    this.abcdOnTextChange();
    //         this.renderTitleBar();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    // this.view.customHeader.btnRight.onClick=this.flxBackOnClick;

    //this.initializationFrmData();
   // this.initActions();



  },
  initActions:function(){

    this.view.btnNext.onClick = this.btnContinueOnClick;
    this.view.MainHeaderWithCancel.flxBack.onClick=this.flxBackOnClick;
    this.view.MainHeaderWithCancel.btnBack.onClick=this.flxBackOnClick;
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.onCancel;
    this.view.tbxABCDCode.onTextChange = this.abcdOnTextChange;
    this.view.tbxABCDCode.onBeginEditing = this.focusskinABCDtbx;
    this.view.tbxABCDCode.onDone = this.normalskinABCDtbx;
  },
  abcdOnTextChange : function(){
    if(this.view.tbxABCDCode.text.trim() === ""){
      this.view.btnNext.text = kony.i18n.getLocalizedString("kony.ahb.common.skip");
    }else{
      this.view.btnNext.text = kony.i18n.getLocalizedString("kony.ahb.Registration.Next");
    }
  },
  btnRightOnClick: function() {
  },
  renderTitleBar: function() {
    if (kony.os.deviceInfo().name === 'iPhone') {
      this.view.flxHeader.setVisibility(false);
    }
  },
  btnContinueOnClick: function() {
    //       	var routingNumber=this.keypadString;
    //       	var navManager = applicationManager.getNavigationManager();
    //     	var accDetails=navManager.getCustomInfo("frmAddBenRoutNo");
    //       	var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    // 		transferModule.presentationController.navigateToEnterBenificiaryAccountNumber(routingNumber);
    var navManager = applicationManager.getNavigationManager();
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var abcdCode = this.view.tbxABCDCode.text.trim();
    transferMod.presentationController.setBeneficiaryCountrySpecificCodeValuee(abcdCode);
     transferMod.presentationController.setbeneficiaryNickName("");
     transferMod.presentationController.setBeneficiaryName("");
    navManager.navigateTo("frmBenName");
  },
  flxBackOnClick: function() {
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack(); 
  },
  setKeypadChar: function(char) {

    this.keypadString = this.keypadString + char;
    if (this.keypadString.length > 0 && this.keypadString.length < 10) {
      this.enterCodePostAction();
    } else if (this.keypadString.length < 1) {
      this.incompleteCodeView();
    } else if (this.keypadString.length > 9) {
      this.keypadString = this.keypadString.slice(0, 9);
      return;
    }
    this.updateInputBullets("flxInputRoutingNo");
  },

  clearKeypadChar: function() {
    if (this.keypadString.length === 1) {
      this.keypadString = '';
      this.updateInputBullets("flxInputRoutingNo");
    }
    if (this.keypadString.length !== 0) {
      this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      if (this.keypadString.length < 1) {
        this.incompleteCodeView();
      }
      this.updateInputBullets("flxInputRoutingNo");
    }
    if (this.keypadString.length < 1) {
      this.incompleteCodeView();
    }
  },
  updateInputBullets: function(inputFlx) {
    var widgets = this.view[inputFlx].widgets();
    for (var i = 0; i < this.keypadString.length; i++) {
      // widgets[i].skin = "sknLbl979797SSP60px";
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
    this.view.lblBankName.setVisibility(false);
    this.view.lblAddLine1.setVisibility(false);
    this.view.lblAddLine2.setVisibility(false);
    this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    this.view.btnContinue.setEnabled(false);
  },
  preshowHideBankDetails:function(){
    this.view.lblBankName.setVisibility(false);
    this.view.lblAddLine1.setVisibility(false);
    this.view.lblAddLine2.setVisibility(false);
  },
  /*
  @Purpose To take the user to transfer page if user clicks cancel in Add Beneficiary flow
  */
  onClickCancel: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.view.flxABCDCode.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    var navManager = applicationManager.getNavigationManager();
    var navigateToForm=navManager.getEntryPoint("AddBeneficiary");
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferMod.presentationController.commonFunctionForNavigation(navigateToForm);

  },
   /*
  @Purpose Onclick action of Cancel button on 'Add Beneficiary's IFSC Code' page
  */
  onCancel : function(){
    this.view.AlertPopup.lblMessage.text = kony.i18n.getLocalizedString("kony.AHB.beneficiary.ALERT.cancelBeneficiary");
    this.view.flxABCDCode.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.onClickCancel;
  },
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel in Add Beneficiary flow
  */
  doNotCancelTransaction : function(){
    this.view.flxABCDCode.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
  },
//   /*
//   @Function: initializationFrmData
//   @Purpose : Initializing Data
//   @Input : none
//   @Returns : none
//   @Date : 24/10/2018
//   */ 
//   initializationFrmData : function(){
//     this.view.tbxABCDCode.text = "";
//   },
  /*
  @Function: focusskinABCDtbx, normalskinABCDtbx
  @Purpose : to set focus and normal skins for text boxes
  @Input : none
  @Returns : none
  @Date : 24/10/2018
  */ 
  focusskinABCDtbx : function(){
    this.view.lblABCDHolder.skin = "sknAHBBff6d00";
  },
  normalskinABCDtbx : function(){
    this.view.lblABCDHolder.skin = "sknAHBLined3d3d3";
  }


});