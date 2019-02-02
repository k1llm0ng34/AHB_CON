define({
    timerCounter: 0,
    init: function() {
        this.initActions();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        var swiftCode = transferModule.presentationController.getSwiftCode();
        this.view.txtSwiftCode.setFocus(true);
        if (swiftCode) {
            this.view.txtSwiftCode.text = swiftCode;
        } else {
            this.view.txtSwiftCode.text = "";
            this.disableContinueButton();
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.txtSwiftCode.onTextChange = scope.navigateToAccountNumber;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.btnContinue.onClick = function() {
            var swiftCode = scope.view.txtSwiftCode.text;
            var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
            var isValidSwiftCode = transferModule.presentationController.isValidSwiftCode(swiftCode, "frmBenSwiftCode");
            if (isValidSwiftCode) {
                transferModule.presentationController.navigateToEnterBenificiaryAccountNumberFromSwiftCode(swiftCode);
            }
        };
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("createInternalBankBenificiary");
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transferMod.presentationController.commonFunctionForNavigation(navigateToForm);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    navigateToAccountNumber: function() {
        var swiftCode = this.view.txtSwiftCode.text;
        if (swiftCode.length > 0) {
            this.enableContinueButton();
        } else {
            this.disableContinueButton();
        }
    },
    enableContinueButton: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    disableContinueButton: function() {
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});