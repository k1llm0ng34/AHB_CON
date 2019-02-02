define("SettingsModule/frmProfileEnterPhoneNumber", function() {
    return function(controller) {
        function addWidgetsfrmProfileEnterPhoneNumber() {
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
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
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
            customHeader.btnRight.text = "CANCEL";
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Enter Phone Number";
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var tbxPhoneNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "tbxPhoneNumber",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "i18n_placeholder": "kony.i18n.getLocalizedString(\"kony.mb.p2p.enterPhoneNo\")",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "35dp",
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
            var flxPrimary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxPrimary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "139dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxPrimary.setDefaultUnit(kony.flex.DP);
            var flxCheckboxPrimary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCheckboxPrimary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "17%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxCheckboxPrimary.setDefaultUnit(kony.flex.DP);
            var imgCheckboxPrimary = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgCheckboxPrimary",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "checkbox.png",
                "top": "3dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckboxPrimary.add(imgCheckboxPrimary);
            var lblPrimary = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblPrimary",
                "isVisible": true,
                "skin": "sknLbl424242SSP22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.ProfileEditPhoneNumberMain.Primary\")",
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
            flxPrimary.add(flxCheckboxPrimary, lblPrimary);
            var btnUpdateChanges = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnUpdateChanges",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Profile.UpdateChanges\")",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAmountWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxAmountWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknflxffffffBorderf1f1f13px",
                "top": "25dp",
                "zIndex": 1
            }, {}, {});
            flxAmountWrapper.setDefaultUnit(kony.flex.DP);
            var lblAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmount",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "textStyle": {},
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
            flxAmountWrapper.add(lblAmount);
            flxMainContainer.add(tbxPhoneNumber, flxPrimary, btnUpdateChanges, flxAmountWrapper);
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
            keypad.btnEight.onClick = controller.AS_Button_e91678f1e43a41e2bfe58a001515bd8f;
            keypad.btnFive.onClick = controller.AS_Button_j9d911d95ad342f18cd3ef7584890f81;
            keypad.btnFour.onClick = controller.AS_Button_acb704c8e0e446348baace83f281b28c;
            keypad.btnNine.onClick = controller.AS_Button_e5d6e53b58a74342bd244381a3945e3c;
            keypad.btnOne.onClick = controller.AS_Button_dbc67333e66f45d89c3049ac85e98f97;
            keypad.btnSeven.onClick = controller.AS_Button_e3de559a67e94091bf39b6ca95034ed4;
            keypad.btnSix.onClick = controller.AS_Button_e072961820894efcb500f617a9b10830;
            keypad.btnThree.onClick = controller.AS_Button_c1eaab752ed349a1a78506cfd14a2f86;
            keypad.btnTwo.onClick = controller.AS_Button_d39dcb857a864c7985698776a7804f71;
            keypad.btnZero.onClick = controller.AS_Button_gd47a2c8bacd4e809f9c289a7d560d69;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_abf10fcff57f4c6da212d36355e3d3f2;
            flxKeypad.add(keypad);
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
            this.add(flxHeader, flxMainContainer, flxKeypad, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmProfileEnterPhoneNumber,
            "enabledForIdleTimeout": true,
            "id": "frmProfileEnterPhoneNumber",
            "init": controller.AS_Form_f2a68c29811d4ff8bcc463659b1196f2,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_ed9e6a03e3294d08ac23ae701fa0e536,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.p2p.enterPhoneNo\")"
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