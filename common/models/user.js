var path = require('path');
var config = require('../../server/config.json');
var app = require('../../server/server');
// var User = app.models.User;

module.exports = function(user) {
    
    user.on('resetPasswordRequest', function (info) {
        var userEmail = info.email; // the email of the requested user
        var token = info.accessToken.id; // the temp access token to allow password reset
        console.log(info);
    });

    user.newUser = function(username, email, password, cb) {
        user.create({"username": username, "email": email, "password": password}, function(err, user) {
            if (!err) {
                console.log(user);
                cb(null, user);
            }
            else {
                console.log("there was an error...");
                cb(new Error("There was an " + err + " while creating your new user profile."));
            }
        });
    },
    
    //send verification email after registration
    user.afterRemote('newUser', function(cxt, user, next) {
        console.log('> user.afterRemote triggered');
        
        var options = {
          type: 'email',
          to: user.response.email,
          from: 'exquisitecadaver.noreply@gmail.com',
          subject: 'Thanks for registering!',
          template: path.resolve(__dirname, '../../server/views/verify.ejs'),
          redirect: '/',
          user: user
        };
        user.verify(options, function(err, response, next) {
            console.log(" in verify function");
            if (err) {
                next(err);
                return;
            }
            console.log('> verification email sent:', response);
            // console.log(response);
            cxt.res.render('response', {
                title: 'Confirm your registration to Exquisite Cadaver',
                content: 'Please check your email and click on the verification link '
                  + 'before logging in.',
                redirectTo: '/',
                redirectToLinkText: 'Log in'
            });
        });
    });

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
    
    // user.context = function(cb) {
    //     var ctx = loopback.getCurrentContext();
    //     var accessToken = ctx.get('accessToken');
    //     console.log('accessToken: ', accessToken);
    //     cb(null);
    // },
    
    // user.remoteMethod(
    //     "context", {
    //         returns: {
    //             arg: 'response',
    //             type: 'object'
    //         }
    //     });
};


    // user.beforeRemote('newUser', function(cxt, next){
    //     user.find({where: {"username": cxt.username}}, function(err, object) {
    //         console.log(object);
    //         if (!err) {
    //             if (!object) {
    //                 next();
    //             }
    //             else {
    //                 response = 'Someone has already registered with this username.';
    //                 console.log(response);
    //             }
    //         }
    //         else {
    //             response = 'There was an ' + err;
    //             console.log(response);
    //         }
    //     });
    // });