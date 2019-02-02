define("segAttachmentMain1", function() {
    return function(controller) {
        var segAttachmentMain1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "segAttachmentMain1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        segAttachmentMain1.setDefaultUnit(kony.flex.DP);
        var flxAttachment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50.00%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "35dp",
            "id": "flxAttachment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxffffffBorderf1f1f1Radius3px",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxAttachment.setDefaultUnit(kony.flex.DP);
        var imgAttachment = new kony.ui.Image2({
            "centerY": "50%",
            "height": "14dp",
            "id": "imgAttachment",
            "isVisible": true,
            "left": "16dp",
            "skin": "slImage",
            "src": "attachment.png",
            "width": "14dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblAttachment = new kony.ui.Label({
            "centerY": "50%",
            "height": "35dp",
            "id": "lblAttachment",
            "isVisible": true,
            "left": "45dp",
            "skin": "sknLbl0095e4SSPRegular26px",
            "text": "Statement Dec.pdf",
            "textStyle": {},
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var flxDownload = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxDownload",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1
        }, {}, {});
        flxDownload.setDefaultUnit(kony.flex.DP);
        var imgDownload = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgDownload",
            "isVisible": true,
            "skin": "slImage",
            "src": "download.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDownload.add(imgDownload);
        flxAttachment.add(imgAttachment, lblAttachment, flxDownload);
        segAttachmentMain1.add(flxAttachment);
        return segAttachmentMain1;
    }
})