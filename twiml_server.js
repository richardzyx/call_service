/**
 *
 * @localhost:3000
 * This is the TwiML URL server that used Promise to get reddit in json and generate the Twilio readable XML
 * WARN: this can't be run on localhost which is against Twilio API
 */

var express = require('express');
var httputil = require('./util/httpUtil');
var app = express();

var twilio = require('twilio');
var resp = new twilio.TwimlResponse();

var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', function(request, response) {
     httputil.sendHttpsAndParseJSON('GET', 'https://www.reddit.com/.json', {"Content-Type": "application/json"},
                {}, 'utf-8').then(
        function onFulfilled(result){
            var title = result.data.children[0].data.title;
            resp.say('Hey this is Richard Zhang! Here is the top reddit of the day');
            resp.say(title, {
                voice:'woman',
                language:'en-gb'
            });

            //console.log(resp.toString()); Uncomment to debug

            response.send(resp.toString());
        }, function onReject(err){
             console.log(err);
         }
     ).catch(function(err){
         console.error(err.stack);
         if(err.result){
             return {
                 result:err.result,
                 message:err.message
             }
         }
         else{
             return {
                 result:99,
                 message:"Unknown Error"
             }
         }
     });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});