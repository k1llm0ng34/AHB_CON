define("flxAccountInfo", function() {
    return function(controller) {
        var flxAccountInfo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "120dp",
            "id": "flxAccountInfo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAccountInfo.setDefaultUnit(kony.flex.DP);
        var lblAccountNumber = new kony.ui.Label({
            "id": "lblAccountNumber",
            "isVisible": true,
            "left": "6.25%",
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountNumber"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAccountNumberValue = new kony.ui.Label({
            "id": "lblAccountNumberValue",
            "isVisible": true,
            "left": "6.25%",
            "skin": "sknLbl424242SSP26px",
            "text": "2137-2210-3423-9098",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "87%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAccType = new kony.ui.Label({
            "id": "lblAccType",
            "isVisible": true,
            "left": "6.25%",
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountType"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAccountTypeValue = new kony.ui.Label({
            "id": "lblAccountTypeValue",
            "isVisible": true,
            "left": "6.25%",
            "skin": "sknLbl424242SSP26px",
            "text": "Checking Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "87%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgCheckBox = new kony.ui.Image2({
            "centerY": "-40%",
            "height": "20dp",
            "id": "imgCheckBox",
            "isVisible": true,
            "right": "6.60%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccountInfo.add(lblAccountNumber, lblAccountNumberValue, lblAccType, lblAccountTypeValue, imgCheckBox);
        return flxAccountInfo;
    }
})