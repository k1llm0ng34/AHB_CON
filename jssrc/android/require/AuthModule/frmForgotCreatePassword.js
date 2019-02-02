define("AuthModule/frmForgotCreatePassword", function() {
    return function(controller) {
        function addWidgetsfrmForgotCreatePassword() {
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
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
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
            customHeader.btnRight.text = "CANCEL";
            customHeader.btnRight.onClick = controller.AS_Button_j4fd09b548f54d51bb0108e43eae39be;
            customHeader.flxBack.isVisible = false;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Forgot Credentials";
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
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
            var lblCreateNewPassword = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCreateNewPassword",
                "isVisible": true,
                "skin": "sknLbl424242SSPLight30px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.CreateNewPassword"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblNewPassword = new kony.ui.Label({
                "id": "lblNewPassword",
                "isVisible": true,
                "left": "9%",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.NewPassword"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxPassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxPassword.setDefaultUnit(kony.flex.DP);
            var imgMaskUnmask = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgMaskUnmask",
                "isVisible": true,
                "right": "30dp",
                "skin": "slImage",
                "src": "viewicon.png",
                "width": "25dp",
                "zIndex": 7
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtNewPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "txtNewPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "onDone": controller.AS_TextField_h92f876e33dc472c84606d4ccab08810,
                "onTextChange": controller.AS_TextField_be5b39c964454eaca8783939d9d794a9,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterNewPassword"),
                "secureTextEntry": true,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "87.50%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxPassword.add(imgMaskUnmask, txtNewPassword);
            var flxSecurityRequirements = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0dp",
                "id": "flxSecurityRequirements",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "89%",
                "zIndex": 100
            }, {}, {});
            flxSecurityRequirements.setDefaultUnit(kony.flex.DP);
            var lblSecurityRequirements = new kony.ui.Label({
                "id": "lblSecurityRequirements",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.title"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxRule1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxRule1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRule1.setDefaultUnit(kony.flex.DP);
            var flxDot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "skin": "sknFlxFD3F2FCircle",
                "top": "14dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxDot.setDefaultUnit(kony.flex.DP);
            flxDot.add();
            var lblRule1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRule1",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.charLimitNote"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRule1.add(flxDot, lblRule1);
            var flxRule2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxRule2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRule2.setDefaultUnit(kony.flex.DP);
            var flxDot1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDot1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "skin": "sknFlxFD3F2FCircle",
                "top": "14dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxDot1.setDefaultUnit(kony.flex.DP);
            flxDot1.add();
            var lblRule2 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRule2",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.containNoNote"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "96%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRule2.add(flxDot1, lblRule2);
            var flxRule3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxRule3",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRule3.setDefaultUnit(kony.flex.DP);
            var flxDot2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDot2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "skin": "sknFlxFD3F2FCircle",
                "top": "14dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxDot2.setDefaultUnit(kony.flex.DP);
            flxDot2.add();
            var lblRule3 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRule3",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.upercaseLetterNote"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRule3.add(flxDot2, lblRule3);
            var flxRule4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxRule4",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRule4.setDefaultUnit(kony.flex.DP);
            var flxDot3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDot3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "skin": "sknFlxFD3F2FCircle",
                "top": "14dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxDot3.setDefaultUnit(kony.flex.DP);
            flxDot3.add();
            var lblRule4 = new kony.ui.Label({
                "centerY": "47.47%",
                "id": "lblRule4",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.invalidChar"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRule4.add(flxDot3, lblRule4);
            flxSecurityRequirements.add(lblSecurityRequirements, flxRule1, flxRule2, flxRule3, flxRule4);
            var lblReEnterNewPassword = new kony.ui.Label({
                "id": "lblReEnterNewPassword",
                "isVisible": true,
                "left": "9%",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.ReEnterNewPassword"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxReenterPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxReenterPassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxReenterPassword.setDefaultUnit(kony.flex.DP);
            var txtReEnterPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "txtReEnterPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "onTextChange": controller.AS_TextField_gd229cc9523646dfabe2362260bcc975,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.Forgot.ReEnterNewPassword"),
                "secureTextEntry": true,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "87.50%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgPasswordsMatch = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgPasswordsMatch",
                "isVisible": true,
                "right": "10%",
                "skin": "slImage",
                "src": "tickmark.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReenterPassword.add(txtReEnterPassword, imgPasswordsMatch);
            var btnUpdatePassword = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn0095e426pxEnabled",
                "height": "40dp",
                "id": "btnUpdatePassword",
                "isVisible": true,
                "onClick": controller.AS_Button_ce03fcc04c4d4378a355dcbaa4497ee0,
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.UpdatePassword"),
                "top": "30dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(lblCreateNewPassword, lblNewPassword, flxPassword, flxSecurityRequirements, lblReEnterNewPassword, flxReenterPassword, btnUpdatePassword);
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
            this.add(flxHeader, flxMainContainer, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmForgotCreatePassword,
            "enabledForIdleTimeout": true,
            "id": "frmForgotCreatePassword",
            "init": controller.AS_Form_c2cf6abb111947c08cea3c53589f48c4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_bf368211a1ed42dda4007a81fa285b1f,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.ForgotCredentials.Title")
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