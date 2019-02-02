define({
  UsernamePasswordJSON : {username : "", password : ""},
  biometricOtpCallBack :'',
  biometricConfirmationCallback:'',
  biometricFlowContainer:'',
  biometricFlowScope:'',

  onLogin :function(UsernamePasswordJSON){
    kony.print("##########in the extention");
    applicationManager.getPresentationUtility().showLoadingScreen();

    this.UsernamePasswordJSON = UsernamePasswordJSON;
    var authManger = applicationManager.getAuthManager();
    authManger.login(UsernamePasswordJSON, this.presentationLoginSuccess, this.presentationLoginError);
  },
  presentationLoginSuccess : function(resSuccess) {
    kony.print("LOG: presentationLoginSuccess resSuccess - " + JSON.stringify(resSuccess));
    var konyRef = kony.sdk.getCurrentInstance();
    var lastLoginDateAndTime ="";
    try{
      lastLoginDateAndTime =konyRef.tokens.CustomLogin["provider_token"].params["user_attributes"].lastLoginTime ;
      setLastLoginDateAndTime(lastLoginDateAndTime)
    }catch(e){
		  setLastLoginDateAndTime("")
    }
    var userPreferencesManager = applicationManager.getUserPreferencesManager();
    var configManager = applicationManager.getConfigurationManager();
    var navManager =  applicationManager.getNavigationManager();
    var loggerManager = applicationManager.getLoggerManager();
    var userMan = applicationManager.getUserPreferencesManager();
    var userName = userMan.getUserName();
    loggerManager.setUserID(userName);
    userPreferencesManager.isLoggedIn = true;
    applicationManager.getDataforLogin();
    kony.application.registerForIdleTimeout(this.getTimeForIdleTimeOut(), this.idleIimeOutCallback);
 
    if(this.UsernamePasswordJSON){
      userPreferencesManager.saveUserName(this.UsernamePasswordJSON.username);
      userPreferencesManager.savePassword(this.UsernamePasswordJSON.password);
    }


    this.isLoginSuccess();

  },
  
  /*
  @Function: getTimeForIdleTimeOut
  @Purpose : MB-127 parameterized from config service
  @Input : none
  @Returns : appTimeout
  @author:sindhu
  @Date : 20/12/2018
  */ 
  getTimeForIdleTimeOut :function(){
    var configManager = applicationManager.getConfigurationManager();
    var appTimeout = configManager.constants.IDLE_TIMEOUT;
    if(getAHBConfigurations && getAHBConfigurations.hasOwnProperty("APP_IDLE_TIMEOUT")){
      kony.print("getTimeForIdleTimeOut"+getAHBConfigurations.hasOwnProperty("APP_IDLE_TIMEOUT"));
      kony.print("getTimeForIdleTimeOut_APP_IDLE_TIMEOUT"+getAHBConfigurations.APP_IDLE_TIMEOUT);
       appTimeout = convertToFloat(getAHBConfigurations.APP_IDLE_TIMEOUT);
      kony.print("getTimeForIdleTimeOut_appTimeout"+getAHBConfigurations.APP_IDLE_TIMEOUT);
    if(!appTimeout){
      appTimeout = configManager.constants.IDLE_TIMEOUT;
    }
  }
    return appTimeout;
},
  presentationLoginError : function(resError){
    kony.print("presentationLoginError resError " + JSON.stringify(resError));
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var controller = applicationManager.getPresentationUtility().getController('frmAHBLanding', true);
    var errcode = null;
    var errmsg = null;
    var formattedErrorResponse = resError;
    if(resError && resError.details){ 
      if(resError.details.errcode){
       errcode = JSON.stringify(resError.details.errcode);
       formattedErrorResponse.responseCode = "AHB_"+errcode; 
      }
      if(resError.details.errmsg){
         errmsg = JSON.stringify(resError.details.errmsg);
        formattedErrorResponse.errorMessage = errmsg; 
      }
    }
    
    kony.print("presentationLoginError formattedErrorResponse " + JSON.stringify(formattedErrorResponse));
    
    var formattedServiceResponse = checkServiceResponseForErrorCode(formattedErrorResponse);
    
     kony.print("presentationLoginError formattedServiceResponse " + JSON.stringify(formattedServiceResponse));
    
    if(formattedServiceResponse.responseCode === "AHB_1015" || formattedServiceResponse.responseCode === "AHB_1014" ){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var configManager = applicationManager.getConfigurationManager();
      var currentFlow = configManager.constants.PIN_FLOW_RESET;
      var landingController = applicationManager.getPresentationUtility().getController('frmAHBLanding', true);
      landingController.setCurrentFlow(currentFlow);
      landingController.mPin = "";
      var navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("ForgotPin", false); 
      navManager.navigateTo("frmAHBRegCardNumber");
      var cont = applicationManager.getPresentationUtility().getController('frmAHBRegCardNumber', true);
      var lockMsg = formattedServiceResponse.message;
      cont.bindCardNumberError(lockMsg);  
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }else{
      controller.DefeaultData();
      controller.loginError( formattedServiceResponse.message ? formattedServiceResponse.message : kony.i18n.getLocalizedString("kony.error.StandardErrorMessage"));      
    }
  },

  isLoginSuccess:function(){
    var navManager = applicationManager.getNavigationManager();
    var configManager = applicationManager.getConfigurationManager();
   	var  cifId = navManager.getCustomInfo("frmAHBLanding").cifId;
    var cifObj={"cifId":cifId};
    var storeCifObj = navManager.setCustomInfo("cifObj",cifObj);
	var mPin = navManager.getCustomInfo("loginPin");
    var sm=applicationManager.getStorageManager();
    sm.setStoredEncryptedItem("mPin",mPin);
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    navManager.setEntryPoint("DashboardService", configManager.constants.DASHBOARDFLOW);
    accountMod.presentationController.showDashboard(cifObj); 
  },
  

/***********************************************************************************************
  Name: bioMetricVerification
  Purpose:  This will show biometric verification popup
  Author: Bipin
  Date: 08/11/2018
  Input:{
  		flowScope:flowScope,
        container:container,
        otpCallBack:otpCallBack,
        onConfirmationCallback:onConfirmationCallback,
        promptMessage:promptMessage
  } 	
  Return: NA
*************************************************************************************/ 
  bioMetricVerification : function(biometricPrams){
    var presentationScope = this;
    presentationScope.biometricConfirmationCallback = biometricPrams.onConfirmationCallback;
    presentationScope.biometricOtpCallBack = biometricPrams.otpCallBack;
    presentationScope.biometricFlowContainer = biometricPrams.container;
    presentationScope.biometricFlowScope = biometricPrams.flowScope;
    
    var lCustomInfo = applicationManager.getDataforLogin();
    var devManager = applicationManager.getDeviceUtilManager();
    var isTouchIdSupported = devManager.isTouchIDSupported();
    var isFaceIdSupported = devManager.isFaceIdSupported();
    var defaultAuthMode = lCustomInfo.defaultAuthMode;

    var istouchIdEnabled = lCustomInfo.istouchIdEnabled;
    var isFaceIdEnabled = lCustomInfo.isFacialAuthEnabled;
    
    

    if(defaultAuthMode === "faceid" && isFaceIdEnabled === true && isFaceIdSupported === true){
      if(lCustomInfo.isIphone){
        var config = {"promptMessage" : biometricPrams.promptMessage, // kony.i18n.getLocalizedString("kony.ahb.beneficiary.biometricConfirmation"),
                      "fallbackTitle" : ""};
        kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, presentationScope.statusCB, config);
      }
    }
    else if (defaultAuthMode === "touchid" && istouchIdEnabled === true && isTouchIdSupported === true) {
      var config = {}; 
      if(lCustomInfo.isIphone){
        config = {"promptMessage" : biometricPrams.promptMessage, //kony.i18n.getLocalizedString("kony.ahb.beneficiary.biometricConfirmation"),
                  "fallbackTitle" : ""};
        kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, presentationScope.authCallBack, config);
      } else{
        biometricPrams.flowScope.view.customAlertPopUp.setVisibility(true);
        biometricPrams.flowScope.view[biometricPrams.container].setEnabled(false);
        kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, presentationScope.authCallBack, config);
      }

    }
    else{
      biometricPrams.flowScope.view.customAlertPopUp.setVisibility(false);
      biometricPrams.flowScope.view[biometricPrams.container].setEnabled(true);
      biometricPrams.otpCallBack();
    }   
  },

