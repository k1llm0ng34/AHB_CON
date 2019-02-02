define("flxLocation", function() {
    return function(controller) {
        var flxLocation = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxLocation",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM
        }, {}, {});
        flxLocation.setDefaultUnit(kony.flex.DP);
        var flxBankImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30%",
            "id": "flxBankImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6.25%",
            "top": "20%",
            "width": "8%",
            "zIndex": 1
        }, {}, {});
        flxBankImage.setDefaultUnit(kony.flex.DP);
        var imgBank = new kony.ui.Image2({
            "height": "18dp",
            "id": "imgBank",
            "isVisible": true,
            "left": "0%",
            "src": "group.png",
            "top": "0px",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBankImage.add(imgBank);
        var lblName = new kony.ui.Label({
            "height": "18dp",
            "id": "lblName",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP93pr",
            "text": "Branch Name",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAddress = new kony.ui.Label({
            "height": "15dp",
            "id": "lblAddress",
            "isVisible": true,
            "left": "15%",
            "skin": "sknlbl727272SSPSSP79pr",
            "text": "504, Market street, Austin",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "40%",
            "width": "55%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxDistance = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "15%",
            "clipBounds": true,
            "id": "flxDistance",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0%",
            "top": "15%",
            "width": "28%",
            "zIndex": 1
        }, {}, {});
        flxDistance.setDefaultUnit(kony.flex.DP);
        var lblDistance = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDistance",
            "isVisible": false,
            "left": "15%",
            "skin": "sknLbl424242SSP79pr",
            "text": "2.2 Miles",
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
        var flxGetDirections = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxGetDirections",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0%",
            "skin": "slFbox",
            "top": "0%",
            "width": "40%",
            "zIndex": 1
        }, {}, {});
        flxGetDirections.setDefaultUnit(kony.flex.DP);
        var imgGetDirections = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "11dp",
            "id": "imgGetDirections",
            "isVisible": true,
            "src": "segmentarrow.png",
            "width": "11dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxGetDirections.add(imgGetDirections);
        flxDistance.add(lblDistance, flxGetDirections);
        var lblSatus = new kony.ui.Label({
            "id": "lblSatus",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl5daf0bSSP79pr",
            "text": "OPEN",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "70%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSeparator = new kony.ui.Label({
            "bottom": "0%",
            "height": "1dp",
            "id": "lblSeparator",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblf1f1f1Op100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxLocation.add(flxBankImage, lblName, lblAddress, flxDistance, lblSatus, lblSeparator);
        return flxLocation;
    }
})