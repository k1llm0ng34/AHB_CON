define("AuthModule/frmExternalBankLogin", function() {
    return function(controller) {
        function addWidgetsfrmExternalBankLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
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
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.centerX = null;
            customHeader.lblLocateUs.i18n_text = "kony.i18n.getLocalizedString(\"kony.mb.externalBanks.BankLogin\")";
            flxHeader.add(flxSeparatorHeader, customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxBankLogo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "61dp",
                "id": "flxBankLogo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "38.91%",
                "skin": "CopyslFbox0c3861e286b9d4b",
                "top": "20dp",
                "width": "71dp",
                "zIndex": 1
            }, {}, {});
            flxBankLogo.setDefaultUnit(kony.flex.DP);
            var imgBankLogo = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "44dp",
                "id": "imgBankLogo",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBankLogo.add(imgBankLogo);
            var lblUseOnlineBankCred = new kony.ui.Label({
                "id": "lblUseOnlineBankCred",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknlabel424242Regular42px",
                "text": "Use Chase bank online banking credentials",
                "textStyle": {},
                "top": "100dp",
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
            var tbxUsername = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "tbxUsername",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "i18n_placeholder": "kony.i18n.getLocalizedString(\"kony.mb.login.username\")",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "125dp",
                "zIndex": 1
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
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "tbxPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "i18n_placeholder": "kony.i18n.getLocalizedString(\"kony.mb.login.password\")",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "180dp",
                "zIndex": 1
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
                "right": "31dp",
                "skin": "slFbox",
                "top": "180dp",
                "width": "33dp",
                "zIndex": 10
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
            var lblForgotPwd = new kony.ui.Label({
                "id": "lblForgotPwd",
                "isVisible": false,
                "left": "9.38%",
                "skin": "sknLbl0095e4SSPRegular26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.forgot\")",
                "textStyle": {},
                "top": "263dp",
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
            var btnLogIn = new kony.ui.Button({
                "focusSkin": "sknBtne9e9e9a0a0a0SSReg30px",
                "height": "40dp",
                "id": "btnLogIn",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtne9e9e9a0a0a0SSReg30px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.login.logIn\")",
                "top": "250dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(flxBankLogo, lblUseOnlineBankCred, tbxUsername, tbxPassword, flxPwdVisiblityToggle, lblForgotPwd, btnLogIn);
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
            "addWidgets": addWidgetsfrmExternalBankLogin,
            "bounces": false,
            "enabledForIdleTimeout": true,
            "id": "frmExternalBankLogin",
            "init": controller.AS_Form_jc7e5ad82fa74f4a980be49b1f0a8c49,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_aad6ac45914146578be6d3df56133443,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.ExternalBankLogin.Title\")"
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