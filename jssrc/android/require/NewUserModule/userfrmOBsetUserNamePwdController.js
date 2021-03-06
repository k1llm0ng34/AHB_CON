define({
    flag: '0',
    timerCounter: 0,
    init: function() {
        var FormValidator = require("FormValidatorManager")
        this.fv = new FormValidator(3);
        this.view.txtPassword.onTouchStart = this.hideFlxRequirements;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        var scopeObj = this;
        if (kony.os.deviceInfo().name !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.fv.submissionView(this.view.btnContinueUsernamePassword);
        this.view.flxMainContainer.setVisibility(true);
        this.view.flxPopup.setVisibility(false);
        this.view.txtUsername.setFocus(true);
        this.view.txtUsername.text = "";
        this.view.txtPassword.text = "";
        this.view.txtReEnterPassword.text = "";
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    validateUsername: function() {
        var text = this.view.txtUsername.text;
        this.fv.checkAndUpdateStatusForNull(0, text);
    },
    validatePassword: function() {
        var text = this.view.txtPassword.text;
        this.fv.checkAndUpdateStatusForNull(1, text);
    },
    validateReenterPassword: function() {
        var text = this.view.txtReEnterPassword.text;
        this.fv.checkAndUpdateStatusForNull(2, text);
    },
    validateAndNavigate: function() {
        this.flag = 0;
        var self = this;
        if (this.view.txtUsername.text === "john") {
            self.showPopupIncorrectCredentials("username");
            return;
        } else if (this.view.txtUsername.text === null) {
            self.showPopupIncorrectCredentials("Enterusername");
            return;
        } else {
            this.flag++;
        }
        if (this.view.txtPassword.text !== this.view.txtReEnterPassword.text || this.view.txtPassword.text === null) {
            self.showPopupIncorrectCredentials("password");
            self.view.imgPasswordsMatch.src = "tickmark.png";
            return;
        } else if (this.view.txtPassword.text !== null && this.view.txtPassword.text === this.view.txtReEnterPassword.text) {
            self.view.imgPasswordsMatch.src = "greentick.png";
            this.flag++;
        }
        if (this.flag === 2) {
            var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
            NUOMod.presentationController.commonFunctionForNavigation("frmOBSelectProducts");
        }
    },
    matchPassword: function() {
        var self = this;
        if (this.view.txtPassword.text !== this.view.txtReEnterPassword.text || this.view.txtPassword.text === null) {
            //self.showPopupIncorrectCredentials("password");
            self.view.imgPasswordsMatch.src = "tickmark.png";
            return false;
        } else if (this.view.txtPassword.text && this.view.txtReEnterPassword.text && this.view.txtPassword.text !== null && this.view.txtPassword.text === this.view.txtReEnterPassword.text) {
            self.view.imgPasswordsMatch.src = "greentick.png";
            this.flag++;
            return true;
        }
    },
    showPopupIncorrectCredentials: function(par) {
        if (par === "Enterusername") {
            this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.OnBoarding.Enterusername");
        }
        if (par === "username") {
            this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.enroll.usernameUnavailableMsg");
        } else if (par === "password") {
            this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.enroll.passwordNotMatch");
        } else if (par === "invalidpassword") {
            this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.common.invalidPassword");
        } else if (par === "invalidusername") {
            this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.OnBoarding.invalidusername");
        }
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupError2" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlxf54b5e";
        this.view.customPopup.imgPopup.src = "errormessage.png";
        //this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.OnBoarding.error");
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
        }, 1.5, false);
    },
    initActions: function() {
        var scope = this;
        scope.view.txtUsername.onEndEditing = function() {
            if (scope.view.txtUsername.text) {
                applicationManager.getPresentationUtility().showLoadingScreen();
                var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
                authMod.presentationController.checkUserAvailability(scope.view.txtUsername.text);
            } else {
                scope.bindError("Enterusername");
            }
        };
        scope.view.txtPassword.onEndEditing = function() {
            if (scope.isValidPassword()) scope.matchPassword();
        };
        scope.view.txtUsername.onTextChange = function() {
            scope.validateUsername();
        };
        scope.view.txtPassword.onTextChange = function() {
            scope.validatePassword();
            scope.matchPassword();
        };
        scope.view.txtReEnterPassword.onEndEditing = function() {
            scope.matchPassword();
        };
        scope.view.txtReEnterPassword.onTextChange = function() {
            scope.validateReenterPassword();
            scope.matchPassword();
        };
        scope.view.btnContinueUsernamePassword.onClick = function() {
            var userName = scope.view.txtUsername.text;
            var password = scope.view.txtPassword.text;
            var reenter = scope.view.txtReEnterPassword;
            if (userName && password && reenter && scope.matchPassword()) {
                applicationManager.getPresentationUtility().showLoadingScreen();
                var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
                authMod.presentationController.createNewUser(userName, password, reenter);
            } else if (!userName) {
                scope.bindError("Enterusername");
            } else if (!password) {
                scope.bindError("invalidpassword");
            } else if (!reenter) {
                scope.bindError("password");
            } else if (!scope.matchPassword()) {
                scope.bindError("password");
            }
        };
        scope.view.imgMaskUnmask.onTouchEnd = function() {
            if (scope.view.imgMaskUnmask.src === "viewactive.png") {
                scope.view.txtPassword.secureTextEntry = true;
                scope.view.imgMaskUnmask.src = "viewicon.png";
                scope.view.flxPassword.forceLayout();
            } else {
                scope.view.txtPassword.secureTextEntry = false;
                scope.view.imgMaskUnmask.src = "viewactive.png";
                scope.view.flxPassword.forceLayout();
            }
        };
        scope.view.customHeader.btnRight.onClick = this.cancelOnClick;
    },
    cancelOnClick: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    bindError: function(par) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (par === "Enterusername") {
            applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.OnBoarding.Enterusername"));
        }
        if (par === "username") {
            applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.enroll.usernameUnavailableMsg"));
        } else if (par === "password") {
            applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.enroll.passwordNotMatch"));
        } else if (par === "invalidpassword") {
            applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.common.invalidPassword"));
        } else if (par === "invalidusername") {
            applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.OnBoarding.invalidusername"));
        }
    },
    isValidPassword: function() {
        var password = this.view.txtPassword.text;
        var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        return NUOMod.presentationController.validatePassword(password);
    },
    bindGenericError: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    // utitlity function to show password rules
    showFlxSecurityRequirements: function() {
        //this.isPasswordValid = false;
        this.view.flxSecurityRequirements.isVisible = true;
        if (this.view.flxSecurityRequirements.height !== "165dp") {
            this.view.flxSecurityRequirements.animate(kony.ui.createAnimation({
                "0": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "height": "0dp",
                },
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "height": "165dp",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": function() {}
            });
        }
    },
    // utitlity function to hide password rules
    hideFlxRequirements: function() {
        var scope = this;
        if (this.view.flxSecurityRequirements.height !== "0dp") {
            this.view.flxSecurityRequirements.animate(kony.ui.createAnimation({
                "0": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "height": "165dp",
                },
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "height": "0dp",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": function() {
                    scope.view.flxSecurityRequirements.isVisible = true;
                }
            });
        }
    }
});