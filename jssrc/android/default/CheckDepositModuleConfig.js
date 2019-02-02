CheckDepositModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "CheckDepositModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmCheckDeposit": {
                "Controller": "CheckDepositModule/frmCheckDepositController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "CheckDepositModule/frmCheckDeposit",
                "friendlyName": "frmCheckDeposit"
            },
            "frmCheckDepositTo": {
                "Controller": "CheckDepositModule/frmCheckDepositToController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "CheckDepositModule/frmCheckDepositTo",
                "friendlyName": "frmCheckDepositTo"
            },
            "frmConfirmTransferCD": {
                "Controller": "CheckDepositModule/frmConfirmTransferCDController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "CheckDepositModule/frmConfirmTransferCD",
                "friendlyName": "frmConfirmTransferCD"
            },
            "frmDepositAmountCD": {
                "Controller": "CheckDepositModule/frmDepositAmountCDController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "CheckDepositModule/frmDepositAmountCD",
                "friendlyName": "frmDepositAmountCD"
            },
            "frmDepositToCD": {
                "Controller": "CheckDepositModule/frmDepositToCDController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "CheckDepositModule/frmDepositToCD",
                "friendlyName": "frmDepositToCD"
            },
            "frmTransactionDetails": {
                "Controller": "CheckDepositModule/frmTransactionDetailsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "CheckDepositModule/frmTransactionDetails",
                "friendlyName": "frmTransactionDetails"
            },
            "frmUploadCheckImages": {
                "Controller": "CheckDepositModule/frmUploadCheckImagesController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "CheckDepositModule/frmUploadCheckImages",
                "friendlyName": "frmUploadCheckImages"
            }
        }
    },
    "ModuleName": "CheckDepositModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "CheckDepositModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        }
    }
};