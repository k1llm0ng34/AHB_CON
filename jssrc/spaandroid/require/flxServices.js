define("flxServices", function() {
    return function(controller) {
        var flxServices = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxServices",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox"
        }, {}, {});
        flxServices.setDefaultUnit(kony.flex.DP);
        var lblBullet = new kony.ui.Label({
            "centerY": "50%",
            "height": "9dp",
            "id": "lblBullet",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLblcfcfcfOp100cfcfcf100Radius",
            "text": "Label",
            "textStyle": {},
            "width": "9dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblService = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblService",
            "isVisible": true,
            "left": "40dp",
            "skin": "sknLbl424242SSP93pr",
            "text": "ATM- 24 Hours",
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
        flxServices.add(lblBullet, lblService);
        return flxServices;
    }
})