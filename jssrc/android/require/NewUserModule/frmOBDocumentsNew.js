define("NewUserModule/frmOBDocumentsNew", function() {
    return function(controller) {
        function addWidgetsfrmOBDocumentsNew() {
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
                "zIndex": 4
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
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
            customHeader.btnRight.text = "CLOSE";
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Documents";
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
                "compressionLevel": 20,
                "height": "50%",
                "id": "camera",
                "isVisible": true,
                "left": "0dp",
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
            var flxEnterPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "flxEnterPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "58dp",
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
            var flxDocumentsWrapper = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "70dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxDocumentsWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0.00%",
                "verticalScrollIndicator": true,
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
                "top": "0dp",
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
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxAddressProof",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "sknFlxBorder3e4f564px",
                "top": "33dp",
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flxAddressProof.setDefaultUnit(kony.flex.DP);
            var flxAddDocAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxAddDocAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "15dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxAddDocAddress.setDefaultUnit(kony.flex.DP);
            var imgAddressProof = new kony.ui.Image2({
                "height": "25dp",
                "id": "imgAddressProof",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "addicon.png",
                "top": "0dp",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAddDocAddress.add(imgAddressProof);
            var lblAddressProofTitle = new kony.ui.Label({
                "id": "lblAddressProofTitle",
                "isVisible": true,
                "left": "15dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Address Proof",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-32dp",
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
                "bottom": "5dp",
                "id": "lblAddressProofInfo",
                "isVisible": true,
                "left": "15dp",
                "skin": "sknLbla0a0a022px",
                "text": "Voter ID, Driver's License, Utility Bill",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-3dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDocs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDocs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDocs.setDefaultUnit(kony.flex.DP);
            var flxDoc1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxDoc1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxDoc1.setDefaultUnit(kony.flex.DP);
            var imgDoc1 = new kony.ui.Image2({
                "height": "42dp",
                "id": "imgDoc1",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "doc_thumb.png",
                "top": "3dp",
                "width": "45dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15dp",
                "id": "flxClose",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "95dp",
                "skin": "slFbox",
                "top": "0dp",
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
            var lblDoc1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDoc1",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "70dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAddressDev = new kony.ui.Label({
                "centerY": "60%",
                "id": "lblAddressDev",
                "isVisible": false,
                "left": "70dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDoc1.add(imgDoc1, flxClose, lblDoc1, lblAddressDev);
            flxDocs.add(flxDoc1);
            flxAddressProof.add(flxAddDocAddress, lblAddressProofTitle, lblAddressProofInfo, flxDocs);
            var flxEmploymentProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxEmploymentProof",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "sknFlxBorder3e4f564px",
                "top": "33dp",
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flxEmploymentProof.setDefaultUnit(kony.flex.DP);
            var flxAddDocEmploymentProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxAddDocEmploymentProof",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "15dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxAddDocEmploymentProof.setDefaultUnit(kony.flex.DP);
            var imgEmploymentProof = new kony.ui.Image2({
                "height": "25dp",
                "id": "imgEmploymentProof",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "addicon.png",
                "top": "0dp",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAddDocEmploymentProof.add(imgEmploymentProof);
            var lblEmploymentProofTitle = new kony.ui.Label({
                "id": "lblEmploymentProofTitle",
                "isVisible": true,
                "left": "15dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBDocument.EmploymentProofTitle"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-32dp",
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
                "bottom": "5dp",
                "id": "lblEmploymentProofInfo",
                "isVisible": true,
                "left": "15dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBDocument.EmploymentProofInfo"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-3dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDocsEmploymentProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDocsEmploymentProof",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDocsEmploymentProof.setDefaultUnit(kony.flex.DP);
            var flxDocEmploymentProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxDocEmploymentProof",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxDocEmploymentProof.setDefaultUnit(kony.flex.DP);
            var imgDocEmploymentProof = new kony.ui.Image2({
                "height": "42dp",
                "id": "imgDocEmploymentProof",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "doc_thumb.png",
                "top": "3dp",
                "width": "45dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCloseEmploymentProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15dp",
                "id": "flxCloseEmploymentProof",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "95dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 10
            }, {}, {});
            flxCloseEmploymentProof.setDefaultUnit(kony.flex.DP);
            var imgCloseEmploymentProof = new kony.ui.Image2({
                "height": "15dp",
                "id": "imgCloseEmploymentProof",
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
            flxCloseEmploymentProof.add(imgCloseEmploymentProof);
            var lblDocEmploymentProof = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDocEmploymentProof",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEmploymentDev = new kony.ui.Label({
                "centerY": "60%",
                "id": "lblEmploymentDev",
                "isVisible": false,
                "left": "70dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDocEmploymentProof.add(imgDocEmploymentProof, flxCloseEmploymentProof, lblDocEmploymentProof, lblEmploymentDev);
            flxDocsEmploymentProof.add(flxDocEmploymentProof);
            flxEmploymentProof.add(flxAddDocEmploymentProof, lblEmploymentProofTitle, lblEmploymentProofInfo, flxDocsEmploymentProof);
            var flxIncomeProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxIncomeProof",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "sknFlxBorder3e4f564px",
                "top": "33dp",
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flxIncomeProof.setDefaultUnit(kony.flex.DP);
            var flxAddDocIncome = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxAddDocIncome",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "15dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxAddDocIncome.setDefaultUnit(kony.flex.DP);
            var imgIncomeProof = new kony.ui.Image2({
                "height": "25dp",
                "id": "imgIncomeProof",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "addicon.png",
                "top": "0dp",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAddDocIncome.add(imgIncomeProof);
            var lblIncomeProof = new kony.ui.Label({
                "id": "lblIncomeProof",
                "isVisible": true,
                "left": "15dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBDocumentsNew.IncomeProof"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-32dp",
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
                "bottom": "5dp",
                "id": "lblIncomeProofInfo",
                "isVisible": true,
                "left": "15dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBDocument.IncomeProofInfo"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDocsIncomeProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDocsIncomeProof",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDocsIncomeProof.setDefaultUnit(kony.flex.DP);
            var flxDocIncomeProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxDocIncomeProof",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxDocIncomeProof.setDefaultUnit(kony.flex.DP);
            var imgDocIncomeProof = new kony.ui.Image2({
                "height": "42dp",
                "id": "imgDocIncomeProof",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "doc_thumb.png",
                "top": "3dp",
                "width": "45dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCloseIncomeProof = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15dp",
                "id": "flxCloseIncomeProof",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_b7afcd319b6441a094d590e41a9fbf0a,
                "right": "95dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 10
            }, {}, {});
            flxCloseIncomeProof.setDefaultUnit(kony.flex.DP);
            var imgCloseIncomeProof = new kony.ui.Image2({
                "height": "15dp",
                "id": "imgCloseIncomeProof",
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
            flxCloseIncomeProof.add(imgCloseIncomeProof);
            var lblDocIncomeProof = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDocIncomeProof",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknLbl424242SSP22px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblIncomeDev = new kony.ui.Label({
                "centerY": "60%",
                "id": "lblIncomeDev",
                "isVisible": false,
                "left": "70dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDocIncomeProof.add(imgDocIncomeProof, flxCloseIncomeProof, lblDocIncomeProof, lblIncomeDev);
            flxDocsIncomeProof.add(flxDocIncomeProof);
            flxIncomeProof.add(flxAddDocIncome, lblIncomeProof, lblIncomeProofInfo, flxDocsIncomeProof);
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
                "bottom": "20dp",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnContinueDocuments",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDocuments.add(flxDocumentsWrapper, btnContinueDocuments);
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
            flxPersonalInfo.add(flxEnterPersonalInfo, flxProgress);
            var flxViewDocument = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxViewDocument",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 11
            }, {}, {});
            flxViewDocument.setDefaultUnit(kony.flex.DP);
            var flxViewDocHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxViewDocHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxViewDocHeader.setDefaultUnit(kony.flex.DP);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-20dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxHeaderShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgBack",
                "isVisible": true,
                "skin": "slImage",
                "src": "closeicon.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgBack);
            var lblDocName = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDocName",
                "isVisible": true,
                "skin": "sknLblda8b08SSP26px",
                "text": "Employee Doc1.Pdf",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxViewDocHeader.add(flxHeaderShadow, flxBack, lblDocName);
            var imgDocument = new kony.ui.Image2({
                "bottom": "150dp",
                "id": "imgDocument",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "80dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnDelete = new kony.ui.Button({
                "bottom": "20dp",
                "height": "40dp",
                "id": "btnDelete",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Delete"),
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxViewDocument.add(flxViewDocHeader, imgDocument, btnDelete);
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
            this.add(flxHeader, flxPopupDocuments, flxPersonalInfo, flxViewDocument, flxGradient);
        };
        return [{
            "addWidgets": addWidgetsfrmOBDocumentsNew,
            "enabledForIdleTimeout": true,
            "id": "frmOBDocumentsNew",
            "init": controller.AS_Form_c090961e4fb54452bfb59f3aad05f4e7,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_j571d78723ca42fe9c27641c0eb12321,
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