/**
 * Service centric design; this module uses Twilio API and make the call using the config files to the given target
 * at the given time
 */
var config = require('./db/db_client').config;

var client = require('twilio')(config.SID, config.token);

exports.makeCall = function (target){//Used Twilio's Promise API which is based on Q not native JS ES6 Promise
    client.makeCall({
        to:target, // a number to call
        from: config.from_number, // a Twilio number you own
        url:'http://45.55.233.181:3000' // A URL containing TwiML instructions for the call; I used my own digital ocean server
    }).then(function onFulfilled(call) {
        console.log('Call success! Call SID: '+call.sid);
    }, function onReject(error) {
        console.error('Call failed!  Reason: '+error.message);
    });//I usually do a whole bunch of error checking on error stacks and tracing; but as given by Twilio doc there is 'almost' no
        //other way of unchecked failure.
};