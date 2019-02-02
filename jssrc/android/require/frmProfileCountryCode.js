define("frmProfileCountryCode", function() {
    return function(controller) {
        function addWidgetsfrmProfileCountryCode() {
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
                "zIndex": 30
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
            customHeader.btnRight.text = kony.i18n.getLocalizedString("kony.mb.common.Cancel");
            customHeader.btnRight.isVisible = true;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Enter Country Code";
            flxHeader.add(customHeader);
            var flxSecurityCheckMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "32%",
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxSecurityCheckMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlfafafa",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSecurityCheckMain.setDefaultUnit(kony.flex.DP);
            var flxSecurityCheckOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxSecurityCheckOptions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSecurityCheckOptions.setDefaultUnit(kony.flex.DP);
            var flxCountryCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxCountryCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknflxffffffBorderf1f1f13px",
                "top": "30dp",
                "zIndex": 1
            }, {}, {});
            flxCountryCode.setDefaultUnit(kony.flex.DP);
            var tbxCountryCode = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxCountryCode",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.Profile.EnterCountryCode"),
                "secureTextEntry": false,
                "skin": "skntbxNoborder",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblCode = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCode",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCountryCode.add(tbxCountryCode, lblCode);
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "26dp",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "top": "95dp",
                "width": "26dp",
                "zIndex": 1
            }, {}, {});
            flxOr.setDefaultUnit(kony.flex.DP);
            var lblOr = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOr",
                "isVisible": true,
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Or"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxOr.add(lblOr);
            var flxPickCountry = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxPickCountry",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30dp",
                "right": "10dp",
                "skin": "sknflxffffffBorderf1f1f13px",
                "top": "160dp",
                "zIndex": 1
            }, {}, {});
            flxPickCountry.setDefaultUnit(kony.flex.DP);
            var flxImgSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxImgSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "45dp",
                "zIndex": 1
            }, {}, {});
            flxImgSecurityCode.setDefaultUnit(kony.flex.DP);
            var imgSecurityCode = new kony.ui.Image2({
                "centerY": "50%",
                "height": "24dp",
                "id": "imgSecurityCode",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "securitycode.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSepaartor3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSepaartor3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxSepaartor3.setDefaultUnit(kony.flex.DP);
            flxSepaartor3.add();
            flxImgSecurityCode.add(imgSecurityCode, flxSepaartor3);
            var flxArrowSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxArrowSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxArrowSecurityCode.setDefaultUnit(kony.flex.DP);
            var imgArrowSecurityCode = new kony.ui.Image2({
                "centerY": "50%",
                "height": "14dp",
                "id": "imgArrowSecurityCode",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "calenderarrowright.png",
                "width": "7dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxArrowSecurityCode.add(imgArrowSecurityCode);
            var rtxSecurityCode = new kony.ui.RichText({
                "centerY": "50%",
                "height": "45dp",
                "id": "rtxSecurityCode",
                "isVisible": true,
                "left": "53dp",
                "linkSkin": "defRichTextLink",
                "right": "45dp",
                "skin": "sknRtx424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Profile.PickCountry"),
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPickCountry.add(flxImgSecurityCode, flxArrowSecurityCode, rtxSecurityCode);
            flxSecurityCheckOptions.add(flxCountryCode, flxOr, flxPickCountry);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtnOnBoardingInactive",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSecurityCheckMain.add(flxSecurityCheckOptions, btnContinue);
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
            var flxShadowTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowTwo.setDefaultUnit(kony.flex.DP);
            flxShadowTwo.add();
            var flxKeypadRowOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "24.40%",
                "id": "flxKeypadRowOne",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxKeypadRowOne.setDefaultUnit(kony.flex.DP);
            var btnOne = new kony.ui.Button({
                "height": "100%",
                "id": "btnOne",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_i344da2ace4f4efc849cf050d6194439,
                "skin": "sknBtnKeybad",
                "text": "1",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnTwo = new kony.ui.Button({
                "centerX": "50%",
                "height": "100%",
                "id": "btnTwo",
                "isVisible": true,
                "onClick": controller.AS_Button_ce6039f3d25848b58ad94ab79e36e485,
                "skin": "sknBtnKeybad",
                "text": "2",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnThree = new kony.ui.Button({
                "height": "100%",
                "id": "btnThree",
                "isVisible": true,
                "onClick": controller.AS_Button_gee0aaaa5cd342f5bad22526e42dcb7b,
                "right": "0dp",
                "skin": "sknBtnKeybad",
                "text": "3",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeypadRowOne.add(btnOne, btnTwo, btnThree);
            var flxKeypadRowTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "24.60%",
                "id": "flxKeypadRowTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxKeypadRowTwo.setDefaultUnit(kony.flex.DP);
            var btnFour = new kony.ui.Button({
                "height": "100%",
                "id": "btnFour",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_ac5b796669e645ad8d3d3dce483eed8b,
                "skin": "sknBtnKeybad",
                "text": "4",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnFive = new kony.ui.Button({
                "centerX": "50%",
                "height": "100%",
                "id": "btnFive",
                "isVisible": true,
                "onClick": controller.AS_Button_fb89972d2aa74401a351e90020f4aa5d,
                "skin": "sknBtnKeybad",
                "text": "5",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSix = new kony.ui.Button({
                "height": "100%",
                "id": "btnSix",
                "isVisible": true,
                "onClick": controller.AS_Button_b1b1f08c9fb8486b8e14dde8a86dfe2c,
                "right": "0dp",
                "skin": "sknBtnKeybad",
                "text": "6",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeypadRowTwo.add(btnFour, btnFive, btnSix);
            var flxKeypadRowThree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "24.40%",
                "id": "flxKeypadRowThree",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxKeypadRowThree.setDefaultUnit(kony.flex.DP);
            var btnSeven = new kony.ui.Button({
                "height": "100%",
                "id": "btnSeven",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_ee454c8d4a744e25a39dc387d30d9fa7,
                "skin": "sknBtnKeybad",
                "text": "7",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnEight = new kony.ui.Button({
                "centerX": "50%",
                "height": "100%",
                "id": "btnEight",
                "isVisible": true,
                "onClick": controller.AS_Button_d554736f080d4fe7875cbe20fcc4707c,
                "skin": "sknBtnKeybad",
                "text": "8",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnNine = new kony.ui.Button({
                "height": "100%",
                "id": "btnNine",
                "isVisible": true,
                "onClick": controller.AS_Button_j919d3ded6db4f4f8fa89c1cfef4e8fc,
                "right": "0dp",
                "skin": "sknBtnKeybad",
                "text": "9",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeypadRowThree.add(btnSeven, btnEight, btnNine);
            var flxKeypadRowFour = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "24.40%",
                "id": "flxKeypadRowFour",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxKeypadRowFour.setDefaultUnit(kony.flex.DP);
            var btnZero = new kony.ui.Button({
                "centerX": "50%",
                "height": "100%",
                "id": "btnZero",
                "isVisible": true,
                "onClick": controller.AS_Button_b9d828499e9d4d5691e1088276efb760,
                "skin": "sknBtnKeybad",
                "text": "0",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgClearKeypad = new kony.ui.Image2({
                "centerY": "45%",
                "height": "40%",
                "id": "imgClearKeypad",
                "isVisible": true,
                "onTouchEnd": controller.AS_Image_dfd498acc1f04dd989c14a6f979212b9,
                "right": "0%",
                "skin": "slImage",
                "src": "cancelkeypad.png",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeypadRowFour.add(btnZero, imgClearKeypad);
            flxKeypad.add(flxShadowTwo, flxKeypadRowOne, flxKeypadRowTwo, flxKeypadRowThree, flxKeypadRowFour);
            this.add(flxHeader, flxSecurityCheckMain, flxKeypad);
        };
        return [{
            "addWidgets": addWidgetsfrmProfileCountryCode,
            "enabledForIdleTimeout": true,
            "id": "frmProfileCountryCode",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_c2a36d3fc53e47b6be96291a397866e3,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Profile.EnterCountryCode")
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
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});