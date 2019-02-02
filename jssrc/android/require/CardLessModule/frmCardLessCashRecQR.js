define("CardLessModule/frmCardLessCashRecQR", function() {
    return function(controller) {
        function addWidgetsfrmCardLessCashRecQR() {
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
            customHeader.lblLocateUs.text = "Cash Recipient";
            flxHeader.add(customHeader);
            var flxCashRecipient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxCashRecipient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCashRecipient.setDefaultUnit(kony.flex.DP);
            var flxQuestion = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxQuestion",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxQuestion.setDefaultUnit(kony.flex.DP);
            var lblQuestion = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblQuestion",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.cashRecQues"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxQuestion.add(lblQuestion);
            var btnICollect = new kony.ui.Button({
                "focusSkin": "sknBtnffffff424242SSP26px",
                "height": "40dp",
                "id": "btnICollect",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnffffff424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.iCollectCash"),
                "top": "60dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSomeoneCollect = new kony.ui.Button({
                "focusSkin": "sknBtnffffff424242SSP26px",
                "height": "40dp",
                "id": "btnSomeoneCollect",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnffffff424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.someoneCollectCash"),
                "top": "105dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCashRecipient.add(flxQuestion, btnICollect, btnSomeoneCollect);
            this.add(flxHeader, flxCashRecipient);
        };
        return [{
            "addWidgets": addWidgetsfrmCardLessCashRecQR,
            "enabledForIdleTimeout": true,
            "id": "frmCardLessCashRecQR",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_h4f85ce95e624693af656cd0a84481e2,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.cardLess.cashRecipient")
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