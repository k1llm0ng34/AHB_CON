define(function() {
    return function(controller) {
        var areachart = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "areachart",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyCopyslFbox0f92765b801484b",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        areachart.setDefaultUnit(kony.flex.DP);
        var areaChartBrowser = new kony.ui.Browser({
            "centerX": "50%",
            "centerY": "50%",
            "detectTelNumber": true,
            "enableZoom": false,
            "height": "100%",
            "id": "areaChartBrowser",
            "isVisible": true,
            "requestURLConfig": {
                "URL": "",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        areachart.add(areaChartBrowser);
        return areachart;
    }
})