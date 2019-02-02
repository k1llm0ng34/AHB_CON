define({ 
 

 //Type your controller code here 
CaptureDetails: function(){
  var deviceUtilManager = applicationManager.getDeviceUtilManager();
       
  var card = this.view.TextField0fee1b7dbfa5b4f.text;
  kony.print("card=="+card);
  var pin = this.view.TextField0fa7dfe3b57fb45.text;
  kony.print("pin=="+pin);
 var record = {
      "card": card,
      "cpin": pin,
      "deviceId": deviceUtilManager.getDeviceInfo().deviceID,
      "type": "CARD",
       "osType": "Android"
 };
   var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
 // kony.print("authModule=="+JSON.stringify(authModule));
  authModule.presentationController.validateCardDetails(record);
    },
  
  init : function(){
		var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
		 //var navManager = applicationManager.getNavigationManager();
    var appLaunchError = navManager.getCustomInfo("appLaunchError");
    if(! kony.sdk.isNullOrUndefined(appLaunchError)) {
      kony.ui.Alert(appLaunchError.basic, appLaunchError.psp);
      navManager.setCustomInfo("appLaunchError", undefined);
      return;
    }
}
  
 

 });