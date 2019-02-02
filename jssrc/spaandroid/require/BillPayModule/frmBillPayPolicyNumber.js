define("BillPayModule/frmBillPayPolicyNumber", function() {
    return function(controller) {
        function addWidgetsfrmBillPayPolicyNumber() {
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
                "width": "100%"
            }, {}, {});
            customHeader.btnRight.isVisible = true;
            customHeader.btnRight.text = "CANCEL";
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Policy Number";
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
            var lblEnterRelationNumber = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterRelationNumber",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.BillPayPolicyNumber.EnterRelationNumber\")",
                "textStyle": {},
                "top": "20dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxInputPolicyNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInputPolicyNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "90dp",
                "zIndex": 1
            }, {}, {});
            flxInputPolicyNumber.setDefaultUnit(kony.flex.DP);
            var lblAccountNumber = new kony.ui.Label({
                "height": "40dp",
                "id": "lblAccountNumber",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "|",
                "textStyle": {},
                "top": "0dp",
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
            var lblDigit1 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit1",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
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
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
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
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
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
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
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
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
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
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
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
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
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
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
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
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit10 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit10",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit11 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit11",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit12 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit12",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit13 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit13",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit14 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit14",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit15 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit15",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit16 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit16",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit17 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit17",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDigit18 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit18",
                "isVisible": false,
                "left": "3dp",
                "skin": "sknLbl484848sspReg50px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxInputPolicyNumber.add(lblAccountNumber, lblDigit1, lblDigit2, lblDigit3, lblDigit4, lblDigit5, lblDigit6, lblDigit7, lblDigit8, lblDigit9, lblDigit10, lblDigit11, lblDigit12, lblDigit13, lblDigit14, lblDigit15, lblDigit16, lblDigit17, lblDigit18);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnContinue",
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
            flxMain.add(lblEnterRelationNumber, flxInputPolicyNumber, btnContinue);
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
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
            keypad.btnEight.onClick = controller.AS_Button_ebd103afd5ac4094a7ed8b722a6b414f;
            keypad.btnFive.onClick = controller.AS_Button_a77123ffe1784ea1b6e96d1903a55fcf;
            keypad.btnFour.onClick = controller.AS_Button_ff92a8b559364374a3165eef090fcda1;
            keypad.btnNine.onClick = controller.AS_Button_b8bfd045777b47f2a7d3a687e02cf7ea;
            keypad.btnOne.onClick = controller.AS_Button_eed52d3dd1e34105b935e47d94fc2439;
            keypad.btnSeven.onClick = controller.AS_Button_bf8c2bed519145f4ac4ed4f415f4c181;
            keypad.btnSix.onClick = controller.AS_Button_b1b467c0ff254bd791f466bf4dfed28e;
            keypad.btnThree.onClick = controller.AS_Button_j5e1ccfaeedc4896a4437980c395dded;
            keypad.btnTwo.onClick = controller.AS_Button_e1206afff4da4b83a5349a7fcf79e4a2;
            keypad.btnZero.onClick = controller.AS_Button_ee43bef0993c4052ad048a1016413dfd;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_h207d9440b3e44f78f48b49c70c29ffd;
            flxKeypad.add(keypad);
            this.add(flxHeader, flxMain, flxKeypad);
        };
        return [{
            "addWidgets": addWidgetsfrmBillPayPolicyNumber,
            "enabledForIdleTimeout": true,
            "id": "frmBillPayPolicyNumber",
            "init": controller.AS_Form_b48d7b0691f04bd6afd7d51c321f581f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_f93318e71afe40babcadc26942261ce0,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.common.PolicyNumber\")"
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