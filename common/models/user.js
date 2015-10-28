var path = require('path');
var config = require('../../server/config.json');
var app = require('../../server/server');
// var dsConfig = require('../../server/datasources.local.js');
module.exports = function(user) {

    user.on('resetPasswordRequest', function(info) {
        var url = 'https://exquisitecadaver.net/reset?access_token=';
        var html = 'Click <a href="' + url + info.accessToken.id + '">here</a> to reset your password';

        user.app.models.Email.send({
            to: info.email,
            from: "Exquisite Cadaver <exquisitecadaver.noreply@gmail.com>",
            subject: 'Password reset',
            text: 'my text',
            html: html
        }, function(err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('> email sent successfully');
            }
        });
    });
    
    user.changePassword = function(token, newPassword, cb) {
        var AccessToken = user.app.models.AccessToken;
         
        AccessToken.find({where:{id:token}}, function(err, instance) {
            if (err) {
                console.log(err);
            }
            else {
                var userId = instance[0].userId;
                
                user.updateAll({id:userId}, {password:newPassword}, function(err, info){
                    if (!err) {
                        console.log(info);
                        cb(null, info);
                    }
                    else {
                        console.log(err);
                        cb(new Error('There was an error: ' + err));
                    }
                    
                });
                
            }
        });
    };


    user.newUser = function(username, email, password, cb) {
            user.create({
                "username": username,
                "email": email,
                "password": password
            }, function(err, user) {
                if (!err) {
                    // console.log(user);
                    //send verification email after registration
                    var url = 'http://' + config.host + ':' + config.port + '/';
                    var options = {
                        type: 'email',
                        to: user.email,
                        from: 'exquisitecadaver.noreply@gmail.com',
                        subject: 'Thanks for registering!',
                        template: path.resolve(__dirname, '../../server/views/verify.ejs'),
                        redirect: '/',
                        user: user
                    };
                    user.verify(options, function(err, response, next) {
                        if (err) {
                            next(err);
                            return;
                        }
                        console.log('> verification email sent:', response);
                        cb(null, user);
                    });
                }
                else {
                    console.log("There was an " + err + " while creating your new user profile.");
                    cb(new Error("There was an " + err + " while creating your new user profile."));
                }
            });
        },

        user.remoteMethod(
            'newUser', {
                accepts: [{
                    arg: 'username',
                    type: 'string',
                    required: true
                }, {
                    arg: 'email',
                    type: 'string',
                    required: true
                }, {
                    arg: 'password',
                    type: 'string',
                    required: true
                }],
                returns: {
                    arg: 'response',
                    type: 'object'
                }
            }
        );

    user.remoteMethod(
        'changePassword', {
            accepts: [{
                arg: 'token',
                type: 'string',
                required: true
            }, {
                arg: 'newPassword',
                type: 'string',
                required: true
            }],
            returns: {
                arg: 'response',
                type: 'object'
            }
        }
    );

};
