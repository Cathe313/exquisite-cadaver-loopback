var app = require('../../server/server');

module.exports = function(Stories) {
    Stories.newstory = function(req, length, lineText, cb) {

        var date = new Date();
        var Lines = app.models.Lines;
        
        var userId = 1; //while we enable user login
        
        Stories.create( {"date": date, "rating":  0, "incomplete": true, "length": length}, function(err, storyObj) {
            if (!err) {
                Lines.create( {"date": date, "storiesId": storyObj.id, "lineText": lineText, "lineNumber": 1, "userId": userId}, function(err, obj){
                    if (!err) {
                        cb(null, storyObj);
                    }
                    else {
                        console.log('There as an ' + err + 'in the Lines function');
                    }
                });    
            }
            else {
                console.log('There as an ' + err + 'in the Stories function');
            }
            
            
        });
    };

    Stories.remoteMethod(
        'newstory', {
            accepts: [
            {
                arg: 'req',
                type: 'object',
                http: {
                    source: 'req'
                }
            },
            {
                arg: 'length',
                type: 'number',
                required: true
            }, {
                arg: 'lineText',
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
