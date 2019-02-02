define("AuthModule/frmFullScreenAds", function() {
    return function(controller) {
        function addWidgetsfrmFullScreenAds() {
            this.setDefaultUnit(kony.flex.DP);
            var flxAdvertisement = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAdvertisement",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAdvertisement.setDefaultUnit(kony.flex.DP);
            var flxScrollContainerAds = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollContainerAds",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollContainerAds.setDefaultUnit(kony.flex.DP);
            var flxLoadingIndicator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoadingIndicator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoadingIndicator.setDefaultUnit(kony.flex.DP);
            var imgLoadingIndicator = new kony.ui.Image2({
                "height": "100%",
                "id": "imgLoadingIndicator",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "loaderfullscreen.gif",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoadingIndicator.add(imgLoadingIndicator);
            var flxAd1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd1.setDefaultUnit(kony.flex.DP);
            var imgAd1 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd1",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_c9306b65c2ea40ad9fb6edf21db4194a,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAdAction1Img1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "17.60%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAdAction1Img1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 5
            }, {}, {});
            flxAdAction1Img1.setDefaultUnit(kony.flex.DP);
            var btnAdAction1Img1 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnAdAction1Img1",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0ffb6b51808cf44",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxLblAdAction1Img1 = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "height": "36dp",
                "id": "rtxLblAdAction1Img1",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "slRichText",
                "text": "Hello\n",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdAction1Img1.add(btnAdAction1Img1, rtxLblAdAction1Img1);
            var flxAdAction2Img1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "6.77%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAdAction2Img1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 5
            }, {}, {});
            flxAdAction2Img1.setDefaultUnit(kony.flex.DP);
            var btnAdAction2Img1 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnAdAction2Img1",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0a8d21a1601a345",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxLblAdAction2Img1 = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "height": "36dp",
                "id": "rtxLblAdAction2Img1",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "slRichText",
                "text": "Hello\n",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdAction2Img1.add(btnAdAction2Img1, rtxLblAdAction2Img1);
            flxAd1.add(imgAd1, flxAdAction1Img1, flxAdAction2Img1);
            var flxAd2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd2.setDefaultUnit(kony.flex.DP);
            var imgAd2 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd2",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_ccf55f4d6d954fe7b52cd8f655046ecb,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAdAction1Img2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "17.60%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAdAction1Img2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 5
            }, {}, {});
            flxAdAction1Img2.setDefaultUnit(kony.flex.DP);
            var btnAdAction1Img2 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnAdAction1Img2",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0c61863f16bad44",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxLblAdAction1Img2 = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "height": "36dp",
                "id": "rtxLblAdAction1Img2",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "slRichText",
                "text": "Hello",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdAction1Img2.add(btnAdAction1Img2, rtxLblAdAction1Img2);
            var flxAdAction2Img2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "6.77%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAdAction2Img2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 5
            }, {}, {});
            flxAdAction2Img2.setDefaultUnit(kony.flex.DP);
            var btnAdAction2Img2 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnAdAction2Img2",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0d1040c3a914840",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxLblAdAction2Img2 = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "height": "36dp",
                "id": "rtxLblAdAction2Img2",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "slRichText",
                "text": "Hello\n",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdAction2Img2.add(btnAdAction2Img2, rtxLblAdAction2Img2);
            flxAd2.add(imgAd2, flxAdAction1Img2, flxAdAction2Img2);
            var flxAd3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd3.setDefaultUnit(kony.flex.DP);
            var imgAd3 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd3",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_f41020b939c346e7b53ba746263b09d4,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAdAction1Img3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "17.60%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAdAction1Img3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 5
            }, {}, {});
            flxAdAction1Img3.setDefaultUnit(kony.flex.DP);
            var btnAdAction1Img3 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnAdAction1Img3",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0da078a7878964d",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxLblAdAction1Img3 = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "height": "36dp",
                "id": "rtxLblAdAction1Img3",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "slRichText",
                "text": "Hello\n",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdAction1Img3.add(btnAdAction1Img3, rtxLblAdAction1Img3);
            var flxAdAction2Img3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "6.77%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAdAction2Img3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 5
            }, {}, {});
            flxAdAction2Img3.setDefaultUnit(kony.flex.DP);
            var btnAdAction2Img3 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnAdAction2Img3",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0jd6bd983df4341",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxLblAdAction2Img3 = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "height": "36dp",
                "id": "rtxLblAdAction2Img3",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "slRichText",
                "text": "Hello\n",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdAction2Img3.add(btnAdAction2Img3, rtxLblAdAction2Img3);
            flxAd3.add(imgAd3, flxAdAction1Img3, flxAdAction2Img3);
            var flxAd4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd4.setDefaultUnit(kony.flex.DP);
            var imgAd4 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd4",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_b4571bc8b5ed433dbf7a657397dfcd6a,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAdAction1Img4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "17.60%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAdAction1Img4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 5
            }, {}, {});
            flxAdAction1Img4.setDefaultUnit(kony.flex.DP);
            var btnAdAction1Img4 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnAdAction1Img4",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0a45de459dd1e4d",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxLblAdAction1Img4 = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "height": "36dp",
                "id": "rtxLblAdAction1Img4",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "slRichText",
                "text": "Hello\n",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdAction1Img4.add(btnAdAction1Img4, rtxLblAdAction1Img4);
            var flxAdAction2Img4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "6.77%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAdAction2Img4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 5
            }, {}, {});
            flxAdAction2Img4.setDefaultUnit(kony.flex.DP);
            var btnAdAction2Img4 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnAdAction2Img4",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0a21d0181e0bd48",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxLblAdAction2Img4 = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "height": "36dp",
                "id": "rtxLblAdAction2Img4",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "slRichText",
                "text": "Hello\n",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdAction2Img4.add(btnAdAction2Img4, rtxLblAdAction2Img4);
            flxAd4.add(imgAd4, flxAdAction1Img4, flxAdAction2Img4);
            var flxAd5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAd5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAd5.setDefaultUnit(kony.flex.DP);
            var imgAd5 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAd5",
                "isVisible": true,
                "left": "0dp",
                "onDownloadComplete": controller.AS_Image_i76b3c05a8f64386b1b10baadef87d97,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAdAction1Img5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "17.60%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAdAction1Img5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 5
            }, {}, {});
            flxAdAction1Img5.setDefaultUnit(kony.flex.DP);
            var btnAdAction1Img5 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnAdAction1Img5",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0f1950355b49644",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxLblAdAction1Img5 = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "height": "36dp",
                "id": "rtxLblAdAction1Img5",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "slRichText",
                "text": "Hello\n",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdAction1Img5.add(btnAdAction1Img5, rtxLblAdAction1Img5);
            var flxAdAction2Img5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "6.77%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAdAction2Img5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 5
            }, {}, {});
            flxAdAction2Img5.setDefaultUnit(kony.flex.DP);
            var btnAdAction2Img5 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnAdAction2Img5",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0a618f7ca4fd54f",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxLblAdAction2Img5 = new kony.ui.RichText({
                "centerX": "50%",
                "centerY": "50%",
                "height": "36dp",
                "id": "rtxLblAdAction2Img5",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "slRichText",
                "text": "Hello\n",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAdAction2Img5.add(btnAdAction2Img5, rtxLblAdAction2Img5);
            flxAd5.add(imgAd5, flxAdAction1Img5, flxAdAction2Img5);
            flxScrollContainerAds.add(flxLoadingIndicator, flxAd1, flxAd2, flxAd3, flxAd4, flxAd5);
            var flxCancel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCancel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "12dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "50dp",
                "zIndex": 10
            }, {}, {});
            flxCancel.setDefaultUnit(kony.flex.DP);
            var imgCancel = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "40dp",
                "id": "imgCancel",
                "isVisible": true,
                "skin": "slImage",
                "src": "closecircle.png",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCancel.add(imgCancel);
            var flxProgressBar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "3.25%",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxProgressBar",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 0,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProgressBar.setDefaultUnit(kony.flex.DP);
            var flxProgressButton1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "38%",
                "skin": "sknflxADADADRadius100px",
                "top": "0dp",
                "width": "9dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton1.setDefaultUnit(kony.flex.DP);
            flxProgressButton1.add();
            var flxProgressButton2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "9dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton2.setDefaultUnit(kony.flex.DP);
            flxProgressButton2.add();
            var flxProgressButton3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "9dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton3.setDefaultUnit(kony.flex.DP);
            flxProgressButton3.add();
            var flxProgressButton4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "9dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton4.setDefaultUnit(kony.flex.DP);
            flxProgressButton4.add();
            var flxProgressButton5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxProgressButton5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknflxE3E3E3Radius100px",
                "top": "0dp",
                "width": "9dp",
                "zIndex": 1
            }, {}, {});
            flxProgressButton5.setDefaultUnit(kony.flex.DP);
            flxProgressButton5.add();
            flxProgressBar.add(flxProgressButton1, flxProgressButton2, flxProgressButton3, flxProgressButton4, flxProgressButton5);
            var flxAdActionArea = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAdActionArea",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxAdActionArea.setDefaultUnit(kony.flex.DP);
            flxAdActionArea.add();
            var flxAction1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "17.60%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAction1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 10
            }, {}, {});
            flxAction1.setDefaultUnit(kony.flex.DP);
            flxAction1.add();
            var flxAction2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "6.77%",
                "clipBounds": true,
                "height": "8.75%",
                "id": "flxAction2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18.70%",
                "skin": "slFbox",
                "width": "62.50%",
                "zIndex": 10
            }, {}, {});
            flxAction2.setDefaultUnit(kony.flex.DP);
            flxAction2.add();
            flxAdvertisement.add(flxScrollContainerAds, flxCancel, flxProgressBar, flxAdActionArea, flxAction1, flxAction2);
            this.add(flxAdvertisement);
        };
        return [{
            "addWidgets": addWidgetsfrmFullScreenAds,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmFullScreenAds",
            "init": controller.AS_Form_e9e41545142d482799ccee0a66eb1de3,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_ca3fb3e3374e4041a51a249a1d6e666b,
            "skin": "sknFrmf9f9f9"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});