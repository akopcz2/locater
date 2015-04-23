var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});
server.listen(8080);

// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var utils = require( "twilio" );

var accountSid = 'AC1bf28c36aa8c023293404d30e6688e9d';
var authToken = 'HIDTHEAUTHTOKEN';
var client = require('twilio')(accountSid, authToken);
 
client.messages.create({
    body: "I am HOME!",
    to: "YOURNUMBER",
    from: "TWILIONUMBER",
}, function(err, message) {
    process.stdout.write(message.sid);
});
