define("flxCheckImages", function() {
    return function(controller) {
        var flxCheckImages = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "120dp",
            "id": "flxCheckImages",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCheckImages.setDefaultUnit(kony.flex.DP);
        var flxFrontImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxFrontImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "skin": "slFbox",
            "top": "10dp",
            "width": "43%",
            "zIndex": 1
        }, {}, {});
        flxFrontImg.setDefaultUnit(kony.flex.DP);
        var imgFront = new kony.ui.Image2({
            "height": "100%",
            "id": "imgFront",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "checksmall.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxFrontImg.add(imgFront);
        var lblFront = new kony.ui.Label({
            "id": "lblFront",
            "isVisible": true,
            "left": "86dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": kony.i18n.getLocalizedString("kony.mb.transaction.front"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "92dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 110
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxBackImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxBackImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "20dp",
            "skin": "slFbox",
            "top": "10dp",
            "width": "43%",
            "zIndex": 1
        }, {}, {});
        flxBackImg.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2({
            "height": "100%",
            "id": "imgBack",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "checksmall.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBackImg.add(imgBack);
        var lblBack = new kony.ui.Label({
            "id": "lblBack",
            "isVisible": true,
            "right": "88dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": kony.i18n.getLocalizedString("kony.mb.transaction.back"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "92dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 110
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCheckImages.add(flxFrontImg, lblFront, flxBackImg, lblBack);
        return flxCheckImages;
    }
})