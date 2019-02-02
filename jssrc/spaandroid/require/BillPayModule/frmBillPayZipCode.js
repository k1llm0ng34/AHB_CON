define("BillPayModule/frmBillPayZipCode", function() {
    return function(controller) {
        function addWidgetsfrmBillPayZipCode() {
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
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Enter Zip Code";
            flxHeader.add(customHeader);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60%",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxZipCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxZipCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxZipCode.setDefaultUnit(kony.flex.DP);
            var lblZipCodeTitle = new kony.ui.Label({
                "id": "lblZipCodeTitle",
                "isVisible": true,
                "left": "28dp",
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.ZipCode\")",
                "textStyle": {},
                "top": "16dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_j892d8b7a153409b949a744a75ed05dc,
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
            var flxZipCodeWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxZipCodeWrapper",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "45dp",
                "zIndex": 1
            }, {}, {});
            flxZipCodeWrapper.setDefaultUnit(kony.flex.DP);
            var lblZipCode = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblZipCode",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxZipCodeWrapper.add(lblZipCode);
            var txtZipCode = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "txtZipCode",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "i18n_placeholder": "kony.i18n.getLocalizedString(\"kony.mb.cardManage.enterHere\")",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "45dp",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            flxZipCode.add(lblZipCodeTitle, btnContinue, flxZipCodeWrapper, txtZipCode);
            flxContainer.add(flxZipCode);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxKeypad",
                "isVisible": false,
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
            keypad.btnEight.onClick = controller.AS_Button_g79c057e67b940f08ae62e85037b3d7c;
            keypad.btnFive.onClick = controller.AS_Button_d2db9f9b94f14a6e982315e3657dd4f8;
            keypad.btnFour.onClick = controller.AS_Button_hbd61728cbfb4ae3b1dbad081ebc11c7;
            keypad.btnNine.onClick = controller.AS_Button_f5f4b4bfc5ae438ba3a297f7862e0c0e;
            keypad.btnOne.onClick = controller.AS_Button_b6d9ed0910de488da699b3fc69b0b954;
            keypad.btnSeven.onClick = controller.AS_Button_d652f0c1c6be4b80ab7faa7d85d0fe78;
            keypad.btnSix.onClick = controller.AS_Button_e3b9dcb8159b49b8893a8496fa196785;
            keypad.btnThree.onClick = controller.AS_Button_g82e2a2670b2436184fe08aa47dd8314;
            keypad.btnTwo.onClick = controller.AS_Button_jf4ef4f99b5d488fac606e39e82100d4;
            keypad.btnZero.onClick = controller.AS_Button_j0682136a1ed44d988e59e5db4710e9a;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_hd917e07fcb0484fa26301a7bbb6e5ec;
            flxKeypad.add(keypad);
            this.add(flxHeader, flxContainer, flxKeypad);
        };
        return [{
            "addWidgets": addWidgetsfrmBillPayZipCode,
            "enabledForIdleTimeout": true,
            "id": "frmBillPayZipCode",
            "init": controller.AS_Form_j4db11bf3e85415183ec2ec8587b4f1b,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_c2ee012baa1542949176264707f41247,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.BillPayZipCode.Title\")"
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