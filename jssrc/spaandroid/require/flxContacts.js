define("flxContacts", function() {
    return function(controller) {
        var flxContacts = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "51dp",
            "id": "flxContacts",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxContacts.setDefaultUnit(kony.flex.DP);
        var flxName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55%",
            "id": "flxName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1000
        }, {}, {});
        flxName.setDefaultUnit(kony.flex.DP);
        var lblFirstName = new kony.ui.Label({
            "id": "lblFirstName",
            "isVisible": true,
            "left": "0dp",
            "right": "5dp",
            "skin": "lblBodyText",
            "text": "Label",
            "textStyle": {},
            "top": "7dp",
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
        var lblLastName = new kony.ui.Label({
            "id": "lblLastName",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblBodyText",
            "text": "Label",
            "textStyle": {},
            "top": "7dp",
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
        flxName.add(lblFirstName, lblLastName);
        var lblPhoneNo = new kony.ui.Label({
            "bottom": "7dp",
            "id": "lblPhoneNo",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPReg22px",
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
        var flxSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknFlxf1f1f1",
            "top": "50dp",
            "zIndex": 1000
        }, {}, {});
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        flxContacts.add(flxName, lblPhoneNo, flxSeperator);
        return flxContacts;
    }
})