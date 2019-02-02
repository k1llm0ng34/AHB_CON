define({

  keypadString: '',
  timerCounter:0,
  onNavigate: function(obj) {
    if (obj === undefined) {
      return;
    }
    if (obj === "addManually") {

    }
  },
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmPreshow: function() {

    this.initActions();
    this.initializeSkins();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);

    this.populateUIElements();
    this.enableNext();
  },
 /***********************************************************************************************
  Name: populateUIElements
  Author: Sindhu
  Date: 23/11/2018
  Input: none
  Return: none
*************************************************************************************/
  populateUIElements : function(){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var payeeDetails = billPayModule.presentationController.getAllPayeeData();
    var operatorList = billPayModule.presentationController.getServiceProviderList(); 
    
    operatorList.unshift(["",kony.i18n.getLocalizedString("kony.ahb.common.Listbox.Select")]);
    this.view.lbxServiceProviderData.masterData = operatorList;
    kony.print("populateUIElements_operatorList"+JSON.stringify(operatorList));
    this.view.lbxServiceProviderData.selectedKey = payeeDetails.operatorCode;
    kony.print("populateUIElements_operatorList_selectedKey"+payeeDetails.operatorName);
    this.view.flxServiceType.setVisibility(false);
    this.populateSubServiceList();
    this.view.tbxAccountNo.text = payeeDetails.consumerNumber;
    this.view.tbxConsumerPin.text = payeeDetails.consumerPin;
    this.view.tbxNickName.text = payeeDetails.nickName;
    
    this.enableNext();
  },
 /***********************************************************************************************
  Name: onSelectionOfServiceProvider
  Author: Sindhu
  Date: 23/11/2018
  Input: none
  Return: none
*************************************************************************************/
  onSelectionOfServiceProvider : function (){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var operatorCode = this.view.lbxServiceProviderData.selectedKey;
    var operatorCodeValue = this.view.lbxServiceProviderData.selectedKeyValue;
    billPayModule.presentationController.setOperatorCode(operatorCode);
    billPayModule.presentationController.setOperatorName(operatorCodeValue[1]);
    kony.print("onSelectionOfServiceProvider operatorCode "+JSON.stringify(operatorCode));
    billPayModule.presentationController.setServiceCode("");
    this.view.tbxConsumerPin.text = "";
    this.populateSubServiceList();
    this.enableNext();
  },
 /***********************************************************************************************
  Name: populateSubServiceList
  Author: Sindhu
  Date: 23/11/2018
  Input: none
  Return: none
*************************************************************************************/
  populateSubServiceList : function (){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var operatorCode = billPayModule.presentationController.getOperatorCode();
    var subserviceList = billPayModule.presentationController.getSubServiceList(operatorCode);
    var payeeDetails = billPayModule.presentationController.getAllPayeeData();
    var subServiceCode = payeeDetails.serviceCode;
    var subServiceType = payeeDetails.subServiceType;
    var hasSubServiceData = billPayModule.presentationController.getHasSubServiceObject();

    kony.print("populateUIElements_subserviceList"+JSON.stringify(subserviceList));
    if(subserviceList && subserviceList.length){
      if(hasSubServiceData && hasSubServiceData[operatorCode] === "true"){//subserviceList.length > 1
        this.view.flxServiceType.setVisibility(true);
        subserviceList.unshift(["",kony.i18n.getLocalizedString("kony.ahb.common.Listbox.Select")]);
        this.view.lblServiceType.skin = "sknAHBGSC16pt363836";
        this.view.flxSeparator2.height = "1dp";
        this.view.flxServiceType.setEnabled(true);
        //image change for selection
      }
      else{
        if(hasSubServiceData && hasSubServiceData[operatorCode] !== "true"){//subserviceList.length === 1
          this.view.flxServiceType.setVisibility(false);
          subServiceCode = subserviceList[0][0]; //showing default value if only one sub service code
        }
        this.view.lblServiceType.skin = "sknAHBGsc16pt858886";
        this.view.flxSeparator2.height = "0.5dp";
        this.view.flxServiceType.setEnabled(false);
        //image change for selection
      }
    }

    this.view.lbxSeviceType.masterData = subserviceList;
    this.view.lbxSeviceType.selectedKey = subServiceCode;
    kony.print("populateUIElements_subserviceList_selectedKey"+JSON.stringify(subserviceList));
    
    billPayModule.presentationController.setServiceCode(subServiceCode);
    billPayModule.presentationController.setServiceType(subServiceType);


 	this.populateSubServiceUIElement();
  },
 /***********************************************************************************************
  Name: onSelectionOfSubService
  Author: Sindhu
  Date: 23/11/2018
  Input: none
  Return: none
*************************************************************************************/
  onSelectionOfSubService : function(){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var subServiceCode = this.view.lbxSeviceType.selectedKey;
    var subServiceType = this.view.lbxSeviceType.selectedKeyValue[1]
    billPayModule.presentationController.setServiceCode(subServiceCode);
    billPayModule.presentationController.setServiceType(subServiceType);
    var operatorCode = billPayModule.presentationController.getOperatorCode();
	this.populateSubServiceUIElement();
    kony.print("onSelectionOfSubService operatorCode "+JSON.stringify(operatorCode));
    
    kony.print("onSelectionOfSubService subServiceCode "+JSON.stringify(subServiceCode));
 	this.enableNext();
  },
  
  /***********************************************************************************************
  Name: enableNext
  Author: Sindhu
  Date: 23/11/2018
  Input: none
  Return: none
*************************************************************************************/
  enableNext: function(){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var payeeData = billPayModule.presentationController.getAllPayeeData();
    
    var consumerNum = this.view.tbxAccountNo.text.trim();
    var consumerPin = this.view.tbxConsumerPin.text.trim();
    var nickName = this.view.tbxNickName.text.trim();
    if(payeeData.operatorCode && payeeData.serviceCode && consumerNum && nickName && (payeeData.isPinRequired === "false" || consumerPin)){
     this.view.btnNext.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
      this.view.btnNext.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
      this.view.btnNext.setEnabled(true); 
  }else {
    this.view.btnNext.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.btnNext.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.btnNext.setEnabled(false)
    }
  },
  
  
  /*
  @Function: initActions
  @Author : b.s.k.vantakala
  @Purpose : to initialize all form actions
  @Input : none
  @Returns : none
  @Date : 20/11/2018
  */ 
  initActions:function(){
    this.view.btnNext.onClick = this.verifyConsumer;
    this.view.MainHeader.flxBack.onClick = this.flxBackOnClick;
    this.view.MainHeader.btnBack.onClick = this.flxBackOnClick;
    this.view.tbxAccountNo.onBeginEditing = this.focusSkinForAccountNumber;
    this.view.tbxAccountNo.onEndEditing = this.initializeSkins;
    this.view.tbxNickName.onBeginEditing = this.focusSkinForNickName;
    this.view.tbxNickName.onEndEditing = this.initializeSkins;
    this.view.tbxConsumerPin.onBeginEditing = this.focusSkinForCosumerPin;
    this.view.tbxConsumerPin.onEndEditing = this.initializeSkins;
    this.view.lbxServiceProviderData.onSelection = this.onSelectionOfServiceProvider;
    this.view.lbxSeviceType.onSelection = this.onSelectionOfSubService;
    this.view.customAlertPopUp.flxCancel.onClick = this.customAlertPopUpFlxCancelOnClick;
    this.view.btnNext.onClick = this.onClickNext;
    this.view.tbxAccountNo.onTextChange = this.onConsumerNumberTextChange;
    this.view.tbxNickName.onTextChange = this.onNickNameTextChange;
    this.view.tbxConsumerPin.onTextChange = this.onConsumerPinChange;
  },
  
  /*enable next button handling on textchange*/
  onConsumerNumberTextChange: function(){
  this.enableNext();
},
  /*enable next button handling on textchange*/
  onNickNameTextChange: function(){
    this.enableNext();
  },
  /*enable next button handling on textchange*/
  onConsumerPinChange: function(){
    this.enableNext();
  },
  
  /***********************************************************************************************
  Name: onClickNext
  Author: Sindhu
  Date: 23/11/2018
  Input: none
  Return: none
*************************************************************************************/
  onClickNext: function() {
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var payeeData = billPayModule.presentationController.getAllPayeeData();
    var payeeConfigData = billPayModule.presentationController.getSubServiceData(payeeData.operatorCode, payeeData.serviceCode);
    var consumerNumber = this.view.tbxAccountNo.text.trim();
    var nickName = this.view.tbxNickName.text.trim();
    var consumerPin = this.view.tbxConsumerPin.text.trim();
    if ( consumerNumber && consumerNumber.length >= payeeConfigData.payeeIdMinLength && consumerNumber.length <= payeeConfigData.payeeIdMaxLength) {
      payeeData.consumerNumber = consumerNumber;
      payeeData.consumerPin = consumerPin;
      payeeData.nickName = nickName;
      payeeData.hasDues = payeeConfigData.hasDues;
      billPayModule.presentationController.setAllPayeeData(payeeData);
      this.verifyConsumer();
    } else {
      var errorMsg = "";
      if(payeeConfigData.payeeIdMinLength === payeeConfigData.payeeIdMaxLength){
        errorMsg = kony.i18n.getLocalizedString("kony.ahb.payments.incorrectConsumerNoSameMinMax");
        kony.print("errorMsg=="+errorMsg);
        errorMsg = errorMsg.replace("###PLACEHOLDER###", payeeConfigData.payeeIdMaxLength);
      }else{
        kony.print("max and min are different");
      errorMsg = kony.i18n.getLocalizedString("kony.ahb.payments.incorrectConsumerNoMinMaxCondition");
      errorMsg = errorMsg.replace("###MINIMUM###", payeeConfigData.payeeIdMinLength);
      errorMsg = errorMsg.replace("###MAXIMUM###", payeeConfigData.payeeIdMaxLength);
      }
      this.bindGenericError(errorMsg);
    }
  },
  
  /*
  @Function: initializeSkins
  @Author : b.s.k.vantakala
  @Purpose : to initialize all form skins to grey
  @Input : none
  @Returns : none
  @Date : 20/11/2018
  */ 
  initializeSkins : function (){
    this.view.flxAccountNoHolder.skin = "sknFlxf1f1f1";
    this.view.flxNickNameHolder.skin = "sknFlxf1f1f1";
    this.view.flxConsumerPinHolder.skin = "sknFlxf1f1f1";
  },
  /*
  @Function: focusSkinForAccountNumber
  @Author : b.s.k.vantakala
  @Purpose : to set focus skin for account number
  @Input : none
  @Returns : none
  @Date : 20/11/2018
  */ 
  focusSkinForAccountNumber : function(){
    this.initializeSkins();
    this.view.flxAccountNoHolder.skin = "sknAHBBff6d00";
  },
   /*
  @Function: focusSkinForNickName
  @Author : b.s.k.vantakala
  @Purpose : to set focus skin for nick name
  @Input : none
  @Returns : none
  @Date : 20/11/2018
  */ 
  focusSkinForNickName : function(){
    this.initializeSkins();
    this.view.flxNickNameHolder.skin = "sknAHBBff6d00";
  },
   /*
  @Function: focusSkinForCosumerPin
  @Author : b.s.k.vantakala
  @Purpose : to set focus skin for consumer Pin
  @Input : none
  @Returns : none
  @Date : 20/11/2018
  */ 
  focusSkinForCosumerPin : function(){
    this.initializeSkins();
    this.view.flxConsumerPinHolder.skin = "sknAHBBff6d00";
  },
    btnRightOnClick: function() {
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var flowType=billPayMod.presentationController.getFlowType();
      billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");     
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
      },
    btnContinueOnClick: function() {
      if(this.view.imgCheckbox.src === "remembermetick.png"){
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navToVerifyDetailsWithoutAccountNum("frmBillPayVerifyDetails");
      }
      else{
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navToReenterAccNum(this.keypadString,"frmBillPayReEnterAccNo");
      }
    },
    flxBackOnClick: function() {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    },
    setKeypadChar: function(char) {

        this.keypadString = this.keypadString + char;
        if (this.keypadString.length >= 1 && this.keypadString.length <= 18) {
            this.view.imgCheckbox.src = "remeberme.png";
            this.enterCodePostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteCodeView();          
        } else if (this.keypadString.length > 18) {
            this.keypadString = this.keypadString.slice(0, 18);
            return;
        }
        this.updateInputBullets("flxInputAccNo");
    },

    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.incompleteCodeView();  
            this.keypadString = '';
            this.updateInputBullets("flxInputAccNo");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets("flxInputAccNo");
        }
    },
    updateInputBullets: function(inputFlx) {
        if(this.keypadString===''){
            this.view.lblAccountNumber.text = '|';
        }else{
            this.view.lblAccountNumber.text = this.keypadString;
        }
    },
    enterCodePostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    incompleteCodeView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
  onCheckBoxTouchEnd: function(){
    if(this.view.imgCheckbox.src === "remeberme.png"){
      this.view.imgCheckbox.src = "remembermetick.png";
      this.keypadString='';
      this.updateInputBullets("flxInputAccNo");
      this.enterCodePostAction();
    }else{
      this.view.imgCheckbox.src = "remeberme.png";
      this.incompleteCodeView();
    }
  },
  setDataToForm:function(){
     var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
     var accNum=billPayMod.presentationController.getBillPayAccountNumber();
     if(billPayMod.presentationController.getManuallyAddedFlag()==="true"){
       this.view.flxCheckbox.isVisible=true;
     }else if(billPayMod.presentationController.getManuallyAddedFlag()==="false"){
       this.view.flxCheckbox.isVisible=false;
     }
    if(accNum || billPayMod.presentationController.getIsPayeeWithOutAccNum()){
        this.keypadString = accNum;
        this.enterCodePostAction();
    }
    else{
      this.keypadString = '';
      this.view.imgCheckbox.src ="remeberme.png";
      this.incompleteCodeView();
    }
  },
  
  /*
  @Purpose To create and send a request to validate consumer details
  */
  verifyConsumer : function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var payee ={
      "operatorCode" : billPayMod.presentationController.getOperatorCode(),
      "consumerNumber" : billPayMod.presentationController.getConsumerNumber(),
      "consumerPin" : billPayMod.presentationController.getConsumerPin(),
      "serviceCode": billPayMod.presentationController.getServiceCode(),
      "nickName" : billPayMod.presentationController.getPayeeNickName(),
    };
    kony.print("consumer=="+JSON.stringify(payee));
        billPayMod.presentationController.verifyConsumerNumber(payee);
  },
  /*
  @Purpose executes on click of device back
  */
  onDeviceBackClick :  function(){
    kony.print("onDeviceBackClick");
  },
  /*
  @Purpose To trigger authentication process after consumer details entererd by user are validated successfully
  */
  authenticateAddPayee : function(){
    kony.print("entered authenticateAddPayee");
    this.view.onDeviceBack = this.onDeviceBackClick;
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var bioMetricParam ={
      "flowScope":this,
      "container":"flxParent",
      "otpCallBack":this.sendOTP,
      "onConfirmationCallback":this.goToConfirmAddPayee,
      "promptMessage":kony.i18n.getLocalizedString("kony.ahb.payments.ConfirmAddPayee")
    } ;	
    authMode.presentationController.bioMetricVerification(bioMetricParam);

    },
  /*
  @Purpose To trigger OTP generation and validation 
  */
  sendOTP : function(){
    kony.print("entered sendOTP" );
    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("generateOTP","AddPayee");
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    transferModule.presentationController.triggerOtp();
  },
  /*
  @Purpose To navigate to Add Payee Confirmation Page
  */
  goToConfirmAddPayee : function(){
    kony.print("entered goToConfirmAddPayee");
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayModule.presentationController.commonFunctionForNavigation("frmBillPayVerifyDetails");
  },
  /*
  @Purpose To cancel the Biometric Authentication
  */
  customAlertPopUpFlxCancelOnClick:function(){
    kony.print("entered customAlertPopUpFlxCancelOnClick");
    this.view.onDeviceBack= this.flxBackOnClick;
    this.view.customAlertPopUp.setVisibility(false);
    this.view.flxMainParent.setEnabled(true);

    kony.localAuthentication.cancelAuthentication();
  },
  
  /***********************************************************************************************
  Name: bindGenericError - local error message for consumer number
  Author: Sindhu
  Date: 22/11/2018
  Input: none
  Return: none
*************************************************************************************/   
  bindGenericError : function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  
  populateSubServiceUIElement : function(){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    
    var payeeDetails = billPayModule.presentationController.getAllPayeeData();
    var operatorCode = payeeDetails.operatorCode;
    var subServiceCode = payeeDetails.serviceCode;
    
    var payeeConfigData = billPayModule.presentationController.getSubServiceData(operatorCode, subServiceCode);
    kony.print("populateSubServiceUIElement payeeConfigData" +JSON.stringify(payeeConfigData));
    if (payeeConfigData && payeeConfigData.isPinRequired === "true") {
      this.view.flxConsumerPin.setVisibility(true);
      payeeDetails.isPinRequired ="true"
    } else {
      this.view.tbxConsumerPin.text = "";
      payeeDetails.consumerPin = "";
      payeeDetails.isPinRequired = "false"
      this.view.flxConsumerPin.setVisibility(false);
    }
    
    billPayModule.presentationController.setAllPayeeData(payeeDetails);
  }
 
 
});