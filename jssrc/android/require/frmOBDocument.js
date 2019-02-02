define("frmOBDocument", function() {
    return function(controller) {
        function addWidgetsfrmOBDocument() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
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
            flxHeader.add(customHeader);
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
                "zIndex": 11
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
            var camera = new kony.ui.Camera({
                "height": "50%",
                "id": "camera",
                "isVisible": true,
                "left": "0dp",
                "onCapture": controller.AS_Camera_e84a9345087149b0bc722ac4f0d7ff62,
                "skin": "sknffffff046af9SSPReg",
                "text": "TAKE A PICTURE",
                "top": "0dp",
                "width": "100%",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
                "enableOverlay": false,
                "enablePhotoCropFeature": false
            });
            var btnTakeAPicture = new kony.ui.Button({
                "height": "50%",
                "id": "btnTakeAPicture",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.TakeAPicture"),
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
                "text": kony.i18n.getLocalizedString("kony.mb.OnBoarding.ChooseFromGallery"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPopupDocumentsActions.add(camera, btnTakeAPicture, lblSeparatorPopupDocuments, btnChooseFromGallery);
            flxPopupDocuments.add(flxPopupDocumentsActions);
            var flxPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffff",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxPersonalInfo.setDefaultUnit(kony.flex.DP);
            var flxHeaderPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
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
            customHeaderPersonalInfo.lblLocateUs.centerY = "40%";
            customHeaderPersonalInfo.lblLocateUs.text = "Documents";
            flxHeaderPersonalInfo.add(customHeaderPersonalInfo);
            var flxEnterPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "flxEnterPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPersonalInfo.setDefaultUnit(kony.flex.DP);
            var flxDocuments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDocuments",
                "isVisible": true,
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
                "text": kony.i18n.getLocalizedString("kony.mb.OBDocument.HeaderDocuments"),
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
                "src": "chevron.png",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxUploadOption = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxUploadOption",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 1
            }, {}, {});
            flxUploadOption.setDefaultUnit(kony.flex.DP);
            var imgUpload = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50dp",
                "id": "imgUpload",
                "isVisible": true,
                "skin": "slImage",
                "src": "proofimg.png",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lbladdress = new kony.ui.Label({
                "id": "lbladdress",
                "isVisible": false,
                "left": "18dp",
                "skin": "slLabel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUploadOption.add(imgUpload, lbladdress);
            var flxClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15dp",
                "id": "flxClose",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "7dp",
                "skin": "slFbox",
                "top": "2dp",
                "width": "15dp",
                "zIndex": 10
            }, {}, {});
            flxClose.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "height": "15dp",
                "id": "imgClose",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "atmcardgreen.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClose.add(imgClose);
            flxAddressProof.add(lblAddressProofTitle, lblAddressProofInfo, imgAddressProof, flxUploadOption, flxClose);
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
                "text": kony.i18n.getLocalizedString("kony.mb.OBDocument.EmploymentProofTitle"),
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
                "text": kony.i18n.getLocalizedString("kony.mb.OBDocument.EmploymentProofInfo"),
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
                "src": "chevron.png",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxUploadOption1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxUploadOption1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 1
            }, {}, {});
            flxUploadOption1.setDefaultUnit(kony.flex.DP);
            var imgUpload1 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50dp",
                "id": "imgUpload1",
                "isVisible": true,
                "skin": "slImage",
                "src": "proofimg.png",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEmployee = new kony.ui.Label({
                "id": "lblEmployee",
                "isVisible": false,
                "left": "18dp",
                "skin": "slLabel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUploadOption1.add(imgUpload1, lblEmployee);
            var flxClose1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15dp",
                "id": "flxClose1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "7dp",
                "skin": "slFbox",
                "top": "2dp",
                "width": "15dp",
                "zIndex": 10
            }, {}, {});
            flxClose1.setDefaultUnit(kony.flex.DP);
            var imgClose1 = new kony.ui.Image2({
                "height": "15dp",
                "id": "imgClose1",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "atmcardgreen.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClose1.add(imgClose1);
            flxEmploymentProof.add(lblEmploymentProofTitle, lblEmploymentProofInfo, imgEmploymentProof, flxUploadOption1, flxClose1);
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
                "text": kony.i18n.getLocalizedString("kony.mb.OBDocument.IncomeProofTitle"),
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
                "text": kony.i18n.getLocalizedString("kony.mb.OBDocument.IncomeProofInfo"),
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
                "src": "chevron.png",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxUploadOption2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxUploadOption2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 1
            }, {}, {});
            flxUploadOption2.setDefaultUnit(kony.flex.DP);
            var imgUpload2 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50dp",
                "id": "imgUpload2",
                "isVisible": true,
                "skin": "slImage",
                "src": "proofimg.png",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblIncome = new kony.ui.Label({
                "id": "lblIncome",
                "isVisible": false,
                "left": "18dp",
                "skin": "slLabel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUploadOption2.add(imgUpload2, lblIncome);
            var flxClose2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15dp",
                "id": "flxClose2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "7dp",
                "skin": "slFbox",
                "top": "2dp",
                "width": "15dp",
                "zIndex": 10
            }, {}, {});
            flxClose2.setDefaultUnit(kony.flex.DP);
            var imgClose2 = new kony.ui.Image2({
                "height": "15dp",
                "id": "imgClose2",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "atmcardgreen.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClose2.add(imgClose2);
            flxIncomeProof.add(lblIncomeProofTitle, lblIncomeProofInfo, imgIncomeProof, flxUploadOption2, flxClose2);
            var lblDocumentsInfo = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDocumentsInfo",
                "isVisible": true,
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBDocument.DocumentsInfo"),
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
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnContinueDocuments",
                "isVisible": false,
                "right": "6.25%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
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
                "focusSkin": "sknBtn0095e428px",
                "id": "btnSkipDocuments",
                "isVisible": true,
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.OnBoarding.SkipNow"),
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDocuments.add(flxDocumentsWrapper, btnContinueDocuments, btnSkipDocuments);
            flxEnterPersonalInfo.add(flxDocuments);
            var flxProgress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxProgress.setDefaultUnit(kony.flex.DP);
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
                "right": "33%",
                "skin": "sknFlxda8b08",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxProgressPersonalInfo.setDefaultUnit(kony.flex.DP);
            flxProgressPersonalInfo.add();
            flxProgress.add(flxProgressBackgroundPersonalInfo, flxProgressPersonalInfo);
            flxPersonalInfo.add(flxHeaderPersonalInfo, flxEnterPersonalInfo, flxProgress);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "58%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxGradientBlue",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            this.add(flxHeader, flxPopupDocuments, flxPersonalInfo, flxGradient);
        };
        return [{
            "addWidgets": addWidgetsfrmOBDocument,
            "enabledForIdleTimeout": true,
            "id": "frmOBDocument",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_dc1ead5b6355461889cf0923da02608f,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.NAOReviewProduct.PersonalInfo")
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
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});