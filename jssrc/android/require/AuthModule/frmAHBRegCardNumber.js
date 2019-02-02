define("AuthModule/frmAHBRegCardNumber", function() {
    return function(controller) {
        function addWidgetsfrmAHBRegCardNumber() {
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
            var MainHeader = new com.ahb.common.Head.MainHeader({
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
            MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.Registration.RegistrationHeading");
            MainHeader.lblHeading.isVisible = true;
            var flxPageProgress0j1c9dc02da7d41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0.50%",
                "id": "flxPageProgress0j1c9dc02da7d41",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "14.95%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0e01d1e58dd2647",
                "top": "3.70%",
                "width": "70.20%",
                "zIndex": 1
            }, {}, {});
            flxPageProgress0j1c9dc02da7d41.setDefaultUnit(kony.flex.DP);
            var imgProgress1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgProgress1",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage0i1c15e56721740",
                "src": "line1_3.png",
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
                "height": "50%",
                "id": "imgProgress2",
                "isVisible": true,
                "left": "25%",
                "skin": "slImage0i1c15e56721740",
                "src": "line2_3.png",
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
                "skin": "slImage0i1c15e56721740",
                "src": "line2_3.png",
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
                "skin": "slImage0i1c15e56721740",
                "src": "line2_3.png",
                "top": "0%",
                "width": "25%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPageProgress0j1c9dc02da7d41.add(imgProgress1, imgProgress2, imgProgress3, imgProgress4);
            var flxPageProgress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0.15%",
                "id": "flxPageProgress",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "14.95%",
                "skin": "slFbox",
                "top": "3.70%",
                "width": "70.20%",
                "zIndex": 1
            }, {}, {});
            flxPageProgress.setDefaultUnit(kony.flex.DP);
            var lblProgress1 = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblProgress1",
                "isVisible": true,
                "left": "0dp",
                "skin": "defLabel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblProgress2 = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblProgress2",
                "isVisible": true,
                "left": "0dp",
                "skin": "defLabel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7dp",
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblProgress3 = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblProgress3",
                "isVisible": true,
                "left": "0dp",
                "skin": "defLabel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7dp",
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblProgress4 = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblProgress4",
                "isVisible": true,
                "left": "0dp",
                "skin": "defLabel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7dp",
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPageProgress.add(lblProgress1, lblProgress2, lblProgress3, lblProgress4);
            var flxScreenCredit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "32%",
                "id": "flxScreenCredit",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "14.95%",
                "skin": "slFbox",
                "top": "8.20%",
                "width": "70.50%"
            }, {}, {});
            flxScreenCredit.setDefaultUnit(kony.flex.DP);
            var flxCardNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "43%",
                "id": "flxCardNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCardNumber.setDefaultUnit(kony.flex.DP);
            var lblCardNo = new kony.ui.Label({
                "centerX": "50%",
                "height": "25%",
                "id": "lblCardNo",
                "isVisible": true,
                "left": "139dp",
                "skin": "sknLblAHBGSC16ptd3d3d3",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.cardNum"),
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
            var flxEnterCardNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "74%",
                "id": "flxEnterCardNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_f380b4075aee46fda4822ea69030950a,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxEnterCardNo.setDefaultUnit(kony.flex.DP);
            var tbxCardNo1 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc",
                "height": "100%",
                "id": "tbxCardNo1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "0%",
                "maxTextLength": 19,
                "onTextChange": controller.AS_TextField_a1bc115cf079437892fc4f374b6d708d,
                "onTouchStart": controller.AS_TextField_f5a430e5c0d74a57bcc1c5ac0359d9c4,
                "right": 0,
                "secureTextEntry": false,
                "skin": "CopysknAHBGsc",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0%",
                "width": "100%",
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
            flxEnterCardNo.add(tbxCardNo1);
            var lblCardNoHolder = new kony.ui.Label({
                "height": "1%",
                "id": "lblCardNoHolder",
                "isVisible": true,
                "left": "0dp",
                "right": 0,
                "skin": "CopysknAHBLined",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCardNumber.add(lblCardNo, flxEnterCardNo, lblCardNoHolder);
            var flxCardPin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45%",
                "id": "flxCardPin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "13%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCardPin.setDefaultUnit(kony.flex.DP);
            var lblCardPin = new kony.ui.Label({
                "centerX": "50%",
                "height": "25%",
                "id": "lblCardPin",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblAHBGSC16ptd3d3d3",
                "text": kony.i18n.getLocalizedString("kony.ahb.Registration.CardPin"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxPinDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70%",
                "id": "flxPinDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxPinDetails.setDefaultUnit(kony.flex.DP);
            var tbxPin1 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc",
                "height": "100%",
                "id": "tbxPin1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "0dp",
                "onTextChange": controller.AS_TextField_ea496d53dcbe4dcdb1b479f674763bde,
                "onTouchStart": controller.AS_TextField_f606913a8d6a44e385bb6d78d312de8a,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbxPin2 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc",
                "height": "100%",
                "id": "tbxPin2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "26%",
                "onTextChange": controller.AS_TextField_a079c11821e64665b87b92e14366fe99,
                "onTouchStart": controller.AS_TextField_f9b1dde225824b5b9e99705853e55feb,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbxPin3 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc",
                "height": "100%",
                "id": "tbxPin3",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "52%",
                "onTextChange": controller.AS_TextField_g7a113d09c47496da8e4214982a2ab0d,
                "onTouchStart": controller.AS_TextField_c65f5a3c15904236b68a7a24fe3ba588,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbxPin4 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopysknAHBGsc",
                "height": "100%",
                "id": "tbxPin4",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "78%",
                "onTextChange": controller.AS_TextField_g9af031cdbcd4c6a88a2a45c0521f733,
                "onTouchStart": controller.AS_TextField_e8c2576bbefc41de8b97060e894e41f3,
                "secureTextEntry": true,
                "skin": "CopysknAHBGsc",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxPinDetails.add(tbxPin1, tbxPin2, tbxPin3, tbxPin4);
            var flxPinLbl = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2%",
                "id": "flxPinLbl",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxPinLbl.setDefaultUnit(kony.flex.DP);
            var lblPin1 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblPin1",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknAHBLined",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPin2 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblPin2",
                "isVisible": true,
                "left": "26%",
                "skin": "CopysknAHBLined",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPin3 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblPin3",
                "isVisible": true,
                "left": "52%",
                "skin": "CopysknAHBLined",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPin4 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblPin4",
                "isVisible": true,
                "left": "78%",
                "skin": "CopysknAHBLined",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPinLbl.add(lblPin1, lblPin2, lblPin3, lblPin4);
            flxCardPin.add(lblCardPin, flxPinDetails, flxPinLbl);
            flxScreenCredit.add(flxCardNumber, flxCardPin);
            var lblMsgLink = new kony.ui.Label({
                "centerX": "50%",
                "height": "5%",
                "id": "lblMsgLink",
                "isVisible": true,
                "skin": "sknLblAHBGSC16ptff6d00",
                "text": kony.i18n.getLocalizedString("kony.ahb.Registration.RegAccNumberMsg"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMain.add(MainHeader, flxPageProgress0j1c9dc02da7d41, flxPageProgress, flxScreenCredit, lblMsgLink);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAHBRegCardNumber,
            "enabledForIdleTimeout": false,
            "id": "frmAHBRegCardNumber",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_a95d031d4eb347bfb108b6e7dd20804b,
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