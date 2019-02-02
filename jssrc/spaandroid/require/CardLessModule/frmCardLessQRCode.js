define("CardLessModule/frmCardLessQRCode", function() {
    return function(controller) {
        function addWidgetsfrmCardLessQRCode() {
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
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            customHeader.btnRight.isVisible = false;
            customHeader.btnRight.text = "CANCEL";
            customHeader.height = "100%";
            customHeader.zIndex = 1;
            customHeader.flxBack.isVisible = false;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Cash Withdrawal Code";
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxToastDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "65dp",
                "id": "flxToastDummy",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "top": "0dp",
                "width": "80dp",
                "zIndex": 1
            }, {}, {});
            flxToastDummy.setDefaultUnit(kony.flex.DP);
            flxToastDummy.add();
            var lblQRCodeMsg = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblQRCodeMsg",
                "isVisible": true,
                "skin": "sknLbl727272SSPReg22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.cardLess.QRmsg\")",
                "textStyle": {},
                "top": "35dp",
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
            var flxQRCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "80dp",
                "id": "flxQRCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "top": "20dp",
                "width": "80dp",
                "zIndex": 1
            }, {}, {});
            flxQRCode.setDefaultUnit(kony.flex.DP);
            var imgQRCode = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60dp",
                "id": "imgQRCode",
                "isVisible": true,
                "skin": "slImage",
                "src": "cashwithdrawqr.png",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxQRCode.add(imgQRCode);
            var lblExpiresIn = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblExpiresIn",
                "isVisible": true,
                "skin": "sknLblF54C5FSSPReg25px",
                "text": "Expires in: 21h:22m",
                "textStyle": {},
                "top": "2dp",
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
            var btnViewTransactionDetails = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn0095e426px",
                "height": "40dp",
                "id": "btnViewTransactionDetails",
                "isVisible": true,
                "skin": "sknBtn0095e426px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.cardLess.viewTransactionDetails\")",
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
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.cardLess.seeWithdrawCash\")",
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
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.cardLess.findNearATM\")",
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
            flxMainContainer.add(flxToastDummy, lblQRCodeMsg, flxQRCode, lblExpiresIn, btnViewTransactionDetails, flxBottomButtons);
            var btnDone = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnDone",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.done\")",
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
            "addWidgets": addWidgetsfrmCardLessQRCode,
            "enabledForIdleTimeout": true,
            "id": "frmCardLessQRCode",
            "init": controller.AS_Form_f0ea4d8233f047cc8fcda1c4b2da663f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_da14f0e773f84440b327d054950e6c2c,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.cardLess.cashWithdrawalCodeCaps\")"
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