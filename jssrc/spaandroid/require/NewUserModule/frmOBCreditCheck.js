define("NewUserModule/frmOBCreditCheck", function() {
    return function(controller) {
        function addWidgetsfrmOBCreditCheck() {
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
                "zIndex": 6
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
            customHeader.btnRight.text = "CLOSE";
            customHeader.flxBack.isVisible = true;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "SSN";
            flxHeader.add(customHeader);
            var flxProgress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "52dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxProgress.setDefaultUnit(kony.flex.DP);
            var flxProgressHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "right": "65%",
                "skin": "sknFlxda8b08",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxProgressHeader.setDefaultUnit(kony.flex.DP);
            flxProgressHeader.add();
            var flxProgressBackgroundHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressBackgroundHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxda8b08Op20",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxProgressBackgroundHeader.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundHeader.add();
            flxProgress.add(flxProgressHeader, flxProgressBackgroundHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "clipBounds": false,
                "height": "58.50%",
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffff",
                "top": "56dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var btnSSNReject = new kony.ui.Button({
                "bottom": "3%",
                "height": "40dp",
                "id": "btnSSNReject",
                "isVisible": false,
                "left": "5%",
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.OnBoarding.Reject\")",
                "width": "42%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSSNAccept = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnSSNAccept",
                "isVisible": true,
                "onClick": controller.AS_Button_c072fed538c648f6afd95f9608f80b90,
                "right": "6.25%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.continue\")",
                "width": "87.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEnterSSNHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxEnterSSNHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxfafafa",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterSSNHeader.setDefaultUnit(kony.flex.DP);
            var lblHeaderEnterSSN = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHeaderEnterSSN",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.OBCreditCheck.HeaderEnterSSN\")",
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
            flxEnterSSNHeader.add(lblHeaderEnterSSN);
            var flxInputSSN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxInputSSN",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "80dp",
                "width": "220dp",
                "zIndex": 1
            }, {}, {});
            flxInputSSN.setDefaultUnit(kony.flex.DP);
            var lblSSNOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSSNTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNTwo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSSNThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNThree",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSSNFour = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNFour",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "-",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSSNFive = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNFive",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSSNSix = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNSix",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSSNSeven = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNSeven",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "-",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSSNEight = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNEight",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSSNnine = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNnine",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSSNTen = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNTen",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSSNEleven = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNEleven",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxInputSSN.add(lblSSNOne, lblSSNTwo, lblSSNThree, lblSSNFour, lblSSNFive, lblSSNSix, lblSSNSeven, lblSSNEight, lblSSNnine, lblSSNTen, lblSSNEleven);
            var lblEnterSSNInfo = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterSSNInfo",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "I provide my consent to Kony Bank to perform a credit check on my SSN to validate my eligibility for opening an account with Kony Bank.",
                "textStyle": {},
                "top": "40%",
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
            var lblTnC = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTnC",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.OBCreditCheck.TnC\")",
                "textStyle": {},
                "top": "63%",
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
            var btnTnC = new kony.ui.Button({
                "centerX": "50%",
                "height": "30dp",
                "id": "btnTnC",
                "isVisible": true,
                "left": "85dp",
                "skin": "sknBtn004B9528px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Support.Terms\")",
                "top": "67%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(btnSSNReject, btnSSNAccept, flxEnterSSNHeader, flxInputSSN, lblEnterSSNInfo, lblTnC, btnTnC);
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
                "zIndex": 201
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
            customPopup.height = "100%";
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
                "zIndex": 3
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
            keypad.btnEight.onClick = controller.AS_Button_ad318f912a5642f4bf7096a0174f3e1b;
            keypad.btnFive.onClick = controller.AS_Button_jcc1edecd1814f27b85b87c06d6a86c9;
            keypad.btnFour.onClick = controller.AS_Button_j64622c5317a428aa087faa0c479d14b;
            keypad.btnNine.onClick = controller.AS_Button_i51859e00a4543618695ebb5a2a16a6f;
            keypad.btnOne.onClick = controller.AS_Button_c2562c12d9654920a56aa023aef0aecb;
            keypad.btnSeven.onClick = controller.AS_Button_e966c5957b58463b8fcf56116ae15c33;
            keypad.btnSix.onClick = controller.AS_Button_fe8b04f913e24664ac3f6621d9f15e33;
            keypad.btnThree.onClick = controller.AS_Button_e66b833502a647ed82ebc09af7864aec;
            keypad.btnTwo.onClick = controller.AS_Button_baf938f6644f408889c7065f64f29f0e;
            keypad.btnZero.onClick = controller.AS_Button_d30ba0eb7c694275afead1bc25cf3dc7;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_d96c2b3ec7f24caabf4a0d4b800a4af6;
            flxKeypad.add(keypad);
            var flxResult = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxResult",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResult.setDefaultUnit(kony.flex.DP);
            var imgResult = new kony.ui.Image2({
                "centerX": "50%",
                "height": "61dp",
                "id": "imgResult",
                "isVisible": true,
                "left": "136dp",
                "skin": "slImage",
                "src": "error.png",
                "top": "31%",
                "width": "61dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxResultTexts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxResultTexts",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "40%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResultTexts.setDefaultUnit(kony.flex.DP);
            var rtxTitle = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxTitle",
                "isVisible": true,
                "left": "155dp",
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSP26px",
                "text": "Congratulations John!\nYour account is now active",
                "top": "20dp",
                "width": "76%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSubTitle = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "lblSubTitle",
                "isVisible": false,
                "left": "160dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Label",
                "textStyle": {},
                "top": "10dp",
                "width": "76%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxResultTexts.add(rtxTitle, lblSubTitle);
            var btnContinueResult = new kony.ui.Button({
                "bottom": "14%",
                "height": "40dp",
                "id": "btnContinueResult",
                "isVisible": false,
                "right": "6.25%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.continue\")",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancelResult = new kony.ui.Button({
                "bottom": "4%",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnCancelResult",
                "isVisible": false,
                "skin": "sknBtn0095e428px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.Cancel\")",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCallNow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxCallNow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_ac7472d04a1748b2af96b9af4f84f126,
                "skin": "sknFlxBorder3e4f564px",
                "width": "87.50%",
                "zIndex": 3
            }, {}, {});
            flxCallNow.setDefaultUnit(kony.flex.DP);
            var imgCallNow = new kony.ui.Image2({
                "centerX": "40%",
                "centerY": "50%",
                "height": "22dp",
                "id": "imgCallNow",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "entercvvicon.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCallNow = new kony.ui.Label({
                "centerX": "55%",
                "centerY": "50%",
                "id": "lblCallNow",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.CallNow\")",
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
            flxCallNow.add(imgCallNow, lblCallNow);
            flxResult.add(imgResult, flxResultTexts, btnContinueResult, btnCancelResult, flxCallNow);
            var flxTermsConditions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTermsConditions",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxTermsConditions.setDefaultUnit(kony.flex.DP);
            var flxHeaderTermsConditions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxHeaderTermsConditions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderTermsConditions.setDefaultUnit(kony.flex.DP);
            var customHeaderTermsConditions = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "customHeaderTermsConditions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            customHeaderTermsConditions.height = "100%";
            customHeaderTermsConditions.flxBack.isVisible = true;
            customHeaderTermsConditions.flxSearch.isVisible = false;
            customHeaderTermsConditions.imgBack.src = "cancelicon.png";
            customHeaderTermsConditions.lblLocateUs.text = "Terms And Conditions";
            flxHeaderTermsConditions.add(customHeaderTermsConditions);
            var rtxTermsConditionsValue = new kony.ui.RichText({
                "id": "rtxTermsConditionsValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknRtx424242SSP26px",
                "text": "By accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions.",
                "top": "2%",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTermsConditions.add(flxHeaderTermsConditions, rtxTermsConditionsValue);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "58%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxGradientBlue",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            this.add(flxHeader, flxProgress, flxMainContainer, flxPopup, flxKeypad, flxResult, flxTermsConditions, flxGradient);
        };
        return [{
            "addWidgets": addWidgetsfrmOBCreditCheck,
            "enabledForIdleTimeout": true,
            "id": "frmOBCreditCheck",
            "init": controller.AS_Form_b3bb32f78e22426e8f5794b84c539137,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_ddf2c6d5109441e9820dbd14406f2175,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.enroll.SSN\")"
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