define("TransferModule/frmAddBenRoutNo", function() {
    return function(controller) {
        function addWidgetsfrmAddBenRoutNo() {
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
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            customHeader.btnRight.isVisible = true;
            customHeader.btnRight.text = "CANCEL";
            customHeader.height = "100%";
            customHeader.zIndex = 1;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.centerY = "50.29%";
            customHeader.lblLocateUs.left = "14.95%";
            customHeader.lblLocateUs.text = "Routing Number";
            flxHeader.add(customHeader);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var lblEnterRoutingNo = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterRoutingNo",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.addBen.enterRoutingNo\")",
                "textStyle": {},
                "top": "30dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxInputRoutingNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxInputRoutingNo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "90dp",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxInputRoutingNo.setDefaultUnit(kony.flex.DP);
            var lblDigit1 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit1",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit2 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit2",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit3 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit3",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit4 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit4",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit5 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit5",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit6 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit6",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit7 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit7",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit8 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit8",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit9 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit9",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxInputRoutingNo.add(lblDigit1, lblDigit2, lblDigit3, lblDigit4, lblDigit5, lblDigit6, lblDigit7, lblDigit8, lblDigit9);
            var btnContinue = new kony.ui.Button({
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtna0a0a0SSPReg26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.continue\")",
                "top": "290dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBankName = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblBankName",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "CHASE BANK",
                "textStyle": {},
                "top": "170dp",
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
            var lblAddLine1 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAddLine1",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "2nd Floor",
                "textStyle": {},
                "top": "190dp",
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
            var lblAddLine2 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAddLine2",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Tampa, FL 33610",
                "textStyle": {},
                "top": "210dp",
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
            flxMain.add(lblEnterRoutingNo, flxInputRoutingNo, btnContinue, lblBankName, lblAddLine1, lblAddLine2);
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
            keypad.btnFive.onClick = controller.AS_Button_caaee584431948e8bb65f2060b7a3f12;
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
            this.add(flxHeader, flxMain, flxKeypad);
        };
        return [{
            "addWidgets": addWidgetsfrmAddBenRoutNo,
            "enabledForIdleTimeout": true,
            "id": "frmAddBenRoutNo",
            "init": controller.AS_Form_bfad32340fec4c1a9097d9fb06513b64,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_c8ddd26eb42a483080574e355df7c3cc,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.accdetails.routingNumber\")"
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