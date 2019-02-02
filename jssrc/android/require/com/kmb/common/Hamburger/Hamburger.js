define(function() {
    return function(controller) {
        var Hamburger = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Hamburger",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        Hamburger.setDefaultUnit(kony.flex.DP);
        var flxHamburger = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHamburger",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 1
        }, {}, {});
        flxHamburger.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxHeaderMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "52dp",
            "id": "flxHeaderMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlx1a98ff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeaderMain.setDefaultUnit(kony.flex.DP);
        var lblLastLogin = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblLastLogin",
            "isVisible": true,
            "left": "57dp",
            "skin": "sknLblffffff20px",
            "text": "Last Login 12 Dec 17",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblUsername = new kony.ui.Label({
            "id": "lblUsername",
            "isVisible": true,
            "left": "57dp",
            "skin": "sknLblffffffSSPReg26px",
            "text": "John…",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 8
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgUser = new kony.ui.Image2({
            "height": "24dp",
            "id": "imgUser",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "userimg.png",
            "top": "12dp",
            "width": "24dp",
            "zIndex": 8
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgLogout = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgLogout",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "logout.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHeaderMain.add(lblLastLogin, lblUsername, imgUser, imgLogout);
        var flxHeaderShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-10dp",
            "clipBounds": true,
            "height": "10dp",
            "id": "flxHeaderShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 80
        }, {}, {});
        flxHeaderShadow.setDefaultUnit(kony.flex.DP);
        flxHeaderShadow.add();
        flxHeader.add(flxHeaderMain, flxHeaderShadow);
        var flxMenu = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "0dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknFlxScrlfafafa",
            "top": "52dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMenu.setDefaultUnit(kony.flex.DP);
        var segHamburger = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgHamburger": "accounts.png",
                "lblHamburger": "Accounts",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "transfer.png",
                "lblHamburger": "Transfers",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "billpay.png",
                "lblHamburger": "Bill pay",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "",
                "lblHamburger": "My Wallet",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "opennew.png",
                "lblHamburger": "Open New Account",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "message.png",
                "lblHamburger": "Messages",
                "lblMessagesNumber": "03"
            }, {
                "imgHamburger": "settings.png",
                "lblHamburger": "Settings",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "chatbot.png",
                "lblHamburger": "Chatbot",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "locateus.png",
                "lblHamburger": "Locate Us",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "contactus.png",
                "lblHamburger": "Contact Us",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "",
                "lblHamburger": "Contact Us",
                "lblMessagesNumber": ""
            }, {
                "imgHamburger": "",
                "lblHamburger": "Contact Us",
                "lblMessagesNumber": ""
            }],
            "groupCells": false,
            "id": "segHamburger",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Normal",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxHamburger",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxHamburger": "flxHamburger",
                "flxIdentifier": "flxIdentifier",
                "flxImage": "flxImage",
                "flxSeparator": "flxSeparator",
                "flxhambuergermenu": "flxhambuergermenu",
                "imgHamburger": "imgHamburger",
                "lblHamburger": "lblHamburger",
                "lblMessagesNumber": "lblMessagesNumber"
            },
            "widgetSkin": "sknSegffffff",
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMenu.add(segHamburger);
        flxHamburger.add(flxHeader, flxMenu);
        Hamburger.add(flxHamburger);
        return Hamburger;
    }
})