define("MessagesModule/frmMessages", function() {
    return function(controller) {
        function addWidgetsfrmMessages() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxHeaderMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxHeaderMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderMain.setDefaultUnit(kony.flex.DP);
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
            customHeader.flxSearch.isVisible = false;
            customHeader.imgBack.src = "hamburger.png";
            customHeader.lblLocateUs.text = "Messages";
            flxHeaderMain.add(customHeader);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "15dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "10%",
                "zIndex": 10
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var imgSearch = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSearch",
                "isVisible": true,
                "right": "5dp",
                "skin": "slImage",
                "src": "addiconnoborder.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSearch.add(imgSearch);
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
            flxHeader.add(flxHeaderMain, flxHeaderShadow, flxSearch, flxSeparatorHeader);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 11
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "customSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            customSearchbox.top = "0dp";
            customSearchbox.tbxSearch.placeholder = "Search Messages";
            var CopyflxSeparatorHeader0h53246fe34144f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeparatorHeader0h53246fe34144f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            CopyflxSeparatorHeader0h53246fe34144f.setDefaultUnit(kony.flex.DP);
            CopyflxSeparatorHeader0h53246fe34144f.add();
            flxHeaderSearchbox.add(customSearchbox, CopyflxSeparatorHeader0h53246fe34144f);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffff",
                "top": "56dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxMessagesTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxMessagesTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "50dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxMessagesTabs.setDefaultUnit(kony.flex.DP);
            var flxInbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxInbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxInbox.setDefaultUnit(kony.flex.DP);
            var lblInbox = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.03%",
                "id": "lblInbox",
                "isVisible": true,
                "skin": "sknLbl424242SSPSemiBold22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.inbox"),
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
            flxInbox.add(lblInbox);
            var flxDeleted = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxDeleted",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxDeleted.setDefaultUnit(kony.flex.DP);
            var lblSent = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSent",
                "isVisible": true,
                "skin": "sknLbl424242SSPSemiBold22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.Delete"),
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
            flxDeleted.add(lblSent);
            var flxDraft = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxDraft",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "34.33%",
                "zIndex": 1
            }, {}, {});
            flxDraft.setDefaultUnit(kony.flex.DP);
            var lblDraft = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDraft",
                "isVisible": true,
                "skin": "sknLbl424242SSPSemiBold22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.draft"),
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
            flxDraft.add(lblDraft);
            var flxSeparatorTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 7
            }, {}, {});
            flxSeparatorTabs.setDefaultUnit(kony.flex.DP);
            flxSeparatorTabs.add();
            var flxInboxIndicator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "4dp",
                "id": "flxInboxIndicator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx1a98ff",
                "width": "50%",
                "zIndex": 8
            }, {}, {});
            flxInboxIndicator.setDefaultUnit(kony.flex.DP);
            flxInboxIndicator.add();
            var flxDeletedIndicator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxDeletedIndicator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "sknFlxf9f9f9",
                "width": "50%",
                "zIndex": 8
            }, {}, {});
            flxDeletedIndicator.setDefaultUnit(kony.flex.DP);
            flxDeletedIndicator.add();
            var flxDraftIndicator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "4dp",
                "id": "flxDraftIndicator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlx1a98ff",
                "width": "50%",
                "zIndex": 9
            }, {}, {});
            flxDraftIndicator.setDefaultUnit(kony.flex.DP);
            flxDraftIndicator.add();
            flxMessagesTabs.add(flxInbox, flxDeleted, flxDraft, flxSeparatorTabs, flxInboxIndicator, flxDeletedIndicator, flxDraftIndicator);
            var flxMessages = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMessages",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "100dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMessages.setDefaultUnit(kony.flex.DP);
            var segMessagesInbox = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgDelete": "deleteicon.png",
                    "imgReply": "replyicon.png",
                    "lblDelete": "Delete",
                    "lblDescription": "Message description to appear here.Show maximum two lines of text. In the end text is going to end here with …",
                    "lblNumber": "(999)",
                    "lblReply": "Reply",
                    "lblSubject": "Subject Line Max one lineSubject Line Max one line",
                    "lblTime": "02/22/2018"
                }, {
                    "imgDelete": "deleteicon.png",
                    "imgReply": "replyicon.png",
                    "lblDelete": "Delete",
                    "lblDescription": "Message description to appear here.Show maximum two lines of text. In the end text is going to end here with …",
                    "lblNumber": "(999)",
                    "lblReply": "Reply",
                    "lblSubject": "Subject Line Max one lineSubject Line Max one line",
                    "lblTime": "02/22/2018"
                }, {
                    "imgDelete": "deleteicon.png",
                    "imgReply": "replyicon.png",
                    "lblDelete": "Delete",
                    "lblDescription": "Message description to appear here.Show maximum two lines of text. In the end text is going to end here with …",
                    "lblNumber": "(999)",
                    "lblReply": "Reply",
                    "lblSubject": "Subject Line Max one lineSubject Line Max one line",
                    "lblTime": "02/22/2018"
                }],
                "groupCells": false,
                "id": "segMessagesInbox",
                "isVisible": true,
                "left": "0dp",
                "minHeight": "100%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "sknSegffffff",
                "rowTemplate": "flxMessagesMain",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDelete": "flxDelete",
                    "flxDeleteReply": "flxDeleteReply",
                    "flxMessagesMain": "flxMessagesMain",
                    "flxMessagesMainSwipe": "flxMessagesMainSwipe",
                    "flxReply": "flxReply",
                    "flxSeparator": "flxSeparator",
                    "flxmain": "flxmain",
                    "imgDelete": "imgDelete",
                    "imgReply": "imgReply",
                    "lblDelete": "lblDelete",
                    "lblDescription": "lblDescription",
                    "lblNumber": "lblNumber",
                    "lblReply": "lblReply",
                    "lblSubject": "lblSubject",
                    "lblTime": "lblTime"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMessages.add(segMessagesInbox);
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "350dp",
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffff",
                "top": "40dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.NoTransaction"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "50%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNoTransactions.add(flxSeperator3, lblNoTransaction);
            var flxSearchHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxSearchHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 204
            }, {}, {});
            flxSearchHeader.setDefaultUnit(kony.flex.DP);
            var flxSearchMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSearchMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "sknFlx1a98ff",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearchMain.setDefaultUnit(kony.flex.DP);
            var tbxSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknTbxSSPf1f1f1B",
                "height": "35dp",
                "id": "tbxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.ExternalAccounts.Search"),
                "secureTextEntry": false,
                "skin": "sknTbxSSPf1f1f1B",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "left": "-85%",
                "skin": "slImage",
                "src": "search.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyflxSearch0ab8095b09ad647 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "69.80%",
                "id": "CopyflxSearch0ab8095b09ad647",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-2%",
                "skin": "slFbox",
                "top": "0.20%",
                "width": "11%",
                "zIndex": 12
            }, {}, {});
            CopyflxSearch0ab8095b09ad647.setDefaultUnit(kony.flex.DP);
            var CopyimgSearch0b99657d1779349 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgSearch0b99657d1779349",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "searchblue.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxSearch0ab8095b09ad647.add(CopyimgSearch0b99657d1779349);
            flxSearchMain.add(tbxSearch, imgSearchIcon, CopyflxSearch0ab8095b09ad647);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            flxSearchHeader.add(flxSearchMain, flxShadow);
            flxMainContainer.add(flxMessagesTabs, flxMessages, flxNoTransactions, flxSearchHeader);
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
                "zIndex": 201
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
            flxPopup.add(customPopup);
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburger",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 301
            }, {}, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var flxHamburgerWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamburgerWrapper.setDefaultUnit(kony.flex.DP);
            var flxHamburgerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "right": "50dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 10
            }, {}, {});
            flxHamburgerContainer.setDefaultUnit(kony.flex.DP);
            var Hamburger = new com.kmb.common.Hamburger({
                "clipBounds": true,
                "height": "100%",
                "id": "Hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxHamburgerContainer.add(Hamburger);
            var flxHamburgerDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburgerDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 7
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "clipBounds": false,
                "height": "60dp",
                "id": "customFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 300
            }, {}, {});
            customFooter.flxAccSelect.isVisible = false;
            customFooter.flxAccounts.onClick = controller.AS_FlexContainer_cfb5a86f311241ef93fd9536e683e0ae;
            customFooter.flxBillSelected.isVisible = true;
            customFooter.flxMoreSelect.isVisible = false;
            customFooter.flxTransferSel.isVisible = false;
            customFooter.flxTypeOneShadow.clipBounds = true;
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            flxFooter.add(customFooter, flxSeperator1);
            var flxBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45%",
                "id": "flxBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBg.setDefaultUnit(kony.flex.DP);
            flxBg.add();
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, flxPopup, flxHamburger, flxFooter, flxBg);
        };
        return [{
            "addWidgets": addWidgetsfrmMessages,
            "enabledForIdleTimeout": true,
            "id": "frmMessages",
            "init": controller.AS_Form_c12dbfcc91844856a06897d220e1c278,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_ae59b9269e85435fb894ea6dd42103cf,
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