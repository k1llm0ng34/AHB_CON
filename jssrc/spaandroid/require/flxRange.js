define("flxRange", function() {
    return function(controller) {
        var flxRange = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "slFbox",
            "height": "40dp",
            "id": "flxRange",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox"
        }, {}, {});
        flxRange.setDefaultUnit(kony.flex.DP);
        var lblRange = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblRange",
            "isVisible": true,
            "left": "3.13%",
            "skin": "sknlbl727272SSP93pr",
            "text": "5 Miles",
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
        var flxCheckbox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCheckbox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_cf0c033c4c5d4b48a02b61b557931ccc,
            "right": "3.13%",
            "skin": "slFbox",
            "top": "0%",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flxCheckbox.setDefaultUnit(kony.flex.DP);
        var imgCheckbox = new kony.ui.Image2({
            "centerY": "50%",
            "height": "13dp",
            "id": "imgCheckbox",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "radiobuttoninactive.png",
            "width": "13dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCheckbox.add(imgCheckbox);
        var lblSeparator = new kony.ui.Label({
            "bottom": "0%",
            "height": "1dp",
            "id": "lblSeparator",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLble4e4e4Op100",
            "text": "5 Miles",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxRange.add(lblRange, flxCheckbox, lblSeparator);
        return flxRange;
    }
})