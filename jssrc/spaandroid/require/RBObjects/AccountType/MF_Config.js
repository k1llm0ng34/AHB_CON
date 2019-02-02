define([], function() {
    var mappings = {
        "TypeDescription": "TypeDescription",
        "TypeID": "TypeID",
    };
    Object.freeze(mappings);
    var typings = {
        "TypeDescription": "string",
        "TypeID": "string",
    }
    Object.freeze(typings);
    var primaryKeys = [];
    Object.freeze(primaryKeys);
    var config = {
        mappings: mappings,
        typings: typings,
        primaryKeys: primaryKeys,
        serviceName: "RBObjects",
        tableName: "AccountType"
    };
    Object.freeze(config);
    return config;
})