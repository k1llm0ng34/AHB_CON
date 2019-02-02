define("flxProductDetails", function() {
    return function(controller) {
        var flxProductDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxProductDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "skin": "slFbox"
        }, {}, {});
        flxProductDetails.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": false,
            "left": "6.25%",
            "skin": "sknLbl424242SSReg30px",
            "text": "About Product",
            "textStyle": {},
            "top": "35dp",
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
        var lblSubTitle = new kony.ui.Label({
            "id": "lblSubTitle",
            "isVisible": false,
            "left": "6.25%",
            "skin": "sknLbl424242SSP22px",
            "text": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
            "textStyle": {},
            "top": "6dp",
            "width": "87%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var btnShowMore = new kony.ui.Button({
            "id": "btnShowMore",
            "isVisible": false,
            "right": "6.25%",
            "skin": "sknBtn0095e426px",
            "text": "SHOW MORE",
            "top": "4dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var rtxData = new kony.ui.RichText({
            "id": "rtxData",
            "isVisible": true,
            "left": "20dp",
            "linkSkin": "defRichTextLink",
            "skin": "sknRtx424242SSP22px",
            "text": "<b>About Product</b><br/>Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
            "top": "15dp",
            "width": "88%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlexContainer0je14ed46783344 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "FlexContainer0je14ed46783344",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxf1f1f1",
            "top": "13dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0je14ed46783344.setDefaultUnit(kony.flex.DP);
        FlexContainer0je14ed46783344.add();
        flxProductDetails.add(lblTitle, lblSubTitle, btnShowMore, rtxData, FlexContainer0je14ed46783344);
        return flxProductDetails;
    }
})