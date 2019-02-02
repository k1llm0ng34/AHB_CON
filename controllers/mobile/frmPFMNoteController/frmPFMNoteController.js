define({
    preshow: function () {
      try {
        if (kony.os.deviceInfo().name === "iPhone") {
          this.view.flxHeader.isVisible = false;
        } else {
          this.view.flxHeader.isVisible = true;
        }
        this.setFlowActions();
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }        
    },
    setFlowActions: function () {
      try {
        this.view.btnSave.onClick = function () {
          var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountModule.presentationController.commonFunctionForNavigation("frmPFMTransactionDetails");
        };
        this.view.customHeader.flxBack.onClick = function () {
          var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountModule.presentationController.commonFunctionForNavigation("frmPFMTransactionDetails");
        };
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }        
    }
});