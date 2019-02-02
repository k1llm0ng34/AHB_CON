define({
    popupMsg: '',
    timerCounter: 0,
    onNavigate: function(obj) {
        if (obj === undefined) {
            var newObj = {
                "popup": "none"
            };
            obj = newObj;
        }
        if (obj.popup === "successAddRecipient") {
            this.popupMsg = kony.i18n.getLocalizedString("kony.mb.p2p.successAddRecipient");
        }
        if (obj.popup === "none") {
            this.popupMsg = '';
        }
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (this.view.flxHeaderSearchbox.isVisible === true) {
            this.view.flxHeaderSearchbox.isVisible = false;
            this.view.flxSearch.isVisible = true;
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        }
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxFooter.isVisible = true;
        } else {
            this.view.flxFooter.isVisible = false;
        }
        this.setSegmentData();
        this.initActions();
        this.P2PEntitlement();
        if ((this.popupMsg !== null) && (this.popupMsg !== '')) {
            this.showPopupSuccess();
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        var configManager = applicationManager.getConfigurationManager();
        var MenuHandler = applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(scope, configManager.constants.MENUTRANSFERS);
        this.view.tbxSearch.onTouchEnd = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.cancelSearch;
        this.view.flxPayAPerson.onClick = this.flxPayAPersonOnClick;
        //		this.view.segTransactions.onRowClick=this.segTransactionsOnRowClick;
        this.view.flxManage.onClick = function() {
            var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
            transferMod.presentationController.commonFunctionForNavigation("frmManageRecipientType");
        }
    },
    P2PEntitlement: function() {
        var configManager = applicationManager.getConfigurationManager();
        if (configManager.getConfigurationValue("ispayAPersonEnabled") !== "true") {
            this.view.flxPayAPerson.setVisibility(false);
            this.view.flxMakeTransfer.left = "50dp";
            this.view.flxManage.right = "50dp";
            return;
        }
    },
    segTransactionsOnRowClick: function(selectedRowIndex, selectedSectionIndex) {
        //   segTransactionsOnRowClick:function(){
        var navMan = applicationManager.getNavigationManager();
        //    var   selectedSectionIndex = sec;
        //       var selectedRowIndex = row;
        //    var selectedSectionIndex=Math.floor(this.view.segTransactions.selectedRowIndex[0]);
        //   var selectedRowIndex=Math.floor(this.view.segTransactions.selectedRowIndex[1]);
        var transactionData = this.view.segTransactions.data[selectedSectionIndex][1][selectedRowIndex];
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
        transMod.presentationController.setEntryPoints(transactionData.transactionType);
        navMan.setCustomInfo("frmTransactionDetails", transactionData);
        navMan.setEntryPoint("frmTransactionDetails", "Transfers");
        transMod.presentationController.commonFunctionForNavigation("frmTransactionDetails");
    },
    setSegmentData: function() {
        var pendingaccounts = [],
            pendingaccounts = [];
        var navMan = applicationManager.getNavigationManager();
        // var configManager = applicationManager.getConfigurationManager();
        var forUtility = applicationManager.getFormatUtilManager();
        var transactions = navMan.getCustomInfo("frmTransfers");
        if (transactions) {
            if (transactions.res !== undefined && transactions.res !== null) {
                if (transactions.type == "error") this.showErrorPopup(transactions.res);
                else this.showSuccessPopup(transactions.res, transactions.typeOfTransaction);
            }
            transactions.res = null;
            navMan.setCustomInfo("frmTransfers", transactions);
            var postedTransaction = transactions.postedTransaction;
            var scheduledTransactions = transactions.scheduledTransactions;
            this.view.segTransactions.widgetDataMap = {
                lblTransaction: "description",
                lblDate: "scheduledDate",
                lblAmount: "amount",
                transactionId: "transactionId",
                lblAccount: "fromAccountName",
                lblHeader: "lblHeader",
                imgAccount: "image"
            };
            if (postedTransaction.length > 0 && scheduledTransactions.length > 0) {
                var data = [
                    [{
                        "lblHeader": "Scheduled Transactions"
                    }, scheduledTransactions],
                    [{
                        "lblHeader": "Posted Transactions"
                    }, postedTransaction]
                ];
                this.segmentData = data;
                this.view.segTransactions.setData(data);
                this.pendingaccounts = this.view.segTransactions.data[0][1];
                this.postedaccounts = this.view.segTransactions.data[1][1];
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
            } else if (scheduledTransactions.length > 0) {
                var data = [
                    [{
                        "lblHeader": "Scheduled Transactions"
                    }, scheduledTransactions]
                ];
                this.segmentData = data;
                this.view.segTransactions.setData(data);
                this.pendingaccounts = this.view.segTransactions.data[0][1];
                this.postedaccounts = [];
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
            } else if (postedTransaction.length > 0) {
                var data = [
                    [{
                        "lblHeader": "Posted Transactions"
                    }, postedTransaction]
                ];
                this.segmentData = data;
                this.view.segTransactions.setData(data);
                this.postedaccounts = this.view.segTransactions.data[0][1];
                this.pendingaccounts = [];
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
            } else {
                this.segmentData = [];
                this.pendingaccounts = [];
                this.postedaccounts = [];
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        }
    },
    showSearch: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "0dp";
            } else {
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.flxSearch.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.customSearchbox.tbxSearch.text = "";
                this.view.customSearchbox.tbxSearch.setFocus(true);
                this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
            }
        } else {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
                this.view.flxGradient.top = "56dp";
            } else {
                this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxGradient.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.text = "";
                this.view.customSearchbox.tbxSearch.setFocus(true);
                this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
            }
        }
    },
    cancelSearch: function() {
        this.view.flxHeaderSearchbox.isVisible = false;
        this.view.flxSearch.isVisible = true;
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        } else {
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        }
        if (this.segmentData.length > 0) {
            this.view.segTransactions.setData(this.segmentData);
            this.view.segTransactions.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
        } else {
            this.view.segTransactions.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
            // this.view.flxHeaderNT.isVisible = false;
        }
    },
    flxPayAPersonOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.setEntryPoint("payaperson", "frmTransfers");
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.getAllPayees();
        var P2P = applicationManager.getLoggerManager();
        P2P.setCustomMetrics(this, false, "P2P");
    },
    showPopupSuccess: function() {
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupSuccess" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = this.popupMsg;
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
        }, 3, false);
    },
    maketransferOnclick: function() {
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.transfersModule();
        var Transfers = applicationManager.getLoggerManager();
        Transfers.setCustomMetrics(this, false, "Transfers");
    },
    showSuccessPopup: function(refID, type) {
        // TO DO i18n's
        var msg;
        if (type === "delete") {
            msg = "Transaction was cancelled successfully with reference ID : " + (refID.transactionId || refID.refernceId);
        } else {
            if (refID.referenceId) msg = "Transaction was done successfully with transaction ID : " + refID.referenceId;
            else msg = "Transaction was edited successfully with reference ID : " + refID.transactionId;
        }
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    },
    showErrorPopup: function(err) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, JSON.stringify(err));
    },
    tbxSearchOnTextChange: function() {
        var navObj = applicationManager.getNavigationManager();
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        if (searchtext) {
            var data = [],
                headers = [];
            var lblPendingTranHeader = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions");
            var lblPostedTranHeader = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions");
            headers.push(lblPendingTranHeader);
            headers.push(lblPostedTranHeader);
            data.push(this.pendingaccounts);
            data.push(this.postedaccounts);
            this.view.segTransactions.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
            this.view.segTransactions.removeAll();
            var searchobj = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("description", searchtext, data, headers);
            if (searchobj.length > 0) {
                if (searchobj[0][0].lblHeader === "Pending Transactions") searchobj[0][0].lblHeader = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.scheduledTransactions");
                this.view.segTransactions.setData(searchobj);
            } else {
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        } else {
            if (this.segmentData.length > 0) {
                this.view.segTransactions.setData(this.segmentData);
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
            } else {
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
                // this.view.flxHeaderNT.isVisible = false;
            }
        }
    },
});