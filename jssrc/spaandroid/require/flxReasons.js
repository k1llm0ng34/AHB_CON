define("flxReasons", function() {
    return function(controller) {
        var flxReasons = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxReasons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxReasons.setDefaultUnit(kony.flex.DP);
        var lblReason = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblReason",
            "isVisible": true,
            "skin": "sknLbl424242SSP26px",
            "text": "Phone Number",
            "textStyle": {},
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
        flxReasons.add(lblReason);
        return flxReasons;
    }
})