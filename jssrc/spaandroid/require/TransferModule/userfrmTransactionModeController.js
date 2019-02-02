define({
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.setSegmentData();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.segTransactionMode.onRowClick = function() {
                scope.segmentRowClick();
            }
            // this.view.btnTemp.onClick = function(){
            // }
    },
    segmentRowClick: function() {
        var type = this.view.segTransactionMode.data[this.view.segTransactionMode.selectedIndex[1]].lblTransactionMode;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var  transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.transactionMode = type;
        transMod.presentationController.showAccounts(type);
    },
    backNavigation: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    setSegmentData: function() {
        var data = [];
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        if (transferMod.presentationController.isEligibleTransferType("isKonyBankAccountsTransfer") == "true") data.push({
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccountsInfo"),
            "imgArrow": "chevron.png"
        });
        //,{
        //  "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyOtherAccounts"),
        //"lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyOtherAccountsInfo"),
        //"imgArrow":"chevron.png"
        //},
        if (transferMod.presentationController.isEligibleTransferType("isOtherKonyAccountsTransfer") == "true") data.push({
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembersInfo"),
            "imgArrow": "chevron.png"
        });
        if (transferMod.presentationController.isEligibleTransferType("isOtherBankAccountsTransfer") == "true") data.push({
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccountsInfo"),
            "imgArrow": "chevron.png"
        });
        if (transferMod.presentationController.isEligibleTransferType("isInternationalAccountsTransfer") == "true") data.push({
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransferInfo"),
            "imgArrow": "chevron.png"
        });
        //,
        //{
        //  "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.WireTransfer"),
        //"lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.WireTransferInfo"),
        //"imgArrow":"chevron.png"
        //}
        this.view.segTransactionMode.setData(data);
    }
});