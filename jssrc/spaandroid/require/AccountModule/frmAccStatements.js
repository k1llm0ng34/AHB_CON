define("AccountModule/frmAccStatements", function() {
    return function(controller) {
        function addWidgetsfrmAccStatements() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 30
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
            customHeader.btnRight.text = "CANCEL";
            customHeader.btnRight.onClick = controller.AS_Button_af97396e008646d4ad75cc38f42be800;
            customHeader.flxBack.isVisible = true;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Account Statements";
            flxHeader.add(customHeader);
            var flxAccountInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxAccountInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_dbeca30be178441eb16bb308d67e11bd,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 400
            }, {}, {});
            flxAccountInfo.setDefaultUnit(kony.flex.DP);
            var flxArrow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxArrow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onTouchStart": controller.AS_FlexContainer_h5c9d53e0a6e471abbcf3cb45c4369aa,
                "right": "17dp",
                "skin": "slFbox",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxArrow.setDefaultUnit(kony.flex.DP);
            var imgArrow = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "imgArrow",
                "isVisible": true,
                "skin": "slImage",
                "src": "arrowdown.png",
                "width": "10dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxArrow.add(imgArrow);
            var flxAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxAccount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccount.setDefaultUnit(kony.flex.DP);
            var lblAccount = new kony.ui.Label({
                "centerY": "65%",
                "id": "lblAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.accounts.account\")",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblColon = new kony.ui.Label({
                "centerY": "65%",
                "id": "lblColon",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbla0a0a022px",
                "text": ":",
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
            var lblAccValue = new kony.ui.Label({
                "centerY": "65%",
                "id": "lblAccValue",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl424242SSP26px",
                "text": "My Checking…2343",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxAccount.add(lblAccount, lblColon, lblAccValue);
            var flxShow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxShow",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "50%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShow.setDefaultUnit(kony.flex.DP);
            var lblShow = new kony.ui.Label({
                "centerY": "35%",
                "id": "lblShow",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.show\")",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblColon2 = new kony.ui.Label({
                "centerY": "35%",
                "id": "lblColon2",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbla0a0a022px",
                "text": ":",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblShowValue = new kony.ui.Label({
                "centerY": "35%",
                "id": "lblShowValue",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl0095e422px",
                "text": "2018 STATEMENTS",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxShow.add(lblShow, lblColon2, lblShowValue);
            flxAccountInfo.add(flxArrow, flxAccount, flxShow);
            var flxSelectYear = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "76dp",
                "id": "flxSelectYear",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "55dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectYear.setDefaultUnit(kony.flex.DP);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "110dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxStatementYr1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxStatementYr1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatementYr1.setDefaultUnit(kony.flex.DP);
            var lblYear1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblYear1",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknLblda8b08SSPReg22px",
                "text": "2018 Statements",
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
            flxStatementYr1.add(lblYear1);
            var flxSepertor2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepertor2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "110dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSepertor2.setDefaultUnit(kony.flex.DP);
            flxSepertor2.add();
            var flxStatementYr2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxStatementYr2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatementYr2.setDefaultUnit(kony.flex.DP);
            var lblYear2 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblYear2",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "2017 Statements",
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
            flxStatementYr2.add(lblYear2);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "110dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var flxStatementYr3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxStatementYr3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatementYr3.setDefaultUnit(kony.flex.DP);
            var lblYear3 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblYear3",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "2018 Statements",
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
            flxStatementYr3.add(lblYear3);
            var flxSeperator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "110dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator4.setDefaultUnit(kony.flex.DP);
            flxSeperator4.add();
            var flxStatementYr4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxStatementYr4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatementYr4.setDefaultUnit(kony.flex.DP);
            var lblYear4 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblYear4",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "2018 Statements",
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
            flxStatementYr4.add(lblYear4);
            var flxSeperator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "110dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator5.setDefaultUnit(kony.flex.DP);
            flxSeperator5.add();
            flxSelectYear.add(flxSeperator, flxStatementYr1, flxSepertor2, flxStatementYr2, flxSeperator3, flxStatementYr3, flxSeperator4, flxStatementYr4, flxSeperator5);
            var flxSegStatements = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "60dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxSegStatements",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onTouchStart": controller.AS_FlexScrollContainer_a802cb13639b416e96351b677d3d1c27,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "115dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxSegStatements.setDefaultUnit(kony.flex.DP);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var segStatements = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblStatementMonth": "January 2018"
                }, {
                    "lblStatementMonth": "February 2018"
                }, {
                    "lblStatementMonth": "March 2018"
                }, {
                    "lblStatementMonth": "April 2018"
                }, {
                    "lblStatementMonth": "May 2018"
                }, {
                    "lblStatementMonth": "June 2018"
                }, {
                    "lblStatementMonth": "July 2018"
                }],
                "groupCells": false,
                "id": "segStatements",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxStatements",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f1f1f100",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "5dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxStatements": "flxStatements",
                    "lblStatementMonth": "lblStatementMonth"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegStatements.add(flxShadow, segStatements);
            var flxNoStatements = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": 200,
                "id": "flxNoStatements",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "top": "200dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoStatements.setDefaultUnit(kony.flex.DP);
            var flxSeperator7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator7",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator7.setDefaultUnit(kony.flex.DP);
            flxSeperator7.add();
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.accdetails.noStatementMsg\")",
                "textStyle": {},
                "top": "35%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxNoStatements.add(flxSeperator7, lblNoTransaction);
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
                "zIndex": 3
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
            customFooter.flxBillSelected.isVisible = false;
            customFooter.flxMoreSelect.isVisible = false;
            customFooter.flxTransferSel.isVisible = false;
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
            this.add(flxHeader, flxAccountInfo, flxSelectYear, flxSegStatements, flxNoStatements, flxFooter);
        };
        return [{
            "addWidgets": addWidgetsfrmAccStatements,
            "enabledForIdleTimeout": true,
            "id": "frmAccStatements",
            "init": controller.AS_Form_da6cda809b7d4365bb459548a45fa23d,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_ecdcfd3b9a8642fdbd8c3e6c243dff4b,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.AccStatements.Title\")"
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