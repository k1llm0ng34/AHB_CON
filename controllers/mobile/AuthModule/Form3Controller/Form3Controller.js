define({ 

  init: function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"NO",currentForm);	
  },
  preshow: function(){
    var navMan = applicationManager.getNavigationManager();
    var refKey = navMan.getCustomInfo("Form3");
    kony.print("preshow===="+JSON.stringify(refKey));
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  checkForTouchId: function(){
    //var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
    // authModule.presentationController.checkForTouchIdAndFaceId();
    var devManager = applicationManager.getDeviceUtilManager();
    var checkIfFaceIdIsAvailable = devManager.isFaceIdAvilable();
    var isTouchIDSupported = devManager.isTouchIDSupported();
    if(checkIfFaceIdIsAvailable)
    {
      alert("Face Id is enabled on this device");
    }
    else if(isTouchIDSupported) {
      alert("Touch Id is supported on this device");

    }
}
});