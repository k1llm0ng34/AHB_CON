define("flxPFMSpending", function() {
    return function(controller) {
        var flxPFMSpending = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxPFMSpending",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxPFMSpending.setDefaultUnit(kony.flex.DP);
        var flxColor = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "9dp",
            "id": "flxColor",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15dp",
            "skin": "sknflxfb497cRounded",
            "top": "7dp",
            "width": "9dp",
            "zIndex": 1
        }, {}, {});
        flxColor.setDefaultUnit(kony.flex.DP);
        flxColor.add();
        var lblSpending = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblSpending",
            "isVisible": true,
            "left": "47dp",
            "skin": "sknLbl4a4a4a22px",
            "text": "Rent - 45%",
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
        var lblAmountSpent = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblAmountSpent",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl4a4a4a22px",
            "text": "$134.00",
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
        var flxSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        flxPFMSpending.add(flxColor, lblSpending, lblAmountSpent, flxSeperator);
        return flxPFMSpending;
    }
})