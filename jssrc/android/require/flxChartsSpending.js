define("flxChartsSpending", function() {
    return function(controller) {
        var flxChartsSpending = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "42dp",
            "id": "flxChartsSpending",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxChartsSpending.setDefaultUnit(kony.flex.DP);
        var lblSpending = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblSpending",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLblffffffSSP129Pr",
            "text": "Rent - 45%",
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
        var lblAmountSpent = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblAmountSpent",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLblffffffSSP129Pr",
            "text": "$134.00",
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
        var flxSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknflxb8dcff",
            "zIndex": 1
        }, {}, {});
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        flxChartsSpending.add(lblSpending, lblAmountSpent, flxSeperator);
        return flxChartsSpending;
    }
})