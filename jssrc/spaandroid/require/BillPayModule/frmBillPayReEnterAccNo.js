define("BillPayModule/frmBillPayReEnterAccNo", function() {
    return function(controller) {
        function addWidgetsfrmBillPayReEnterAccNo() {
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
            customHeader.lblLocateUs.text = "Account Number";
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": false,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxToastDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxToastDummy",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToastDummy.setDefaultUnit(kony.flex.DP);
            flxToastDummy.add();
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var lblReEnterAccNo = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblReEnterAccNo",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.ReEnterAccNo\")",
                "textStyle": {},
                "top": "30dp",
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
            var flxReInputAccNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxReInputAccNo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "90dp",
                "zIndex": 1
            }, {}, {});
            flxReInputAccNo.setDefaultUnit(kony.flex.DP);
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
            flxReInputAccNo.add(lblDigit1, lblDigit2, lblDigit3, lblDigit4, lblDigit5, lblDigit6, lblDigit7, lblDigit8, lblDigit9, lblDigit10, lblDigit11, lblDigit12, lblDigit13, lblDigit14, lblDigit15, lblDigit16, lblDigit17, lblDigit18, lblAccountNumber);
            flxMain.add(lblReEnterAccNo, btnContinue, flxReInputAccNo);
            flxMainContainer.add(flxToastDummy, flxMain);
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
            keypad.btnEight.onClick = controller.AS_Button_c1fb9b4e9b2f4373a7972664378679a4;
            keypad.btnFive.onClick = controller.AS_Button_h620b3af458f4308a18d6db33e734502;
            keypad.btnFour.onClick = controller.AS_Button_c34d511a0b29481bbac44732eb1616f7;
            keypad.btnNine.onClick = controller.AS_Button_j3281f9946f040cea5dedd9927541b6f;
            keypad.btnOne.onClick = controller.AS_Button_de379d2920594dc8bd26c9db98ffa39e;
            keypad.btnSeven.onClick = controller.AS_Button_d1fa93cb6b204e06a65a5948447c738b;
            keypad.btnSix.onClick = controller.AS_Button_jf367706e5074a11b1a1b1bdacacc9da;
            keypad.btnThree.onClick = controller.AS_Button_d6c32bd59fe94a088564c6d3c65ee103;
            keypad.btnTwo.onClick = controller.AS_Button_d92463b835e54e49b96ab8a577013a5e;
            keypad.btnZero.onClick = controller.AS_Button_g01cc08999e54f079155e478fc987fa6;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_a5f695c311bb4376a9dc497e667c5bd3;
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
            this.add(flxHeader, flxMainContainer, flxKeypad, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmBillPayReEnterAccNo,
            "enabledForIdleTimeout": true,
            "id": "frmBillPayReEnterAccNo",
            "init": controller.AS_Form_ga3501ad07464e5e9fca8aa877f99bdc,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_f1e2a6e01219429380eff431def87bd6,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.enroll.accountNumber\")"
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