define("flxSecurityQuestion", function() {
    return function(controller) {
        var flxSecurityQuestion = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSecurityQuestion",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSecurityQuestion.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblQuestion = new kony.ui.Label({
            "id": "lblQuestion",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl3e4f56SSPBold26px",
            "text": "Which of these cars have you owned in the past?",
            "textStyle": {},
            "top": "20dp",
            "width": "85%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var flxOption1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxOption1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxOption1.setDefaultUnit(kony.flex.DP);
        var lblOption1 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblOption1",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Cadillac Sedan",
            "textStyle": {},
            "width": "80%",
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
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCheckbox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "20dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        flxCheckbox.setDefaultUnit(kony.flex.DP);
        var imgCheckbox = new kony.ui.Image2({
            "centerY": "50%",
            "height": "26dp",
            "id": "imgCheckbox",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "radiobuttoninactive.png",
            "width": "26dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCheckbox.add(imgCheckbox);
        var flxSeparator1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "12dp",
            "right": "12dp",
            "skin": "sknFlxf1f1f1",
            "zIndex": 1
        }, {}, {});
        flxSeparator1.setDefaultUnit(kony.flex.DP);
        flxSeparator1.add();
        flxOption1.add(lblOption1, flxCheckbox, flxSeparator1);
        var flxOption2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxOption2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxOption2.setDefaultUnit(kony.flex.DP);
        var lblOption2 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblOption2",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Buick ",
            "textStyle": {},
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var flxCheckbox2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCheckbox2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "20dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        flxCheckbox2.setDefaultUnit(kony.flex.DP);
        var imgCheckbox2 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "26dp",
            "id": "imgCheckbox2",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "radiobuttoninactive.png",
            "width": "26dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCheckbox2.add(imgCheckbox2);
        var flxSeparator2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "12dp",
            "right": "12dp",
            "skin": "sknFlxf1f1f1",
            "zIndex": 1
        }, {}, {});
        flxSeparator2.setDefaultUnit(kony.flex.DP);
        flxSeparator2.add();
        flxOption2.add(lblOption2, flxCheckbox2, flxSeparator2);
        var flxOption3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxOption3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxOption3.setDefaultUnit(kony.flex.DP);
        var lblOption3 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblOption3",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Ford Explorer SUV",
            "textStyle": {},
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var flxCheckbox3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCheckbox3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "20dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        flxCheckbox3.setDefaultUnit(kony.flex.DP);
        var imgCheckbox3 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "26dp",
            "id": "imgCheckbox3",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "radiobuttoninactive.png",
            "width": "26dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCheckbox3.add(imgCheckbox3);
        flxOption3.add(lblOption3, flxCheckbox3);
        flxMain.add(lblQuestion, flxOption1, flxOption2, flxOption3);
        var flxGap = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxGap",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxGap.setDefaultUnit(kony.flex.DP);
        flxGap.add();
        flxSecurityQuestion.add(flxMain, flxGap);
        return flxSecurityQuestion;
    }
})