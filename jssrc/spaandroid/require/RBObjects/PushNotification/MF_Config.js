define([], function() {
    var mappings = {
        "XKonyAuthorization": "XKonyAuthorization",
        "appid": "appid",
        "lat": "lat",
        "lon": "lon",
        "msgtext": "msgtext",
        "password": "password",
        "placeID": "placeID",
        "title": "title",
        "type": "type",
        "ufid": "ufid",
        "userid": "userid",
    };
    Object.freeze(mappings);
    var typings = {
        "XKonyAuthorization": "string",
        "appid": "string",
        "lat": "string",
        "lon": "string",
        "msgtext": "string",
        "password": "string",
        "placeID": "string",
        "title": "string",
        "type": "string",
        "ufid": "string",
        "userid": "string",
    }
    Object.freeze(typings);
    var primaryKeys = [];
    Object.freeze(primaryKeys);
    var config = {
        mappings: mappings,
        typings: typings,
        primaryKeys: primaryKeys,
        serviceName: "RBObjects",
        tableName: "PushNotification"
    };
    Object.freeze(config);
    return config;
})