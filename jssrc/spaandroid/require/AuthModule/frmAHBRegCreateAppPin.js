define("AuthModule/frmAHBRegCreateAppPin", function() {
    return function(controller) {
        function addWidgetsfrmAHBRegCreateAppPin() {
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
            var MainHeader = new com.ahb.common.Head.MainHeaderCopy1({
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
                "skin": "slFbox0fc071b8edb3d4c",
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
                "skin": "slImage0a791f6f4fd0b47",
                "src": "line1.png",
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
                "skin": "slImage0a791f6f4fd0b47",
                "src": "line1_1_1.png",
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
                "height": "100%",
                "id": "imgProgress3",
                "isVisible": true,
                "left": "50%",
                "skin": "slImage0a791f6f4fd0b47",
                "src": "line1_1_1.png",
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
                "skin": "slImage0a791f6f4fd0b47",
                "src": "line2.png",
                "top": "0%",
                "width": "25%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPageProgress.add(imgProgress1, imgProgress2, imgProgress3, imgProgress4);
            var flxCreatePinContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55.40%",
                "id": "flxCreatePinContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "slFbox",
                "top": "8.25%",
                "width": "100%"
            }, {}, {});
            flxCreatePinContainer.setDefaultUnit(kony.flex.DP);
            var flxCreatePin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20.52%",
                "id": "flxCreatePin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "onClick": controller.AS_FlexContainer_f5a32b57c09c4e4780e35d75296318e8,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCreatePin.setDefaultUnit(kony.flex.DP);
            var lblCreatePin = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCreatePin",
                "isVisible": true,
                "skin": "CopysknLblAHBGSC3",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.AHB.Login.CreateMobileAppPin\")",
                "textStyle": {},
                "top": "0%",
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
            var flxPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxPin",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPin.setDefaultUnit(kony.flex.DP);
            var lblPin1 = new kony.ui.Label({
                "height": "3%",
                "id": "lblPin1",
                "isVisible": true,
                "left": "23%",
                "skin": "CopysknAHBLined2",
                "text": "Label",
                "textStyle": {},
                "top": "90%",
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
            var lblPin2 = new kony.ui.Label({
                "height": "2%",
                "id": "lblPin2",
                "isVisible": true,
                "left": "37.40%",
                "skin": "CopysknAHBLined2",
                "text": "Label",
                "textStyle": {},
                "top": "90%",
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
            var lblPin3 = new kony.ui.Label({
                "height": "2%",
                "id": "lblPin3",
                "isVisible": true,
                "left": "52.80%",
                "skin": "CopysknAHBLined2",
                "text": "Label",
                "textStyle": {},
                "top": "90%",
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
            var lblPin4 = new kony.ui.Label({
                "height": "2%",
                "id": "lblPin4",
                "isVisible": true,
                "left": "68.20%",
                "skin": "CopysknAHBLined2",
                "text": "Label",
                "textStyle": {},
                "top": "90%",
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
            var flxTextPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "109.83%",
                "id": "flxTextPin",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTextPin.setDefaultUnit(kony.flex.DP);
            var tbxPin1 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc2",
                "height": "80%",
                "id": "tbxPin1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "23%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_j5d99489c35e4841840f8cf42dfbc200,
                "onTouchStart": controller.AS_TextField_e9b6a34cfdb64386a13ee080dd0c830f,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc2",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11%",
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
            var tbxPin2 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc2",
                "height": "80%",
                "id": "tbxPin2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "37.40%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_aceb83ed54f345b9a9a97792a5d8415d,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc2",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11%",
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
            var tbxPin3 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc2",
                "height": "80%",
                "id": "tbxPin3",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "52.80%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_a7ab589a58d240289278b7230b62b9fe,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc2",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11%",
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
            var tbxPin4 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc2",
                "height": "80%",
                "id": "tbxPin4",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "68.20%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_c9da677e0ac649ed91ed7329c69b1018,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc2",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11%",
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
            flxTextPin.add(tbxPin1, tbxPin2, tbxPin3, tbxPin4);
            flxPin.add(lblPin1, lblPin2, lblPin3, lblPin4, flxTextPin);
            flxCreatePin.add(lblCreatePin, flxPin);
            var flxReEnterPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20.52%",
                "id": "flxReEnterPin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "skin": "slFbox",
                "top": "8.70%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReEnterPin.setDefaultUnit(kony.flex.DP);
            var lblRePin = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRePin",
                "isVisible": true,
                "skin": "CopysknLblAHBGSC3",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.AHB.Login.ReenterMobileAppPIN\")",
                "textStyle": {},
                "top": "0%",
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
            var flxRePinIndecator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxRePinIndecator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRePinIndecator.setDefaultUnit(kony.flex.DP);
            var lblPin5 = new kony.ui.Label({
                "height": "2%",
                "id": "lblPin5",
                "isVisible": true,
                "left": "23%",
                "skin": "CopysknAHBLined2",
                "text": "Label",
                "textStyle": {},
                "top": "90%",
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
            var lblPin6 = new kony.ui.Label({
                "height": "2%",
                "id": "lblPin6",
                "isVisible": true,
                "left": "37.40%",
                "skin": "CopysknAHBLined2",
                "text": "Label",
                "textStyle": {},
                "top": "90%",
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
            var lblPin7 = new kony.ui.Label({
                "height": "2%",
                "id": "lblPin7",
                "isVisible": true,
                "left": "52.80%",
                "skin": "CopysknAHBLined2",
                "text": "Label",
                "textStyle": {},
                "top": "90%",
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
            var lblPin8 = new kony.ui.Label({
                "height": "2%",
                "id": "lblPin8",
                "isVisible": true,
                "left": "68.20%",
                "skin": "CopysknAHBLined2",
                "text": "Label",
                "textStyle": {},
                "top": "90%",
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
            var flxRePinText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRePinText",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxRePinText.setDefaultUnit(kony.flex.DP);
            var tbxPin5 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc2",
                "height": "80%",
                "id": "tbxPin5",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "23%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_f1e3f0c871d5446d8948c5c1e06855d7,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc2",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11%",
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
            var tbxPin6 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc2",
                "height": "80%",
                "id": "tbxPin6",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "37.40%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_ac2649f4e45f424e802a0d9fd35cb76a,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc2",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11%",
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
            var tbxPin7 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc2",
                "height": "80%",
                "id": "tbxPin7",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "52.80%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_f6c306ddbaaf4fc2b16dc59b0d40d78d,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc2",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11%",
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
            var tbxPin8 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc2",
                "height": "80%",
                "id": "tbxPin8",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "68.20%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_g0e4f78f0d2c4ae88de21876171e5e76,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc2",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11%",
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
            flxRePinText.add(tbxPin5, tbxPin6, tbxPin7, tbxPin8);
            flxRePinIndecator.add(lblPin5, lblPin6, lblPin7, lblPin8, flxRePinText);
            flxReEnterPin.add(lblRePin, flxRePinIndecator);
            var btnConfirm = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknAHBGscB16ptBeaeaeaTffffffRounded",
                "height": "11.34%",
                "id": "btnConfirm",
                "isVisible": true,
                "skin": "sknAHBGscB16ptBeaeaeaTffffffRounded",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.AHB.Login.confirm\")",
                "top": "9.80%",
                "width": "83%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCreatePinContainer.add(flxCreatePin, flxReEnterPin, btnConfirm);
            flxMain.add(MainHeader, flxPageProgress, flxCreatePinContainer);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAHBRegCreateAppPin,
            "enabledForIdleTimeout": false,
            "id": "frmAHBRegCreateAppPin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_df854d6db24c431cbff909e243c800e1,
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