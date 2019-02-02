LocateUsModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "LocateUsModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmLocationDetails": {
                "Controller": "LocateUsModule/frmLocationDetailsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "LocateUsModule/frmLocationDetails",
                "friendlyName": "frmLocationDetails"
            },
            "frmLocationDirections": {
                "Controller": "LocateUsModule/frmLocationDirectionsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "LocateUsModule/frmLocationDirections",
                "friendlyName": "frmLocationDirections"
            },
            "frmLocationMap": {
                "Controller": "LocateUsModule/frmLocationMapController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "LocateUsModule/frmLocationMap",
                "friendlyName": "frmLocationMap"
            }
        }
    },
    "ModuleName": "LocateUsModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "LocateUsModule/PresentationControllers/PresentationController",
            "PresentationExtensions": [
                "LocateUsModule/PresentationControllers/PresentationController_Extn"
            ]
        }
    }
};