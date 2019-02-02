define("flxAddedExternalAccounts", function() {
    return function(controller) {
        var flxAddedExternalAccounts = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxAddedExternalAccounts",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "skin": "f9f9"
        }, {}, {});
        flxAddedExternalAccounts.setDefaultUnit(kony.flex.DP);
        var flxMainRowContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainRowContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "140%",
            "zIndex": 10
        }, {}, {});
        flxMainRowContainer.setDefaultUnit(kony.flex.DP);
        var flxMasterContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMasterContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "f9f9",
            "top": "0%",
            "width": "72%",
            "zIndex": 10
        }, {}, {});
        flxMasterContainer.setDefaultUnit(kony.flex.DP);
        var lblAccountName = new kony.ui.Label({
            "id": "lblAccountName",
            "isVisible": true,
            "left": "60dp",
            "skin": "sknLbl72727SSPReg26px",
            "text": "Label",
            "textStyle": {},
            "top": "8dp",
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
        var lblAccountType = new kony.ui.Label({
            "bottom": "8dp",
            "id": "lblAccountType",
            "isVisible": true,
            "left": "60dp",
            "skin": "sknLbla0a0a0SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxMasterContainer.add(lblAccountName, lblAccountType, flxSeparator);
        var flxDelRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxDelRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_c4637f4a13bf44bc8d43b03734acee6e,
            "skin": "sknflxDelete",
            "width": "14%",
            "zIndex": 1
        }, {}, {});
        flxDelRow.setDefaultUnit(kony.flex.DP);
        var imgDelRow = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "40%",
            "height": "15dp",
            "id": "imgDelRow",
            "isVisible": true,
            "src": "del_full_trans.png",
            "width": "13dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDelete = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "75%",
            "height": "14dp",
            "id": "lblDelete",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknDeleteLabel",
            "text": "Delete",
            "textStyle": {},
            "width": "42dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxDelRow.add(imgDelRow, lblDelete);
        flxMainRowContainer.add(flxMasterContainer, flxDelRow);
        flxAddedExternalAccounts.add(flxMainRowContainer);
        return flxAddedExternalAccounts;
    }
})