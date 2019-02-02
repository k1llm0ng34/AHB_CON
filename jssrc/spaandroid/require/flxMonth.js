define("flxMonth", function() {
    return function(controller) {
        var flxMonth = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "320dp",
            "id": "flxMonth",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox"
        }, {}, {});
        flxMonth.setDefaultUnit(kony.flex.DP);
        var flx1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "10.47%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx1.setDefaultUnit(kony.flex.DP);
        var img1 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img1",
            "imageWhenFailed": "konymp_dps_imagedrag.png",
            "imageWhileDownloading": "konymp_dps_circle.png",
            "isVisible": false,
            "skin": "slImage",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl1 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl1",
            "isVisible": true,
            "left": "7dp",
            "skin": "konympdpssknLbl222326px34",
            "text": "1",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx1.add(img1, lbl1);
        var flx2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "10.47%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "21.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx2.setDefaultUnit(kony.flex.DP);
        var img2 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img2",
            "isVisible": false,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl2 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl2",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx2.add(img2, lbl2);
        var flx3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "10.47%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "32.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx3.setDefaultUnit(kony.flex.DP);
        var img3 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img3",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl3 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl3",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx3.add(img3, lbl3);
        var flx4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "10.47%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "44.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx4.setDefaultUnit(kony.flex.DP);
        var img4 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img4",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl4 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl4",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx4.add(img4, lbl4);
        var flx5 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "10.47%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "55.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx5.setDefaultUnit(kony.flex.DP);
        var img5 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img5",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl5 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl5",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx5.add(img5, lbl5);
        var flx6 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "10.47%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "67.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx6.setDefaultUnit(kony.flex.DP);
        var img6 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img6",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl6 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl6",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx6.add(img6, lbl6);
        var flx7 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "10.47%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "78.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx7.setDefaultUnit(kony.flex.DP);
        var img7 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img7",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl7 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl7",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx7.add(img7, lbl7);
        var flx8 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "25.00%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx8.setDefaultUnit(kony.flex.DP);
        var img8 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img8",
            "isVisible": false,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl8 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl8",
            "isVisible": true,
            "left": "7dp",
            "skin": "konympdpssknLbl222326px34",
            "text": "1",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx8.add(img8, lbl8);
        var flx9 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "25%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "21.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx9.setDefaultUnit(kony.flex.DP);
        var img9 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img9",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl9 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl9",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx9.add(img9, lbl9);
        var flx10 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "25%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx10",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "32.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx10.setDefaultUnit(kony.flex.DP);
        var img10 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img10",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl10 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl10",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx10.add(img10, lbl10);
        var flx11 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "25%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx11",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "44.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx11.setDefaultUnit(kony.flex.DP);
        var img11 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img11",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl11 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl11",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx11.add(img11, lbl11);
        var flx12 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "25%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx12",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "55.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx12.setDefaultUnit(kony.flex.DP);
        var img12 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img12",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl12 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl12",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx12.add(img12, lbl12);
        var flx13 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "25%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx13",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "67.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx13.setDefaultUnit(kony.flex.DP);
        var img13 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img13",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl13 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl13",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx13.add(img13, lbl13);
        var flx14 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "25%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx14",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "78.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx14.setDefaultUnit(kony.flex.DP);
        var img14 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img14",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl14 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl14",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx14.add(img14, lbl14);
        var flx15 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "40%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx15",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx15.setDefaultUnit(kony.flex.DP);
        var img15 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img15",
            "isVisible": false,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl15 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl15",
            "isVisible": true,
            "left": "7dp",
            "skin": "konympdpssknLbl222326px34",
            "text": "1",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx15.add(img15, lbl15);
        var flx16 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "40%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx16",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "21.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx16.setDefaultUnit(kony.flex.DP);
        var img16 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img16",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl16 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl16",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx16.add(img16, lbl16);
        var flx17 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "40%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx17",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "32.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx17.setDefaultUnit(kony.flex.DP);
        var img17 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img17",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl17 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl17",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx17.add(img17, lbl17);
        var flx18 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "40%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx18",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "44.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx18.setDefaultUnit(kony.flex.DP);
        var img18 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img18",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl18 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl18",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx18.add(img18, lbl18);
        var flx19 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "40%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx19",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "55.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx19.setDefaultUnit(kony.flex.DP);
        var img19 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img19",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl19 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl19",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx19.add(img19, lbl19);
        var flx20 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "40%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx20",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "67.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx20.setDefaultUnit(kony.flex.DP);
        var img20 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img20",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl20 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl20",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx20.add(img20, lbl20);
        var flx21 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "40%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx21",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "78.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx21.setDefaultUnit(kony.flex.DP);
        var img21 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img21",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl21 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl21",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx21.add(img21, lbl21);
        var flx22 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "55%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx22",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx22.setDefaultUnit(kony.flex.DP);
        var img22 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img22",
            "isVisible": false,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl22 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl22",
            "isVisible": true,
            "left": "7dp",
            "skin": "konympdpssknLbl222326px34",
            "text": "1",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx22.add(img22, lbl22);
        var flx23 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "55%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx23",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "21.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx23.setDefaultUnit(kony.flex.DP);
        var img23 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img23",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl23 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl23",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx23.add(img23, lbl23);
        var flx24 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "55%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx24",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "32.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx24.setDefaultUnit(kony.flex.DP);
        var img24 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img24",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl24 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl24",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx24.add(img24, lbl24);
        var flx25 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "55%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx25",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "44.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx25.setDefaultUnit(kony.flex.DP);
        var img25 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img25",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl25 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl25",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx25.add(img25, lbl25);
        var flx26 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "55%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx26",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "55.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx26.setDefaultUnit(kony.flex.DP);
        var img26 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img26",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl26 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl26",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx26.add(img26, lbl26);
        var flx27 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "55%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx27",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "67.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx27.setDefaultUnit(kony.flex.DP);
        var img27 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img27",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl27 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl27",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx27.add(img27, lbl27);
        var flx28 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "55%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx28",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "78.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx28.setDefaultUnit(kony.flex.DP);
        var img28 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img28",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl28 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl28",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx28.add(img28, lbl28);
        var flx29 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "70%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx29",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx29.setDefaultUnit(kony.flex.DP);
        var img29 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img29",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl29 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl29",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx29.add(img29, lbl29);
        var flx30 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "70%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx30",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "21.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx30.setDefaultUnit(kony.flex.DP);
        var img30 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img30",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl30 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl30",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx30.add(img30, lbl30);
        var flx31 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "70%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx31",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "32.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx31.setDefaultUnit(kony.flex.DP);
        var img31 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img31",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl31 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl31",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx31.add(img31, lbl31);
        var flx32 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "70%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx32",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "44.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx32.setDefaultUnit(kony.flex.DP);
        var img32 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img32",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl32 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl32",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx32.add(img32, lbl32);
        var flx33 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "70%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx33",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "55.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx33.setDefaultUnit(kony.flex.DP);
        var img33 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img33",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl33 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl33",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx33.add(img33, lbl33);
        var flx34 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "70%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx34",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "67.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx34.setDefaultUnit(kony.flex.DP);
        var img34 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img34",
            "isVisible": false,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl34 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl34",
            "isVisible": true,
            "left": "7dp",
            "skin": "konympdpssknLbl222326px34",
            "text": "1",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx34.add(img34, lbl34);
        var flx35 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "70%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx35",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "78.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx35.setDefaultUnit(kony.flex.DP);
        var img35 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img35",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl35 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl35",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx35.add(img35, lbl35);
        var flx36 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "85%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx36",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx36.setDefaultUnit(kony.flex.DP);
        var img36 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img36",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl36 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl36",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx36.add(img36, lbl36);
        var flx37 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "85%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx37",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "21.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx37.setDefaultUnit(kony.flex.DP);
        var img37 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img37",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl37 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl37",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx37.add(img37, lbl37);
        var flx38 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "85%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx38",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "32.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx38.setDefaultUnit(kony.flex.DP);
        var img38 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img38",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl38 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl38",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx38.add(img38, lbl38);
        var flx39 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "85%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx39",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "44.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx39.setDefaultUnit(kony.flex.DP);
        var img39 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img39",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl39 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl39",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx39.add(img39, lbl39);
        var flx40 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "85%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx40",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "55.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx40.setDefaultUnit(kony.flex.DP);
        var img40 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img40",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl40 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl40",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx40.add(img40, lbl40);
        var flx41 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "85%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx41",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "67.25%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx41.setDefaultUnit(kony.flex.DP);
        var img41 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img41",
            "isVisible": false,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl41 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl41",
            "isVisible": true,
            "left": "7dp",
            "skin": "konympdpssknLbl222326px34",
            "text": "1",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx41.add(img41, lbl41);
        var flx42 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "85%",
            "clipBounds": true,
            "height": "14.50%",
            "id": "flx42",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "78.75%",
            "skin": "sknflxNobg",
            "width": "11.50%",
            "zIndex": 1
        }, {}, {});
        flx42.setDefaultUnit(kony.flex.DP);
        var img42 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img42",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl42 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lbl42",
            "isVisible": true,
            "skin": "konympdpssknLbl222326px34",
            "text": "10",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flx42.add(img42, lbl42);
        flxMonth.add(flx1, flx2, flx3, flx4, flx5, flx6, flx7, flx8, flx9, flx10, flx11, flx12, flx13, flx14, flx15, flx16, flx17, flx18, flx19, flx20, flx21, flx22, flx23, flx24, flx25, flx26, flx27, flx28, flx29, flx30, flx31, flx32, flx33, flx34, flx35, flx36, flx37, flx38, flx39, flx40, flx41, flx42);
        return flxMonth;
    }
})