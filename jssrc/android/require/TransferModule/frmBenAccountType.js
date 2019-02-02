define("TransferModule/frmBenAccountType", function() {
    return function(controller) {
        function addWidgetsfrmBenAccountType() {
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
                "zIndex": 1
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
            customHeader.btnRight.text = "CANCEL";
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Account Type";
            flxHeader.add(customHeader);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var btnCheckingAcc = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnOnBoardingOptionsActive",
                "height": "40dp",
                "id": "btnCheckingAcc",
                "isVisible": true,
                "left": "66dp",
                "skin": "sknBtnOnBoardingOptionsInActive",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [3, 0, 3, 0],
                "paddingInPixel": false
            }, {});
            var btnSavingAccount = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnOnBoardingOptionsActive",
                "height": "40dp",
                "id": "btnSavingAccount",
                "isVisible": true,
                "left": "66dp",
                "skin": "sknBtnOnBoardingOptionsInActive",
                "text": kony.i18n.getLocalizedString("kony.mb.addBen.savingAcc"),
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [3, 0, 3, 0],
                "paddingInPixel": false
            }, {});
            var btnLoanAcc = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnOnBoardingOptionsActive",
                "height": "40dp",
                "id": "btnLoanAcc",
                "isVisible": true,
                "left": "66dp",
                "skin": "sknBtnOnBoardingOptionsInActive",
                "text": kony.i18n.getLocalizedString("kony.mb.addBen.loanAcc"),
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [3, 0, 3, 0],
                "paddingInPixel": false
            }, {});
            var btnFdAccount = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnOnBoardingOptionsActive",
                "height": "40dp",
                "id": "btnFdAccount",
                "isVisible": true,
                "left": "66dp",
                "skin": "sknBtnOnBoardingOptionsInActive",
                "text": kony.i18n.getLocalizedString("kony.mb.addBen.FDAcc"),
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [3, 0, 3, 0],
                "paddingInPixel": false
            }, {});
            flxMain.add(btnCheckingAcc, btnSavingAccount, btnLoanAcc, btnFdAccount);
            this.add(flxHeader, flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmBenAccountType,
            "enabledForIdleTimeout": true,
            "id": "frmBenAccountType",
            "init": controller.AS_Form_b4e16fc0ef03447883388ab9e1155220,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_bb88c2f4cc1c4744995016d6ce86015f,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.enroll.accountType")
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