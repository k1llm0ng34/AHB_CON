define("EnrollModule/frmEnrollSecurity", function() {
    return function(controller) {
        function addWidgetsfrmEnrollSecurity() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 30
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
            customHeader.btnRight.onClick = controller.AS_Button_f87c319a457c429fb7cf6529647c0995;
            customHeader.flxBack.isVisible = true;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Security";
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": false,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSecurityCode.setDefaultUnit(kony.flex.DP);
            var lblSecurityCode = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSecurityCode",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.enroll.securityCode\")",
                "textStyle": {},
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
            flxSecurityCode.add(lblSecurityCode);
            var flxInputSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "52%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInputSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "28%",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxInputSecurityCode.setDefaultUnit(kony.flex.DP);
            var lblSecCodeDig1 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCodeDig1",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "11%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSecCodeDig2 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCodeDig2",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "11%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSecCodeDig3 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCodeDig3",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "11%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSecCodeDig4 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCodeDig4",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "11%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSecCodeDig5 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCodeDig5",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "11%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSecCodeDig6 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCodeDig6",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "11%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxInputSecurityCode.add(lblSecCodeDig1, lblSecCodeDig2, lblSecCodeDig3, lblSecCodeDig4, lblSecCodeDig5, lblSecCodeDig6);
            var btnVerifySecCode = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnVerifySecCode",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtna0a0a0SSPReg26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.continue\")",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSecCodeMsg = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSecCodeMsg",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Please enter 6-digit security code sent to your registered mobile number ",
                "textStyle": {},
                "top": "13%",
                "width": "68%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var btnResend = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn00aef3SSPReg30px",
                "height": "10%",
                "id": "btnResend",
                "isVisible": true,
                "skin": "sknBtn0095e428px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.Resend\")",
                "top": "68%",
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(flxSecurityCode, flxInputSecurityCode, btnVerifySecCode, lblSecCodeMsg, btnResend);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxKeypad",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
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
            keypad.btnEight.onClick = controller.AS_Button_d995428196c94d1992d34e7680ead2d7;
            keypad.btnFive.onClick = controller.AS_Button_fc8a1bcdd56b48b0a3ebb51798cd2c44;
            keypad.btnFour.onClick = controller.AS_Button_f1671d383324483c86104e017fa68a98;
            keypad.btnNine.onClick = controller.AS_Button_ee1f4c4192904e4f934349eb25ff3430;
            keypad.btnOne.onClick = controller.AS_Button_i7f9f5abb3664e5fb694af8feb4212a6;
            keypad.btnSeven.onClick = controller.AS_Button_ie3bcc135a944dd8baa8de8a0961937b;
            keypad.btnSix.onClick = controller.AS_Button_a0158c26af96430caa4ed3bfd9e600dd;
            keypad.btnThree.onClick = controller.AS_Button_i93a76d23b8647f791038f00a879241a;
            keypad.btnTwo.onClick = controller.AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828;
            keypad.btnZero.onClick = controller.AS_Button_jd2f9ffdd6924b03bb0175998407e8d3;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_b8275a188bb543bda67ceee35f4a8969;
            flxKeypad.add(keypad);
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
            this.add(flxHeader, flxMainContainer, flxKeypad, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmEnrollSecurity,
            "enabledForIdleTimeout": true,
            "id": "frmEnrollSecurity",
            "init": controller.AS_Form_fc588503a1774a3f901c11c058345abb,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_ffd70944f55440b7a9ad4faf55360679,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.enroll.securityCode\")"
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