define("MessagesModule/frmMessagesDetails", function() {
    return function(controller) {
        function addWidgetsfrmMessagesDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf9f9f9Shadow",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 5
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
            customHeader.btnRight.isVisible = false;
            customHeader.flxBack.onClick = controller.AS_FlexContainer_g894d88921394c20ab25d75374b46cfe;
            customHeader.flxSearch.isVisible = true;
            customHeader.flxSearch.width = "10%";
            customHeader.imgSearch.src = "addiconnoborder.png";
            customHeader.lblLocateUs.text = "Messages";
            flxHeader.add(customHeader);
            var flxMessageDetailsMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMessageDetailsMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMessageDetailsMain.setDefaultUnit(kony.flex.DP);
            var flxSubject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxSubject",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSubject.setDefaultUnit(kony.flex.DP);
            var lblSubject = new kony.ui.Label({
                "id": "lblSubject",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MessagesDetails.Subject"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSubjectDescription = new kony.ui.Label({
                "bottom": "5dp",
                "id": "lblSubjectDescription",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl4a4a4a100pr",
                "text": "Statement for month of December 2017",
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
            var flxDelete = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxDelete",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "slFbox",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxDelete.setDefaultUnit(kony.flex.DP);
            var imgDelete = new kony.ui.Image2({
                "height": "100%",
                "id": "imgDelete",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "deleteicon2.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDelete.add(imgDelete);
            flxSubject.add(lblSubject, lblSubjectDescription, flxDelete);
            var flxSegMessages = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "81dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxSegMessages",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlf9f9f9",
                "top": "50dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSegMessages.setDefaultUnit(kony.flex.DP);
            var segMessageDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgAttachment": "attachment.png",
                    "imgAttachment2": "attachment.png",
                    "imgAttachment3": "attachment.png",
                    "imgAttachment4": "attachment.png",
                    "imgAttachment5": "attachment.png",
                    "imgDownload": "download.png",
                    "imgDownload2": "download.png",
                    "imgDownload3": "download.png",
                    "imgDownload4": "download.png",
                    "imgDownload5": "download.png",
                    "lblAttachment": "Statement Dec.pdf",
                    "lblAttachment2": "Statement Dec.pdf",
                    "lblAttachment3": "Statement Dec.pdf",
                    "lblAttachment4": "Statement Dec.pdf",
                    "lblAttachment5": "Statement Dec.pdf",
                    "lblDate": "21 dec ‘17, 02:21 PM",
                    "lblFrom": "From :",
                    "lblFromValue": "Kony Bank",
                    "lblMessage": "Message",
                    "lblMessageDescription": "Hi John, we have attached statement for the month of december 2017, If you need any help please revert us with your qurries"
                }, {
                    "imgAttachment": "attachment.png",
                    "imgAttachment2": "attachment.png",
                    "imgAttachment3": "attachment.png",
                    "imgAttachment4": "attachment.png",
                    "imgAttachment5": "attachment.png",
                    "imgDownload": "download.png",
                    "imgDownload2": "download.png",
                    "imgDownload3": "download.png",
                    "imgDownload4": "download.png",
                    "imgDownload5": "download.png",
                    "lblAttachment": "Statement Dec.pdf",
                    "lblAttachment2": "Statement Dec.pdf",
                    "lblAttachment3": "Statement Dec.pdf",
                    "lblAttachment4": "Statement Dec.pdf",
                    "lblAttachment5": "Statement Dec.pdf",
                    "lblDate": "21 dec ‘17, 02:21 PM",
                    "lblFrom": "From :",
                    "lblFromValue": "Kony Bank",
                    "lblMessage": "Message",
                    "lblMessageDescription": "Hi John, we have attached statement for the month of december 2017, If you need any help please revert us with your qurriesHi John, we have attached statement for the month of december 2017, If you need any help please revert us with your qurriesHi John, we have attached statement for the month of december 2017, If you need any help please revert us with your qurries"
                }, {
                    "imgAttachment": "attachment.png",
                    "imgAttachment2": "attachment.png",
                    "imgAttachment3": "attachment.png",
                    "imgAttachment4": "attachment.png",
                    "imgAttachment5": "attachment.png",
                    "imgDownload": "download.png",
                    "imgDownload2": "download.png",
                    "imgDownload3": "download.png",
                    "imgDownload4": "download.png",
                    "imgDownload5": "download.png",
                    "lblAttachment": "Statement Dec.pdf",
                    "lblAttachment2": "Statement Dec.pdf",
                    "lblAttachment3": "Statement Dec.pdf",
                    "lblAttachment4": "Statement Dec.pdf",
                    "lblAttachment5": "Statement Dec.pdf",
                    "lblDate": "21 dec ‘17, 02:21 PM",
                    "lblFrom": "From :",
                    "lblFromValue": "Kony Bank",
                    "lblMessage": "Message",
                    "lblMessageDescription": "Hi John, we have "
                }],
                "groupCells": false,
                "id": "segMessageDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "sknSegf9f9f9",
                "rowTemplate": "flxMessagesRight",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAttachment": "flxAttachment",
                    "flxAttachment2": "flxAttachment2",
                    "flxAttachment3": "flxAttachment3",
                    "flxAttachment4": "flxAttachment4",
                    "flxAttachment5": "flxAttachment5",
                    "flxAttachmentMain": "flxAttachmentMain",
                    "flxAttachmentMain2": "flxAttachmentMain2",
                    "flxAttachmentMain3": "flxAttachmentMain3",
                    "flxAttachmentMain4": "flxAttachmentMain4",
                    "flxAttachmentMain5": "flxAttachmentMain5",
                    "flxDownload": "flxDownload",
                    "flxDownload2": "flxDownload2",
                    "flxDownload3": "flxDownload3",
                    "flxDownload4": "flxDownload4",
                    "flxDownload5": "flxDownload5",
                    "flxFrom": "flxFrom",
                    "flxMain": "flxMain",
                    "flxMessage": "flxMessage",
                    "flxMessagesMain": "flxMessagesMain",
                    "flxMessagesRight": "flxMessagesRight",
                    "flxRight": "flxRight",
                    "flxShadow": "flxShadow",
                    "imgAttachment": "imgAttachment",
                    "imgAttachment2": "imgAttachment2",
                    "imgAttachment3": "imgAttachment3",
                    "imgAttachment4": "imgAttachment4",
                    "imgAttachment5": "imgAttachment5",
                    "imgDownload": "imgDownload",
                    "imgDownload2": "imgDownload2",
                    "imgDownload3": "imgDownload3",
                    "imgDownload4": "imgDownload4",
                    "imgDownload5": "imgDownload5",
                    "lblAttachment": "lblAttachment",
                    "lblAttachment2": "lblAttachment2",
                    "lblAttachment3": "lblAttachment3",
                    "lblAttachment4": "lblAttachment4",
                    "lblAttachment5": "lblAttachment5",
                    "lblDate": "lblDate",
                    "lblFrom": "lblFrom",
                    "lblFromValue": "lblFromValue",
                    "lblMessage": "lblMessage",
                    "lblMessageDescription": "lblMessageDescription"
                },
                "widgetSkin": "sknSegf9f9f9",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "pressedSkin": "sknSegffffff"
            });
            var txtAreaReply = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "sknTxtAreaSSPREg42424228px",
                "height": "90dp",
                "id": "txtAreaReply",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "numberOfVisibleLines": 3,
                "onDone": controller.AS_TextArea_f46f54d200254863a89d1683d947698e,
                "placeholder": "Reply",
                "skin": "sknTxtAreaSSPREg42424228pxRadius10",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "95%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [10, 5, 5, 2],
                "paddingInPixel": true
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            flxSegMessages.add(segMessageDetails, txtAreaReply);
            var flxReplyandSend = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 10,
                "clipBounds": true,
                "id": "flxReplyandSend",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReplyandSend.setDefaultUnit(kony.flex.DP);
            var flxAttachAndSend = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAttachAndSend",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAttachAndSend.setDefaultUnit(kony.flex.DP);
            var flxAttachFile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxAttachFile",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxAttachFile.setDefaultUnit(kony.flex.DP);
            var imgAttachment = new kony.ui.Image2({
                "centerY": "50%",
                "height": "12dp",
                "id": "imgAttachment",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "paperclip.png",
                "width": "11dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAttachment = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblAttachment",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular86px",
                "text": kony.i18n.getLocalizedString("kony.mb.MessagesDetails.AttachFile"),
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
            flxAttachFile.add(imgAttachment, lblAttachment);
            var btnSend = new kony.ui.Button({
                "focusSkin": "sknBtn0095e4Op1000095e4B4Radiusffffff26px",
                "height": "40dp",
                "id": "btnSend",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4Op1000095e4B4Radiusffffff26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.send"),
                "top": "25dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAttachAndSend.add(flxAttachFile, btnSend);
            flxReplyandSend.add(flxAttachAndSend);
            var flxReply = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxReply",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "right": "10dp",
                "skin": "sknFlxf9f9f9Bordere3e3e3R4px",
                "zIndex": 1
            }, {}, {});
            flxReply.setDefaultUnit(kony.flex.DP);
            var lblReply = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReply",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MessagesDetails.Reply"),
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
            flxReply.add(lblReply);
            var btnRestore = new kony.ui.Button({
                "bottom": "10dp",
                "height": "40dp",
                "id": "btnRestore",
                "isVisible": false,
                "left": "10dp",
                "right": "10dp",
                "skin": "sknBtn0095e4Op1000095e4B4Radiusffffff26px",
                "text": "RESTORE",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMessageDetailsMain.add(flxSubject, flxSegMessages, flxReplyandSend, flxReply, btnRestore);
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
            var btnChooseFromDevice = new kony.ui.Button({
                "height": "50%",
                "id": "btnChooseFromDevice",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.ChooseFromDevice"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPopupDocumentsActions.add(btnTakeAPicture, lblSeparatorPopupDocuments, btnChooseFromDevice);
            flxPopupDocuments.add(flxPopupDocumentsActions);
            this.add(flxHeader, flxMessageDetailsMain, flxPopupDocuments);
        };
        return [{
            "addWidgets": addWidgetsfrmMessagesDetails,
            "enabledForIdleTimeout": true,
            "id": "frmMessagesDetails",
            "init": controller.AS_Form_h1a356b7bfe6472bb278ba6d80bb6597,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_f543b1684e5d430fbee513e54acf894c,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Hamburger.Messages")
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