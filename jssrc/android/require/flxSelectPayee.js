define("flxSelectPayee", function() {
    return function(controller) {
        var flxSelectPayee = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSelectPayee",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "f9f9"
        }, {}, {});
        flxSelectPayee.setDefaultUnit(kony.flex.DP);
        var lblPayeeName = new kony.ui.Label({
            "id": "lblPayeeName",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl72727SSPReg26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
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
        var flxInfo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "100%",
            "id": "flxInfo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "5dp",
            "skin": "slFbox",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxInfo.setDefaultUnit(kony.flex.DP);
        flxInfo.add();
        var flxRowAction = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "100%",
            "id": "flxRowAction",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "width": "85%",
            "zIndex": 1
        }, {}, {});
        flxRowAction.setDefaultUnit(kony.flex.DP);
        flxRowAction.add();
        var imgInfo = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgInfo",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "info.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxebill = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "8dp",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxebill",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "skin": "slFbox",
            "width": "60%",
            "zIndex": 1
        }, {}, {});
        flxebill.setDefaultUnit(kony.flex.DP);
        var imgebill = new kony.ui.Image2({
            "bottom": "2dp",
            "height": "10dp",
            "id": "imgebill",
            "isVisible": false,
            "left": "0dp",
            "right": "8dp",
            "skin": "slImage",
            "src": "ebill.png",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblPayeeInfo = new kony.ui.Label({
            "bottom": "0dp",
            "id": "lblPayeeInfo",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a0SSPReg22px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxebill.add(imgebill, lblPayeeInfo);
        flxSelectPayee.add(lblPayeeName, flxSeparator, flxInfo, flxRowAction, imgInfo, flxebill);
        return flxSelectPayee;
    }
})