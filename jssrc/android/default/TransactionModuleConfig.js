TransactionModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "TransactionModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmAdvanceSearch": {
                "Controller": "TransactionModule/frmAdvanceSearchController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "TransactionModule/frmAdvanceSearch",
                "friendlyName": "frmAdvanceSearch"
            },
            "frmTransactionDetails": {
                "Controller": "CheckDepositModule/frmTransactionDetailsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "CheckDepositModule/frmTransactionDetails",
                "friendlyName": "frmTransactionDetails"
            },
            "frmTransfers": {
                "Controller": "TransactionModule/frmTransfersController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "TransactionModule/frmTransfers",
                "friendlyName": "frmTransfers"
            }
        }
    },
    "ModuleName": "TransactionModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "TransactionModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        }
    }
};