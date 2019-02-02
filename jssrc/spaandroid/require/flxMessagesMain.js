define("flxMessagesMain", function() {
    return function(controller) {
        var flxMessagesMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxMessagesMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onTouchStart": controller.AS_FlexContainer_i426b5aa937245d08ae70f183ee0480a,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMessagesMain.setDefaultUnit(kony.flex.DP);
        var flxMessagesMainSwipe = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxMessagesMainSwipe",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "150%",
            "zIndex": 1
        }, {}, {});
        flxMessagesMainSwipe.setDefaultUnit(kony.flex.DP);
        var flxmain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxmain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "66.67%",
            "zIndex": 1
        }, {}, {});
        flxmain.setDefaultUnit(kony.flex.DP);
        var lblSubject = new kony.ui.Label({
            "height": "19dp",
            "id": "lblSubject",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSPBold26px",
            "text": "Subject Line Max one lineSubject Line Max one line",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "10dp",
            "width": "170dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblNumber = new kony.ui.Label({
            "height": "16dp",
            "id": "lblNumber",
            "isVisible": true,
            "left": "190dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSPBold26px",
            "text": "(999)",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "10dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblTime = new kony.ui.Label({
            "height": "16dp",
            "id": "lblTime",
            "isVisible": true,
            "minWidth": "60dp",
            "right": "20dp",
            "skin": "sknLbl72727SSPReg26px",
            "text": "02/22/2018",
            "textStyle": {},
            "top": "10dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblDescription = new kony.ui.RichText({
            "id": "lblDescription",
            "isVisible": true,
            "left": "20dp",
            "linkSkin": "defRichTextLink",
            "right": "20dp",
            "skin": "sknRtx727272SSPLight26px",
            "text": "Message description to appear here.Show maximum two lines of text. In the end text is going to end here with …",
            "top": "35dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxmain.add(lblSubject, lblNumber, lblTime, lblDescription);
        var flxDeleteReply = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxDeleteReply",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "33.33%",
            "zIndex": 10
        }, {}, {});
        flxDeleteReply.setDefaultUnit(kony.flex.DP);
        var flxDelete = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknflxff5d6e",
            "top": "0dp",
            "width": "50%",
            "zIndex": 10
        }, {}, {});
        flxDelete.setDefaultUnit(kony.flex.DP);
        var imgDelete = new kony.ui.Image2({
            "centerX": "50%",
            "height": "15dp",
            "id": "imgDelete",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "deleteicon.png",
            "top": "15dp",
            "width": "12dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDelete = new kony.ui.Label({
            "bottom": "15dp",
            "centerX": "50%",
            "id": "lblDelete",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg86pr",
            "text": "Delete",
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
        flxDelete.add(imgDelete, lblDelete);
        var flxReply = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxReply",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0dp",
            "skin": "sknFlx0095e4",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxReply.setDefaultUnit(kony.flex.DP);
        var imgReply = new kony.ui.Image2({
            "centerX": "50%",
            "height": "17dp",
            "id": "imgReply",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "replyicon.png",
            "top": "13dp",
            "width": "17dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblReply = new kony.ui.Label({
            "bottom": "15dp",
            "centerX": "50%",
            "id": "lblReply",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg86pr",
            "text": "Reply",
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
        flxReply.add(imgReply, lblReply);
        flxDeleteReply.add(flxDelete, flxReply);
        flxMessagesMainSwipe.add(flxmain, flxDeleteReply);
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
        flxMessagesMain.add(flxMessagesMainSwipe, flxSeparator);
        return flxMessagesMain;
    }
})