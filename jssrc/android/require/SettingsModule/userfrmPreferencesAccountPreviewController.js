define({
    toggleBtnStatus: "",
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.initActions();
        this.frmAccpreviewPreshow();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scopeObj = this;
        this.view.customHeader.btnRight.onClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
        };
        this.view.customHeader.flxBack.onClick = this.imgbackAction;
        this.view.flxToggle.onClick = this.toggleBtnAction;
    },
    frmAccpreviewPreshow: function() {
        var navManager = applicationManager.getNavigationManager();
        var status = navManager.getCustomInfo("frmPreferencesAccountPreview");
        if (status.isRememberMeOn != true || status.deviceReg == false) {
            this.view.lblNote.text = kony.i18n.getLocalizedString("kony.mb.preferences.AccountPreviewCannotBeEnabled");
            this.view.flxSwitch.setVisibility(false);
        } else {
            this.view.lblNote.text = kony.i18n.getLocalizedString("kony.mb.See.your.account.and.card.balances.instantly.without.signing.on.the.login");
            this.view.flxSwitch.setVisibility(true);
            if (status.accPreview == true) this.view.imgSwitch.src = "active.png";
            else this.view.imgSwitch.src = "inactive.png";
        }
    },
    toggleBtnAction: function() {
        var navManager = applicationManager.getNavigationManager();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        if (this.view.imgSwitch.src === "active.png") {
            this.view.imgSwitch.src = "inactive.png";
            authMode.presentationController.setAccountPreviewFlag(false);
        } else {
            this.view.imgSwitch.src = "active.png";
            authMode.presentationController.setAccountPreviewFlag(true);
        }
        settingsModule.presentationController.getDevDetails();
        var keys = navManager.getCustomInfo("frmSettings");
        keys.popUpMsg = "";
        navManager.setCustomInfo("frmSettings", keys);
    },
    imgbackAction: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});