var path = require('path');
var app = require('../../server/server');
var User = app.models.User;
var response;

module.exports = function(user) {

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

    user.newUser = function(username, email, password, cb) {
        user.create({"username": username, "email": email, "password": password}, function(err, user) {
            if (!err) {
                response = "New user successfully created";
                cb(null, response);
                
            }
            else {
                console.log("there was an error...");
                cb(new Error("There was an " + err + " while creating your new user profile."));
            }
        });
    };
    
    //send verification email after registration
//     user.afterRemote('newUser', function(cxt, res) {
//         console.log(cxt.results.response.email);
//         console.log(user);
//         var options = {
//           type: 'email',
//           to: cxt.results.response.email,
//           from: 'exquisitecadaver.noreply@gmail.com',
//           subject: 'Thanks for registering!',
//           template: path.resolve(__dirname, '../../server/views/confirmation.ejs'),
//           redirect: '/verified',
//           user: user
//         };
//         User.verify(options, function(err, response) {
//             if (err) {
//                 console.log(err); //next?
//                 return;
//             }
//             console.log('> verification email sent:', response);
//             // console.log(response);
//             cxt.res.render('response', {
//                 title: 'Confirm your registration to Exquisite Cadaver',
//                 content: 'Please check your email and click on the verification link '
//                   + 'before logging in.',
//                 redirectTo: '/',
//                 redirectToLinkText: 'Log in'
//           });
//     });
//   });

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
                type: 'string'
            }
        }
    );

};
