define({ 
  selectedSection: "", 
  cardNumber: 0,
  cardPin:'',
  newPin:'',
  CreditCardNo: '',
  timerCounter:0,
  
   init: function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);	
  },

  CaptureDetails: function(){
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var navigationManager = applicationManager.getNavigationManager();
     var configManager = applicationManager.getConfigurationManager();
     var infoFrmAHBLanding = navigationManager.getCustomInfo("frmAHBLanding");
    
    var frmLandingController =  applicationManager.getPresentationUtility().getController('frmAHBLanding', true);
    var flow = frmLandingController.getCurrentFlow();
    
    var card = this.CreditCardNo;
    kony.print("card=="+card);
    var pin = this.newPin;
    kony.print("pin=="+pin);
    var deviceInfo = deviceUtilManager.getDeviceInfo();

    var osType = deviceUtilManager.isIPhone() ? deviceInfo.name : "Android"
    
    if(pin.length === 4 && card.length === 16){
      this.view.tbxCardNo1.setFocus(false);
      this.view.tbxPin.setFocus(false);
      this.view.flxMain.setFocus(true);
      this.initialSkins();
      var record = {
        "cifId":infoFrmAHBLanding.cifId,
        "card": this.CreditCardNo,
        "cpin": this.newPin,
        "deviceId": deviceInfo.deviceID,
        "type": navigationManager.getCurrentForm()==='frmAHBRegCardNumber'?configManager.constants.REGISTRATION_TYPE_CARD:"",
        "osType": deviceUtilManager.getDeviceInfo().name,
        "flow": flow,
        "modelName": kony.os.deviceInfo().model
      };
      kony.print(" ##### frmAHBCardNumberController " + JSON.stringify(record))
	  this.view.btnRegisterUsingAccountNumber.setFocus(true);
      kony.print(" ## Request parameter for frmAHBRegCardNumber == "+JSON.stringify(record));
      var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
      authModule.presentationController.validateCardDetails(record);
    }
  },


  onChangeTxtCardNumber : function(eventObj){
    var selectionPos = this.view[eventObj.id].getSelection(); 
    var currLength = this.view[eventObj.id].text.length;
    
    var formattedValue = formattedCardNumber(eventObj.text);
    this.view[eventObj.id].text = formattedValue;  
    if ( this.CreditCardNo !== formattedValue) { 
		this.view[eventObj.id].text = formattedValue; 
		var currentForm = kony.application.getCurrentForm(); 
		currentForm.forceLayout(); 
	} 
    this.CreditCardNo= this.view[eventObj.id].text;
    this.CreditCardNo= this.CreditCardNo.replace(/\s/g, "");

    if(this.CreditCardNo.length === 16 ){  
      this.view.lblCardNoHolder.skin="sknAHBLined3d3d3";     
      this.view.tbxPin.setFocus(true);
      this.setTextBoxPinFocus();
    }else if(formattedValue.length > currLength && selectionPos.startIndex %5 === 0 ){
      this.view[eventObj.id].setSelection(selectionPos.startIndex+1);      
    }else{      
      this.view[eventObj.id].setSelection(selectionPos.startIndex);      
    }
  },

  
  
  initialSkins: function(){
    this.view.lblPin1.skin='sknAHBLined3d3d3';
    this.view.lblPin2.skin = 'sknAHBLined3d3d3';
    this.view.lblPin3.skin = 'sknAHBLined3d3d3';
    this.view.lblPin4.skin = 'sknAHBLined3d3d3';
    this.view.lblCardNoHolder.skin='sknAHBLined3d3d3';
  },

  onBackFrmAHBRegCardNumber: function() { 
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();    
  },

  populatePin : function(){
    this.newPin = this.view.tbxPin.text ? this.view.tbxPin.text.trim() : "";
    var widgetsDots = this.view.flxPinDetails.widgets();
    var widgetsUnderlines = this.view.flxPinLbl.widgets();
    var currLength = this.newPin.length;
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
    // alert("this.newPin " + this.newPin + " currLength " + currLength + " redSkinWidgetColumn " + redSkinWidgetColumn + " maxLength " + maxLength)
    widgetsUnderlines[redSkinWidgetColumn - 1].skin = "sknAHBBff6d00";
    this.CaptureDetails();
  },

  landingPreshow: function(){
    this.studioActions();
    this.DefaultData();
    this.initialSkins();
    this.view.lblCardNoHolder.skin = "sknAHBBff6d00";
    this.forgotPinFlow();
    // alert("working");

  },
  
  /*label skin should be grey color,when focus is not on on pin textbox
  invoking this on endEditing of pin textbox*/
  defaultPinLabelColor: function(){
    this.view.lblPin1.skin = "sknAHBLined3d3d3";
    this.view.lblPin2.skin = "sknAHBLined3d3d3";
    this.view.lblPin3.skin = "sknAHBLined3d3d3";
    this.view.lblPin4.skin = "sknAHBLined3d3d3";
  },
  
  /*label skin should be grey color , when focus is not on cardNo textbox
  invoking this on endEditing of card number textbox*/
  defaultCardNoLabelColor: function(){
    this.view.lblCardNoHolder.skin = "sknAHBLined3d3d3";
   
  },
  
  studioActions: function(){
    //alert("working");
    this.view.tbxPin.onTextChange = this.populatePin;
    this.view.flxCardPin.onClick = this.setTextBoxPinFocus;
    
    this.view.btnRegisterUsingAccountNumber.onClick= function (){
      kony.print("register using card number");
      var navManager = applicationManager.getNavigationManager();
      navManager.navigateTo("frmAHBRegAccountNumber");
    };
    this.view.MainHeader.btnBack.onClick = this.onBackFrmAHBRegCardNumber;
    this.view.MainHeader.flxBack.onClick = this.onBackFrmAHBRegCardNumber;
    this.view.tbxCardNo1.onEndEditing = this.defaultCardNoLabelColor;
    this.view.tbxPin.onEndEditing = this.defaultPinLabelColor;
    this.view.onHide = this.onHideOfCreditCardPage;
  },
  setTextBoxPinFocus:function(){

    this.view.tbxPin.setFocus(true);
    this.populatePin();
  },
  
  onHideOfCreditCardPage : function(){
    kony.print("@@ onHideOfCreditCardPage @@ ");
    var navigationManager = applicationManager.getNavigationManager();
    navigationManager.setCustomInfo("ForgotPin", false);
    this.view.flxPopup.setVisibility(false);
  },
  
  forgotPinFlow:function(){
    var navigationManager = applicationManager.getNavigationManager();
    var ForgotPin = navigationManager.getCustomInfo("ForgotPin");
      if(ForgotPin===true){
      kony.print(" ## ForgotPin ##"+ForgotPin);
      this.forgotPinHeader();
    }
  },
 
  DefaultData:function(){
    //alert("working");
    this.view.tbxPin.text = "";
    this.newPin='';
    this.CreditCardNo = "";
    this.view.tbxCardNo1.text = "";
    this.view.tbxPin1.setEnabled(false);
    this.view.tbxPin2.setEnabled(false);
    this.view.tbxPin3.setEnabled(false);
    this.view.tbxPin4.setEnabled(false);
    this.initialSkins();
   	this.view.tbxCardNo1.setFocus(true);
    this.populatePin();

  },

  forgotPinHeader: function(){
    var scopeObj=this;
     this.timerCounter=parseInt(this.timerCounter)+1;
        var timerId="timerPopupError"+this.timerCounter;
        this.view.flxPopup.skin = "sknFlxf54b5e";
        this.view.customPopup.imgPopup.src = "errormessage.png";
        this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.AHB.Login.RegisterErrorMsg");
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
        }, 5, false);
  },

  bindCardNumberError: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
    this.view.tbxPin.text = "";
    this.newPin='';
    this.setTextBoxPinFocus();

  },

});

