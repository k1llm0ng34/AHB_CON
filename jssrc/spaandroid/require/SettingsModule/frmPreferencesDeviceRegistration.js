define("SettingsModule/frmPreferencesDeviceRegistration", function() {
    return function(controller) {
        function addWidgetsfrmPreferencesDeviceRegistration() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "clipBounds": false,
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.i18n_text = "kony.i18n.getLocalizedString(\"kony.mb.preferences.DeviceRegistration\")";
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var lblRegisterDevice1 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRegisterDevice1",
                "isVisible": false,
                "left": "60dp",
                "right": "60dp",
                "skin": "sknLbl424242SSPLight36px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.preferences.RegisterDeviceSmall\")",
                "textStyle": {},
                "top": "71dp",
                "width": "270dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblRegisterDevice2 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRegisterDevice2",
                "isVisible": true,
                "left": "60dp",
                "right": "60dp",
                "skin": "sknLbla0a0a0SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.preferences.ThisDeviceIsNotYetRegisteredForMobileBankingPeriod\")",
                "textStyle": {},
                "top": "70dp",
                "width": "270dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblRegisterDevice3 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRegisterDevice3",
                "isVisible": true,
                "left": "60dp",
                "right": "60dp",
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.preferences.DoYouWantToRegisterThisDevice?\")",
                "textStyle": {},
                "top": "30dp",
                "width": "270dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxBtn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBtn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "80dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBtn.setDefaultUnit(kony.flex.DP);
            var btnRegisterDevice = new kony.ui.Button({
                "focusSkin": "sknBtn0095e426pxEnabled",
                "height": "40dp",
                "id": "btnRegisterDevice",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.preferences.REGISTERDEVICE\")",
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBtn.add(btnRegisterDevice);
            flxMainContainer.add(lblRegisterDevice1, lblRegisterDevice2, lblRegisterDevice3, flxBtn);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxf54b5e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "customPopup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMainContainer, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmPreferencesDeviceRegistration,
            "enabledForIdleTimeout": true,
            "id": "frmPreferencesDeviceRegistration",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_d40fc79f89714cf5a8c643fa005d1fc0,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.preferences.DeviceRegistration\")"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});