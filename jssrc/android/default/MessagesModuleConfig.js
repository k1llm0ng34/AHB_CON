MessagesModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "MessagesModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmMessages": {
                "Controller": "MessagesModule/frmMessagesController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MessagesModule/frmMessages",
                "friendlyName": "frmMessages"
            },
            "frmMessagesDetails": {
                "Controller": "MessagesModule/frmMessagesDetailsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MessagesModule/frmMessagesDetails",
                "friendlyName": "frmMessagesDetails"
            },
            "frmNewMessage": {
                "Controller": "MessagesModule/frmNewMessageController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MessagesModule/frmNewMessage",
                "friendlyName": "frmNewMessage"
            },
            "frmNewMessageCategory": {
                "Controller": "MessagesModule/frmNewMessageCategoryController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MessagesModule/frmNewMessageCategory",
                "friendlyName": "frmNewMessageCategory"
            }
        }
    },
    "ModuleName": "MessagesModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "MessagesModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        }
    }
};