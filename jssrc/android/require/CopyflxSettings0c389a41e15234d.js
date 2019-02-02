define("CopyflxSettings0c389a41e15234d", function() {
    return function(controller) {
        var CopyflxSettings0c389a41e15234d = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "CopyflxSettings0c389a41e15234d",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "f9f9"
        }, {}, {});
        CopyflxSettings0c389a41e15234d.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerY": "28%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
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
        var lblSubTitle = new kony.ui.Label({
            "centerY": "68%",
            "id": "lblSubTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLblalertA0A0A0",
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
        var lblAlertStatus = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblAlertStatus",
            "isVisible": true,
            "right": 40,
            "skin": "sknLblalertA0A0A0",
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
        var imgArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "10dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxShadowOne = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxShadowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxShadowOne.setDefaultUnit(kony.flex.DP);
        flxShadowOne.add();
        CopyflxSettings0c389a41e15234d.add(lblTitle, lblSubTitle, lblAlertStatus, imgArrow, flxShadowOne);
        return CopyflxSettings0c389a41e15234d;
    }
})