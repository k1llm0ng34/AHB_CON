define({
  timerCounter:0,
  init:function(){
    // this.initActions();
  },
  /*
  @Function: studioActions
  @Purpose : All the studio actions of the form 
  @Returns : none
  @Date : 23/10/2018
  */
  studioActions : function(){
    this.view.btnNext.onClick = this.bioMetricVerification;
    	//header Back
   		this.view.MainHeaderWithCancel.btnBack.onClick = this.flxBackOnClick;
    	this.view.MainHeaderWithCancel.flxBack.onClick = this.flxBackOnClick;
        this.view.MainHeaderWithCancel.btnCancel.onClick = this.onCancel;
    	this.view.customAlertPopUp.flxCancel.onClick = this.customAlertPopUpFlxCancelOnClick;
    	this.view.onDeviceBack= this.flxBackOnClick;
        this.view.btnEdit.onClick = this.onEdit;
  },
  frmPreShow: function() {
    //this.renderTitleBar();
    // this.populateDetails();
    this.studioActions();
    //     var navManager = applicationManager.getNavigationManager();
    //     var currentForm=navManager.getCurrentForm();
    //     applicationManager.getPresentationUtility().dismissLoadingScreen();
    //     applicationManager.getPresentationFormUtility().logFormName(currentForm);
   
    
    this.hideShowflexOnPreShow(false);
    this.OperativeAccountDetailsPage();
    
  },
  initActions:function(){
    	var scope=this;
        var navManager = applicationManager.getNavigationManager();
    	var currentForm=navManager.getCurrentForm();
    	applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    	this.view.btnContinue.onClick = scope.btnContinueOnClick;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
  },
    btnRightOnClick: function() {
        
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    flxBackOnClick: function() {
      	var navMan=applicationManager.getNavigationManager();
     	navMan.goBack();
    },
    btnContinueOnClick: function() {
      	applicationManager.getPresentationUtility().showLoadingScreen();
      	var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    	var benificiaryData=transferModule.presentationController.getBenificiaryData();
      	var nickName=this.view.txtAccNickName.text;
      	if(nickName==="" || nickName===null || nickName===undefined){
          	nickName=benificiaryData.beneficiaryName;
        }
      	transferModule.presentationController.setNickName(nickName);
      	transferModule.presentationController.setIsVerified(true);
      	if(transferModule.presentationController.getFlowType()==="InternationalRecipients" || transferModule.presentationController.getFlowType()==="InternationalTransferCreateTransfer"){
          	transferModule.presentationController.setIsInternationalAccount(true);
        	transferModule.presentationController.setIsSameBankAccount(false);
          	transferModule.presentationController.setBankName(this.view.lblBankNameValue.text);
          	transferModule.presentationController.createInternationalBenificiary();
        }
      	else{
      		transferModule.presentationController.setIsInternationalAccount(false);
          	if(transferModule.presentationController.getFlowType()==="SameBankRecipients"|| transferModule.presentationController.getFlowType()==="OtherKonyBankMembersCreateTransfer"){
              	transferModule.presentationController.setIsSameBankAccount(true);
      			transferModule.presentationController.setBankName(this.view.lblBankNameValue.text);
              	transferModule.presentationController.createInternalBenificiary();
          	}
      		else{
              	transferModule.presentationController.setIsSameBankAccount(false);
          		transferModule.presentationController.setBankName(this.view.lblBankNameValue.text);
          		transferModule.presentationController.createExternalBenificiary(benificiaryData);
      		}
        }
    },
  	populateDetails:function(){
      	var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    	var benificiaryData=transferModule.presentationController.getBenificiaryData();
      	var bankName=transferModule.presentationController.getBankName();
      	var accountNumber=JSON.parse(JSON.stringify(benificiaryData.accountNumber));
      	var maskedAccountNumber=applicationManager.getDataProcessorUtility().maskAccountNumber(accountNumber);
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
		if(transferModule.presentationController.getFlowType()==="InternationalRecipients" || transferModule.presentationController.getFlowType()==="InternationalTransferCreateTransfer"){
          		this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
	      		this.view.lblAccNoValue.text=maskedAccountNumber;
	      		this.view.lblAccTypeVal.text=benificiaryData.accountType;
	      		this.view.flxRoutingNo.setVisibility(true);
	          	this.view.flxBankName.isVisible=true;
    	      	this.view.lblBankNameValue.isVisible=true;
                this.view.lblRoutingNo.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.SwiftCode");
				this.view.lblBankNameValue.text="Chase Bank";
	          	this.view.lblCardIssueDateVal.text=benificiaryData.swiftCode;
	          	this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
                this.view.flxBankLocation.isVisible=true;
          		this.view.lblBankLocationValue.text=benificiaryData.countryName;
        }
      else{
      	if(transferModule.presentationController.getFlowType()==="SameBankRecipients" || transferModule.presentationController.getFlowType()==="OtherKonyBankMembersCreateTransfer"){
      		this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
      		this.view.lblAccNoValue.text=maskedAccountNumber;
      		this.view.lblAccTypeVal.text=benificiaryData.accountType;
      		this.view.lblBankNameValue.text=bankName;
            this.view.flxRoutingNo.setVisibility(false);
          	this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
          	this.view.flxBankLocation.isVisible=false;
        }
        else{
      		this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
      		this.view.lblAccNoValue.text=maskedAccountNumber;
      		this.view.lblAccTypeVal.text=benificiaryData.accountType;
      		this.view.flxRoutingNo.setVisibility(true);
          	this.view.lblRoutingNo.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.RoutingNumber");
          	this.view.flxBankName.isVisible=true;
          	this.view.lblBankNameValue.isVisible=true;
			this.view.lblBankNameValue.text="Chase Bank";
          	this.view.lblCardIssueDateVal.text=benificiaryData.routingNumber;
          	this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
          	this.view.flxBankLocation.isVisible=false;
        }
      }
    },
  /*
  @Purpose To take the user to transfer page if user clicks cancel in Add Beneficiary flow
  */
	onClickCancel: function() {
    this.view.flxAddBenConfirm.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
      	applicationManager.getPresentationUtility().dismissLoadingScreen();
      	var navManager = applicationManager.getNavigationManager();	
    var navigateToForm=navManager.getEntryPoint("AddBeneficiary");
      	var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      	transferMod.presentationController.commonFunctionForNavigation(navigateToForm);
    },
  /*
  @Purpose Onclick action of Cancel button on 'Confirm Beneficiary' page
  */
  onCancel : function(){
    this.view.AlertPopup.lblMessage.text = kony.i18n.getLocalizedString("kony.AHB.beneficiary.ALERT.cancelBeneficiary");
    this.view.flxAddBenConfirm.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.onClickCancel;
  },
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel in Add Beneficiary flow
  */
  doNotCancelTransaction : function(){
    this.view.flxAddBenConfirm.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
  },
  	bindGenericError: function (errorMsg) {
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	var scopeObj = this;
    	applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },

  /*
  @Function: biometric Login
  @Purpose : Validates the fingerprint or faceid using Kony's API
  @Returns : none
  @Date : 23/10/2018
  */
  bioMetricVerification : function(){
     this.view.onDeviceBack = this.onDeviceBackClick ;
    var lCustomInfo = applicationManager.getDataforLogin();
    var devManager = applicationManager.getDeviceUtilManager();
    var isTouchIdSupported = devManager.isTouchIDSupported();
    var isFaceIdSupported = devManager.isFaceIdSupported();
    var defaultAuthMode = lCustomInfo.defaultAuthMode;

    var istouchIdEnabled = lCustomInfo.istouchIdEnabled;
    var isFaceIdEnabled = lCustomInfo.isFacialAuthEnabled;


    if(defaultAuthMode === "faceid" && isFaceIdEnabled === true && isFaceIdSupported === true){
      if(lCustomInfo.isIphone){
        var config = {"promptMessage" : kony.i18n.getLocalizedString("kony.ahb.beneficiary.biometricConfirmation"),
                      "fallbackTitle" : kony.i18n.getLocalizedString("kony.mb.common.CancelSmall")};
        kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.statusCB, config);
      }
    }
    else if (defaultAuthMode === "touchid" && istouchIdEnabled === true && isTouchIdSupported === true) {
      var config = {}; 
      if(lCustomInfo.isIphone){
        config = {"promptMessage" : kony.i18n.getLocalizedString("kony.ahb.beneficiary.biometricConfirmation"),
                  "fallbackTitle" : kony.i18n.getLocalizedString("kony.mb.common.CancelSmall")}; 
        kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.authCallBack, config);
      } else{
        this.view.customAlertPopUp.setVisibility(true);
        this.view.flxAddBenConfirm.setEnabled(false);
        kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.authCallBack, config);
      }

    }
    else{
      this.view.customAlertPopUp.setVisibility(false);
      this.view.flxAddBenConfirm.setEnabled(true);
      this.sendOTP();
    }   
  },
  /*
  @Function: Callback
  @Purpose : Validates based on the status (status form API)
  @Input : status : callback status for API , msg : status message from the API
  @Returns : none
  @Date : 23/10/2018
  */
  authCallBack : function(status,msg)
  {

    kony.print("status Response"+JSON.stringify(status));
    if (status == 5000)
    {
      this.view.customAlertPopUp.setVisibility(false);  
      this.view.flxAddBenConfirm.setEnabled(true);
      //Function to be implemented // to add the benificiary details
      this.addBeneficiary();
    }
    else if (status == 5002){
      kony.print("authentication cancelled");
      this.sendOTP();
    }
    else
    {
      applicationManager.getDataProcessorUtility().showToastMessageError(this,"Please Try Again with Valid Fingerprint");
    }
  },

  /*
  @Function: statusCB
  @Purpose : Validates based on the status (status form API)
  @Input : status : callback status for API , msg : status message from the API
  @Returns : none
  @Date : 23/10/2018
  */
  statusCB : function(status,msg)
  {
    if(status == 5000)
    {
      //Function to be implemented // to add the benificiary details
      this.addBeneficiary();
    }
    else if (status == 5002){
      kony.print("authentication cancelled");
      this.sendOTP();
    }
    else
    {
      applicationManager.getDataProcessorUtility().showToastMessageError(this,"Please Try Again");
    }
  },
   /*
  @Function: customAlertPopUpFlxCancelOnClick
  @Purpose : Making cancelAuthentication API call
  @Input : none
  @Returns : none
  @Date : 23/10/2018
  */
  customAlertPopUpFlxCancelOnClick:function(){
    this.view.onDeviceBack= this.flxBackOnClick;
    this.view.customAlertPopUp.setVisibility(false);
    this.view.flxAddBenConfirm.setEnabled(true);
    kony.localAuthentication.cancelAuthentication();//API call 
    
  },
  
   /*-----------------------------------------------------------------------------------

  Name: 	OperativeAccountDetailsPage
  Purpose: 	Populates data on ui for Confirm beneficiary details
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 	 

  ------------------------------------------------------------------------------------*/
  OperativeAccountDetailsPage : function(){
    kony.print("OperativeAccountDetailsPage");

    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule")        
    var allBenData = transferMod.presentationController.getAllBeneficiaryData(); 

    kony.print(" OperativeAccountDetailsPage UI data  " + JSON.stringify(allBenData));
    if(allBenData.beneficiaryType === "AHBAccounts"){
      //for AHB ACCOUNTS
      this.displayAHBAccData(allBenData);
      
    }else if(allBenData.beneficiaryType === "Others"){
      if(allBenData.beneficiaryOthersType === "IBAN"){
        this.view.lblBranch.text = "Branch"
        // for IBAN 
        this.displayIBANAccData(allBenData);
      }else{
        // for Account and Swift code 
        this.displaySwiftCodeAccData(allBenData)
      }

    } 
    this.view.forceLayout();
  },
  
 /*-----------------------------------------------------------------------------------

  Name: 	displayAHBAccData
  Purpose: 	Populates data on ui for Confirm beneficiary details  for AHB Accounts
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 	 

  ------------------------------------------------------------------------------------*/
  displayAHBAccData: function(allBenData){
    //alert("AHB ACC")
    this.view.flxBenName.setVisibility(true);
    this.view.lblSeparator1.setVisibility(true);

    this.view.flxBankName1.setVisibility(true);
    this.view.lblSepartor3.setVisibility(true);

    this.view.flxAccount.setVisibility(true);
    this.view.lblSepartor5.setVisibility(true);

    this.view.flxNickName.setVisibility(true);

    this.view.flxBranch.setVisibility(true);
    this.view.lblSepartor4.setVisibility(true);
    
    if(allBenData){
      this.view.lblBenNameData.text =  allBenData.beneficiaryName;
      this.view.lblBankNameData.text = allBenData.beneficiaryBankName;
      this.view.lblBranch.text = kony.i18n.getLocalizedString("kony.ahb.beneficiary.iban");
      this.view.lblBranchData.text = formatAlphanumericString(allBenData.beneficiaryIBAN);
      this.view.lblAccountData.text = formatAlphanumericString(allBenData.beneficiaryAccountNumber);
      this.view.lblNickNameData.text = allBenData.beneficiaryNickName;  
      this.view.forceLayout();
    }

  },
   /*-----------------------------------------------------------------------------------

  Name: 	displaySwiftCodeAccData
  Purpose: 	Populates data on ui for Confirm beneficiary details for IBAN
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 	 

  ------------------------------------------------------------------------------------*/
  displaySwiftCodeAccData : function(allBenData){
    this.hideShowflexOnPreShow(true);
	if(allBenData){
      this.view.lblBenNameData.text =  allBenData.beneficiaryName;
      this.view.lblCountryData.text = allBenData.beneficiaryCountryName;
      this.view.lblBankNameData.text = allBenData.beneficiaryBankName;  
      this.view.lblBranch.text = kony.i18n.getLocalizedString("kony.ahb.accountDetails.branch");
      this.view.lblBranchData.text = allBenData.beneficiaryBranch;
      this.view.lblAccountData.text = formatAlphanumericString(allBenData.beneficiaryAccountNumber);
      this.view.lblNickNameData.text = allBenData.beneficiaryNickName;
      this.view.lblSwiftData.text = allBenData.beneficiarySwiftCode;
      
      if(allBenData.beneficiaryCountrySpecificCode){
        this.view.lblSortCodeData.text = allBenData.beneficiaryCountrySpecificCodeValue ? allBenData.beneficiaryCountrySpecificCodeValue : kony.i18n.getLocalizedString("kony.ahb.common.None");
        this.view.lblSortCode.text = allBenData.beneficiaryCountrySpecificCode;
      }
      else{
        this.view.flxSortCode.setVisibility(false);
    	this.view.lblSepartor7.setVisibility(false);
      }
      
      this.view.forceLayout();
    }
  },
   /*-----------------------------------------------------------------------------------

  Name: 	displayIBANAccData
  Purpose: 	Populates data on ui for Confirm beneficiary details  for Account number and swidft code
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 	 

  ------------------------------------------------------------------------------------*/
  displayIBANAccData: function(allBenData){
    this.view.flxBenName.setVisibility(true);
    this.view.lblSeparator1.setVisibility(true);

    this.view.flxBankName1.setVisibility(true);
    this.view.lblSepartor3.setVisibility(true);

    this.view.flxNickName.setVisibility(true);
    
    this.view.flxBranch.setVisibility(true);
    this.view.lblSepartor4.setVisibility(true);

    this.view.flxCountry.setVisibility(true);
    this.view.lblSepartor2.setVisibility(true);
    
    this.view.flxSortCode.setVisibility(true);
    	this.view.lblSepartor7.setVisibility(true);
    
    if(allBenData){
      this.view.lblBenNameData.text =  allBenData.beneficiaryName;
      this.view.lblCountryData.text = allBenData.beneficiaryCountryName;
      this.view.lblBankNameData.text = allBenData.beneficiaryBankName;
      this.view.lblBranch.text = kony.i18n.getLocalizedString("kony.ahb.beneficiary.iban");
      this.view.lblBranchData.text = formatAlphanumericString(allBenData.beneficiaryIBAN);
      this.view.lblNickNameData.text = allBenData.beneficiaryNickName;
      
      if(allBenData.beneficiaryCountrySpecificCode){
        this.view.lblSortCodeData.text = allBenData.beneficiaryCountrySpecificCodeValue ? allBenData.beneficiaryCountrySpecificCodeValue : kony.i18n.getLocalizedString("kony.ahb.common.None");
        this.view.lblSortCode.text = allBenData.beneficiaryCountrySpecificCode;
      }
      else{
        this.view.flxSortCode.setVisibility(false);
    	this.view.lblSepartor7.setVisibility(false);
      }
      
      this.view.forceLayout();
    }
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	hideflexOnPreShow
  Purpose: 	Populates data on ui for Confirm beneficiary details  for Account number and swidft code
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 	 
  ------------------------------------------------------------------------------------*/
  hideShowflexOnPreShow : function(pValue){
    
    this.view.flxBenName.setVisibility(pValue);
    this.view.lblSeparator1.setVisibility(pValue);
    
    this.view.flxCountry.setVisibility(pValue);
    this.view.lblSepartor2.setVisibility(pValue);
    
    this.view.flxBankName1.setVisibility(pValue);
    this.view.lblSepartor3.setVisibility(pValue);
    
    this.view.flxBranch.setVisibility(pValue);
    this.view.lblSepartor4.setVisibility(pValue);
    
    this.view.flxAccount.setVisibility(pValue);
    this.view.lblSepartor5.setVisibility(pValue);
    
    this.view.flxSWIFT.setVisibility(pValue);
    this.view.lblSepartor6.setVisibility(pValue);
    
    this.view.flxSortCode.setVisibility(pValue);
    this.view.lblSepartor7.setVisibility(pValue);
    
    this.view.flxNickName.setVisibility(pValue);   
  },

  sendOTP : function(){
	//alert("OTP")
     kony.print("addBeneficiary sendOTP" );
    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("generateOTP","AddBeneficiary");
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    transferModule.presentationController.triggerOtp();
  },

  addBeneficiary : function (){
    //alert("Add ben")
     kony.print("addBeneficiary paramAddBeneficiaryDetails  " );
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    transferModule.presentationController.addBeneficiary();
  },

   onDeviceBackClick :  function(){
    kony.print("onDeviceBackClick");
  },
  
  /*
  @Purpose To edit a beneficiary 
  */
  onEdit : function(){
    var navManager = applicationManager.getNavigationManager();
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    var flow = transferModule.presentationController.getBeneficiaryOthersType();
    if(flow === "SWIFT"){
      navManager.navigateTo("frmBenSwiftCode");
    }else{
      navManager.navigateTo("frmEnterBenAccNo");
    }
  }


});