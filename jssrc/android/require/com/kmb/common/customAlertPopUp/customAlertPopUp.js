define(function() {
    return function(controller) {
        var customAlertPopUp = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "customAlertPopUp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlx000000op60",
            "top": "0dp",
            "width": "100%",
            "zIndex": 200
        }, {}, {});
        customAlertPopUp.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "27.60%",
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknFlxffffffB",
            "width": "81.30%",
            "zIndex": 200
        }, {}, {});
        flxContainer.setDefaultUnit(kony.flex.DP);
        var imgTouchId = new kony.ui.Image2({
            "centerX": "50%",
            "height": "50dp",
            "id": "imgTouchId",
            "isVisible": true,
            "skin": "slImage",
            "src": "touchid.png",
            "top": "10%",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTitle = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "skin": "sknLbl3e4f56SSPReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.touchIdTitle"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "44%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAuthenticateMsg = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblAuthenticateMsg",
            "isVisible": true,
            "skin": "sknLbl3e4f56op50SSPReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.authenticationMsg"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "56%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxBorderBottom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBorderBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxe3e3e3op50",
            "top": "75%",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        flxBorderBottom.setDefaultUnit(kony.flex.DP);
        flxBorderBottom.add();
        var flxCancel = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxCancel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "3%",
            "skin": "CopyslFbox",
            "top": "82%",
            "width": "25%",
            "zIndex": 1
        }, {}, {});
        flxCancel.setDefaultUnit(kony.flex.DP);
        var lblCancel = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblCancel",
            "isVisible": true,
            "right": "5%",
            "skin": "sknLbl0095e4SSPReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCancel.add(lblCancel);
        flxContainer.add(imgTouchId, lblTitle, lblAuthenticateMsg, flxBorderBottom, flxCancel);
        customAlertPopUp.add(flxContainer);
        return customAlertPopUp;
    }
})