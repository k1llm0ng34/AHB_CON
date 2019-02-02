define("flxPFMBudget", function() {
    return function(controller) {
        var flxPFMBudget = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxPFMBudget",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxPFMBudget.setDefaultUnit(kony.flex.DP);
        var imgBudgetType = new kony.ui.Image2({
            "centerY": "50%",
            "height": "26dp",
            "id": "imgBudgetType",
            "isVisible": true,
            "left": "15dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "26dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblBudgetName = new kony.ui.Label({
            "id": "lblBudgetName",
            "isVisible": true,
            "left": "52dp",
            "skin": "sknLbl424242SSP22px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblBudgetAmount = new kony.ui.Label({
            "centerY": "31dp",
            "id": "lblBudgetAmount",
            "isVisible": true,
            "right": "15dp",
            "skin": "sknLbl424242SSP22px",
            "text": "$134.00",
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
        var flxProgressBar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7dp",
            "id": "flxProgressBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "52dp",
            "right": "80dp",
            "skin": "slFbox",
            "top": "28dp",
            "zIndex": 1
        }, {}, {});
        flxProgressBar.setDefaultUnit(kony.flex.DP);
        var flxTarget = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTarget",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknflxe0e0e0Radius20px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTarget.setDefaultUnit(kony.flex.DP);
        flxTarget.add();
        var flxSpent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSpent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknflx5caf00Radius20px",
            "top": "0dp",
            "width": "60%",
            "zIndex": 2
        }, {}, {});
        flxSpent.setDefaultUnit(kony.flex.DP);
        flxSpent.add();
        var flxExceeded = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxExceeded",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "right": 0,
            "skin": "sknflxfd031fRadius20px",
            "top": "0dp",
            "width": "40%",
            "zIndex": 2
        }, {}, {});
        flxExceeded.setDefaultUnit(kony.flex.DP);
        flxExceeded.add();
        flxProgressBar.add(flxTarget, flxSpent, flxExceeded);
        flxPFMBudget.add(imgBudgetType, lblBudgetName, lblBudgetAmount, flxProgressBar);
        return flxPFMBudget;
    }
})