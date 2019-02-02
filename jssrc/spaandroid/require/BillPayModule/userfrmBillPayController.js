define({
    scheduledbills: null,
    postedbills: null,
    pendingbills: null,
    segmentdata: null,
    popupMsg: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
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
    preShow: function() {
        var BillPay = applicationManager.getLoggerManager();
        BillPay.setCustomMetrics(this, false, "Bill Pay");
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxFooter.isVisible = true;
        } else {
            this.view.flxFooter.isVisible = false;
            this.view.flxHeader.isVisible = true;
        }
        this.setFooter();
        this.setSegmentData();
        this.btnCancelOnClick();
        this.initActions();
        if ((this.popupMsg !== null) && (this.popupMsg !== '')) {
            this.showPopupSuccess();
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.showFromAccounts();
    },
    setSegmentData: function() {
        var navMan = applicationManager.getNavigationManager();
        var forUtility = applicationManager.getFormatUtilManager();
        var bills = navMan.getCustomInfo("frmBillPay");
        if (bills) {
            if (bills.res !== undefined && bills.res !== null) {
                if (bills.type == "error") this.showErrorPopup(JSON.stringify(bills.res));
                else this.showSuccessPopup(bills.res, bills.type);
            }
            bills.res = null;
            var scheduledBills = bills.scheduledBills;
            var postedBills = bills.postedBills;
            var pendingBills = bills.pendingBills;
            this.view.segTransactions.widgetDataMap = {
                lblAccountName: "payeeNickName",
                lblBankName: "fromAccountName",
                lblAccountBalValue: "amount",
                lblAccountBal: "showDate",
                lblHeader: "lblHeader",
                transactionId: "transactionId",
                imgebill: "image",
                flxViewBill: "flxViewBill",
                flxBillPay: "flxBillPay",
                lblBillPay: "lblBillPay",
                imgDelete: "imgDelete",
                lblDelete: "lblDelete",
                imgBillPay: "imgBillPay",
                lblAccountNumber: ""
            };
            if (scheduledBills.length == 0 && postedBills.length == 0 && pendingBills.length == 0) {
                // if(scheduledBills.length==0 && postedBills.length==0){
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            } else {
                var data = [];
                if (pendingBills.length > 0) {
                    data.push([{
                        "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.eBill.upcomingEBill")
                    }, pendingBills]);
                    this.pendingbills = pendingBills;
                } else this.pendingbills = [];
                if (scheduledBills.length > 0) {
                    data.push([{
                        "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transaction.ScheduledPayments")
                    }, scheduledBills]);
                    this.scheduledbills = scheduledBills;
                } else this.scheduledbills = [];
                if (postedBills.length > 0) {
                    data.push([{
                        "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions")
                    }, postedBills]);
                    this.postedbills = postedBills;
                } else this.postedbills = [];
                this.segmentdata = data;
                for (var i = 0; i < this.pendingbills.length; i++) {
                    this.segmentdata[0][1][i].flxViewBill = {};
                    this.segmentdata[0][1][i].flxBillPay = {};
                    this.segmentdata[0][1][i].lblDelete = {
                        "text": applicationManager.getPresentationUtility().getStringFromi18n("Kony.mb.EBill.ViewBill")
                    };
                    this.segmentdata[0][1][i].lblBillPay = {
                        "text": applicationManager.getPresentationUtility().getStringFromi18n("Kony.mb.EBill.payBill")
                    };
                    this.segmentdata[0][1][i].imgDelete = {
                        "src": "viewbill.png"
                    };
                    this.segmentdata[0][1][i].imgBillPay = {
                        "src": "billpayheader.png"
                    };
                }
                for (var i = 0; i < this.pendingbills.length; i++) {
                    this.segmentdata[0][1][i].flxViewBill.onClick = this.viewBill;
                    this.segmentdata[0][1][i].flxBillPay.onClick = this.payBill;
                }
                this.view.segTransactions.setData(this.segmentdata);
                this.view.flxNoTransactions.isVisible = false;
                this.view.segTransactions.isVisible = true;
            }
        }
        navMan.setCustomInfo("frmBillPay", bills);
    },
    viewBill: function() {
        var rowid = this.view.segTransactions.selectedIndex[1];
        var data = this.pendingbills[rowid];
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.viewBill(data.ebillURL);
    },
    payBill: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var rowid = this.view.segTransactions.selectedIndex[1];
        // alert(rowid);
        var data = this.pendingbills[rowid];
        var  billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navAfterSelectPayee(data);
    },
    initActions: function() {
        var scope = this;
        this.view.tbxSearch.onTouchEnd = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
        this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
        this.view.segTransactions.onRowClick = this.segTransactionsOnRowClick;
        var configManager = applicationManager.getConfigurationManager();
        var MenuHandler = applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(scope, configManager.constants.MENUBILLPAY);
        this.view.flxPayABill.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var navMan = applicationManager.getNavigationManager();
            navMan.setEntryPoint("payBill", "frmBillPay");
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.fetchToPayees();
        }
        this.view.flxManage.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.fetchAllPayees();
        }
    },
    flxSearchOnTouchEnd: function() {
        this.view.flxHeaderSearchbox.setVisibility(true);
        this.view.flxHeader.setVisibility(false);
        this.view.flxSearch.setVisibility(false);
        this.view.flxShadow.setVisibility(false);
        this.view.flxSeperator2.setVisibility(false);
        this.view.flxTransferOptions.setVisibility(false);
        this.view.segTransactions.height = "100%";
        this.view.customSearchbox.tbxSearch.setFocus(true);
        this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
        this.view.flxMainContainer.forceLayout();
    },
    tbxSearchOnTextChange: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        if (searchtext) {
            var pendingBills = [];
            var data = [],
                headers = [];
            headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.eBill.upcomingEBill"));
            headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transaction.ScheduledPayments"));
            headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions"));
            data.push(this.scheduledbills);
            data.push(this.postedbills);
            data.push(this.pendingbills);
            this.view.segTransactions.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
            var searchData = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("payeeNickName", searchtext, data, headers);
            if (searchData && searchData.length > 0) {
                this.view.segTransactions.setData(searchData);
                this.view.flxNoTransactions.isVisible = false;
                this.view.segTransactions.isVisible = true;
            } else {
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        } else {
            if (this.segmentdata && this.segmentdata.length > 0) {
                this.view.segTransactions.setData(this.segmentdata);
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
            } else {
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        }
    },
    resetSearch: function() {
        this.view.customSearchbox.tbxSearch.text = ""
        if (this.segmentdata && this.segmentdata.length > 0) {
            this.view.segTransactions.setData(this.segmentdata);
            this.view.segTransactions.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
        } else {
            this.view.segTransactions.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
        }
    },
    showSearch: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.resetSearch();
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "0dp";
                var titleBarAttributes = this.view.titleBarAttributes;
                titleBarAttributes["navigationBarHidden"] = false;
                // this.view.titleBarAttributes = titleBarAttributes; 
            } else {
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.flxSearch.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.customSearchbox.tbxSearch.setFocus(true);
                var titleBarAttributes = this.view.titleBarAttributes;
                titleBarAttributes["navigationBarHidden"] = true;
                // this.view.titleBarAttributes = titleBarAttributes;
            }
        } else {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.resetSearch();
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
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
        }
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
    btnCancelOnClick: function() {
        this.view.customSearchbox.tbxSearch.text = "";
        if (kony.os.deviceInfo().name === "iPhone") {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            }
        } else {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            }
        }
    },
    showSuccessPopup: function(refID, type) {
        // TO DO i18n's
        if (type == "delete") var msg = "Transaction was Cancelled Successfully with reference ID : " + (refID.transactionId || refID.referenceId);
        else {
            if (refID.referenceId) msg = "Transaction was done successfully with transaction ID : " + refID.referenceId;
            else msg = "Transaction was edited successfully with reference ID : " + refID.transactionId;
        }
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    },
    setFooter: function() {
        this.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxAccSelect.setVisibility(false);
        this.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxTransferSel.setVisibility(false);
        this.view.customFooter.lblBillPay.skin = "sknLbl424242SSP20px";
        this.view.customFooter.flxBillSelected.setVisibility(true);
        this.view.customFooter.lblMore.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxMoreSelect.setVisibility(false);
    },
    segTransactionsOnRowClick: function() {
        var navMan = applicationManager.getNavigationManager();
        var selectedSectionIndex = Math.floor(this.view.segTransactions.selectedRowIndex[0]);
        var selectedRowIndex = Math.floor(this.view.segTransactions.selectedRowIndex[1]);
        var transactionData = this.view.segTransactions.data[selectedSectionIndex][1][selectedRowIndex];
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        if (selectedSectionIndex === 0) {
            navMan.setCustomInfo("frmBillPayDetails", transactionData);
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayDetails");
        } else {
            navMan.setEntryPoint("payBill", "frmBillPay");
            navMan.setCustomInfo("frmTransactionDetails", transactionData);
            navMan.setEntryPoint("frmTransactionDetails", "BillPay");
            billPayMod.presentationController.commonFunctionForNavigation("frmTransactionDetails");
        }
    },
    showErrorPopup: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});