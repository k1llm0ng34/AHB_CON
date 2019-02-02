define("flxSelectCards", function() {
    return function(controller) {
        var flxSelectCards = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "91dp",
            "id": "flxSelectCards",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknFlxffffff"
        }, {}, {});
        flxSelectCards.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "85dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "right": "10dp",
            "skin": "sknflxffffffBorderf1f1f13px",
            "top": "5dp",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblCardName = new kony.ui.Label({
            "id": "lblCardName",
            "isVisible": true,
            "left": "65dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "10dp",
            "width": "60%",
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
            "centerY": "50%",
            "id": "lblBankName",
            "isVisible": true,
            "left": "65dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "30dp",
            "width": "60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblAccess = new kony.ui.Label({
            "bottom": "10dp",
            "height": "17dp",
            "id": "lblAccess",
            "isVisible": true,
            "left": "65dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var imgCheckbox = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgCheckbox",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "remeberme.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgCard = new kony.ui.Image2({
            "centerY": "50%",
            "height": "40dp",
            "id": "imgCard",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "atmcardred.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMain.add(lblCardName, lblBankName, lblAccess, imgCheckbox, imgCard);
        flxSelectCards.add(flxMain);
        return flxSelectCards;
    }
})