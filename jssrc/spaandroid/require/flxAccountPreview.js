define("flxAccountPreview", function() {
    return function(controller) {
        var flxAccountPreview = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24%",
            "id": "flxAccountPreview",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "f9f9"
        }, {}, {});
        flxAccountPreview.setDefaultUnit(kony.flex.DP);
        var lblAccountName = new kony.ui.Label({
            "id": "lblAccountName",
            "isVisible": true,
            "left": "20%",
            "skin": "sknLbl72727SSPReg26px",
            "text": "Label",
            "top": "20%",
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
        var lblBankName = new kony.ui.Label({
            "id": "lblBankName",
            "isVisible": true,
            "left": "20%",
            "skin": "sknLbla0a0a0SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblAccountBalValue = new kony.ui.Label({
            "id": "lblAccountBalValue",
            "isVisible": true,
            "right": "6%",
            "skin": "sknLbl424242SSPReg26px",
            "text": "Label",
            "top": "20%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblAccountBal = new kony.ui.Label({
            "id": "lblAccountBal",
            "isVisible": true,
            "right": "6%",
            "skin": "sknLbla0a0a0SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var imgBank = new kony.ui.Image2({
            "centerY": "38%",
            "height": "20dp",
            "id": "imgBank",
            "isVisible": true,
            "left": "9%",
            "skin": "slImage",
            "src": "konylogo.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccountPreview.add(lblAccountName, lblBankName, lblAccountBalValue, lblAccountBal, imgBank);
        return flxAccountPreview;
    }
})