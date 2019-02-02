define("flxMessagesRight", function() {
    return function(controller) {
        var flxMessagesRight = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxMessagesRight",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMessagesRight.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxMessagesMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxMessagesMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "right": "10dp",
            "skin": "sknFlxffffffop100BRadius10px",
            "top": "10dp",
            "zIndex": 10
        }, {}, {});
        flxMessagesMain.setDefaultUnit(kony.flex.DP);
        var flxRight = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRight",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 10
        }, {}, {});
        flxRight.setDefaultUnit(kony.flex.DP);
        var flxFrom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxFrom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxFrom.setDefaultUnit(kony.flex.DP);
        var lblFrom = new kony.ui.Label({
            "id": "lblFrom",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLbl72727SSPReg26px",
            "text": "From :",
            "textStyle": {},
            "top": "0dp",
            "width": "42dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblFromValue = new kony.ui.Label({
            "height": "18dp",
            "id": "lblFromValue",
            "isVisible": true,
            "left": "55dp",
            "skin": "sknLbl4a4a4aSSPSemiBold100pr",
            "text": "Kony Bank",
            "textStyle": {},
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblDate = new kony.ui.Label({
            "bottom": 0,
            "id": "lblDate",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "21 dec ‘17, 02:21 PM",
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
        flxFrom.add(lblFrom, lblFromValue, lblDate);
        var flxMessage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "5dp",
            "clipBounds": true,
            "id": "flxMessage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMessage.setDefaultUnit(kony.flex.DP);
        var lblMessage = new kony.ui.Label({
            "id": "lblMessage",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLbl727272SSPLight22px",
            "text": "Message",
            "textStyle": {},
            "top": "10dp",
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
        var lblMessageDescription = new kony.ui.RichText({
            "bottom": "2dp",
            "id": "lblMessageDescription",
            "isVisible": true,
            "left": "15dp",
            "linkSkin": "defRichTextLink",
            "skin": "sknRtx727272SSPReg26px",
            "text": "Hi John, we have attached statement for the month of december 2017, If you need any help please revert us with your qurries",
            "top": "25dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMessage.add(lblMessage, lblMessageDescription);
        var flxAttachmentMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxAttachmentMain",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAttachmentMain.setDefaultUnit(kony.flex.DP);
        var flxAttachment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50.00%",
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
        flxAttachmentMain.add(flxAttachment);
        var flxAttachmentMain2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxAttachmentMain2",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAttachmentMain2.setDefaultUnit(kony.flex.DP);
        var flxAttachment2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "35dp",
            "id": "flxAttachment2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxffffffBorderf1f1f1Radius3px",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxAttachment2.setDefaultUnit(kony.flex.DP);
        var imgAttachment2 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "14dp",
            "id": "imgAttachment2",
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
        var lblAttachment2 = new kony.ui.Label({
            "centerY": "50%",
            "height": "35dp",
            "id": "lblAttachment2",
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
        var flxDownload2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxDownload2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1
        }, {}, {});
        flxDownload2.setDefaultUnit(kony.flex.DP);
        var imgDownload2 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgDownload2",
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
        flxDownload2.add(imgDownload2);
        flxAttachment2.add(imgAttachment2, lblAttachment2, flxDownload2);
        flxAttachmentMain2.add(flxAttachment2);
        var flxAttachmentMain3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxAttachmentMain3",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAttachmentMain3.setDefaultUnit(kony.flex.DP);
        var flxAttachment3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "35dp",
            "id": "flxAttachment3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxffffffBorderf1f1f1Radius3px",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxAttachment3.setDefaultUnit(kony.flex.DP);
        var imgAttachment3 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "14dp",
            "id": "imgAttachment3",
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
        var lblAttachment3 = new kony.ui.Label({
            "centerY": "50%",
            "height": "35dp",
            "id": "lblAttachment3",
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
        var flxDownload3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxDownload3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1
        }, {}, {});
        flxDownload3.setDefaultUnit(kony.flex.DP);
        var imgDownload3 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgDownload3",
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
        flxDownload3.add(imgDownload3);
        flxAttachment3.add(imgAttachment3, lblAttachment3, flxDownload3);
        flxAttachmentMain3.add(flxAttachment3);
        var flxAttachmentMain4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxAttachmentMain4",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAttachmentMain4.setDefaultUnit(kony.flex.DP);
        var flxAttachment4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "35dp",
            "id": "flxAttachment4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxffffffBorderf1f1f1Radius3px",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxAttachment4.setDefaultUnit(kony.flex.DP);
        var imgAttachment4 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "14dp",
            "id": "imgAttachment4",
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
        var lblAttachment4 = new kony.ui.Label({
            "centerY": "50%",
            "height": "35dp",
            "id": "lblAttachment4",
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
        var flxDownload4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxDownload4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1
        }, {}, {});
        flxDownload4.setDefaultUnit(kony.flex.DP);
        var imgDownload4 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgDownload4",
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
        flxDownload4.add(imgDownload4);
        flxAttachment4.add(imgAttachment4, lblAttachment4, flxDownload4);
        flxAttachmentMain4.add(flxAttachment4);
        var flxAttachmentMain5 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxAttachmentMain5",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAttachmentMain5.setDefaultUnit(kony.flex.DP);
        var flxAttachment5 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "35dp",
            "id": "flxAttachment5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxffffffBorderf1f1f1Radius3px",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxAttachment5.setDefaultUnit(kony.flex.DP);
        var imgAttachment5 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "14dp",
            "id": "imgAttachment5",
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
        var lblAttachment5 = new kony.ui.Label({
            "centerY": "50%",
            "height": "35dp",
            "id": "lblAttachment5",
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
        var flxDownload5 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxDownload5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1
        }, {}, {});
        flxDownload5.setDefaultUnit(kony.flex.DP);
        var imgDownload5 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgDownload5",
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
        flxDownload5.add(imgDownload5);
        flxAttachment5.add(imgAttachment5, lblAttachment5, flxDownload5);
        flxAttachmentMain5.add(flxAttachment5);
        flxRight.add(flxFrom, flxMessage, flxAttachmentMain, flxAttachmentMain2, flxAttachmentMain3, flxAttachmentMain4, flxAttachmentMain5);
        flxMessagesMain.add(flxRight);
        flxMain.add(flxMessagesMain);
        var flxShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "23dp",
            "id": "flxShadow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "right": "10dp",
            "skin": "sknFlxHeaderShadow",
            "top": "-16dp",
            "width": "96%",
            "zIndex": 1
        }, {}, {});
        flxShadow.setDefaultUnit(kony.flex.DP);
        flxShadow.add();
        flxMessagesRight.add(flxMain, flxShadow);
        return flxMessagesRight;
    }
})