define("MenuModule/frmMenu", function() {
    return function(controller) {
        function addWidgetsfrmMenu() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMenuHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "60dp",
                "id": "flxMenuHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxMenuHeader.setDefaultUnit(kony.flex.DP);
            var flxMAin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxMAin",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMAin.setDefaultUnit(kony.flex.DP);
            var imgUser = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgUser",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "userimg.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUsername = new kony.ui.Label({
                "id": "lblUsername",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl4a4a4aSSPBold100pr",
                "text": "John Doe",
                "textStyle": {},
                "top": "15dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblLastLogin = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblLastLogin",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Last Login 12 Dec 17",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxLogout = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxLogout",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            flxLogout.setDefaultUnit(kony.flex.DP);
            var imgLogout = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgLogout",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "logout.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLogout.add(imgLogout);
            flxMAin.add(imgUser, lblUsername, lblLastLogin, flxLogout);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxHeaderShadow",
                "top": "55dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            flxMenuHeader.add(flxMAin, flxShadow);
            var flxMenuMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "61dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMenuMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "60dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMenuMain.setDefaultUnit(kony.flex.DP);
            var flxCheckDeposites = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCheckDeposites",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCheckDeposites.setDefaultUnit(kony.flex.DP);
            var imgCheckDeposites = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "imgCheckDeposites",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "checkdeposit.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCheckDeposites = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCheckDeposites",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Check Deposites",
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
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxCheckDeposites.add(imgCheckDeposites, lblCheckDeposites, flxSeparator);
            var flxCardlessCash = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCardlessCash",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCardlessCash.setDefaultUnit(kony.flex.DP);
            var imgCardlessCash = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "imgCardlessCash",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "cardlesscash.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCardlessCash = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCardlessCash",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Card-less Cash ",
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
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            flxCardlessCash.add(imgCardlessCash, lblCardlessCash, flxSeparator2);
            var flxCardManagement = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCardManagement",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCardManagement.setDefaultUnit(kony.flex.DP);
            var imgCardManagement = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgCardManagement",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "cardmange.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCardManagement = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCardManagement",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Hamburger.CardManagement\")",
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
            var flxSeparator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator3.setDefaultUnit(kony.flex.DP);
            flxSeparator3.add();
            flxCardManagement.add(imgCardManagement, lblCardManagement, flxSeparator3);
            var flxExternalAccountManagement = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxExternalAccountManagement",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxExternalAccountManagement.setDefaultUnit(kony.flex.DP);
            var imgExternalAccountManagement = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgExternalAccountManagement",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "cardmange.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblExternalAccountManagement = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblExternalAccountManagement",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Manage my other Bank Accounts",
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
            var flxSeparator11 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator11",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator11.setDefaultUnit(kony.flex.DP);
            flxSeparator11.add();
            flxExternalAccountManagement.add(imgExternalAccountManagement, lblExternalAccountManagement, flxSeparator11);
            var flxOpenNewAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxOpenNewAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxOpenNewAccount.setDefaultUnit(kony.flex.DP);
            var imgOpenNewAccount = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgOpenNewAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "opennewm.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOpenNewAccount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOpenNewAccount",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Hamburger.OpenAccount\")",
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
            var flxSeparator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator4.setDefaultUnit(kony.flex.DP);
            flxSeparator4.add();
            flxOpenNewAccount.add(imgOpenNewAccount, lblOpenNewAccount, flxSeparator4);
            var flxAddAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAddAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAddAccount.setDefaultUnit(kony.flex.DP);
            var imgAddAccount = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "imgAddAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "accounts.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAddAccount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAddAccount",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Add Account",
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
            var flxSeparator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator5.setDefaultUnit(kony.flex.DP);
            flxSeparator5.add();
            flxAddAccount.add(imgAddAccount, lblAddAccount, flxSeparator5);
            var flxMessages = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxMessages",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxMessages.setDefaultUnit(kony.flex.DP);
            var imgMessages = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "imgMessages",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "message.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMessages = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMessages",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl0a78d1sspreg26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Hamburger.Messages\")",
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
            var lblMessagesNumber = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMessagesNumber",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": "03",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxSeparator6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator6.setDefaultUnit(kony.flex.DP);
            flxSeparator6.add();
            flxMessages.add(imgMessages, lblMessages, lblMessagesNumber, flxSeparator6);
            var flxSettings = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxSettings",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSettings.setDefaultUnit(kony.flex.DP);
            var imgSettings = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "imgSettings",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "settings.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSettings = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSettings",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Hamburger.Settings\")",
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
            var flxSeparator7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator7.setDefaultUnit(kony.flex.DP);
            flxSeparator7.add();
            flxSettings.add(imgSettings, lblSettings, flxSeparator7);
            var flxChatbot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxChatbot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxChatbot.setDefaultUnit(kony.flex.DP);
            var imgChatbot = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgChatbot",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "chat.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblChatbot = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblChatbot",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Hamburger.chatbot\")",
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
            var flxSeparator8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator8.setDefaultUnit(kony.flex.DP);
            flxSeparator8.add();
            flxChatbot.add(imgChatbot, lblChatbot, flxSeparator8);
            var flxLocateUs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxLocateUs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxLocateUs.setDefaultUnit(kony.flex.DP);
            var imgLocateUs = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgLocateUs",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "locate.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLocateUs = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLocateUs",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Hamburger.Locateus\")",
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
            var flxSeparator9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator9.setDefaultUnit(kony.flex.DP);
            flxSeparator9.add();
            flxLocateUs.add(imgLocateUs, lblLocateUs, flxSeparator9);
            var flxContactUs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxContactUs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxContactUs.setDefaultUnit(kony.flex.DP);
            var imgContactUs = new kony.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "imgContactUs",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "contactus.png",
                "width": "17dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblContactUs = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblContactUs",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Contact Us",
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
            var flxSeparator10 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator10",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator10.setDefaultUnit(kony.flex.DP);
            flxSeparator10.add();
            flxContactUs.add(imgContactUs, lblContactUs, flxSeparator10);
            flxMenuMain.add(flxCheckDeposites, flxCardlessCash, flxCardManagement, flxExternalAccountManagement, flxOpenNewAccount, flxAddAccount, flxMessages, flxSettings, flxChatbot, flxLocateUs, flxContactUs);
            var flxShadow2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 57,
                "clipBounds": false,
                "height": "5dp",
                "id": "flxShadow2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow2.setDefaultUnit(kony.flex.DP);
            flxShadow2.add();
            var flxBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxBottom.setDefaultUnit(kony.flex.DP);
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
            customFooter.imgMore.src = "more.png";
            flxBottom.add(customFooter);
            this.add(flxMenuHeader, flxMenuMain, flxShadow2, flxBottom);
        };
        return [{
            "addWidgets": addWidgetsfrmMenu,
            "enabledForIdleTimeout": true,
            "id": "frmMenu",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_dc6d7419b3b04626b42ab8f075503b6c,
            "skin": "sknFrmffffff"
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