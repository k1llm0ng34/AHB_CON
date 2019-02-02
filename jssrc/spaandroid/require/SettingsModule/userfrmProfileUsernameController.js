define({
    timerCounter: 0,
    init: function() {
        var FormValidator = require("FormValidatorManager");
        this.fv = new FormValidator(1);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmEnrollLAstNamePreShow: function() {
        this.setFlowAction();
        this.setPreShowData();
        this.updateOldUserName();
        this.fv.submissionView(this.view.btnContinue);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    validateTheUserName: function() {
        var text = this.view.tbxUsername.text;
        this.fv.checkAndUpdateStatusForNull(0, text);
    },
    setFlowAction: function() {
        var scopeObj = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
        this.view.customHeader.btnRight.onClick = function() {
            scopeObj.navToSettings();
        };
        this.view.btnContinue.onClick = function() {
            scopeObj.onUpdateClick();
            //scopeObj.navToSettingUpdated();
        };
        this.view.tbxUsername.onTextChange = function() {
            scopeObj.validateTheUserName();
        };
    },
    setPreShowData: function() {
        this.view.tbxUsername.text = "";
        this.view.tbxUsername.setFocus(true);
        var scope = this;
        this.view.customHeader.lblLocateUs.text = "CHANGE USERNAME";
        if (kony.os.deviceInfo().name !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
    },
    navToSettings: function() {
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    },
    navToSettingUpdated: function() {},
    updateOldUserName: function() {
        var navManager = applicationManager.getNavigationManager();
        var userName = navManager.getCustomInfo('frmProfileUsername');
        this.view.lblPreviousUsername.text = userName;
    },
    onUpdateClick: function() {
        var updatedUserName = this.view.tbxUsername.text;
        if (updatedUserName === null || updatedUserName === undefined || updatedUserName.length < 1) {
            var i18n_msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.usernameEmptyMsg", "Please enter a valid username");
            this.bindViewError(i18n_msg);
            return;
        }
        var validationManager = applicationManager.getValidationUtilManager();
        if (validationManager.isValidUserName(updatedUserName) === false) {
            var i18nMsg1 = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.OnBoarding.invalidusername", "Please enter a valid username");
            this.bindViewError(i18nMsg1);
            return;
        }
        var settings = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        var stepData = settings.presentationController.updateUserName(updatedUserName);
    },
    bindViewError: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    }
});