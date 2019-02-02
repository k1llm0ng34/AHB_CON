define({
    //Type your controller code here 
    preshow: function() {
        var navMan = applicationManager.getNavigationManager();
        var dataFromCardServiceResponse = navMan.getCustomInfo("Form2");
        kony.print("preshow====" + JSON.stringify(dataFromCardServiceResponse));
        this.view.Label0d562e18293b744.text = dataFromCardServiceResponse.phone;
        this.view.Label0fa3f820a898741.text = dataFromCardServiceResponse.name;
        refKey = dataFromCardServiceResponse.refKey;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onclickAfterOTP: function() {
        // validate OTP service call
        kony.print("refKey==" + refKey);
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.validatecreditCardOTP(refKey);
    }
});