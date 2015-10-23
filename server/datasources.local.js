var url = require('url');
var mysql_url = process.env.CLEARDB_DATABASE_URL;
var parsed_url = url.parse(mysql_url);

var database = parsed_url.pathname.substring(1);
var auth = parsed_url.auth.split(':');
var username = auth[0];
var password = auth[1];

module.exports = {
    cadaverDatabase: {
        username: username,
        password: password,
        hostname: parsed_url.hostname,
        database: database
    },
    // stormpath: {
    //     name: "stormpath",
    //     connector: "stormpath",
    //     apiKeyId: process.env.STORMPATH_KEY_ID,
    //     apiKeySecret: process.env.STORMPATH_KEY_SEC,
    //     applicationHref: "https://api.stormpath.com/v1/applications/" + process.env.STORMPATH_KEY_HREF
    // }
};

//From the json file:
// "database": "cadavers",
// "username": "cathe313",
// "hostname": "0.0.0.0"
