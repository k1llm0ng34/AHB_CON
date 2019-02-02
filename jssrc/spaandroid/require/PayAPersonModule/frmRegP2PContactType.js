define("PayAPersonModule/frmRegP2PContactType", function() {
    return function(controller) {
        function addWidgetsfrmRegP2PContactType() {
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
            customHeader.btnRight.isVisible = true;
            customHeader.btnRight.text = "CANCEL";
            customHeader.height = "100%";
            customHeader.zIndex = 1;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Select Contact Type";
            flxHeader.add(customHeader);
            var btnPhoneNumber = new kony.ui.Button({
                "focusSkin": "sknBtnffffff424242SSP26px",
                "height": "40dp",
                "id": "btnPhoneNumber",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnffffff424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.phoneNo\")",
                "top": "60dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnEmail = new kony.ui.Button({
                "focusSkin": "sknBtnffffff424242SSP26px",
                "height": "40dp",
                "id": "btnEmail",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnffffff424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.devReg.emailId\")",
                "top": "120dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(flxHeader, btnPhoneNumber, btnEmail);
        };
        return [{
            "addWidgets": addWidgetsfrmRegP2PContactType,
            "enabledForIdleTimeout": true,
            "id": "frmRegP2PContactType",
            "init": controller.AS_Form_b8ee8ec2c94546b4ba4fa7c9a5c8954b,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_b62fc4d077f6447d922e88fa503c2163,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.p2p.selectContactType\")"
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