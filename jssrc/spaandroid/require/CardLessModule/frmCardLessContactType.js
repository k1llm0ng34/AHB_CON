define("CardLessModule/frmCardLessContactType", function() {
    return function(controller) {
        function addWidgetsfrmCardLessContactType() {
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
                "zIndex": 4
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
            customHeader.btnRight.isVisible = true;
            customHeader.btnRight.text = "CANCEL";
            customHeader.height = "100%";
            customHeader.zIndex = 1;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Cash Recipient";
            flxHeader.add(customHeader);
            var flxContactType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxContactType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContactType.setDefaultUnit(kony.flex.DP);
            var flxSelectMethod = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxSelectMethod",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectMethod.setDefaultUnit(kony.flex.DP);
            var lblSelectMethod = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSelectMethod",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.cardLess.selectContactMethod\")",
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
            flxSelectMethod.add(lblSelectMethod);
            var btnPhoneNumber = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnffffff424242SSP26px",
                "height": "40dp",
                "id": "btnPhoneNumber",
                "isVisible": true,
                "skin": "sknBtnffffff424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.phoneNo\")",
                "top": "10dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnEmail = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnffffff424242SSP26px",
                "height": "40dp",
                "id": "btnEmail",
                "isVisible": true,
                "skin": "sknBtnffffff424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.devReg.emailId\")",
                "top": "0dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxContactType.add(flxSelectMethod, btnPhoneNumber, btnEmail);
            this.add(flxHeader, flxContactType);
        };
        return [{
            "addWidgets": addWidgetsfrmCardLessContactType,
            "enabledForIdleTimeout": true,
            "id": "frmCardLessContactType",
            "init": controller.AS_Form_ea34e4399b2d40d8bece16a5cf8f3449,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_ae488ece5bb9459bb0b6577ace9d47d3,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.cardLess.cashRecipient\")"
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