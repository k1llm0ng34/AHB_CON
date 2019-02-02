define({
    preshow: function () {
      try {
        if(kony.os.deviceInfo().name==="iPhone"){
          this.view.flxHeader.isVisible = false;
        }else{
          this.view.flxHeader.isVisible = true;
        }
        this.initActions();
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }        
    },
    initActions: function () {
      try {
        var scopeObj=this;
        this.view.segTransactions.onRowClick = this.segTransactionsOnRowClick;
        this.view.customSearchbox.btnCancel.onClick=function(){
          var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountModule.presentationController.commonFunctionForNavigation("frmPFMCategorisedTransactions");
        };
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }        
    },
    segTransactionsOnRowClick:function(){
      try {
          var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountModule.presentationController.commonFunctionForNavigation("frmPFMTransactionDetails");
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    },
});