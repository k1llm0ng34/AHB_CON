define("CardLessModule/frmCardLessCWCode", function() {
    return function(controller) {
        function addWidgetsfrmCardLessCWCode() {
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
            customHeader.flxBack.isVisible = true;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardLess.cashWithdrawalCodeCaps");
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxToastDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxToastDummy",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToastDummy.setDefaultUnit(kony.flex.DP);
            flxToastDummy.add();
            var lblCashWithdrawalCode = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCashWithdrawalCode",
                "isVisible": true,
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.cashWithdrawalCode"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCashWithdrawalCodeVal = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCashWithdrawalCodeVal",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg60px",
                "text": "09889809",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblExpiresIn = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblExpiresIn",
                "isVisible": true,
                "skin": "sknLblF54C5FSSPReg25px",
                "text": "Expires in: 21h:22m",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxShareWithdrawCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxShareWithdrawCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShareWithdrawCode.setDefaultUnit(kony.flex.DP);
            var lblShareWithdrawCode = new kony.ui.Label({
                "centerX": "35%",
                "centerY": "50%",
                "id": "lblShareWithdrawCode",
                "isVisible": true,
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.shareWithdrawalCode"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxMail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "45dp",
                "zIndex": 1
            }, {}, {});
            flxMail.setDefaultUnit(kony.flex.DP);
            var imgMail = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "38dp",
                "id": "imgMail",
                "isVisible": true,
                "skin": "slImage",
                "src": "mail.png",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMail.add(imgMail);
            var flxMsg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMsg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "45dp",
                "zIndex": 1
            }, {}, {});
            flxMsg.setDefaultUnit(kony.flex.DP);
            var imgMsg = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "38dp",
                "id": "imgMsg",
                "isVisible": true,
                "skin": "slImage",
                "src": "messageicon.png",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMsg.add(imgMsg);
            flxShareWithdrawCode.add(lblShareWithdrawCode, flxMail, flxMsg);
            var btnViewTransactionDetails = new kony.ui.Button({
                "bottom": "90dp",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e426px",
                "height": "40dp",
                "id": "btnViewTransactionDetails",
                "isVisible": true,
                "skin": "sknBtn0095e426px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.viewTransactionDetails"),
                "top": "30dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxBottomButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBottomButtons",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBottomButtons.setDefaultUnit(kony.flex.DP);
            var btnSeeWithdrawCash = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn0095e426px",
                "height": "40dp",
                "id": "btnSeeWithdrawCash",
                "isVisible": true,
                "skin": "sknBtn0095e426px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.seeWithdrawCash"),
                "top": "0dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            var btnFindNearByAtm = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn0095e426px",
                "height": "40dp",
                "id": "btnFindNearByAtm",
                "isVisible": true,
                "skin": "sknBtn0095e426px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.findNearATM"),
                "top": "0dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            flxBottomButtons.add(btnSeeWithdrawCash, flxSeperator1, btnFindNearByAtm, flxSeperator2);
            flxMainContainer.add(flxToastDummy, lblCashWithdrawalCode, lblCashWithdrawalCodeVal, lblExpiresIn, flxShareWithdrawCode, btnViewTransactionDetails, flxBottomButtons);
            var btnDone = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnDone",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.done"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
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
            this.add(flxHeader, flxMainContainer, btnDone, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmCardLessCWCode,
            "enabledForIdleTimeout": true,
            "id": "frmCardLessCWCode",
            "init": controller.AS_Form_b3520b03fbed46bf8352f0974541b81c,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_j22833ee2abf4b1ca929dff01893dd8b,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.cardLess.cashWithdrawalCodeCaps")
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