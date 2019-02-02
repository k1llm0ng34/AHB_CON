define("flxFrequency", function() {
    return function(controller) {
        var flxFrequency = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxf9f9f9",
            "height": "50dp",
            "id": "flxFrequency",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFrequency.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblFrequency = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblFrequency",
            "isVisible": true,
            "skin": "sknLbl424242SSP26px",
            "text": "Every Two Weeks",
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
        flxMain.add(lblFrequency);
        flxFrequency.add(flxMain);
        return flxFrequency;
    }
})