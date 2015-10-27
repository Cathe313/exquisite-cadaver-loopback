// var app = require('../../server/server');

module.exports = function(Lines) {
    Lines.newline = function(lineNumber, storyId, lineText, userId, cb) {

        var date = new Date();
        // var Stories = app.models.Lines;

        Lines.create( {"date": date, "storiesId": storyId, "lineText": lineText, "lineNumber": lineNumber, "userId": userId}, function(err, obj){
            if (!err) {
                cb(null, obj);
            }
            else {
                console.log('There as an ' + err);
            }
        });    

    };
    Lines.remoteMethod(
        'newline', {
            accepts: [{
                arg: 'lineNumber',
                type: 'number',
                required: true
            }, {
                arg: 'storyId',
                type: 'number',
                required: true
            }, {
                arg: 'lineText',
                type: 'string',
                required: true
            }, {
                arg: 'userId',
                type: 'number',
                required: true
            }],
            returns: {
                arg: 'response',
                type: 'string'
            }
        }
    );
};