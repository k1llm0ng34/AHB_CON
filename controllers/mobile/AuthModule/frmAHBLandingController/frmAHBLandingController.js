define({ 

  mPin:'',
  isLoginFlow : false,
  currentFlow : "",

  init: function(){
    
     var userManager = applicationManager.getUserPreferencesManager();
     userManager.setDefaultApplicationLanguage(this.dummyCallback);
    var configManager = applicationManager.getConfigurationManager();
    this.currentFlow = configManager.constants.PIN_FLOW_REGISTRATION;
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    var appLaunchError = navManager.getCustomInfo("appLaunchError");
    this.view.postShow = this.landingPostShow;

    if(! kony.sdk.isNullOrUndefined(appLaunchError)) {
      kony.ui.Alert(appLaunchError.basic, appLaunchError.psp);
      navManager.setCustomInfo("appLaunchError", undefined);
      return;
    }
    
    
  },
  
 /*
 @Purpose Dummy callback for setting default language
 */
  dummyCallback : function(){
    kony.print("Do Nothing");
  },
  
  landingPostShow : function (){
    kony.print("landingPostShow : "+ this.isLoginFlow);
    this.view.AlertPopup.setVisibility(false)
    this.view.flxHomeContainer.setEnabled(true);
    if(this.isLoginFlow){
      this.bioMetricLogin();

    }
  },
  /*****************************************************************************************************************************************************
  *  Name 		: PopulatePin
  *  Author		: b.s.k.vantakala
  *  Input 		: none
  *  Returns 	: none
  *  Purpose	: Assigns the skin for current focused label, updates the masked text
  				  and after entry of pin calls the doLogin method for validation
  *  Date		: 
  ***********************************************************************************************************************************************************/

  populatePin : function(){
    this.mPin = this.view.tbxPin.text ? this.view.tbxPin.text.trim() : "";
    var widgetsDots = this.view.flxTbxPin.widgets();
    var widgetsUnderlines = this.view.flxPin.widgets();
    var currLength = this.mPin.length;
    var maxLength = widgetsDots.length;

    for(var i = 0; i < widgetsDots.length; i++){


        if(i < currLength){

            widgetsDots[i].text = " ";
        }
        else{
            widgetsDots[i].text =  "";
        }	
        widgetsUnderlines[i].skin = "sknAHBLined3d3d3";

    }

    var redSkinWidgetColumn = (currLength === maxLength) ? currLength : currLength + 1 ;
    widgetsUnderlines[redSkinWidgetColumn - 1].skin = "sknAHBBff6d00";
    if(this.mPin.length === 4){
      kony.print("populatepin==="+this.mPin);
      
      this.view.tbxPin.setFocus(false);
      this.view.lblLoginPin.setFocus(true);
      this.doLogin();
    }
  },
  
  landingPreshow: function(){

    this.studioActions();
    this.preShowData();

  },
  
  
  studioActions: function(){

    this.view.btnLetsgetStarted.onClick= function (){
      applicationManager.getPresentationUtility().showLoadingScreen();
      kony.print("##  btnLetsgetStarted trigger");
      var navManager = applicationManager.getNavigationManager();
      navManager.navigateTo("frmAHBRegCardNumber");
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
	this.view.AlertPopup.btnOK.onClick = this.btnOKOnClick;
    this.view.AlertPopup.btnDontCancel.onClick = this.alertPopUpFlxCancelOnClick;
    
    this.view.btnForgotPin.onClick= this.onClickOnForgotPin;
    
    this.view.btnEnglishLogin.onClick= this.onClickEnglish;
    this.view.btnEnglish.onClick= this.onClickEnglish;
    
    this.view.btnArabic.onClick= this.onClickArabic;
    this.view.btnArabicLogin.onClick= this.onClickArabic;

    this.view.tbxPin.onTextChange = this.populatePin;
    this.view.flxTbxPin.onClick = this.setTextBoxPinFocus;
    this.view.imgFingerPrint.onTouchEnd=this.bioMetricLogin;
   // this.view.flxATMLocator.onClick = this.onLocateUSClick;
    this.view.flxContactUs.onClick = this.onContactUsClick;
    this.view.flxATMLocator.onClick = this.onLocateUSClick;
    
    this.view.btnRegisterUsingAccountNumber.onClick = function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      //kony.print("##  register using account number");
      var navManager = applicationManager.getNavigationManager();
      navManager.navigateTo("frmAHBRegAccountNumber");
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      
    };
    
    this.view.btnChangeUser.onClick= this.toChangeUser;
    
   
  },
  
  btnOKOnClick : function(){
    this.alertPopUpFlxCancelOnClick();
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    locateUsModule.presentationController.openLocationSettings();
  },
  
  
  onContactUsClick : function(){
    var navManager = applicationManager.getNavigationManager();
      navManager.navigateTo("frmSupport");
  },
  
  preShowData: function(){
    var navManager = applicationManager.getNavigationManager().getCustomInfo("frmAHBLanding");
    var devManager = applicationManager.getDeviceUtilManager();
    var isTouchIdSupported = devManager.isTouchIDSupported();
    var isFaceIdSupported = devManager.isFaceIdSupported();
    var defaultAuthMode = navManager.defaultAuthMode;

    var isDeviceRegistered  = navManager.isDeviceRegistered;
    var istouchIdEnabled = navManager.istouchIdEnabled;
    var isMpinStored = navManager.isMpinStored;
    var isFaceIdEnabled = navManager.isFacialAuthEnabled;
    //this.view.flxErrorScreen.setVisibility(false);
	this.alertPopUpFlxCancelOnClick();
    kony.print("## frmAHBLanding Data == "+JSON.stringify(navManager));
    if(isDeviceRegistered === true){
      var configManager = applicationManager.getConfigurationManager();
      this.currentFlow = configManager.constants.PIN_FLOW_LOGIN;
      this.deviceRegistrationCheck(false,true);
      kony.print("## deviceRegistrationCheck  true ## ");

      if(defaultAuthMode === "touchid" && istouchIdEnabled === true && isTouchIdSupported === true) {
        this.touchIdandMpinCheck(true);
        this.view.imgFingerPrint.setVisibility(true);
        this.view.imgFingerPrint.src = "fingerscanner.png";
        this.view.lblTOuchID.setVisibility(true);
        //#ifdef android
        this.view.lblTOuchID.text = kony.i18n.getLocalizedString("kony.ahb.login.android.fingerprintlogin");//####ifdef to be added
        //#endif
        //#ifdef iphone
        this.view.lblTOuchID.text = kony.i18n.getLocalizedString("kony.AHB.Login.Touchid");
        //#endif
        kony.print("## touchIdandMpinCheck true ## ");
        //       if(navManager.isIphone){
        //         this.touchIdAuthinIphone();
        //       }else{
        //         this.showCustomPopUp();
        //       }
      }else if(defaultAuthMode === "faceid"&& isFaceIdEnabled === true && isFaceIdSupported === true) { //###ifdef for iphone
        //#ifdef iphone
        this.touchIdandMpinCheck(true);
        this.view.imgFingerPrint.setVisibility(true);
        this.view.imgFingerPrint.src = "ahbfaceid.png";
        this.view.lblTOuchID.text = kony.i18n.getLocalizedString("kony.AHB.Login.FaceId");
        this.view.lblTOuchID.setVisibility(true);
        this.view.forceLayout();
        //#endif 

      } 
      else{
        this.touchIdandMpinCheck(false);
        this.view.imgFingerPrint.setVisibility(false);
        this.view.lblTOuchID.setVisibility(false);
        kony.print("## touchIdandMpinCheck false ## ");
      }
      // this.bioMetricLogin(); called in post show
    } else{
      var configManager = applicationManager.getConfigurationManager();
      this.currentFlow = configManager.constants.PIN_FLOW_REGISTRATION;
      this.deviceRegistrationCheck(true,false);
      kony.print("## deviceRegistrationCheck false ## ");
    }


    this.setLocalesOnLandingScreen();
    
  },
  
  touchIdandMpinCheck:function(pinFlag){
    this.view.imgFingerPrint.setVisibility(pinFlag);
    this.view.lblTOuchID.setVisibility(pinFlag);  
  },
  
  deviceRegistrationCheck:function(regFlag,pinFlag){
    this.view.flxLoginContent.setVisibility(pinFlag);
    this.isLoginFlow = pinFlag;
    this.view.flxRegistrationContent.setVisibility(regFlag);
    this.view.lblTermsAndConditions.setVisibility(regFlag);
    this.DefeaultData();
  },
 
  DefeaultData:function(){
    this.view.tbxPin.text = "";
    this.mPin= "";
    this.view.tbxPin1.setEnabled(false);
    this.view.tbxPin2.setEnabled(false);
    this.view.tbxPin3.setEnabled(false);
    this.view.tbxPin4.setEnabled(false);
    this.populatePin();
  },

  setTextBoxPinFocus:function(){    
    this.view.tbxPin.setFocus(true);
    this.populatePin();
  },
  
  bioMetricLogin : function(){
   var navManager = applicationManager.getNavigationManager().getCustomInfo("frmAHBLanding");
    var devManager = applicationManager.getDeviceUtilManager();
   var isTouchIdSupported = devManager.isTouchIDSupported();
    var isFaceIdSupported = devManager.isFaceIdSupported();
    var defaultAuthMode = navManager.defaultAuthMode;

    var isDeviceRegistered  = navManager.isDeviceRegistered;
    var istouchIdEnabled = navManager.istouchIdEnabled;
    var isMpinStored = navManager.isMpinStored;
    var isFaceIdEnabled = navManager.isFacialAuthEnabled;


    if(defaultAuthMode === "faceid" && isFaceIdEnabled === true && isFaceIdSupported === true){
      if(navManager.isIphone){
        var config = {"promptMessage" : kony.i18n.getLocalizedString("kony.ahb.login.authenticate.faceid"),
                      "fallbackTitle" : kony.i18n.getLocalizedString("kony.ahb.login.authenticate.pin")}; //kony.ahb.login.authenticate.faceid
        kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.statusCB, config);
      }
    }
    else if (defaultAuthMode === "touchid" && istouchIdEnabled === true && isTouchIdSupported === true) {
      var config = {}; 
      if(navManager.isIphone){
        config = {"promptMessage" : kony.i18n.getLocalizedString("kony.ahb.login.authenticate.touchid"),
                  "fallbackTitle" : kony.i18n.getLocalizedString("kony.ahb.login.authenticate.pin")};
//               {"promptMessage" : "PLEASE AUTHENTICATE USING YOUR TOUCH ID"      kony.ahb.login.authenticate.touchid
//               "fallbackTitle" :  "PLEASE AUTHENTICATE USING YOUR PIN NUMBER"};  kony.ahb.login.authenticate.pin   
        kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.authCallBack, config);
      } else{
        this.view.customAlertPopUp.setVisibility(true);
        this.view.flxHomeContainer.setEnabled(false);
        kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.authCallBack, config);
      }
      //kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.authCallBack, config);
    }
    else{
      this.view.flxHomeContainer.setEnabled(true);
      this.view.customAlertPopUp.setVisibility(false);
      
      this.view.flxHomeContainer.setEnabled(true);
      this.view.flxFaceIdPopUp.setVisibility(false);
      this.view.tbxPin.setFocus(true);
      // this.view.flxErrorScreen.setVisibility(false);
      // this.doLogin();
    }   
  },
  
  languageSkinToggele: function(){
    var deviceLocale = kony.i18n.getCurrentDeviceLocale();

    var userManager = applicationManager.getUserPreferencesManager();
    var langPrefrence=userManager.getLanguagePrefrence();
    kony.print(" frmAHBLanding langPrefrence == "+langPrefrence);

    if(langPrefrence === "ar_AE"){
      
      this.view.btnArabic.skin="sknAHBGsc0i3e20d51b06e48";
      this.view.btnArabic.focusSkin="sknAHBGsc0i3e20d51b06e48";

      this.view.btnArabicLogin.skin="sknAHBGsc0i3e20d51b06e48";      
      this.view.btnArabicLogin.focusSkin="sknAHBGsc0i3e20d51b06e48";

      this.view.btnEnglish.skin="sknAHBGsc0bff07745b2ea48";
      this.view.btnEnglish.focusSkin="sknAHBGsc0bff07745b2ea48";  

      this.view.btnEnglishLogin.skin="sknAHBGsc0bff07745b2ea48"; 
      this.view.btnEnglishLogin.focusSkin="sknAHBGsc0bff07745b2ea48";
      
      this.themeArabic();
      
    }else{
      
      this.view.btnArabic.skin="sknAHBGsc0bff07745b2ea48";
      this.view.btnArabic.focusSkin="sknAHBGsc0bff07745b2ea48";

      this.view.btnArabicLogin.skin="sknAHBGsc0bff07745b2ea48";
      this.view.btnArabicLogin.focusSkin="sknAHBGsc0bff07745b2ea48";

      this.view.btnEnglish.skin="sknAHBGsc0i3e20d51b06e48";
      this.view.btnEnglish.focusSkin="sknAHBGsc0i3e20d51b06e48";

      this.view.btnEnglishLogin.skin="sknAHBGsc0i3e20d51b06e48";
      this.view.btnEnglishLogin.focusSkin="sknAHBGsc0i3e20d51b06e48";
      
      this.themeEnglish();
    }

    this.view.flxLanguageBtnGroup.forceLayout();
    this.view.flxLanguageBtnGrouplogin.forceLayout();

  },

  setLocalesOnLandingScreen:function(){

    var navManager = applicationManager.getNavigationManager().getCustomInfo("frmAHBLanding");
    var devManager = applicationManager.getDeviceUtilManager();
    var isFaceIdSupported = devManager.isFaceIdSupported();
    var defaultAuthMode = navManager.defaultAuthMode;
    var isFaceIdEnabled = navManager.isFacialAuthEnabled;
    var isTouchIdSupported = devManager.isTouchIDSupported();
    var istouchIdEnabled = navManager.istouchIdEnabled;
    this.languageSkinToggele();
    
    kony.print("inside setLocalesOnLandingScreen" +kony.i18n.getLocalizedString("kony.AHB.Login.Welcome"));

    this.view.lblWelcome.text = kony.i18n.getLocalizedString("kony.AHB.Login.Welcome");

    //kony.print("inside setLocalesOnLandingScreen" +this.view.lblWelcome.text);

    this.view.lblContent.text = kony.i18n.getLocalizedString("kony.AHB.Login.toYourMobileBanking");

    this.view.btnLetsgetStarted.text = kony.i18n.getLocalizedString("kony.AHB.Login.Register.CardNumber");

    this.view.btnRegisterUsingAccountNumber.text = kony.i18n.getLocalizedString("kony.AHB.Login.AccountNumber");

    this.view.lblATMText.text = kony.i18n.getLocalizedString("kony.AHB.Login.footer.ATM");

    this.view.lblContactUs.text = kony.i18n.getLocalizedString("kony.AHB.Login.footer.ContactUs");
    
    this.view.lblLoginPin.text = kony.i18n.getLocalizedString("kony.AHB.Login.LoginPin");
    
    this.view.btnForgotPin.text = kony.i18n.getLocalizedString("kony.AHB.Login.Forget");
    
    this.view.btnChangeUser.text = kony.i18n.getLocalizedString("kony.AHB.Login.ChangeUser");

    //#ifdef android
    this.view.lblTOuchID.text = kony.i18n.getLocalizedString("kony.ahb.login.android.fingerprintlogin");//####ifdef to be added
    this.view.customAlertPopUp.lblAuthenticateMsg.text = kony.i18n.getLocalizedString("kony.mb.login.authenticationMsg");
    this.view.customAlertPopUp.lblTitle.text = kony.i18n.getLocalizedString("kony.mb.login.touchIdTitle");
    this.view.customAlertPopUp.lblCancel.text = kony.i18n.getLocalizedString("kony.mb.common.Cancel");
    //#endif
    //#ifdef iphone
    if(defaultAuthMode === "faceid" && isFaceIdEnabled === true && isFaceIdSupported === true){
		 this.view.lblTOuchID.text = kony.i18n.getLocalizedString("kony.AHB.Login.FaceId");
    } else if (defaultAuthMode === "touchid" && istouchIdEnabled === true && isTouchIdSupported === true) {
   		 this.view.lblTOuchID.text = kony.i18n.getLocalizedString("kony.AHB.Login.Touchid");
    }else{
      this.view.lblTOuchID.setVisibility(false);
      this.view.imgFingerPrint.setVisibility(false);
    }
    //#endif


    //this.view.forceLayout();

  },

  onClickArabic: function(){
    var userManager = applicationManager.getUserPreferencesManager();
    var navMan = applicationManager.getNavigationManager();
    navMan.setEntryPoint("ChangeLanguage","frmAHBLanding");
    userManager.changeApplicationLanguage("ar_AE",this.setLocalesOnLandingScreen, this.onLanguageFailureCallback);   
  },

  onClickEnglish: function(){
    var userManager = applicationManager.getUserPreferencesManager();
    var navMan = applicationManager.getNavigationManager();
    navMan.setEntryPoint("ChangeLanguage","frmAHBLanding");
    userManager.changeApplicationLanguage("en_US",this.setLocalesOnLandingScreen, this.onLanguageFailureCallback);
  },

  onLanguageFailureCallback: function(){
    kony.print(" --- Inside onLanguageFailureCallback ---");
    //alert("Language change failed");
  },
  customAlertPopUpFlxCancelOnClick:function(){
    this.view.customAlertPopUp.setVisibility(false);
    this.view.flxErrorScreen.setVisibility(false);
    this.view.flxHomeContainer.setEnabled(true);
    kony.localAuthentication.cancelAuthentication();
    
  },
 alertPopUpFlxCancelOnClick:function(){
    this.view.AlertPopup.setVisibility(false);
    this.view.flxErrorScreen.setVisibility(false);
    this.view.flxHomeContainer.setEnabled(true);
    
  },
  authCallBack : function(status,msg)
  {

    kony.print("status Response"+JSON.stringify(status));
    if (status == 5000)
    {
      this.view.customAlertPopUp.setVisibility(false);
    //  this.view.flxErrorScreen.setVisibility(false);
      
        this.view.flxHomeContainer.setEnabled(true);
     
      this.doLogin();
    }
    else if (status == 5002){
      kony.print("authentication cancelled");
    }
    else
    {
      
      if (msg === "" ) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this,  kony.i18n.getLocalizedString("kony.ahb.Auth.FingerPrintError"));
     }
    }
    this.view.flxLogo.setEnabled(true);
    this.view.flxLoginContent.setEnabled(true);
    this.view.flxFooter.setEnabled(true);
  },
  doLogin : function ()
  {   
//     var navData = applicationManager.getNavigationManager().getCustomInfo("frmAHBLanding");
//     kony.print("navData "+JSON.stringify(navData));
//     var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
//     kony.print("cif ID "+navData.cifId)
//     var cifId = navData.cifId;
//     var mPin = navData.mPin;
//     var deviceId = kony.sdk.getDeviceId();
//     if(mPin.length === 4){
//     record = {
      
//     "cifId= "+cifId+" "+"mPin "+mPin+" "+"deviceId ="+deviceId
//     }
//     }
//     authMode.presentationController.currentAuthMode = "";
//     authMode.presentationController.onLogin({"cifId":cifId,"mpin":mPin,"deviceId":deviceId});
    
    var navigationManager = applicationManager.getNavigationManager();
    var navManager = applicationManager.getNavigationManager().getCustomInfo("frmAHBLanding");
    kony.print("inside do login"+ JSON.stringify(navManager) );
    var cifId = navManager.cifId;
    var loginPin = (this.mPin && this.mPin.length===4)? this.mPin : navManager.Mpin;
    var deviceId = kony.sdk.getDeviceId();
    kony.print("loginPin = "+loginPin);
    if(loginPin){
      var record = {
        "cifId":cifId,
        "mpin": loginPin,
        "deviceId":deviceId,   
      };
      navigationManager.setCustomInfo("loginPin",loginPin);
      kony.print(" ## Request parameter for frmAHBRegCardNumber == "+JSON.stringify(record));
      var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
      authModule.presentationController.onLogin(record);
    }else{
      ////#### todo
      applicationManager.getDataProcessorUtility().showToastMessageError(this,"Please Try Again with Valid Pin number");
      
//       this.view.lblInfoMsg.text = "Please try again with valid Pin number";
//       this.view.flxErrorScreen.setVisibility(true);
      this.view.flxHomeContainer.forceLayout();
      this.DefeaultData();
    }
  },
