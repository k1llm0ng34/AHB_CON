define({
    /*timerCounter : 0,
	acctPreviewStatus : "",
    devRegStatus : "",
    defLoginStatus : "",
    pinStatus : "",
    faceIdStatus : "",
    touchIdStatus : "",
    isTouchIdAva : "",
    isFaceIdAva : "",
    selectedAcntRow: "",*/
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
    
  frmSettingsPreShow: function() {
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
  	var biometricToBeShown = authModule.presentationController.biometricToBeShown();
    kony.print("frmSettingsPreShow biometricToBeShown "+ JSON.stringify(biometricToBeShown) );
    var lCustomInfo = applicationManager.getDataforLogin();
    var configManager = applicationManager.getConfigurationManager();
    this.view.flxMain.setEnabled(true);
    if(biometricToBeShown.biometricToBeShown){
      this.view.flxSeparator1.setVisibility(true);
      this.view.flxEnableBioMetrics.setVisibility(true);
    }else{
      this.view.flxSeparator1.setVisibility(false);
      this.view.flxEnableBioMetrics.setVisibility(false);
    } 
    if(biometricToBeShown.biometricOption ===  configManager.constants.AHB_BIOMETRIC_FACEID ){
      this.view.lblEnableBioMetricks.text = kony.i18n.getLocalizedString("kony.ahb.settings.faceid"); 
      this.view.imgEnableBioMetrics.src ="enablefaceidicon.png";
    }else if(biometricToBeShown.biometricOption ===  configManager.constants.AHB_BIOMETRIC_TOUCHID){
      if(lCustomInfo.isIphone){
        this.view.lblEnableBioMetricks.text = kony.i18n.getLocalizedString("kony.ahb.settings.touchid"); 
        this.view.imgEnableBioMetrics.src ="smallfingerprint.png";
      }else{
        this.view.lblEnableBioMetricks.text = kony.i18n.getLocalizedString("kony.ahb.settings.fingerprintid");
        this.view.imgEnableBioMetrics.src ="smallfingerprint.png";
      }
    }
    if(biometricToBeShown.enabled){
      this.view.imgSwitch.src = "switcheron.png";
    }else{
      this.view.imgSwitch.src = "switcheroff.png";
    }
    
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions : function()
  {
    var scope = this;
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUSETTINGS); 
    this.view.MainHeaderWithCancel.flxBack.onClick = this.onBackClick;
    this.view.MainHeaderWithCancel.btnBack.onClick = this.onBackClick;
    this.view.flxMobilePin.onClick = this.resetPin;
    this.view.flxAciveDevices.onClick = this.onClickActiveDevices;
    this.view.imgSwitch.onTouchEnd = this.biometricAuthenticate;
    this.view.customAlertPopUp.flxCancel.onClick = this.cancelCallback;
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.logout;
    this.view.onDeviceBack = this.onBackClick;
    
  },
  
  /*
  @Purpose To show the pop up to logout
  */
  logout: function(){
    kony.print("logout");
    this.view.flxMain.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.onDeviceBack = this.onDeviceBack;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.userLogout;
  },
  /*
  @Purpose To logout the user out of the app
  */
  userLogout:function(){
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
	authMod.presentationController.onLogout();
  },
  
   /*
  @Purpose To dismiss the pop up 
  */
  doNotCancelTransaction : function(){
    this.view.flxMain.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    this.view.onDeviceBack = this.onBackClick;
  },
  onBackClick: function() {
    kony.print("Enter into onBackClick frmSettings");
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  
  onDeviceBack: function(){
   kony.print("Do nothing");
  },
  
  onClickActiveDevices: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.navigateTo("frmActiveDevicesList");
  },
/*
@Purpose To go to reset Pin page
*/
  resetPin: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.setEntryPoint("resetPin","frmSettings");
    navMan.navigateTo("frmAHBRegCreateAppPin");
  },
  /*
  @Purpose To show toast messages
  */
  bindGenericError:function(errorMsg){
    kony.print("errorMsg=="+errorMsg);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },
  
  biometricAuthenticate : function(){

    var lCustomInfo = applicationManager.getDataforLogin();
    var devManager = applicationManager.getDeviceUtilManager();
    var isTouchIdSupported = devManager.isTouchIDSupported();
    var isFaceIdSupported = devManager.isFaceIdSupported();
    var defaultAuthMode = lCustomInfo.defaultAuthMode;

    var istouchIdEnabled = lCustomInfo.istouchIdEnabled;
    var isFaceIdEnabled = lCustomInfo.isFacialAuthEnabled;
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var promptMessage;
    
    var image = this.view.imgSwitch.src ;
    
    if(isFaceIdSupported && lCustomInfo.isIphone){
      authModule.presentationController.setFaceIdflag(true);
      if(image === "switcheroff.png"){
        promptMessage = kony.i18n.getLocalizedString("kony.ahb.settings.enableFaceid");
      }else{
        promptMessage = kony.i18n.getLocalizedString("kony.ahb.settings.disableFaceid");
      }
    }else if(isTouchIdSupported){
      authModule.presentationController.setTouchIdflag(true);
      if(lCustomInfo.isIphone){
        if(image === "switcheroff.png"){
          promptMessage = kony.i18n.getLocalizedString("kony.ahb.settings.enableTouchid");
        }else{
          promptMessage = kony.i18n.getLocalizedString("kony.ahb.settings.disableTouchid");
        }
      }else{
        if(image === "switcheroff.png"){
          this.view.customAlertPopUp.lblAuthenticateMsg.text = kony.i18n.getLocalizedString("kony.ahb.settings.enableFingerprints");
        }else{
          this.view.customAlertPopUp.lblAuthenticateMsg.text = kony.i18n.getLocalizedString("kony.ahb.settings.disableFingerprints");
        }
        this.view.forceLayout();
      }
    }

    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var bioMetricParam = {
      "flowScope":this,
      "container":"flxMainContainer",
      "otpCallBack":this.onBiometricCancelCallback,
      "onConfirmationCallback":this.onConfirmationBiometric,
      "promptMessage":promptMessage
    } ;	
    authMode.presentationController.bioMetricVerification(bioMetricParam);
  },
  
  onConfirmationBiometric : function(){
    var lCustomInfo = applicationManager.getDataforLogin();
    var devManager = applicationManager.getDeviceUtilManager();
    var isTouchIdSupported = devManager.isTouchIDSupported();
    var isFaceIdSupported = devManager.isFaceIdSupported();
    var defaultAuthMode = lCustomInfo.defaultAuthMode;

    var istouchIdEnabled = lCustomInfo.istouchIdEnabled;
    var isFaceIdEnabled = lCustomInfo.isFacialAuthEnabled;
    var bioMetricMsg = "";
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
    if( this.view.imgSwitch.src === "switcheron.png"){
      this.view.imgSwitch.src = "switcheroff.png";
      this.view.forceLayout();
      if(isFaceIdSupported && lCustomInfo.isIphone){
        authModule.presentationController.setFaceIdflag(false);
        bioMetricMsg = kony.i18n.getLocalizedString("kony.ahb.settings.faceidDisableSuccess");
      }else if(isTouchIdSupported){
        authModule.presentationController.setTouchIdflag(false);
        if(lCustomInfo.isIphone){
          bioMetricMsg = kony.i18n.getLocalizedString("kony.ahb.settings.touchidDisableSuccess");
        }else{
          bioMetricMsg = kony.i18n.getLocalizedString("kony.ahb.settings.fingerprintDisableSuccess");
        }
      }
    }else{
      this.view.imgSwitch.src = "switcheron.png";
      this.view.forceLayout();
      if(isFaceIdSupported && lCustomInfo.isIphone){
        authModule.presentationController.setFaceIdflag(true);
        bioMetricMsg = kony.i18n.getLocalizedString("kony.ahb.settings.faceidSuccess");
      }else if(isTouchIdSupported){
        authModule.presentationController.setTouchIdflag(true);
        if(lCustomInfo.isIphone){
          bioMetricMsg = kony.i18n.getLocalizedString("kony.ahb.settings.touchidSuccess");
        }else{
          bioMetricMsg = kony.i18n.getLocalizedString("kony.ahb.settings.fingerprintSuccess");
        }
      }
    }

    this.bindGenericError(bioMetricMsg);
  },
/***********************************************************************************************
  Name: cancelCallback
  Purpose:  This will hide biometric verification popup
  Author: B S Krishna
  Date: 13/12/2018
  Input:NA
  Return: NA
*************************************************************************************/ 
  cancelCallback : function (){
    kony.print("frmSettings customAlertPopUpFlxCancelOnClick ");
    this.view.customAlertPopUp.setVisibility(false);
    this.view.flxMainContainer.setEnabled(true);   
    kony.localAuthentication.cancelAuthentication();
    this.onBiometricCancelCallback();
  },
  
  /**
   * @function
   *
   */
  onBiometricCancelCallback: function(){
   kony.print("frmSettings iOS cancle")
  }
   
});