/***********************************************************************************************
  Name: authCallBack
  Purpose:  This will execute authCallBack
  Author: Bipin
  Date: 08/11/2018
  Input: status,msg
  Return: NA
*************************************************************************************/ 
  authCallBack : function(status,msg)
  {

    kony.print("status Response"+JSON.stringify(status));
    if (status == 5000)
    {
      this.biometricFlowScope.view.customAlertPopUp.setVisibility(false);  
      //this[biometricFlowContainer].setEnabled(true);
      this.biometricFlowScope.view[this.biometricFlowContainer].setEnabled(true);
      //Function to be implemented // to add the benificiary details
      this.biometricConfirmationCallback();
    }
    else if (status == 5002){
      kony.print("authentication cancelled");
      //this.sendOTP();
       this.biometricOtpCallBack();
    }
    else
    {
      applicationManager.getDataProcessorUtility().showToastMessageError(this.biometricFlowScope,"Please Try Again with Valid Fingerprint");
    }
  },

/***********************************************************************************************
  Name: statusCB
  Purpose:  This will execute statusCB
  Author: Bipin
  Date: 08/11/2018
  Input: status,msg
  Return: NA
*************************************************************************************/
  
  statusCB : function(status,msg)
  {
    if(status == 5000)
    {
      //Function to be implemented // to add the benificiary details
      this.biometricConfirmationCallback();
    }
    else if (status == 5002){
      kony.print("authentication cancelled");
       this.biometricOtpCallBack();
    }
    else
    {
      applicationManager.getDataProcessorUtility().showToastMessageError(this.biometricFlowScope,"Please Try Again");
    }
  },
  
  callResetPin: function(request){
    kony.print("callResetPin request "+JSON.stringify(request));
    applicationManager.getPresentationUtility().showLoadingScreen();
    var authManger = applicationManager.getAuthManager();
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("resetPinInfo",request);
   authManger.resetMoblePin(request, this.resetMoblePinSuccess, this.resetMoblePinError);
  },
  
  resetMoblePinSuccess: function(response){
    kony.print("resetMoblePinSuccess=="+JSON.stringify(response));
    var formattedResponse = checkServiceResponseForErrorCode(response);  
    var controller = applicationManager.getPresentationUtility().getController('frmAHBRegCreateAppPin', true);
    var navManager = applicationManager.getNavigationManager();
    var formattedData = checkServiceResponseForErrorCode(response);
    if(formattedData.responseCode === "200"){
      var resetPinInfo = navManager.getCustomInfo("resetPinInfo");
      var mPin = resetPinInfo.newPin;
      var sm=applicationManager.getStorageManager();
      sm.setStoredEncryptedItem("mPin",mPin);
      
    var form = applicationManager.getPresentationUtility().getController('frmSettings', true);
    navManager.navigateTo("frmSettings");
    form.bindGenericError(kony.i18n.getLocalizedString("kony.ahb.settings.loginPinChangeSuccesss"));
    }else if((formattedData.responseCode === "AHB_1027")||(formattedData.responseCode === "AHB_1007")){
      kony.print("formattedData.responseCode=="+formattedData.responseCode);
      var control = applicationManager.getPresentationUtility().getController('frmAHBRegConfirmOTP', true);
      control.bindGenericError(formattedResponse.message);
    }
    else{
    navManager.setEntryPoint("resetPin","frmSettings");
    navManager.navigateTo("frmAHBRegCreateAppPin");
    controller.bindGenericError(formattedResponse.message);
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  resetMoblePinError: function(error){
    kony.print("resetMoblePinError=="+JSON.stringify(error));
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var formattedResponse = checkServiceResponseForErrorCode(error);  
    var controller = applicationManager.getPresentationUtility().getController('frmAHBRegCreateAppPin', true);
    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("resetPin","frmSettings");
    navManager.navigateTo("frmAHBRegCreateAppPin");
    controller.bindGenericError(formattedResponse.message);
  },
  
  /***********************************************************************************************
  Name: biomerticToBeShown
  Purpose:  This will frunction will decide whether to show biometric an dif yes then which one 
  Author: Bipin
  Date: 14/12/2018
  Input: NA
  Return: {
  			biometricToBeShown:true/false,
            biometricOption:faceId/touchId,
            enabled:true/false
  }
*************************************************************************************/
  biometricToBeShown : function(){
    var loginData = applicationManager.getDataforLogin();
    var devManager = applicationManager.getDeviceUtilManager();
    var isTouchIdSupported = devManager.isTouchIDSupported();
    var isFaceIdSupported = devManager.isFaceIdSupported();
    var istouchIdEnabled = loginData.istouchIdEnabled;
    var isFaceIdEnabled = loginData.isFacialAuthEnabled;
    var retObject = {
      biometricToBeShown : false,
      biometricOption : null,
      enabled : false
    };
    kony.print(" biometricToBeShown "+ JSON.stringify(retObject) );
    if(isFaceIdSupported === true){
      retObject.biometricOption ="faceid";
      if(isFaceIdEnabled === true ){
        retObject.enabled = true;
      }
      retObject.biometricToBeShown = true;
    }else if(isTouchIdSupported === true){
      retObject.biometricOption="touchid";
      if(istouchIdEnabled === true ){
        retObject.enabled = true;
      }      
      retObject.biometricToBeShown = true;
    }
  kony.print(" biometricToBeShown "+ JSON.stringify(retObject) );

    return retObject;
  }
  
    
});