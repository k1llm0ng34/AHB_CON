define({
    AS_AppEvents_c26b10e9c0764bde8f8f42317331324a: function AS_AppEvents_c26b10e9c0764bde8f8f42317331324a(eventobject) {
        var self = this;
        //var appManager = ApplicationManager.getApplicationManager();
        try {
            applicationManager.postAppInitiate();
            kony.application.setApplicationProperties({
                "statusBarForegroundColor": "000000"
            });
            var registrationManager = applicationManager.getRegistrationManager();
            registrationManager.setEventTracking();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
        }
    },
    AS_AppEvents_h4ded27d9dd845f885ad538266976f45: function AS_AppEvents_h4ded27d9dd845f885ad538266976f45(eventobject) {
        var self = this;
        kony.lang.setUncaughtExceptionHandler(GlobalExceptionHandler.exceptionHandler);
        try {
            var ApplicationManager = require('ApplicationManager');
            applicationManager = ApplicationManager.getApplicationManager();
            //applicationManager.init();
            applicationManager.preappInitCalls();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
        }
    },
    AS_AppEvents_hd4fc1bedd904d29862f6382068c9886: function AS_AppEvents_hd4fc1bedd904d29862f6382068c9886(eventobject) {
        var self = this;
        try {
            var MenuHandler = applicationManager.getMenuHandler();
            return MenuHandler.appForceTouchCallBack(eventobject);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
        }
    },
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.ahb.common.Head.MainHeader", "MainHeader", "MainHeaderController");
        kony.application.registerMaster({
            "namespace": "com.ahb.common.Head",
            "classname": "MainHeader",
            "name": "com.ahb.common.Head.MainHeader"
        });
        kony.mvc.registry.add("com.ahb.common.Head.MainHeaderCopy", "MainHeaderCopy", "MainHeaderCopyController");
        kony.application.registerMaster({
            "namespace": "com.ahb.common.Head",
            "classname": "MainHeaderCopy",
            "name": "com.ahb.common.Head.MainHeaderCopy"
        });
        kony.mvc.registry.add("com.ahb.common.Head.MainHeaderCopy1", "MainHeaderCopy1", "MainHeaderCopy1Controller");
        kony.application.registerMaster({
            "namespace": "com.ahb.common.Head",
            "classname": "MainHeaderCopy1",
            "name": "com.ahb.common.Head.MainHeaderCopy1"
        });
        kony.mvc.registry.add("com.ahb.common.Head.MainHeaderCopy2", "MainHeaderCopy2", "MainHeaderCopy2Controller");
        kony.application.registerMaster({
            "namespace": "com.ahb.common.Head",
            "classname": "MainHeaderCopy2",
            "name": "com.ahb.common.Head.MainHeaderCopy2"
        });
        kony.mvc.registry.add("com.common.customCalendar", "customCalendar", "customCalendarController");
        kony.application.registerMaster({
            "namespace": "com.common",
            "classname": "customCalendar",
            "name": "com.common.customCalendar"
        });
        kony.mvc.registry.add("com.kmb.Messages.Popup", "Popup", "PopupController");
        kony.application.registerMaster({
            "namespace": "com.kmb.Messages",
            "classname": "Popup",
            "name": "com.kmb.Messages.Popup"
        });
        kony.mvc.registry.add("com.kmb.Search.customSearch", "customSearch", "customSearchController");
        kony.application.registerMaster({
            "namespace": "com.kmb.Search",
            "classname": "customSearch",
            "name": "com.kmb.Search.customSearch"
        });
        kony.mvc.registry.add("com.kmb.Search.customSearchbox", "customSearchbox", "customSearchboxController");
        kony.application.registerMaster({
            "namespace": "com.kmb.Search",
            "classname": "customSearchbox",
            "name": "com.kmb.Search.customSearchbox"
        });
        kony.mvc.registry.add("com.kmb.common.Hamburger", "Hamburger", "HamburgerController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "Hamburger",
            "name": "com.kmb.common.Hamburger"
        });
        kony.mvc.registry.add("com.kmb.common.customAlertPopUp", "customAlertPopUp", "customAlertPopUpController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "customAlertPopUp",
            "name": "com.kmb.common.customAlertPopUp"
        });
        kony.mvc.registry.add("com.kmb.common.customFooter", "customFooter", "customFooterController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "customFooter",
            "name": "com.kmb.common.customFooter"
        });
        kony.mvc.registry.add("com.kmb.common.customHeader", "customHeader", "customHeaderController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "customHeader",
            "name": "com.kmb.common.customHeader"
        });
        kony.mvc.registry.add("com.kmb.common.customPopup", "customPopup", "customPopupController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "customPopup",
            "name": "com.kmb.common.customPopup"
        });
        kony.mvc.registry.add("com.kmb.common.keypad", "keypad", "keypadController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "keypad",
            "name": "com.kmb.common.keypad"
        });
        kony.mvc.registry.add("com.konymp.areachart", "areachart", "areachartController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "areachart",
            "name": "com.konymp.areachart"
        });
        kony.mvc.registry.add("Flex0ic2050bb8af244", "Flex0ic2050bb8af244", "Flex0ic2050bb8af244Controller");
        kony.mvc.registry.add("flxAccountDetailsEmptyRow", "flxAccountDetailsEmptyRow", "flxAccountDetailsEmptyRowController");
        kony.mvc.registry.add("flxAccountInfo", "flxAccountInfo", "flxAccountInfoController");
        kony.mvc.registry.add("flxAccountPreview", "flxAccountPreview", "flxAccountPreviewController");
        kony.mvc.registry.add("flxAccounts", "flxAccounts", "flxAccountsController");
        kony.mvc.registry.add("flxAccountsHeader", "flxAccountsHeader", "flxAccountsHeaderController");
        kony.mvc.registry.add("flxAccountsHeaderDashboard", "flxAccountsHeaderDashboard", "flxAccountsHeaderDashboardController");
        kony.mvc.registry.add("flxAccountsNoImage", "flxAccountsNoImage", "flxAccountsNoImageController");
        kony.mvc.registry.add("flxAccountsNoImageBillPay", "flxAccountsNoImageBillPay", "flxAccountsNoImageBillPayController");
        kony.mvc.registry.add("flxAccountsNoImageBillPayDelete", "flxAccountsNoImageBillPayDelete", "flxAccountsNoImageBillPayDeleteController");
        kony.mvc.registry.add("flxAddedDestination", "flxAddedDestination", "flxAddedDestinationController");
        kony.mvc.registry.add("flxAddedExternalAccounts", "flxAddedExternalAccounts", "flxAddedExternalAccountsController");
        kony.mvc.registry.add("flxAddedExternalAccountsHeader", "flxAddedExternalAccountsHeader", "flxAddedExternalAccountsHeaderController");
        kony.mvc.registry.add("flxAds", "flxAds", "flxAdsController");
        kony.mvc.registry.add("flxAdvanceSearch", "flxAdvanceSearch", "flxAdvanceSearchController");
        kony.mvc.registry.add("CopyflxSettings0c389a41e15234d", "CopyflxSettings0c389a41e15234d", "CopyflxSettings0c389a41e15234dController");
        kony.mvc.registry.add("flxListOuterFlex", "flxListOuterFlex", "flxListOuterFlexController");
        kony.mvc.registry.add("segAttachmentMain1", "segAttachmentMain1", "segAttachmentMain1Controller");
        kony.mvc.registry.add("flxBalanceUpdateTime", "flxBalanceUpdateTime", "flxBalanceUpdateTimeController");
        kony.mvc.registry.add("flxLocation", "flxLocation", "flxLocationController");
        kony.mvc.registry.add("flxBankNameHeader", "flxBankNameHeader", "flxBankNameHeaderController");
        kony.mvc.registry.add("flxBankTimings", "flxBankTimings", "flxBankTimingsController");
        kony.mvc.registry.add("flxCards", "flxCards", "flxCardsController");
        kony.mvc.registry.add("flxCategory", "flxCategory", "flxCategoryController");
        kony.mvc.registry.add("flxChartsSpending", "flxChartsSpending", "flxChartsSpendingController");
        kony.mvc.registry.add("flxCheckImages", "flxCheckImages", "flxCheckImagesController");
        kony.mvc.registry.add("flxContacts", "flxContacts", "flxContactsController");
        kony.mvc.registry.add("flxDefaultAccount", "flxDefaultAccount", "flxDefaultAccountController");
        kony.mvc.registry.add("flxDetails", "flxDetails", "flxDetailsController");
        kony.mvc.registry.add("flxDetailsHeader", "flxDetailsHeader", "flxDetailsHeaderController");
        kony.mvc.registry.add("flxDirections", "flxDirections", "flxDirectionsController");
        kony.mvc.registry.add("flxDocument", "flxDocument", "flxDocumentController");
        kony.mvc.registry.add("flxEStmtAccountPreferences", "flxEStmtAccountPreferences", "flxEStmtAccountPreferencesController");
        kony.mvc.registry.add("flxEStmtEmail", "flxEStmtEmail", "flxEStmtEmailController");
        kony.mvc.registry.add("flxEligibilityCriteria", "flxEligibilityCriteria", "flxEligibilityCriteriaController");
        kony.mvc.registry.add("flxEmptyHeader", "flxEmptyHeader", "flxEmptyHeaderController");
        kony.mvc.registry.add("flxExternalAccounts", "flxExternalAccounts", "flxExternalAccountsController");
        kony.mvc.registry.add("flxExtAccountsHeader", "flxExtAccountsHeader", "flxExtAccountsHeaderController");
        kony.mvc.registry.add("flxExternalBanks", "flxExternalBanks", "flxExternalBanksController");
        kony.mvc.registry.add("flxFaq", "flxFaq", "flxFaqController");
        kony.mvc.registry.add("flxFrequency", "flxFrequency", "flxFrequencyController");
        kony.mvc.registry.add("flxHamburger", "flxHamburger", "flxHamburgerController");
        kony.mvc.registry.add("flxMakeTravelHeader", "flxMakeTravelHeader", "flxMakeTravelHeaderController");
        kony.mvc.registry.add("flxMakeTravelSearchResult", "flxMakeTravelSearchResult", "flxMakeTravelSearchResultController");
        kony.mvc.registry.add("flxMenu", "flxMenu", "flxMenuController");
        kony.mvc.registry.add("flxMessagesMain", "flxMessagesMain", "flxMessagesMainController");
        kony.mvc.registry.add("flxMessagesRight", "flxMessagesRight", "flxMessagesRightController");
        kony.mvc.registry.add("flxNAOPersonalDetails", "flxNAOPersonalDetails", "flxNAOPersonalDetailsController");
        kony.mvc.registry.add("flxNAOPersonalDetailsAddress", "flxNAOPersonalDetailsAddress", "flxNAOPersonalDetailsAddressController");
        kony.mvc.registry.add("flxProductAcknowledgement", "flxProductAcknowledgement", "flxProductAcknowledgementController");
        kony.mvc.registry.add("flxNAOSelectProduct", "flxNAOSelectProduct", "flxNAOSelectProductController");
        kony.mvc.registry.add("flxOBYears", "flxOBYears", "flxOBYearsController");
        kony.mvc.registry.add("flxOnBoardingOption", "flxOnBoardingOption", "flxOnBoardingOptionController");
        kony.mvc.registry.add("flxOperationHours", "flxOperationHours", "flxOperationHoursController");
        kony.mvc.registry.add("flxPFMBudget", "flxPFMBudget", "flxPFMBudgetController");
        kony.mvc.registry.add("flxPFMSpending", "flxPFMSpending", "flxPFMSpendingController");
        kony.mvc.registry.add("flxMainPhone", "flxMainPhone", "flxMainPhoneController");
        kony.mvc.registry.add("flxMain", "flxMain", "flxMainController");
        kony.mvc.registry.add("flxProductDetails", "flxProductDetails", "flxProductDetailsController");
        kony.mvc.registry.add("flxAddress", "flxAddress", "flxAddressController");
        kony.mvc.registry.add("flxRange", "flxRange", "flxRangeController");
        kony.mvc.registry.add("flxReasons", "flxReasons", "flxReasonsController");
        kony.mvc.registry.add("flxSearchAddress", "flxSearchAddress", "flxSearchAddressController");
        kony.mvc.registry.add("flxSecurityQuestion", "flxSecurityQuestion", "flxSecurityQuestionController");
        kony.mvc.registry.add("flxSecurityQuestionOptions", "flxSecurityQuestionOptions", "flxSecurityQuestionOptionsController");
        kony.mvc.registry.add("flxSelectAccountTypes", "flxSelectAccountTypes", "flxSelectAccountTypesController");
        kony.mvc.registry.add("flxSelectCard", "flxSelectCard", "flxSelectCardController");
        kony.mvc.registry.add("flxSelectCards", "flxSelectCards", "flxSelectCardsController");
        kony.mvc.registry.add("flxSelectCategory", "flxSelectCategory", "flxSelectCategoryController");
        kony.mvc.registry.add("flxSelectPayee", "flxSelectPayee", "flxSelectPayeeController");
        kony.mvc.registry.add("flxSelectProduct", "flxSelectProduct", "flxSelectProductController");
        kony.mvc.registry.add("flxServices", "flxServices", "flxServicesController");
        kony.mvc.registry.add("flxSettings", "flxSettings", "flxSettingsController");
        kony.mvc.registry.add("flxSettingHeader", "flxSettingHeader", "flxSettingHeaderController");
        kony.mvc.registry.add("flxSettingsHeader", "flxSettingsHeader", "flxSettingsHeaderController");
        kony.mvc.registry.add("flxStatements", "flxStatements", "flxStatementsController");
        kony.mvc.registry.add("flxSteps", "flxSteps", "flxStepsController");
        kony.mvc.registry.add("flxSuggestedOffers", "flxSuggestedOffers", "flxSuggestedOffersController");
        kony.mvc.registry.add("flxSupport", "flxSupport", "flxSupportController");
        kony.mvc.registry.add("flxTransHeader", "flxTransHeader", "flxTransHeaderController");
        kony.mvc.registry.add("flxTransactionMode", "flxTransactionMode", "flxTransactionModeController");
        kony.mvc.registry.add("flxTransactions", "flxTransactions", "flxTransactionsController");
        kony.mvc.registry.add("flxTransactionsManage", "flxTransactionsManage", "flxTransactionsManageController");
        kony.mvc.registry.add("flxTransferConfirmation", "flxTransferConfirmation", "flxTransferConfirmationController");
        kony.mvc.registry.add("flxTransfers", "flxTransfers", "flxTransfersController");
        kony.mvc.registry.add("flxTravelDestination", "flxTravelDestination", "flxTravelDestinationController");
        kony.mvc.registry.add("flxTravelPlan", "flxTravelPlan", "flxTravelPlanController");
        kony.mvc.registry.add("flxHead", "flxHead", "flxHeadController");
        kony.mvc.registry.add("flxMonth", "flxMonth", "flxMonthController");
        kony.mvc.registry.add("frmAccInfoEdit", "AccountModule/frmAccInfoEdit", "AccountModule/frmAccInfoEditController");
        kony.mvc.registry.add("frmAccStatements", "AccountModule/frmAccStatements", "AccountModule/frmAccStatementsController");
        kony.mvc.registry.add("frmAccountDetails", "AccountModule/frmAccountDetails", "AccountModule/frmAccountDetailsController");
        kony.mvc.registry.add("frmAccountInfo", "AccountModule/frmAccountInfo", "AccountModule/frmAccountInfoController");
        kony.mvc.registry.add("frmAddExternalAccountsTermsAndConditions", "AccountModule/frmAddExternalAccountsTermsAndConditions", "AccountModule/frmAddExternalAccountsTermsAndConditionsController");
        kony.mvc.registry.add("frmDashboard", "AccountModule/frmDashboard", "AccountModule/frmDashboardController");
        kony.mvc.registry.add("frmDashboardAggregated", "AccountModule/frmDashboardAggregated", "AccountModule/frmDashboardAggregatedController");
        kony.mvc.registry.add("frmEditNickName", "AccountModule/frmEditNickName", "AccountModule/frmEditNickNameController");
        kony.mvc.registry.add("frmExternalAccountDetails", "AccountModule/frmExternalAccountDetails", "AccountModule/frmExternalAccountDetailsController");
        kony.mvc.registry.add("frmManageExternalAccounts", "AccountModule/frmManageExternalAccounts", "AccountModule/frmManageExternalAccountsController");
        kony.mvc.registry.add("frmPFMCategorisedTransactions", "AccountModule/frmPFMCategorisedTransactions", "AccountModule/frmPFMCategorisedTransactionsController");
        kony.mvc.registry.add("frmPFMEditCategory", "AccountModule/frmPFMEditCategory", "AccountModule/frmPFMEditCategoryController");
        kony.mvc.registry.add("frmPFMMyMoney", "AccountModule/frmPFMMyMoney", "AccountModule/frmPFMMyMoneyController");
        kony.mvc.registry.add("frmPFMSelectTimePeriod", "AccountModule/frmPFMSelectTimePeriod", "AccountModule/frmPFMSelectTimePeriodController");
        kony.mvc.registry.add("frmPFMTransactionDetails", "AccountModule/frmPFMTransactionDetails", "AccountModule/frmPFMTransactionDetailsController");
        kony.mvc.registry.add("frmSelectExternalAccounts", "AccountModule/frmSelectExternalAccounts", "AccountModule/frmSelectExternalAccountsController");
        kony.mvc.registry.add("frmSelectExternalBank", "AccountModule/frmSelectExternalBank", "AccountModule/frmSelectExternalBankController");
        kony.mvc.registry.add("AuthModule/Form1", "AuthModule/Form1", "AuthModule/Form1Controller");
        kony.mvc.registry.add("Form2", "AuthModule/Form2", "AuthModule/Form2Controller");
        kony.mvc.registry.add("Form3", "AuthModule/Form3", "AuthModule/Form3Controller");
        kony.mvc.registry.add("frmAHBPinLogin", "AuthModule/frmAHBPinLogin", "AuthModule/frmAHBPinLoginController");
        kony.mvc.registry.add("frmAHBRegCardNumber", "AuthModule/frmAHBRegCardNumber", "AuthModule/frmAHBRegCardNumberController");
        kony.mvc.registry.add("frmAHBRegConfirmOTP", "AuthModule/frmAHBRegConfirmOTP", "AuthModule/frmAHBRegConfirmOTPController");
        kony.mvc.registry.add("frmAHBRegCreateAppPin", "AuthModule/frmAHBRegCreateAppPin", "AuthModule/frmAHBRegCreateAppPinController");
        kony.mvc.registry.add("frmAHBRegFaceId", "AuthModule/frmAHBRegFaceId", "AuthModule/frmAHBRegFaceIdController");
        kony.mvc.registry.add("frmAHBRegLanding", "AuthModule/frmAHBRegLanding", "AuthModule/frmAHBRegLandingController");
        kony.mvc.registry.add("frmDevRegFaceId", "AuthModule/frmDevRegFaceId", "AuthModule/frmDevRegFaceIdController");
        kony.mvc.registry.add("frmDevRegFaceIdSetAsDefault", "AuthModule/frmDevRegFaceIdSetAsDefault", "AuthModule/frmDevRegFaceIdSetAsDefaultController");
        kony.mvc.registry.add("frmDevRegLanding", "AuthModule/frmDevRegLanding", "AuthModule/frmDevRegLandingController");
        kony.mvc.registry.add("frmDevRegLoginType", "AuthModule/frmDevRegLoginType", "AuthModule/frmDevRegLoginTypeController");
        kony.mvc.registry.add("frmDevRegPin", "AuthModule/frmDevRegPin", "AuthModule/frmDevRegPinController");
        kony.mvc.registry.add("frmDevRegPinConfirmation", "AuthModule/frmDevRegPinConfirmation", "AuthModule/frmDevRegPinConfirmationController");
        kony.mvc.registry.add("frmDevRegSecCode", "AuthModule/frmDevRegSecCode", "AuthModule/frmDevRegSecCodeController");
        kony.mvc.registry.add("frmDevRegTouchId", "AuthModule/frmDevRegTouchId", "AuthModule/frmDevRegTouchIdController");
        kony.mvc.registry.add("frmExternalBankLogin", "AuthModule/frmExternalBankLogin", "AuthModule/frmExternalBankLoginController");
        kony.mvc.registry.add("frmForgotCreatePassword", "AuthModule/frmForgotCreatePassword", "AuthModule/frmForgotCreatePasswordController");
        kony.mvc.registry.add("frmForgotEnterCVV", "AuthModule/frmForgotEnterCVV", "AuthModule/frmForgotEnterCVVController");
        kony.mvc.registry.add("frmForgotEnterDOB", "AuthModule/frmForgotEnterDOB", "AuthModule/frmForgotEnterDOBController");
        kony.mvc.registry.add("frmForgotEnterLastName", "AuthModule/frmForgotEnterLastName", "AuthModule/frmForgotEnterLastNameController");
        kony.mvc.registry.add("frmForgotEnterSSN", "AuthModule/frmForgotEnterSSN", "AuthModule/frmForgotEnterSSNController");
        kony.mvc.registry.add("frmForgotEnterSecurityCode", "AuthModule/frmForgotEnterSecurityCode", "AuthModule/frmForgotEnterSecurityCodeController");
        kony.mvc.registry.add("frmForgotMain", "AuthModule/frmForgotMain", "AuthModule/frmForgotMainController");
        kony.mvc.registry.add("frmForgotSelectMethod", "AuthModule/frmForgotSelectMethod", "AuthModule/frmForgotSelectMethodController");
        kony.mvc.registry.add("frmFullScreenAds", "AuthModule/frmFullScreenAds", "AuthModule/frmFullScreenAdsController");
        kony.mvc.registry.add("frmLogin", "AuthModule/frmLogin", "AuthModule/frmLoginController");
        kony.mvc.registry.add("frmBillPay", "BillPayModule/frmBillPay", "BillPayModule/frmBillPayController");
        kony.mvc.registry.add("frmBillPayAllPayees", "BillPayModule/frmBillPayAllPayees", "BillPayModule/frmBillPayAllPayeesController");
        kony.mvc.registry.add("frmBillPayAllPayments", "BillPayModule/frmBillPayAllPayments", "BillPayModule/frmBillPayAllPaymentsController");
        kony.mvc.registry.add("frmBillPayAmount", "BillPayModule/frmBillPayAmount", "BillPayModule/frmBillPayAmountController");
        kony.mvc.registry.add("frmBillPayConfirmation", "BillPayModule/frmBillPayConfirmation", "BillPayModule/frmBillPayConfirmationController");
        kony.mvc.registry.add("frmBillPayDetails", "BillPayModule/frmBillPayDetails", "BillPayModule/frmBillPayDetailsController");
        kony.mvc.registry.add("frmBillPayDuration", "BillPayModule/frmBillPayDuration", "BillPayModule/frmBillPayDurationController");
        kony.mvc.registry.add("frmBillPayEditAddress", "BillPayModule/frmBillPayEditAddress", "BillPayModule/frmBillPayEditAddressController");
        kony.mvc.registry.add("frmBillPayEditName", "BillPayModule/frmBillPayEditName", "BillPayModule/frmBillPayEditNameController");
        kony.mvc.registry.add("frmBillPayEndDate", "BillPayModule/frmBillPayEndDate", "BillPayModule/frmBillPayEndDateController");
        kony.mvc.registry.add("frmBillPayEnterAccNo", "BillPayModule/frmBillPayEnterAccNo", "BillPayModule/frmBillPayEnterAccNoController");
        kony.mvc.registry.add("frmBillPayFrequency", "BillPayModule/frmBillPayFrequency", "BillPayModule/frmBillPayFrequencyController");
        kony.mvc.registry.add("frmBillPayFromAccount", "BillPayModule/frmBillPayFromAccount", "BillPayModule/frmBillPayFromAccountController");
        kony.mvc.registry.add("frmBillPayPayeeAddressList", "BillPayModule/frmBillPayPayeeAddressList", "BillPayModule/frmBillPayPayeeAddressListController");
        kony.mvc.registry.add("frmBillPayPayeeDetails", "BillPayModule/frmBillPayPayeeDetails", "BillPayModule/frmBillPayPayeeDetailsController");
        kony.mvc.registry.add("frmBillPayPhoneNumber", "BillPayModule/frmBillPayPhoneNumber", "BillPayModule/frmBillPayPhoneNumberController");
        kony.mvc.registry.add("frmBillPayPolicyNumber", "BillPayModule/frmBillPayPolicyNumber", "BillPayModule/frmBillPayPolicyNumberController");
        kony.mvc.registry.add("frmBillPayReEnterAccNo", "BillPayModule/frmBillPayReEnterAccNo", "BillPayModule/frmBillPayReEnterAccNoController");
        kony.mvc.registry.add("frmBillPayReEnterRelationNumber", "BillPayModule/frmBillPayReEnterRelationNumber", "BillPayModule/frmBillPayReEnterRelationNumberController");
        kony.mvc.registry.add("frmBillPayRecurrence", "BillPayModule/frmBillPayRecurrence", "BillPayModule/frmBillPayRecurrenceController");
        kony.mvc.registry.add("frmBillPayRelationNumber", "BillPayModule/frmBillPayRelationNumber", "BillPayModule/frmBillPayRelationNumberController");
        kony.mvc.registry.add("frmBillPaySearchPayee", "BillPayModule/frmBillPaySearchPayee", "BillPayModule/frmBillPaySearchPayeeController");
        kony.mvc.registry.add("frmBillPaySelectPayee", "BillPayModule/frmBillPaySelectPayee", "BillPayModule/frmBillPaySelectPayeeController");
        kony.mvc.registry.add("frmBillPayStartDate", "BillPayModule/frmBillPayStartDate", "BillPayModule/frmBillPayStartDateController");
        kony.mvc.registry.add("frmBillPayVerifyDetails", "BillPayModule/frmBillPayVerifyDetails", "BillPayModule/frmBillPayVerifyDetailsController");
        kony.mvc.registry.add("frmBillPayZipCode", "BillPayModule/frmBillPayZipCode", "BillPayModule/frmBillPayZipCodeController");
        kony.mvc.registry.add("frmCardLessCWCode", "CardLessModule/frmCardLessCWCode", "CardLessModule/frmCardLessCWCodeController");
        kony.mvc.registry.add("frmCardLessCashRec", "CardLessModule/frmCardLessCashRec", "CardLessModule/frmCardLessCashRecController");
        kony.mvc.registry.add("frmCardLessCashRecQR", "CardLessModule/frmCardLessCashRecQR", "CardLessModule/frmCardLessCashRecQRController");
        kony.mvc.registry.add("frmCardLessConfWithdraw", "CardLessModule/frmCardLessConfWithdraw", "CardLessModule/frmCardLessConfWithdrawController");
        kony.mvc.registry.add("frmCardLessConfWithdrawQR", "CardLessModule/frmCardLessConfWithdrawQR", "CardLessModule/frmCardLessConfWithdrawQRController");
        kony.mvc.registry.add("frmCardLessContactType", "CardLessModule/frmCardLessContactType", "CardLessModule/frmCardLessContactTypeController");
        kony.mvc.registry.add("frmCardLessEmail", "CardLessModule/frmCardLessEmail", "CardLessModule/frmCardLessEmailController");
        kony.mvc.registry.add("frmCardLessFrom", "CardLessModule/frmCardLessFrom", "CardLessModule/frmCardLessFromController");
        kony.mvc.registry.add("frmCardLessFromQR", "CardLessModule/frmCardLessFromQR", "CardLessModule/frmCardLessFromQRController");
        kony.mvc.registry.add("frmCardLessHome", "CardLessModule/frmCardLessHome", "CardLessModule/frmCardLessHomeController");
        kony.mvc.registry.add("frmCardLessHomeQR", "CardLessModule/frmCardLessHomeQR", "CardLessModule/frmCardLessHomeQRController");
        kony.mvc.registry.add("frmCardLessOverDraftQRCode", "CardLessModule/frmCardLessOverDraftQRCode", "CardLessModule/frmCardLessOverDraftQRCodeController");
        kony.mvc.registry.add("frmCardLessOverdraft", "CardLessModule/frmCardLessOverdraft", "CardLessModule/frmCardLessOverdraftController");
        kony.mvc.registry.add("frmCardLessOverdraftQR", "CardLessModule/frmCardLessOverDraftQR", "CardLessModule/frmCardLessOverDraftQRController");
        kony.mvc.registry.add("frmCardLessPhoneNo", "CardLessModule/frmCardLessPhoneNo", "CardLessModule/frmCardLessPhoneNoController");
        kony.mvc.registry.add("frmCardLessPickContacts", "CardLessModule/frmCardLessPickContacts", "CardLessModule/frmCardLessPickContactsController");
        kony.mvc.registry.add("frmCardLessQRCode", "CardLessModule/frmCardLessQRCode", "CardLessModule/frmCardLessQRCodeController");
        kony.mvc.registry.add("frmCardLessRecName", "CardLessModule/frmCardLessRecName", "CardLessModule/frmCardLessRecNameController");
        kony.mvc.registry.add("frmCardLessSecureCode", "CardLessModule/frmCardLessSecureCode", "CardLessModule/frmCardLessSecureCodeController");
        kony.mvc.registry.add("frmCardLessWithdraw", "CardLessModule/frmCardLessWithdraw", "CardLessModule/frmCardLessWithdrawController");
        kony.mvc.registry.add("frmCardLessWithdrawQR", "CardLessModule/frmCardLessWithdrawQR", "CardLessModule/frmCardLessWithdrawQRController");
        kony.mvc.registry.add("frmChatbot", "ChatBotModule/frmChatbot", "ChatBotModule/frmChatbotController");
        kony.mvc.registry.add("frmCheckDeposit", "CheckDepositModule/frmCheckDeposit", "CheckDepositModule/frmCheckDepositController");
        kony.mvc.registry.add("frmCheckDepositTo", "CheckDepositModule/frmCheckDepositTo", "CheckDepositModule/frmCheckDepositToController");
        kony.mvc.registry.add("frmConfirmTransferCD", "CheckDepositModule/frmConfirmTransferCD", "CheckDepositModule/frmConfirmTransferCDController");
        kony.mvc.registry.add("frmDepositAmountCD", "CheckDepositModule/frmDepositAmountCD", "CheckDepositModule/frmDepositAmountCDController");
        kony.mvc.registry.add("frmDepositToCD", "CheckDepositModule/frmDepositToCD", "CheckDepositModule/frmDepositToCDController");
        kony.mvc.registry.add("frmTransactionDetails", "CheckDepositModule/frmTransactionDetails", "CheckDepositModule/frmTransactionDetailsController");
        kony.mvc.registry.add("frmUploadCheckImages", "CheckDepositModule/frmUploadCheckImages", "CheckDepositModule/frmUploadCheckImagesController");
        kony.mvc.registry.add("frmEnrollAccinfo", "EnrollModule/frmEnrollAccinfo", "EnrollModule/frmEnrollAccinfoController");
        kony.mvc.registry.add("frmEnrollCVV", "EnrollModule/frmEnrollCVV", "EnrollModule/frmEnrollCVVController");
        kony.mvc.registry.add("frmEnrollDOB", "EnrollModule/frmEnrollDOB", "EnrollModule/frmEnrollDOBController");
        kony.mvc.registry.add("frmEnrollLastName", "EnrollModule/frmEnrollLastName", "EnrollModule/frmEnrollLastNameController");
        kony.mvc.registry.add("frmEnrollSSn", "EnrollModule/frmEnrollSSn", "EnrollModule/frmEnrollSSnController");
        kony.mvc.registry.add("frmEnrollSecurity", "EnrollModule/frmEnrollSecurity", "EnrollModule/frmEnrollSecurityController");
        kony.mvc.registry.add("frmEnrollSecurityCheck", "EnrollModule/frmEnrollSecurityCheck", "EnrollModule/frmEnrollSecurityCheckController");
        kony.mvc.registry.add("frmEnrollSignUp", "EnrollModule/frmEnrollSignUp", "EnrollModule/frmEnrollSignUpController");
        kony.mvc.registry.add("frmSupport", "InformationModule/frmSupport", "InformationModule/frmSupportController");
        kony.mvc.registry.add("frmSupportInfo", "InformationModule/frmSupportInfo", "InformationModule/frmSupportInfoController");
        kony.mvc.registry.add("frmLocationDetails", "LocateUsModule/frmLocationDetails", "LocateUsModule/frmLocationDetailsController");
        kony.mvc.registry.add("frmLocationDirections", "LocateUsModule/frmLocationDirections", "LocateUsModule/frmLocationDirectionsController");
        kony.mvc.registry.add("frmLocationMap", "LocateUsModule/frmLocationMap", "LocateUsModule/frmLocationMapController");
        kony.mvc.registry.add("frmCardManageDetails", "ManageCardsModule/frmCardManageDetails", "ManageCardsModule/frmCardManageDetailsController");
        kony.mvc.registry.add("frmCardManageHome", "ManageCardsModule/frmCardManageHome", "ManageCardsModule/frmCardManageHomeController");
        kony.mvc.registry.add("frmCardMgtSecurityCode", "ManageCardsModule/frmCardMgtSecurityCode", "ManageCardsModule/frmCardMgtSecurityCodeController");
        kony.mvc.registry.add("frmCardMngBillAddress", "ManageCardsModule/frmCardMngBillAddress", "ManageCardsModule/frmCardMngBillAddressController");
        kony.mvc.registry.add("frmCardMngConfirmDetails", "ManageCardsModule/frmCardMngConfirmDetails", "ManageCardsModule/frmCardMngConfirmDetailsController");
        kony.mvc.registry.add("frmCardMngNewPin", "ManageCardsModule/frmCardMngNewPin", "ManageCardsModule/frmCardMngNewPinController");
        kony.mvc.registry.add("frmCardMngNickName", "ManageCardsModule/frmCardMngNickName", "ManageCardsModule/frmCardMngNickNameController");
        kony.mvc.registry.add("frmCardMngPinChgOptions", "ManageCardsModule/frmCardMngPinChgOptions", "ManageCardsModule/frmCardMngPinChgOptionsController");
        kony.mvc.registry.add("frmCardMngPinChgTypes", "ManageCardsModule/frmCardMngPinChgTypes", "ManageCardsModule/frmCardMngPinChgTypesController");
        kony.mvc.registry.add("frmCardMngReasons", "ManageCardsModule/frmCardMngReasons", "ManageCardsModule/frmCardMngReasonsController");
        kony.mvc.registry.add("frmCardMngReplaceCardConfirm", "ManageCardsModule/frmCardMngReplaceCardConfirm", "ManageCardsModule/frmCardMngReplaceCardConfirmController");
        kony.mvc.registry.add("frmManageTravelConfirmation", "ManageCardsModule/frmManageTravelConfirmation", "ManageCardsModule/frmManageTravelConfirmationController");
        kony.mvc.registry.add("frmManageTravelDestination", "ManageCardsModule/frmManageTravelDestination", "ManageCardsModule/frmManageTravelDestinationController");
        kony.mvc.registry.add("frmManageTravelDetails", "ManageCardsModule/frmManageTravelDetails", "ManageCardsModule/frmManageTravelDetailsController");
        kony.mvc.registry.add("frmManageTravelEndDate", "ManageCardsModule/frmManageTravelEndDate", "ManageCardsModule/frmManageTravelEndDateController");
        kony.mvc.registry.add("frmManageTravelPhoneNumber", "ManageCardsModule/frmManageTravelPhoneNumber", "ManageCardsModule/frmManageTravelPhoneNumberController");
        kony.mvc.registry.add("frmManageTravelPlans", "ManageCardsModule/frmManageTravelPlans", "ManageCardsModule/frmManageTravelPlansController");
        kony.mvc.registry.add("frmManageTravelSelectCards", "ManageCardsModule/frmManageTravelSelectCards", "ManageCardsModule/frmManageTravelSelectCardsController");
        kony.mvc.registry.add("frmManageTravelStartDate", "ManageCardsModule/frmManageTravelStartDate", "ManageCardsModule/frmManageTravelStartDateController");
        kony.mvc.registry.add("frmMenu", "MenuModule/frmMenu", "MenuModule/frmMenuController");
        kony.mvc.registry.add("frmMessages", "MessagesModule/frmMessages", "MessagesModule/frmMessagesController");
        kony.mvc.registry.add("frmMessagesDetails", "MessagesModule/frmMessagesDetails", "MessagesModule/frmMessagesDetailsController");
        kony.mvc.registry.add("frmNewMessage", "MessagesModule/frmNewMessage", "MessagesModule/frmNewMessageController");
        kony.mvc.registry.add("frmNewMessageCategory", "MessagesModule/frmNewMessageCategory", "MessagesModule/frmNewMessageCategoryController");
        kony.mvc.registry.add("frmNAOAck", "NewAccountOpeningModule/frmNAOAck", "NewAccountOpeningModule/frmNAOAckController");
        kony.mvc.registry.add("frmNAOProductDetails", "NewAccountOpeningModule/frmNAOProductDetails", "NewAccountOpeningModule/frmNAOProductDetailsController");
        kony.mvc.registry.add("frmNAOReviewProduct", "NewAccountOpeningModule/frmNAOReviewProduct", "NewAccountOpeningModule/frmNAOReviewProductController");
        kony.mvc.registry.add("frmNAOSelectProduct", "NewAccountOpeningModule/frmNAOSelectProduct", "NewAccountOpeningModule/frmNAOSelectProductController");
        kony.mvc.registry.add("frmOBAcknowledgement", "NewUserModule/frmOBAcknowledgement", "NewUserModule/frmOBAcknowledgementController");
        kony.mvc.registry.add("frmOBAddPersonalInfo", "NewUserModule/frmOBAddPersonalInfo", "NewUserModule/frmOBAddPersonalInfoController");
        kony.mvc.registry.add("frmOBCreditCheck", "NewUserModule/frmOBCreditCheck", "NewUserModule/frmOBCreditCheckController");
        kony.mvc.registry.add("frmOBDOB", "NewUserModule/frmOBDOB", "NewUserModule/frmOBDOBController");
        kony.mvc.registry.add("frmOBDependents", "NewUserModule/frmOBDependents", "NewUserModule/frmOBDependentsController");
        kony.mvc.registry.add("frmOBDocumentsNew", "NewUserModule/frmOBDocumentsNew", "NewUserModule/frmOBDocumentsNewController");
        kony.mvc.registry.add("frmOBEditFirstLastName", "NewUserModule/frmOBEditFirstLastName", "NewUserModule/frmOBEditFirstLastNameController");
        kony.mvc.registry.add("frmOBEmail", "NewUserModule/frmOBEmail", "NewUserModule/frmOBEmailController");
        kony.mvc.registry.add("frmOBEmploymentCurrentPosition", "NewUserModule/frmOBEmploymentCurrentPosition", "NewUserModule/frmOBEmploymentCurrentPositionController");
        kony.mvc.registry.add("frmOBEmploymentDetails", "NewUserModule/frmOBEmploymentDetails", "NewUserModule/frmOBEmploymentDetailsController");
        kony.mvc.registry.add("frmOBEmploymentType", "NewUserModule/frmOBEmploymentType", "NewUserModule/frmOBEmploymentTypeController");
        kony.mvc.registry.add("frmOBFailure", "NewUserModule/frmOBFailure", "NewUserModule/frmOBFailureController");
        kony.mvc.registry.add("frmOBFinancialInfoAnnualIncome", "NewUserModule/frmOBFinancialInfoAnnualIncome", "NewUserModule/frmOBFinancialInfoAnnualIncomeController");
        kony.mvc.registry.add("frmOBFinancialInfoAssets", "NewUserModule/frmOBFinancialInfoAssets", "NewUserModule/frmOBFinancialInfoAssetsController");
        kony.mvc.registry.add("frmOBFinancialInfoExpenditure", "NewUserModule/frmOBFinancialInfoExpenditure", "NewUserModule/frmOBFinancialInfoExpenditureController");
        kony.mvc.registry.add("frmOBGender", "NewUserModule/frmOBGender", "NewUserModule/frmOBGenderController");
        kony.mvc.registry.add("frmOBLanding", "NewUserModule/frmOBLanding", "NewUserModule/frmOBLandingController");
        kony.mvc.registry.add("frmOBLandingNew", "NewUserModule/frmOBLandingNew", "NewUserModule/frmOBLandingNewController");
        kony.mvc.registry.add("frmOBLandingRegistered", "NewUserModule/frmOBLandingRegistered", "NewUserModule/frmOBLandingRegisteredController");
        kony.mvc.registry.add("frmOBLogin", "NewUserModule/frmOBLogin", "NewUserModule/frmOBLoginController");
        kony.mvc.registry.add("frmOBMaritialStatus", "NewUserModule/frmOBMaritialStatus", "NewUserModule/frmOBMaritialStatusController");
        kony.mvc.registry.add("frmOBMembershipEligibility", "NewUserModule/frmOBMembershipEligibility", "NewUserModule/frmOBMembershipEligibilityController");
        kony.mvc.registry.add("frmOBPersonalInfo", "NewUserModule/frmOBPersonalInfo", "NewUserModule/frmOBPersonalInfoController");
        kony.mvc.registry.add("frmOBRegularSavings", "NewUserModule/frmOBRegularSavings", "NewUserModule/frmOBRegularSavingsController");
        kony.mvc.registry.add("frmOBResidentialAddress", "NewUserModule/frmOBResidentialAddress", "NewUserModule/frmOBResidentialAddressController");
        kony.mvc.registry.add("frmOBSecurityCode", "NewUserModule/frmOBSecurityCode", "NewUserModule/frmOBSecurityCodeController");
        kony.mvc.registry.add("frmOBSecurityQuestionsNew", "NewUserModule/frmOBSecurityQuestionsNew", "NewUserModule/frmOBSecurityQuestionsNewController");
        kony.mvc.registry.add("frmOBSelectProducts", "NewUserModule/frmOBSelectProducts", "NewUserModule/frmOBSelectProductsController");
        kony.mvc.registry.add("frmOBSignInWithPhoneNumber", "NewUserModule/frmOBSignInWithPhoneNumber", "NewUserModule/frmOBSignInWithPhoneNumberController");
        kony.mvc.registry.add("frmOBSignature", "NewUserModule/frmOBSignature", "NewUserModule/frmOBSignatureController");
        kony.mvc.registry.add("frmOBSpouseName", "NewUserModule/frmOBSpouseName", "NewUserModule/frmOBSpouseNameController");
        kony.mvc.registry.add("frmOBSuccess", "NewUserModule/frmOBSuccess", "NewUserModule/frmOBSuccessController");
        kony.mvc.registry.add("frmOBsetUserNamePwd", "NewUserModule/frmOBsetUserNamePwd", "NewUserModule/frmOBsetUserNamePwdController");
        kony.mvc.registry.add("frmTermsAndConditions", "NewUserModule/frmTermsAndConditions", "NewUserModule/frmTermsAndConditionsController");
        kony.mvc.registry.add("OLDfrmEnrollAccNo", "OLDfrmEnrollAccNo", "OLDfrmEnrollAccNoController");
        kony.mvc.registry.add("frmManageEditRecipient", "PayAPersonModule/frmManageEditRecipient", "PayAPersonModule/frmManageEditRecipientController");
        kony.mvc.registry.add("frmManageP2pRecipient", "PayAPersonModule/frmManageP2pRecipient", "PayAPersonModule/frmManageP2pRecipientController");
        kony.mvc.registry.add("frmManageRecipientList", "PayAPersonModule/frmManageRecipientList", "PayAPersonModule/frmManageRecipientListController");
        kony.mvc.registry.add("frmManageRecipientType", "PayAPersonModule/frmManageRecipientType", "PayAPersonModule/frmManageRecipientTypeController");
        kony.mvc.registry.add("frmP2PPickContact", "PayAPersonModule/frmP2PPickContact", "PayAPersonModule/frmP2PPickContactController");
        kony.mvc.registry.add("frmP2PRecEmail", "PayAPersonModule/frmP2PRecEmail", "PayAPersonModule/frmP2PRecEmailController");
        kony.mvc.registry.add("frmP2PRecPhoneNo", "PayAPersonModule/frmP2PRecPhoneNo", "PayAPersonModule/frmP2PRecPhoneNoController");
        kony.mvc.registry.add("frmP2PRecipientName", "PayAPersonModule/frmP2PRecipientName", "PayAPersonModule/frmP2PRecipientNameController");
        kony.mvc.registry.add("frmP2PVerifyDetails", "PayAPersonModule/frmP2PVerifyDetails", "PayAPersonModule/frmP2PVerifyDetailsController");
        kony.mvc.registry.add("frmP2pAmount", "PayAPersonModule/frmP2pAmount", "PayAPersonModule/frmP2pAmountController");
        kony.mvc.registry.add("frmP2pConfirmation", "PayAPersonModule/frmP2pConfirmation", "PayAPersonModule/frmP2pConfirmationController");
        kony.mvc.registry.add("frmP2pDuration", "PayAPersonModule/frmP2pDuration", "PayAPersonModule/frmP2pDurationController");
        kony.mvc.registry.add("frmP2pEndDate", "PayAPersonModule/frmP2pEndDate", "PayAPersonModule/frmP2pEndDateController");
        kony.mvc.registry.add("frmP2pFrequency", "PayAPersonModule/frmP2pFrequency", "PayAPersonModule/frmP2pFrequencyController");
        kony.mvc.registry.add("frmP2pFromAccount", "PayAPersonModule/frmP2pFromAccount", "PayAPersonModule/frmP2pFromAccountController");
        kony.mvc.registry.add("frmP2pRecurrence", "PayAPersonModule/frmP2pRecurrence", "PayAPersonModule/frmP2pRecurrenceController");
        kony.mvc.registry.add("frmP2pSelectRecipient", "PayAPersonModule/frmP2pSelectRecipient", "PayAPersonModule/frmP2pSelectRecipientController");
        kony.mvc.registry.add("frmP2pStartDate", "PayAPersonModule/frmP2pStartDate", "PayAPersonModule/frmP2pStartDateController");
        kony.mvc.registry.add("frmRegP2PContactType", "PayAPersonModule/frmRegP2PContactType", "PayAPersonModule/frmRegP2PContactTypeController");
        kony.mvc.registry.add("frmAlertsAccountDetail", "SettingsModule/frmAlertsAccountDetail", "SettingsModule/frmAlertsAccountDetailController");
        kony.mvc.registry.add("frmAlertsAccountList", "SettingsModule/frmAlertsAccountList", "SettingsModule/frmAlertsAccountListController");
        kony.mvc.registry.add("frmAlertsBalanceUpdate", "SettingsModule/frmAlertsBalanceUpdate", "SettingsModule/frmAlertsBalanceUpdateController");
        kony.mvc.registry.add("frmAlertsDealsAndSecurity", "SettingsModule/frmAlertsDealsAndSecurity", "SettingsModule/frmAlertsDealsAndSecurityController");
        kony.mvc.registry.add("frmAlertsMinimumBalance", "SettingsModule/frmAlertsMinimumBalance", "SettingsModule/frmAlertsMinimumBalanceController");
        kony.mvc.registry.add("frmPreferencesAccountPreview", "SettingsModule/frmPreferencesAccountPreview", "SettingsModule/frmPreferencesAccountPreviewController");
        kony.mvc.registry.add("frmPreferencesDefaultAccount", "SettingsModule/frmPreferencesDefaultAccount", "SettingsModule/frmPreferencesDefaultAccountController");
        kony.mvc.registry.add("frmPreferencesDefaultLogin", "SettingsModule/frmPreferencesDefaultLogin", "SettingsModule/frmPreferencesDefaultLoginController");
        kony.mvc.registry.add("frmPreferencesDeviceDeRegistration", "SettingsModule/frmPreferencesDeviceDeRegistration", "SettingsModule/frmPreferencesDeviceDeRegistrationController");
        kony.mvc.registry.add("frmPreferencesDeviceRegSecCode", "SettingsModule/frmPreferencesDeviceRegSecCode", "SettingsModule/frmPreferencesDeviceRegSecCodeController");
        kony.mvc.registry.add("frmPreferencesDeviceRegistration", "SettingsModule/frmPreferencesDeviceRegistration", "SettingsModule/frmPreferencesDeviceRegistrationController");
        kony.mvc.registry.add("frmPreferencesFaceId", "SettingsModule/frmPreferencesFaceId", "SettingsModule/frmPreferencesFaceIdController");
        kony.mvc.registry.add("frmPreferencesPin", "SettingsModule/frmPreferencesPin", "SettingsModule/frmPreferencesPinController");
        kony.mvc.registry.add("frmPreferencesResetStep1", "SettingsModule/frmPreferencesResetStep1", "SettingsModule/frmPreferencesResetStep1Controller");
        kony.mvc.registry.add("frmPreferencesResetStep2", "SettingsModule/frmPreferencesResetStep2", "SettingsModule/frmPreferencesResetStep2Controller");
        kony.mvc.registry.add("frmPreferencesResetStep3", "SettingsModule/frmPreferencesResetStep3", "SettingsModule/frmPreferencesResetStep3Controller");
        kony.mvc.registry.add("frmPreferencesTouchId", "SettingsModule/frmPreferencesTouchId", "SettingsModule/frmPreferencesTouchIdController");
        kony.mvc.registry.add("frmProfileAddAddress", "SettingsModule/frmProfileAddAddress", "SettingsModule/frmProfileAddAddressController");
        kony.mvc.registry.add("frmProfileAdressType", "SettingsModule/frmProfileAdressType", "SettingsModule/frmProfileAdressTypeController");
        kony.mvc.registry.add("frmProfileChangeAndUpdatePassword", "SettingsModule/frmProfileChangeAndUpdatePassword", "SettingsModule/frmProfileChangeAndUpdatePasswordController");
        kony.mvc.registry.add("frmProfileChangePassword", "SettingsModule/frmProfileChangePassword", "SettingsModule/frmProfileChangePasswordController");
        kony.mvc.registry.add("frmProfileChangeUsername", "SettingsModule/frmProfileChangeUsername", "SettingsModule/frmProfileChangeUsernameController");
        kony.mvc.registry.add("frmProfileConfirmAddressDetails", "SettingsModule/frmProfileConfirmAddressDetails", "SettingsModule/frmProfileConfirmAddressDetailsController");
        kony.mvc.registry.add("frmProfileConfirmDetails", "SettingsModule/frmProfileConfirmDetails", "SettingsModule/frmProfileConfirmDetailsController");
        kony.mvc.registry.add("frmProfileContactType", "SettingsModule/frmProfileContactType", "SettingsModule/frmProfileContactTypeController");
        kony.mvc.registry.add("frmProfileEditAddress", "SettingsModule/frmProfileEditAddress", "SettingsModule/frmProfileEditAddressController");
        kony.mvc.registry.add("frmProfileEditAddressList", "SettingsModule/frmProfileEditAddressList", "SettingsModule/frmProfileEditAddressListController");
        kony.mvc.registry.add("frmProfileEditEmails", "SettingsModule/frmProfileEditEmails", "SettingsModule/frmProfileEditEmailsController");
        kony.mvc.registry.add("frmProfileEditPhoneNumberMain", "SettingsModule/frmProfileEditPhoneNumberMain", "SettingsModule/frmProfileEditPhoneNumberMainController");
        kony.mvc.registry.add("frmProfileEditPhoneNumbers", "SettingsModule/frmProfileEditPhoneNumbers", "SettingsModule/frmProfileEditPhoneNumbersController");
        kony.mvc.registry.add("frmProfileEnterEmailID", "SettingsModule/frmProfileEnterEmailID", "SettingsModule/frmProfileEnterEmailIDController");
        kony.mvc.registry.add("frmProfileEnterPhoneNumber", "SettingsModule/frmProfileEnterPhoneNumber", "SettingsModule/frmProfileEnterPhoneNumberController");
        kony.mvc.registry.add("frmProfilePersonalDetails", "SettingsModule/frmProfilePersonalDetails", "SettingsModule/frmProfilePersonalDetailsController");
        kony.mvc.registry.add("frmProfileSecurityCode", "SettingsModule/frmProfileSecurityCode", "SettingsModule/frmProfileSecurityCodeController");
        kony.mvc.registry.add("frmProfileSelectLocation", "SettingsModule/frmProfileSelectLocation", "SettingsModule/frmProfileSelectLocationController");
        kony.mvc.registry.add("frmProfileUsername", "SettingsModule/frmProfileUsername", "SettingsModule/frmProfileUsernameController");
        kony.mvc.registry.add("frmSettings", "SettingsModule/frmSettings", "SettingsModule/frmSettingsController");
        kony.mvc.registry.add("frmAdvanceSearch", "TransactionModule/frmAdvanceSearch", "TransactionModule/frmAdvanceSearchController");
        kony.mvc.registry.add("frmTransfers", "TransactionModule/frmTransfers", "TransactionModule/frmTransfersController");
        kony.mvc.registry.add("frmAddBenRoutNo", "TransferModule/frmAddBenRoutNo", "TransferModule/frmAddBenRoutNoController");
        kony.mvc.registry.add("frmBenAccountType", "TransferModule/frmBenAccountType", "TransferModule/frmBenAccountTypeController");
        kony.mvc.registry.add("frmBenCountry", "TransferModule/frmBenCountry", "TransferModule/frmBenCountryController");
        kony.mvc.registry.add("frmBenName", "TransferModule/frmBenName", "TransferModule/frmBenNameController");
        kony.mvc.registry.add("frmBenSwiftCode", "TransferModule/frmBenSwiftCode", "TransferModule/frmBenSwiftCodeController");
        kony.mvc.registry.add("frmBenVerifyDetails", "TransferModule/frmBenVerifyDetails", "TransferModule/frmBenVerifyDetailsController");
        kony.mvc.registry.add("frmEnterBenAccNo", "TransferModule/frmEnterBenAccNo", "TransferModule/frmEnterBenAccNoController");
        kony.mvc.registry.add("frmManageTransferRecipient", "TransferModule/frmManageTransferRecipient", "TransferModule/frmManageTransferRecipientController");
        kony.mvc.registry.add("frmManageTransferRecipientInfo", "TransferModule/frmManageTransferRecipientInfo", "TransferModule/frmManageTransferRecipientInfoController");
        kony.mvc.registry.add("frmReEnterBenAccNo", "TransferModule/frmReEnterBenAccNo", "TransferModule/frmReEnterBenAccNoController");
        kony.mvc.registry.add("frmTransactionMode", "TransferModule/frmTransactionMode", "TransferModule/frmTransactionModeController");
        kony.mvc.registry.add("frmTransferAmount", "TransferModule/frmTransferAmount", "TransferModule/frmTransferAmountController");
        kony.mvc.registry.add("frmTransferConfirmation", "TransferModule/frmTransferConfirmation", "TransferModule/frmTransferConfirmationController");
        kony.mvc.registry.add("frmTransferFrequency", "TransferModule/frmTransferFrequency", "TransferModule/frmTransferFrequencyController");
        kony.mvc.registry.add("frmTransfersDuration", "TransferModule/frmTransfersDuration", "TransferModule/frmTransfersDurationController");
        kony.mvc.registry.add("frmTransfersEndDate", "TransferModule/frmTransfersEndDate", "TransferModule/frmTransfersEndDateController");
        kony.mvc.registry.add("frmTransfersFromAccount", "TransferModule/frmTransfersFromAccount", "TransferModule/frmTransfersFromAccountController");
        kony.mvc.registry.add("frmTransfersRecurrence", "TransferModule/frmTransfersRecurrence", "TransferModule/frmTransfersRecurrenceController");
        kony.mvc.registry.add("frmTransfersStartDate", "TransferModule/frmTransfersStartDate", "TransferModule/frmTransfersStartDateController");
        kony.mvc.registry.add("frmTransfersToAccount", "TransferModule/frmTransfersToAccount", "TransferModule/frmTransfersToAccountController");
        kony.mvc.registry.add("frmAdvanceSearchResults", "frmAdvanceSearchResults", "frmAdvanceSearchResultsController");
        kony.mvc.registry.add("frmAlertsSettings", "frmAlertsSettings", "frmAlertsSettingsController");
        kony.mvc.registry.add("frmAlreadyEnrolled", "frmAlreadyEnrolled", "frmAlreadyEnrolledController");
        kony.mvc.registry.add("frmCamAndroidUtility", "frmCamAndroidUtility", "frmCamAndroidUtilityController");
        kony.mvc.registry.add("frmChangeProfilePicture", "frmChangeProfilePicture", "frmChangeProfilePictureController");
        kony.mvc.registry.add("frmDashboardOld", "frmDashboardOld", "frmDashboardOldController");
        kony.mvc.registry.add("frmDefaultLogin", "frmDefaultLogin", "frmDefaultLoginController");
        kony.mvc.registry.add("frmEStmtAccountDetails", "frmEStmtAccountDetails", "frmEStmtAccountDetailsController");
        kony.mvc.registry.add("frmEStmtAccountPreferences", "frmEStmtAccountPreferences", "frmEStmtAccountPreferencesController");
        kony.mvc.registry.add("frmEStmtChangeEmail", "frmEStmtChangeEmail", "frmEStmtChangeEmailController");
        kony.mvc.registry.add("frmEStmtDisableEStatements", "frmEStmtDisableEStatements", "frmEStmtDisableEStatementsController");
        kony.mvc.registry.add("frmEStmtEditNickName", "frmEStmtEditNickName", "frmEStmtEditNickNameController");
        kony.mvc.registry.add("frmEStmtEnableEStatements", "frmEStmtEnableEStatements", "frmEStmtEnableEStatementsController");
        kony.mvc.registry.add("frmEStmtTermsAndConditions", "frmEStmtTermsAndConditions", "frmEStmtTermsAndConditionsController");
        kony.mvc.registry.add("frmError", "frmError", "frmErrorController");
        kony.mvc.registry.add("frmForgot", "frmForgot", "frmForgotController");
        kony.mvc.registry.add("frmLocation", "frmLocation", "frmLocationController");
        kony.mvc.registry.add("frmOBDocument", "frmOBDocument", "frmOBDocumentController");
        kony.mvc.registry.add("frmOBSecurityQuestions", "frmOBSecurityQuestions", "frmOBSecurityQuestionsController");
        kony.mvc.registry.add("frmOnBoarding", "frmOnBoarding", "frmOnBoardingController");
        kony.mvc.registry.add("frmPFMAdvanceSearchResults", "frmPFMAdvanceSearchResults", "frmPFMAdvanceSearchResultsController");
        kony.mvc.registry.add("frmPFMAdvancedSearch", "frmPFMAdvancedSearch", "frmPFMAdvancedSearchController");
        kony.mvc.registry.add("frmPFMNote", "frmPFMNote", "frmPFMNoteController");
        kony.mvc.registry.add("frmPreferencesFaceIdSetAsDefault", "frmPreferencesFaceIdSetAsDefault", "frmPreferencesFaceIdSetAsDefaultController");
        kony.mvc.registry.add("frmProfileCountry", "frmProfileCountry", "frmProfileCountryController");
        kony.mvc.registry.add("frmProfileCountryCode", "frmProfileCountryCode", "frmProfileCountryCodeController");
        kony.mvc.registry.add("frmSetDefaultAccount", "frmSetDefaultAccount", "frmSetDefaultAccountController");
        kony.mvc.registry.add("frmUpdatePassword", "frmUpdatePassword", "frmUpdatePasswordController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {
        return applicationController.AS_AppEvents_c26b10e9c0764bde8f8f42317331324a(eventObj);
    },
    appmenuseq: function() {
        new kony.mvc.Navigation("AuthModule/Form1").navigate();
    }
});