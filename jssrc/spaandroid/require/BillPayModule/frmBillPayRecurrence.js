define("BillPayModule/frmBillPayRecurrence", function() {
    return function(controller) {
        function addWidgetsfrmBillPayRecurrence() {
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
            customHeader.btnRight.isVisible = true;
            customHeader.btnRight.text = "CANCEL";
            customHeader.flxBack.onClick = controller.AS_FlexContainer_g395a52e6c064934be7cb7eabf8eedad;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Recurrence";
            flxHeader.add(customHeader);
            var flxRecurrenceNumberMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": true,
                "id": "flxRecurrenceNumberMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecurrenceNumberMain.setDefaultUnit(kony.flex.DP);
            var flxRecurrenceNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRecurrenceNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecurrenceNumber.setDefaultUnit(kony.flex.DP);
            var lblflxRecurrenceNumber = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblflxRecurrenceNumber",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Transfers.RecurrenceNumber\")",
                "textStyle": {},
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var imgDetails = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "imgDetails",
                "isVisible": false,
                "right": "0dp",
                "skin": "slImage",
                "src": "info.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDetails.add(imgDetails);
            flxRecurrenceNumber.add(lblflxRecurrenceNumber, flxDetails);
            var flxRecurrenceNumberValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxRecurrenceNumberValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "50dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecurrenceNumberValue.setDefaultUnit(kony.flex.DP);
            var flxInputRecurrenceNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxInputRecurrenceNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "45dp",
                "width": "72dp",
                "zIndex": 1
            }, {}, {});
            flxInputRecurrenceNumber.setDefaultUnit(kony.flex.DP);
            var lblRecurrenceNumberOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblRecurrenceNumberOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblRecurrenceNumberTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblRecurrenceNumberTwo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxInputRecurrenceNumber.add(lblRecurrenceNumberOne, lblRecurrenceNumberTwo);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnOnBoardingInactive",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.continue\")",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDummyInput = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "47.50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxDummyInput",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "45dp",
                "width": "72dp",
                "zIndex": 1
            }, {}, {});
            flxDummyInput.setDefaultUnit(kony.flex.DP);
            var CopylblRecurrenceNumberTwo0hb7176976fa34c = new kony.ui.Label({
                "height": "100%",
                "id": "CopylblRecurrenceNumberTwo0hb7176976fa34c",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "____",
                "textStyle": {},
                "top": "0dp",
                "width": "80dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxDummyInput.add(CopylblRecurrenceNumberTwo0hb7176976fa34c);
            flxRecurrenceNumberValue.add(flxInputRecurrenceNumber, btnContinue, flxDummyInput);
            flxRecurrenceNumberMain.add(flxRecurrenceNumber, flxRecurrenceNumberValue);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxKeypad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxF5F6FB",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxKeypad.setDefaultUnit(kony.flex.DP);
            var keypad = new com.kmb.common.keypad({
                "clipBounds": true,
                "height": "100%",
                "id": "keypad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            keypad.btnEight.onClick = controller.AS_Button_fe17aa3f9c134ceaba4f0b4307809089;
            keypad.btnFive.onClick = controller.AS_Button_df0d1a1eeb6c4e37af20fa89f580ac79;
            keypad.btnFour.onClick = controller.AS_Button_g21ccb1e0aa64bada87756e4a335c632;
            keypad.btnNine.onClick = controller.AS_Button_jcefc73fc44d4a35ba93da5dedcc1fe3;
            keypad.btnOne.onClick = controller.AS_Button_f8c6f7940e1a43579e19e675d8a2659f;
            keypad.btnSeven.onClick = controller.AS_Button_b82af1cd12644430bc32a22636fbecef;
            keypad.btnSix.onClick = controller.AS_Button_e07ad692203d457790a74a821af7c955;
            keypad.btnThree.onClick = controller.AS_Button_fe6a7227ee7b4ca9bc2c0f933a0bb351;
            keypad.btnTwo.onClick = controller.AS_Button_e2128d45f5e94fcc85e492ac104c70aa;
            keypad.btnZero.onClick = controller.AS_Button_h067e162fc9345da99585d343d887fc3;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_h06747e2dadc4fdb88cc1a43838554aa;
            flxKeypad.add(keypad);
            this.add(flxHeader, flxRecurrenceNumberMain, flxKeypad);
        };
        return [{
            "addWidgets": addWidgetsfrmBillPayRecurrence,
            "enabledForIdleTimeout": true,
            "id": "frmBillPayRecurrence",
            "init": controller.AS_Form_gd498c9731a0492ab16962fe08ec747a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_j9c7c8d571094dcab8c9f422ecc90e73,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.transaction.recurrence\")"
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