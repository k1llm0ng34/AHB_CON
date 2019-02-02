define("AuthModule/frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var imgKonyLogo = new kony.ui.Image2({
                "centerX": "50%",
                "height": "85dp",
                "id": "imgKonyLogo",
                "isVisible": true,
                "src": "konylogo.png",
                "top": "3.50%",
                "width": "85dp",
                "zIndex": 12
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxWelcome = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7.10%",
                "id": "flxWelcome",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxfafafa",
                "top": "20%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxWelcome.setDefaultUnit(kony.flex.DP);
            var flxBorderTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBorderTop.setDefaultUnit(kony.flex.DP);
            flxBorderTop.add();
            var flxBorderBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3op50",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBorderBottom.setDefaultUnit(kony.flex.DP);
            flxBorderBottom.add();
            var lblWelcomeMessage = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblWelcomeMessage",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Welcome Back! John Belley.",
                "textStyle": {},
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxDashboard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxDashboard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "28dp",
                "skin": "slFbox",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            flxDashboard.setDefaultUnit(kony.flex.DP);
            var imgDashboard = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgDashboard",
                "isVisible": true,
                "skin": "slImage",
                "src": "dashboardicon.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDashboard.add(imgDashboard);
            var lblAccountPreview = new kony.ui.Label({
                "id": "lblAccountPreview",
                "isVisible": false,
                "left": "9.40%",
                "skin": "sknLbl0a78d1sspreg26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.accountPreview\")",
                "textStyle": {},
                "top": "18%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblAccountPreviewTime = new kony.ui.Label({
                "id": "lblAccountPreviewTime",
                "isVisible": false,
                "left": "9.50%",
                "skin": "sknLbla0a0a0SSRegular18px",
                "text": "As of today-04:31 PM",
                "textStyle": {},
                "top": "54%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxWelcome.add(flxBorderTop, flxBorderBottom, lblWelcomeMessage, flxDashboard, lblAccountPreview, lblAccountPreviewTime);
            var flxAccountPreview = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "43%",
                "id": "flxAccountPreview",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxfafafa",
                "top": "27%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxAccountPreview.setDefaultUnit(kony.flex.DP);
            var flxBottomGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "3dp",
                "id": "flxBottomGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxGradient",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxBottomGradient.setDefaultUnit(kony.flex.DP);
            flxBottomGradient.add();
            var lblNetWorthSummary = new kony.ui.Label({
                "id": "lblNetWorthSummary",
                "isVisible": false,
                "left": "9.40%",
                "skin": "sknLbl424242SSReg20px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.netWorthSummary\")",
                "textStyle": {},
                "top": "9%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblNetWorthValue = new kony.ui.Label({
                "id": "lblNetWorthValue",
                "isVisible": false,
                "left": "9.40%",
                "skin": "sknLbl424242SSReg30px",
                "text": "+$  5,212,783.54",
                "textStyle": {},
                "top": "21%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxAssets = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxAssets",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxfafafa",
                "top": "48%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxAssets.setDefaultUnit(kony.flex.DP);
            var lblAssets = new kony.ui.Label({
                "id": "lblAssets",
                "isVisible": true,
                "left": "18.80%",
                "skin": "sknLbl424242SSReg20px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.Assets\")",
                "textStyle": {},
                "top": "15%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblAssetsValue = new kony.ui.Label({
                "id": "lblAssetsValue",
                "isVisible": true,
                "left": "18.80%",
                "skin": "sknLbl424242SSReg30px",
                "text": "+$ 783.44",
                "textStyle": {},
                "top": "42%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxAssets.add(lblAssets, lblAssetsValue);
            var flxDebt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxDebt",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "skin": "sknFlxfafafa",
                "top": "48%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxDebt.setDefaultUnit(kony.flex.DP);
            var lblDebt = new kony.ui.Label({
                "id": "lblDebt",
                "isVisible": true,
                "left": "18.80%",
                "skin": "sknLbl424242SSReg20px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.debt\")",
                "textStyle": {},
                "top": "15%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDebtValue = new kony.ui.Label({
                "id": "lblDebtValue",
                "isVisible": true,
                "left": "18.80%",
                "skin": "sknLbl424242SSReg30px",
                "text": "-$ 7,983.44",
                "textStyle": {},
                "top": "42%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxDebt.add(lblDebt, lblDebtValue);
            var flxHorizontalLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxHorizontalLine",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxHorizontalLine.setDefaultUnit(kony.flex.DP);
            flxHorizontalLine.add();
            var flxVerticalLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxVerticalLine",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxf1f1f1",
                "top": "50%",
                "width": "1dp",
                "zIndex": 5
            }, {}, {});
            flxVerticalLine.setDefaultUnit(kony.flex.DP);
            flxVerticalLine.add();
            var segAccountPreview = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "imgBank": "bankofamerica.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "My Checking...4243",
                    "lblBankName": "Bank of America"
                }, {
                    "imgBank": "citibank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "Little John...2122",
                    "lblBankName": "Citi Bank"
                }, {
                    "imgBank": "chasebank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "Honey Home...2134",
                    "lblBankName": "Chase Bank"
                }, {
                    "imgBank": "citibank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "Little John...2122",
                    "lblBankName": "Citi Bank"
                }, {
                    "imgBank": "citibank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "Little John...2122",
                    "lblBankName": "Citi Bank"
                }],
                "groupCells": false,
                "height": "99%",
                "id": "segAccountPreview",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAccountPreview",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "fafafa00",
                "separatorRequired": true,
                "separatorThickness": 2,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountPreview": "flxAccountPreview",
                    "imgBank": "imgBank",
                    "lblAccountBal": "lblAccountBal",
                    "lblAccountBalValue": "lblAccountBalValue",
                    "lblAccountName": "lblAccountName",
                    "lblBankName": "lblBankName"
                },
                "width": "100%",
                "zIndex": 200
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountPreview.add(flxBottomGradient, lblNetWorthSummary, lblNetWorthValue, flxAssets, flxDebt, flxHorizontalLine, flxVerticalLine, segAccountPreview);
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "72.90%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffff",
                "top": "17.10%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var tbxUsername = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "tbxUsername",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "onTextChange": controller.AS_TextField_e33be38c6e854e89b8c32ba251be81d2,
                "i18n_placeholder": "kony.i18n.getLocalizedString(\"kony.mb.login.username\")",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "5.01%",
                "zIndex": 2
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            var tbxPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "tbxPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "onTextChange": controller.AS_TextField_d2e6e0034be24311964b18622704078b,
                "i18n_placeholder": "kony.i18n.getLocalizedString(\"kony.mb.login.password\")",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "19%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            var flxPwdVisiblityToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxPwdVisiblityToggle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "82.50%",
                "skin": "slFbox",
                "top": "19%",
                "width": "33dp",
                "zIndex": 1
            }, {}, {});
            flxPwdVisiblityToggle.setDefaultUnit(kony.flex.DP);
            var imgPwdVisiblityToggle = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgPwdVisiblityToggle",
                "isVisible": true,
                "skin": "slImage",
                "src": "view.png",
                "width": "17dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPwdVisiblityToggle.add(imgPwdVisiblityToggle);
            var flxForgot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5%",
                "id": "flxForgot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "skin": "slFbox",
                "top": "33%",
                "width": "35%",
                "zIndex": 3
            }, {}, {});
            flxForgot.setDefaultUnit(kony.flex.DP);
            var lblForgotPwd = new kony.ui.Label({
                "centerY": "40.10%",
                "id": "lblForgotPwd",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl004B95SSPRegular26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.cannotLogin\")",
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
            flxForgot.add(lblForgotPwd);
            var lblRememberMe = new kony.ui.Label({
                "id": "lblRememberMe",
                "isVisible": true,
                "right": "65dp",
                "skin": "sknLbl424242SSPRegular26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.rememberMe\")",
                "textStyle": {},
                "top": "33%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxCheckBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxCheckBox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "25dp",
                "skin": "slFbox",
                "top": "31%",
                "width": "138dp",
                "zIndex": 3
            }, {}, {});
            flxCheckBox.setDefaultUnit(kony.flex.DP);
            var imgCheckBox = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgCheckBox",
                "isVisible": true,
                "right": "10dp",
                "skin": "slImage",
                "src": "remembermetick.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox.add(imgCheckBox);
            var btnLogIn = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn0095e426pxEnabled",
                "height": "40dp",
                "id": "btnLogIn",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_h017d5e37a7a4482a1b1217d0ac22bed,
                "right": "20dp",
                "skin": "sknBtna0a0a0SSPReg26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.logIn\")",
                "top": "41.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxOpenNewAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4%",
                "id": "flxOpenNewAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30dp",
                "onClick": controller.AS_FlexContainer_g4eafa9b97c74a1c81c2eed992281565,
                "skin": "slFbox",
                "top": "54%",
                "width": "50%",
                "zIndex": 3
            }, {}, {});
            flxOpenNewAccount.setDefaultUnit(kony.flex.DP);
            var lblOpenNewAccount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOpenNewAccount",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl004B95SSPRegular26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.openNewAccount\")",
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
            flxOpenNewAccount.add(lblOpenNewAccount);
            var flxBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "49%",
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "7dp",
                "skin": "sknFlxF4F4F4",
                "top": "62%",
                "width": "100%",
                "zIndex": 32
            }, {}, {});
            flxBottom.setDefaultUnit(kony.flex.DP);
            var imgBg = new kony.ui.Image2({
                "centerX": "50%",
                "id": "imgBg",
                "isVisible": true,
                "skin": "slImage",
                "src": "swipeup.png",
                "top": "-4%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxScrollContainerAds = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": false,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "40%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollContainerAds",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "-4dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollContainerAds.setDefaultUnit(kony.flex.DP);
            var flxLoadingIndicator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoadingIndicator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoadingIndicator.setDefaultUnit(kony.flex.DP);
            var imgLoadingIndicator = new kony.ui.Image2({
                "height": "100%",
                "id": "imgLoadingIndicator",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "loadersmall.gif",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoadingIndicator.add(imgLoadingIndicator);
            var flxAd1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd1.setDefaultUnit(kony.flex.DP);
            var imgAd1 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd1",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_jd291611a9c34167af6f8b4970001df9,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd1.add(imgAd1);
            var flxAd2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd2.setDefaultUnit(kony.flex.DP);
            var imgAd2 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd2",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_c3d9c988cf0d49bd8945b5190c359853,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd2.add(imgAd2);
            var flxAd3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd3.setDefaultUnit(kony.flex.DP);
            var imgAd3 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd3",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_caf642f394ec4dc6ac32e850b6890c91,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd3.add(imgAd3);
            var flxAd4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd4.setDefaultUnit(kony.flex.DP);
            var imgAd4 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd4",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_h2eb335453f64e20b873e1581f6ca411,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd4.add(imgAd4);
            var flxAd5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd5.setDefaultUnit(kony.flex.DP);
            var imgAd5 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd5",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_b6447e350f804c3198447f6ef626956c,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAd5.add(imgAd5);
            flxScrollContainerAds.add(flxLoadingIndicator, flxAd1, flxAd2, flxAd3, flxAd4, flxAd5);
            var flxProgressBar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxProgressBar",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "7dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProgressBar.setDefaultUnit(kony.flex.DP);
            var flxProgressBarButton1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "flxProgressBarButton1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "38%",
                "skin": "sknflxADADADRadius100px",
                "top": "0dp",
                "width": "8dp",
                "zIndex": 1
            }, {}, {});
            flxProgressBarButton1.setDefaultUnit(kony.flex.DP);
            flxProgressBarButton1.add();
            var flxProgressBarButton2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "flxProgressBarButton2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "8dp",
                "zIndex": 1
            }, {}, {});
            flxProgressBarButton2.setDefaultUnit(kony.flex.DP);
            flxProgressBarButton2.add();
            var flxProgressBarButton3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "flxProgressBarButton3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "8dp",
                "zIndex": 1
            }, {}, {});
            flxProgressBarButton3.setDefaultUnit(kony.flex.DP);
            flxProgressBarButton3.add();
            var flxProgressBarButton4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "flxProgressBarButton4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "8dp",
                "zIndex": 1
            }, {}, {});
            flxProgressBarButton4.setDefaultUnit(kony.flex.DP);
            flxProgressBarButton4.add();
            var flxProgressBarButton5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "flxProgressBarButton5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "8dp",
                "zIndex": 1
            }, {}, {});
            flxProgressBarButton5.setDefaultUnit(kony.flex.DP);
            flxProgressBarButton5.add();
            flxProgressBar.add(flxProgressBarButton1, flxProgressBarButton2, flxProgressBarButton3, flxProgressBarButton4, flxProgressBarButton5);
            var flxAdInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "78dp",
                "id": "flxAdInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxf9f9f9Shadow",
                "top": "3dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxAdInfo.setDefaultUnit(kony.flex.DP);
            var lblHeading = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblHeading",
                "isVisible": true,
                "skin": "sknLbl424242SSP22px",
                "text": "Get Home Loans from ANZ Bank with 4.95 per annum interest rate",
                "textStyle": {},
                "top": "0%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var rtxDetails = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxDetails",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "sknRtx0095e4SSPReg26px",
                "skin": "sknRtx727272SSP22px",
                "text": "Get Home Loans from ANZ Bank with 4.95 per <br/> annum  interest rates and get free... <a href=\"\"> <b>Learn More </b></a>",
                "top": "3dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdInfo.add(lblHeading, rtxDetails);
            flxBottom.add(imgBg, flxScrollContainerAds, flxProgressBar, flxAdInfo);
            var btnTouchId = new kony.ui.Button({
                "focusSkin": "sknBtnffffff004b95SSPReg107pr",
                "height": "30dp",
                "id": "btnTouchId",
                "isVisible": false,
                "right": "32dp",
                "skin": "sknBtnffffff004b95SSPReg107pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.devReg.TouchId\")",
                "top": "53%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var btnFaceId = new kony.ui.Button({
                "focusSkin": "sknBtnffffff004b95SSPReg107pr",
                "height": "30dp",
                "id": "btnFaceId",
                "isVisible": false,
                "right": "32dp",
                "skin": "sknBtnffffff004b95SSPReg107pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.FaceCaps\")",
                "top": "53%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var btnPinId = new kony.ui.Button({
                "focusSkin": "sknBtnffffff004b95SSPReg107pr",
                "height": "30dp",
                "id": "btnPinId",
                "isVisible": true,
                "onClick": controller.AS_Button_e0f04d6a261043a1a7493133a6fa29b7,
                "right": "32dp",
                "skin": "sknBtnffffff004b95SSPReg107pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.pinId\")",
                "top": "53%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            flxContent.add(tbxUsername, tbxPassword, flxPwdVisiblityToggle, flxForgot, lblRememberMe, flxCheckBox, btnLogIn, flxOpenNewAccount, flxBottom, btnTouchId, btnFaceId, btnPinId);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "8%",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var btnLocate = new kony.ui.Button({
                "focusSkin": "sknBtnffffff004b95SSPReg28px",
                "height": "100%",
                "id": "btnLocate",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_e871bfd24cd74f03b0880c9f934f9980,
                "skin": "sknBtnffffff004b95SSPReg28px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.locate\")",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnEnroll = new kony.ui.Button({
                "focusSkin": "sknBtnffffff004b95SSPReg28px",
                "height": "100%",
                "id": "btnEnroll",
                "isVisible": true,
                "left": "33.89%",
                "onClick": controller.AS_Button_f7fa01f6196a476bab10b8b1a1f46fd6,
                "skin": "sknBtnffffff004b95SSPReg28px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.enroll\")",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSupport = new kony.ui.Button({
                "focusSkin": "sknBtnffffff004b95SSPReg28px",
                "height": "100%",
                "id": "btnSupport",
                "isVisible": true,
                "left": "66.66%",
                "onClick": controller.AS_Button_ddca20b68415486faf31bad9fd1fa798,
                "skin": "sknBtnffffff004b95SSPReg28px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.support\")",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxVerticalSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxVerticalSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "33.33%",
                "skin": "sknFlxf1f1f1B",
                "top": "3dp",
                "width": "1dp",
                "zIndex": 10
            }, {}, {});
            flxVerticalSeperator.setDefaultUnit(kony.flex.DP);
            flxVerticalSeperator.add();
            var flxVerticalSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxVerticalSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "66.66%",
                "skin": "sknFlxf1f1f1B",
                "top": "3dp",
                "width": "1dp",
                "zIndex": 10
            }, {}, {});
            flxVerticalSeperator2.setDefaultUnit(kony.flex.DP);
            flxVerticalSeperator2.add();
            var flxBorderTopFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderTopFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBorderTopFooter.setDefaultUnit(kony.flex.DP);
            flxBorderTopFooter.add();
            flxFooter.add(btnLocate, btnEnroll, btnSupport, flxVerticalSeperator, flxVerticalSeperator2, flxBorderTopFooter);
            var flxEnterPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEnterPin",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx000000op60",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxEnterPin.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "72%",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxffffffB10px",
                "width": "81%",
                "zIndex": 1
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "sknFlxffffffB10px",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var stepCountLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "60%",
                "clipBounds": true,
                "height": "40dp",
                "id": "stepCountLabel",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "34%",
                "skin": "CopyslFbox",
                "top": "2%",
                "width": "44.44%",
                "zIndex": 1
            }, {}, {});
            stepCountLabel.setDefaultUnit(kony.flex.DP);
            var stepNumberFlex = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": 50,
                "centerY": "33.33%",
                "clipBounds": true,
                "id": "stepNumberFlex",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "24%",
                "skin": "sknStepNumber",
                "top": "4%",
                "width": "15.85%",
                "zIndex": 1
            }, {}, {});
            stepNumberFlex.setDefaultUnit(kony.flex.DP);
            var StepNumberCount = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "StepNumberCount",
                "isVisible": true,
                "skin": "skniconButtonLabel",
                "text": "1",
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
            stepNumberFlex.add(StepNumberCount);
            var totalStepsLabel = new kony.ui.Label({
                "id": "totalStepsLabel",
                "isVisible": true,
                "left": "43.75%",
                "skin": "skniconButtonLabel",
                "text": "of 2",
                "textStyle": {},
                "top": "10.22%",
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
            var StepLabel = new kony.ui.Label({
                "id": "StepLabel",
                "isVisible": true,
                "left": "0%",
                "skin": "skniconButtonLabel",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Login.Step\")",
                "textStyle": {},
                "top": "10.50%",
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
            stepCountLabel.add(stepNumberFlex, totalStepsLabel, StepLabel);
            var PinEntryLabel = new kony.ui.Label({
                "centerX": "50%",
                "id": "PinEntryLabel",
                "isVisible": true,
                "skin": "sknLbl3e4f56SSPReg32px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.enterLoginPin\")",
                "textStyle": {},
                "top": "4.50%",
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
            var flxProgressButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "53.50%",
                "clipBounds": true,
                "height": "5%",
                "id": "flxProgressButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25.00%",
                "skin": "skncontainerBkgNone",
                "top": "5%",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxProgressButtons.setDefaultUnit(kony.flex.DP);
            var flxProgressButton1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "11dp",
                "id": "flxProgressButton1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxa0a0a0B",
                "top": "0%",
                "width": "11dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton1.setDefaultUnit(kony.flex.DP);
            flxProgressButton1.add();
            var flxProgressButton2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "11dp",
                "id": "flxProgressButton2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "15%",
                "skin": "sknFlxa0a0a0B",
                "top": "0%",
                "width": "11dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton2.setDefaultUnit(kony.flex.DP);
            flxProgressButton2.add();
            var flxProgressButton3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "11dp",
                "id": "flxProgressButton3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30%",
                "skin": "sknFlxa0a0a0B",
                "top": "0%",
                "width": "11dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton3.setDefaultUnit(kony.flex.DP);
            flxProgressButton3.add();
            var flxProgressButton4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "11dp",
                "id": "flxProgressButton4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "45%",
                "skin": "sknFlxa0a0a0B",
                "top": "0%",
                "width": "11dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton4.setDefaultUnit(kony.flex.DP);
            flxProgressButton4.add();
            var flxProgressButton5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "11dp",
                "id": "flxProgressButton5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "60%",
                "skin": "sknFlxa0a0a0B",
                "top": "0%",
                "width": "11dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton5.setDefaultUnit(kony.flex.DP);
            flxProgressButton5.add();
            var flxProgressButton6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "11dp",
                "id": "flxProgressButton6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "75%",
                "skin": "sknFlxa0a0a0B",
                "top": "0%",
                "width": "11dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton6.setDefaultUnit(kony.flex.DP);
            flxProgressButton6.add();
            flxProgressButtons.add(flxProgressButton1, flxProgressButton2, flxProgressButton3, flxProgressButton4, flxProgressButton5, flxProgressButton6);
            var flxDialPad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxDialPad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "skncontainerBkgNone",
                "top": "5%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxDialPad.setDefaultUnit(kony.flex.DP);
            var btnOne = new kony.ui.Button({
                "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
                "height": "50dp",
                "id": "btnOne",
                "isVisible": true,
                "left": "9%",
                "skin": "btnNumbere3e3e3B",
                "text": "1",
                "top": "2%",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnTwo = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
                "height": "50dp",
                "id": "btnTwo",
                "isVisible": true,
                "left": "36%",
                "skin": "btnNumbere3e3e3B",
                "text": "2",
                "top": "2%",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnThree = new kony.ui.Button({
                "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
                "height": "50dp",
                "id": "btnThree",
                "isVisible": true,
                "right": "9%",
                "skin": "btnNumbere3e3e3B",
                "text": "3",
                "top": "2%",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnFour = new kony.ui.Button({
                "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
                "height": "50dp",
                "id": "btnFour",
                "isVisible": true,
                "left": "9%",
                "skin": "btnNumbere3e3e3B",
                "text": "4",
                "top": "25%",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnFive = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
                "height": "50dp",
                "id": "btnFive",
                "isVisible": true,
                "left": "36%",
                "skin": "btnNumbere3e3e3B",
                "text": "5",
                "top": "25%",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSix = new kony.ui.Button({
                "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
                "height": "50dp",
                "id": "btnSix",
                "isVisible": true,
                "right": "9%",
                "skin": "btnNumbere3e3e3B",
                "text": "6",
                "top": "25%",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSeven = new kony.ui.Button({
                "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
                "height": "50dp",
                "id": "btnSeven",
                "isVisible": true,
                "left": "9%",
                "skin": "btnNumbere3e3e3B",
                "text": "7",
                "top": "48%",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnEight = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
                "height": "50dp",
                "id": "btnEight",
                "isVisible": true,
                "left": "36%",
                "skin": "btnNumbere3e3e3B",
                "text": "8",
                "top": "48%",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnNine = new kony.ui.Button({
                "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
                "height": "50dp",
                "id": "btnNine",
                "isVisible": true,
                "right": "9%",
                "skin": "btnNumbere3e3e3B",
                "text": "9",
                "top": "48%",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnZero = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
                "height": "50dp",
                "id": "btnZero",
                "isVisible": true,
                "skin": "btnNumbere3e3e3B",
                "text": "0",
                "top": "71%",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCross = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxImgCancelFocus",
                "height": "30dp",
                "id": "flxCross",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_a14c96d2494746beb07ead9f0659ba4b,
                "right": "11%",
                "skin": "sknFlxImgCancel",
                "top": "75%",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            flxCross.setDefaultUnit(kony.flex.DP);
            flxCross.add();
            flxDialPad.add(btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine, btnZero, flxCross);
            var flxbottomContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11%",
                "id": "flxbottomContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox",
                "top": "4%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxbottomContainer.setDefaultUnit(kony.flex.DP);
            var flxCancelPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "id": "flxCancelPin",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "3%",
                "skin": "CopyslFbox",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxCancelPin.setDefaultUnit(kony.flex.DP);
            var lblCancel = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCancel",
                "isVisible": true,
                "right": "5%",
                "skin": "sknLbl0095e4SSPReg30px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.Cancel\")",
                "textStyle": {},
                "top": "0dp",
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
            flxCancelPin.add(lblCancel);
            var flxBorder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorder",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0%",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxBorder.setDefaultUnit(kony.flex.DP);
            flxBorder.add();
            flxbottomContainer.add(flxCancelPin, flxBorder);
            flxMainContainer.add(stepCountLabel, PinEntryLabel, flxProgressButtons, flxDialPad, flxbottomContainer);
            flxContainer.add(flxMainContainer);
            flxEnterPin.add(flxContainer);
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
            var flxFaceIdPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxFaceIdPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_j9cafb45b32c434a85967261553fd46a,
                "skin": "sknFlx000000op60",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxFaceIdPopUp.setDefaultUnit(kony.flex.DP);
            var flxContainerFaceId = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "61.65%",
                "id": "flxContainerFaceId",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "99dp",
                "skin": "sknFlxffffffB",
                "top": "386dp",
                "width": "84%",
                "zIndex": 1
            }, {}, {});
            flxContainerFaceId.setDefaultUnit(kony.flex.DP);
            var lblFaceIdTitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblFaceIdTitle",
                "isVisible": true,
                "skin": "sknLbl3e4f56SSPReg30px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.faceIdTitle\")",
                "textStyle": {},
                "top": "70%",
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
            var lblAuthenticateMsgFI = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAuthenticateMsgFI",
                "isVisible": true,
                "skin": "sknLbl3e4f56op50SSPReg30px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.authenticationMsg\")",
                "textStyle": {},
                "top": "77%",
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
            var flxBorderBottomFI = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderBottomFI",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3op50",
                "top": "87%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxBorderBottomFI.setDefaultUnit(kony.flex.DP);
            flxBorderBottomFI.add();
            var flxCancelFI = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "13%",
                "id": "flxCancelFI",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_i7194816b12f4520875b01c6e37f415c,
                "right": "3%",
                "skin": "CopyslFbox",
                "top": "87%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCancelFI.setDefaultUnit(kony.flex.DP);
            var lblCancelFI = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblCancelFI",
                "isVisible": true,
                "right": "5%",
                "skin": "sknLbl0095e4SSPReg30px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.Cancel\")",
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
            flxCancelFI.add(lblCancelFI);
            var imgFaceId = new kony.ui.Image2({
                "centerX": "50%",
                "height": "210dp",
                "id": "imgFaceId",
                "isVisible": true,
                "skin": "slImage",
                "src": "faceid.png",
                "top": "10%",
                "width": "210dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxContainerFaceId.add(lblFaceIdTitle, lblAuthenticateMsgFI, flxBorderBottomFI, flxCancelFI, imgFaceId);
            flxFaceIdPopUp.add(flxContainerFaceId);
            var customAlertPopUp = new com.kmb.common.customAlertPopUp({
                "clipBounds": true,
                "height": "100%",
                "id": "customAlertPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "sknFlx000000op60",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            customAlertPopUp.isVisible = false;
            customAlertPopUp.flxCancel.width = "100%";
            customAlertPopUp.flxCancel.onClick = controller.AS_FlexContainer_e8059ee060174b45b4f31a06f675663c;
            var flxBackground = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flxBackground",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxBackground.setDefaultUnit(kony.flex.DP);
            flxBackground.add();
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            this.add(imgKonyLogo, flxWelcome, flxAccountPreview, flxContent, flxFooter, flxEnterPin, flxPopup, flxFaceIdPopUp, customAlertPopUp, flxBackground, flxGradient);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmLogin",
            "init": controller.AS_Form_i93d45a3a71a4e18b4c0123ddd1ff557,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_eb9b89592ac242958770cc625d8d058b,
            "skin": "sknFrm1a98ffGradient10"
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