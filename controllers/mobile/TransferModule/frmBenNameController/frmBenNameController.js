define({
  init:function(){
    //	this.initActions();
    this.studioActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    this.view.postShow = this.postShow;
  },
  frmPreShow: function() {
    // 		this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
    this.view.tbxFullName.setEnabled(true);
    this.doNotCancelTransaction();
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var benificiaryData=transferModule.presentationController.getAllBeneficiaryData();
    var beneficiaryName=benificiaryData.beneficiaryName;
    var beneficiaryNickName=benificiaryData.beneficiaryNickName;
    var beneficiaryType = benificiaryData.beneficiaryType;
	
    if(beneficiaryName){
      //for AHBAccounts making beneficiary fullName as readyonly as per MB-2262
      if(beneficiaryType === "AHBAccounts") {
        this.view.tbxFullName.setEnabled(false);
      } else {
        this.view.tbxFullName.setEnabled(true);
      }
      this.view.tbxFullName.text=beneficiaryName;
    }
    else{
      this.view.tbxFullName.text="";
    }

    if(beneficiaryNickName){
      this.view.tbxNickName.text=beneficiaryNickName;
    }
    else{
      this.view.tbxNickName.text="";
    }

    this.navigateToVerifyDetails();
    this.normalskinNickNametbx();

    //       	this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
    //         this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
    //         this.view.btnContinue.onClick = this.btnContinueOnClick;
    //         this.view.customHeader.btnRight.onClick = this.onClickCancel;

    //         this.renderTitleBar();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);

  },

  postShow : function (){
    this.view.tbxFullName.setFocus(true);
  },

  initActions:function(){
    var scope=this;
    //         var navManager = applicationManager.getNavigationManager();
    //     	var currentForm=navManager.getCurrentForm();
    //     	applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
    this.view.customHeader.btnRight.onClick = scope.flxBackOnClick;
    this.view.btnContinue.onClick = scope.btnContinueOnClick;
    this.view.customHeader.btnRight.onClick = scope.onClickCancel;      

  },
  btnRightOnClick: function() {
  },
  renderTitleBar: function() {
    if (kony.os.deviceInfo().name === 'iPhone') {
      this.view.flxHeader.setVisibility(false);
    }
  },
  navigateToVerifyDetails:function(){
    var fullName=this.view.tbxFullName.text.trim();
    var nickName=this.view.tbxNickName.text.trim();
    if(fullName && nickName){
      this.enableContinueButton();
    }
    else{
      this.disableContinueButton();
    }
  },
  btnContinueHandler: function() {
    if ((this.view.txtFirstName.text !== '') && (this.view.txtFirstName.text !== null) && (this.view.txtLastName.text !== '') && (this.view.txtLastName.text !== null)) {
      this.enableContinueButton();
    } else {
      this.disableContinueButton();
    }
  },
  flxBackOnClick: function() {
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  btnContinueOnClick: function() {
    var recipientName=this.view.txtRecipientName.text;
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferModule.presentationController.navigateToBenificiaryVerifyDetails(recipientName);
  },
  enableContinueButton: function() {
    this.view.btnNext.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
    this.view.btnNext.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
  },
  disableContinueButton: function() {
    this.view.btnNext.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.btnNext.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
  },
  /*
  @Purpose To take the user to transfer page if user clicks cancel in Add Beneficiary flow
  */
  onClickCancel: function() {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.view.flxBenName.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    var navManager = applicationManager.getNavigationManager();	
    var navigateToForm=navManager.getEntryPoint("AddBeneficiary");
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferMod.presentationController.commonFunctionForNavigation(navigateToForm);
  },
  /*
  @Purpose Onclick action of Cancel button on 'Add Beneficiary's Name and NickName' page
  */
  onCancel : function(){
    this.view.AlertPopup.lblMessage.text = kony.i18n.getLocalizedString("kony.AHB.beneficiary.ALERT.cancelBeneficiary");
    this.view.flxBenName.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.onClickCancel;
  },
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel in Add Beneficiary flow
  */
  doNotCancelTransaction : function(){
    this.view.flxBenName.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
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
    this.view.tbxFullName.onBeginEditing = this.focusskinFullNametbx;
    this.view.tbxFullName.onEndEditing = this.normalskinFullNametbx;
    this.view.tbxNickName.onBeginEditing = this.focusskinNickNametbx;
    this.view.tbxNickName.onEndEditing = this.normalskinNickNametbx;
    this.view.tbxFullName.onTextChange = this.navigateToVerifyDetails;
    this.view.tbxNickName.onTextChange = this.navigateToVerifyDetails;
    this.view.MainHeaderWithCancel.flxBack.onClick = this.flxBackOnClick;
    this.view.MainHeaderWithCancel.btnBack.onClick = this.flxBackOnClick;
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.onCancel;
  },
  /*
  @Function: focusskinFullNametbx,normalskinFullNametbx,focusskinNickNametbx,normalskinNickNametbx
  @Purpose : to set focus and normal skins for text boxes
  @Input : none
  @Returns : none
  @Date : 24/10/2018
  */ 
  focusskinFullNametbx : function(){
    this.view.lblFullNameHolder.skin = "sknAHBBff6d00";
  },
  normalskinFullNametbx : function(){
    this.view.lblFullNameHolder.skin = "sknAHBLined3d3d3";
  },
  focusskinNickNametbx : function(){
    this.view.lblNickNameHolder.skin = "sknAHBBff6d00";
  },
  normalskinNickNametbx : function(){
    this.view.lblNickNameHolder.skin = "sknAHBLined3d3d3";
  },
  focusSkinForButton : function(){
    var lFullName = this.view.tbxFullName.text;
    if(lFullName === ""){
      this.view.btnNext.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
      this.view.btnNext.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    }
    else{
      this.view.btnNext.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
      this.view.btnNext.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
    }
  },

  /*
  @Function: formValidations
  @Purpose : Gives error popup if the fields are empty
  @Input : none
  @Returns : none
  @Date : 23/10/2018
  */
  formValidations:function(){
    var lFullName = this.view.tbxFullName.text.trim();
    var lNickName = this.view.tbxNickName.text.trim();

    if(lFullName && lNickName){
      this.setBenNameAndNickName();
    }
    else{
      // handle error case - may be alert?
    }
  },

  /*-----------------------------------------------------------------------------------

  Name: 	setBenNameAndNickName
  Purpose: 	To Set Beneficiary name and NickName
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 

  ------------------------------------------------------------------------------------*/
  setBenNameAndNickName : function(){

    var benName = this.view.tbxFullName.text.trim();
    var benNickName = this.view.tbxNickName.text.trim();

    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");

    transferModule.presentationController.setbeneficiaryNickName(benNickName);
    transferModule.presentationController.setBeneficiaryName(benName);
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmBenVerifyDetails");  

  },




});