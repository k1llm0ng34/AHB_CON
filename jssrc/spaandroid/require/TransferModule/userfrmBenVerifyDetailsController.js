define({
    timerCounter: 0,
    init: function() {
        this.initActions();
    },
    frmPreShow: function() {
        this.renderTitleBar();
        this.populateDetails();
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
        this.view.btnContinue.onClick = scope.btnContinueOnClick;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    btnRightOnClick: function() {},
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnContinueOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        var benificiaryData = transferModule.presentationController.getBenificiaryData();
        var nickName = this.view.txtAccNickName.text;
        if (nickName === "" || nickName === null || nickName === undefined) {
            nickName = benificiaryData.beneficiaryName;
        }
        transferModule.presentationController.setNickName(nickName);
        transferModule.presentationController.setIsVerified(true);
        if (transferModule.presentationController.getFlowType() === "InternationalRecipients" || transferModule.presentationController.getFlowType() === "InternationalTransferCreateTransfer") {
            transferModule.presentationController.setIsInternationalAccount(true);
            transferModule.presentationController.setIsSameBankAccount(false);
            transferModule.presentationController.setBankName(this.view.lblBankNameValue.text);
            transferModule.presentationController.createInternationalBenificiary();
        } else {
            transferModule.presentationController.setIsInternationalAccount(false);
            if (transferModule.presentationController.getFlowType() === "SameBankRecipients" || transferModule.presentationController.getFlowType() === "OtherKonyBankMembersCreateTransfer") {
                transferModule.presentationController.setIsSameBankAccount(true);
                transferModule.presentationController.setBankName(this.view.lblBankNameValue.text);
                transferModule.presentationController.createInternalBenificiary();
            } else {
                transferModule.presentationController.setIsSameBankAccount(false);
                transferModule.presentationController.setBankName(this.view.lblBankNameValue.text);
                transferModule.presentationController.createExternalBenificiary(benificiaryData);
            }
        }
    },
    populateDetails: function() {
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        var benificiaryData = transferModule.presentationController.getBenificiaryData();
        var bankName = transferModule.presentationController.getBankName();
        var accountNumber = JSON.parse(JSON.stringify(benificiaryData.accountNumber));
        var maskedAccountNumber = applicationManager.getDataProcessorUtility().maskAccountNumber(accountNumber);
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        if (transferModule.presentationController.getFlowType() === "InternationalRecipients" || transferModule.presentationController.getFlowType() === "InternationalTransferCreateTransfer") {
            this.view.lblAccHolderValue.text = benificiaryData.beneficiaryName;
            this.view.lblAccNoValue.text = maskedAccountNumber;
            this.view.lblAccTypeVal.text = benificiaryData.accountType;
            this.view.flxRoutingNo.setVisibility(true);
            this.view.flxBankName.isVisible = true;
            this.view.lblBankNameValue.isVisible = true;
            this.view.lblRoutingNo.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.SwiftCode");
            this.view.lblBankNameValue.text = "Chase Bank";
            this.view.lblCardIssueDateVal.text = benificiaryData.swiftCode;
            this.view.txtAccNickName.text = benificiaryData.beneficiaryName;
            this.view.flxBankLocation.isVisible = true;
            this.view.lblBankLocationValue.text = benificiaryData.countryName;
        } else {
            if (transferModule.presentationController.getFlowType() === "SameBankRecipients" || transferModule.presentationController.getFlowType() === "OtherKonyBankMembersCreateTransfer") {
                this.view.lblAccHolderValue.text = benificiaryData.beneficiaryName;
                this.view.lblAccNoValue.text = maskedAccountNumber;
                this.view.lblAccTypeVal.text = benificiaryData.accountType;
                this.view.lblBankNameValue.text = bankName;
                this.view.flxRoutingNo.setVisibility(false);
                this.view.txtAccNickName.text = benificiaryData.beneficiaryName;
                this.view.flxBankLocation.isVisible = false;
            } else {
                this.view.lblAccHolderValue.text = benificiaryData.beneficiaryName;
                this.view.lblAccNoValue.text = maskedAccountNumber;
                this.view.lblAccTypeVal.text = benificiaryData.accountType;
                this.view.flxRoutingNo.setVisibility(true);
                this.view.lblRoutingNo.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.RoutingNumber");
                this.view.flxBankName.isVisible = true;
                this.view.lblBankNameValue.isVisible = true;
                this.view.lblBankNameValue.text = "Chase Bank";
                this.view.lblCardIssueDateVal.text = benificiaryData.routingNumber;
                this.view.txtAccNickName.text = benificiaryData.beneficiaryName;
                this.view.flxBankLocation.isVisible = false;
            }
        }
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("createInternalBankBenificiary");
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transferMod.presentationController.commonFunctionForNavigation(navigateToForm);
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});