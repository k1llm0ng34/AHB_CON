define("flxNAOSelectProduct", function() {
    return function(controller) {
        var flxNAOSelectProduct = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "160dp",
            "id": "flxNAOSelectProduct",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxNAOSelectProduct.setDefaultUnit(kony.flex.DP);
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
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "appicon.png",
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
            "left": "61dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Premium Savings Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "65%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxCheckbox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxCheckbox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "10dp",
            "skin": "slFbox",
            "top": "15dp",
            "width": "25dp",
            "zIndex": 1
        }, {}, {});
        flxCheckbox.setDefaultUnit(kony.flex.DP);
        var imgCheckbox = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgCheckbox",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "checkboxempty.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCheckbox.add(imgCheckbox);
        var lblProductInfo = new kony.ui.Label({
            "id": "lblProductInfo",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Save As You Go Transfers. We’ll transfer $1 of your  funds from your linked checking account to your  Savings account for each qualifying...",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "55dp",
            "width": "92%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnViewDetails = new kony.ui.Button({
            "bottom": "10dp",
            "id": "btnViewDetails",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknBtn00aef3SSPReg22px",
            "text": "KNOW MORE...",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMain.add(imgProduct, lblProduct, flxCheckbox, lblProductInfo, btnViewDetails);
        flxNAOSelectProduct.add(flxMain);
        return flxNAOSelectProduct;
    }
})