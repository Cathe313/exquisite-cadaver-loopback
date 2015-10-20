var url = require('url');
var mysql_url = process.env.CLEARDB_DATABASE_URL;
// var parsed = url.parse(mysql_url);

// var database = parsed.pathname.substring(1);

// if (parsed.password === false) {
//     var password = null;
// }
// else {
//     password = parsed.password;
// }

module.exports = {
    cadaverDatabase: {
        username: 'cathe313',//parsed.auth,
        //password: parsed.password,
        hostname: "0.0.0.0",//parsed.hostname,
        database: "cadavers"//database
    }
};

//From the json file:
// "database": "cadavers",
// "username": "cathe313",
// "hostname": "0.0.0.0"
