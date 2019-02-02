define(function() {
    return function(controller) {
        var Popup = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Popup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        Popup.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "200dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "right": "20dp",
            "skin": "CopyslFbox0b537c14b34e74a",
            "top": "151dp",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxClose = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "15dp",
            "id": "flxClose",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": 20,
            "skin": "slFbox",
            "width": "15dp",
            "zIndex": 1
        }, {}, {});
        flxClose.setDefaultUnit(kony.flex.DP);
        var imgClose = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "10dp",
            "id": "imgClose",
            "isVisible": true,
            "skin": "slImage",
            "src": "closeicon.png",
            "width": "10dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxClose.add(imgClose);
        var lblTitle = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "skin": "sknLblda8b09SSP26px",
            "text": "CONFIRMATION",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxHeader.add(flxClose, lblTitle);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxf9f9f9",
            "top": "40dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var btnSaveDraft = new kony.ui.Button({
            "bottom": "65dp",
            "focusSkin": "sknBtn0095e4Op1000095e4B4Radiusffffff26px",
            "height": "35dp",
            "id": "btnSaveDraft",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn0095e4Op1000095e4B4Radiusffffff26px",
            "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Messages.SaveDraft\")",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnDeletePermanently = new kony.ui.Button({
            "bottom": "20dp",
            "focusSkin": "sknBtn0095e4Op1000095e4B4Radiusffffff26px",
            "height": "35dp",
            "id": "btnDeletePermanently",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn0095e4Op1000095e4B4Radiusffffff26px",
            "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Messages.DeletePermanently\")",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblHeading = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "skin": "sknLbl424242SSP26px",
            "text": "What do you want to do?",
            "textStyle": {},
            "top": "50dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxMain.add(flxHeader, flxSeparator, btnSaveDraft, btnDeletePermanently, lblHeading);
        Popup.add(flxMain);
        return Popup;
    }
})