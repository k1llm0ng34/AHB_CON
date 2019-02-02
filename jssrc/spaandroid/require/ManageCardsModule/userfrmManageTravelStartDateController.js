define({
    TravelPlanDetailsRequest: {},
    TravelPlanDetailsUpdate: {},
    navOption: "",
    init: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " :  init  ####");
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    preShow: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " :  preShow  ####");
            if (kony.os.deviceInfo().name === "iPhone") {
                this.view.flxHeader.isVisible = false;
            } else {
                this.view.flxHeader.isVisible = true;
            }
            var custInfo = navManager.getCustomInfo("frmManageTravelStartDate");
            this.navOption = custInfo.option;
            this.view.customCalendar.selectedDate = '';
            this.view.customCalendar.triggerContinueAction = true;
            this.view.customCalendar.isCalendarEndDateFrm = false;
            this.view.customCalendar.updateDateBullets();
            this.view.customCalendar.unHighlightAllDays();
            this.view.customCalendar.setFirstEnabledDate();
            if (kony.sdk.isNullOrUndefined(custInfo.data)) {
                this.TravelPlanDetailsRequest = {};
            } else {
                this.TravelPlanDetailsRequest = custInfo.data;
            }
            this.TravelPlanDetailsUpdate = JSON.parse(JSON.stringify(this.TravelPlanDetailsRequest));
            var startDate = new Date();
            var startDateFeed1 = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
            if (!kony.sdk.isNullOrUndefined(this.TravelPlanDetailsRequest.startDate)) {
                var date1 = new Date(this.TravelPlanDetailsRequest.startDate);
                var dateFeed1 = (date1.getMonth() + 1) + "/" + date1.getDate() + "/" + date1.getFullYear();
                loggerManager.log("Date to be set in frmManageTravelStartDate: " + dateFeed1);
                this.view.customCalendar.setSelectedDate(dateFeed1);
                this.view.btnContinue.isVisible = true;
            } else {
                this.view.customCalendar.setFirstEnabledDate(startDateFeed1);
                this.view.customCalendar.setSelectedDateValue('');
            }
            if (this.view.customCalendar.selectedDate === '') {
                this.view.btnContinue.setEnabled(false);
                this.view.btnContinue.isVisible = false;
                this.view.customCalendar.triggerContinueAction = false;
            } else {
                this.view.btnContinue.setEnabled(true);
                this.view.customCalendar.triggerContinueAction = true;
            }
            this.setFlowActions();
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    setFlowActions: function() {
        this.view.btnContinue.onClick = this.navToTravelEndDate;
        this.view.btnContinue.text = kony.i18n.getLocalizedString("kony.mb.common.continue");
        this.view.customHeader.flxBack.onClick = this.backOnClick;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    },
    backOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " :  backOnClick  ####");
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            if (this.navOption === "edit") {
                navManager.setCustomInfo("frmManageTravelDetails", this.TravelPlanDetailsRequest);
                manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelDetails");
            } else {
                manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelPlans");
            }
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    cancelOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " :  cancelOnClick  ####");
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            if (this.navOption === "edit") {
                navManager.setCustomInfo("frmManageTravelDetails", this.TravelPlanDetailsRequest);
                manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelDetails");
            } else {
                manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelPlans");
            }
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    /**
     * @function
     *
     */
    navToTravelEndDate: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " :  navToTravelEndDate  ####");
            var dateArr = this.view.customCalendar.selectedDate.split("/");
            loggerManager.log("got date from Calendar:" + this.view.customCalendar.selectedDate);
            var dd, mm, yyyy = "";
            dd = dateArr[1].toString(10);
            dd = (dateArr[1] < 10) ? ("0" + dd) : dd;
            mm = ((parseInt(dateArr[0], 10)) + 1).toString(10);
            mm = (((parseInt(dateArr[0], 10)) + 1) < 10) ? ("0" + mm) : mm;
            yyyy = dateArr[2].toString(10);
            var dummy = yyyy + "-" + mm + "-" + dd;
            this.TravelPlanDetailsUpdate.startDate = dummy;
            loggerManager.log("startdate in frmManageTravelStartDateController: " + dummy);
            loggerManager.log("travelDetailsUpdate in frmManageTravelStartDateController: " + JSON.stringify(this.TravelPlanDetailsUpdate));
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            navManager.setCustomInfo("frmManageTravelEndDate", {
                "option": this.navOption,
                "data": this.TravelPlanDetailsUpdate
            });
            manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelEndDate");
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
});