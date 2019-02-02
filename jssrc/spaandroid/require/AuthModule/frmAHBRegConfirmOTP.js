define("AuthModule/frmAHBRegConfirmOTP", function() {
    return function(controller) {
        function addWidgetsfrmAHBRegConfirmOTP() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var MainHeader = new com.ahb.common.Head.MainHeaderCopy({
                "clipBounds": true,
                "height": "4%",
                "id": "MainHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "2.02%",
                "width": "100%"
            }, {}, {});
            MainHeader.lblHeading.i18n_text = "kony.i18n.getLocalizedString(\"kony.ahb.Registration.RegistrationHeading\")";
            var flxPageProgress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0.50%",
                "id": "flxPageProgress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "14.95%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0ge002080121549",
                "top": "3.70%",
                "width": "70.20%",
                "zIndex": 1
            }, {}, {});
            flxPageProgress.setDefaultUnit(kony.flex.DP);
            var imgProgress1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgProgress1",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage0gd2c5e8f0dfc4a",
                "src": "line1_1.png",
                "top": "0dp",
                "width": "25%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgProgress2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgProgress2",
                "isVisible": true,
                "left": "25%",
                "skin": "slImage0gd2c5e8f0dfc4a",
                "src": "line1_1.png",
                "top": "0%",
                "width": "25%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgProgress3 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "50%",
                "id": "imgProgress3",
                "isVisible": true,
                "left": "50%",
                "skin": "slImage0gd2c5e8f0dfc4a",
                "src": "line2_1.png",
                "top": "0%",
                "width": "25%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgProgress4 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "50%",
                "id": "imgProgress4",
                "isVisible": true,
                "left": "75%",
                "skin": "slImage0gd2c5e8f0dfc4a",
                "src": "line2_1.png",
                "top": "0%",
                "width": "25%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPageProgress.add(imgProgress1, imgProgress2, imgProgress3, imgProgress4);
            var flxOTPScreen = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45%",
                "id": "flxOTPScreen",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "8.20%",
                "width": "100%"
            }, {}, {});
            flxOTPScreen.setDefaultUnit(kony.flex.DP);
            var lblOTPMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblOTPMessage",
                "isVisible": true,
                "skin": "sknAHBGSC16pt363836",
                "text": "Hi Khaled, One Time Password sent to:",
                "textStyle": {},
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhnNumber = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPhnNumber",
                "isVisible": true,
                "left": "0%",
                "skin": "sknAHBGSC16pt363836",
                "text": "+123 89**** 098",
                "textStyle": {},
                "top": "4.80%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxContactUs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxContactUs",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "4.80%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContactUs.setDefaultUnit(kony.flex.DP);
            var lblNotNumber = new kony.ui.Label({
                "id": "lblNotNumber",
                "isVisible": true,
                "left": "22%",
                "skin": "sknAHBGSC16pt363836",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.AHB.Registration.NotYourNumber\")",
                "textStyle": {},
                "top": 0,
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
            var btnContactUs = new kony.ui.Button({
                "focusSkin": "sknAHBGsc16ptBffffffTff6d00",
                "id": "btnContactUs",
                "isVisible": true,
                "left": "1%",
                "skin": "sknAHBGsc16ptBffffffTff6d00",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.AHB.Registration.OTP.Contactus\")",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxContactUs.add(lblNotNumber, btnContactUs);
            var flxOTPDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "42%",
                "id": "flxOTPDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "4.80%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOTPDetails.setDefaultUnit(kony.flex.DP);
            var lblOTP = new kony.ui.Label({
                "centerX": "50%",
                "height": "28%",
                "id": "lblOTP",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblAHBGSC1",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.AHB.Registration.otp\")",
                "textStyle": {},
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 1],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxOTPNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxOTPNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxOTPNumber.setDefaultUnit(kony.flex.DP);
            var tbxOTP1 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc1",
                "height": "60%",
                "id": "tbxOTP1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "14.90%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_h0516a2b786040ed895610b8d74835ab,
                "onTouchStart": controller.AS_TextField_f26fd4def29f4982839d3993ba02e65e,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc1",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "35%",
                "width": "10%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            var tbxOTP2 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc1",
                "height": "60%",
                "id": "tbxOTP2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "26.30%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_d0825e0a1db14600b1586e1f535dbe6f,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc1",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "35%",
                "width": "10%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            var tbxOTP3 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc1",
                "height": "60%",
                "id": "tbxOTP3",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "37.80%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_f548e600f66b402db6665ed6a27957e5,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc1",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "35%",
                "width": "10%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            var tbxOTP4 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc1",
                "height": "60%",
                "id": "tbxOTP4",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "52.60%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_af4f59fc8b85420fa378d918c8873f7f,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc1",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "35%",
                "width": "10%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            var tbxOTP5 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc1",
                "height": "60%",
                "id": "tbxOTP5",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "64.10%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_de09c317e6b1467782988cba861576ac,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc1",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "35%",
                "width": "10%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            var tbxOTP6 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc1",
                "height": "60%",
                "id": "tbxOTP6",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "75.50%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_bccd7bd0b3ac4b389c565e3479b512ca,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc1",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "35%",
                "width": "10%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            flxOTPNumber.add(tbxOTP1, tbxOTP2, tbxOTP3, tbxOTP4, tbxOTP5, tbxOTP6);
            var flxOTPLbl = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "2%",
                "id": "flxOTPLbl",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxOTPLbl.setDefaultUnit(kony.flex.DP);
            var lblOTP1 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblOTP1",
                "isVisible": true,
                "left": "14.95%",
                "skin": "CopysknAHBLined1",
                "textStyle": {},
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblOTP2 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblOTP2",
                "isVisible": true,
                "left": "26.38%",
                "skin": "CopysknAHBLined1",
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
            var lblOTP3 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblOTP3",
                "isVisible": true,
                "left": "37.82%",
                "skin": "CopysknAHBLined1",
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
            var lblOTP4 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblOTP4",
                "isVisible": true,
                "left": "52.69%",
                "skin": "CopysknAHBLined1",
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
            var lblOTP5 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblOTP5",
                "isVisible": true,
                "left": "64.13%",
                "skin": "CopysknAHBLined1",
                "textStyle": {},
                "top": "0%",
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
            var lblOTP6 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblOTP6",
                "isVisible": true,
                "left": "75.56%",
                "right": "14.95%",
                "skin": "CopysknAHBLined1",
                "textStyle": {},
                "top": "0%",
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
            flxOTPLbl.add(lblOTP1, lblOTP2, lblOTP3, lblOTP4, lblOTP5, lblOTP6);
            flxOTPDetails.add(lblOTP, flxOTPNumber, flxOTPLbl);
            var btnResendCode = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknAHBGsc16ptBffffffTff6d00",
                "id": "btnResendCode",
                "isVisible": true,
                "skin": "sknAHBGsc16ptBffffffTff6d00",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.AHB.Registration.Re-sendCode\")",
                "top": "2%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOTPScreen.add(lblOTPMessage, lblPhnNumber, flxContactUs, flxOTPDetails, btnResendCode);
            flxMain.add(MainHeader, flxPageProgress, flxOTPScreen);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAHBRegConfirmOTP,
            "enabledForIdleTimeout": false,
            "id": "frmAHBRegConfirmOTP",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_gf75f11b3cc84abda7b211986c2a8c21,
            "skin": "slForm"
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