define("frmError", function() {
    return function(controller) {
        function addWidgetsfrmError() {
            this.setDefaultUnit(kony.flex.DP);
            var imgError = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "40%",
                "id": "imgError",
                "isVisible": true,
                "skin": "slImage",
                "src": "interneterror.png",
                "width": "100dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblError",
                "isVisible": true,
                "skin": "sknLbl727272SSPLight36px",
                "text": kony.i18n.getLocalizedString("kony.mb.Error.Error"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnTryAgain = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn0095e434px",
                "height": "50dp",
                "id": "btnTryAgain",
                "isVisible": true,
                "skin": "sknBtn0095e434px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.TryAgain"),
                "top": "20dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(imgError, lblError, btnTryAgain);
        };
        return [{
            "addWidgets": addWidgetsfrmError,
            "enabledForIdleTimeout": true,
            "id": "frmError",
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "skin": "sknFrmf9f9f9"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
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