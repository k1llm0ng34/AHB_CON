define("flxSelectCategory", function() {
    return function(controller) {
        var flxSelectCategory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSelectCategory",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSelectCategory.setDefaultUnit(kony.flex.DP);
        var flxArrow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxArrow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 25,
            "right": "25dp",
            "skin": "sknflxf1f1f1Rounded",
            "top": "0dp",
            "zIndex": 1
        }, {}, {});
        flxArrow.setDefaultUnit(kony.flex.DP);
        var lblCategory = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblCategory",
            "isVisible": true,
            "skin": "sknLbl424242SSPReg30px",
            "text": "Education",
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
            "height": "12dp",
            "id": "imgArrow",
            "isVisible": true,
            "right": "15dp",
            "skin": "slImage",
            "src": "tick.png",
            "width": "12dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxArrow.add(lblCategory, imgArrow);
        flxSelectCategory.add(flxArrow);
        return flxSelectCategory;
    }
})