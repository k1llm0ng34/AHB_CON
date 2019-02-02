define({ 

  //Type your controller code here 
  preshow: function(){
    var navMan = applicationManager.getNavigationManager();
    var dataFromCardServiceResponse = navMan.getCustomInfo("Form2");
    kony.print("preshow===="+JSON.stringify(dataFromCardServiceResponse));
    this.view.Label0d562e18293b744.text = dataFromCardServiceResponse.phone;
    this.view.Label0fa3f820a898741.text = dataFromCardServiceResponse.name;
    refKey = dataFromCardServiceResponse.refKey;
    cifId = dataFromCardServiceResponse.cifId;
    otp = dataFromCardServiceResponse.otp;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  postshow: function(){
    var userPreferencesManager = applicationManager.getUserPreferencesManager();
    var test =userPreferencesManager.isDeviceRegistered();
    kony.print("test==="+test);
    alert(otp);
  },
  
  onclickAfterOTP: function(){
    kony.print("entered otp=="+this.view.lblOtp.text);
    var validateOTPObj = {
      "referenceKey": refKey,
      "cifId": cifId,
      "otp": this.view.lblOtp.text,
      "flow": "REGISTRATION"
    };
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
    authModule.presentationController.validatecreditCardOTP(validateOTPObj);
  }
});