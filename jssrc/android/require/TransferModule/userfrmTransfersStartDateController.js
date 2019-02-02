define({
    freq: '',
    startDateKey: '',
    onNavigate: function(obj) {
        if (obj == undefined) {
            return;
        }
        this.startDateKey = obj;
        if (this.startDateKey === "oneTime") {
            this.view.customHeader.lblLocateUs.text = "SEND DATE";
        } else {
            this.view.customHeader.lblLocateUs.text = "START DATE";
        }
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        if (this.view.customCalendar.selectedDate === '') {
            this.view.btnContinue.setEnabled(false);
        } else {
            this.view.btnContinue.setEnabled(true);
        }
        this.initActions();
        this.view.customCalendar.selectedDate = '';
        this.view.customCalendar.isCalendarEndDateFrm = false;
        this.view.customCalendar.triggerContinueAction = true;
        this.view.customCalendar.updateDateBullets();
        this.view.customCalendar.unHighlightAllDays();
        this.view.customCalendar.setFirstEnabledDate();
        var  transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        var startdate = transMod.presentationController.getTransObject();
        var navMan = applicationManager.getNavigationManager();
        var data = navMan.getCustomInfo("frmTransfersStartDate");
        this.freq = data.freq;
        var info = navMan.getCustomInfo("frmTransfersDuration");
        if (info)
            if (startdate.scheduledDate !== null && startdate.scheduledDate !== undefined && startdate.scheduledDate !== "" && ((scope_TransfersPresentationController.getDuration() === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange") && startdate.scheduledDate && startdate.frequencyEndDate) || (scope_TransfersPresentationController.getDuration() === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo") && startdate.scheduledDate && startdate.numberOfRecurrences) || startdate.frequencyType === "Once")) this.view.customCalendar.setSelectedDate(startdate.scheduledDate);
        if (this.freq === "Once") {
            // this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.sendDateCaps");
            this.view.customHeader.lblLocateUs.text = "SEND DATE";
            this.view.btnContinue.isVisible = true;
            this.view.customCalendar.triggerContinueAction = false;
        } else {
            // this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.startDateCaps");
            this.view.customHeader.lblLocateUs.text = "START DATE";
            this.view.btnContinue.isVisible = false;
            this.view.customCalendar.triggerContinueAction = true;
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.btnContinue.onClick = this.continueAction;
        this.view.customHeader.btnRight.onClick = function() {
            scope.cancelOnClick();
        }
    },
    cancelOnClick: function() {
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transferModule.presentationController.cancelCommon();
    },
    backAction: function() {
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        if (this.startDateKey === "oneTime") {
            transferModule.presentationController.commonFunctionForNavigation("frmTransferFrequency");
        } else if (this.startDateKey === "recurrence") {
            transferModule.presentationController.commonFunctionForNavigation("frmTransfersRecurrence");
        } else {
            transferModule.presentationController.commonFunctionForNavigation("frmTransfersDuration");
        }
    },
    continueAction: function() {
        if (this.freq === "Once" || this.freq === "NofRR") {
            var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
            transferModule.presentationController.transferScheduledDate(this.view.customCalendar.getSelectedDate());
        } else {
            var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
            transferModule.presentationController.transferScheduledStrtDate(this.view.customCalendar.getSelectedDate());
        }
    }
});