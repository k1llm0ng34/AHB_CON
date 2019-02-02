define({

    timerCounter:0,
    keypadString: '',
  	init:function(){
    	this.initActions();
  	},
    frmPreshow: function() {
        this.keypadString = '';
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
		var accountNumber=transferModule.presentationController.getReEnteredAccountNumber();
      	if(accountNumber){
          this.keypadString=accountNumber; 
          this.enterCodePostAction();
	    }
      	else{	
        	this.incompleteCodeView();
        }
        this.updateInputBullets("flxReInputAccNo");
        var navManager = applicationManager.getNavigationManager();
    	var currentForm=navManager.getCurrentForm();
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	applicationManager.getPresentationFormUtility().logFormName(currentForm);
        this.renderTitleBar();
        //this.view.customHeader.btnRight.onClick=this.flxBackOnClick;
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
    btnContinueOnClick: function() {
      	var match=false;
        var reEneterdAccountNumber=this.keypadString;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    	var benificiaryData=transferModule.presentationController.getBenificiaryData();
      	var initialAccountNumber=benificiaryData.accountNumber;
      	if(initialAccountNumber===reEneterdAccountNumber){
        	match=true;
        }
      	else{
          	match=false;
        }
      	if(match){
      		var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
            var isValidAccNo=transferModule.presentationController.isValidAccNum(reEneterdAccountNumber,"frmReEnterBenAccNo");
      		if(isValidAccNo){
				transferModule.presentationController.navigateToAccountType(reEneterdAccountNumber);
      		}
		}
		else{
        	this.showErrorPopup(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardless.wrongAccountNumberMessage"));
          	this.keypadString = '';
          	this.updateInputBullets("flxReInputAccNo");
          	this.incompleteCodeView();
      	}
    },
    flxBackOnClick: function() {
      	var navMan=applicationManager.getNavigationManager();
     	navMan.goBack();
    },
    setKeypadChar: function(char) {

        this.keypadString = this.keypadString + char;
        if (this.keypadString.length > 0 && this.keypadString.length < 17) {
            this.enterCodePostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        } else if (this.keypadString.length > 16) {
            this.keypadString = this.keypadString.slice(0, 16);
            return;
        }
        this.updateInputBullets("flxReInputAccNo");
    },
	showErrorPopup:function(errorMsg){
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    
  	},

    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets("flxReInputAccNo");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets("flxReInputAccNo");
        }
        if (this.keypadString.length < 1) {
           this.incompleteCodeView();
        }
    },
    updateInputBullets: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            // widgets[i].skin = "sknLbl484848sspReg50px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            //widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    },
    enterCodePostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    incompleteCodeView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
	onClickCancel: function() {
      	applicationManager.getPresentationUtility().showLoadingScreen();
      	var navManager = applicationManager.getNavigationManager();	
      	var navigateToForm=navManager.getEntryPoint("createInternalBankBenificiary");
      	var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      	transferMod.presentationController.commonFunctionForNavigation(navigateToForm);
	},
    	bindGenericError: function (errorMsg) {
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	var scopeObj = this;
    	applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  	}
});