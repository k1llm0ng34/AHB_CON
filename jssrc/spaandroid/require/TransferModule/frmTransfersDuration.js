define("TransferModule/frmTransfersDuration", function() {
    return function(controller) {
        function addWidgetsfrmTransfersDuration() {
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
                "zIndex": 8
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
            customHeader.flxBack.onClick = controller.AS_FlexContainer_jc5a9d1d3d2e4db4a60d52e2e6bf0f36;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Duration";
            flxHeader.add(customHeader);
            var flxSetFrequency = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxSetFrequency",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSetFrequency.setDefaultUnit(kony.flex.DP);
            var segDuration = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblFrequency": "kony.i18n.getLocalizedString(\"kony.mb.frequency.DateRange\")"
                }, {
                    "lblFrequency": "kony.i18n.getLocalizedString(\"kony.mb.frequency.NumberofRecurrence\")"
                }],
                "groupCells": false,
                "id": "segDuration",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxFrequency",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "10dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxFrequency": "flxFrequency",
                    "flxMain": "flxMain",
                    "lblFrequency": "lblFrequency"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnDateRange = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "slButtonGlossRed",
                "height": "40dp",
                "id": "btnDateRange",
                "isVisible": false,
                "skin": "sknBtnffffff424242SSPReg28px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.frequency.DateRange\")",
                "top": "25dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnNumberOfOccurances = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "slButtonGlossRed",
                "height": "40dp",
                "id": "btnNumberOfOccurances",
                "isVisible": false,
                "skin": "sknBtnffffff424242SSPReg28px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.frequency.NumberofRecurrence\")",
                "top": "10dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnContinueUntilCancel = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "slButtonGlossRed",
                "height": "40dp",
                "id": "btnContinueUntilCancel",
                "isVisible": false,
                "skin": "sknBtnffffff424242SSPReg28px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.frequency.ContinueUntilCancel\")",
                "top": "10dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSetFrequency.add(segDuration, btnDateRange, btnNumberOfOccurances, btnContinueUntilCancel);
            this.add(flxHeader, flxSetFrequency);
        };
        return [{
            "addWidgets": addWidgetsfrmTransfersDuration,
            "enabledForIdleTimeout": true,
            "id": "frmTransfersDuration",
            "init": controller.AS_Form_fbc38f2b3fc64c27b644bea6738128f5,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_e965c73e2e3340f88d5fd38dbea418d9,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.Transfers.Duration\")"
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