var call_service = require('./lib/call_service').makeCall;
var later = require('later');

var sched = later.parse.text('at 8:00 pm');//The default is UTC

// execute logTime
var timer = later.setTimeout(logTime, sched);

// one can easily expand and increase modularity by passing objects instead of one target phone number
function logTime() {
    call_service('+19785909760');
}