//   showFaceIdPopup:function(){
//     this.view.flxHomeContainer.setEnabled(false);
//     this.view.customAlertPopUp.setVisibility(true);
//     var devManager = applicationManager.getDeviceUtilManager();
//     if (devManager.isFaceIdSupported())
//     {
//       this.view.flxFaceIdPopUp.setVisibility(false);
//       var config = {"promptMessage" : "Sign in with face Id"};
//       kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.statusCB, config);     
//     }
//     else{
//       applicationManager.getPresentationUtility().showLoadingScreen();
//       var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
//       authMod.presentationController.FaceAuthInitialize();
//       this.view.flxFaceIdPopUp.setVisibility(true);
//       this.gemaltoTimer();
//     }
//   },
    statusCB : function(status,msg)
    {
      if(status == 5000)
        this.doLogin();
    else if (status == 5002){
      kony.print("authentication cancelled");
    }
      else
        applicationManager.getDataProcessorUtility().showToastMessageError(this,"Please Try Again");
      this.view.flxHomeContainer.setEnabled(true);
      this.view.flxLoginContent.setEnabled(true);
      this.view.flxFooter.setEnabled(true);
    },
	
    loginError: function(err){
    var scope = this;
    kony.print("err==="+err);
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err); 
    this.view.tbxPin.text = "";
  },
  /*
  @Purpose To initiate Change user flow
  */
  onClickOfChangeUser : function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
     var configManager = applicationManager.getConfigurationManager();
    this.currentFlow = configManager.constants.PIN_FLOW_REGISTRATION;
    kony.print("onClickOfChangeUser");
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.setDeviceRegisterflag(false);
    var navManager = applicationManager.getNavigationManager();
    var clearLoginData = {};
    navManager.setCustomInfo("frmAHBLanding", clearLoginData);
    navManager.navigateTo("frmAHBRegCardNumber");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  onClickOnForgotPin : function(){

      var configManager = applicationManager.getConfigurationManager();
      this.currentFlow = configManager.constants.PIN_FLOW_RESET;
      kony.print("current flow "+ this.currentFlow);
      applicationManager.getPresentationUtility().showLoadingScreen();
      kony.print("##  btnForgotPin trigger");
      var navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("ForgotPin", true);
      navManager.navigateTo("frmAHBRegCardNumber");
      applicationManager.getPresentationUtility().dismissLoadingScreen();    
  },
  
  getCurrentFlow : function() {
    return this.currentFlow;
  },
  setCurrentFlow : function(pCurrentFlow){
    this.currentFlow = pCurrentFlow;
  },
   onLocateUSClick: function() {
     var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
     authMode.presentationController.checkAppinit = true;
     var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
     locateUsModule.presentationController.presentLocateUsView(false,this);
     return;
         var scopeObj = this;
         var positionoptions = {
             timeout: 64000,
             fastestInterval: 0,
             minimumTime: 0
         };
         applicationManager.getPresentationUtility().showLoadingScreen();
         kony.location.getCurrentPosition(scopeObj.geoLocationSuccessCallBack.bind(scopeObj), scopeObj.geoLocationErrorCallBack.bind(scopeObj), positionoptions);
     },
  
     geoLocationSuccessCallBack: function(response) {
         try {
             var latitude, longitude;
             var latLongObj = {};
             if (response && response.coords && response.coords.latitude && response.coords.longitude) {
                 latitude = response.coords.latitude;
                 longitude = response.coords.longitude;
                 latLongObj.latitude = latitude;
                 latLongObj.longitude = longitude;
                 var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
                 locateUsModule.presentationController.getNearByLocations(latLongObj);
                 //applicationManager.getPresentationUtility().dismissLoadingScreen();
             }
         } catch (err) {
           applicationManager.getPresentationUtility().dismissLoadingScreen();
         }
     },

 geoLocationErrorCallBack: function(err) {
     var scopeObj = this;
     var deviceUtilManager = applicationManager.getDeviceUtilManager();
     var isIphone = deviceUtilManager.isIPhone();
     applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
     if (err.code == 1) {
         var i18nKey = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationPermissionDenied");
         scopeObj.bindGenericError(i18nKey);
     }
     if (err.code == 3 && !isIphone) {
         var i18n_timeOut = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationTimeOut");
         scopeObj.bindGenericError(i18n_timeOut);
     }
     if (err.code == 2 && !isIphone) {
         var i18n_turnOnLocationAlert = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.turnOnLocationAlert");
         //kony.ui.Alert(i18n_turnOnLocationAlert, scopeObj.onClickSettingsOrCancelHandler.bind(scopeObj), constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
     		this.showLocationAlertPopUp();
     }

     
 },
  
   bindGenericError : function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
  },

 
  
  showLocationAlertPopUp:function(){
    this.view.AlertPopup.setVisibility(true);
    this.view.flxHomeContainer.setEnabled(false);
    this.view.AlertPopup.lblMessage.text = kony.i18n.getLocalizedString("i18n.maps.locationPermissionDenied");
    
  },
 /*
  @Purpose Onclick action of change user button on landing page
  */
  toChangeUser : function(){
    this.view.flxHomeContainer.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.onClickOfChangeUser;
  },
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel
  */
  doNotCancelTransaction : function(){
    this.view.flxHomeContainer.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
  },
  
  themeArabic: function(){
    kony.print("entered themeArabic");
    kony.theme.setCurrentTheme("BlueThemeArabic",this.onThemeChangeSuccess,this.onThemeChangeFailure);
  },
  
  themeEnglish: function(){
    kony.print("entered themeEnglish");
    kony.theme.setCurrentTheme("BlueTheme",this.onThemeChangeSuccess,this.onThemeChangeFailure);
  },
  
  onThemeChangeSuccess: function(){
    kony.print("theme changed successfully!!!");
  },
  
  onThemeChangeFailure: function(){
    kony.print("theme change failed!!!");
  }
  
});