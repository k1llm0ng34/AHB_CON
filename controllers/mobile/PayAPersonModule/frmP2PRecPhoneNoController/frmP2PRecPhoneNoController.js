define({
    keypadString: '',
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    frmPreShow: function() {
        var scope = this; 
        this.setDataToForm();
        this.updateInputBullets("flxInputPhoneNo");
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.view.btnPickFromContacts.onClick = this.btnPickFromContactsOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.renderTitleBar();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
     flxBackOnClick: function() {
      	var navManager = applicationManager.getNavigationManager();	
		navManager.goBack();
    },
    btnPickFromContactsOnClick: function() {
      try{
        applicationManager.getPresentationUtility().showLoadingScreen();
        var array=kony.contact.find("*", true);      
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmP2PPickContact",array);
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.commonFunctionForNavigation("frmP2PPickContact");
      }
      catch(err){
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardLess.permissionContacts"));
      }
    },
    btnContinueOnClick: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.navigateToP2PRecipientNamefromPhoneNo("frmP2PRecipientName",this.keypadString.replace(/[()-]/g,"")); 
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length === 13) {
            this.enterPostAction();
        } else if (this.keypadString.length < 13) {
            this.incompleteView();
        } else if (this.keypadString.length > 13) {
            this.keypadString = this.keypadString.slice(0, 13);
            return;
        }
        this.updateInputBullets("flxInputPhoneNo");
    },

    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '(';
            this.updateInputBullets("flxInputPhoneNo");
        }
        if (this.keypadString.length !== 0) {
            if ((this.keypadString.length === 5) || (this.keypadString.length === 9)) {
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 2);
            } else {
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            }
            if (this.keypadString.length < 13) {
                this.incompleteView();
            }
            this.updateInputBullets("flxInputPhoneNo");
        }
    },
    updateInputBullets: function(inputFlx) {
        var dummyString = '(___)___-____';
        //         if(this.keypadString.length===1||this.keypadString.length===5||this.keypadString.length===9){
        //             this.keypadString = this.keypadString.substr(0, this.keypadString.length-1);
        //         }
        if (this.keypadString.length === 8) {
            this.keypadString = this.keypadString + '-';
        } else if (this.keypadString.length === 0) {
            this.keypadString = this.keypadString + '(';
        } else if (this.keypadString.length === 4) {
            this.keypadString = this.keypadString + ')';
        }

        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            // widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            //widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = dummyString[i];
        }
        this.view.forceLayout();
    },
    incompleteView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
    enterPostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
	onClickCancel: function() {     
    var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    p2pMod.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
    },
  setDataToForm : function(){
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var recipientData=payeeMod.presentationController.getP2PPayeeDetails();
    var phoneNum=recipientData.phone;
    if(phoneNum && phoneNum.length>6){
      this.keypadString="("+phoneNum.substr(0,3)+")"+phoneNum.substr(3,3)+"-"+phoneNum.substr(6,4);
      this.enterPostAction();
    }
    else if(phoneNum && phoneNum.length<=6){
      this.keypadString="("+phoneNum.substr(0,3)+")"+phoneNum.substr(3,3);
      this.enterPostAction();
    }
    else{
      this.keypadString = '(';
      this.incompleteView();
    }
  },
  bindGenericError : function(msg){
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  	}
});