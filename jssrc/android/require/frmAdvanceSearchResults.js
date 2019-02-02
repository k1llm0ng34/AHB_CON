define("frmAdvanceSearchResults", function() {
    return function(controller) {
        function addWidgetsfrmAdvanceSearchResults() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
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
            customSearchbox.flxSearch.isVisible = false;
            customSearchbox.tbxSearch.isVisible = false;
            customSearchbox.tbxSearch.placeholder = "Search ";
            customSearchbox.tbxSearch.top = "0dp";
            customSearchbox.tbxSearch.width = "70%";
            var flxDummySearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxDummySearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "skin": "sknFlxf1f1f1Radius4px",
                "top": "0dp",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxDummySearch.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "search.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSearchTransactions = new kony.ui.Label({
                "centerY": "49%",
                "id": "lblSearchTransactions",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblSSP55555522pxOp50",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.searchTransactions"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 0, 0, 0],
                "paddingInPixel": true
            }, {
                "textCopyable": false
            });
            flxDummySearch.add(imgSearchIcon, lblSearchTransactions);
            flxHeaderSearchbox.add(customSearchbox, flxDummySearch);
            var flxSearchResults = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxSearchResults",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "top": "40dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSearchResults.setDefaultUnit(kony.flex.DP);
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55%",
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
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
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.noTransactionMsg"),
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
            var segTransactions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [
                    [{
                            "imgUpArrow": "imagedrag.png",
                            "lblHeader": ""
                        },
                        [{
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "03/07/2018",
                            "lblTransaction": "Bill Pay to AT&T",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "11/10/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "02/26/2018",
                            "lblTransaction": "Bill Pay to AT&T",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "11/10/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "03/07/2018",
                            "lblTransaction": "Wire Trasfers to Stuvert",
                            "lblTransactionAmount": "-$83.54"
                        }]
                    ],
                    [{
                            "imgUpArrow": "imagedrag.png",
                            "lblHeader": ""
                        },
                        [{
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "03/07/2018",
                            "lblTransaction": "Bill Pay to AT&T",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "11/10/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "02/26/2018",
                            "lblTransaction": "Bill Pay to AT&T",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "11/10/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "03/07/2018",
                            "lblTransaction": "Wire Trasfers to Stuvert",
                            "lblTransactionAmount": "-$83.54"
                        }]
                    ]
                ],
                "groupCells": false,
                "height": "100%",
                "id": "segTransactions",
                "isVisible": true,
                "left": "0dp",
                "minHeight": "85%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTransactions",
                "scrollingEvents": {
                    "onReachingEnd": controller.AS_Segment_b79d2c112ccd4ceb91e5d74d70eb0354
                },
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": true,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTransactions": "flxTransactions",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "flxWrapper": "flxWrapper",
                    "imgIndicator": "imgIndicator",
                    "imgUpArrow": "imgUpArrow",
                    "lblDate": "lblDate",
                    "lblHeader": "lblHeader",
                    "lblTransaction": "lblTransaction",
                    "lblTransactionAmount": "lblTransactionAmount"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": true
            });
            flxSearchResults.add(flxNoTransactions, segTransactions);
            var flxBlueBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45%",
                "id": "flxBlueBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxBlueBg.setDefaultUnit(kony.flex.DP);
            flxBlueBg.add();
            this.add(flxHeaderSearchbox, flxSearchResults, flxBlueBg);
        };
        return [{
            "addWidgets": addWidgetsfrmAdvanceSearchResults,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmAdvanceSearchResults",
            "init": controller.AS_Form_g8aecb3b12f147a48c6d32c2adf6dd14,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_h7b35f64326141c1aa767618f4db23d4,
            "skin": "sknFrm1a98ffGradient10"
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
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});