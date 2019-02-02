define("SettingsModule/frmAlertsAccountList", function() {
    return function(controller) {
        function addWidgetsfrmAlertsAccountList() {
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
            customHeader.lblLocateUs.text = "Account Alerts";
            flxHeader.add(customHeader);
            var flxBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": 0,
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
                "skin": "sknFlxScrlffffff",
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
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyTxt.setDefaultUnit(kony.flex.DP);
            var lblBodyTxt = new kony.ui.Label({
                "id": "lblBodyTxt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLblalertA0A0A0",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Alerts.AlertsListInfo\")",
                "textStyle": {},
                "top": "17dp",
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
            var flxAlert = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxAlert",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "f9f9",
                "top": 65,
                "width": "100%"
            }, {}, {});
            flxAlert.setDefaultUnit(kony.flex.DP);
            var lblTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPRegular124pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Alerts.AlertsRequired\")",
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
            var lblStatus = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStatus",
                "isVisible": false,
                "right": "40dp",
                "skin": "sknLbla0a0a022px",
                "text": "Lable",
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
            var imgSwitch = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSwitch",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "active.png",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
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
            flxAlert.add(lblTitle, lblStatus, imgSwitch, flxShadowOne);
            var segAlert = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgArrow": "chevron.png",
                    "lblAlertStatus": "Label",
                    "lblSubTitle": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblAlertStatus": "Label",
                    "lblSubTitle": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblAlertStatus": "Label",
                    "lblSubTitle": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblAlertStatus": "Label",
                    "lblSubTitle": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblAlertStatus": "Label",
                    "lblSubTitle": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblAlertStatus": "Label",
                    "lblSubTitle": "Label",
                    "lblTitle": "Label"
                }],
                "groupCells": false,
                "id": "segAlert",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "CopyflxSettings0c389a41e15234d",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "125dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "CopyflxSettings0c389a41e15234d": "CopyflxSettings0c389a41e15234d",
                    "flxShadowOne": "flxShadowOne",
                    "imgArrow": "imgArrow",
                    "lblAlertStatus": "lblAlertStatus",
                    "lblSubTitle": "lblSubTitle",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBody.add(flxBodyTxt, flxAlert, segAlert);
            this.add(flxHeader, flxBody);
        };
        return [{
            "addWidgets": addWidgetsfrmAlertsAccountList,
            "enabledForIdleTimeout": true,
            "id": "frmAlertsAccountList",
            "init": controller.AS_Form_b147749e99d3499b8cda81d679f39dbb,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_hec78f005bcb4037ac88cda4c04db7d6,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.AlertsAccountList.Title\")"
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