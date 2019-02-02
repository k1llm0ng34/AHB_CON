define("SettingsModule/frmAlertsDealsAndSecurity", function() {
    return function(controller) {
        function addWidgetsfrmAlertsDealsAndSecurity() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
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
            customHeader.lblLocateUs.text = "Security / Deals Alerts";
            flxHeader.add(customHeader);
            var flxBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlf9f9f9",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxBodyTxt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxBodyTxt",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyTxt.setDefaultUnit(kony.flex.DP);
            var lblBodyTxt = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblBodyTxt",
                "isVisible": true,
                "skin": "sknLblalertA0A0A0",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.AlertsDealsAndSecurity.BodyTxt\")",
                "textStyle": {},
                "width": "320dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxBodyTxt.add(lblBodyTxt);
            var flxBankIDChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxBankIDChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "f9f9",
                "top": "100dp",
                "width": "100%"
            }, {}, {});
            flxBankIDChange.setDefaultUnit(kony.flex.DP);
            var lblBankIDChange = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBankIDChange",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
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
            var flxShadowOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowOne",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowOne.setDefaultUnit(kony.flex.DP);
            flxShadowOne.add();
            var flxToggleBankIDChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleBankIDChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxToggleBankIDChange.setDefaultUnit(kony.flex.DP);
            var imgSwitchBankIDChange = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchBankIDChange",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToggleBankIDChange.add(imgSwitchBankIDChange);
            flxBankIDChange.add(lblBankIDChange, flxShadowOne, flxToggleBankIDChange);
            var flxPasswordChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxPasswordChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "f9f9",
                "top": "145dp",
                "width": "100%"
            }, {}, {});
            flxPasswordChange.setDefaultUnit(kony.flex.DP);
            var lblPasswordChange = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPasswordChange",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
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
            var flxShadowTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowTwo.setDefaultUnit(kony.flex.DP);
            flxShadowTwo.add();
            var flxTogglePasswordChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxTogglePasswordChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxTogglePasswordChange.setDefaultUnit(kony.flex.DP);
            var imgSwitchPasswordChange = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchPasswordChange",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTogglePasswordChange.add(imgSwitchPasswordChange);
            flxPasswordChange.add(lblPasswordChange, flxShadowTwo, flxTogglePasswordChange);
            var flxPasswordExpired = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxPasswordExpired",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "f9f9",
                "top": "190dp",
                "width": "100%"
            }, {}, {});
            flxPasswordExpired.setDefaultUnit(kony.flex.DP);
            var lblPasswordExpired = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPasswordExpired",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
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
            var flxShadowthree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowthree",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowthree.setDefaultUnit(kony.flex.DP);
            flxShadowthree.add();
            var flxTogglePasswordExpired = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxTogglePasswordExpired",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxTogglePasswordExpired.setDefaultUnit(kony.flex.DP);
            var imgSwitchPasswordExpired = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchPasswordExpired",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTogglePasswordExpired.add(imgSwitchPasswordExpired);
            flxPasswordExpired.add(lblPasswordExpired, flxShadowthree, flxTogglePasswordExpired);
            var flxAddressOrPhoneChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxAddressOrPhoneChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "f9f9",
                "top": "235dp",
                "width": "100%"
            }, {}, {});
            flxAddressOrPhoneChange.setDefaultUnit(kony.flex.DP);
            var lblAddressOrPhoneChange = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAddressOrPhoneChange",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
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
            var flxShadowFour = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowFour",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowFour.setDefaultUnit(kony.flex.DP);
            flxShadowFour.add();
            var flxToggleAddressOrPhoneChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleAddressOrPhoneChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxToggleAddressOrPhoneChange.setDefaultUnit(kony.flex.DP);
            var imgSwitchAddressOrPhoneChange = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchAddressOrPhoneChange",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToggleAddressOrPhoneChange.add(imgSwitchAddressOrPhoneChange);
            flxAddressOrPhoneChange.add(lblAddressOrPhoneChange, flxShadowFour, flxToggleAddressOrPhoneChange);
            var flxNewPayeeAdded = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxNewPayeeAdded",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "f9f9",
                "top": "280dp",
                "width": "100%"
            }, {}, {});
            flxNewPayeeAdded.setDefaultUnit(kony.flex.DP);
            var lblNewPayeeAdded = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNewPayeeAdded",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
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
            var flxShadowFive = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowFive",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowFive.setDefaultUnit(kony.flex.DP);
            flxShadowFive.add();
            var flxToggleNewPayeeAdded = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleNewPayeeAdded",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxToggleNewPayeeAdded.setDefaultUnit(kony.flex.DP);
            var imgSwitchNewPayeeAdded = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchNewPayeeAdded",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToggleNewPayeeAdded.add(imgSwitchNewPayeeAdded);
            flxNewPayeeAdded.add(lblNewPayeeAdded, flxShadowFive, flxToggleNewPayeeAdded);
            var flxPayeeDetailsUpdated = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxPayeeDetailsUpdated",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "f9f9",
                "top": "325dp",
                "width": "100%"
            }, {}, {});
            flxPayeeDetailsUpdated.setDefaultUnit(kony.flex.DP);
            var lblPayeeDetailsUpdated = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPayeeDetailsUpdated",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
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
            var flxShadowSix = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowSix",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowSix.setDefaultUnit(kony.flex.DP);
            flxShadowSix.add();
            var flxTogglePayeeDetailsUpdated = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxTogglePayeeDetailsUpdated",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxTogglePayeeDetailsUpdated.setDefaultUnit(kony.flex.DP);
            var imgSwitchPayeeDetailsUpdated = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchPayeeDetailsUpdated",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTogglePayeeDetailsUpdated.add(imgSwitchPayeeDetailsUpdated);
            flxPayeeDetailsUpdated.add(lblPayeeDetailsUpdated, flxShadowSix, flxTogglePayeeDetailsUpdated);
            var flxNewDealsAvailable = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxNewDealsAvailable",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "f9f9",
                "top": "100dp",
                "width": "100%"
            }, {}, {});
            flxNewDealsAvailable.setDefaultUnit(kony.flex.DP);
            var lblNewDealsAvailable = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNewDealsAvailable",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
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
            var flxShadowSeven = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowSeven",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowSeven.setDefaultUnit(kony.flex.DP);
            flxShadowSeven.add();
            var flxToggleNewDealsAvailable = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleNewDealsAvailable",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxToggleNewDealsAvailable.setDefaultUnit(kony.flex.DP);
            var imgSwitchNewDealsAvailable = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchNewDealsAvailable",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToggleNewDealsAvailable.add(imgSwitchNewDealsAvailable);
            flxNewDealsAvailable.add(lblNewDealsAvailable, flxShadowSeven, flxToggleNewDealsAvailable);
            var flxDealsExpiringInOneday = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxDealsExpiringInOneday",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "f9f9",
                "top": "145dp",
                "width": "100%"
            }, {}, {});
            flxDealsExpiringInOneday.setDefaultUnit(kony.flex.DP);
            var lblDealsExpiringInOneDay = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDealsExpiringInOneDay",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Label",
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
            var flxShadowEight = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowEight",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknflxe0e0e0Radius20px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowEight.setDefaultUnit(kony.flex.DP);
            flxShadowEight.add();
            var flxToggleDealsExpiringInOneday = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleDealsExpiringInOneday",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "152dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxToggleDealsExpiringInOneday.setDefaultUnit(kony.flex.DP);
            var imgSwitchDealsExpiringInOneday = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitchDealsExpiringInOneday",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "active.png",
                "top": "14dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToggleDealsExpiringInOneday.add(imgSwitchDealsExpiringInOneday);
            flxDealsExpiringInOneday.add(lblDealsExpiringInOneDay, flxShadowEight, flxToggleDealsExpiringInOneday);
            flxBody.add(flxBodyTxt, flxBankIDChange, flxPasswordChange, flxPasswordExpired, flxAddressOrPhoneChange, flxNewPayeeAdded, flxPayeeDetailsUpdated, flxNewDealsAvailable, flxDealsExpiringInOneday);
            this.add(flxHeader, flxBody);
        };
        return [{
            "addWidgets": addWidgetsfrmAlertsDealsAndSecurity,
            "enabledForIdleTimeout": true,
            "id": "frmAlertsDealsAndSecurity",
            "init": controller.AS_Form_d3a049044039423e9bf8ea17164d319a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_iedb57cabd7345ecb47b6b980ead5b13,
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.AlertsDealsAndSecurity.Title\")"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "inTransitionConfig": {
                "formTransition": "none"
            },
            "outTransitionConfig": {
                "formTransition": "none"
            },
            "retainScrollPosition": false
        }]
    }
});