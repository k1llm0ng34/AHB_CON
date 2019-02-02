define("frmOnBoarding", function() {
    return function(controller) {
        function addWidgetsfrmOnBoarding() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxProgressBackgroundHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressBackgroundHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxda8b08Op20",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxProgressBackgroundHeader.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundHeader.add();
            var flxProgressHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "right": "90%",
                "skin": "sknFlxda8b08",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxProgressHeader.setDefaultUnit(kony.flex.DP);
            flxProgressHeader.add();
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            customHeader.btnRight.isVisible = true;
            customHeader.btnRight.text = "CANCEL";
            customHeader.height = "100%";
            customHeader.flxBack.isVisible = false;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Sign Up";
            flxHeader.add(flxProgressBackgroundHeader, flxProgressHeader, customHeader);
            var flxLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLanding",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxLanding.setDefaultUnit(kony.flex.DP);
            var flxUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "flxUser",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxf8f8f8",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUser.setDefaultUnit(kony.flex.DP);
            var btnLogoutLanding = new kony.ui.Button({
                "height": "40dp",
                "id": "btnLogoutLanding",
                "isVisible": true,
                "right": "6.25%",
                "skin": "sknBtn0095e428px",
                "text": "LOGOUT",
                "top": "5%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxUserImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "flxUserImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxProfileImage",
                "top": "0dp",
                "width": "47dp",
                "zIndex": 1
            }, {}, {});
            flxUserImage.setDefaultUnit(kony.flex.DP);
            var imgUser = new kony.ui.Image2({
                "height": "100%",
                "id": "imgUser",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "userimg.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUserImage.add(imgUser);
            var lblLandingTitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblLandingTitle",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Hi!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLandingSubtitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblLandingSubtitle",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "You are already our banking customer",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "82%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUser.add(btnLogoutLanding, flxUserImage, lblLandingTitle, lblLandingSubtitle);
            var flxShadowUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowUser",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowUser.setDefaultUnit(kony.flex.DP);
            flxShadowUser.add();
            var flxProgressLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18%",
                "id": "flxProgressLanding",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProgressLanding.setDefaultUnit(kony.flex.DP);
            var flxProgressBackgroundLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "13dp",
                "id": "flxProgressBackgroundLanding",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "sknFlxffffffBorderda8b08",
                "top": "31dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxProgressBackgroundLanding.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundLanding.add();
            var flxProgressValueLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "13dp",
                "id": "flxProgressValueLanding",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10%",
                "skin": "sknFlxda8b08BorderRounded",
                "top": "31dp",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flxProgressValueLanding.setDefaultUnit(kony.flex.DP);
            flxProgressValueLanding.add();
            var lblProgressLanding = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblProgressLanding",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "You are just a few steps closer to finishing your Signup",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "65dp",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxProgressLanding.add(flxProgressBackgroundLanding, flxProgressValueLanding, lblProgressLanding);
            var btnLandingOne = new kony.ui.Button({
                "centerX": "50%",
                "height": "40dp",
                "id": "btnLandingOne",
                "isVisible": true,
                "skin": "sknBtn0095e426pxEnabled",
                "text": "LOGIN HERE",
                "top": "10%",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "26dp",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxe9e9e9Rounded",
                "top": "6.50%",
                "width": "26dp",
                "zIndex": 1
            }, {}, {});
            flxOr.setDefaultUnit(kony.flex.DP);
            var lblOr = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "45%",
                "id": "lblOr",
                "isVisible": true,
                "skin": "sknlbl727272SSPSSP79pr",
                "text": "OR",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxOr.add(lblOr);
            var btnLandingTwo = new kony.ui.Button({
                "centerX": "50%",
                "height": "40dp",
                "id": "btnLandingTwo",
                "isVisible": true,
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": "CHANGE PHONE NUMBER",
                "top": "6.50%",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLanding.add(flxUser, flxShadowUser, flxProgressLanding, btnLandingOne, flxOr, btnLandingTwo);
            var flxTermsConditions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTermsConditions",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxTermsConditions.setDefaultUnit(kony.flex.DP);
            var flxHeaderTermsConditions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxHeaderTermsConditions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderTermsConditions.setDefaultUnit(kony.flex.DP);
            var customHeaderTermsConditions = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "customHeaderTermsConditions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            customHeaderTermsConditions.height = "100%";
            customHeaderTermsConditions.flxBack.isVisible = true;
            customHeaderTermsConditions.flxSearch.isVisible = false;
            customHeaderTermsConditions.lblLocateUs.text = "TERMS AND CONDITIONS";
            flxHeaderTermsConditions.add(customHeaderTermsConditions);
            var rtxTermsConditionsValue = new kony.ui.RichText({
                "id": "rtxTermsConditionsValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknRtx424242SSP26px",
                "text": "By accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions. The material available on these sites has been produced by independent providers and are not the opinions or recommendations of kony Mobile Banking. Proin elit quam, feugiat quis sem eu, euismod feugiat lacus. Donec posuere sapien eu auctor lacinia. Quisque dictum augue nec auctor venenatis. Cras tincidunt tristique mauris, non tincidunt metus elementum quis.</br></br>\n\nBy accessing the information provided at the Kony Mobile Banking site, you agree to the following terms and conditions.",
                "top": "2%",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTermsConditions.add(flxHeaderTermsConditions, rtxTermsConditionsValue);
            var flxResult = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxResult",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResult.setDefaultUnit(kony.flex.DP);
            var imgResult = new kony.ui.Image2({
                "centerX": "50%",
                "height": "61dp",
                "id": "imgResult",
                "isVisible": true,
                "left": "136dp",
                "skin": "slImage",
                "src": "error.png",
                "top": "31%",
                "width": "61dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxResultTexts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxResultTexts",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "40%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResultTexts.setDefaultUnit(kony.flex.DP);
            var rtxTitle = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxTitle",
                "isVisible": true,
                "left": "155dp",
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSP26px",
                "text": "Congratulations John!\nYour account is now active",
                "top": "20dp",
                "width": "76%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSubTitle = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "lblSubTitle",
                "isVisible": true,
                "left": "160dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "76%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxResultTexts.add(rtxTitle, lblSubTitle);
            var btnContinueResult = new kony.ui.Button({
                "bottom": "14%",
                "height": "40dp",
                "id": "btnContinueResult",
                "isVisible": true,
                "right": "6.25%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "CONTINUE",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancelResult = new kony.ui.Button({
                "bottom": "4%",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnCancelResult",
                "isVisible": true,
                "skin": "sknBtn0095e428px",
                "text": "CANCEL",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCallNow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxCallNow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_b4a7e1b4ab554610b8dbc0adc0a54b69,
                "skin": "sknFlxBorder3e4f564px",
                "width": "87.50%",
                "zIndex": 3
            }, {}, {});
            flxCallNow.setDefaultUnit(kony.flex.DP);
            var imgCallNow = new kony.ui.Image2({
                "centerX": "40%",
                "centerY": "50%",
                "height": "22dp",
                "id": "imgCallNow",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "entercvvicon.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCallNow = new kony.ui.Label({
                "centerX": "55%",
                "centerY": "50%",
                "id": "lblCallNow",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": "CALL NOW",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCallNow.add(imgCallNow, lblCallNow);
            flxResult.add(imgResult, flxResultTexts, btnContinueResult, btnCancelResult, flxCallNow);
            var flxSignature = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSignature",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSignature.setDefaultUnit(kony.flex.DP);
            flxSignature.add();
            var flxPopupDocuments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopupDocuments",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxPopupDocuments.setDefaultUnit(kony.flex.DP);
            var flxPopupDocumentsActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "7%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxPopupDocumentsActions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "sknFlxPopupDocuments",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxPopupDocumentsActions.setDefaultUnit(kony.flex.DP);
            var btnTakeAPicture = new kony.ui.Button({
                "height": "50%",
                "id": "btnTakeAPicture",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": "TAKE A PICTURE",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSeparatorPopupDocuments = new kony.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "lblSeparatorPopupDocuments",
                "isVisible": true,
                "left": "-2%",
                "skin": "sknLbl0095e4SSPRegular26px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-1dp",
                "width": "105%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnChooseFromGallery = new kony.ui.Button({
                "height": "50%",
                "id": "btnChooseFromGallery",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": "CHOOSE FROM GALLERY",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPopupDocumentsActions.add(btnTakeAPicture, lblSeparatorPopupDocuments, btnChooseFromGallery);
            flxPopupDocuments.add(flxPopupDocumentsActions);
            var flxPopupFillingComplete = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopupFillingComplete",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxPopupFillingComplete.setDefaultUnit(kony.flex.DP);
            var flxPopupFillingCompleteWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "7%",
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "116dp",
                "id": "flxPopupFillingCompleteWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "sknFlxPopupDocuments",
                "width": "245dp",
                "zIndex": 1
            }, {}, {});
            flxPopupFillingCompleteWrapper.setDefaultUnit(kony.flex.DP);
            var rtxCompleteMessage = new kony.ui.RichText({
                "centerX": "50%",
                "height": "74dp",
                "id": "rtxCompleteMessage",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSP24px",
                "text": "You have finished filling the application, you can no longer make changes.<br/>Do you wish to continue?",
                "top": "0dp",
                "width": "90%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSeparatorComplete = new kony.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "lblSeparatorComplete",
                "isVisible": true,
                "left": "-2%",
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "105%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxPopupCompleteActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "41dp",
                "id": "flxPopupCompleteActions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "sknFlxPopupDocuments",
                "width": "245dp",
                "zIndex": 1
            }, {}, {});
            flxPopupCompleteActions.setDefaultUnit(kony.flex.DP);
            var btnCompleteCancel = new kony.ui.Button({
                "height": "100%",
                "id": "btnCompleteCancel",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": "CANCEL",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSeparatorContinueTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblSeparatorContinueTwo",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-1dp",
                "width": "1dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnCompleteContinue = new kony.ui.Button({
                "height": "100%",
                "id": "btnCompleteContinue",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": "CONTINUE",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPopupCompleteActions.add(btnCompleteCancel, lblSeparatorContinueTwo, btnCompleteContinue);
            flxPopupFillingCompleteWrapper.add(rtxCompleteMessage, lblSeparatorComplete, flxPopupCompleteActions);
            flxPopupFillingComplete.add(flxPopupFillingCompleteWrapper);
            var flxSelectProducts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSelectProducts",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSelectProducts.setDefaultUnit(kony.flex.DP);
            var flxHeaderSelectProducts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxHeaderSelectProducts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderSelectProducts.setDefaultUnit(kony.flex.DP);
            var flxProgressBackgroundSelectProducts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressBackgroundSelectProducts",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxda8b08Op20",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProgressBackgroundSelectProducts.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundSelectProducts.add();
            var flxProgressSelectProducts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressSelectProducts",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "right": "90%",
                "skin": "sknFlxda8b08",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProgressSelectProducts.setDefaultUnit(kony.flex.DP);
            flxProgressSelectProducts.add();
            var lblHeaderSelectProducts = new kony.ui.Label({
                "bottom": "16%",
                "centerX": "50%",
                "id": "lblHeaderSelectProducts",
                "isVisible": true,
                "skin": "sknLbla0a0a022px",
                "text": "Your progress will be saved",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeaderSelectProducts.add(flxProgressBackgroundSelectProducts, flxProgressSelectProducts, lblHeaderSelectProducts);
            var flxSelectProductsWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "82%",
                "id": "flxSelectProductsWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectProductsWrapper.setDefaultUnit(kony.flex.DP);
            var txtSearchProducts = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtSearchProducts",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Search Products...",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2%",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgSearchProducts = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgSearchProducts",
                "isVisible": true,
                "right": "8%",
                "skin": "slImage",
                "src": "searchicon.png",
                "top": "-30dp",
                "width": "20dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var segSelectProducts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "btnViewDetails": "VIEW DETAILS",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "A straightforward personal checking solution…",
                    "lblProductSubTitle": "Checking Account",
                    "lblProductTitle": "Classic Checking Account"
                }, {
                    "btnViewDetails": "VIEW DETAILS",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "Interest earning account with higher balance req…",
                    "lblProductSubTitle": "Checking Account",
                    "lblProductTitle": "Interest Checking"
                }, {
                    "btnViewDetails": "VIEW DETAILS",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "A simple personal savings account with low minim…",
                    "lblProductSubTitle": "Savings Account",
                    "lblProductTitle": "Regular Savings"
                }, {
                    "btnViewDetails": "VIEW DETAILS",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "High Interest earning account with higher balance…",
                    "lblProductSubTitle": "Savings Account",
                    "lblProductTitle": "Premium Savings Account"
                }],
                "groupCells": false,
                "height": "87%",
                "id": "segSelectProducts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSelectProduct",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "3.30%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnViewDetails": "btnViewDetails",
                    "flxSelectProduct": "flxSelectProduct",
                    "flxShadowUser": "flxShadowUser",
                    "imgCheckbox": "imgCheckbox",
                    "lblProductInfo": "lblProductInfo",
                    "lblProductSubTitle": "lblProductSubTitle",
                    "lblProductTitle": "lblProductTitle"
                },
                "width": "100%",
                "zIndex": 3
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectProductsWrapper.add(txtSearchProducts, imgSearchProducts, segSelectProducts);
            var btnContinueSelectProducts = new kony.ui.Button({
                "bottom": "3%",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnContinueSelectProducts",
                "isVisible": true,
                "skin": "sknBtnOnBoardingInactive",
                "text": "CONTINUE",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectProducts.add(flxHeaderSelectProducts, flxSelectProductsWrapper, btnContinueSelectProducts);
            var flxProductDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxProductDetails",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxProductDetails.setDefaultUnit(kony.flex.DP);
            var flxHeaderProductDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxHeaderProductDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderProductDetails.setDefaultUnit(kony.flex.DP);
            var customHeaderProductDetails = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "customHeaderProductDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            customHeaderProductDetails.height = "100%";
            customHeaderProductDetails.flxBack.isVisible = true;
            customHeaderProductDetails.flxBack.top = "0dp";
            customHeaderProductDetails.flxSearch.isVisible = false;
            customHeaderProductDetails.imgBack.src = "cancelicon.png";
            customHeaderProductDetails.lblLocateUs.text = "REGULAR SAVINGS";
            flxHeaderProductDetails.add(customHeaderProductDetails);
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
            var flxProductDetailsTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxProductDetailsTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3Shadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxProductDetailsTabs.setDefaultUnit(kony.flex.DP);
            var btnFeatures = new kony.ui.Button({
                "height": "100%",
                "id": "btnFeatures",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtnffffff424242SSP24px",
                "text": "FEATURES",
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCharges = new kony.ui.Button({
                "centerX": "50%",
                "height": "100%",
                "id": "btnCharges",
                "isVisible": true,
                "skin": "sknBtnffffff424242SSP24px",
                "text": "CHARGES",
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnInfo = new kony.ui.Button({
                "height": "100%",
                "id": "btnInfo",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknBtnffffff424242SSP24px",
                "text": "INFO",
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFeaturesSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxFeaturesSelected",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 4
            }, {}, {});
            flxFeaturesSelected.setDefaultUnit(kony.flex.DP);
            flxFeaturesSelected.add();
            var flxChargesSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxChargesSelected",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 4
            }, {}, {});
            flxChargesSelected.setDefaultUnit(kony.flex.DP);
            flxChargesSelected.add();
            var flxInfoSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxInfoSelected",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 4
            }, {}, {});
            flxInfoSelected.setDefaultUnit(kony.flex.DP);
            flxInfoSelected.add();
            flxProductDetailsTabs.add(btnFeatures, btnCharges, btnInfo, flxFeaturesSelected, flxChargesSelected, flxInfoSelected);
            var segProductDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "About Product",
                    "rtxData": "RichText"
                }, {
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "Benifits",
                    "rtxData": "RichText"
                }, {
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "Additional Features",
                    "rtxData": "RichText"
                }],
                "groupCells": false,
                "id": "segProductDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxProductDetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-15dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FlexContainer0je14ed46783344": "FlexContainer0je14ed46783344",
                    "btnShowMore": "btnShowMore",
                    "flxProductDetails": "flxProductDetails",
                    "lblSubTitle": "lblSubTitle",
                    "lblTitle": "lblTitle",
                    "rtxData": "rtxData"
                },
                "width": "100%",
                "zIndex": 3
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProductDetails.add(flxHeaderProductDetails, flxSeparatorHeader, flxProductDetailsTabs, segProductDetails);
            var flxPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPersonalInfo",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPersonalInfo.setDefaultUnit(kony.flex.DP);
            var flxHeaderPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxHeaderPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderPersonalInfo.setDefaultUnit(kony.flex.DP);
            var flxProgressBackgroundPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressBackgroundPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxda8b08Op20",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxProgressBackgroundPersonalInfo.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundPersonalInfo.add();
            var flxProgressPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "right": "90%",
                "skin": "sknFlxda8b08",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxProgressPersonalInfo.setDefaultUnit(kony.flex.DP);
            flxProgressPersonalInfo.add();
            var lblPersonalInfoSubtitle = new kony.ui.Label({
                "bottom": "10%",
                "centerX": "50%",
                "id": "lblPersonalInfoSubtitle",
                "isVisible": true,
                "skin": "sknLbla0a0a022px",
                "text": "Your progress will be saved",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var customHeaderPersonalInfo = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "customHeaderPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            customHeaderPersonalInfo.btnRight.isVisible = true;
            customHeaderPersonalInfo.btnRight.text = "LOGOUT";
            customHeaderPersonalInfo.height = "100%";
            customHeaderPersonalInfo.zIndex = 1;
            customHeaderPersonalInfo.flxBack.isVisible = true;
            customHeaderPersonalInfo.flxBack.width = "10%";
            customHeaderPersonalInfo.flxBack.zIndex = 2;
            customHeaderPersonalInfo.flxSearch.isVisible = false;
            customHeaderPersonalInfo.lblLocateUs.centerY = "50%";
            customHeaderPersonalInfo.lblLocateUs.text = "Personal Info";
            flxHeaderPersonalInfo.add(flxProgressBackgroundPersonalInfo, flxProgressPersonalInfo, lblPersonalInfoSubtitle, customHeaderPersonalInfo);
            var flxViewPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxViewPersonalInfo",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewPersonalInfo.setDefaultUnit(kony.flex.DP);
            var flxHeaderViewPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderViewPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxfafafa",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderViewPersonalInfo.setDefaultUnit(kony.flex.DP);
            var lblCapturedDataTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCapturedDataTitle",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "Captured Data",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnEditPersonalInfo = new kony.ui.Button({
                "centerY": "50%",
                "height": "100%",
                "id": "btnEditPersonalInfo",
                "isVisible": true,
                "right": "6.25%",
                "skin": "sknBtn0095e428px",
                "text": "EDIT",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHeaderViewPersonalInfo.add(lblCapturedDataTitle, btnEditPersonalInfo);
            var lblFirstNameTitle = new kony.ui.Label({
                "id": "lblFirstNameTitle",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": "First Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblFirstNameValue = new kony.ui.Label({
                "id": "lblFirstNameValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "Bruce",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLastNameTitle = new kony.ui.Label({
                "id": "lblLastNameTitle",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": "Last Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLastNameValue = new kony.ui.Label({
                "id": "lblLastNameValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "John",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDateOfBirthTitle = new kony.ui.Label({
                "id": "lblDateOfBirthTitle",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": "Date of Birth",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDateOfBirthValue = new kony.ui.Label({
                "id": "lblDateOfBirthValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "03 / 11 / 2017",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblGenderTitle = new kony.ui.Label({
                "id": "lblGenderTitle",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": "Gender",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblGenderValue = new kony.ui.Label({
                "id": "lblGenderValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "Male",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAddressTitle = new kony.ui.Label({
                "id": "lblAddressTitle",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": "Address",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAddressValue = new kony.ui.Label({
                "id": "lblAddressValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "2211 North Orange Blossom Trail, Orlando, FL, United States",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxViewPersonalInfo.add(flxHeaderViewPersonalInfo, lblFirstNameTitle, lblFirstNameValue, lblLastNameTitle, lblLastNameValue, lblDateOfBirthTitle, lblDateOfBirthValue, lblGenderTitle, lblGenderValue, lblAddressTitle, lblAddressValue);
            var btnContinuePersonalInfo = new kony.ui.Button({
                "bottom": "10%",
                "height": "40dp",
                "id": "btnContinuePersonalInfo",
                "isVisible": false,
                "right": "6.25%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "CONTINUE",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnChangeIDPersonalInfo = new kony.ui.Button({
                "bottom": "4%",
                "centerX": "50%",
                "id": "btnChangeIDPersonalInfo",
                "isVisible": false,
                "skin": "sknBtn0095e428px",
                "text": "CHANGE ID",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEnterPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "93%",
                "id": "flxEnterPersonalInfo",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPersonalInfo.setDefaultUnit(kony.flex.DP);
            var flxEnterPersonalInfoHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxEnterPersonalInfoHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxfafafa",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPersonalInfoHeader.setDefaultUnit(kony.flex.DP);
            var lblEnterPersonalInfoHeader = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEnterPersonalInfoHeader",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Enter your Phone Number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEnterPersonalInfoHeader.add(lblEnterPersonalInfoHeader);
            var flxFirstLastName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "200dp",
                "id": "flxFirstLastName",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "30dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFirstLastName.setDefaultUnit(kony.flex.DP);
            var lblEnterPersonalInfoFirstNameTitle = new kony.ui.Label({
                "id": "lblEnterPersonalInfoFirstNameTitle",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLbl424242SSP26px",
                "text": "First Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtFirstName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "30dp",
                "id": "txtFirstName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Enter first name",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28pxNoBorder",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBorderFirstName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderFirstName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxBorderFirstName.setDefaultUnit(kony.flex.DP);
            flxBorderFirstName.add();
            var lblEnterPersonalInfoLastNameTitle = new kony.ui.Label({
                "id": "lblEnterPersonalInfoLastNameTitle",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLbl424242SSP26px",
                "text": "Last Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtLastName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "30dp",
                "id": "txtLastName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Enter last name",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28pxNoBorder",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBorderLastName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderLastName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxBorderLastName.setDefaultUnit(kony.flex.DP);
            flxBorderLastName.add();
            flxFirstLastName.add(lblEnterPersonalInfoFirstNameTitle, txtFirstName, flxBorderFirstName, lblEnterPersonalInfoLastNameTitle, txtLastName, flxBorderLastName);
            var flxEmploymentInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "220dp",
                "id": "flxEmploymentInfo",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "30dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmploymentInfo.setDefaultUnit(kony.flex.DP);
            var flxExtractLinkedIn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxExtractLinkedIn",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "sknFlxRounded3e4f56Op10Border",
                "top": "0dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxExtractLinkedIn.setDefaultUnit(kony.flex.DP);
            var imgLinkedIn = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgLinkedIn",
                "isVisible": true,
                "left": "23%",
                "skin": "slImage",
                "src": "dashboardicon.png",
                "top": "17dp",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblExtractLinkedIn = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblExtractLinkedIn",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLbl424242SSP26px",
                "text": "EXTRACT FROM LINKEDIN",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxExtractLinkedIn.add(imgLinkedIn, lblExtractLinkedIn);
            var flxOrEmploymentInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": true,
                "height": "26dp",
                "id": "flxOrEmploymentInfo",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxe9e9e9Rounded",
                "top": "15dp",
                "width": "26dp",
                "zIndex": 1
            }, {}, {});
            flxOrEmploymentInfo.setDefaultUnit(kony.flex.DP);
            var lblOrEmploymentInfo = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "45%",
                "id": "lblOrEmploymentInfo",
                "isVisible": true,
                "skin": "sknlbl727272SSPSSP79pr",
                "text": "OR",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxOrEmploymentInfo.add(lblOrEmploymentInfo);
            var lblCompanyTitle = new kony.ui.Label({
                "id": "lblCompanyTitle",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl424242SSP26px",
                "text": "Company",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtCompany = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtCompany",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Enter here",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBorderCompany = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderCompany",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxBorderCompany.setDefaultUnit(kony.flex.DP);
            flxBorderCompany.add();
            var lblJobTitle = new kony.ui.Label({
                "id": "lblJobTitle",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl424242SSP26px",
                "text": "Job Title ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtJobTitle = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtJobTitle",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Enter here",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBorderJobTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderJobTitle",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxBorderJobTitle.setDefaultUnit(kony.flex.DP);
            flxBorderJobTitle.add();
            flxEmploymentInfo.add(flxExtractLinkedIn, flxOrEmploymentInfo, lblCompanyTitle, txtCompany, flxBorderCompany, lblJobTitle, txtJobTitle, flxBorderJobTitle);
            var flxSpouseName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "200dp",
                "id": "flxSpouseName",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "60dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSpouseName.setDefaultUnit(kony.flex.DP);
            var lblSpouseFirstNameTitle = new kony.ui.Label({
                "id": "lblSpouseFirstNameTitle",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl424242SSP26px",
                "text": "First Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtSpouseFirstName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtSpouseFirstName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Enter first name",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBorderSpouseFirstName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderSpouseFirstName",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxBorderSpouseFirstName.setDefaultUnit(kony.flex.DP);
            flxBorderSpouseFirstName.add();
            var lblSpouseLastNameTitle = new kony.ui.Label({
                "id": "lblSpouseLastNameTitle",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl424242SSP26px",
                "text": "Last Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtSpouseLastName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtSpouseLastName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Enter last name",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBorderSpouseLastName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderSpouseLastName",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxBorderSpouseLastName.setDefaultUnit(kony.flex.DP);
            flxBorderSpouseLastName.add();
            flxSpouseName.add(lblSpouseFirstNameTitle, txtSpouseFirstName, flxBorderSpouseFirstName, lblSpouseLastNameTitle, txtSpouseLastName, flxBorderSpouseLastName);
            var flxDependents = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "90%",
                "id": "flxDependents",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "f9f9",
                "top": "50dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxDependents.setDefaultUnit(kony.flex.DP);
            var segDependents = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "btnOption": "Button"
                }, {
                    "btnOption": "Button"
                }, {
                    "btnOption": "Button"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segDependents",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxOnBoardingOption",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnOption": "btnOption",
                    "flxOnBoardingOption": "flxOnBoardingOption"
                },
                "width": "100%",
                "zIndex": 3
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDependents.add(segDependents);
            var flxDOB = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxDOB",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "110dp",
                "width": "190dp",
                "zIndex": 1
            }, {}, {});
            flxDOB.setDefaultUnit(kony.flex.DP);
            var lblPersonalInfoDOBOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblPersonalInfoDOBOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "D",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPersonalInfoDOBTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblPersonalInfoDOBTwo",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "D",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPersonalInfoDOBSlash = new kony.ui.Label({
                "height": "100%",
                "id": "lblPersonalInfoDOBSlash",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "/",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPersonalInfoDOBThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblPersonalInfoDOBThree",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "M",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPersonalInfoDOBFour = new kony.ui.Label({
                "height": "100%",
                "id": "lblPersonalInfoDOBFour",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "M",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPersonalInfoDOBSlashTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblPersonalInfoDOBSlashTwo",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "/",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPersonalInfoDOBFive = new kony.ui.Label({
                "height": "100%",
                "id": "lblPersonalInfoDOBFive",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "Y",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPersonalInfoDOBSix = new kony.ui.Label({
                "height": "100%",
                "id": "lblPersonalInfoDOBSix",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "Y",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPersonalInfoDOBSeven = new kony.ui.Label({
                "height": "100%",
                "id": "lblPersonalInfoDOBSeven",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "Y",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPersonalInfoDOBEight = new kony.ui.Label({
                "height": "100%",
                "id": "lblPersonalInfoDOBEight",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "Y",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDOB.add(lblPersonalInfoDOBOne, lblPersonalInfoDOBTwo, lblPersonalInfoDOBSlash, lblPersonalInfoDOBThree, lblPersonalInfoDOBFour, lblPersonalInfoDOBSlashTwo, lblPersonalInfoDOBFive, lblPersonalInfoDOBSix, lblPersonalInfoDOBSeven, lblPersonalInfoDOBEight);
            var flxDocuments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDocuments",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxDocuments.setDefaultUnit(kony.flex.DP);
            var flxDocumentsWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "61%",
                "id": "flxDocumentsWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDocumentsWrapper.setDefaultUnit(kony.flex.DP);
            var flxHeaderDocuments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxHeaderDocuments",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxfafafa",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderDocuments.setDefaultUnit(kony.flex.DP);
            var lblHeaderDocuments = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHeaderDocuments",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Please provide the following to process your application",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeaderDocuments.add(lblHeaderDocuments);
            var flxAddressProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxAddressProof",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxBorder3e4f564px",
                "top": "33dp",
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flxAddressProof.setDefaultUnit(kony.flex.DP);
            var lblAddressProofTitle = new kony.ui.Label({
                "id": "lblAddressProofTitle",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl424242SSP26px",
                "text": "Address Proof",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAddressProofInfo = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblAddressProofInfo",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbla0a0a022px",
                "text": "Voter ID, Driver's License, Utility Bill",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgAddressProof = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "imgAddressProof",
                "isVisible": true,
                "right": "5%",
                "skin": "slImage",
                "src": "addicon.png",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAddressProof.add(lblAddressProofTitle, lblAddressProofInfo, imgAddressProof);
            var flxEmploymentProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxEmploymentProof",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxBorder3e4f564px",
                "top": "15dp",
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flxEmploymentProof.setDefaultUnit(kony.flex.DP);
            var lblEmploymentProofTitle = new kony.ui.Label({
                "id": "lblEmploymentProofTitle",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl424242SSP26px",
                "text": "Employment Proof",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEmploymentProofInfo = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblEmploymentProofInfo",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbla0a0a022px",
                "text": "Pay Slip, Office ID",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgEmploymentProof = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "imgEmploymentProof",
                "isVisible": true,
                "right": "5%",
                "skin": "slImage",
                "src": "addicon.png",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmploymentProof.add(lblEmploymentProofTitle, lblEmploymentProofInfo, imgEmploymentProof);
            var flxIncomeProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxIncomeProof",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxBorder3e4f564px",
                "top": "15dp",
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flxIncomeProof.setDefaultUnit(kony.flex.DP);
            var lblIncomeProofTitle = new kony.ui.Label({
                "id": "lblIncomeProofTitle",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl424242SSP26px",
                "text": "Income Proof ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblIncomeProofInfo = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblIncomeProofInfo",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbla0a0a022px",
                "text": "Pay Slip, Tax Statement",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgIncomeProof = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "imgIncomeProof",
                "isVisible": true,
                "right": "5%",
                "skin": "slImage",
                "src": "addicon.png",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxIncomeProof.add(lblIncomeProofTitle, lblIncomeProofInfo, imgIncomeProof);
            var lblDocumentsInfo = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDocumentsInfo",
                "isVisible": true,
                "skin": "sknLbla0a0a022px",
                "text": "This step can be completed later",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDocumentsWrapper.add(flxHeaderDocuments, flxAddressProof, flxEmploymentProof, flxIncomeProof, lblDocumentsInfo);
            var btnContinueDocuments = new kony.ui.Button({
                "bottom": "10%",
                "height": "40dp",
                "id": "btnContinueDocuments",
                "isVisible": true,
                "right": "6.25%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "CONTINUE",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSkipDocuments = new kony.ui.Button({
                "bottom": "4%",
                "centerX": "50%",
                "id": "btnSkipDocuments",
                "isVisible": true,
                "skin": "sknBtn0095e428px",
                "text": "SKIP",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDocuments.add(flxDocumentsWrapper, btnContinueDocuments, btnSkipDocuments);
            var lblEnterPersonalInfoError = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterPersonalInfoError",
                "isVisible": false,
                "skin": "sknLblF54B5E24px",
                "text": "Incorrect entry, try again ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "160dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnContinueEnterPersonalInfo = new kony.ui.Button({
                "bottom": "40%",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnContinueEnterPersonalInfo",
                "isVisible": true,
                "skin": "sknBtnOnBoardingInactive",
                "text": "CONTINUE",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxResidentialAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "93%",
                "id": "flxResidentialAddress",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "40dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxResidentialAddress.setDefaultUnit(kony.flex.DP);
            var flxResidentialAddressWrapper = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "88%",
                "horizontalScrollIndicator": true,
                "id": "flxResidentialAddressWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxResidentialAddressWrapper.setDefaultUnit(kony.flex.DP);
            var txtSearchResidentialAddress = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "35dp",
                "id": "txtSearchResidentialAddress",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Search by zipcode, city, street...",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2%",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgResidentialAddressIcon = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgResidentialAddressIcon",
                "isVisible": true,
                "right": "10%",
                "skin": "slImage",
                "src": "searchicon.png",
                "top": "-28dp",
                "width": "20dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblResidentialAddressLineOne = new kony.ui.Label({
                "id": "lblResidentialAddressLineOne",
                "isVisible": true,
                "left": "9.30%",
                "skin": "sknLbl424242SSP26px",
                "text": "Address Line 01",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtResidentialAddressLineOne = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "height": "40dp",
                "id": "txtResidentialAddressLineOne",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter here",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblResidentialAddressLineTwo = new kony.ui.Label({
                "id": "lblResidentialAddressLineTwo",
                "isVisible": true,
                "left": "9.30%",
                "skin": "sknLbl424242SSP26px",
                "text": "Address Line 02",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtResidentialAddressLineTwo = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "height": "40dp",
                "id": "txtResidentialAddressLineTwo",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter here",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblResidentialAddressCity = new kony.ui.Label({
                "id": "lblResidentialAddressCity",
                "isVisible": true,
                "left": "9.30%",
                "skin": "sknLbl424242SSP26px",
                "text": "City",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtResidentialAddressCity = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "height": "40dp",
                "id": "txtResidentialAddressCity",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter here",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblResidentialAddressState = new kony.ui.Label({
                "id": "lblResidentialAddressState",
                "isVisible": true,
                "left": "9.30%",
                "skin": "sknLbl424242SSP26px",
                "text": "State",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtResidentialAddressState = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "height": "40dp",
                "id": "txtResidentialAddressState",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter here",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblResidentialAddressZipCode = new kony.ui.Label({
                "id": "lblResidentialAddressZipCode",
                "isVisible": true,
                "left": "9.30%",
                "skin": "sknLbl424242SSP26px",
                "text": "Zip Code",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtResidentialAddressZipCode = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "height": "40dp",
                "id": "txtResidentialAddressZipCode",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter here",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblResidentialAddressDummy = new kony.ui.Label({
                "id": "lblResidentialAddressDummy",
                "isVisible": true,
                "left": "9.30%",
                "skin": "sknLbl424242SSP26px",
                "text": "Zip Code",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtResidentialAddressDummy = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "height": "40dp",
                "id": "txtResidentialAddressDummy",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter here",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxSpaceResidentialAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15dp",
                "id": "flxSpaceResidentialAddress",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSpaceResidentialAddress.setDefaultUnit(kony.flex.DP);
            flxSpaceResidentialAddress.add();
            flxResidentialAddressWrapper.add(txtSearchResidentialAddress, imgResidentialAddressIcon, lblResidentialAddressLineOne, txtResidentialAddressLineOne, lblResidentialAddressLineTwo, txtResidentialAddressLineTwo, lblResidentialAddressCity, txtResidentialAddressCity, lblResidentialAddressState, txtResidentialAddressState, lblResidentialAddressZipCode, txtResidentialAddressZipCode, lblResidentialAddressDummy, txtResidentialAddressDummy, flxSpaceResidentialAddress);
            var btnContinueResidentialAddress = new kony.ui.Button({
                "bottom": "3%",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnContinueResidentialAddress",
                "isVisible": true,
                "skin": "sknBtnOnBoardingInactive",
                "text": "CONTINUE",
                "width": "87%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxResidentialAddress.add(flxResidentialAddressWrapper, btnContinueResidentialAddress);
            flxEnterPersonalInfo.add(flxEnterPersonalInfoHeader, flxFirstLastName, flxEmploymentInfo, flxSpouseName, flxDependents, flxDOB, flxDocuments, lblEnterPersonalInfoError, btnContinueEnterPersonalInfo, flxResidentialAddress);
            flxPersonalInfo.add(flxHeaderPersonalInfo, flxViewPersonalInfo, btnContinuePersonalInfo, btnChangeIDPersonalInfo, flxEnterPersonalInfo);
            var flxSearchAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchAddress",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSearchAddress.setDefaultUnit(kony.flex.DP);
            var flxHeaderSearchAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "14%",
                "id": "flxHeaderSearchAddress",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderSearchAddress.setDefaultUnit(kony.flex.DP);
            var flxHeaderWrapperSearchAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxHeaderWrapperSearchAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderWrapperSearchAddress.setDefaultUnit(kony.flex.DP);
            var lblSearchAddressTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSearchAddressTitle",
                "isVisible": true,
                "skin": "sknLbl0a78d1SSP30px",
                "text": "SEARCH ADDRESS",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnCancelSearchAddress = new kony.ui.Button({
                "centerY": "50%",
                "height": "100%",
                "id": "btnCancelSearchAddress",
                "isVisible": true,
                "right": "6.25%",
                "skin": "sknBtn0095e428px",
                "text": "Cancel",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHeaderWrapperSearchAddress.add(lblSearchAddressTitle, btnCancelSearchAddress);
            var txtSearchAddress = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "35dp",
                "id": "txtSearchAddress",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Search by zipcode, city, street...",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2%",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxHeaderShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            flxHeaderSearchAddress.add(flxHeaderWrapperSearchAddress, txtSearchAddress, flxHeaderShadow);
            var segAddresses = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblAddress": "2211 Oberlin Avenur, Orlando, FL, United States"
                }, {
                    "lblAddress": "2211 Oberlin Avenur Trail, Orlando, FL, United States United States"
                }, {
                    "lblAddress": "2211 Oberlin Avenur, Orlando, FL, United States"
                }],
                "groupCells": false,
                "height": "85.00%",
                "id": "segAddresses",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSearchAddress",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "16%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSearchAddress": "flxSearchAddress",
                    "flxSeparator": "flxSeparator",
                    "lblAddress": "lblAddress"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSearchAddress.add(flxHeaderSearchAddress, segAddresses);
            var flxEnterPhoneNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "61%",
                "id": "flxEnterPhoneNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPhoneNumber.setDefaultUnit(kony.flex.DP);
            var flxEnterPhoneNumberHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxEnterPhoneNumberHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPhoneNumberHeader.setDefaultUnit(kony.flex.DP);
            var lblEnterPhoneNumberHeader = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEnterPhoneNumberHeader",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Enter your Phone Number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEnterPhoneNumberHeader.add(lblEnterPhoneNumberHeader);
            var flxInputPhoneNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInputPhoneNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "90dp",
                "width": "262dp",
                "zIndex": 1
            }, {}, {});
            flxInputPhoneNumber.setDefaultUnit(kony.flex.DP);
            var lblPhoneOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "(",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneTwo",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneThree",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneFour = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneFour",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneFive = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneFive",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": ")",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneSix = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneSix",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneSeven = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneSeven",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneEight = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneEight",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneNine = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneNine",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "-",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneTen = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneTen",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneEleven = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneEleven",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneTwelve = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneTwelve",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneThirteen = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneThirteen",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInputPhoneNumber.add(lblPhoneOne, lblPhoneTwo, lblPhoneThree, lblPhoneFour, lblPhoneFive, lblPhoneSix, lblPhoneSeven, lblPhoneEight, lblPhoneNine, lblPhoneTen, lblPhoneEleven, lblPhoneTwelve, lblPhoneThirteen);
            var btnVerifyPhoneNumber = new kony.ui.Button({
                "bottom": "3%",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnVerifyPhoneNumber",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "CONTINUE",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEnterPhoneNumber.add(flxEnterPhoneNumberHeader, flxInputPhoneNumber, btnVerifyPhoneNumber);
            var flxEnterEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "61%",
                "id": "flxEnterEmail",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterEmail.setDefaultUnit(kony.flex.DP);
            var flxEnterEmailWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEnterEmailWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterEmailWrapper.setDefaultUnit(kony.flex.DP);
            var lblEmailTitle = new kony.ui.Label({
                "id": "lblEmailTitle",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl424242SSP26px",
                "text": "Email",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "50dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtEnterEmail = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "30dp",
                "id": "txtEnterEmail",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "8%",
                "maxTextLength": null,
                "placeholder": "Enter Email",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28pxNoBorder",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBorderEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxBorderEmail.setDefaultUnit(kony.flex.DP);
            flxBorderEmail.add();
            var imgCheckbox = new kony.ui.Image2({
                "height": "18dp",
                "id": "imgCheckbox",
                "isVisible": true,
                "left": "8%",
                "skin": "slImage",
                "src": "remeberme.png",
                "top": "44dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxAgreeTermsConditions = new kony.ui.RichText({
                "id": "rtxAgreeTermsConditions",
                "isVisible": true,
                "left": "16%",
                "skin": "sknRtx424242SSP26px",
                "text": "I agree to your <font color=\"#0095e4\">Terms & Conditions </font>of<br/> online banking",
                "top": "-20dp",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEnterEmailWrapper.add(lblEmailTitle, txtEnterEmail, flxBorderEmail, imgCheckbox, rtxAgreeTermsConditions);
            var btnContinueEmail = new kony.ui.Button({
                "bottom": "3%",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnContinueEmail",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "CONTINUE",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEnterEmail.add(flxEnterEmailWrapper, btnContinueEmail);
            var flxUsernamePassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "61%",
                "id": "flxUsernamePassword",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUsernamePassword.setDefaultUnit(kony.flex.DP);
            var flxUsernamePasswordWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxUsernamePasswordWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUsernamePasswordWrapper.setDefaultUnit(kony.flex.DP);
            var lblUsernameTitle = new kony.ui.Label({
                "id": "lblUsernameTitle",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl424242SSP26px",
                "text": "Username",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblUsernameAvailable = new kony.ui.Label({
                "id": "lblUsernameAvailable",
                "isVisible": false,
                "right": "6%",
                "skin": "sknLbl43CE6E26px",
                "text": "Available",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-16dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtUsername = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtUsername",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Enter username",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBorderUsername = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderUsername",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxBorderUsername.setDefaultUnit(kony.flex.DP);
            flxBorderUsername.add();
            var lblPasswordTitle = new kony.ui.Label({
                "id": "lblPasswordTitle",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl424242SSP26px",
                "text": "Password",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgMaskUnmask = new kony.ui.Image2({
                "height": "18dp",
                "id": "imgMaskUnmask",
                "isVisible": true,
                "right": "8%",
                "skin": "slImage",
                "src": "viewicon.png",
                "top": "15dp",
                "width": "18dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Enter password",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "-30dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBorderPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderPassword",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxBorderPassword.setDefaultUnit(kony.flex.DP);
            flxBorderPassword.add();
            var lblReEnterTitle = new kony.ui.Label({
                "id": "lblReEnterTitle",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl424242SSP26px",
                "text": "Re-enter password",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgPasswordsMatch = new kony.ui.Image2({
                "height": "18dp",
                "id": "imgPasswordsMatch",
                "isVisible": true,
                "right": "8%",
                "skin": "slImage",
                "src": "tickmark.png",
                "top": "15dp",
                "width": "18dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtReEnterPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtReEnterPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Re-enter password",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "-30dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBorderReEnter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderReEnter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxBorderReEnter.setDefaultUnit(kony.flex.DP);
            flxBorderReEnter.add();
            flxUsernamePasswordWrapper.add(lblUsernameTitle, lblUsernameAvailable, txtUsername, flxBorderUsername, lblPasswordTitle, imgMaskUnmask, txtPassword, flxBorderPassword, lblReEnterTitle, imgPasswordsMatch, txtReEnterPassword, flxBorderReEnter);
            var btnContinueUsernamePassword = new kony.ui.Button({
                "bottom": "3%",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnContinueUsernamePassword",
                "isVisible": true,
                "skin": "sknBtnOnBoardingInactive",
                "text": "CONTINUE",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUsernamePassword.add(flxUsernamePasswordWrapper, btnContinueUsernamePassword);
            var flxSecurityQuestions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "93%",
                "id": "flxSecurityQuestions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSecurityQuestions.setDefaultUnit(kony.flex.DP);
            var flxSecurityQuestionsWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSecurityQuestionsWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSecurityQuestionsWrapper.setDefaultUnit(kony.flex.DP);
            var lblQuestionOne = new kony.ui.Label({
                "id": "lblQuestionOne",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl424242SSP26px",
                "text": "What is your blood group",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtQuestionOne = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtQuestionOne",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Answer here",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxShadowQuestionOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowQuestionOne",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxShadowQuestionOne.setDefaultUnit(kony.flex.DP);
            flxShadowQuestionOne.add();
            var lblQuestionTwo = new kony.ui.Label({
                "id": "lblQuestionTwo",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl424242SSP26px",
                "text": "Please enter the last four digits of your tax filing number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtQuestionTwo = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtQuestionTwo",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Answer here",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxShadowQuestionTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowQuestionTwo",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxShadowQuestionTwo.setDefaultUnit(kony.flex.DP);
            flxShadowQuestionTwo.add();
            var lblQuestionThree = new kony.ui.Label({
                "id": "lblQuestionThree",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl424242SSP26px",
                "text": "What is your mother’s maiden name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "18dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtQuestionThree = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "40dp",
                "id": "txtQuestionThree",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Answer here",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxShadowQuestionThree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowQuestionThree",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-5dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxShadowQuestionThree.setDefaultUnit(kony.flex.DP);
            flxShadowQuestionThree.add();
            flxSecurityQuestionsWrapper.add(lblQuestionOne, txtQuestionOne, flxShadowQuestionOne, lblQuestionTwo, txtQuestionTwo, flxShadowQuestionTwo, lblQuestionThree, txtQuestionThree, flxShadowQuestionThree);
            var btnContinueSecurityQuestions = new kony.ui.Button({
                "bottom": "3%",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnContinueSecurityQuestions",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "CONTINUE",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSecurityQuestions.add(flxSecurityQuestionsWrapper, btnContinueSecurityQuestions);
            var flxEnterSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "61%",
                "id": "flxEnterSecurityCode",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterSecurityCode.setDefaultUnit(kony.flex.DP);
            var btnContinueSecurityCode = new kony.ui.Button({
                "bottom": "3%",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnContinueSecurityCode",
                "isVisible": true,
                "skin": "sknBtnOnBoardingInactive",
                "text": "CONTINUE",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEnterSecurityCodeHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxEnterSecurityCodeHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxfafafa",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterSecurityCodeHeader.setDefaultUnit(kony.flex.DP);
            var lblHeaderSecurityCode = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHeaderSecurityCode",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Security Code",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEnterSecurityCodeHeader.add(lblHeaderSecurityCode);
            var flxInputSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInputSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "90dp",
                "width": "90dp",
                "zIndex": 1
            }, {}, {});
            flxInputSecurityCode.setDefaultUnit(kony.flex.DP);
            var lblSecurityCodeOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityCodeOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSecurityCodeTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityCodeTwo",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSecurityCodeThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityCodeThree",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSecurityCodeFour = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityCodeFour",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSecurityCodeFive = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityCodeFive",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInputSecurityCode.add(lblSecurityCodeOne, lblSecurityCodeTwo, lblSecurityCodeThree, lblSecurityCodeFour, lblSecurityCodeFive);
            var lblEnterInfoSubtitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterInfoSubtitle",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Please enter the 5 digit security code sent to your phone",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "50dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnReSend = new kony.ui.Button({
                "centerX": "50%",
                "height": "20dp",
                "id": "btnReSend",
                "isVisible": true,
                "skin": "sknBtn0095e428px",
                "text": "RE-SEND",
                "top": "240dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEnterSecurityCode.add(btnContinueSecurityCode, flxEnterSecurityCodeHeader, flxInputSecurityCode, lblEnterInfoSubtitle, btnReSend);
            var flxEnterSSN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "61%",
                "id": "flxEnterSSN",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterSSN.setDefaultUnit(kony.flex.DP);
            var btnSSNReject = new kony.ui.Button({
                "bottom": "3%",
                "height": "40dp",
                "id": "btnSSNReject",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": "REJECT",
                "width": "42%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSSNAccept = new kony.ui.Button({
                "bottom": "3%",
                "height": "40dp",
                "id": "btnSSNAccept",
                "isVisible": true,
                "right": "6.25%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "ACCEPT",
                "width": "42%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEnterSSNHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxEnterSSNHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxfafafa",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterSSNHeader.setDefaultUnit(kony.flex.DP);
            var lblHeaderEnterSSN = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHeaderEnterSSN",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Enter SSN",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEnterSSNHeader.add(lblHeaderEnterSSN);
            var flxInputSSN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInputSSN",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "90dp",
                "width": "190dp",
                "zIndex": 1
            }, {}, {});
            flxInputSSN.setDefaultUnit(kony.flex.DP);
            var lblSSNOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNTwo",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNThree",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNFour = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNFour",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "-",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNFive = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNFive",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNSix = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNSix",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNSeven = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNSeven",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "-",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNEight = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNEight",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNnine = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNnine",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNTen = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNTen",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNEleven = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNEleven",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLblA0A0A0SSP40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInputSSN.add(lblSSNOne, lblSSNTwo, lblSSNThree, lblSSNFour, lblSSNFive, lblSSNSix, lblSSNSeven, lblSSNEight, lblSSNnine, lblSSNTen, lblSSNEleven);
            var lblEnterSSNInfo = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterSSNInfo",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "I understand that by clicking “ I agree” below, I am providing “written consent” to XYZ bank to obtain information from my personal credit profile, solely for the purposes of pre-qualifying me for credit options.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "45%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEnterSSN.add(btnSSNReject, btnSSNAccept, flxEnterSSNHeader, flxInputSSN, lblEnterSSNInfo);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxKeypad",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxF5F6FB",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxKeypad.setDefaultUnit(kony.flex.DP);
            var flxShadowTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowTwo.setDefaultUnit(kony.flex.DP);
            flxShadowTwo.add();
            var flxKeypadRowOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "24.20%",
                "id": "flxKeypadRowOne",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxKeypadRowOne.setDefaultUnit(kony.flex.DP);
            var btnOne = new kony.ui.Button({
                "height": "100%",
                "id": "btnOne",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_ab2f595176fb46e692b7c9fbdf84bfb0,
                "skin": "sknBtnKeybad",
                "text": "1",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnTwo = new kony.ui.Button({
                "centerX": "50%",
                "height": "100%",
                "id": "btnTwo",
                "isVisible": true,
                "onClick": controller.AS_Button_hffae01f22d8426dbc1d0f494317b8cd,
                "skin": "sknBtnKeybad",
                "text": "2",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnThree = new kony.ui.Button({
                "height": "100%",
                "id": "btnThree",
                "isVisible": true,
                "onClick": controller.AS_Button_i00de53a636c4e04950b30ab75bf5a16,
                "right": "0dp",
                "skin": "sknBtnKeybad",
                "text": "3",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeypadRowOne.add(btnOne, btnTwo, btnThree);
            var flxKeypadRowTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "24.20%",
                "id": "flxKeypadRowTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxKeypadRowTwo.setDefaultUnit(kony.flex.DP);
            var btnFour = new kony.ui.Button({
                "height": "100%",
                "id": "btnFour",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_b6b07dab97b04b328c83db15e10aea89,
                "skin": "sknBtnKeybad",
                "text": "4",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnFive = new kony.ui.Button({
                "centerX": "50%",
                "height": "100%",
                "id": "btnFive",
                "isVisible": true,
                "onClick": controller.AS_Button_affcfe2b6832417ea8f561898481fa36,
                "skin": "sknBtnKeybad",
                "text": "5",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSix = new kony.ui.Button({
                "height": "100%",
                "id": "btnSix",
                "isVisible": true,
                "onClick": controller.AS_Button_ed92f71cf6fa447ca3d123f600021244,
                "right": "0dp",
                "skin": "sknBtnKeybad",
                "text": "6",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeypadRowTwo.add(btnFour, btnFive, btnSix);
            var flxKeypadRowThree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "24.20%",
                "id": "flxKeypadRowThree",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxKeypadRowThree.setDefaultUnit(kony.flex.DP);
            var btnSeven = new kony.ui.Button({
                "height": "100%",
                "id": "btnSeven",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_a664c2e048294fcc9a655ae46800843a,
                "skin": "sknBtnKeybad",
                "text": "7",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnEight = new kony.ui.Button({
                "centerX": "50%",
                "height": "100%",
                "id": "btnEight",
                "isVisible": true,
                "onClick": controller.AS_Button_c09b134b80304a219fceb20f98a71a65,
                "skin": "sknBtnKeybad",
                "text": "8",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnNine = new kony.ui.Button({
                "height": "100%",
                "id": "btnNine",
                "isVisible": true,
                "onClick": controller.AS_Button_he8e976820184246897fc15bee815f28,
                "right": "0dp",
                "skin": "sknBtnKeybad",
                "text": "9",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeypadRowThree.add(btnSeven, btnEight, btnNine);
            var flxKeypadRowFour = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "24.20%",
                "id": "flxKeypadRowFour",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxKeypadRowFour.setDefaultUnit(kony.flex.DP);
            var btnZero = new kony.ui.Button({
                "centerX": "50%",
                "height": "100%",
                "id": "btnZero",
                "isVisible": true,
                "onClick": controller.AS_Button_a5b5731217f44cb697c2e8a51aa2c7fd,
                "skin": "sknBtnKeybad",
                "text": "0",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgClearKeypad = new kony.ui.Image2({
                "centerY": "50%",
                "height": "40%",
                "id": "imgClearKeypad",
                "isVisible": true,
                "onTouchEnd": controller.AS_Image_e01fd9b6207840acab8658ac45b8b5d2,
                "right": "0%",
                "skin": "slImage",
                "src": "cancelkeypad.png",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeypadRowFour.add(btnZero, imgClearKeypad);
            flxKeypad.add(flxShadowTwo, flxKeypadRowOne, flxKeypadRowTwo, flxKeypadRowThree, flxKeypadRowFour);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxf54b5e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "customPopup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            customPopup.height = "100%";
            flxPopup.add(customPopup);
            this.add(flxHeader, flxLanding, flxTermsConditions, flxResult, flxSignature, flxPopupDocuments, flxPopupFillingComplete, flxSelectProducts, flxProductDetails, flxPersonalInfo, flxSearchAddress, flxEnterPhoneNumber, flxEnterEmail, flxUsernamePassword, flxSecurityQuestions, flxEnterSecurityCode, flxEnterSSN, flxKeypad, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmOnBoarding,
            "enabledForIdleTimeout": true,
            "id": "frmOnBoarding",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_daf115e6033248c286dd517fa842dab0,
            "skin": "sknFrmffffff"
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