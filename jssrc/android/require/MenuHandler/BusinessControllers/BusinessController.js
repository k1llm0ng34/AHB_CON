/**
 *@module MenuHandler
 */
define([], function() {
    /**
     * MenuHandler consists of all possible methods related Hamburger Menu
     *@alias module:MenuHandler
     *@class
     */
    function MenuHandler() {
        /**@member {string} forceTouchFlow stores the value of type of module selected in forch touch*/
        this.forceTouchFlow = "";
    };
    /**
     * Function used as call back for force touch options.
     * @params {object} params , indicating the selected force touch option.
     * @returns view controller which have to be displayed
     */
    MenuHandler.prototype.appForceTouchCallBack = function(params) {
        // If launch mode = 3 and quickactionitem key present in launchparams
        // denotes quick action item launch.
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        if (params["launchmode"] == 3) {
            var deviceUtilManager = applicationManager.getDeviceUtilManager();
            var quickActionItem
            if (deviceUtilManager.isIPhone()) quickActionItem = params["launchparams"]["quickactionitem"];
            else quickActionItem = params["quickactionitem"];
            if (quickActionItem) {
                if (quickActionItem["id"] == "ATM finder") {
                    if (userPreferencesManager.isLoggedIn === true) {
                        var formName = kony.application.getCurrentForm().id;
                        if (formName) {
                            var controller = applicationManager.getPresentationUtility().getController(formName, true);
                            var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
                            locateUsModule.presentationController.presentLocateUsView(true, controller);
                        }
                    } else {
                        this.forceTouchFlow = "ATM finder";
                        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
                        return controller.view;
                    }
                } else if (quickActionItem["id"] == "Pay a Bill") {
                    if (userPreferencesManager.isLoggedIn === true) {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("payBill", "frmDashBoard");
                        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
                        billPayMod.presentationController.fetchToPayees();
                        var controller = applicationManager.getPresentationUtility().getController('frmBillPaySelectPayee', true);
                        return controller.view;
                    } else {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("payBill", "frmDashBoard");
                        this.forceTouchFlow = "Pay a Bill";
                        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
                        return controller.view;
                    }
                } else if (quickActionItem["id"] == "Transfer Money") {
                    if (userPreferencesManager.isLoggedIn === true) {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("makeatransfer", "frmDashBoard");
                        var controller = applicationManager.getPresentationUtility().getController('frmTransactionMode', true);
                        return controller.view;
                    } else {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("makeatransfer", "frmDashBoard");
                        this.forceTouchFlow = "Transfer Money";
                        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
                        return controller.view;
                    }
                } else if (quickActionItem["id"] == "New Check Deposit") {
                    if (userPreferencesManager.isLoggedIn === true) {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("Deposit", "frmDashBoard");
                        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
                        checkDepositModule.presentationController.commonFunctionForNavigation("frmDepositToCD");
                        var controller = applicationManager.getPresentationUtility().getController('frmDepositToCD', true);
                        return controller.view;
                    } else {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("Deposit", "frmDashBoard");
                        this.forceTouchFlow = "New Check Deposit";
                        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
                        return controller.view;
                    }
                }
            }
        }
    };
    /**
     * Function to Perform Action on Menu Icon and More Option
     * @param {object} scope , which consists of scope of particular module where we initiates this method
     * @param {string} selectedForm, which consists of selected formid
     */
    MenuHandler.prototype.setUpHamburgerForForm = function(scope, selectedForm) {
        //For Gettting the Selected Value from Menu    
        var hamburgerOnRowClick = function() {
            showOrHideHamburgerUI();
            var selectedvalue = scope.view.Hamburger.segHamburger.selectedItems[0].text;
            switchOnClick(selectedvalue);
        }
        var switchOnClick = function(selValue) {
                var configManager = applicationManager.getConfigurationManager();
                var userManager = applicationManager.getUserPreferencesManager();
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmCardManageHome", {
                    "isMainScreen": true
                });
                switch (selValue) {
                    case configManager.constants.MENUACCOUNTS:
                        scope.view.flxHamburger.isVisible = false;
                        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                        accountMod.presentationController.showDashboard();
                        break;
                    case configManager.constants.MENULOCATE:
                        scope.view.flxHamburger.isVisible = false;
                        var locateMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
                        locateMod.presentationController.presentLocateUsView(true, scope);
                        break;
                    case configManager.constants.MENUCONTACT:
                        scope.view.flxHamburger.isVisible = false;
                        var navManager = applicationManager.getNavigationManager();
                        navManager.navigateTo("frmSupport");
                        break;
                    case configManager.constants.MENUTRANSFERS:
                        scope.view.flxHamburger.isVisible = false;
                        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
                        transMod.presentationController.getTransactions();
                        break;
                    case configManager.constants.MENUMESSAGES:
                        scope.view.flxHamburger.isVisible = false;
                        var messagesModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
                        messagesModule.presentationController.getInboxRequests();
                        break;
                    case configManager.constants.MENUBILLPAY:
                        scope.view.flxHamburger.isVisible = false;
                        var BillPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
                        BillPayMod.presentationController.fetchBills();
                        break;
                    case configManager.constants.MENUCARDLESS:
                        scope.view.flxHamburger.isVisible = false;
                        var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("cardlessEntry", "frmCardLessHome");
                        //navMan.setEntryPoint("cardlessEntry","frmCardLessHomeQR");
                        cardLessModule.presentationController.getCardlessPendingAndPostedTransactions();
                        //cardLessModule.presentationController.getCardlessPendingAndPostedTransactionsQRScanner();
                        break;
                    case configManager.constants.MENUCHECKDEPOSIT:
                        scope.view.flxHamburger.isVisible = false;
                        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
                        checkDepositModule.presentationController.fetchDeposits();
                        break;
                    case configManager.constants.MENUSETTINGS:
                        scope.view.flxHamburger.isVisible = false;
                        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
                        settingsModule.presentationController.showSettings();
                        break;
                    case configManager.constants.MENUCHATBOT:
                        scope.view.flxHamburger.isVisible = false;
                        var chatBotMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
                        chatBotMode.presentationController.handleFirstTimeOpen();
                        break;
                    case configManager.constants.MENUMANAGEOTHERBANKACCOUNTS:
                        scope.view.flxHamburger.isVisible = false;
                        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                        accountModule.presentationController.fetchExternalAccountsData(userManager.getUserName());
                        break;
                    case configManager.constants.MENUCARDMANAGEMENT:
                        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
                        manageCardsModule.presentationController.showCardManageHome();
                        break;
                    case configManager.constants.MENUOPENACOUNT:
                        var NAOModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
                        NAOModule.presentationController.showAllProducts();
                        break;
                    case configManager.constants.MENUPFMMYMONEY:
                        var accountModulePFM = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                        accountModulePFM.presentationController.fetchPFMDetails();
                        break;
                    default:
                        scope.view.flxHamburger.isVisible = false;
                        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                        accountMod.presentationController.showDashboard();
                }
            }
            /**
             * Function to to Show/Hide the Hamburger Menu
             * @param {boolean} hide , whether need to hide or Show
             */
        var showOrHideHamburgerUI = function(hide) {
            if (scope.view.flxHamburger) {
                if (hide) {
                    scope.view.flxHamburgerWrapper.left = "-100%";
                    scope.view.flxHamburger.isVisible = false;
                } else {
                    var leftVal = "";
                    if (scope.view.flxHamburger.isVisible === true) {
                        if (kony.os.deviceInfo().name == "iPhone") {
                            leftVal = "100%";
                        } else {
                            leftVal = "-100%";
                        }
                    } else {
                        leftVal = "0%";
                        if (kony.os.deviceInfo().name == "iPhone") {
                            scope.view.flxHamburgerWrapper.left = "100%";
                            scope.view.flxHamburger.skin = "slFbox";
                        } else {
                            scope.view.flxHamburgerWrapper.left = "-100%";
                            scope.view.flxHamburger.skin = "sknFlx000000Op50";
                        }
                        scope.view.flxHamburger.isVisible = true;
                    }
                    scope.view.flxHamburgerWrapper.animate(kony.ui.createAnimation({
                        "100": {
                            "left": leftVal,
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    }), {
                        "delay": 0,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.5
                    }, {
                        "animationEnd": function() {
                            if (leftVal == "-100%" || leftVal == "100%") {
                                scope.view.flxHamburger.isVisible = false;
                            }
                        }
                    });
                }
            }
        }
        var setProfilePic = function() {};
        /**
         * Function to set last login time
         */
        var setLastLoginTime = function() {
            var userPreferencesManager = applicationManager.getUserPreferencesManager();
            var lastlogin = kony.i18n.getLocalizedString("kony.mb.Hamburger.LastLogin");
            scope.view.Hamburger.lblLastLogin.text = lastlogin + " " + userPreferencesManager.getLastLoginTime();
        };
        /**
         * Function to set username
         */
        var setUserName = function() {
            var userPreferencesManager = applicationManager.getUserPreferencesManager();
            var firstname = userPreferencesManager.getUserFirstName();
            var lastname = userPreferencesManager.getUserLastName();
            scope.view.Hamburger.lblUsername.text = firstname + " " + lastname;
        };
        /**
         * Function to Setting data in the Menu. 
         */
        var setMenuData = function() {
            var configManager = applicationManager.getConfigurationManager();
            var devManager = applicationManager.getDeviceUtilManager();
            if (devManager.isIPhone()) {
                var footerData = configManager.getIOSAppMenuItems();
                var data = configManager.getMoreMenuItems();
                scope.view.customFooter.imgAccounts.src = footerData[0].img;
                scope.view.customFooter.lblAccounts.text = footerData[0].text;
                scope.view.customFooter.flxAccounts.onClick = function() {
                    switchOnClick(footerData[0].text);
                    showOrHideHamburgerUI(true);
                }
                scope.view.customFooter.imgTransfer.src = footerData[1].img;
                scope.view.customFooter.lblTransfer.text = footerData[1].text;
                scope.view.customFooter.flxTransfer.onClick = function() {
                    showOrHideHamburgerUI(true);
                    switchOnClick(footerData[1].text);
                }
                scope.view.customFooter.imgBillPay.src = footerData[2].img;
                scope.view.customFooter.lblBillPay.text = footerData[2].text;
                scope.view.customFooter.flxBillPay.onClick = function() {
                        switchOnClick(footerData[2].text);
                        showOrHideHamburgerUI(true);
                    }
                    //highlightWhichMenu
                scope.view.customFooter.flxAccSelect.setVisibility(false);
                scope.view.customFooter.flxTransferSel.setVisibility(false);
                scope.view.customFooter.flxBillSelected.setVisibility(false);
                scope.view.customFooter.flxMoreSelect.setVisibility(false);
                if (selectedForm == footerData[0].text) {
                    scope.view.customFooter.flxAccSelect.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMore.skin = "sknLblA0A0A0SSP20px";
                } else if (selectedForm == footerData[1].text) {
                    scope.view.customFooter.flxTransferSel.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMore.skin = "sknLblA0A0A0SSP20px";
                } else if (selectedForm == footerData[2].text) {
                    scope.view.customFooter.flxBillSelected.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblMore.skin = "sknLblA0A0A0SSP20px";
                } else {
                    scope.view.customFooter.flxMoreSelect.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMore.skin = "sknLbl424242SSP20px";
                }
            } else {
                var data = configManager.getHamburgerMenuItems();
            }
            // map and present data into hamburger (both hamburger on click or more on click)
            scope.view.Hamburger.segHamburger.widgetDataMap = {
                imgHamburger: "img",
                lblHamburger: "text",
                lblMessagesNumber: "info"
            };
            var msgManager = applicationManager.getMessagesManager();
            var count = msgManager.getTotalNumberOfUnreadMessages();
            for (var i = 0; i < data.length; i++) {
                if (!configManager.AggregatedExternalAccountEnabled) continue;
                if (data[i].text === configManager.constants.MENUMESSAGES && count !== "0") {
                    data[i].info = {
                        "text ": count,
                        "isVisible": true
                    };
                } else {
                    data[i].info = {
                        "isVisible": false
                    };
                }
            }
            scope.view.Hamburger.segHamburger.setData(data);
            scope.view.Hamburger.segHamburger.onRowClick = function() {
                hamburgerOnRowClick();
            };
        }
        setMenuData();
        if (scope.view.customHeader) {
            scope.view.customHeader.flxBack.onClick = function() {
                setProfilePic();
                setLastLoginTime();
                setUserName();
                setMenuData();
                showOrHideHamburgerUI();
            };
        } else {
            scope.view.customSearch.flxBack.onClick = function() {
                setProfilePic();
                setLastLoginTime();
                setUserName();
                setMenuData();
                showOrHideHamburgerUI();
            };
        }
        if (kony.os.deviceInfo().name === "android") {
            scope.view.flxHamburgerWrapper.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
                fingers: 1
            }, function(widgetRef, gestureInfo) {
                if (gestureInfo.swipeDirection === 1) {
                    showOrHideHamburgerUI();
                }
            }.bind(this));
        }
        scope.view.flxHamburgerDummy.onClick = function() {
            showOrHideHamburgerUI();
        };
        scope.view.customFooter.flxMore.onClick = function() {
            setProfilePic();
            setLastLoginTime();
            setUserName();
            setMenuData();
            showOrHideHamburgerUI();
            scope.view.customFooter.flxMoreSelect.setVisibility(true);
            scope.view.customFooter.flxAccSelect.setVisibility(false);
            scope.view.customFooter.flxTransferSel.setVisibility(false);
            scope.view.customFooter.flxBillSelected.setVisibility(false);
            scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
            scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
            scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
            scope.view.customFooter.lblMore.skin = "sknLbl424242SSP20px";
        };
        scope.view.Hamburger.imgLogout.onTouchEnd = function() {
            var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMod.presentationController.onLogout();
            showOrHideHamburgerUI();
        };
    }
    return MenuHandler;
});