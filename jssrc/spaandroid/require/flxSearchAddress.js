define("flxSearchAddress", function() {
    return function(controller) {
        var flxSearchAddress = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSearchAddress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSearchAddress.setDefaultUnit(kony.flex.DP);
        var lblAddress = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblAddress",
            "isVisible": true,
            "left": "6%",
            "right": "6dp",
            "skin": "sknLbl72727SSPReg26px",
            "text": "2211 Oberlin Avenur, Orlando, FL, United States",
            "textStyle": {},
            "top": "10dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6%",
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxSearchAddress.add(lblAddress, flxSeparator);
        return flxSearchAddress;
    }
})