define("ManageCardsModule/frmCardMngReasons", function() {
    return function(controller) {
        function addWidgetsfrmCardMngReasons() {
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
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            customHeader.btnRight.isVisible = true;
            customHeader.btnRight.text = "CANCEL";
            customHeader.height = "100%";
            customHeader.zIndex = 1;
            customHeader.flxBack.isVisible = true;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Requesting Pin Change";
            flxHeader.add(customHeader);
            var flxReasonsPinChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxReasonsPinChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReasonsPinChange.setDefaultUnit(kony.flex.DP);
            var flxPinChangeTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxPinChangeTitle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPinChangeTitle.setDefaultUnit(kony.flex.DP);
            var lblReasonPinChange = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "47%",
                "id": "lblReasonPinChange",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.cardManage.reasonPinChange\")",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxPinChangeTitle.add(lblReasonPinChange);
            var segReasonsPinChange = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblReason": "kony.i18n.getLocalizedString(\"kony.mb.CardMng.PINCompromised\")"
                }, {
                    "lblReason": "kony.i18n.getLocalizedString(\"kony.mb.CardMng.ForgotOldPIN\")"
                }, {
                    "lblReason": "kony.i18n.getLocalizedString(\"kony.mb.CardMng.OtherReasonPIN\")"
                }],
                "groupCells": false,
                "id": "segReasonsPinChange",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_g5b7665cf60347a9b410d7cbb7c923c6,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxReasons",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff64",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "50dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxReasons": "flxReasons",
                    "lblReason": "lblReason"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReasonsPinChange.add(flxPinChangeTitle, segReasonsPinChange);
            var flxReasonsReplacingCard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxReasonsReplacingCard",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReasonsReplacingCard.setDefaultUnit(kony.flex.DP);
            var flxReplaceCardTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxReplaceCardTitle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxfafafa",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReplaceCardTitle.setDefaultUnit(kony.flex.DP);
            var lblReasonReplaceCard = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "47%",
                "id": "lblReasonReplaceCard",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.cardManage.reasonReplaceCard\")",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxReplaceCardTitle.add(lblReasonReplaceCard);
            var segReasonsReplaceCard = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblReason": "kony.i18n.getLocalizedString(\"kony.mb.CardMng.WishToUpgrade\")"
                }, {
                    "lblReason": "kony.i18n.getLocalizedString(\"kony.mb.CardMng.CardIsDamaged\")"
                }, {
                    "lblReason": "kony.i18n.getLocalizedString(\"kony.mb.CardMng.OtherReasonReplace\")"
                }],
                "groupCells": false,
                "id": "segReasonsReplaceCard",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_d7387896417f49e0b85ebbfaab8495e0,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxReasons",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff64",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "50dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxReasons": "flxReasons",
                    "lblReason": "lblReason"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReasonsReplacingCard.add(flxReplaceCardTitle, segReasonsReplaceCard);
            var flxReasonStolenCard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxReasonStolenCard",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReasonStolenCard.setDefaultUnit(kony.flex.DP);
            var flxStolenCardTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxStolenCardTitle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStolenCardTitle.setDefaultUnit(kony.flex.DP);
            var lblSelectReason = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "47%",
                "id": "lblSelectReason",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.cardManage.selectReason\")",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxStolenCardTitle.add(lblSelectReason);
            var segReasonsStolenCard = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblReason": "kony.i18n.getLocalizedString(\"kony.mb.cardManage.Stolen\")"
                }, {
                    "lblReason": "kony.i18n.getLocalizedString(\"kony.mb.cardManage.Lost\")"
                }],
                "groupCells": false,
                "id": "segReasonsStolenCard",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_bb655fcbbfad4811b54f1aea37a69fc1,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxReasons",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff64",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "50dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxReasons": "flxReasons",
                    "lblReason": "lblReason"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReasonStolenCard.add(flxStolenCardTitle, segReasonsStolenCard);
            var flxReasonsCancelCard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxReasonsCancelCard",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReasonsCancelCard.setDefaultUnit(kony.flex.DP);
            var flxCancelCardTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxCancelCardTitle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCancelCardTitle.setDefaultUnit(kony.flex.DP);
            var lblReasonCancelCard = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "47%",
                "id": "lblReasonCancelCard",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.cardManage.reasonCancelCard\")",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxCancelCardTitle.add(lblReasonCancelCard);
            var segReasonsCancelCard = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblReason": "kony.i18n.getLocalizedString(\"kony.mb.CardMng.PrivacyReason\")"
                }, {
                    "lblReason": "kony.i18n.getLocalizedString(\"kony.mb.CardMng.AnnualCharges\")"
                }, {
                    "lblReason": "kony.i18n.getLocalizedString(\"kony.mb.CardMng.OtherReasonCancel\")"
                }],
                "groupCells": false,
                "id": "segReasonsCancelCard",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_af7931f67cdf40358266b24da5b43b59,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxReasons",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff64",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "50dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxReasons": "flxReasons",
                    "lblReason": "lblReason"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReasonsCancelCard.add(flxCancelCardTitle, segReasonsCancelCard);
            this.add(flxHeader, flxReasonsPinChange, flxReasonsReplacingCard, flxReasonStolenCard, flxReasonsCancelCard);
        };
        return [{
            "addWidgets": addWidgetsfrmCardMngReasons,
            "enabledForIdleTimeout": true,
            "id": "frmCardMngReasons",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_f85242d9591b4c9cbf220625c7007c8b,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.cardManage.requestingPinChange\")"
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