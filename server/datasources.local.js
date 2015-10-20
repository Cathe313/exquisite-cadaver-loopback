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
    }
};

// console.log(username, password, database, parsed_url.hostname);

//From the json file:
// "database": "cadavers",
// "username": "cathe313",
// "hostname": "0.0.0.0"
