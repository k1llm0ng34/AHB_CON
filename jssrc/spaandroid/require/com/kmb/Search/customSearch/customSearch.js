define(function() {
    return function(controller) {
        var customSearch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "95dp",
            "id": "customSearch",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "sknFlx1a98ff",
            "top": "0%",
            "width": "100%"
        }, {}, {});
        customSearch.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6.25%",
            "top": "0%",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBack",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBack.add(imgBack);
        var lblLocateUs = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblLocateUs",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLblffffffSSP30px",
            "text": "LOCATE US",
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
        var btnCancel = new kony.ui.Button({
            "centerY": "50.00%",
            "focusSkin": "sknBtn0095e428px",
            "id": "btnCancel",
            "isVisible": true,
            "right": "6.25%",
            "skin": "sknBtnffffffSSP28px",
            "text": "CANCEL",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHeader.add(flxBack, lblLocateUs, btnCancel);
        var flxHeaderSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxHeaderSeparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0.00%",
            "skin": "sknFlxf1f1f1",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeaderSeparator.setDefaultUnit(kony.flex.DP);
        flxHeaderSeparator.add();
        var flxSearchMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxSearchMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "-0.50%",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxSearchMain.setDefaultUnit(kony.flex.DP);
        var tbxSearch = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknTbxSSPf1f1f1B",
            "height": "35dp",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "placeholder": "Search by zipcode, city, street....",
            "secureTextEntry": false,
            "skin": "sknTbxSSPf1f1f1B",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "87%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [35, 3, 1, 3],
            "paddingInPixel": false
        }, {
            "autoComplete": false,
            "autoCorrect": false
        });
        var imgSearchIcon = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgSearchIcon",
            "isVisible": true,
            "left": "-85%",
            "skin": "slImage",
            "src": "search.png",
            "width": "15dp",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxSearch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69.80%",
            "id": "flxSearch",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-2%",
            "skin": "slFbox",
            "top": "0.20%",
            "width": "11%",
            "zIndex": 12
        }, {}, {});
        flxSearch.setDefaultUnit(kony.flex.DP);
        var imgSearch = new kony.ui.Image2({
            "height": "100%",
            "id": "imgSearch",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "searchblue.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSearch.add(imgSearch);
        flxSearchMain.add(tbxSearch, imgSearchIcon, flxSearch);
        var flxHeaderShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "5dp",
            "id": "flxHeaderShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeaderShadow.setDefaultUnit(kony.flex.DP);
        flxHeaderShadow.add();
        customSearch.add(flxHeader, flxHeaderSeparator, flxSearchMain, flxHeaderShadow);
        return customSearch;
    }
})