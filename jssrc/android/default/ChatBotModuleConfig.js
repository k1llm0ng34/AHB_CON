ChatBotModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "ChatBotModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmChatbot": {
                "Controller": "ChatBotModule/frmChatbotController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "ChatBotModule/frmChatbot",
                "friendlyName": "frmChatbot"
            }
        }
    },
    "ModuleName": "ChatBotModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "ChatBotModule/PresentationControllers/PresentationController",
            "PresentationExtensions": [
                "ChatBotModule/PresentationControllers/PresentationController_Extn"
            ]
        }
    }
};