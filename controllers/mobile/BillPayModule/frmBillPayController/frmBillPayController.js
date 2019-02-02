define({
    scheduledbills:null,
    postedbills:null,
    pendingbills:null,
    segmentdata:null,
    popupMsg: '',
    timerCounter: 0,
  	
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },


  preShow: function() {
    var configManager = applicationManager.getConfigurationManager();
    var navManager = applicationManager.getNavigationManager();
    var entryPoint =  navManager.getEntryPoint("frmAccountDetails");
    if(entryPoint === configManager.constants.ENTRY_POINT.quickPayment || entryPoint === configManager.constants.ENTRY_POINT.billPayment){
      this.view.MainHeader.flxBack.setVisibility(true);
    }
    else{
      this.view.MainHeader.flxBack.setVisibility(false); 
    }
    
    ///TODO temp solution
    var userManager = applicationManager.getUserPreferencesManager();
    var langPrefrence = userManager.getLanguagePrefrence();
    kony.print("langPrefrence" +langPrefrence);
    if(langPrefrence ==="en_US"){
      this.view.lblAddPayee.right= "27dp";
      this.view.lblAddPayee.left = "default";
    }else{
       this.view.lblAddPayee.left = "10dp";
       this.view.lblAddPayee.right = "default";
    }
    
	

    applicationManager.getPresentationUtility().dismissLoadingScreen();

    this.view.segTransactions.setVisibility(false);
    this.view.segTransactions.removeAll();
    this.view.segMakePayment.setVisibility(false);
    this.view.segMakePayment.removeAll();
    this.view.segViewPastPayment.setVisibility(false);
    this.view.segViewPastPayment.removeAll();

    this.initActions();
    this.paymentList = [];
    this.enabledisablePayBtn();
    this.view.btnPayAllSeleted.setVisibility(false);

    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");


      var billPayType = billPayMod.presentationController.getBillPayType();
      if(billPayType === configManager.constants.AHB_BILLPAY_MULTI){
         this.OnClickPayABill();
      }else if(billPayType === configManager.constants.AHB_BILLPAY_SINGLE ||configManager.constants.AHB_BILLPAY_CHARITY){
         this.onClickMakeAPayment();
      }else{ 
        //for payment history
      }
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },

  initActions: function() {
    var scope = this;
    this.view.MainHeader.flxBack.onClick = this.navigateBack;
    this.view.MainHeader.btnBack.onClick = this.navigateBack;
    this.view.flxPayABill.onClick = this.OnClickPayABill;
    this.view.flxManage.onClick = this.onClickMakeAPayment;
    this.view.flxViewPastPayments.onClick = this.onClickViewPastPayment;
    this.view.btnPayAllSeleted.onClick = this.payAllSelected;
    this.view.flxAddPayee.onClick = this.addPayee;
    this.view.flxEditPayee.onClick = this.editPayee;
    this.view.flxCharityPayments.onClick = this.onClickCharity;
    this.view.segTransactions.onRowClick = this.onSelectPayee;
    
    this.view.segMakePayment.onRowClick = this.onSelectSinglePayee;
    
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUBILLPAY);     

  },
  
  OnClickPayABill:function(){
    kony.print("OnClickPayABill");
    var configManager = applicationManager.getConfigurationManager();
	var multi = configManager.constants.AHB_BILLPAY_MULTI;
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
 	billPayMod.presentationController.setBillPayType(multi);
    this.view.flxMainContainer.bottom ="160dp";
    this.view.segTransactions.setVisibility(true);
    this.view.segTransactions.removeAll();
    this.view.segMakePayment.setVisibility(false);
    this.view.segMakePayment.removeAll();
    this.view.segViewPastPayment.setVisibility(false);
    this.view.segViewPastPayment.removeAll();
    this.view.flxPayABill.imgPayAPerson.src = "payduebillsselected.png";
    this.view.imgViewPastPayments.src = "viewpastpaymentsdisabled.png";
    this.view.imgManage.src = "makeapaymentdisabled.png";
    this.view.lblPaymentHeader.text = kony.i18n.getLocalizedString("kony.ahb.payments.outstandingAmounts");
    this.view.lblPayAPerson.skin = "sknAHBLblGscB14pt363936";
    this.view.lblManage.skin = "sknAHBLblGscB14ptC2C4C2";
    this.view.lblViewPastPayments.skin = "sknAHBLblGscB14ptC2C4C2";
    this.view.lblPayAPerson.text = kony.i18n.getLocalizedString("kony.ahb.payments.payDueBills");
    this.view.flxCharityPayments.setVisibility(false);
    this.view.flxSeperatorMakePayment.setVisibility(false);
    //this.view.btnPayAllSeleted.setVisibility(true);
   // this.view.btnPayAllSeleted.setEnabled(false);
    this.view.btnPayAllSeleted.skin ="sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.btnPayAllSeleted.focusSkin ="sknAHBGscB16ptBeaeaeaTffffffRounded";  
    this.view.flxNoPayeeRegistered.setVisibility(false);
	this.view.flxAddEditPayment.setVisibility(true);

    this.fetchPayeeData();
  },
  
  onClickMakeAPayment:function(){
    kony.print("onClickMakeAPayment");
    var configManager = applicationManager.getConfigurationManager();
	var single = configManager.constants.AHB_BILLPAY_SINGLE;
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayMod.presentationController.setBillPayType(single);
    this.view.flxMainContainer.bottom ="170dp";

    this.view.segTransactions.setVisibility(false);
    this.view.segTransactions.removeAll();
    this.view.segMakePayment.setVisibility(true);
    this.view.segMakePayment.removeAll();
    this.view.segViewPastPayment.setVisibility(false);
    this.view.segViewPastPayment.removeAll();
    this.view.imgManage.src = "makeapaymentselected.png";
    this.view.flxPayABill.imgPayAPerson.src = "payduebillsdisabled.png";
    this.view.imgViewPastPayments.src = "viewpastpaymentsdisabled.png";
    this.view.lblPaymentHeader.text = kony.i18n.getLocalizedString("kony.ahb.payments.yourRegisteredPayees");
    this.view.lblManage.skin = "sknAHBLblGscB14pt363936";
    this.view.lblViewPastPayments.skin = "sknAHBLblGscB14ptC2C4C2";
    this.view.lblPayAPerson.skin = "sknAHBLblGscB14ptC2C4C2";
    this.view.lblManage.text = kony.i18n.getLocalizedString("kony.ahb.payments.makeAPayments");
    this.view.flxSeperatorMakePayment.setVisibility(true);
    this.view.flxCharityPayments.setVisibility(true);
    this.view.flxNoPayeeRegistered.setVisibility(false);
	this.view.flxAddEditPayment.setVisibility(true);
    this.view.btnPayAllSeleted.setVisibility(false);
    this.fetchPayeeData();
  },
  
  onClickViewPastPayment:function(){
    kony.print("onClickViewPastPayment");
    this.view.flxMainContainer.bottom ="200dp";
	this.view.btnPayAllSeleted.setVisibility(false);
    this.view.segTransactions.setVisibility(false);
    this.view.segTransactions.removeAll();
    this.view.segMakePayment.setVisibility(false);
    this.view.segMakePayment.removeAll();
    this.view.segViewPastPayment.setVisibility(true);
    this.view.segViewPastPayment.removeAll();
    this.view.imgPayAPerson.src = "payduebillsdisabled.png";
    this.view.imgViewPastPayments.src = "viewpastpaymentsselected.png";
    this.view.imgManage.src = "makeapaymentdisabled.png";
    this.view.lblPaymentHeader.text = kony.i18n.getLocalizedString("kony.ahb.payments.pastPayments");
    this.view.lblViewPastPayments.skin = "sknAHBLblGscB14pt363936";
    this.view.lblPayAPerson.skin = "sknAHBLblGscB14ptC2C4C2";
    this.view.lblManage.skin = "sknAHBLblGscB14ptC2C4C2";
    this.view.lblViewPastPayments.text = kony.i18n.getLocalizedString("kony.ahb.payments.viewPastPayments");
    this.view.flxSeperatorMakePayment.setVisibility(false);
    this.view.flxCharityPayments.setVisibility(false);
    this.view.flxNoPayeeRegistered.setVisibility(false);

    
    this.view.flxAddEditPayment.setVisibility(false);
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	payAllSelected
  Purpose: 
  Author: 	Bipin
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  payAllSelected : function(){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var paymentList = this.view.segTransactions.selectedRowItems;
    var configManager = applicationManager.getConfigurationManager();
    var navManager = applicationManager.getNavigationManager();
    kony.print("payAllSelected this.paymentList "+ paymentList  );
    if (paymentList && paymentList.length < 6) {
      billPayModule.presentationController.setPaymentList(paymentList);
      var entryPoint = navManager.getEntryPoint("frmAccountDetails");

      if (entryPoint != configManager.constants.ENTRY_POINT.quickPayment &&  configManager.constants.ENTRY_POINT.billPayment) { //in order to pre-populate the selected from account/cardNo


        billPayModule.presentationController.setSelectedFromAccount(""); 
      }
      //billPayModule.presentationController.setSelectedFromAccount("");
      billPayModule.presentationController.getDashboardData();
    } else {
      kony.print("payAllSelected this.paymentList else" + paymentList);
      var maxPayeeSelectedMsg = kony.i18n.getLocalizedString("kony.ahb.payments.maxPayeesWarning");
      this.bindGenericError(maxPayeeSelectedMsg);
    }
  },
  /*-----------------------------------------------------------------------------------

  Name: 	fetchPayeeData
  Purpose: 
  Author: 	Bipin
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  fetchPayeeData : function(){
    kony.print("fetchPayeeData  ");
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayMod.presentationController.fetchPayeeList();
  },
  
  addPayee:function(){
   kony.print("addPayee");
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayModule.presentationController.resetAllPaymentData();
    billPayModule.presentationController.getAllServiceProviders();
  },
  editPayee : function(){
    kony.print("Enter into the editPayee-->");
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    //navManager.setEntryPoint("BillPayeeList","frmTransfers");
	navManager.navigateTo("frmBillPayAllPayees");
  },
  /*-----------------------------------------------------------------------------------

  Name: 	setMultiPaymentsData
  Purpose: 
  Author: 	Fariha
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  setMultiPaymentsData:function(){
//     var configManager = applicationManager.getConfigurationManager();
// 	var multi = configManager.constants.AHB_BILLPAY_MULTI;
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var multi =billPayMod.presentationController.getBillPayType();
    this.setSegTransactionsData(multi);
  },
  /*-----------------------------------------------------------------------------------

  Name: 	setSinglePaymentData
  Purpose: 
  Author: 	Fariha
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  setSinglePaymentData:function(){
//     var configManager = applicationManager.getConfigurationManager();
// 	var single = configManager.constants.AHB_BILLPAY_SINGLE;
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var single = billPayMod.presentationController.getBillPayType();
    this.setSegMakeAPaymentData(single);
  },
  
  

  showPopupSuccess: function() {
    var scopeObj = this;
    this.timerCounter = parseInt(this.timerCounter) + 1;
    var timerId = "timerPopupSuccess" + this.timerCounter;
    this.view.flxPopup.skin = "sknFlx43ce6e";
    // this.view.customPopup.imgPopup.src = "confirmation.png";
    // this.view.customPopup.lblPopup.text = this.popupMsg;
    this.view.flxPopup.setVisibility(true);
    kony.timer.schedule(timerId, function() {
      scopeObj.view.flxPopup.setVisibility(false);
    }, 3, false);
  },
       
  setFooter:function(){
    this.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
    this.view.customFooter.flxAccSelect.setVisibility(false);
    this.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
    this.view.customFooter.flxTransferSel.setVisibility(false);
    this.view.customFooter.lblBillPay.skin = "sknLbl424242SSP20px";
    this.view.customFooter.flxBillSelected.setVisibility(true);
    this.view.customFooter.lblMore.skin = "sknLblA0A0A0SSP20px";
    this.view.customFooter.flxMoreSelect.setVisibility(false);
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	bindGenericError
  Purpose: 
  Author: 	Bipin
  Date: 	23/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  bindGenericError:function(errorMsg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },
  /*-----------------------------------------------------------------------------------

  Name: 	enableConfirmBtn
  Purpose: 
  Author: 	Fariha
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  setSegTransactionsData: function(billPayType){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var segData = billPayMod.presentationController.getFormattedPayeeList(billPayType);
    kony.print("setSegTransactionsData segData " + segData);
    this.view.segTransactions.widgetDataMap={
      "lblPayee":"nickName",
      "lblAmount":"lblAmount", 
      "lblPayeeNumber":"consumerNumber",
      "imgTick" : "imgTick"
    };
    var payeeList =  billPayMod.presentationController.getPayeesList(billPayType);
    kony.print("setSegTransactionsData payeeList" + payeeList);
    if(payeeList.length){
      if(segData.length){
        this.view.segTransactions.height ="45%";
        this.view.btnPayAllSeleted.setVisibility(true);
        this.view.flxNoPayeeRegistered.setVisibility(false);
        this.view.lblNoPayeeRegistered.text = "";
      }else{
        this.view.segTransactions.height ="46%";
        this.view.btnPayAllSeleted.setVisibility(false);
        this.view.flxNoPayeeRegistered.setVisibility(true);
        this.view.lblNoPayeeRegistered.text = kony.i18n.getLocalizedString("kony.ahb.payment.noBillsDue");
      }
      kony.print("segData"+segData);
      this.view.segTransactions.setData(segData);
    }else{
 		this.view.btnPayAllSeleted.setVisibility(false);
        this.view.flxNoPayeeRegistered.setVisibility(true);
        this.view.lblNoPayeeRegistered.text = kony.i18n.getLocalizedString("kony.ahb.payment.noRegisteredServiceProvider");
    }

  },
  /*-----------------------------------------------------------------------------------

  Name: 	enableConfirmBtn
  Purpose: 
  Author: 	Fariha
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  setSegMakeAPaymentData: function(billPayType){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var segData = billPayMod.presentationController.getFormattedPayeeList(billPayType);
    this.view.segMakePayment.widgetDataMap={
      "lblServiceOperator":"nickName",
      "lblNumber":"consumerNumber"
    };

    kony.print("segData"+segData);
   if(segData.length){
      this.view.flxNoPayeeRegistered.setVisibility(false);
      this.view.lblNoPayeeRegistered.text = "";
    }else{
      this.view.flxNoPayeeRegistered.setVisibility(true);
      this.view.lblNoPayeeRegistered.text = kony.i18n.getLocalizedString("kony.ahb.payment.noRegisteredServiceProvider");
    }
    this.view.segMakePayment.setData(segData);
  },
 /*-----------------------------------------------------------------------------------

  Name: 	enableConfirmBtn
  Purpose: 
  Author: 	Bipin
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/ 
  onSelectPayee: function(){
   this.view.forceLayout();
    var selectedPayee = this.view.segTransactions.selectedRowItems;
    ///select/deselect logic

    this.enabledisablePayBtn();

    kony.print("onSelectPayee paymentList " + selectedPayee);

  }, 
  /*-----------------------------------------------------------------------------------

  Name: 	enableConfirmBtn
  Purpose: 
  Author: 	Bipin
  Date: 	22/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  enabledisablePayBtn: function() {
    kony.print("enabledisablePayBtn paymentList ");
    var selectedPayee = this.view.segTransactions.selectedRowItems;
    if (selectedPayee && selectedPayee.length > 0) {
      //this.view.btnPayAllSeleted.setEnabled(true);
      this.view.btnPayAllSeleted.onClick = this.payAllSelected;
      this.view.btnPayAllSeleted.skin = "sknAHBGsc0b29ca020d9d44b";
      this.view.btnPayAllSeleted.focusSkin = "sknAHBGsc0b29ca020d9d44b";
    }else{
     // this.view.btnPayAllSeleted.setEnabled(false);
      this.view.btnPayAllSeleted.onClick = null;
      this.view.btnPayAllSeleted.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
      this.view.btnPayAllSeleted.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    }
  },
  
  onSelectSinglePayee : function(){
    
    var selectedSinglePayee = this.view.segMakePayment.selectedRowItems;
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayMod.presentationController.setBillAmountEntered("");
    billPayMod.presentationController.resetFromAccountData();
    billPayMod.presentationController.resetPayeeData();
    var configManager = applicationManager.getConfigurationManager();
	var single = configManager.constants.AHB_BILLPAY_SINGLE;
    billPayMod.presentationController.setBillPayType(single);
    
    kony.print(" onSelectSinglePayee selectedSinglePayee "+ selectedSinglePayee);
    if(selectedSinglePayee && selectedSinglePayee.length){
       billPayMod.presentationController.setAllPayeeData(selectedSinglePayee[0]);
       billPayMod.presentationController.fetchUtilityAmountsAndFromAccounts();
    }
    
   
    

  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	onClickCharity
  Purpose: 	sets the charity type AND navigates to charity frm
  Author: 	Fariha
  Date: 	29/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  
  onClickCharity : function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var configManager = applicationManager.getConfigurationManager();
	var charity = configManager.constants.AHB_BILLPAY_CHARITY;
    billPayMod.presentationController.setBillPayType(charity);
    billPayMod.presentationController.commonFunctionForNavigation("frmAHBCharityPayments");
  },
  
  navigateBack : function(){
    var navMan=applicationManager.getNavigationManager();    
    navMan.goBack();    
  },


});