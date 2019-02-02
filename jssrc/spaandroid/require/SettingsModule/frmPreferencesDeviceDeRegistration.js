define("SettingsModule/frmPreferencesDeviceDeRegistration", function() {
    return function(controller) {
        function addWidgetsfrmPreferencesDeviceDeRegistration() {
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
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.preferences.DeHyphenRegisterDevice\")",
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
            var lblRegisterDevice3 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRegisterDevice3",
                "isVisible": true,
                "left": "60dp",
                "right": "60dp",
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.preferences.DoYouWantToDeHyphenRegisterThisDevice?\")",
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
            var flxBtn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBtn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "47dp",
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
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.preferences.DEHyphenREGISERDEVICE\")",
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBtn.add(btnRegisterDevice);
            var lblRegisterDevice2 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRegisterDevice2",
                "isVisible": true,
                "left": "60dp",
                "right": "60dp",
                "skin": "sknLbla0a0a0SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.preferences.NoteColonYouCanRegisterItBackWhenYouLoginNextTime\")",
                "textStyle": {},
                "top": "25dp",
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
            flxMainContainer.add(lblRegisterDevice1, lblRegisterDevice3, flxBtn, lblRegisterDevice2);
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
            "addWidgets": addWidgetsfrmPreferencesDeviceDeRegistration,
            "enabledForIdleTimeout": true,
            "id": "frmPreferencesDeviceDeRegistration",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_b1b2c36c7a3b4bdd8e7ada4906095f44,
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