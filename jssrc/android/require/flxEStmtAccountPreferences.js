define("flxEStmtAccountPreferences", function() {
    return function(controller) {
        var flxEStmtAccountPreferences = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxEStmtAccountPreferences",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknFlxffffff"
        }, {}, {});
        flxEStmtAccountPreferences.setDefaultUnit(kony.flex.DP);
        var lblAccountHolderName = new kony.ui.Label({
            "id": "lblAccountHolderName",
            "isVisible": true,
            "left": "60dp",
            "right": "40dp",
            "skin": "sknLbl72727SSPReg26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblBankName = new kony.ui.Label({
            "bottom": "8dp",
            "id": "lblBankName",
            "isVisible": true,
            "left": "60dp",
            "right": "40dp",
            "skin": "sknLbla0a0a0SSPReg22px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgBank = new kony.ui.Image2({
            "centerY": "50%",
            "height": "24dp",
            "id": "imgBank",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "bankofamerica.png",
            "width": "24dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var imgChevron = new kony.ui.Image2({
            "centerY": "50%",
            "height": "18dp",
            "id": "imgChevron",
            "isVisible": true,
            "right": "15dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEStmtAccountPreferences.add(lblAccountHolderName, lblBankName, imgBank, flxSeparator, imgChevron);
        return flxEStmtAccountPreferences;
    }
})