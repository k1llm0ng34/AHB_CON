define("flxBalanceUpdateTime", function() {
    return function(controller) {
        var flxBalanceUpdateTime = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxBalanceUpdateTime",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "f9f9"
        }, {}, {});
        flxBalanceUpdateTime.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxBalanceUpdateTime.add(lblTitle);
        return flxBalanceUpdateTime;
    }
})