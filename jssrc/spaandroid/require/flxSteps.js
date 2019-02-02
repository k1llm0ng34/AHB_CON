define("flxSteps", function() {
    return function(controller) {
        var flxSteps = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxSteps",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSteps.setDefaultUnit(kony.flex.DP);
        var flxNumber = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxNumber",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15dp",
            "skin": "slFbox",
            "top": "10dp",
            "width": "35dp",
            "zIndex": 1
        }, {}, {});
        flxNumber.setDefaultUnit(kony.flex.DP);
        var lblNumber = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "24dp",
            "id": "lblNumber",
            "isVisible": true,
            "skin": "sknlble3e3e3Border100px",
            "text": "1",
            "textStyle": {},
            "width": "24dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var imgDone = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "imgDone",
            "isVisible": false,
            "left": "0dp",
            "skin": "slImage",
            "src": "greentick.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxNumber.add(lblNumber, imgDone);
        var flxStepsSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxStepsSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxStepsSeperator.setDefaultUnit(kony.flex.DP);
        flxStepsSeperator.add();
        var lblStepName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblStepName",
            "isVisible": true,
            "left": "60dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Product Selection",
            "textStyle": {},
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
        var imgGo = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgGo",
            "isVisible": true,
            "right": 20,
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSteps.add(flxNumber, flxStepsSeperator, lblStepName, imgGo);
        return flxSteps;
    }
})