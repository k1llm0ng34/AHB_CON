define("AuthModule/frmDevRegPin", function() {
    return function(controller) {
        function addWidgetsfrmDevRegPin() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 100
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
            customHeader.btnRight.text = "SKIP";
            customHeader.btnRight.onClick = controller.AS_Button_a75c17f385f04325b9fbbf6b8aedf8a3;
            customHeader.flxBack.isVisible = false;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Default Login";
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": false,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxffffffShadow",
                "top": "56dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxEnterPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxEnterPin",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPin.setDefaultUnit(kony.flex.DP);
            var flxPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxPin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopyslFbox",
                "top": "13%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPin.setDefaultUnit(kony.flex.DP);
            var lblPin = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblPin",
                "isVisible": true,
                "skin": "sknLbl424242SSPLight36px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.devReg.newPin\")",
                "textStyle": {},
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
            flxPin.add(lblPin);
            var lblStep1 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblStep1",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.devReg.step1\")",
                "textStyle": {},
                "top": "30%",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxInputSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "49%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInputSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "40%",
                "width": "39%",
                "zIndex": 1
            }, {}, {});
            flxInputSecurityCode.setDefaultUnit(kony.flex.DP);
            var lblSecCodeDig1 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCodeDig1",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
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
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
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
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
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
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
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
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
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
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
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
            var btnNext = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtna0a0a0SSPReg26px",
                "height": "40dp",
                "id": "btnNext",
                "isVisible": true,
                "onClick": controller.AS_Button_c05e5eed34314d15b4e7c55177e7eb20,
                "skin": "sknBtna0a0a0SSPReg26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.next\")",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEnterPin.add(flxPin, lblStep1, flxInputSecurityCode, btnNext);
            var flxRenterNewPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRenterNewPin",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRenterNewPin.setDefaultUnit(kony.flex.DP);
            var flxReneterPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxReneterPin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopyslFbox",
                "top": "13%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReneterPin.setDefaultUnit(kony.flex.DP);
            var lblPiinRenter = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblPiinRenter",
                "isVisible": true,
                "skin": "sknLbl424242SSPLight36px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.devReg.reenterNewPin\")",
                "textStyle": {},
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
            flxReneterPin.add(lblPiinRenter);
            var lblStep2 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblStep2",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.devReg.step2\")",
                "textStyle": {},
                "top": "25%",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxInputCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "49%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInputCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "34%",
                "width": "43%",
                "zIndex": 1
            }, {}, {});
            flxInputCode.setDefaultUnit(kony.flex.DP);
            var lblSecCode1 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCode1",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSecCode2 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCode2",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSecCode3 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCode3",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSecCode4 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCode4",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSecCode5 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCode5",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSecCode6 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecCode6",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e360px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "15%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxInputCode.add(lblSecCode1, lblSecCode2, lblSecCode3, lblSecCode4, lblSecCode5, lblSecCode6);
            var btnEnable = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtna0a0a0SSPReg26px",
                "height": "40dp",
                "id": "btnEnable",
                "isVisible": true,
                "onClick": controller.AS_Button_d057008ae99e444f869efc1a4e927b40,
                "skin": "sknBtna0a0a0SSPReg26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.devReg.enableNSetDefault\")",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRenterNewPin.add(flxReneterPin, lblStep2, flxInputCode, btnEnable);
            flxMainContainer.add(flxEnterPin, flxRenterNewPin);
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
            keypad.btnFive.onClick = controller.AS_Button_c29becbf3bf2448faec6815fe47620c2;
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
            this.add(flxHeader, flxMainContainer, flxPopup, flxKeypad);
        };
        return [{
            "addWidgets": addWidgetsfrmDevRegPin,
            "enabledForIdleTimeout": true,
            "id": "frmDevRegPin",
            "init": controller.AS_Form_d57865ac2e0d4b0bba1d116a65a03227,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_fb730bf3de024b13a6aef94b22930a7f,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.devReg.defaultLogin\")"
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