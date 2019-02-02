define("SettingsModule/frmPreferencesTouchId", function() {
    return function(controller) {
        function addWidgetsfrmPreferencesTouchId() {
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
            customHeader.lblLocateUs.i18n_text = "kony.i18n.getLocalizedString(\"kony.mb.devReg.TouchId\")";
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNote",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNote.setDefaultUnit(kony.flex.DP);
            var lblNote = new kony.ui.Label({
                "id": "lblNote",
                "isVisible": true,
                "left": "30dp",
                "right": "30dp",
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.preferences.WouldYouLikeToUseTouchIdToLoginUsingYourBiometricsInsteadOfEnteringYourUsernameAndPassword?\")",
                "textStyle": {},
                "top": "57dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxNote.add(lblNote);
            var imgTouchId = new kony.ui.Image2({
                "centerX": "50%",
                "height": "80dp",
                "id": "imgTouchId",
                "isVisible": true,
                "left": "153dp",
                "skin": "slImage",
                "src": "touchidbig.png",
                "top": "185dp",
                "width": "80dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSetAsDefault = new kony.ui.Button({
                "bottom": "22dp",
                "focusSkin": "sknBtn0095e426pxEnabled",
                "height": "40dp",
                "id": "btnSetAsDefault",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.preferences.SetAsDefault\")",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(flxNote, imgTouchId, btnSetAsDefault);
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
            "addWidgets": addWidgetsfrmPreferencesTouchId,
            "enabledForIdleTimeout": true,
            "id": "frmPreferencesTouchId",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_cba77b2ee45b4ed0a03f30d88de63afd,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.devReg.TouchId\")"
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