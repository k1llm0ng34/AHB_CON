define("AuthModule/frmAHBRegFaceId", function() {
    return function(controller) {
        function addWidgetsfrmAHBRegFaceId() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var MainHeader = new com.ahb.common.Head.MainHeaderCopy2({
                "clipBounds": true,
                "height": "4%",
                "id": "MainHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "2.02%",
                "width": "100%"
            }, {}, {});
            MainHeader.lblHeading.i18n_text = "kony.i18n.getLocalizedString(\"kony.ahb.Registration.RegistrationHeading\")";
            var flxPageProgress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0.50%",
                "id": "flxPageProgress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "14.95%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0fe70d8386af946",
                "top": "3.70%",
                "width": "70.20%",
                "zIndex": 1
            }, {}, {});
            flxPageProgress.setDefaultUnit(kony.flex.DP);
            var imgProgress1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgProgress1",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage0be355ea741df40",
                "src": "line1_2.png",
                "top": "0dp",
                "width": "25%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgProgress2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgProgress2",
                "isVisible": true,
                "left": "25%",
                "skin": "slImage0be355ea741df40",
                "src": "line1_1_2.png",
                "top": "0%",
                "width": "25%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgProgress3 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgProgress3",
                "isVisible": true,
                "left": "50%",
                "skin": "slImage0be355ea741df40",
                "src": "line1_1_2.png",
                "top": "0%",
                "width": "25%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgProgress4 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgProgress4",
                "isVisible": true,
                "left": "75%",
                "skin": "slImage0be355ea741df40",
                "src": "line1_1_2.png",
                "top": "0%",
                "width": "25%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPageProgress.add(imgProgress1, imgProgress2, imgProgress3, imgProgress4);
            var lblAllSet = new kony.ui.Label({
                "centerX": "50%",
                "height": "4.35%",
                "id": "lblAllSet",
                "isVisible": true,
                "left": "9.40%",
                "skin": "sknLblAHBGSC24pt363836",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.ahb.Registration.AllSetMsg\")",
                "textStyle": {},
                "top": "8.40%",
                "width": "72.60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxAllSet = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "27%",
                "id": "flxAllSet",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "slFbox",
                "top": "11.60%",
                "width": "48.86%",
                "zIndex": 1
            }, {}, {});
            flxAllSet.setDefaultUnit(kony.flex.DP);
            flxAllSet.add();
            var btnEnable = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknAHBGsc16ptBff6d00TffffffBr21pt",
                "height": "7%",
                "id": "btnEnable",
                "isVisible": true,
                "left": "85dp",
                "skin": "sknAHBGsc16ptBff6d00TffffffBr21pt",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.ahb.Registration.EnableFace\")",
                "top": "18.67%",
                "width": "83%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSkip = new kony.ui.Label({
                "centerX": "50%",
                "height": "2.85%",
                "id": "lblSkip",
                "isVisible": true,
                "left": "146dp",
                "skin": "CopysknLblAHBGSC5",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.ahb.common.skip\")",
                "textStyle": {},
                "top": "3.60%",
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
            flxMain.add(MainHeader, flxPageProgress, lblAllSet, flxAllSet, btnEnable, lblSkip);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAHBRegFaceId,
            "enabledForIdleTimeout": false,
            "id": "frmAHBRegFaceId",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});