define("flxProductAcknowledgement", function() {
    return function(controller) {
        var flxProductAcknowledgement = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxProductAcknowledgement",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxProductAcknowledgement.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "right": "10dp",
            "skin": "sknFlxffffffBorderf1f1f1Radius3px",
            "top": "10dp",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var imgProduct = new kony.ui.Image2({
            "height": "41dp",
            "id": "imgProduct",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "product.png",
            "top": "5dp",
            "width": "41dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblProduct = new kony.ui.Label({
            "id": "lblProduct",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Premium Savings Account",
            "textStyle": {},
            "top": "7dp",
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblProductInfo = new kony.ui.Label({
            "id": "lblProductInfo",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Your Account is now active",
            "textStyle": {},
            "top": "28dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxMain.add(imgProduct, lblProduct, lblProductInfo);
        flxProductAcknowledgement.add(flxMain);
        return flxProductAcknowledgement;
    }
})