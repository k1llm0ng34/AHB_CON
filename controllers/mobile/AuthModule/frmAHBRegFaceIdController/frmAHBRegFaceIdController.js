define({ 

  loginMethod:{},
  currentPage : {isFaceID : false, isTouchID : false},
  init: function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"NO",currentForm);	
  },

  changeButtonText: function(loginMethod){
    this.loginMethod = loginMethod;
    kony.print("@@ loginMethod data @@ "+JSON.stringify(loginMethod));
    if(this.loginMethod.isFaceIdSupported ){
      this.view.btnEnable.text = kony.i18n.getLocalizedString("kony.ahb.Registration.EnableFace");
      this.currentPage.isFaceID = true;
      this.view.lblSkip.setVisibility(true);
    }
    else if(this.loginMethod.isTouchIDSupported){
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      if(deviceUtilManager.getDeviceInfo().name==='android'){
        this.view.btnEnable.text = kony.i18n.getLocalizedString("kony.ahb.Registration.EnableFingerPrints");
        this.view.lblSkip.setVisibility(true);
      }else{
        this.view.btnEnable.text = kony.i18n.getLocalizedString("kony.ahb.Registration.EnableTouch");
        this.view.lblSkip.setVisibility(true);
      }
      this.currentPage.isTouchID = true;
    }else if (this.loginMethod.isMPinLogin){
      this.view.btnEnable.text = kony.i18n.getLocalizedString("kony.mb.nuo.Continue");
      this.view.lblSkip.setVisibility(false);
    }
  },

  preShow : function(){
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
    authModule.presentationController.setFaceIdflag(false);
    authModule.presentationController.setTouchIdflag(false);
    this.studioActions();
  },

  studioActions : function (){
    this.view.btnEnable.onClick = this.enableAlternateLoginMethod;
    this.view.lblSkip.onTouchStart = this.skipBiometric;
  },

  skipBiometric:function(){
    this.handleBiometricSettings(false);
  },

  enableAlternateLoginMethod: function () {
    this.handleBiometricSettings(true);

  },

  handleBiometricSettings : function(pStatus){
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
    if(this.loginMethod.isFaceIdSupported && this.currentPage.isFaceID){
      this.currentPage.isFaceID=false; 
      authModule.presentationController.setFaceIdflag(pStatus);
      if(this.loginMethod.isTouchIDSupported ){         
        this.changeButtonText(this.loginMethod);
        this.view.forceLayout(); 
      }else{
        this.navigateToDashboard();
      }
    }
    else if(this.loginMethod.isTouchIDSupported && this.currentPage.isTouchID){
      this.currentPage.isTouchID=false;
      authModule.presentationController.setTouchIdflag(pStatus);
      // Navigate
      this.navigateToDashboard();

    }
    else if(this.loginMethod.isMPinLogin){
      this.loginMethod.isMPinLogin=false;    
      // Navigate
      this.navigateToDashboard();
    }
  
  },

  navigateToDashboard : function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.clearStack();
     var controller = applicationManager.getPresentationUtility().getController('frmAHBLanding', true);
    applicationManager.getDataforLogin();
    controller.doLogin();
   // var navManager = applicationManager.getNavigationManager();
   // navManager.navigateTo("Form3"); 


  },
  onBackFrmAHBRegFaceId: function() { 
    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("resetPin","Registration");
    navManager.navigateTo("frmAHBRegCreateAppPin"); 
  }

 });