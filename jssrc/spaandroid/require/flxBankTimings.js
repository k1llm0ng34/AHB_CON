define("flxBankTimings", function() {
    return function(controller) {
        var flxBankTimings = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "17dp",
            "id": "flxBankTimings",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "sknFlxf9f9f9",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBankTimings.setDefaultUnit(kony.flex.DP);
        var lblTimingTitle = new kony.ui.Label({
            "id": "lblTimingTitle",
            "isVisible": true,
            "left": "6.25%",
            "skin": "sknLbl767676SSP26px",
            "text": "Saturday:",
            "top": "0dp",
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblTimingValue = new kony.ui.Label({
            "id": "lblTimingValue",
            "isVisible": true,
            "left": "6.25%",
            "skin": "sknLbl424242SSP26px",
            "text": "Bank Timings",
            "top": "0dp",
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
        var lblTimeZone = new kony.ui.Label({
            "id": "lblTimeZone",
            "isVisible": true,
            "left": "3dp",
            "skin": "sknLbl767676SSP26px",
            "text": "Bank Timings",
            "top": "0dp",
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
        flxBankTimings.add(lblTimingTitle, lblTimingValue, lblTimeZone);
        return flxBankTimings;
    }
})