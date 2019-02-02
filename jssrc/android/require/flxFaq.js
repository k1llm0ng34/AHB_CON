define("flxFaq", function() {
    return function(controller) {
        var flxFaq = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFaq",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFaq.setDefaultUnit(kony.flex.DP);
        var lblQuestion = new kony.ui.Label({
            "id": "lblQuestion",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSPSemiBold22px",
            "text": "Question appears here. Question will be in bold text and can be in multiple lines.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "88%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAnswer = new kony.ui.Label({
            "id": "lblAnswer",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "By accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "88%",
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
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxf1f1f1",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxFaq.add(lblQuestion, lblAnswer, flxSeparator);
        return flxFaq;
    }
})