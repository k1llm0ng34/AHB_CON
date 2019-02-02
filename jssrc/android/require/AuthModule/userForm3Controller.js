define({
    preshow: function() {
        var navMan = applicationManager.getNavigationManager();
        var refKey = navMan.getCustomInfo("Form3");
        kony.print("preshow====" + JSON.stringify(refKey));
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
});