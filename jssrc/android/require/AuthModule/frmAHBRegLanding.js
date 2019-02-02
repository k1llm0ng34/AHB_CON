define("AuthModule/frmAHBRegLanding", function() {
    return function(controller) {
        function addWidgetsfrmAHBRegLanding() {
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
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0e1734b2bf1a04a",
                "top": "8.77%",
                "width": "100%"
            }, {}, {});
            flxLogo.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "centerX": "50%",
                "id": "imgLogo",
                "isVisible": true,
                "skin": "slImage0ca7adb7f9e3b48",
                "src": "banklogo_3.png",
                "top": "0%",
                "width": "54.17%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLogo.add(imgLogo);
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "15%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var lblWelcome = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblWelcome",
                "isVisible": true,
                "skin": "sknAHBGsc24pt363836",
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
                "skin": "CopysknAHBGSC0c231587adc934f",
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
                "skin": "slFbox",
                "top": "25%",
                "width": "100%"
            }, {}, {});
            flxLanguageBtnGroup.setDefaultUnit(kony.flex.DP);
            var btnEnglish = new kony.ui.Button({
                "focusSkin": "CopysknAHBGsc4",
                "height": "100%",
                "id": "btnEnglish",
                "isVisible": true,
                "left": "33%",
                "skin": "CopysknAHBGsc4",
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
                "focusSkin": "CopysknAHBGsc3",
                "height": "100%",
                "id": "btnArabic",
                "isVisible": true,
                "left": "2%",
                "skin": "CopysknAHBGsc3",
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
                "focusSkin": "CopysknAHBGsc5",
                "height": "10%",
                "id": "btnLetsgetStarted",
                "isVisible": true,
                "skin": "CopysknAHBGsc5",
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
                "focusSkin": "CopysknAHBGsc0e45f628be37e4c",
                "id": "btnRegisterUsingAccountNumber",
                "isVisible": true,
                "skin": "CopysknAHBGsc0e45f628be37e4c",
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
            flxContent.add(lblWelcome, lblContent, flxLanguageBtnGroup, btnLetsgetStarted, btnRegisterUsingAccountNumber);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "right": 0,
                "skin": "slFbox",
                "top": "3.80%",
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
                "skin": "CopysknAHBLined3",
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
                "src": "atmbranchlocatoricon_2.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblATMText = new kony.ui.Label({
                "height": "50%",
                "id": "lblATMText",
                "isVisible": true,
                "left": "0%",
                "skin": "CopysknAHBGse",
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
                "height": "50%",
                "id": "imgContactUs",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "contactusicon_2.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblContactUs = new kony.ui.Label({
                "height": "50%",
                "id": "lblContactUs",
                "isVisible": true,
                "left": "0%",
                "skin": "CopysknAHBGse",
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
            flxHomeContainer.add(flxLogo, flxContent, flxFooter);
            var flxErrorScreen = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxErrorScreen",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0.00%",
                "skin": "CopysknAHBff",
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
                "src": "infoiconwhite_1_1.png",
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
                "skin": "CopysknAHBGsc0d05f9724535843",
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
            "addWidgets": addWidgetsfrmAHBRegLanding,
            "enabledForIdleTimeout": false,
            "id": "frmAHBRegLanding",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
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