define(function() {
    return function(controller) {
        var MainHeaderCopy2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "4%",
            "id": "MainHeaderCopy2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "2.02%",
            "width": "100%"
        }, {}, {});
        MainHeaderCopy2.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2({
            "height": "100%",
            "id": "imgBack",
            "isVisible": true,
            "left": "4.30%",
            "skin": "slImage",
            "src": "backblack_3.png",
            "top": "0dp",
            "width": "4%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblHeading = new kony.ui.Label({
            "centerX": "50%",
            "height": "100%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopysknLblAHBGSC4",
            "text": kony.i18n.getLocalizedString("kony.ahb.Registration.RegistrationHeading"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        MainHeaderCopy2.add(imgBack, lblHeading);
        return MainHeaderCopy2;
    }
})