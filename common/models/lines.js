// var app = require('../../server/server');

module.exports = function(Lines) {
    Lines.newline = function(lineNumber, storyId, lineText, cb) {

        var date = new Date();
        // var Lines = app.models.Lines;

        Lines.create( {"date": date, "storiesId": storyId, "lineText": lineText, "lineNumber": lineNumber}, function(err, obj){
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
            }],
            returns: {
                arg: 'response',
                type: 'string'
            }
        }
    );
};