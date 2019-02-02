define({
    keypadString: '',
    timerCounter: 0,
    showEnterAccNumber: function() {
        var scope = this;
        this.keypadString = '';
        this.incompleteAccNoView();
        this.updateInputBullets("flxInputAccNumber");
        this.view.btnVerify.onClick = function() {
            //alert(scope.keypadString);
            scope.onBtnVerifyClick();
            var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
            enrollMod.presentationController.commonFunctionForNavigation("frmEnrollSSn");
        };
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length === 12) {
            this.enterAccNoPostAction();
        } else if (this.keypadString.length < 12) {
            this.incompleteAccNoView();
        } else if (this.keypadString.length > 12) {
            this.keypadString = this.keypadString.slice(0, 12);
            return;
        }
        this.updateInputBullets("flxInputAccNumber");
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets("flxInputAccNumber");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length <= 11) {
                this.incompleteAccNoView();
            }
            this.updateInputBullets("flxInputAccNumber");
        }
    },
    updateInputBullets: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            // widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            //widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    },
    enterAccNoPostAction: function() {
        this.view.btnVerify.setEnabled(true);
        this.view.btnVerify.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.lblCheckingAccount.setVisibility(true);
        this.view.lblAccountType.setVisibility(true);
        this.view.flxEnterAccNo.forceLayout();
    },
    incompleteAccNoView: function() {
        this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnVerify.setEnabled(false);
        this.view.lblCheckingAccount.setVisibility(false);
        this.view.lblAccountType.setVisibility(false);
        this.view.flxEnterAccNo.forceLayout();
    },
    //Development
    onBtnVerifyClick: function() {
        var accountNumber = this.getAccountNumber();
        var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollModule.presentationController.updateAccountNumber(accountNumber);
    },
    getAccountNumber: function() {
        var accountNumber = "";
        var length = 12;
        for (var i = 1; i <= length; i++) {
            var digit = this.view["lblAccNoDigit" + i]["text"];
            accountNumber = accountNumber + digit;
        }
        return accountNumber;
    }
});