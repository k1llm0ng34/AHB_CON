define({ 

  newPin:'',
  rePin:'',
  currentPin: '',
  
  init: function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);	
  },
  postShow: function(){
    kony.print("entered postshow");
    var navMan = applicationManager.getNavigationManager();
    var entry =  navMan.getEntryPoint("resetPin");
    if(entry === "frmSettings"){
      kony.print("entered postshow"+entry);
      this.setTextBoxPinFocus("flxPinReset");
    }else{
      this.setTextBoxPinFocus("flxCreatePin");
    }
  },
  
  onConfirmClick: function(){
    this.view.lblRePin.setFocus(true);
    var navMan = applicationManager.getNavigationManager();
   var configManager = applicationManager.getConfigurationManager();
    var refKey = navMan.getCustomInfo("refKey");
   var infoFrmAHBLanding = navMan.getCustomInfo("frmAHBLanding");
   
    var frmLandingController =  applicationManager.getPresentationUtility().getController('frmAHBLanding', true);
    var flow = frmLandingController.getCurrentFlow();
    
    var entry =  navMan.getEntryPoint("resetPin");
    
    kony.print("rePin"+this.rePin);
    kony.print("newPin"+this.newPin);
    kony.print("currentPin"+this.currentPin);
     var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    this.view.tbxPin.setFocus(false);
    this.view.tbxPinX.setFocus(false);
    this.view.tbxResetPin.setFocus(false);
    this.initialSkins();
    var request={
      cifId:infoFrmAHBLanding.cifId,
      referenceKey : refKey,
      mpin:this.newPin,
      flow:flow
    };
    kony.print(" ##### frmAHBRegCreateAppPinController " + JSON.stringify(request));
    if(this.newPin.length === 4 && this.newPin === this.rePin){
      if(entry === "frmSettings"){
        this.authenticateResetPin();
      }else{
      authModule.presentationController.setMpin(request);
        //this.authenticateResetPin();
      }
    }else{
      //alert("Mobile PIN are not matching. Please enter valid pin");
    }
  },

  initActions: function(){
    this.view.MainHeader.flxBack.onClick = this.flxBackOnClick;
    this.view.customAlertPopUp.flxCancel.onClick = this.customAlertPopUpFlxCancelOnClick;
    this.view.MainHeader.btnBack.onClick = this.flxBackOnClick;
  },

  initializeTextBox:function(){
    this.view.tbxPin1.text = '';
    this.view.tbxPin2.text = '';
    this.view.tbxPin3.text = '';
    this.view.tbxPin4.text = '';
    this.view.tbxPin5.text = '';
    this.view.tbxPin6.text = '';
    this.view.tbxPin7.text = '';
    this.view.tbxPin8.text = '';
    this.view.tbxPinReset1.text = '';
    this.view.tbxPinReset2.text = '';
    this.view.tbxPinReset3.text = '';
    this.view.tbxPinReset4.text = '';
    this.initialSkins();
  },

  initialSkins: function(){
    this.view.lblPin1.skin='sknAHBLined3d3d3';
    this.view.lblPin2.skin='sknAHBLined3d3d3';
    this.view.lblPin3.skin = 'sknAHBLined3d3d3';
    this.view.lblPin4.skin = 'sknAHBLined3d3d3';
    this.view.lblPin5.skin = 'sknAHBLined3d3d3';
    this.view.lblPin6.skin='sknAHBLined3d3d3';
    this.view.lblPin7.skin='sknAHBLined3d3d3';
    this.view.lblPin8.skin='sknAHBLined3d3d3';
    this.view.lblPinReset1.skin = 'sknAHBLined3d3d3';
    this.view.lblPinReset2.skin = 'sknAHBLined3d3d3';
    this.view.lblPinReset3.skin = 'sknAHBLined3d3d3';
    this.view.lblPinReset4.skin = 'sknAHBLined3d3d3';
    this.view.btnConfirm.skin="sknAHBGscB16ptBeaeaeaTffffffRounded";
  },

  onBackFrmAHBRegCreatePin: function() { 
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmAHBRegConfirmOTP"); 
    //this.initializeTextBox();
  },

  populatePin : function(inputFlx,inputUiFlx,section){

    var currLength;
    var navMan=applicationManager.getNavigationManager();
    var entry =  navMan.getEntryPoint("resetPin");
    if(section ==="flxCreatePin"){

      this.newPin = this.view.tbxPin.text ? this.view.tbxPin.text.trim() : "";
      currLength = this.newPin.length;
    }else if(section ==="flxReEnterPin"){

      this.rePin = this.view.tbxPinX.text ? this.view.tbxPinX.text.trim() : "";
      currLength = this.rePin.length;
    }else if(section ==="flxPinReset"){
      this.currentPin = this.view.tbxResetPin.text ? this.view.tbxResetPin.text.trim() : "";
      currLength = this.currentPin.length;
    }

    var widgetsDots = this.view[inputFlx].widgets();
    var widgetsUnderlines = this.view[inputUiFlx].widgets();

    var maxLength = widgetsDots.length;

    for(var i = 0; i < widgetsDots.length; i++){
      if(i < currLength){

        widgetsDots[i].text = " ";
      }
      else{
        widgetsDots[i].text =  "";
      }	
      widgetsUnderlines[i].skin = "sknAHBLined3d3d3";

    }

    var redSkinWidgetColumn = (currLength === maxLength) ? currLength : currLength + 1 ;
    widgetsUnderlines[redSkinWidgetColumn - 1].skin = "sknAHBBff6d00";

     if(entry === "frmSettings"){
      if((this.currentPin.length === 4)&& (this.newPin.length != 4) ){
        this.view.lblPinReset4.skin = "sknAHBLined3d3d3";
        this.view.tbxPin.setFocus(true);
        if(this.newPin.length===1){
          this.view.lblPin1.skin="sknAHBLined3d3d3";
        }else if(!this.newPin.length){
          this.view.lblPin1.skin="sknAHBBff6d00";
        } 
      }else if((this.newPin.length === 4) && (this.currentPin.length === 4)){
        this.view.lblPin4.skin = "sknAHBLined3d3d3";
        this.view.lblPin5.skin="sknAHBBff6d00";
        this.view.tbxPinX.setFocus(true);
        if(this.rePin.length >= 1){
          this.view.lblPin5.skin="sknAHBLined3d3d3";
          if(this.rePin.length === 4){
             this.view.lblEnterNewPin.setFocus(true);
             }
        }else if(!this.rePin.length){
          this.view.lblPin5.skin="sknAHBBff6d00";
        }
      }
    }else{
    if(this.newPin.length === 4){
      this.view.lblPin4.skin = "sknAHBLined3d3d3";
      this.view.tbxPinX.setFocus(true);
       if(this.rePin.length===1){
          this.view.lblPin5.skin="sknAHBLined3d3d3";
      }else if(!this.rePin.length){
          this.view.lblPin5.skin="sknAHBBff6d00";
        }
      }
    }
    kony.print("i want newPin=="+this.newPin);
    kony.print("i want eewPin=="+this.rePin);
    kony.print("i want currentPin=="+this.currentPin);
        var pinValues = {
          "newPin" : this.newPin,
          "currentPin" : this.currentPin
        };
        navMan.setCustomInfo("resetPin",pinValues);
  
    if(entry === "frmSettings"){
      if(this.currentPin.length === 4){
      this.view.lblPinReset4.skin = "sknAHBLined3d3d3";
    }
    }else{
    if(this.rePin.length === 4){
      this.view.lblPin8.skin = "sknAHBLined3d3d3";
    }
    }
    if(entry === "frmSettings"){
      if(this.currentPin.length === 4 && this.newPin.length === 4 && this.rePin.length === 4){ 
        if(this.newPin === this.rePin){
          this.view.btnConfirm.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
          this.view.btnConfirm.focusSkin="sknAHBGsc16ptBff6d00TffffffBr21pt";
          this.view.lblPin8.skin = "sknAHBLined3d3d3";
          this.view.lblRePin.setFocus(true);
          this.view.btnConfirm.setEnabled(true);
        }else{
          this.view.tbxPinReset1.setFocus(true);
          this.bindMpinError(kony.i18n.getLocalizedString("kony.AHB.ALERT.BothPinDoNotMatch"));
        }

      }else{
        this.view.btnConfirm.skin ="sknAHBGscB16ptBeaeaeaTffffffRounded";
        this.view.btnConfirm.focusSkin ="sknAHBGscB16ptBeaeaeaTffffffRounded";
        this.view.btnConfirm.setEnabled(false);
      }
    }
    else{
    if(this.newPin.length === 4 && this.rePin.length === 4 ){ 
      if(this.newPin === this.rePin){
        this.view.btnConfirm.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
        this.view.btnConfirm.focusSkin="sknAHBGsc16ptBff6d00TffffffBr21pt";
        this.view.btnConfirm.setEnabled(true);
      }else{
        this.bindMpinError(kony.i18n.getLocalizedString("kony.AHB.ALERT.BothPinDoNotMatch"));
      }
      
    }else{
      this.view.btnConfirm.skin ="sknAHBGscB16ptBeaeaeaTffffffRounded";
      this.view.btnConfirm.focusSkin ="sknAHBGscB16ptBeaeaeaTffffffRounded";
      this.view.btnConfirm.setEnabled(false);
      }
    }
  },

  landingPreshow: function(){
    var navMan=applicationManager.getNavigationManager();
    var entry =  navMan.getEntryPoint("resetPin");
    this.initActions();
   	this.initialSkins();
    this.DefeaultData();
    this.setUIForcurrentPin();
      if(entry === "frmSettings"){
      this.setUIForcurrentPin();
      this.setTextBoxPinFocus("flxPinReset");
      this.view.tbxResetPin.setFocus(true);
      this.view.tbxPinReset1.setFocus(true);
    }else{
    this.setTextBoxPinFocus("flxCreatePin");
      this.view.tbxResetPin.setFocus(false);
      this.view.tbxPinReset1.setFocus(false);
    }

  },
  studioActions: function(){
	//this.view.MainHeader.flxBack.onClick = this.onBackFrmAHBRegCreatePin;
    //this.view.MainHeader.btnBack.onClick = this.onBackFrmAHBRegCreatePin;
  },
  DefeaultData:function(){
   
    this.view.tbxPin.text = "";
    this.view.tbxPinX.text = "";
    this.view.tbxResetPin.text = "";
    this.newPin = "";
    this.rePin = "";
    this.currentPin = "";
    this.view.tbxPin1.setEnabled(false);
    this.view.tbxPin2.setEnabled(false);
    this.view.tbxPin3.setEnabled(false);
    this.view.tbxPin4.setEnabled(false);
    this.view.tbxPin5.setEnabled(false);
    this.view.tbxPin6.setEnabled(false);
    this.view.tbxPin7.setEnabled(false);
    this.view.tbxPin8.setEnabled(false);
    this.view.tbxPinReset1.setEnabled(false);
    this.view.tbxPinReset2.setEnabled(false);
    this.view.tbxPinReset3.setEnabled(false);
    this.view.tbxPinReset4.setEnabled(false);
    this.initializeTextBox();
    

  },


  setTextBoxPinFocus:function(section){
    kony.print("section=="+section);
    if(section === "flxCreatePin"){
      this.populatePin("flxTextPin","flxPin",section);
      var widgetsUnderlines = this.view.flxRePinIndecator.widgets();
      for(var i =0 ; i<4; i++){
        widgetsUnderlines[i].skin = "sknAHBLined3d3d3";
      }
      this.view.tbxPin.setFocus(true);
      if(this.newPin.length === 4){
        this.view.lblPin4.skin = "sknAHBBff6d00";
      }
    }else if(section === "flxReEnterPin"){
      this.populatePin("flxRePinText","flxRePinIndecator",section);
      var widgetsUnderlines = this.view.flxPin.widgets();
      for(var i =0 ; i<4; i++){
        widgetsUnderlines[i].skin = "sknAHBLined3d3d3";
      }
      this.view.tbxPinX.setFocus(true);
      if(this.rePin.length === 4){
        this.view.lblPin8.skin = "sknAHBBff6d00";
      }
    }else if(section === "flxPinReset"){
      kony.print("enetered ")
      this.populatePin("flxResetPin","flxPinResetSeparator",section);
      var widgetsUnderlines = this.view.flxRePinIndecator.widgets();
      for(var i =0 ; i<4; i++){
        widgetsUnderlines[i].skin = "sknAHBLined3d3d3";
      }
      this.view.tbxResetPin.setFocus(true);
      if(this.currentPin.length === 4){
        this.view.lblPinReset4.skin = "sknAHBBff6d00";
        this.view.lblPin1.skin = "sknAHBLined3d3d3";

      }
    }
  },
  
  bindMpinError: function(err){
    var scope = this;
    var navMan=applicationManager.getNavigationManager();
    var entry =  navMan.getEntryPoint("resetPin");
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err); 
    this.DefeaultData();
    this.initializeTextBox();
    if(entry === "frmSettings"){
      this.setTextBoxPinFocus("flxPinReset");
    }else{
    this.setTextBoxPinFocus("flxCreatePin");
    }

  },
  /*
  @Purpose Sets UI for reset PIN Flow
  @Params NA
  @Returns Nothing
  */
  setUIForcurrentPin: function(){
    var navMan=applicationManager.getNavigationManager();
    var entry =  navMan.getEntryPoint("resetPin");
    if(entry === "frmSettings"){
    this.view.MainHeader.flxBack.setVisibility(true);
    this.view.flxPageProgress.setVisibility(false);
    this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.AHB.Login.LoginPin");
    this.view.lblCreatePin.text = kony.i18n.getLocalizedString("kony.mb.cardManage.EnterNewPin");
    this.view.lblRePin.text = kony.i18n.getLocalizedString("kony.ahb.settings.confirmNewPin");
    this.view.flxPinReset.setVisibility(true);
    this.view.btnConfirm.text = kony.i18n.getLocalizedString("kony.mb.cardManage.changePIN");
    this.view.btnConfirm.top= "21%";
    this.view.flxCreatePin.top = "6%";
    }else{
    this.view.MainHeader.flxBack.setVisibility(false);
    this.view.flxPageProgress.setVisibility(true);
    this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.Registration.RegistrationHeading");
    this.view.lblCreatePin.text = kony.i18n.getLocalizedString("kony.AHB.Login.CreateMobileAppPin");
    this.view.lblRePin.text = kony.i18n.getLocalizedString("kony.AHB.Login.ReenterMobileAppPIN");
    this.view.flxPinReset.setVisibility(false);
    this.view.btnConfirm.text = kony.i18n.getLocalizedString("kony.AHB.Login.confirm");
    this.view.btnConfirm.top= "8%";
    this.view.flxCreatePin.top = "2%";     
    }
  },
   /*
  @Purpose To trigger authentication process after user enters pin to be reset
  */
  authenticateResetPin : function(){
    kony.print("entered authenticateResetPin");
    this.view.onDeviceBack = this.onDeviceBackClick;
    this.view.lblEnterNewPin.setFocus(true);
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      var bioMetricParam ={
      "flowScope":this,
      "container":"flxMain",
      "otpCallBack":this.sendOTP,
      "onConfirmationCallback":this.callcurrentPin,
      "promptMessage": "Confirm to reset pin"
    } ;	
    authMode.presentationController.bioMetricVerification(bioMetricParam);
  },

  /*
  @Purpose executes on click of device back
  */
  onDeviceBackClick :  function(){
    kony.print("onDeviceBackClick");
  },
   /*
  @Purpose To trigger OTP generation and validation 
  */
  sendOTP : function(){
    kony.print("entered sendOTP" );
    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("generateOTP","mobilePinReset");
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    transferModule.presentationController.triggerOtp();
  },
  /*
  @Purpose To call reset pin service
  */
  callcurrentPin : function(){
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var navManager = applicationManager.getNavigationManager();
    var pin = navManager.getCustomInfo("resetPin");
    kony.print("resetPin=="+JSON.stringify(pin));
    kony.print("pin.newPin==="+pin.newPin);
     var record= {
      currentPin: pin.currentPin,
      newPin: pin.newPin,
      otp:""
    };
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.callResetPin(record);
  },
   /*
  @Purpose To cancel the Biometric Authentication
  */
  customAlertPopUpFlxCancelOnClick:function(){
    kony.print("entered customAlertPopUpFlxCancelOnClick");
    this.view.onDeviceBack= this.flxBackOnClick;
    this.view.customAlertPopUp.setVisibility(false);
    this.view.flxMain.setEnabled(true);
    kony.localAuthentication.cancelAuthentication();
  },
 /*
 @Purpose To go back 
 */ 
   flxBackOnClick: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
   bindGenericError:function(errorMsg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },
});