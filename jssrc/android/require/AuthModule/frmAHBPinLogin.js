define("AuthModule/frmAHBPinLogin", function() {
    return function(controller) {
        function addWidgetsfrmAHBPinLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHomeContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHomeContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHomeContainer.setDefaultUnit(kony.flex.DP);
            var flxLogo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7.21%",
                "id": "flxLogo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "8.77%",
                "width": "100%"
            }, {}, {});
            flxLogo.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "centerX": "50%",
                "id": "imgLogo",
                "isVisible": true,
                "skin": "slImage",
                "src": "banklogo_2.png",
                "top": "0%",
                "width": "54.17%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLogo.add(imgLogo);
            var flxLoginContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxLoginContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoginContent.setDefaultUnit(kony.flex.DP);
            var lblLoginPin = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblLoginPin",
                "isVisible": true,
                "skin": "sknAHBGse14ptBffffffTadboae",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.LoginPin"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "11.20%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "7%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxPin",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPin.setDefaultUnit(kony.flex.DP);
            var lblPin1 = new kony.ui.Label({
                "height": "3%",
                "id": "lblPin1",
                "isVisible": true,
                "left": "23%",
                "skin": "sknAHBLined3d3d3",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "90%",
                "width": "11.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPin2 = new kony.ui.Label({
                "height": "3%",
                "id": "lblPin2",
                "isVisible": true,
                "left": "37.40%",
                "skin": "sknAHBLined3d3d3",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "90%",
                "width": "11.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPin3 = new kony.ui.Label({
                "height": "3%",
                "id": "lblPin3",
                "isVisible": true,
                "left": "52.80%",
                "skin": "sknAHBLined3d3d3",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "90%",
                "width": "11.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPin4 = new kony.ui.Label({
                "height": "3%",
                "id": "lblPin4",
                "isVisible": true,
                "left": "68.20%",
                "skin": "sknAHBLined3d3d3",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "90%",
                "width": "11.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxTbxPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTbxPin",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "-1dp",
                "width": "100%"
            }, {}, {});
            flxTbxPin.setDefaultUnit(kony.flex.DP);
            var tbxPin1 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknAHBGsc12ptT000000",
                "height": "80%",
                "id": "tbxPin1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "23%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_f8b2903a2b33485aa0527a3fa6209c8f,
                "onTouchStart": controller.AS_TextField_cc8147e232404109b2965abffcaa938f,
                "secureTextEntry": true,
                "skin": "sknAHBGsc12ptT000000",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11.20%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbxPin2 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknAHBGsc12ptT000000",
                "height": "80%",
                "id": "tbxPin2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "37.40%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_effa7890334b458199b1c8a28b6dc71f,
                "secureTextEntry": true,
                "skin": "sknAHBGsc12ptT000000",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11.20%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbxPin3 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknAHBGsc12ptT000000",
                "height": "80%",
                "id": "tbxPin3",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "52.80%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_aa1a84b434e74874afa097d6b97d73b3,
                "secureTextEntry": true,
                "skin": "sknAHBGsc12ptT000000",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11.20%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbxPin4 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknAHBGsc12ptT000000",
                "height": "80%",
                "id": "tbxPin4",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "68.20%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_g8a2b78fa2d34034b3230a3ec588003c,
                "secureTextEntry": true,
                "skin": "sknAHBGsc12ptT000000",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "2%",
                "width": "11.20%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxTbxPin.add(tbxPin1, tbxPin2, tbxPin3, tbxPin4);
            flxPin.add(lblPin1, lblPin2, lblPin3, lblPin4, flxTbxPin);
            var lblTOuchID = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTOuchID",
                "isVisible": true,
                "skin": "sknAHBGse14ptBffffffTadboae",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.Touchid"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6.50%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgFingerPrint = new kony.ui.Image2({
                "centerX": "50%",
                "id": "imgFingerPrint",
                "isVisible": true,
                "skin": "CopyslImage",
                "src": "fingerscanner.png",
                "top": "4.80%",
                "width": "13%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnForgotPin = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknAHBGsc14ptTff6d00",
                "id": "btnForgotPin",
                "isVisible": true,
                "skin": "sknAHBGsc14ptTff6d00",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.Forget"),
                "top": "11.37%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnChangeUser = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknAHBGsc14ptTff6d00",
                "id": "btnChangeUser",
                "isVisible": true,
                "skin": "sknAHBGsc14ptTff6d00",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.ChangeUser"),
                "top": "4.80%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLanguageBtnGrouplogin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "5%",
                "id": "flxLanguageBtnGrouplogin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "11.31%",
                "width": "100%"
            }, {}, {});
            flxLanguageBtnGrouplogin.setDefaultUnit(kony.flex.DP);
            var btnEnglishLogin = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "100%",
                "id": "btnEnglishLogin",
                "isVisible": true,
                "left": "33%",
                "skin": "sknAHBGsc12ptBff6d00Bfffff",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.English"),
                "top": "0%",
                "width": "14%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 1, 0, 1],
                "paddingInPixel": false
            }, {});
            var btnArabicLogin = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "100%",
                "id": "btnArabicLogin",
                "isVisible": true,
                "left": "2%",
                "skin": "sknAHBGsc12ptBffffffTd3d3d3Border1d3d3d3",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.Arabic"),
                "top": "0%",
                "width": "14%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 1, 0, 1],
                "paddingInPixel": false
            }, {});
            flxLanguageBtnGrouplogin.add(btnEnglishLogin, btnArabicLogin);
            flxLoginContent.add(lblLoginPin, flxPin, lblTOuchID, imgFingerPrint, btnForgotPin, btnChangeUser, flxLanguageBtnGrouplogin);
            var flxRegistrationContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55%",
                "id": "flxRegistrationContent",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0f43b20fb398b41",
                "top": "15%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRegistrationContent.setDefaultUnit(kony.flex.DP);
            var lblWelcome = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblWelcome",
                "isVisible": true,
                "skin": "sknAHBGsc0a21ea4c1741247",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.Welcome"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblContent = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblContent",
                "isVisible": true,
                "skin": "sknAHBGSC0d82b5e33638c45",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.toYourMobileBanking"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxLanguageBtnGroup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "6%",
                "id": "flxLanguageBtnGroup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0f43b20fb398b41",
                "top": "25%",
                "width": "100%"
            }, {}, {});
            flxLanguageBtnGroup.setDefaultUnit(kony.flex.DP);
            var btnEnglish = new kony.ui.Button({
                "focusSkin": "sknAHBGsc0i3e20d51b06e48",
                "height": "100%",
                "id": "btnEnglish",
                "isVisible": true,
                "left": "33%",
                "skin": "sknAHBGsc0i3e20d51b06e48",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.English"),
                "top": "0%",
                "width": "15%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 1, 1, 1],
                "paddingInPixel": false
            }, {});
            var btnArabic = new kony.ui.Button({
                "focusSkin": "sknAHBGsc0bff07745b2ea48",
                "height": "100%",
                "id": "btnArabic",
                "isVisible": true,
                "left": "2%",
                "skin": "sknAHBGsc0bff07745b2ea48",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.Arabic"),
                "top": "0%",
                "width": "15%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 1, 1, 1],
                "paddingInPixel": false
            }, {});
            flxLanguageBtnGroup.add(btnEnglish, btnArabic);
            var btnLetsgetStarted = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknAHBGsc0b29ca020d9d44b",
                "height": "10%",
                "id": "btnLetsgetStarted",
                "isVisible": true,
                "skin": "sknAHBGsc0b29ca020d9d44b",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.Register.CardNumber"),
                "top": "30%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 2, 0, 2],
                "paddingInPixel": false
            }, {});
            var btnRegisterUsingAccountNumber = new kony.ui.Button({
                "centerX": "48.58%",
                "focusSkin": "sknAHBGsc0b16dfa0b0d6e4e",
                "id": "btnRegisterUsingAccountNumber",
                "isVisible": true,
                "skin": "sknAHBGsc0b16dfa0b0d6e4e",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.AccountNumber"),
                "top": "6%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 2, 0, 2],
                "paddingInPixel": false
            }, {});
            flxRegistrationContent.add(lblWelcome, lblContent, flxLanguageBtnGroup, btnLetsgetStarted, btnRegisterUsingAccountNumber);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11.87%",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "right": 0,
                "skin": "slFbox",
                "top": "2.79%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var lblVerticalLine = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "40%",
                "height": "50%",
                "id": "lblVerticalLine",
                "isVisible": true,
                "skin": "sknAHBLined3d3d3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "0.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 2, 0, 1],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxATMLocator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "24.50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxATMLocator",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "slFbox",
                "top": "0%",
                "width": "49%",
                "zIndex": 1
            }, {}, {});
            flxATMLocator.setDefaultUnit(kony.flex.DP);
            var imgATMLocator = new kony.ui.Image2({
                "height": "50%",
                "id": "imgATMLocator",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "atmbranchlocatoricon_1.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblATMText = new kony.ui.Label({
                "height": "37%",
                "id": "lblATMText",
                "isVisible": true,
                "left": "0%",
                "skin": "sknAHBGse14ptBffffffTadboae",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.footer.ATM"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxATMLocator.add(imgATMLocator, lblATMText);
            var flxContactUs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "75%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxContactUs",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "slFbox",
                "top": "0%",
                "width": "49%",
                "zIndex": 1
            }, {}, {});
            flxContactUs.setDefaultUnit(kony.flex.DP);
            var imgContactUs = new kony.ui.Image2({
                "height": "37.41%",
                "id": "imgContactUs",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "contactusicon_1.png",
                "top": "12.47%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblContactUs = new kony.ui.Label({
                "height": "37%",
                "id": "lblContactUs",
                "isVisible": true,
                "left": "0%",
                "skin": "sknAHBGse14ptBffffffTadboae",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.footer.ContactUs"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxContactUs.add(imgContactUs, lblContactUs);
            flxFooter.add(lblVerticalLine, flxATMLocator, flxContactUs);
            flxHomeContainer.add(flxLogo, flxLoginContent, flxRegistrationContent, flxFooter);
            var flxErrorScreen = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxErrorScreen",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0.00%",
                "skin": "sknAHBff6d00",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxErrorScreen.setDefaultUnit(kony.flex.DP);
            var imgMsg = new kony.ui.Image2({
                "centerY": "50%",
                "height": "28.34%",
                "id": "imgMsg",
                "isVisible": true,
                "left": "7%",
                "skin": "slImage",
                "src": "infoiconwhite_1.png",
                "width": "5.32%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblInfoMsg = new kony.ui.Label({
                "centerY": "50%",
                "height": "99.67%",
                "id": "lblInfoMsg",
                "isVisible": true,
                "skin": "sknAHBGsc24ptTffffff",
                "text": kony.i18n.getLocalizedString("kony.AHB.Login.RegisterErrorMsg"),
                "textStyle": {
                    "lineSpacing": 0,
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8.00%",
                "width": "87.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxErrorScreen.add(imgMsg, lblInfoMsg);
            this.add(flxHomeContainer, flxErrorScreen);
        };
        return [{
            "addWidgets": addWidgetsfrmAHBPinLogin,
            "enabledForIdleTimeout": false,
            "id": "frmAHBPinLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_g64011dbb4a44156af35b26ae3aea783,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});