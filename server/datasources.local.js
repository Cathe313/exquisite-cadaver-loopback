var url = require('url');
var pass = require('./password/emailPassword.js');
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
    emailDs: {
    // name: "emailDs",
    // defaultForType: "mail",
    // connector: "mail",
      transports: [{
        type: "smtp",
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        tls: {
          // port: 587,
          "rejectUnauthorized": false
        },
        auth: {
          user: "exquisitecadaver.noreply@gmail.com",
          pass: pass.password
        }
      }]
    }
};

