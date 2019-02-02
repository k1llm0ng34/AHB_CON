define({

  fetchDeposits : function(checkViewRequest) {
    var transactionManager = applicationManager.getTransactionManager();
    transactionManager.getPostedDeposits(checkViewRequest,this.fetchChequeListPresentationSuccessCallback,this.fetchChequeListPresentationErrorCallback);
  },

  fetchChequeListPresentationSuccessCallback : function(successResponse) {
    kony.print(" ## fetchChequeListPresentationSuccessCallback ##" + JSON.stringify(successResponse));
    var navManager = applicationManager.getNavigationManager();
    var serviceReposne =checkServiceResponseForErrorCode(successResponse);   
    if(serviceReposne.responseCode === "200" || serviceReposne.responseCode === "MQ_0023"){
      var depositsData = [];
      var customInfo = navManager.getCustomInfo("frmCheckDeposit");
      if(successResponse && successResponse.ChequesList){
       	depositsData = successResponse.ChequesList;
      }
      customInfo["depositsData"] = depositsData;
      navManager.setCustomInfo("frmCheckDeposit",customInfo);
      this.commonFunctionForNavigation("frmCheckDeposit");
    }else{
      var formName = kony.application.getCurrentForm().id;
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      if(formName=="frmAccountDetails"){
        var accountDetailsController = applicationManager.getPresentationUtility().getController('frmAccountDetails', true);
        accountDetailsController.bindChequeListError(serviceReposne.message);
      }
      else if(formName=="frmAdvanceSearch"){
        kony.print("## AdvanceSearch ## "+formName);
        var advanceSearchController = applicationManager.getPresentationUtility().getController('frmAdvanceSearch', true);
        advanceSearchController.bindChequeListError(serviceReposne.message);
      }
    }
  },
  fetchChequeListPresentationErrorCallback: function(errorResponse) {
    kony.print(" ## fetchChequeListPresentationErrorCallback ## ");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var serviceReposne =checkServiceResponseForErrorCode(errorResponse); 
    var formName = kony.application.getCurrentForm().id;
    if(formName=="frmAccountDetails"){
      kony.print("## frmAccountDetails ## "+formName);
      var accountDetailsController = applicationManager.getPresentationUtility().getController('frmAccountDetails', true);
      accountDetailsController.bindChequeListError(serviceReposne.message);
    }else if(formName=="frmAdvanceSearch"){
      kony.print("## AdvanceSearch ## "+formName);
      var advanceSearchController = applicationManager.getPresentationUtility().getController('frmAdvanceSearch', true);
      advanceSearchController.bindChequeListError(serviceReposne.message);
    }
  },

  goToDepositDetails : function(transactionData) {
    var transactionManager = applicationManager.getTransactionManager();
    var navManager = applicationManager.getNavigationManager();
    var sm=applicationManager.getStorageManager();
    var  cifId = sm.getStoredEncryptedItem("cifId");
    navManager.setCustomInfo("frmUploadCheckImages",transactionData);
    var selectedRecordData=navManager.getCustomInfo("frmUploadCheckImages");
    var selectedRecordDetails={
      "cifId":cifId,
      "accountNumber":selectedRecordData.accountNumber,
      "chequeNumber":selectedRecordData.chequeNumber,
      "chequeAmount":selectedRecordData.chequeAmount,
      "chequeDate":selectedRecordData.chequeDate,
      "chequeBankId":selectedRecordData.chequeBankId
    };
    kony.print("## Request input Parameters for getting Cheque Image  "+JSON.stringify(selectedRecordDetails));

    transactionManager.getChequeImage(selectedRecordDetails,this.fetchChequeListDetailsPresentationSuccessCallback,this.fetchChequeListDetailsPresentationErrorCallback);
  },

  fetchChequeListDetailsPresentationSuccessCallback : function(successResponse) {
    kony.print(" ## fetchChequeListDetailsPresentationSuccessCallback ##");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var serviceReposne =checkServiceResponseForErrorCode(successResponse);   
    if(serviceReposne.responseCode === "200")
    {
      var depositsDetailsData = successResponse.chequeImage;
      navManager.setCustomInfo("chequeImage",depositsDetailsData);
      this.commonFunctionForNavigation("frmUploadCheckImages");
    } else{
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var ChequeListController = applicationManager.getPresentationUtility().getController('frmCheckDeposit', true);
      ChequeListController.bindChequeDetailsError(serviceReposne.message);
    }
  },
  fetchChequeListDetailsPresentationErrorCallback: function(errorResponse) {
    kony.print(" ## fetchChequeListDetailsPresentationErrorCallback ## ");
    var serviceReposne =checkServiceResponseForErrorCode(errorResponse); 
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var ChequeListController = applicationManager.getPresentationUtility().getController('frmCheckDeposit', true);
    ChequeListController.bindChequeDetailsError(serviceReposne.message);  
  },

});