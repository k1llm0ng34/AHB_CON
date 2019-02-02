define("flxMenu", function() {
    return function(controller) {
        var flxMenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMenu.setDefaultUnit(kony.flex.DP);
        var Image0e3768ee238504d = new kony.ui.Image2({
            "bottom": "0dp",
            "height": "5dp",
            "id": "Image0e3768ee238504d",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgMenu = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgMenu",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "group2.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblMenu = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblMenu",
            "isVisible": true,
            "left": "60dp",
            "skin": "sknLbl4a4a4a100pr",
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
        flxMenu.add(Image0e3768ee238504d, imgMenu, lblMenu);
        return flxMenu;
    }
})