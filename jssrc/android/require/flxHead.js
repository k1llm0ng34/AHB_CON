define("flxHead", function() {
    return function(controller) {
        var flxHead = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxHead",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknFlxDBDBDF"
        }, {}, {});
        flxHead.setDefaultUnit(kony.flex.DP);
        var lblMonthYear = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "30%",
            "id": "lblMonthYear",
            "isVisible": true,
            "skin": "sknlbl51525fpx28",
            "text": "JULY",
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
        var lblSunday = new kony.ui.Label({
            "centerY": "70%",
            "id": "lblSunday",
            "isVisible": true,
            "left": "9.75%",
            "skin": "sknLbl61626F",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "11.50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblMonday = new kony.ui.Label({
            "centerY": "70%",
            "id": "lblMonday",
            "isVisible": true,
            "left": "21.25%",
            "skin": "sknLbl61626F",
            "text": "M",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "11.50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTuesday = new kony.ui.Label({
            "centerY": "70%",
            "id": "lblTuesday",
            "isVisible": true,
            "left": "32.75%",
            "skin": "sknLbl61626F",
            "text": "T",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "11.50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblWednesday = new kony.ui.Label({
            "centerY": "70%",
            "id": "lblWednesday",
            "isVisible": true,
            "left": "44.25%",
            "skin": "sknLbl61626F",
            "text": "W",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "11.50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblThursday = new kony.ui.Label({
            "centerY": "70%",
            "id": "lblThursday",
            "isVisible": true,
            "left": "55.75%",
            "skin": "sknLbl61626F",
            "text": "T",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "11.50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblFriday = new kony.ui.Label({
            "centerY": "70%",
            "id": "lblFriday",
            "isVisible": true,
            "left": "67.25%",
            "skin": "sknLbl61626F",
            "text": "F",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "11.50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSaturday = new kony.ui.Label({
            "centerY": "70%",
            "id": "lblSaturday",
            "isVisible": true,
            "left": "78.75%",
            "skin": "sknLbl61626F",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "11.50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxHead.add(lblMonthYear, lblSunday, lblMonday, lblTuesday, lblWednesday, lblThursday, lblFriday, lblSaturday);
        return flxHead;
    }
})