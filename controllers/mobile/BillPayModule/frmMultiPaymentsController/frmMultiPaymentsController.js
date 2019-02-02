define({ 

  //Type your controller code here 
  init : function()
  {
    kony.print("Enter into INIT");
  },

  preShow: function()
  {
    this.populateSegments();
    this.initActions();
    this.setStaticData();
  },

  initActions: function(){
    //this.view.MainHeaderWithCancel.flxBack.setEnabled(false);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"NO",currentForm);
    this.view.btnNext.onClick = this.navigateToBillPay;
    this.view.lblNavigate.onTouchEnd = this.navigateToProducts;
    
  },
  /*-----------------------------------------------------------------------------------

  Name: 	populateSegments
  Purpose: 	to populate the segments(segCompletedPaymts,segFailedPaymts) dynamically
  Author: 	Fariha
  Date: 	24/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/ 
  
  populateSegments:function(){
    var configManager = applicationManager.getConfigurationManager();
    var navManager = applicationManager.getNavigationManager();
    var multiPaymentsInfo = navManager.getCustomInfo("frmMultiPayments");
    var totalPayments = multiPaymentsInfo.totalPayments;
    var totalSuccessPayments = multiPaymentsInfo.totalSuccessPayments;
    var successPaymentSum = multiPaymentsInfo.successPaymentSum;
    var completedPaymentsArr = multiPaymentsInfo.completedPaymentsArr;
   var failedPaymentsArr = multiPaymentsInfo.failedPaymentsArr;
    var successBytotalString = totalSuccessPayments + "/" + totalPayments;
    this.view.lblNoOfPaymentSuccess.text = kony.i18n.getLocalizedString("kony.ahb.payments.successByTotalPayments").replace("###PLACEHOLDER###",successBytotalString );
    this.view.segCompletedPaymts.widgetDataMap={
      lblAccountName : "operatorName",
      lblAmount : "amount",
      lblRefNum : "consumerNumber"
    }
    this.view.segFailedPaymts.widgetDataMap={
      lblAccountName : "operatorName",
      lblAmount : "amount",
      lblRefNum : "consumerNumber"
    }
    kony.print("Enter into Preshow");
    this.view.lblAmtTotal.text = appendCurrency(successPaymentSum, configManager.constants.AHB_UAE_CURRENCY) ; //TODO REMOVE HARDCODED AED
    this.view.segCompletedPaymts.setData(completedPaymentsArr);
    this.view.segFailedPaymts.setData(failedPaymentsArr);
    
  },
  /*-----------------------------------------------------------------------------------

  Name: 	setStaticData
  Purpose: 	to set the staic data on form
  Author: 	Fariha
  Date: 	24/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/ 
  setStaticData : function(){
    this.view.btnNext.text = kony.i18n.getLocalizedString("kony.ahb.payments.makeAnotherPayment");
    this.view.lblNavigate.text = kony.i18n.getLocalizedString("kony.ahb.transfers.goToProdPage");
    this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.payments.payment");
    
  },
  
   navigateToBillPay : function(){
   var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
   billPayModule.presentationController.resetPayeeData();
   billPayModule.presentationController.commonFunctionForNavigation("frmBillPay");
  },
  
   navigateToProducts : function(){
    var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule"); 
    accountModule.presentationController.showAccountDetailView("frmTransferSuccess",null);
  },


});