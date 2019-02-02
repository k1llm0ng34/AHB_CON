define({ 
  initActions:function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"NO",currentForm);
    this.view.preShow = this.preShow;	
  },
  
  preShow: function() {
    var navManager = applicationManager.getNavigationManager();
    var entryPoint =  navManager.getEntryPoint("AHBSuccess");

    this.hideAllLayouts();
    // if from beneficiary
    if(entryPoint === "AddBeneficiary"){
      this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.beneficiary.addBeneficiary");
      this.view.SucessPage.lblMessage.text = kony.i18n.getLocalizedString("kony.ahb.beneficiary.addedSuccessfully");
      this.view.SucessPage.btnConfirm.text = kony.i18n.getLocalizedString("kony.ahb.beneficiary.addAnotherBeneficiary");
      this.view.SucessPage.imgConfirmation.src = "ok.png";   
      this.view.SucessPage.btnConfirm.onClick = this.addAnotherBeneficiary;
      this.view.SucessPage.lblNavigate.text = kony.i18n.getLocalizedString("kony.ahb.transfers.goToProdPage");
      this.view.SucessPage.lblNavigate.onTouchStart = this.navigateToProducts;

    }

    //if we're navigating from Transfer
   else if(entryPoint === "Transfer"){
      
      this.view.SucessPage.flxDetails.setVisibility(true);
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      
      var successData = transMod.presentationController.getTransferSuccessData();
      var paymentMode = transMod.presentationController.getTransferPaymentMode();
     
      var lReferenceNumber = successData && successData.referenceNumber ? successData.referenceNumber:"";
      var lResponseMessage = successData && successData.responseMessage ? successData.responseMessage:"";
      var lTxnAmount =  successData && successData.txnAmount ? successData.txnAmount : "";
      var lTxnDate =  successData && successData.txnDate ? successData.txnDate : "";
      var accountNumber = successData.beneficiaryAccountNumber;
      var benType = transMod.presentationController.getBeneficiaryType()
      kony.print("lTxnAmount"+accountNumber+lTxnAmount+lReferenceNumber);

      this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.mb.transaction.transfer");
      this.view.SucessPage.lblMessage.text = kony.i18n.getLocalizedString("kony.ahb.transfers.submitSuccess");
       this.view.SucessPage.imgConfirmation.src = "ok.png";   
      this.view.SucessPage.flxDetails.flxReferenceNumber.lblNumberHeader.text = kony.i18n.getLocalizedString("kony.ahb.transactionDetails.ReferenceNumber")+": "+lReferenceNumber;
     //this.view.SucessPage.flxDetails.flxReferenceNumber.lblNumberValue.text = lReferenceNumber;
     var formattedValue =  formatAlphanumericString(accountNumber)
     if(paymentMode ==="AC"){
       if(benType === "SLF"){
         accountNumber = getMaskedString(7, 14, "*", formattedValue);
       }       
       else{
         accountNumber = formattedValue;
       }  
       if(successData.operationType === "update" && paymentMode ==="AC"){
         accountNumber = formatAlphanumericString(successData.beneficiaryAccountNumber) ;
         accountNumber = getMaskedString(7,14,"*",accountNumber);
       }
       this.view.SucessPage.flxDetails.flxBeneficiaryAccount.lblAccountHeader.text = kony.i18n.getLocalizedString("kony.ahb.transfer.BenCardNumber")+": "+accountNumber;
      // this.view.SucessPage.flxDetails.flxBeneficiaryAccount.lblAccountValue.text = accountNumber;
     }else{
      this.view.SucessPage.flxDetails.flxBeneficiaryAccount.lblAccountHeader.text = kony.i18n.getLocalizedString("kony.ahb.transfers.beneficiaryAccount")+": "+formattedValue;
       //this.view.SucessPage.flxDetails.flxBeneficiaryAccount.lblAccountValue.text =  formattedValue ;
     }
      var  amountValue = appendCurrency(commaSeparatorUtil(transMod.presentationController.getTransferAmount()), transMod.presentationController.getTransferCurrency());
      kony.print("amountValue-->"+amountValue);
     //amountValue-->100 AED	
      var amountAfterRep = kony.i18n.getLocalizedString("kony.AHB.Transfer.Amount").replace("###PLACEHOLDER###",amountValue);
      this.view.SucessPage.flxDetails.flxAmount.lblAmountHeader.text =amountAfterRep;
      //this.view.SucessPage.flxDetails.flxAmount.lblAmountValue.text = appendCurrency(commaSeparatorUtil(transMod.presentationController.getTransferAmount()), transMod.presentationController.getTransferCurrency());
      this.view.SucessPage.flxDetails.flxDate.lblDateHeader.text = kony.i18n.getLocalizedString("kony.ahb.transfers.confirmationDate")+": "+lTxnDate;
      //this.view.SucessPage.flxDetails.flxDate.lblDateValue.text = lTxnDate;
      
      this.view.SucessPage.btnConfirm.text = kony.i18n.getLocalizedString("kony.ahb.transfers.makeAnotherTransfer");
      this.view.SucessPage.lblNavigate.text = kony.i18n.getLocalizedString("kony.ahb.transfers.goToProdPage");
      this.view.SucessPage.btnConfirm.onClick = this.navigateToTransfer;
      this.view.SucessPage.lblNavigate.onTouchStart = this.navigateToProducts;
     

    }
    else if (entryPoint === "AddPayeeSuccess"){
      this.view.SucessPage.flxDetails.setVisibility(false);
      this.view.SucessPage.lblMessage.text = kony.i18n.getLocalizedString("kony.ahb.payments.PayeeAddedSuccess");
      this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.payments.addPayee");
      this.view.SucessPage.btnConfirm.text = kony.i18n.getLocalizedString("kony.ahb.payments.AddAnotherPayee");
      this.view.SucessPage.lblNavigate.text = kony.i18n.getLocalizedString("kony.ahb.transfers.goToProdPage");
      this.view.SucessPage.imgConfirmation.src = "ok.png";   
      this.view.SucessPage.btnConfirm.onClick = this.navigateToAddPayee;
      this.view.SucessPage.lblNavigate.onTouchStart = this.navigateToProducts;
    }
    else if (entryPoint === "AddPayeeError"){
      this.view.SucessPage.flxDetails.setVisibility(false);
      this.view.SucessPage.lblMessage.text = kony.i18n.getLocalizedString("kony.ahb.payments.addPayeeFailure");
      this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.payments.addPayee");
      this.view.SucessPage.btnConfirm.text = kony.i18n.getLocalizedString("kony.ahb.payments.AddAnotherPayee");
      this.view.SucessPage.lblNavigate.text = kony.i18n.getLocalizedString("kony.ahb.transfers.goToProdPage");
      this.view.SucessPage.imgConfirmation.src = "x.png";                               
      this.view.SucessPage.btnConfirm.onClick = this.navigateToAddPayee;
      this.view.SucessPage.lblNavigate.onTouchStart = this.navigateToProducts;
    }
    else if (entryPoint === "Payment"){
      this.view.SucessPage.flxDetails.setVisibility(false);
      this.view.SucessPage.lblMessage.text = kony.i18n.getLocalizedString("kony.ahb.payments.paymentCompletedSuccessfully");
      this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.payments.payment");
      this.view.SucessPage.btnConfirm.text = kony.i18n.getLocalizedString("kony.ahb.payments.makeAnotherPayment");
      this.view.SucessPage.lblNavigate.text = kony.i18n.getLocalizedString("kony.ahb.transfers.goToProdPage");
       this.view.SucessPage.imgConfirmation.src = "ok.png";   
      this.view.SucessPage.btnConfirm.onClick = this.navigateToBillPay;
      this.view.SucessPage.lblNavigate.onTouchStart = this.navigateToProducts;
    }
    else if (entryPoint === "PaymentError"){
      this.view.SucessPage.flxDetails.setVisibility(false);
      this.view.SucessPage.lblMessage.text = kony.i18n.getLocalizedString("kony.ahb.payments.paymentCannotBeProcessed");
      this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.payments.payment");
      this.view.SucessPage.btnConfirm.text = kony.i18n.getLocalizedString("kony.ahb.payments.makeAnotherPayment");
      this.view.SucessPage.lblNavigate.text = kony.i18n.getLocalizedString("kony.ahb.transfers.goToProdPage");
      this.view.SucessPage.imgConfirmation.src = "x.png";                               
      this.view.SucessPage.btnConfirm.onClick = this.navigateToBillPay;
      this.view.SucessPage.lblNavigate.onTouchStart = this.navigateToProducts;
    }
  },
  
  hideAllLayouts : function(){
    this.view.MainHeader.flxBack.setVisibility(false);  
    this.view.SucessPage.flxDetails.setVisibility(false);
  },
  
  navigateToTransfer : function(){
    var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transMod.presentationController.makeATransfer();
    
  },
  /*
  @Purpose Navigate to Products Screen on click of 'Go To My Products' on Transfer success
  */
  navigateToProducts : function(){
    var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule"); 
    accountModule.presentationController.showAccountDetailView("frmTransferSuccess",null);
  },
  /*
  @Purpose Navigate to Bill Pay Screen on click of 'Go To My Accounts' on AHB success
  */
  navigateToBillPay : function(){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
   billPayModule.presentationController.commonFunctionForNavigation("frmBillPay");
  },
  /*
  @Purpose Navigate to Add Payee Screen on click of 'Go To My Accounts' on AHB success
  */
  navigateToAddPayee: function(){
    var navManager = applicationManager.getNavigationManager();
   var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
   billPayModule.presentationController.resetPayeeData();
   billPayModule.presentationController.commonFunctionForNavigation("frmBillPayEnterAccNo");
  },
  
  /*
  @Purpose Navigate to Add Beneficiary Screen on click of 'Add Another beneficiary' on AHB success
  */
  addAnotherBeneficiary: function(){
    var transferController =  applicationManager.getPresentationUtility().getController('frmTransfers', true);
    transferController.onAddBeneficiary();
}

});